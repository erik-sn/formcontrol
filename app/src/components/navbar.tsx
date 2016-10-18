if (process.env.BROWSER) {
  require("../sass/navbar.scss");
}

import { showLogin } from "../actions/actions";
import { AuthReducer, ReducerAction } from "../utils/interfaces";
import * as React from "react";

export interface Props {
  auth: AuthReducer;
  showLogin: (show: boolean) => ReducerAction;
  params: {
    mode: string;
  };
}
export interface State {
}

export default class Navbar extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  public toggleLogin(): void {
    const { auth, showLogin } = this.props;
    showLogin(!auth.showLogin);
  }

  public render() {
    const { auth } = this.props;
    return (
      <div className="navbar-container">
        <div className="navbar-inner-container" id="navbar-icon-container">Icon</div>
        <div className="navbar-inner-container" id="navbar-title-container">Form Control</div>
        <div className="navbar-inner-container navbar-button" id="navbar-settings-container">Settings</div>
        <div className="navbar-inner-container navbar-button" id="navbar-login-container" onClick={this.toggleLogin} >Login</div>
      </div>
    );
  }
}

