#include "InformationParser.h"
#include "MainMindow.h"
#include "ui_MainWindow.h"

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui_(new Ui::MainWindow)
{
    ui_->setupUi(this);
    connect(ui_->nextPageButton, SIGNAL(clicked()), this, SLOT(nextPageButtonClicked()));
    connect(ui_->pageBackwardsButton, SIGNAL(clicked()), this, SLOT(pageBackwardsButtonClicked()));
    connect(ui_->addMemberButton, SIGNAL(clicked()), this, SLOT(addMemberButtonClicked()));
    connect(ui_->removeMemberButton, SIGNAL(clicked()), this, SLOT(removeMemberButtonClicked()));
    setImage();
    ui_->listWidget->addItem("Remove this item");
}

MainWindow::~MainWindow()
{
    delete ui_;
}

void MainWindow::nextPageButtonClicked()
{
    ui_->stackedPages->setCurrentIndex(1);
}

void MainWindow::pageBackwardsButtonClicked()
{
    ui_->stackedPages->setCurrentIndex(0);
}

void MainWindow::addMemberButtonClicked()
{

}

void MainWindow::removeMemberButtonClicked()
{
    QListWidgetItem* selectedItem = ui_->listWidget->currentItem();
    if (selectedItem)
    {
        delete ui_->listWidget->takeItem(ui_->listWidget->currentRow());
    }
}

void MainWindow::setImage()
{
    //Update the image here
    // /Users/spencervanroessel/Documents/Solar Car/Development-Resources/Recruit-Training/Advanced-Recruit-Training/Viscomm-Teaser/images/solarCar.jpg
    QPixmap pixMap("/Users/spencervanroessel/Documents/Solar Car/Development-Resources/Recruit-Training/Advanced-Recruit-Training/Viscomm-Teaser/images/solarCar.png");
    ui_->imageLabel->setPixmap(pixMap);
    ui_->imageLabel->setScaledContents(true);
}

void MainWindow::updateInformation()
{
    InformationParser parser;
    if (parser.readJSON()) {
        ui_->ownerLabel->setText(parser.getOwner());
        ui_->carTypeLabel->setText(parser.getType());
        ui_->carNameLabel->setText(parser.getCarName());
        ui_->batteryPercentageLabel->setText(QString::number(parser.getBatteryPercentage()));
        ui_->colorLabel->setText(parser.getColor());
        ui_->locationLabel->setText(parser.getLocation());

        ui_->listWidget->clear();
        QList<TeamMember> teamMembers = parser.getMemberList();
        for (TeamMember member : teamMembers)
        {
            QString memberStr = "First Name: " + member.getFirstName() +
                               ", Last Name: " + member.getLastName() +
                               ", Graduation Year: " + member.getGradYear();

            QListWidgetItem* item = new QListWidgetItem(memberStr);
            ui_->listWidget->addItem(item);
        }
    }
}

