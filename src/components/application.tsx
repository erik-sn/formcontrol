if (process.env.BROWSER) {
  require("../sass/application.scss");
  require("../sass/style.scss");
}

import * as React from "react";
import { connect } from "react-redux";

import DesignForm from "./designform.tsx";
import DesignPanel from "./designpanel.tsx";
import Form from "./form.tsx";
import Navbar from "./navbar.tsx";

export interface IApplicationProps {
  params: { mode: string };
  route: {};
  test: string;
}

export interface IApplicationState {
  design: JSX.Element;
}

export class Application extends React.Component<IApplicationProps, IApplicationState> {

  constructor(props: IApplicationProps) {
    super(props);
    this.state = {
      design: <div className="design-container"><DesignForm /><DesignPanel /></div>,
    };
  }

  public render() {
    const { mode } = this.props.params;
    const { design } = this.state;
    return (
      <div className="application-container">
        <Navbar />
        {mode && mode.toLowerCase() === "design" ? design : <Form /> }
      </div>
    );
  }
}


interface IReduxState { test: string; }

const mapStateToProps = (state: IReduxState) => ({ test: "Hello"});


export default connect(mapStateToProps)(Application);
