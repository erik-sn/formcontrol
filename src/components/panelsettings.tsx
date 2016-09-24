import * as React from "react";

const Checkbox = require("rc-checkbox");
const uuid = require("node-uuid");
import { Panel, PanelConfig, PanelValidation } from "../../src/utils/interfaces";

export interface Props {
  panel: Panel;
  x: number;
  y: number;
  updatePanel: (panel: Panel) => void;
}

interface State {
  panel: Panel;
}

export default class PanelSettings extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      panel: props.panel,
    };
    this.updatePanel = this.updatePanel.bind(this);
  }

  public updatePanel(event: React.FormEvent) {
    event.preventDefault();
    const { name, value, type } = event.target as HTMLSelectElement; ;
    let panel: any = this.state.panel;
    const validationNames = ["regex", "type", "length", "email", "date"];
    if (validationNames.indexOf(name) !== -1) {
      panel.validation[name] = type === "text" ? value : !panel.validation[name];
    } else {
      panel.config[name] = type === "text" || type === "textarea" ? value : !panel.config[name];
    }
    this.setState({ panel }, () => this.props.updatePanel(panel));
  }

  public  render() {
    const { config, validation } = this.state.panel;
    const { x, y } = this.props;
    return (
      <div className="panel-settings-container" style={{ left: x - 10, top: y + 10 }} >
        <h4>Validation</h4>
        <div className="panel-settings-row">
          <div className="panel-settings-label">Regex:</div>
          <div className="panel-settings-input">
            <input className="panel-settings-regex" name="regex" type="text" value={validation.regex} onChange={this.updatePanel} />
          </div>
        </div>
        <div className="panel-settings-row">
          <div className="panel-settings-label">Type:</div>
          <div className="panel-settings-input">
            <input className="panel-settings-type" name="type" type="text" value={validation.type} onChange={this.updatePanel} />
          </div>
        </div>
        <div className="panel-settings-row">
          <div className="panel-settings-label">Length:</div>
          <div className="panel-settings-input">
            <input className="panel-settings-length" name="length" type="text" value={validation.length} onChange={this.updatePanel} />
          </div>
        </div>
        <div className="panel-settings-row">
          <div className="panel-settings-label">Email:</div>
          <div className="panel-settings-input">
            <input key={uuid.v4()} className="panel-settings-email" name="email" type="checkbox" checked={validation.email} onChange={this.updatePanel} />
          </div>
          <div className="panel-settings-label">Date:</div>
          <div className="panel-settings-input">
            <input key={uuid.v4()} className="panel-settings-date" name="date" type="checkbox" checked={validation.date} onChange={this.updatePanel} />
          </div>
        </div>
        <h4>Configuration</h4>
        <div className="panel-settings-row">
          <div className="panel-settings-label">Checked:</div>
          <div className="panel-settings-input">
            <input key={uuid.v4()} className="panel-settings-checked" name="checked" type="checkbox" checked={config.checked} onChange={this.updatePanel} />
          </div>
          <div className="panel-settings-label">Required:</div>
          <div className="panel-settings-input">
            <input key={uuid.v4()} className="panel-settings-mandatory" name="mandatory" type="checkbox" checked={config.mandatory} onChange={this.updatePanel} />
          </div>
        </div>
          <textarea className="panel-settings-options" name="options" type="text" placeholder="Enter options separated by commas" value={config.options} onChange={this.updatePanel} />

      </div>
    );
  }
}
