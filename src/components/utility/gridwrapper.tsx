import * as React from "react";
import Icon from "./icon.tsx";

interface IProps {
  "data-grid": Object;
  style?: { width: number, height: number };
  key: string;
  close: (id: string) => void;
}

export default class GridWrapper extends React.Component<IProps, {}> {

  public  render() {
    const closeIcon = <span dangerouslySetInnerHTML={{ __html: JSON.stringify(close) }} />
    let that = this;
    let newChildren = React.Children.map(this.props.children, (child: any) => {
        return React.cloneElement(child, { width: that.props.style.width,
        height: that.props.style.height});
        });
    return (
      <div {...this.props}>
          <Icon onClick={this.props.close} size={20} icon="cancel" />
          {newChildren}
      </div>
    );
  }
}