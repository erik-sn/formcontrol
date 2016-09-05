import { expect } from "chai";
import * as functions from '../../src/utils/functions.tsx';

describe("Utility Functions" , () => {

  describe("Unique ID" , () => {

    it("should generate a unique id", () => {
      expect(functions.generateId()).to.not.equal(functions.generateId);
    });

  });

});