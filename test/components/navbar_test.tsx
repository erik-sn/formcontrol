import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";

import Navbar from "../../src/components/navbar.tsx";

describe("Navbar" , () => {

  describe("Navbar" , () => {
    let component: any;
    const props = {
      params: {
        mode: "design",
      },
    };
    const state = {};


    beforeEach(() => {
      component = shallow(<Navbar  {...props} />);
    });

    it("renders something", () => {
      expect(component).to.exist;
    });

    it("has all expected containers", () => {
      expect(component.find(".navbar-inner-container")).to.have.length(4);
      expect(component.find("#navbar-icon-container")).to.have.length(1);
      expect(component.find("#navbar-title-container")).to.have.length(1);
      expect(component.find("#navbar-settings-container")).to.have.length(1);
      expect(component.find("#navbar-profile-container")).to.have.length(1);
    });


  });

});
