#include "MainMindow.h"
#include "ui_MainWindow.h"
#include <QInputDialog>
#include <QDir>
#include <QLineEdit>

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui_(new Ui::MainWindow)
{
    ui_->setupUi(this);
    parser_.readJSON();

    //button functionality
    connect(ui_->nextPageButton, SIGNAL(clicked()), this, SLOT(nextPageButtonClicked()));
    connect(ui_->pageBackwardsButton, SIGNAL(clicked()), this, SLOT(backPageButtonClicked()));
    connect(ui_->addMemberButton, SIGNAL(clicked()), this, SLOT(addMemberButtonClicked()));
    connect(ui_->removeMemberButton, SIGNAL(clicked()), this, SLOT(removeMemberButtonClicked()));
    setImage();
}

MainWindow::~MainWindow()
{
    delete ui_;
}

void MainWindow::nextPageButtonClicked()
{
    ui_->stackedPages->setCurrentIndex(1);
}

void MainWindow::setImage()
{
    //Update the image here
    ui_->imageLabel->setPixmap(QPixmap("../../images/solarcar.jpg"));
    ui_->imageLabel->setScaledContents(true);
}

void MainWindow::updateInformation()
{
    //Please update all information here
    ui_->ownerLabel->setText(ui_->ownerLabel->text().append(" " + parser_.getOwner()));
    ui_->carTypeLabel->setText(ui_->carTypeLabel->text().append(" " + parser_.getType()));
    ui_->carNameLabel->setText(ui_->carNameLabel->text().append(" " + parser_.getCarName()));
    ui_->colorLabel->setText(ui_->colorLabel->text().append(" " + parser_.getColor()));
    ui_->locationLabel->setText(ui_->locationLabel->text().append(" " + parser_.getLocation()));
    updateList();
}


//Add all remaining functions here
void MainWindow::updateList()
{
    //updates list items
    ui_->listWidget->clear();
    for(int i = 0; i < parser_.getViscommMembers().size(); i++){
        QList<QString> member = parser_.getViscommMembers().at(i);
        QString memberStr = "First name: " + member.at(0) + ", Last Name: " + member.at(1) + ", Graduation Year: " + member.at(2);
        ui_->listWidget->addItem(memberStr);
    }
}

void MainWindow::backPageButtonClicked()
{
    ui_->stackedPages->setCurrentIndex(0);
}


void MainWindow::addMemberButtonClicked()
{
    //get user entered information amd add member to viscommMembers
    bool t;
    QString firstName = QInputDialog::getText(this, tr("New Member"), tr("First Name:"), QLineEdit::Normal, QDir::home().dirName(), &t);
    QString lastName = QInputDialog::getText(this, tr("New Member"), tr("Last Name:"), QLineEdit::Normal, QDir::home().dirName(), &t);
    QString gradYear = QInputDialog::getText(this, tr("New Member"), tr("Grad Year:"), QLineEdit::Normal, QDir::home().dirName(), &t);
    QList newMember = {firstName, lastName, gradYear};
    parser_.appendViscommMember(newMember);
    updateList();
}

void MainWindow::removeMemberButtonClicked()
{
    //get user input and remove member with corresponding first and last name
    bool t;
    QString firstName = QInputDialog::getText(this, tr("Remove Member"), tr("First Name:"), QLineEdit::Normal, QDir::home().dirName(), &t);
    QString lastName = QInputDialog::getText(this, tr("Remove Member"), tr("Last Name:"), QLineEdit::Normal, QDir::home().dirName(), &t);
    parser_.removeViscommMember(firstName, lastName);
    updateList();
}
