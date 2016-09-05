import * as _ from "lodash";
import * as React from "react";

interface Props {
  icon: string;
  size: any;
  id: string;
  style?: Object;
  onClick: (id: string) => void;
}

// From https://dmfrancisco.github.io/react-icons/
export default class Input extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
    this.click = this.click.bind(this);
  }

  /**
   * Combine icon styles object with any custom styles descended from props
   * 
   * @param {...any[]} args
   * @returns
   */
  public _mergeStyles(...args: any[]) {
    // This is the m function from "CSS in JS" and can be extracted to a mixin
    return _.assign({}, ...args);
  }

  /**
   * Return an svg icon corresponding to an input string
   * 
   * @param {string} icon
   * @returns
   */
  public renderGraphic(icon: string) {
    switch (icon) {
      case "my-icon":
        return (
          <g><path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z"/></g>
        );
      case "another-icon":
        return (
          <g><path d="M7.41 15.41l4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6z"/></g>
        );
      case "cancel":
        const d: string = `M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 
                      1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 
                      1.41 1.41-3.59 3.59 3.59 3.59z`;
        return (
          <g><path d={d} /></g>
        );
      default:
        return undefined;
    }
  }

  public click() {
    const { id, onClick } = this.props;
    console.log(id);
    onClick(id);
  }

  public render() {
    const { size, style, icon } = this.props;
    let styles: Object = {
      fill: "currentcolor",
      verticalAlign: "middle",
      width: size, // CSS instead of the width attr to support non-pixel units
      height: size, // Prevents scaling issue in IE
    };

    return (
      <div className="formcontrol-icon" onClick={this.click}>
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          style={this._mergeStyles(styles, style)}
        >
          {this.renderGraphic(icon)}
        </svg>
      </div>
    );
  }

}
