import * as _ from "lodash";
import * as React from "react";

import { Panel, ReducerAction } from "../../../src/utils/interfaces";
import Icon from "../utility/icon";
import Checkbox from "./checkbox";
import DateTimePicker from "./datetimepicker";


export interface Props {
  panel: Panel;
  close: (id: string) => void;
  settings: (id: string, event: React.MouseEvent<{}>) => void;
  update: (panel: Panel) => ReducerAction;
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
  }

  /**
   * Update the label of the Input component
   * 
   * @param {ChangeEvent} e
   */
  public updateLabel(e: React.FormEvent<{}>): void {
    const panel = _.cloneDeep(this.state.panel);
    const target = e.target as HTMLSelectElement;
    panel.config.label = target.value;
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
      case "date":
      case "time":
        return (
          <DateTimePicker
            onChange={undefined}
            value={undefined}
            panel={panel}
            className="design-input-field"
            disabled
          />
        );
      case "checkbox":
        return (
          <Checkbox
            panel={panel}
            checked={false}
            onChange={undefined}
            className="design-input-field"
            disabled
          />
        );
      default:
        throw(`The type ${panel.type} is not a supported panel.`);
    }
  }

  public render() {
    const { type, config } = this.state.panel;
    const { label, description } = config;
    return (
      <div className="formpanel-small-input-container">
        <Icon onClick={this.props.close} id={this.props.panel.id} size={20} icon="cancel" />
        <Icon onClick={this.props.settings} id={this.props.panel.id} size={20} icon="settings" />
        <div className="small-input-container">
          {this.getType(this.props.panel, label)}
        </div>
        <div className="small-input-label-container">
          <input
            type="text"
            value={label}
            onChange={this.updateLabel}
            placeholder={`${type} Label...`}
          />
        </div>
      </div>
    );
  }

}
