/**
 * Redux Interfaces
 */
export interface ReduxState { 
  design: DesignReducer;
}

export interface DesignReducer {
  panels: Array<Panel>;
}
export interface ReducerAction {
  type: string;
  payload: Object;
}

/**
 * Model Interfaces
 */
export interface Panel {
  type: string;
  payload: Object;
}

/**
 * General Interfaces
 */
export interface ChangeEvent {
  target: { value: string};
}
