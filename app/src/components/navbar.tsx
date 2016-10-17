if (process.env.BROWSER) {
  require("../sass/navbar.scss");
}

import * as React from "react";

export interface INavbarProps {  }

export default class Navbar extends React.Component<INavbarProps, {}> {

  public render() {
    return (
      <div className="navbar-container">
        <div className="navbar-inner-container" id="navbar-icon-container">Icon</div>
        <div className="navbar-inner-container" id="navbar-title-container">Form Control</div>
        <div className="navbar-inner-container" id="navbar-settings-container">Settings</div>
        <div className="navbar-inner-container" id="navbar-profile-container">Profile</div>
      </div>
    );
  }

}
