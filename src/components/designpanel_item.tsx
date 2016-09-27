import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DateRange from "material-ui/svg-icons/action/date-range";
import Input from "material-ui/svg-icons/action/input";
import TimeRange from "material-ui/svg-icons/device/access-time";
import TextFields from "material-ui/svg-icons/editor/text-fields";
import DropDownArrow from "material-ui/svg-icons/navigation/arrow-drop-down-circle";
import Cancel from "material-ui/svg-icons/navigation/cancel";
import CheckBox from "material-ui/svg-icons/toggle/check-box";
import RadioButton from "material-ui/svg-icons/toggle/radio-button-checked";
import HardwareVideogameAsset from "material-ui/svg-icons/hardware/videogame-asset";
import * as React from "react";


interface Props {
  onClick: (element: string) => void;
  element: string;
 }

const DesignPanelItem: any = (props: Props) => (
  <div onClick={() => props.onClick(props.element)} className="panel-item">
    <MuiThemeProvider>
      {getIcon(props.element)}
    </MuiThemeProvider>
    <div className="panel-item-label" >{props.element}</div>
  </div>
);

export default DesignPanelItem;

function getIcon(element: string): JSX.Element {
  console.log(element);
  switch (element) {
    case "Input":
      return <TextFields />;
    case "Select":
      return <DropDownArrow />;
    case "Radio":
      return <RadioButton />;
    case "Checkbox":
      return <CheckBox />;
    case "Date Picker":
      return <DateRange />;
    case "Time Picker":
      return <TimeRange />;
    case "Submit Button":
      return <Input />;
    case "Cancel Button":
      return <Cancel />;
    default:
      return <HardwareVideogameAsset />;
  }
}