import { expect } from "chai";
import { mount, shallow } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";

import * as constants from "../../src/actions/constants";
import Renderer, { Props, State } from "../../src/components/form_renderer";
import * as interfaces from "../../src/utils/interfaces";
import { generatePanels } from "../test_data";

describe("Form Renderer" , () => {


  describe("Form" , () => {
    let component: any;
    const panels = generatePanels(5);
    const props: Props = {
      panels,
    };

    const state: State = {
      form: {},
      renderedPanels: undefined,
    };


    beforeEach(() => {
      component = mount(<Renderer {...props} {...state}/>);
    });

    it("renders something and renders panels passed to it to JSX", () => {
      expect(component).to.exist;
    });

    it("renders the correct amount of fields", () => {
      expect(component.find(".rendered-panel").length).to.equal(5);
    });

    it("updates the target state with the correct value", () => {
      const stateLabel = `${panels[0].config.label}__${panels[0].id}`;
      expect(component.state(["form"])[stateLabel]).to.equal("");
      const field = component.find(`#${panels[0].id} .input-container input`);
      field.simulate("change", { target: { value: "Changed" } } );
      expect(component.state(["form"])[stateLabel]).to.equal("Changed");

    });


  });

});
