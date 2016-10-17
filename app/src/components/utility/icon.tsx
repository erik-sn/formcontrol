import * as _ from "lodash";
import * as React from "react";


export interface Props {
  icon: string;
  size: any;
  id: string;
  style?: Object;
  onClick: (id: string, event: React.MouseEvent<{}>) => void;
}

// From https://dmfrancisco.github.io/react-icons/
export default class Icon extends React.Component<Props, {}> {

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
        const cancel: string = `M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 
                      1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 
                      1.41 1.41-3.59 3.59 3.59 3.59z`;
        return (
          <g><path d={cancel} /></g>
        );
      case "settings":
        return (
          <g><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65c-.03-.24-.24-.42-.49-.42h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-7.43 2.52c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
        );
      default:
        return undefined;
    }
  }

  public click(event: React.MouseEvent<{}>): void {
    this.props.onClick(this.props.id, event);
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
      <div className={`formcontrol-icon formcontrol-icon-${icon}`} onClick={this.click}>
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
