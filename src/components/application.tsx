if (process.env.BROWSER) {
  require("../sass/style.scss");
}

import * as React from "react";
import { connect } from "react-redux";

import DesignForm from "./designform.tsx";
import DesignPanel from "./designpanel.tsx";
import Form from "./form.tsx";
import Navbar from "./navbar.tsx";

interface IReduxState { test: string; }
interface IApplicationProps {
  params: { mode: string };
  route: {};
  test: string;
}

interface IApplicationState {
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

const mapStateToProps = (state: IReduxState) => ({ test: "Hello"});

export default connect(mapStateToProps)(Application);
