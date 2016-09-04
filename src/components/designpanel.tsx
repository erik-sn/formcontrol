import * as React from "react";

export interface IDesignProps {  }

export default class DesignPanel extends React.Component<IDesignProps, {}> {

  public render() {
    return (
      <div className="design-panel-container">
        <h3>Configure a Component</h3>
        <div className="panel-item">Input</div>
        <div className="panel-item">Select</div>
        <div className="panel-item">Radio</div>
        <div className="panel-item">Checkbox</div>
        <div className="panel-item">Submit Button</div>
        <div className="panel-item">Cancel Button</div>
      </div>
    );
  }

}
