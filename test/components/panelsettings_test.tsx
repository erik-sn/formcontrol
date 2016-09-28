import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";

import PanelSettings, { Props } from "../../src/components/panelsettings";
import * as interfaces from "../../src/utils/interfaces";
import { generatePanels } from "../test_data";

describe("Panel Settings" , () => {

  const panels: Array<interfaces.Panel> = generatePanels(["input", "select"]);

  describe("Input fields" , () => {
    let component: any;
    let updatePanel: any;
    const props: Props = {
      panel: panels[0],
      x: 0,
      y: 0,
      updatePanel: () => "test",
    };
    const state = {};


    beforeEach(() => {
      updatePanel = sinon.spy(() => ("test click"));
      component = shallow(<PanelSettings updatePanel={updatePanel}  {...props} />);
    });

    it("renders something", () => {
      expect(component).to.exist;
      expect(component.find(".panel-settings-container")).to.have.length(1);
    });

    it("has the correct number of input fields", () => {
      expect(component.find("input")).to.have.length(7);
    });

  });

});
