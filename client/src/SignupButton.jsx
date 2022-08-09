import * as React from "react";
import GoogleButton from "./images/GoogleBadge.png";

const GoogleStoreBadge = () => {
  return (
    <button href="https://play.google.com/store/apps/details?id=com.wizards.winter_orb&src=comp-app">
      <img src={GoogleButton} height="50" alt="googleStoreButton" />
    </button>
  );
};

export default GoogleStoreBadge;
