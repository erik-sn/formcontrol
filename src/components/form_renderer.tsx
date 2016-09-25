if (process.env.BROWSER) {
  require("../sass/form.scss");
}

import * as React from "react";
const uuid = require("node-uuid");

import { Panel } from "../utils/interfaces";


export interface Props {
  panels: Array<Panel>;
}

export interface State {
  form: {};
  width: number;
  height?: number;
}

export default class DesignForm extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      form: {},
      width: undefined,
      height: undefined,
    };
  }

  public componentDidMount() {
    window.addEventListener("resize", () => this.updateWindow());
    // this.updateWindow();
  }

  public updateWindow() {
    const frame = document.getElementById("form-container");
    this.setState({
      form: this.state.form,
      width: frame.clientWidth,
    });
  }

  public renderInput(panel: Panel): JSX.Element {
    const frame = document.getElementById("form-container");
    const col: number = frame.clientWidth / 10;
    const style = {
      width: `${panel.layout.w * col}px`,
      height: `${panel.layout.h * 30}px`,
      left: `${panel.layout.x * col}px`,
      top: `${panel.layout.y * 40}px`, // 5px padding on rows
    };


    const key = uuid.v4();
    return (
      <div
        className="formpanel-input-container rendered-panel rendered-input"
        key={key}
        style={style}
      >
        <div className="input-label-container">
          <input
            type="text"
            value={panel.config.label}
            disabled
          />
        </div>
        <div className="input-container">
          <input type="text"  />
        </div>
        <div className="input-description-container">
          <input
            type="text"
            value={panel.config.description}
            disabled
          />
        </div>
      </div>
    );
  }

  public render() {
    const { panels } = this.props;
    const renderedPanels = panels.map(panel => this.renderInput(panel));
    panels.forEach(panel => {
      console.log(panel.type, panel.layout);
    });

    return (
      <div className="design-form-container" id="form-render-container">
      {renderedPanels}
      </div>
    );
  }
}
