
import { expect } from "chai";
import { mount } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";

import * as constants from "../../src/actions/constants";
import ConnectedDesignPanel, { DesignPanel, Props, State } from "../../src/components/designpanel";
import * as interfaces from "../../src/utils/interfaces";
import { generatePanels } from "../test_data";

describe("Design Panel" , () => {
  const panels: Array<interfaces.Panel> = generatePanels(["input", "select"]);
  const action: interfaces.ReducerAction = {
    payload: undefined,
    type: constants.NULL_ACTION,
  };

  describe("Panel" , () => {
    let component: any;
    let showPreview: any;
    let togglePreview: any = sinon.spy(DesignPanel.prototype, "togglePreview");
    let clearAllPanels: any = sinon.spy(DesignPanel.prototype, "clearAllPanels");
    let saveAllPanels: any = sinon.spy(DesignPanel.prototype, "saveAllPanels");
    const props: Props = {
      panels,
      addPanel: (panel: interfaces.Panel): interfaces.ReducerAction => action,
      savePanels: (panelArray: Array<interfaces.Panel>): interfaces.ReducerAction => action,
      clearPanels: (): interfaces.ReducerAction => action,
      hideModal: (): interfaces.ReducerAction => action,
      showModal: (): interfaces.ReducerAction => action,
      showPreview: (): interfaces.ReducerAction => action,
    };
    const state: State = {
      showPreviewButton: false,
    };


    beforeEach(() => {
      showPreview = sinon.spy();
      props.showPreview = showPreview;
      component = mount(<DesignPanel {...props} {...state} />);
    });

    it("renders something", () => {
      expect(component).to.exist;
      expect(component.find(".design-panel-container")).to.have.length(1);
    });

    it("should have three menu buttons", () => {
      expect(component.find(".panel-menu-button")).to.have.length(3);
    });

    it("Calls togglePreview on click, toggles togglePreview state", () => {
      expect(togglePreview.callCount).to.equal(0);
      expect(showPreview.callCount).to.equal(0);
      expect(component.state(["showPreviewButton"])).to.be.false;
      expect(component.find("#design-panel-preview").text()).to.contain("Show");

      component.find("#design-panel-preview").simulate("click");
      expect(togglePreview.callCount).to.equal(1);
      expect(showPreview.callCount).to.equal(1);
      expect(component.state(["showPreviewButton"])).to.be.true;
      expect(component.find("#design-panel-preview").text()).to.contain("Hide");

      component.find("#design-panel-preview").simulate("click");
      expect(togglePreview.callCount).to.equal(2);
      expect(showPreview.callCount).to.equal(2);
      expect(component.state(["showPreviewButton"])).to.be.false;
      expect(component.find("#design-panel-preview").text()).to.contain("Show");

    });

    it("Calls clearAllPanels on click", () => {
      expect(clearAllPanels.callCount).to.equal(0);
      component.find("#design-panel-clear").simulate("click");
      expect(clearAllPanels.callCount).to.equal(1);
    });

    it("Calls clearAllPanels on click", () => {
      expect(saveAllPanels.callCount).to.equal(0);
      component.find("#design-panel-save").simulate("click");
      expect(saveAllPanels.callCount).to.equal(1);
    });


  });

});
