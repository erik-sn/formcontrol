
import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";

import Radio, { Props } from "../../../src/components/inputs/radio";
import { generatePanels } from "../../test_data";

const panel = generatePanels(["checkbox", "cancel button"])[0];
panel.config.options = ["test1", "test2", "test3"];
let component: any;
const props: Props = {
  panel,
  disabled: false,
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
    console.log(component.find("RadioButtonGroup").debug())
    expect(component.find("RadioButton")).to.have.length(3);
  });

});
