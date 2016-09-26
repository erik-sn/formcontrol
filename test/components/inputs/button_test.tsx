
import { expect } from "chai";
import { mount, shallow } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";

import Button, { Props } from "../../../src/components/inputs/button";
import * as interfaces from "../../../src/utils/interfaces";
import { generatePanels } from "../../test_data";

describe("Input" , () => {

  describe("Layout" , () => {

    const panel = generatePanels(["submit button", "cancel button"])[0];
    let component: any;
    const props: Props = {
      panel,
      close: (id: string) => id,
      label: "Submit",
    };
    const state = {};


    beforeEach(() => {
      component = shallow(<Button {...props} />);
    });

    it("renders something", () => {
      expect(component).to.exist;
    });

    it("should have a top level class", () => {
      expect(component.find(".formpanel-button-container")).to.have.length(1);
    });

    it("should have one icon", () => {
      expect(component.find("Icon")).to.have.length(1);
    });

    it("should have one button with the correct label", () => {
      expect(component.find("button")).to.have.length(1);
      expect(component.find("button").text()).to.equal(props.label);
    });


  });

});
