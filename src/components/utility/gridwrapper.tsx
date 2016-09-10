
import * as React from "react";

interface IProps {
  "data-grid": Object;
  style?: { width: number, height: number };
  key: string;
}

export default class GridWrapper extends React.Component<IProps, {}> {

  public  render() {
    let that = this;
    let newChildren = React.Children.map(this.props.children, (child: any) => {
        return React.cloneElement(child, { width: that.props.style.width,
        height: that.props.style.height});
        });
    return (
      <div {...this.props}>
          {newChildren}
      </div>
    );
  }
}
