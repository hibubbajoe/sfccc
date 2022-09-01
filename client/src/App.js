import React from "react";
import "./App.css";
import SignupForm from "./SignupForm";
import SignupButton from "./images/signupButton.png";
import SfcccLogo from "./images/sfcccLogo.png";
import championShipLogo from "./images/champion-2022.png";
import setLogo from "./images/dominaria-logo.png";

function App() {
  const [showSignupForm, setShowSignupForm] = React.useState(false);

  return (
    <div className="container">
      <div className="logoWrapper">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={SfcccLogo} className={"sfcccLogo"} alt="sfccc-logo" />
        </div>
        <div
          style={{
            marginBottom: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={championShipLogo}
            className={"championShipLogo"}
            alt="sommar-turnering-2022"
          />
        </div>
      </div>

      <input
        className="signUpButton"
        type="image"
        alt="sign-up-button"
        src={SignupButton}
        onClick={() => setShowSignupForm(true)}
      />

      <div>
        <img src={setLogo} className="setLogo" alt="set-logo" />
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
