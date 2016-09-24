import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";

import PanelSettings, { Props } from "../../src/components/panelsettings";
import * as interfaces from "../../src/utils/interfaces";

describe("Panel Settings" , () => {

  const config: interfaces.PanelConfig = {
    label: "",
    description: "",
    options: [],
    checked: false,
    mandatory: true,
  };

  const validation: interfaces.PanelValidation = {
    regex: "",  // let user specify regex
    email: false,
    date: false,
    type: "",  // default: both string, number, both
    length: "",
  };

  const panels: Array<interfaces.Panel> = [
    { id: "b1", type: "input", layout: { x: 0, y: 0, w: 1, h: 3 }, config, validation },
    { id: "b2", type: "select", layout: { x: 2, y: 2, w: 1, h: 3 }, config, validation },
  ];

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
