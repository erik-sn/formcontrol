
import { expect } from "chai";
import * as sinon from "sinon";
import { fRender } from "../test_helper.tsx";
import DesignForm from "../../src/components/designform.tsx";

describe("Design Form" , () => {

  describe("Form" , () => {
    let component: any;
    const props = {
    };
    const state = {};


    beforeEach(() => {
      component = fRender(DesignForm, props, state);
    });

    it("renders something", () => {
      expect(component).to.exist;
    });

    it("should contain a grid layout", () => {
      expect(component.find(".react-grid-layout")).to.exist;
    });

  });

});
