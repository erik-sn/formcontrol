if (process.env.BROWSER) {
  require("../../sass/login.scss");
}

import { cloneDeep } from "lodash";
import RaisedButton from "material-ui/RaisedButton";
import * as React from "react";

import { AuthReducer, ReducerAction } from "../../utils/interfaces";
import Basic from "./basic";

export interface Props {
  auth: AuthReducer;
  showLogin: (show: boolean) => ReducerAction;
  basicLogin: (username: string, password: string) => ReducerAction;
}

  // basicLogin: (username: string, password: string) => ReducerAction;

export interface State {
  username: string;
  password: string;
}

export default class Login extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.toggleLogin = this.toggleLogin.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  public onInputChange(e: React.FormEvent<{}>): void {
    const target = e.target as HTMLFormElement;
    const { name, value } = target;
    const newState: any = cloneDeep(this.state);
    newState[name] = value;
    this.setState(newState);
  }

  public toggleLogin() {
    const { auth, showLogin } = this.props;
    showLogin(!auth.showLogin);
  }

  public login() {
    const { username, password } = this.state;
  }

  public render() {
    const { username, password } = this.state;
    const { auth } = this.props;
    return (
      <div>
        <div className="modal-container">
          <div className="header-container">Login</div>
          <div className="message-container">Select a login method:</div>
          <div className="login__container">
            <Basic username={username} password={password} handleChange={this.onInputChange} />
            <div className="login__button-container">
              <div className="login__confirm-container" >
                  <RaisedButton
                    onClick={this.login}
                    className="modal-button confirm-button"
                    label="Login"
                  />
              </div>
              <div className="login__deny-container" >
                  <RaisedButton
                    onClick={this.toggleLogin}
                    className="modal-button deny-button"
                    label="Cancel"
                  />
              </div>
            </div>
          </div>
        </div>
        <div className="modal-page-container" />
      </div>
    );
  }
}
