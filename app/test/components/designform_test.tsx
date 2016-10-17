import { expect } from "chai";
import { mount } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";

import * as constants from "../../src/actions/constants";
import DesignFormConnected, { DesignForm, Props } from "../../src/components/designform";
import * as interfaces from "../../src/utils/interfaces";
import { generatePanels } from "../test_data";

describe("Design Form" , () => {


  describe("Form" , () => {

    const panels = generatePanels(["input", "select"]);

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
