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
}

/**
 * General Interfaces
 */
export interface ChangeEvent {
  target: { value: string};
}
