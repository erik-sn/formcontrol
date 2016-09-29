import * as _ from "lodash";
import * as React from "react";

import { Panel, ReducerAction } from "../../../src/utils/interfaces";
import Icon from "../utility/icon";
import Radio from "./radio";

export interface Props {
  panel: Panel;
  close: (id: string) => void;
  update: (panel: Panel) => ReducerAction;
  settings: (id: string, event: React.MouseEvent) => void;
  disabled: boolean;
}

interface State {
  panel: Panel;
}

export default class Input extends React.Component<Props, State> {

  /**
   * Creates an instance of Input.
   * 
   * @param {Props} props
   */
  constructor(props: Props) {
    super(props);
    this.state = {
      panel: props.panel,
    };
    this.updateLabel = this.updateLabel.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
  }

  public shouldComponentUpdate(nextProps: Props, nextState: State) {
    return !_.isEqual(this.state.panel, nextState.panel) ||
           !_.isEqual(this.props.panel, nextProps.panel);
  }

  /**
   * Update the label of the Input component
   * 
   * @param {ChangeEvent} e
   */
  public updateLabel(e: React.FormEvent): void {
    const panel = _.cloneDeep(this.state.panel);
    const target = e.target as HTMLSelectElement;
    panel.config.label = target.value;
    this.setState({ panel });
    this.props.update(panel);
  }

  /**
   * Update the description of the Input component
   * 
   * @param {ChangeEvent} e
   */
  public updateDescription(e: React.FormEvent): void {
    const panel = _.cloneDeep(this.state.panel);
    const target = e.target as HTMLSelectElement;
    panel.config.description = target.value;
    this.setState({ panel });
    this.props.update(panel);
  }

  /**
   * Return the type of input to be used in the form depending on the type
   * 
   * @param {string} type - type of input panel
   * @param {string} label - label of the panel
   * @returns {JSX.Element}
   * 
   * @memberOf Input
   */
  public getType(panel: Panel, label: string): JSX.Element {
    switch (panel.type) {
      case "select":
        return (
          <select className="design-select-field"value="Select this!" disabled />
        );
      case "radio":
        return <Radio onChange={undefined} value={undefined} panel={_.cloneDeep(panel)} disabled/>;
      default:
        return (
          <input
            className="design-input-field"
            type="text"
            value=""
            placeholder={`Value for ${label ? label : "..."}`}
            disabled
          />
        );
    }
  }

  public render() {
    const { label, description } = this.state.panel.config;
    return (
     <div className="formpanel-input-container">
        <Icon onClick={this.props.close} id={this.props.panel.id} size={20} icon="cancel" />
        <Icon onClick={this.props.settings} id={this.props.panel.id} size={20} icon="settings" />
        <div className="input-label-container">
          <input
            type="text"
            value={label}
            onChange={this.updateLabel}
            placeholder="Label..."
          />
        </div>
        <div className="input-container">
          {this.getType(this.props.panel, label)}
        </div>
        <div className="input-description-container">
          <input
            type="text"
            value={description}
            onChange={this.updateDescription}
            placeholder="Description..."
          />
        </div>
      </div>
    );
  }

}
