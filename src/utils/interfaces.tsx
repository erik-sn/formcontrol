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
  payload: any;
}

/**
 * Model Interfaces
 */
export interface Panel {
  id?: string;
  type: string;
  layout: Layout;
}

export interface Layout {
  w: number;
  h: number;
  x: number;
  y: number;
  i?: string;
}

/**
 * General Interfaces
 */
export interface ChangeEvent {
  target: { value: string};
}
