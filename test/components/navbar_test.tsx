
import { expect } from "chai";
import * as sinon from "sinon";
import { sRender } from "../test_helper.tsx";
import Navbar from "../../src/components/navbar.tsx";

describe("Navbar" , () => {

  describe("Navbar" , () => {
    let component: any;
    const props = {
      params: {
        mode: "design",
      },
    };
    const state = {};


    beforeEach(() => {
      component = sRender(Navbar, props, state);
    });

    it("renders something", () => {
      expect(component).to.exist;
    });


  });

});
