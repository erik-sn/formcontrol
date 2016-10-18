if (process.env.BROWSER) {
  require("../sass/style.scss");
}

import * as React from "react";
import { connect } from "react-redux";

import { showLogin } from "../actions/actions";
import { AuthReducer, DisplayReducer, ReducerAction, ReduxState } from "../utils/interfaces";
import DesignForm from "./designform";
import DesignPanel from "./designpanel";
import Form from "./form";
import Login from "./login";
import Navbar from "./navbar";

export interface Props {
  params: { mode: string };
  route: {};
  display: DisplayReducer;
  auth: AuthReducer;
  showLogin: (show: boolean) => ReducerAction;
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
        {this.props.auth.showLogin ? <Login showLogin={this.props.showLogin} auth={this.props.auth} /> : ""}
        {modal.showModal ? modal.modal : ""}
        <div className="application-container"  >
          <Navbar auth={auth} showLogin={showLogin} />
          {mode && mode.toLowerCase() === "design" ? design : <Form /> }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({
  auth: state.auth,
  display: state.display,
});

export default connect(mapStateToProps, { showLogin })(Application);
