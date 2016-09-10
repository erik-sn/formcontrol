
import { expect } from "chai";
import { mount } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";

import * as constants from "../../src/actions/constants.tsx";
import ConnectedDesignPanel, { DesignPanel, Props } from "../../src/components/designpanel.tsx";
import * as interfaces from "../../src/utils/interfaces.tsx";

describe("Design Panel" , () => {
  const config: interfaces.PanelConfig = {
    label: "",
    description: "",
    options: [],
    checked: false,
  };

  const panels: Array<interfaces.Panel> = [
    { id: "b1", type: "input", layout: { x: 0, y: 0, w: 1, h: 3 }, config },
    { id: "b2", type: "select", layout: { x: 2, y: 2, w: 1, h: 3 }, config },
  ];

  const action: interfaces.ReducerAction = {
    payload: undefined,
    type: constants.NULL_ACTION,
  };

  describe("Panel" , () => {
    let component: any;
    let clearAllPanels: any = sinon.spy(DesignPanel.prototype, "clearAllPanels");
    let saveAllPanels: any = sinon.spy(DesignPanel.prototype, "saveAllPanels");
    const props: Props = {
      panels,
      addPanel: (panel: interfaces.Panel): interfaces.ReducerAction => action,
      savePanels: (panelArray: Array<interfaces.Panel>): interfaces.ReducerAction => action,
      clearPanels: (): interfaces.ReducerAction => action,
      hideModal: (): interfaces.ReducerAction => action,
      showModal: (): interfaces.ReducerAction => action,
    };
    const state = {};


    beforeEach(() => {
      component = mount(<DesignPanel {...props} />);
    });

    it("renders something", () => {
      expect(component).to.exist;
      expect(component.find(".design-panel-container")).to.have.length(1);
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
