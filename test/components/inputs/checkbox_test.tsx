
import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";

import Checkbox, { Props } from "../../../src/components/inputs/checkbox";
import * as interfaces from "../../../src/utils/interfaces";
import { generatePanels } from "../../test_data";

const panel: interfaces.Panel = generatePanels(["checkbox", "cancel button"])[0];
let component: any;
const props: Props = {
  panel,
  className: "test name",
  disabled: false,
  checked: false,
  onChange: () => "test",
};
let update: any;

describe("Checkbox" , () => {

  beforeEach(() => {
    update = sinon.spy((updatedPanel: interfaces.Panel) => updatedPanel);
    component = shallow(<Checkbox {...props} />);
  });

  it("renders something with correct top-level class", () => {
    expect(component).to.exist;
    expect(component.find("MuiThemeProvider")).to.have.length(1);
    expect(component.find(".checkbox-input")).to.have.length(1);
  });

  it("toggles state when checked", () => {
    expect(component.state(["checked"])).to.be.false;
    component.find("Checkbox").simulate("check");
    expect(component.state(["checked"])).to.be.true;
    component.find("Checkbox").simulate("check");
    expect(component.state(["checked"])).to.be.false;
  });

  it("calls the update function with the correct value when checked", () => {
    expect(component.state(["checked"])).to.be.false;
    component.find("Checkbox").simulate("check");
    expect(component.state(["checked"])).to.be.true;
    component.find("Checkbox").simulate("check");
    expect(component.state(["checked"])).to.be.false;
  });

});
