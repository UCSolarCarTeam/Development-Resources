#include "TeamMember.h"

TeamMember::TeamMember(QString firstName, QString lastName, QString gradYear)
    : firstName(firstName), lastName(lastName), gradYear(gradYear)
{
}

QString TeamMember::getFirstName()
{
    return firstName;
}

QString TeamMember::getLastName()
{
    return lastName;
}

QString TeamMember::getGradYear()
{
    return gradYear;
}
