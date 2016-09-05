if (process.env.BROWSER) {
  require("../../sass/modal.scss");
}

import * as React from "react";

import { ChangeEvent } from "../../utils/interfaces.tsx";

export interface Props {
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
          <button onClick={this.respond} className="modal-button confirm-button">Yes</button>
          <button onClick={this.respond} className="modal-button deny-button">No</button>
        </div>
      </div>
    );
  }

}
