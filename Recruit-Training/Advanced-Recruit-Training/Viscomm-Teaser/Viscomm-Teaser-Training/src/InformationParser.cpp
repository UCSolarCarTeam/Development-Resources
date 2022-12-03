#include "InformationParser.h"

#include <QFile>
#include <QJsonParseError>
#include <QPointF>
#include <QString>

InformationParser::InformationParser()
{

}

bool InformationParser::readJSON()
{
    //open file
    QFile file("../../CarData.json");
    file.open(QIODevice::ReadOnly|QIODevice::Text);
    QByteArray data = file.readAll();
    file.close();

    QJsonParseError error;
    QJsonDocument doc = QJsonDocument::fromJson(data, &error);
    if(doc.isNull())
    {
        qWarning() << "File read failed";
        return false;
    }
    QJsonObject obj = doc.object();

    //set values from json file data
    owner_ = obj.value("owner").toString();
    type_ = obj.value("type").toString();
    carName_ = obj.value("carName").toString();
    color_ = obj.value("color").toString();
    location_ = obj.value("location").toString();

    QJsonArray members = obj.value("viscommTeamMembers").toArray();

    //add member data to viscommMembers list
    foreach(const QJsonValue & val, members){
        QString firstName = val.toObject().value("firstName").toString();
        QString lastName = val.toObject().value("lastName").toString();
        QString gradYear = val.toObject().value("gradYear").toString();
        viscommMembers_.append({firstName, lastName, gradYear});
    }
    return true;
}

QString InformationParser::getOwner()
{
    return owner_;
}

QString InformationParser::getType()
{
    return type_;
}

QString InformationParser::getCarName()
{
    return carName_;
}

QString InformationParser::getColor()
{
    return color_;
}

QString InformationParser::getLocation()
{
    return location_;
}

QList<QList<QString>> InformationParser::getViscommMembers()
{
    return viscommMembers_;
}

void InformationParser::appendViscommMember(QList<QString> newMember)
{
    viscommMembers_.append(newMember);
}

void InformationParser::removeViscommMember(QString firstName, QString lastName)
{
    for(int i = 0; i < viscommMembers_.size(); i++){
        if(viscommMembers_.at(i).at(0) == firstName && viscommMembers_.at(i).at(1) == lastName){
            viscommMembers_.removeAt(i);
        }
    }
}
