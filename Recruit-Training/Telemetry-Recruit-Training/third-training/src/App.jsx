import "./App.css";
import React from "react";
import Card from "./Card";
function App() {
  const [userData, setUserData] = React.useState([]);
  const [userSearch, setUserSearch] = React.useState("");

  React.useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => setUserData(data.results));
  }, []);

  function fullNames(searchValue) {
    return userData.filter((user) => {
      const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
      return fullName.includes(searchValue.toLowerCase());
    });
  }
  return (
    <div className="page-center">
      <div className="cards-wrapper">
        <div>
          <span>Search: </span>
          <input
            type="text"
            value={userSearch}
            onChange={(search) => {
              setUserSearch(search.target.value);
            }}
            id="fullName"
            name="fullName"
            placeholder="John Doe"
          />
        </div>
        {<Card employeeData={fullNames(userSearch)} />}
      </div>
    </div>
  );
}
export default App;
