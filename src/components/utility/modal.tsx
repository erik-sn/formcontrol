if (process.env.BROWSER) {
  require("../../sass/modal.scss");
}

import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import * as React from "react";

export interface Props {
  response: (response: boolean) => void;
  message: string;
 }

export default class DesignPanelItem extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }

  public render() {
    const { message, response } = this.props;
    return (
      <div>
        <div className="modal-container">
          <div className="header-container">Confirm</div>
          <div className="message-container">{message}</div>
          <div className="response-container">
            <div className="confirm-container" onClick={response.bind(this, true)}>
              <MuiThemeProvider>
                <RaisedButton className="modal-button confirm-button"  label="Yes"/>
              </MuiThemeProvider>
            </div>
            <div className="deny-container" onClick={response.bind(this, false)}>
              <MuiThemeProvider>
                <RaisedButton className="modal-button deny-button" label="No"/>
              </MuiThemeProvider>
            </div>
          </div>
        </div>
        <div className="modal-page-container" />
      </div>
    );
  }

}
