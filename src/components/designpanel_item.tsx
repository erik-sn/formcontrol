import * as React from "react";

interface Props { 
  onClick: (element: string) => void;
  element: string;
 }

export default class DesignPanelItem extends React.Component<Props, {}> {

  public render() {
    const { onClick, element } = this.props;
    return (
      <div onClick={() => onClick(element)} className="panel-item">{element}</div>
    );
  }

}