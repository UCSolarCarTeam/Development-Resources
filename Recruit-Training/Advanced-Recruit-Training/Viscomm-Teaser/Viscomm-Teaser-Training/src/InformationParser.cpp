#include <QFile>
#include <QString>
#include <QByteArray>
#include <QJsonDocument>
#include <QJsonParseError>

#include "InformationParser.h"

InformationParser::InformationParser()
{

}

QString InformationParser::getOwner() {return owner;}

void InformationParser::setOwner(QString owner) {this->owner = owner;}

QString InformationParser::getType() {return type;}

void InformationParser::setType(QString type) {this->type = type;}

QString InformationParser::getCarName() {return carName;}

void InformationParser::setCarName(QString carName) {this->carName = carName;}

int InformationParser::getBatteryPercentage() {return batteryPercentage;}

void InformationParser::setBatteryPercentage(int batteryPercentage) {this->batteryPercentage = batteryPercentage;}

QString InformationParser::getColor() {return color;}

void InformationParser::setColor(QString color) {this->color = color;}

QString InformationParser::getLocation() {return location;}

void InformationParser::setLocation(QString location) {this->location = location;}

QList<TeamMember> InformationParser::getMemberList() {return memberList;}

void InformationParser::setMemberList(QList<TeamMember> memberList) {this->memberList = memberList;}


bool InformationParser::readJSON()
{
    //Place Function Code Here
    QFile file ("/Users/spencervanroessel/Documents/Solar Car/Development-Resources/Recruit-Training/Advanced-Recruit-Training/Viscomm-Teaser/CarData.json");
    if (!file.open(QIODevice::ReadOnly | QIODevice::Text))
        return false;

    QByteArray json;
    while (!file.atEnd()) {
        json += file.readLine();
    }

    file.close();

    QJsonParseError parseError;
    QJsonDocument jsonDoc = QJsonDocument::fromJson(json, &parseError);
    QJsonObject jsonObj = jsonDoc.object();

    setOwner(jsonObj.value("owner").toString());
    setType(jsonObj.value("type").toString());
    setCarName(jsonObj.value("carName").toString());
    setBatteryPercentage(jsonObj.value("batteryPercentage").toInt());
    setColor(jsonObj.value("color").toString());
    setLocation(jsonObj.value("location").toString());


    QJsonArray teamMembers = jsonObj.value("viscommTeamMembers").toArray();
    for (const QJsonValue& member : teamMembers)
    {
        QJsonObject memberObject = member.toObject();
        QString firstName = memberObject.value("firstName").toString();
        QString lastName = memberObject.value("lastName").toString();
        QString gradYear = memberObject.value("gradYear").toString();

        TeamMember teamMember(firstName, lastName, gradYear);
        memberList.append(teamMember);
    }

    return true;
}

