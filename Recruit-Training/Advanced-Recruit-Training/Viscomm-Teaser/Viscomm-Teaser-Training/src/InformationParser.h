#ifndef INFORMATIONPARSER_H
#define INFORMATIONPARSER_H

#include <QJsonArray>
#include <QJsonObject>
#include <QDebug>
#include <QString>
#include <QList>

#include "TeamMember.h"

class InformationParser
{
public:
    InformationParser();
    bool readJSON();
    QString getOwner();
    void setOwner(QString owner);
    QString getType();
    void setType(QString type);
    QString getCarName();
    void setCarName(QString carName);
    int getBatteryPercentage();
    void setBatteryPercentage(int batteryPercentage);
    QString getColor();
    void setColor(QString color);
    QString getLocation();
    void setLocation(QString location);
    QList<TeamMember> getMemberList();
    void setMemberList(QList<TeamMember> memberList);

private:
    //Place your JSON variables here
    QString owner;
    QString type;
    QString carName;
    int batteryPercentage;
    QString color;
    QString location;
    QList<TeamMember> memberList;
};

#endif // INFORMATIONPARSER_H
