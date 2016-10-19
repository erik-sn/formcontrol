if (process.env.BROWSER) {
  require("../sass/style.scss");
}

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import * as React from "react";
import { connect } from "react-redux";

import { basicLogin, showLogin, showRegister } from "../actions/actions";
import { AuthReducer, DisplayReducer, ReducerAction, ReduxState } from "../utils/interfaces";
import Login from "./auth/login";
import DesignForm from "./designform";
import DesignPanel from "./designpanel";
import Form from "./form";
import Navbar from "./navbar";

export interface Props {
  params: { mode: string };
  route: {};
  display: DisplayReducer;
  auth: AuthReducer;
  showLogin: (show: boolean) => ReducerAction;
  showRegister: (show: boolean) => ReducerAction;
  basicLogin: (username: string, password: string) => ReducerAction;
}

export interface State {
  design: JSX.Element;
}

export class Application extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      design: <div className="design-container"><DesignForm /><DesignPanel /></div>,
    };
  }

  /**
   * Based on an input string return the corresponding JSX element
   * 
   * @param {string} element
   * @returns {JSX.Element}
   * 
   * @memberOf Application
   */
  public getInnerComponent(element: string): JSX.Element {
    switch (element) {
      case "login":
        return (
          <Login
            basicLogin={this.props.basicLogin}
            showLogin={this.props.showLogin}
            showRegister={this.props.showRegister}
            auth={this.props.auth}
          />
        );
      case "register":
        console.log('Showing Register!');
        return undefined;
      case "form":
        return <Form />;
      case "design":
        return <div className="design-container"><DesignForm /><DesignPanel /></div>;
      default:
        throw("This element is not a valid input");
    }
  }

  /**
   * Wrap a retrieved inner component in the MuiThemeProvider to provide
   * theming support
   * 
   * @param {string} element - element's lowercase name
   * @returns {JSX.Element} - wrapped component
   * 
   * @memberOf Application
   */
  public getComponent(element: string): JSX.Element {
    return (
      <MuiThemeProvider>
        {this.getInnerComponent(element)}
      </MuiThemeProvider>
    );
  }

  public render() {
    const { auth, showLogin } = this.props;
    const { modal } = this.props.display;
    const { mode } = this.props.params;
    const { design } = this.state;
    const modalStyle = {
      opacity: 0.5,
      background: "#000",
    };
    return (
      <div>
        {this.props.auth.showLogin ? this.getComponent("login") : ""}
        {this.props.auth.showRegister ? this.getComponent("register") : ""}
        {modal.showModal ? modal.modal : ""}
        <div className="application-container"  >
          <Navbar auth={auth} showLogin={showLogin} />
          {mode && mode.toLowerCase() === "design" ? this.getComponent("design") : this.getComponent("form") }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({
  auth: state.auth,
  display: state.display,
});

export default connect(mapStateToProps, { basicLogin, showLogin, showRegister })(Application);
