/*********************************************
 * Redux Interfaces
 *********************************************/

export interface ReduxState {
  design: DesignReducer;
  display: DisplayReducer;
}

export interface DesignReducer {
  layout: FormLayout;
  panels: Array<Panel>;
}

export interface DisplayReducer {
  showPreview: boolean;
  modal: {
    showModal: boolean;
    modal: JSX.Element
  };
}

export interface ReducerAction {
  type: string;
  payload: any;
}

/*********************************************
 * Model Interfaces
 *********************************************/

/**
 * Represents a form
 * 
 * @export
 * @interface Panel
 */
export interface FormLayout {
  height: number;
  width: number;
}

/**
 * Panel object interface
 * 
 * @export
 * @interface Panel
 */
export interface Panel {
  id?: string;
  type: string;
  layout: Layout;
  config: PanelConfig;
  validation: PanelValidation;
}

/**
 * Layout object specific to react-grid-layout - included in Panel
 * 
 * @export
 * @interface Layout
 */
export interface Layout {
  w: number;
  h: number;
  x: number;
  y: number;
  minH?: number;
  minW?: number;
  i?: string;
}

/**
 * Validation object for Panel
 * 
 * Priority in execution is determined in the order specified in this interface
 * @export
 * @interface Layout
 */
export interface PanelValidation {
  regex: string; // let user specify regex
  email: boolean; // default empty, user specifiys a '@host.com'
  date: boolean;
  type: string; // default: both string, number, both
  length: string; // default empty
}

/**
 * Interface to hold state for the following input components:
 * - Input
 * - Select/Combobox
 * - Radio Button
 * - Checkbox
 * 
 * @export
 * @interface PanelConfig
 */
export interface PanelConfig {
  label: string;
  description: string;
  options: Array<string>;
  checked: boolean;
  mandatory: boolean;
}