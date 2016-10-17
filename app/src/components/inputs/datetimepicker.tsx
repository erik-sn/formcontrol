
import { isEqual } from "lodash";
import DatePicker from "material-ui/DatePicker";
import TimePicker from "material-ui/TimePicker";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import * as React from "react";

import { Panel } from "../../../src/utils/interfaces";

export interface Props {
  panel: Panel;
  disabled: boolean;
  className?: string;
  onChange: (e: any, date: any) => void;
  value: any;
}

interface State {
}

export default class Date extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  public shouldComponentUpdate(nextProps: Props, nextState: State) {
    return !isEqual(this.props.panel.config, nextProps.panel.config) ||
           !isEqual(this.props.value, nextProps.value);
  }

  public getType(): JSX.Element {
    const { panel, disabled, value, onChange } = this.props;
    if (panel.type === "date") {
      return (
        <DatePicker
          value={value}
          onChange={onChange}
          disabled={disabled}
          hintText={disabled ? "" : panel.config.label}
        />
      );
    } else if (panel.type === "time") {
      return (
        <TimePicker
          value={value}
          onChange={onChange}
          disabled={disabled}
          hintText={disabled ? "" : panel.config.label}
        />
      );
    } else {
      throw(`The type ${panel.type} is not a supported panel`);
    }
  }

  public render() {
    const { className } = this.props;
    return (
      <div className={`datetimepicker-input ${className ? className : ""}`} >
        <MuiThemeProvider>
          {this.getType()}
        </MuiThemeProvider>
      </div>
    );
  }

}
