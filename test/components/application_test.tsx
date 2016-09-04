
import { expect } from "chai";
import * as sinon from "sinon";

import ConnectedApplication, { Application } from "../../src/components/application.tsx";
import { sRender } from "../test_helper.tsx";

describe("Application" , () => {

  describe("Application in design mode" , () => {
    let component: any;
    const props = {
      params: {
        mode: "design",
      },
    };
    const state = {};


    beforeEach(() => {
      component = sRender(Application, props, state);
    });

    it("renders something", () => {
      expect(component).to.exist;
    });

    it("has a design component", () => {
      expect(component.find("Design")).to.have.length(1);
    });

    it("has a navbar", () => {
      expect(component.find("Navbar")).to.have.length(1);
    });

    it("has a form component", () => {
      expect(component.find("Form")).to.have.length(1);
    });


  });

  describe("Application in input mode" , () => {
    let component: any;
    const props = {
      params: {
      },
    };
    const state = {};


    beforeEach(() => {
      component = sRender(Application, props, state);
    });

    it("does NOT has a design component", () => {
      expect(component.find("Design")).to.have.length(0);
    });

    it("renders something", () => {
      expect(component).to.exist;
    });

    it("has a navbar", () => {
      expect(component.find("Navbar")).to.have.length(1);
    });

    it("has a form component", () => {
      expect(component.find("Form")).to.have.length(1);
    });

  });

});


