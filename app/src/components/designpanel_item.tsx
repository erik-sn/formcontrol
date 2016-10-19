import DateRange from "material-ui/svg-icons/action/date-range";
import Input from "material-ui/svg-icons/action/input";
import TimeRange from "material-ui/svg-icons/device/access-time";
import TextFields from "material-ui/svg-icons/editor/text-fields";
import DropDownArrow from "material-ui/svg-icons/navigation/arrow-drop-down-circle";
import Cancel from "material-ui/svg-icons/navigation/cancel";
import CheckBox from "material-ui/svg-icons/toggle/check-box";
import RadioButton from "material-ui/svg-icons/toggle/radio-button-checked";
import * as React from "react";


interface Props {
  onClick: (element: string) => void;
  element: string;
 }

const DesignPanelItem = (props: Props): JSX.Element => (
  <div onClick={() => props.onClick(props.element)} className="panel-item">
    <div className="panel-item-icon">
        {getIcon(props.element)}
    </div>
    <div className="panel-item-label" >{props.element}</div>
  </div>
);

export default DesignPanelItem;

function getIcon(element: string): JSX.Element {
  switch (element) {
    case "input":
      return <TextFields />;
    case "select":
      return <DropDownArrow />;
    case "radio":
      return <RadioButton />;
    case "checkbox":
      return <CheckBox />;
    case "date":
      return <DateRange />;
    case "time":
      return <TimeRange />;
    case "submit":
      return <Input />;
    case "cancel":
      return <Cancel />;
    default:
      return <Cancel />;
  }
}