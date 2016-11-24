import * as interfaces from "../src/utils/interfaces";

export function generatePanels(types: Array<string>): Array<interfaces.Panel> {
  return types.map(type => randPanel(type));
}

export function randPanel(type: string): interfaces.Panel {
  return {
    value: [randString(5), randInt(10), randBoolean()][randInt(2)],
    id: randString(15),
    type,
    layout: randLayout(),
    config: randPanelConfig(),
    validation: randPanelValidation(),
  };
}

function randPanelConfig(): interfaces.PanelConfig {
  return {
    label: randString(10),
    description: randString(10),
    options: [randString(5), randString(5), randString(5), randString(5), randString(5)],
    checked: randBoolean(),
    mandatory: randBoolean(),
  };
}

function randPanelValidation(): interfaces.PanelValidation {
  return {
    regex: "[a-zA-Z0-9]+",
    email: randBoolean(),
    date: randBoolean(),
    type: randString(10),
    length: randInt(15).toString(),
  };
}

function randLayout(): interfaces.Layout {
  return {
    w: randInt(10),
    h: randInt(10),
    x: randInt(10),
    y: randInt(10),
    minH: randInt(5),
    minW: randInt(5),
    i: randString(10),
  };
}

/**
 * Props constants for tests
 */

export const AuthDefault: any = {
  showLogin: false,
  showRegister: false,
  user: {},
};


/**
 * **********************************************************
 *   Utility Functions for test data
***************************************************************/

/**
 * Generate a random date between two dates
 * 
 * @param {Date} [start=new Date(2016, 1, 1)]
 * @param {Date} [end=new Date()]
 * @returns {Date}
 */
function randDate(start: Date = new Date(2016, 1, 1), end: Date = new Date()): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

/**
 * Generate a random email string
 * 
 * @returns {string}
 */
function randEmail(): string {
  return `${randString(5)}@email.com`;
}

/**
 * Generate a random number between 0 and the right bound
 * 
 * @param {number} rightBound
 * @returns {number}
 */
function randInt(rightBound: number): number {
    return Math.floor(Math.random() * rightBound);
}

/**
 * Generate a random string the length of the input size
 * 
 * @param {number} size
 * @returns {string}
 */
function randString(size: number): string {
    const alphaChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let generatedString = "";
    for (let i = 0; i < size; i++) {
        generatedString += alphaChars[randInt(alphaChars.length)];
    }
    return generatedString;
}

/**
 * Generate a random true/false
 * 
 * @returns {boolean}
 */
function randBoolean(): boolean {
  return Math.random() * 2 >= 1;
}