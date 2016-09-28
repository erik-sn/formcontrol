
import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";

import Checkbox, { Props } from "../../../src/components/inputs/checkbox";
import * as interfaces from "../../../src/utils/interfaces";
import { generatePanels } from "../../test_data";

const panel: interfaces.Panel = generatePanels(["checkbox", "cancel button"])[0];
let component: any;
const props: any = {
  panel,
  className: "test name",
  disabled: false,
  checked: false,
};
let onChange: any;

describe("Checkbox" , () => {

  beforeEach(() => {
    onChange = sinon.spy(() => console.log("test"));
    component = shallow(<Checkbox onChange={onChange} {...props} />);
  });

  it("renders something with correct top-level class", () => {
    expect(component).to.exist;
    expect(component.find("MuiThemeProvider")).to.have.length(1);
    expect(component.find(".checkbox-input")).to.have.length(1);
  });

  it("has the correct checked value", () => {
    expect(component.find("Checkbox").props().checked).to.be.false;
    component = shallow(<Checkbox onChange={onChange} disabled={false} panel={panel} checked={true}/>);
    expect(component.find("Checkbox").props().checked).to.be.true;
  });

  it("has the correct label", () => {
    expect(component.find("Checkbox").props().label).to.equal(panel.config.label);
    component = shallow(<Checkbox onChange={onChange} disabled panel={panel} checked={false}/>);
    expect(component.find("Checkbox").props().label).to.equal("");
  });

  it("calls the onChange function when checked", () => {
    component.find("Checkbox").simulate("check");
    expect(onChange.callCount).to.equal(1);
    component.find("Checkbox").simulate("check");
    expect(onChange.callCount).to.equal(2);
  });

});
