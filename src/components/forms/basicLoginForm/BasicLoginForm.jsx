import React, { useState } from "react";

// Style
import "./styles.css";

const BasicLoginForm = () => {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    const newEntry = { userID: userID, password: password };
    setAllEntry((curr) => [...curr, newEntry]);
    console.log(allEntry);
    e.preventDefault();
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("data ", e);
  // };

  return (
    <div className="formContainer">
      <form className="submitClass" onSubmit={submitForm}>
        <div className="formElement">
          <label htmlFor="user_ID">User ID</label>
          <input
            type="email"
            id="user_ID"
            name="userID"
            autoComplete="off"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
          />
        </div>

        <div className="formElement">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="loginButton">
          <button type="submit">Login</button>
        </div>

        <div>
          {allEntry.map((curElement) => {
            return (
              <div className="showDataStyles">
                <p>{curElement.userID}</p>
                <p>{curElement.password}</p>
              </div>
            );
          })}
        </div>
      </form>

      {/* <div>
        {allEntry.map((curElement) => {
          return (
            <div className="showDataStyles">
              <p>{curElement.userID}</p>
              <p>{curElement.password}</p>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default BasicLoginForm;
