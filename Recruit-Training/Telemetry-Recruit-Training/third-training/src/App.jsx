import "./App.css";
import React from "react";

function App() {
  const [userData, setUserData] = React.useState([])
  const [userSearch, setUserSearch] = React.useState("")

  React.useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then(res => res.json())
      .then(data => setUserData(data.results));
  }, []);
  function fullNames (searchValue) {
    const names = userData.map((firstNames) => (firstNames.name.first.toLowerCase()))
    // const target = document.getElementsByClassName("name");
    // if (names.indexOf(searchValue) !== -1) target[names.indexOf(searchValue)].scrollIntoView({ behavior: "smooth", block: "start" })
    userData.map((firstnames) => (
      firstnames.name.toLowerCase().split("").map((char) => {
        if (firstnames.name.toLowerCase().includes(char) && firstnames.name.toLowerCase().includes(searchValue)) return(true)
  })))
  }

  return (
    <div className="page-center">
      <div className="cards-wrapper">
        <div>
          <span>Search: </span>
          <input type="text" value = {userSearch} onChange={(search) => {
            setUserSearch(search.target.value);
            fullNames(search.target.value);
            }} id="fullName" name="fullName" placeholder="John Doe" />
            
        </div>
        {userData.map((user, i) => (
          <div className="container" key={i}>
            <div className="upper-portion">
              <div className="pfp">
                <img src={user.picture.thumbnail} alt="pfp-employee" />
              </div>
              <div>
                <h1 className="name">{user.name.first} {user.name.last}</h1>
                <p className="male-container">{user.gender.toUpperCase()}</p>
              </div>
            </div>
              <div className="lower-portion">
                <img className="icons" src="https://www.svgrepo.com/show/535298/circle-user.svg" alt="user-emoji" />
                <div className="text-block">
                  <span>ID</span>
                  <p>{user.id.name}-{user.id.value}</p>
                </div>
              </div>
              <div className="lower-portion">
                <img className="icons" src="https://www.svgrepo.com/show/511917/email-1572.svg" alt="email-emoji" />
                <div className="text-block">
                  <span>Email</span>
                  <p>{user.email}</p>
                </div>
              </div>
              <div className="lower-portion">
                <img className="icons" src="https://www.svgrepo.com/show/535565/phone.svg" alt="phone-emoji" />
                <div className="text-block">
                  <span>Phone</span>
                  <p>{user.phone}</p>
                </div>
              </div>
              <div className="lower-portion">
                <img className="icons" src="https://www.svgrepo.com/show/532539/location-pin.svg" alt="location-emoji"/>
                <div className="text-block">
                  <span>Address</span>
                  <p>{user.location.street.number} {user.location.street.name}</p>
                  <p>{user.location.city}, {user.nat}</p>
                  <p>{user.location.country}, {user.location.postcode}</p>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;