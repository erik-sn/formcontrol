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
  form: any;
  renderedPanels: Array<JSX.Element>;
}

export default class DesignForm extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      form: {},
      renderedPanels: [],
    };
  }

  public componentDidMount() {
    // const frame = document.getElementById("form-container");
    // const col: number = frame.clientWidth / 10;

    const keys: Array<string> = this.props.panels.map(panel => uuid.v4());
    const form: {} = this.props.panels.reduce((prev: any, panel: Panel) => {
      prev[panel.config.label] = "";
      return prev;
    }, {});
    const renderedPanels: Array<JSX.Element> = this.props.panels.map((panel, i) => {
      return this.renderInput(panel, keys[i]);
    });
    this.setState({ form, renderedPanels });
  }

  public renderInput(panel: Panel, key: string): JSX.Element {
    // manually set component heights/widths and positioning based on 10 col grid
    const style = {
      width: `${panel.layout.w * 10}%`,
      height: `${panel.layout.h * 30}px`,
      left: `${panel.layout.x * 10}%`,
      top: `${panel.layout.y * 40}px`, // 5px padding on rows
    };
    return (
      <div
        className="formpanel-input-container rendered-panel rendered-input"
        key={uuid.v4()}
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
          <input
            type="text"
            value={this.state.form[panel.config.label]}
            onChange={(e: React.FormEvent) => this.updateValue(e, panel.config.label)}
          />
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

  public updateValue(e: React.FormEvent, label: string) {
    const { renderedPanels } = this.state;
    e.preventDefault();
    const form: any = this.state.form;
    form[label] = e.target.value;
    this.setState({ form, renderedPanels });
  }

  public render() {
    const { renderedPanels } = this.state;
    return (
      <div className="design-form-container" id="form-render-container">
      {renderedPanels}
      </div>
    );
  }
}
