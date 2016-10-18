import { AuthReducer, ReducerAction } from "../utils/interfaces";
import RaisedButton from "material-ui/RaisedButton";
import * as React from "react";

export interface Props {
  auth: AuthReducer;
  showLogin: (show: boolean) => ReducerAction;
}

export default class Login extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  public toggleLogin() {
    const { auth, showLogin } = this.props;
    showLogin(!auth.showLogin);
  }

  public render() {
    const { auth } = this.props;
    return (
      <div>
        <div className="modal-container">
          <div className="header-container">Login</div>
          <div className="message-container">Select a login method:</div>
          <div className="response-container">
            <div className="confirm-container" >
                <RaisedButton className="modal-button confirm-button"  label="Login"/>
            </div>
            <div className="deny-container" >
                <RaisedButton
                  onClick={this.toggleLogin}
                  className="modal-button deny-button"
                  label="Cancel"
                />
            </div>
          </div>
        </div>
        <div className="modal-page-container" />
      </div>
    );
  }
}
