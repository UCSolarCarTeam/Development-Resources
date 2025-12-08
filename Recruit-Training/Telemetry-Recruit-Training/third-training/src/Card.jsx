export default function Card(props) {
  console.log(typeof props.employeeData);
  return (
    <>
      {props.employeeData.map((user, i) => (
        <div className="container" key={i}>
          <div className="upper-portion">
            <div className="pfp">
              <img src={user.picture.thumbnail} alt="pfp-employee" />
            </div>
            <div>
              <h1 className="name">
                {user.name.first} {user.name.last}
              </h1>
              <p className="male-container">{user.gender.toUpperCase()}</p>
            </div>
          </div>
          <div className="lower-portion">
            <img
              className="icons"
              src="https://www.svgrepo.com/show/535298/circle-user.svg"
              alt="user-emoji"
            />
            <div className="text-block">
              <span>ID</span>
              <p>
                {user.id.name}-{user.id.value}
              </p>
            </div>
          </div>
          <div className="lower-portion">
            <img
              className="icons"
              src="https://www.svgrepo.com/show/511917/email-1572.svg"
              alt="email-emoji"
            />
            <div className="text-block">
              <span>Email</span>
              <p>{user.email}</p>
            </div>
          </div>
          <div className="lower-portion">
            <img
              className="icons"
              src="https://www.svgrepo.com/show/535565/phone.svg"
              alt="phone-emoji"
            />
            <div className="text-block">
              <span>Phone</span>
              <p>{user.phone}</p>
            </div>
          </div>
          <div className="lower-portion">
            <img
              className="icons"
              src="https://www.svgrepo.com/show/532539/location-pin.svg"
              alt="location-emoji"
            />
            <div className="text-block">
              <span>Address</span>
              <p>
                {user.location.street.number} {user.location.street.name}
              </p>
              <p>
                {user.location.city}, {user.nat}
              </p>
              <p>
                {user.location.country}, {user.location.postcode}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
