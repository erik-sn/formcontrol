if (process.env.BROWSER) {
  require("../sass/form.scss");
}

import * as React from "react";

import { Panel } from "../utils/interfaces";
import Checkbox from "./inputs/checkbox";
import DateTimePicker from "./inputs/datetimepicker";
import Radio from "./inputs/radio";

export interface Props {
  panels: Array<Panel>;
}

export interface State {
  form: any;
  renderedPanels: Array<JSX.Element>;
}

interface RenderStyle {
  height: string;
  width: string;
  top: string;
  left: string;
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
    const form: {} = this.props.panels.reduce((prev: any, panel: Panel) => {
      prev[`${panel.config.label}__${panel.id}`] = "";
      return prev;
    }, {});
    const renderedPanels: Array<JSX.Element> = this.props.panels.map(panel => {

      const style: RenderStyle = {
        width: `calc(${panel.layout.w * 9.90}% - ${20}px)`,
        height: `calc(${panel.layout.h * 40}px - 20px)`,
        left: `calc(${panel.layout.x * 9.90}% + 5px)`,
        top: `calc(${panel.layout.y * 40}px + 5px)`, // 5px padding on rows
      };

      switch (panel.type) {
        case "input":
          return this.renderInput(panel, style);
        case "select":
          return this.renderSelect(panel, style);
        case "radio":
          return this.renderRadio(panel, style);
        case "checkbox":
          return this.renderCheckbox(panel, style);
        case "date picker":
        case "time picker":
          return this.renderDatePicker(panel, style);
        case "submit button":
          return this.renderButton(panel, style, "Submit");
        case "cancel button":
          return this.renderButton(panel, style, "Cancel");
        default:
          return undefined;
      }
    });
    this.setState({ form, renderedPanels });
  }

  public renderRadio(panel: Panel, style: RenderStyle): JSX.Element {
    return (
      <div
        id={panel.id}
        className="formpanel-input-container rendered-panel rendered-radio"
        key={panel.id}
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
          <Radio panel={panel} disabled={false} />
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

  public renderButton(panel: Panel, style: RenderStyle, label: string): JSX.Element {
    return(
      <div
        id={panel.id}
        className="formpanel-button-container rendered-panel rendered-button"
        key={panel.id}
        style={style}
      >
        <button type="submit">{label}</button>
      </div>
    );
  }

  public renderCheckbox(panel: Panel, style: RenderStyle): JSX.Element {
    return(
      <div
        id={panel.id}
        className="formpanel-checkbox-container rendered-panel rendered-checkbox"
        key={panel.id}
        style={style}
      >
        <Checkbox panel={panel} disabled={false} />
      </div>
    );
  }

  public renderDatePicker(panel: Panel, style: RenderStyle): JSX.Element {
    return(
      <div
        id={panel.id}
        className="formpanel-datepicker-container rendered-panel rendered-datepicker"
        key={panel.id}
        style={style}
      >
        <DateTimePicker panel={panel} disabled={false} />
      </div>
    );
  }

  /**
   * Render a Panel object into it's equivalent user-facing Input field
   * and corresponding information
   * 
   * @param {Panel} panel
   * @returns {JSX.Element}
   * 
   * @memberOf DesignForm
   */
  public renderSelect(panel: Panel, style: RenderStyle): JSX.Element {
    // manually set component heights/widths and positioning based on 10 col grid
    const options = panel.config.options.map((option: string, index: number) => (
      <option key={index} value={option}>{option}</option>
    ));
    return (
      <div
        id={panel.id}
        className="formpanel-input-container rendered-panel rendered-input"
        key={panel.id}
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
          <select
            className="design-select-field"
            value={this.state.form[`${panel.config.label}__${panel.id}`]}
            onChange={(e: React.FormEvent) => this.updateValue(e, `${panel.config.label}__${panel.id}`)}
          >
          {options}
          </select>
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

  /**
   * Render a Panel object into it's equivalent user-facing Input field
   * and corresponding information
   * 
   * @param {Panel} panel
   * @returns {JSX.Element}
   * 
   * @memberOf DesignForm
   */
  public renderInput(panel: Panel, style: RenderStyle): JSX.Element {
    return (
      <div
        id={panel.id}
        className="formpanel-input-container rendered-panel rendered-input"
        key={panel.id}
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
            value={this.state.form[`${panel.config.label}__${panel.id}`]}
            onChange={(e: React.FormEvent) => this.updateValue(e, `${panel.config.label}__${panel.id}`)}
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
    const target = e.target as HTMLSelectElement;
    const form: any = this.state.form;
    form[label] = target.value;
    this.setState({ form, renderedPanels });
  }

  public render() {
    const { renderedPanels } = this.state;
    return (
      <div className="design-form-container" id="form-render-container" >
      {renderedPanels}
      </div>
    );
  }
}
