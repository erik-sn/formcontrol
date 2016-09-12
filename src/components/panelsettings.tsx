import * as React from "react";

const Checkbox = require("rc-checkbox");
const uuid = require("node-uuid");
import { Panel, PanelConfig, PanelValidation } from "../../src/utils/interfaces.tsx";

export interface Props {
  panel: Panel;
  x: number;
  y: number;
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
      panel.config[name] = type === "text" ? value : !panel.config[name];
    }
    this.setState({ panel });
  }

  public  render() {
    const { config, validation } = this.state.panel;
    const { x, y } = this.props;
    console.log(validation.email);
    return (
      <div className="panel-settings-container" style={{ left: x - 10, top: y + 10 }} >
        <h3>Validation</h3>
        <input className="panel-settings-regex" name="regex" type="text" value={validation.regex} onChange={this.updatePanel} />
        <input className="panel-settings-type" name="type" type="text" value={validation.type} onChange={this.updatePanel} />
        <input className="panel-settings-length" name="length" type="text" value={validation.length} onChange={this.updatePanel} />
        <input key={uuid.v4()} className="panel-settings-email" name="email" type="checkbox" checked={validation.email} onClick={this.updatePanel} />
        <input key={uuid.v4()} className="panel-settings-date" name="date" type="checkbox" checked={validation.date} onClick={this.updatePanel} />
        <input className="panel-settings-options" name="options" type="text" value={config.options} onChange={this.updatePanel} />
        <input key={uuid.v4()} className="panel-settings-checked" name="checked" type="checkbox" checked={config.checked} onClick={this.updatePanel} />
        <input key={uuid.v4()} className="panel-settings-mandatory" name="mandatory" type="checkbox" checked={config.mandatory} onClick={this.updatePanel} />
      </div>
    );
  }
}
