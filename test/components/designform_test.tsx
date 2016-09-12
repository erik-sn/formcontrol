import { expect } from "chai";
import { mount } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";

import * as constants from "../../src/actions/constants.tsx";
import DesignFormConnected, { DesignForm, Props } from "../../src/components/designform.tsx";
import * as interfaces from "../../src/utils/interfaces.tsx";

describe("Design Form" , () => {


  describe("Form" , () => {
    const config: interfaces.PanelConfig = {
      label: "",
      description: "",
      options: [],
      checked: false,
      mandatory: true,
    };

    const validation: interfaces.PanelValidation = {
      regex: "",  // let user specify regex
      email: false,  // default empty, user specifiys a '@host.com'
      date: false,
      type: "",  // default: both string, number, both
      length: "",
    };

    const panels: Array<interfaces.Panel> = [
      { id: "b1", type: "input", layout: { x: 0, y: 0, w: 1, h: 3 }, config, validation },
      { id: "b2", type: "select", layout: { x: 2, y: 2, w: 1, h: 3 }, config, validation },
    ];

    const action: interfaces.ReducerAction = {
      payload: undefined,
      type: constants.NULL_ACTION,
    };

    let component: any;
    const props: any = {
      panels,
      updatePanels: (updated: Array<interfaces.Panel>): interfaces.ReducerAction => action,
    };
    const state = {};


    beforeEach(() => {
      component = mount(<DesignForm {...props} />);
    });

    it("renders something", () => {
      expect(component).to.exist;
    });

    it("should contain a grid layout", () => {
      expect(component.find(".react-grid-layout")).to.exist;
    });

  });

});
