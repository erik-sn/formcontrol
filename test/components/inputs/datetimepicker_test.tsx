
import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";

import DateTimePicker, { Props } from "../../../src/components/inputs/datetimepicker";
import { generatePanels } from "../../test_data";

let component: any;
        const panels = generatePanels(["date", "time"]);

describe("DateTime Picker", () => {

    describe(" - Date" , () => {
        const onChange = sinon.spy();

        const props: Props = {
          panel: panels[0],
          disabled: false,
          onChange,
          value: new Date(),
        };

        beforeEach(() => {
            component = shallow(<DateTimePicker {...props} />);
        });

        it("renders something with correct top-level class", () => {
          console.log(component.debug());
          expect(component).to.exist;
          expect(component.find("MuiThemeProvider")).to.have.length(1);
          expect(component.find("DatePicker")).to.have.length(1);
        });

        it("calls the onChange function when changed", () => {
          component.find("DatePicker").simulate("change");
          expect(onChange.callCount).to.equal(1);
        });

    });

    describe(" - Time" , () => {
        const onChange = sinon.spy();

        const props: Props = {
          panel: panels[1],
          disabled: false,
          onChange,
          value: new Date(),
        };

        beforeEach(() => {
            component = shallow(<DateTimePicker {...props} />);
        });

        it("renders something with correct top-level class", () => {
          expect(component).to.exist;
          expect(component.find("MuiThemeProvider")).to.have.length(1);
          expect(component.find("TimePicker")).to.have.length(1);
        });

        it("calls the onChange function when changed", () => {
          component.find("TimePicker").simulate("change");
          expect(onChange.callCount).to.equal(1);
        });

    });

});
