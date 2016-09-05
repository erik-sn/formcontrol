import * as React from "react";

import { ChangeEvent } from "../../utils/interfaces.tsx";

interface Props {
  response: (response: boolean) => void;
  message: string;
 }

export default class DesignPanelItem extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
    this.respond = this.respond.bind(this);
  }

  public respond(e: ChangeEvent) {
    if (e) {
      const { response } = this.props;
      switch (e.target.innerHTML.toLowerCase()) {
        case "yes":
          response(true);
          break;
        default:
          response(false);
      }
    }
  }

  public render() {
    const { message } = this.props;
    return (
      <div className="modal-container">
        <div className="message-container">{message}</div>
        <div className="response-container">
          <div onClick={this.respond} className="confirm-button">Yes</div>
          <div onClick={this.respond} className="deny-button">No</div>
        </div>
      </div>
    );
  }

}
