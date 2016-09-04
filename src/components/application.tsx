if (process.env.BROWSER) {
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


export class Application extends React.Component<IApplicationProps, {}> {
  public render() {
    const { mode } = this.props.params;
    return (
      <div className="application-container">
        <Navbar />
        {mode && mode.toLowerCase() === "design" ? <div><DesignForm /><DesignPanel /></div> : <Form />}
      </div>
    );
  }
}


interface IReduxState { test: string; }

const mapStateToProps = (state: IReduxState) => ({ test: "Hello"});


export default connect(mapStateToProps)(Application);
