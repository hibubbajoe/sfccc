import * as React from "react";
import AppleButton from "./images/AppleBadge.png";

const AppleStoreBadge = () => {
  return (
    <a
      href="https://apps.apple.com/us/app/magic-the-gathering-companion/id1455161962?src=comp-app"
      target="_blank"
      rel="noreferrer"
    >
      <img src={AppleButton} height="50" alt="appleStoreButton" />
    </a>
  );
};

export default AppleStoreBadge;
