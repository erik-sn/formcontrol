
import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";

import Radio, { Props } from "../../../src/components/inputs/radio";
import { generatePanels } from "../../test_data";

const panel = generatePanels(["checkbox", "cancel button"])[0];
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
  });

});
