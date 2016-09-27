
import * as _ from "lodash";
import DatePicker from "material-ui/DatePicker";
import TimePicker from "material-ui/TimePicker";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import * as React from "react";

import { Panel, ReducerAction } from "../../../src/utils/interfaces";
import Icon from "../utility/icon";

export interface Props {
  panel: Panel;
  disabled: boolean;
  className?: string;
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
    return !_.isEqual(this.props.panel.config, nextProps.panel.config);
  }

  public getType(): JSX.Element {
    const { panel, disabled } = this.props;
    if (panel.type === "date picker") {
      return <DatePicker disabled={disabled} hintText={disabled ? "" : panel.config.label} />;
    } else if (panel.type === "time picker") {
      return <TimePicker disabled={disabled} hintText={disabled ? "" : panel.config.label} />;
    }
    return undefined;
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
