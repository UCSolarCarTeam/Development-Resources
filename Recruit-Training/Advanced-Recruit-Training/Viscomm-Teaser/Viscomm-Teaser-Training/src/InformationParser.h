#ifndef INFORMATIONPARSER_H
#define INFORMATIONPARSER_H

#include <QJsonArray>
#include <QJsonObject>
#include <QDebug>

class InformationParser
{
public:
    InformationParser();
    bool readJSON();

    QString getOwner();
    QString getType();
    QString getCarName();
    QString getColor();
    QString getLocation();
    QList<QList<QString>> getViscommMembers();
    void appendViscommMember(QList<QString> newMember);
    void removeViscommMember(QString firstName, QString lastName);

private:
    //Place your JSON variables here
    QString owner_;
    QString type_;
    QString carName_;
    QString color_;
    QString location_;
    QList<QList<QString>> viscommMembers_;

};

#endif // INFORMATIONPARSER_H
