
import { expect } from "chai";
import * as sinon from "sinon";
import { sRender } from "../test_helper.tsx";
import FormPanel from "../../src/components/formpanel.tsx";

describe("Form Panel" , () => {

  describe("Form Panel" , () => {

    // <div key="a" data-grid={{x: 0, y: 0, w: 1, h: 2, static: true}}>a</div>
    let component: any;
    const props = {
      label: "test1",
      type: "input",
      dataGrid: {x: 0, y: 0, w: 1, h: 2, static: true},
    };
    const state = {};


    beforeEach(() => {
      component = sRender(FormPanel, props, state);
    });

    it("renders something", () => {
      expect(component).to.exist;
    });

    it("should contain a grid layout", () => {
      expect(component.find(".form-panel-container")).to.exist;
    });

    it("should have the label displayed", () => {
      expect(component.text()).to.equal(props.label);
    });

  });

});
