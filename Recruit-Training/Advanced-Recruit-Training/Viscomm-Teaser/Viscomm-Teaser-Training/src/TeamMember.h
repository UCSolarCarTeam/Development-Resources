#ifndef TEAMMEMBER_H
#define TEAMMEMBER_H

#include <QString>

class TeamMember {
public:
    TeamMember(QString firstName, QString lastName, QString gradYear);

    QString getFirstName();
    QString getLastName();
    QString getGradYear();

private:
    QString firstName;
    QString lastName;
    QString gradYear;
};

#endif // TEAMMEMBER_H
