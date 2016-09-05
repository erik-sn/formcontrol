import * as React from "react";
import * as _ from "lodash";

interface Props {
  icon: string;
  size: any;
  style?: Object;
  onClick: (id: string) => void;
}

// From https://dmfrancisco.github.io/react-icons/
export default class Input extends React.Component<Props, {}> {
 
  public _mergeStyles(...args: any[]) {
    // This is the m function from "CSS in JS" and can be extracted to a mixin
    return _.assign({}, ...args);
  }

  public renderGraphic() {
    switch (this.props.icon) {
      case 'my-icon':
        return (
          <g><path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z"/></g>
        );
      case 'another-icon':
        return (
          <g><path d="M7.41 15.41l4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6z"/></g>
        );
      case 'cancel':
        return (
          <g><path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z"></path></g>
        );
    }
  }

  public render() {
    const { size, onClick, style } = this.props;
    let styles = {
      fill: "currentcolor",
      verticalAlign: "middle",
      width: size, // CSS instead of the width attr to support non-pixel units
      height: size // Prevents scaling issue in IE
    };
    return (
      <div className="formcontrol-icon" onClick={onClick}>
        <svg 
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          style={this._mergeStyles(styles, style)}
        >
          {this.renderGraphic()}
        </svg>
      </div>
    );
  }

}
