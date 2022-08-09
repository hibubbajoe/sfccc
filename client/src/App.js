import React from "react";
import "./App.css";
import SignupForm from "./SignupForm";
import SignupButton from "./images/signupButton.png";
import SfcccLogo from "./images/sfcccLogo.png";
import date from "./images/268.png";
import SommarTurreLogo from "./images/SommarTurreLogo.png";
import StreetsOfNewCapennaLogo from "./images/streetsOfNewCapennaLogo.webp";

function App() {
  const [showSignupForm, setShowSignupForm] = React.useState(false);

  return (
    <div className="container">
      <div className="logoWrapper">
        <div>
          <img src={SfcccLogo} className={"sfcccLogo"} alt="sfccc-logo" />
        </div>
        <div>
          <img
            src={SommarTurreLogo}
            className={"sommarTurreLogo"}
            alt="sommar-turnering-2022"
          />
        </div>
      </div>
        <div>
            <img src={date} className={"Date"} alt="date" />
        </div>


      <input
        className="signUpButton"
        type="image"
        alt="sign-up-button"
        src={SignupButton}
        onClick={() => setShowSignupForm(true)}
      />

      <div>
        <img
          src={StreetsOfNewCapennaLogo}
          className="streetsOfNewCapennaLogo"
          alt="streets-of-new-capenna-logo"
        />
      </div>
      {showSignupForm && (
        <SignupForm
          showSignupForm={showSignupForm}
          setShowSignupForm={setShowSignupForm}
        />
      )}
    </div>
  );
}

export default App;
