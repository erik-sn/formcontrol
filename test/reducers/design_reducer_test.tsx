
import * as types from "../../src/actions/constants";
import reducer from "../../src/reducers/design_reducer";
import * as interfaces from "../../src/utils/interfaces";
import { expect } from "chai";

describe("Design Reducers" , () => {

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

  const layout: interfaces.FormLayout = {
    height: undefined,
    width: undefined,
  };

  it("should return the initial state", () => {
    expect(
      reducer(undefined, { payload: {}, type: types.NULL_ACTION })
    ).to.deep.equal(
      {
        panels: [], layout
      }
    );
  });

  it("should add a design panel", () => {
    const result = reducer({ panels: [panels[0]], layout}, { payload: panels[1], type: types.ADD_PANEL });
    expect(result).to.deep.equal({panels, layout});
  });


  it("should remove a panel based on its id", () => {
    const result = reducer({ panels, layout }, { payload: { id: "b1" }, type: types.REMOVE_PANEL });
    expect(result.panels).to.deep.equal([panels[1]]);
  });

  it("should remove a design panel", () => {
    const result = reducer({ panels, layout }, { payload: undefined, type: types.CLEAR_PANELS });
    expect(result).to.deep.equal({panels: [], layout });
  });

  it("should update all panels", () => {
    const result = reducer({ panels: [], layout}, { payload: panels, type: types.UPDATE_PANELS });
    expect(result).to.deep.equal({ panels, layout });
  });

  it("should update one panel", () => {
    const newPanel = panels[0];
    newPanel.type = "test input";
    newPanel.layout = { x: 4, y: 4, w: 4, h: 4 };
    const result: any = reducer({ panels, layout }, { payload: panels[0], type: types.UPDATE_PANEL });

    expect(result.panels[0].type).to.equal(newPanel.type);
    expect(result.panels[0].layout).to.deep.equal(newPanel.layout);
  });

  it("should save all panels", () => {
    const result = reducer({ panels, layout }, { payload: undefined, type: types.SAVE_PANELS });
    expect(result).to.deep.equal({ panels, layout });
  });

});


