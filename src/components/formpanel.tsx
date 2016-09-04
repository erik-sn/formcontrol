import * as React from "react";

export interface IDesignProps { 
  label: string;
  type: string;
  className?: string;
 }

export default class FormPanel extends React.Component<IDesignProps, {}> {

  public getType(type: string, label: string): JSX.Element {
    switch (type) {
      case "input":
        return <input type="text" value="" placeholder={`Value for ${label}`} disabled />;
      default:
        return <div />;
    }
  }

  public render() {
    const { label, type } = this.props;
    return (
      <div {...this.props}>
        <div key={label} >
          {label}
          <div className="formpanel-input-container">
            {this.getType(type, label)}
          </div>
        </div>
      </div>
    );
  }

}
