
import { expect } from "chai";
import * as sinon from "sinon";
import { sRender } from "../test_helper.tsx";
import DesignForm from "../../src/components/designform.tsx";

describe("Design Form" , () => {

  describe("Form" , () => {
    let component: any;
    const props = {
    };
    const state = {};


    beforeEach(() => {
      component = sRender(DesignForm, props, state);
    });

    it("renders something", () => {
      expect(component).to.exist;
    });

  });

});
