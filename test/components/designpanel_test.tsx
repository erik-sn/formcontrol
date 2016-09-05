
import ConnectedDesignPanel, { DesignPanel } from "../../src/components/designpanel.tsx";
import { expect } from "chai";
import * as sinon from "sinon";
import { fRender, sRender } from "../test_helper.tsx";

describe("Design Panel" , () => {

  describe("Panel" , () => {
    let component: any;
    const props = {
    };
    const state = {};


    beforeEach(() => {
      component = fRender(ConnectedDesignPanel, props, state);
    });

    it("renders something", () => {
      expect(component).to.exist;
      expect(component.find(".design-panel-container")).to.have.length(1);
    });

  });

});
