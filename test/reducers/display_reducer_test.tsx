
import * as types from "../../src/actions/constants";
import reducer, { INITIAL_STATE } from "../../src/reducers/display_reducer";
import * as interfaces from "../../src/utils/interfaces";
import { expect } from "chai";
import * as React from "react";

describe("Display Reducers" , () => {


  const modal: JSX.Element = <div>I am a modal</div>;

  it("should return the initial state", () => {
    expect(reducer(undefined, { payload: {}, type: types.NULL_ACTION })).to.deep.equal(INITIAL_STATE);
  });

  it("should set show and hide a modal", () => {
    // showModal action first
    const showResult = reducer(INITIAL_STATE, {type: types.SHOW_MODAL, payload: { showModal: true, modal }});
    expect(showResult.modal.showModal).to.be.true;
    expect(showResult.modal.modal).to.be.equal(modal);

    // then hide it
    const hideResult = reducer(showResult, {type: types.HIDE_MODAL, payload: undefined});
    expect(hideResult).to.deep.equal(INITIAL_STATE);

  });

});


