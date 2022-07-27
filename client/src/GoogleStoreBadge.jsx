import * as React from "react";
import GoogleButton from "./images/GoogleBadge.png";

const GoogleStoreBadge = () => {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.wizards.winter_orb&src=comp-app"
      target="_blank"
      rel="noreferrer"
    >
      <img src={GoogleButton} height="50" alt="googleStoreButton" />
    </a>
  );
};

export default GoogleStoreBadge;
