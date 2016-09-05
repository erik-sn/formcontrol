/*********************************************
 * Redux Interfaces
 *********************************************/

export interface ReduxState { 
  design: DesignReducer;
}

export interface DesignReducer {
  panels: Array<Panel>;
}

export interface ReducerAction {
  type: string;
  payload: any;
}

/*********************************************
 * Model Interfaces
 *********************************************/
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
}

/**
 * Layout object specific to react-grid-layout
 * 
 * @export
 * @interface Layout
 */
export interface Layout {
  w: number;
  h: number;
  x: number;
  y: number;
  i?: string;
}


/**
 * Interface to hold state for the following input components:
 * - Input
 * - Select/Combobox
 * - Radio Button
 * - Checkbox
 * 
 * @export
 * @interface InputState
 */
export interface InputState {
  label?: string;
  type?: string;
  description?: string;
  options?: Array<string>;
  checked?: boolean;
}

/*********************************************
 * General Interfaces
 *********************************************/

/**
 * ChangeEvent interface to use with DOM manipulation (onChange, onClick, etc.)
 * 
 * @export
 * @interface ChangeEvent
 */
export interface ChangeEvent {
  target: {
    value?: string
    innerHTML?: string;
  };
}
