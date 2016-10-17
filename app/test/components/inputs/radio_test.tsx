
import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";

import Radio, { Props } from "../../../src/components/inputs/radio";
import { generatePanels } from "../../test_data";

const panel = generatePanels(["radio"])[0];
panel.config.options = ["test1", "test2", "test3"];
let component: any;
const onChange = sinon.spy();
const props: Props = {
  panel,
  disabled: false,
  onChange,
  value: panel.config.options[0],
};

describe("Radio Buttons" , () => {

  beforeEach(() => {
    component = shallow(<Radio {...props} />);
  });

  it("renders something with correct top-level class", () => {
    expect(component).to.exist;
    expect(component.find("MuiThemeProvider")).to.have.length(1);
    expect(component.find("RadioButtonGroup")).to.have.length(1);
  });

  it("should have three buttons", () => {
    expect(component.find("RadioButton")).to.have.length(3);
  });

  it("should have the expected value passed down from props", () => {
    expect(component.find("RadioButtonGroup").props().valueSelected).to.equal("test1");
  });

  it("buttons should have the correct labels", () => {
    expect(component.find("RadioButtonGroup").childAt(0).props().label).to.equal("test1");
    expect(component.find("RadioButtonGroup").childAt(1).props().label).to.equal("test2");
    expect(component.find("RadioButtonGroup").childAt(2).props().label).to.equal("test3");
  });

});
