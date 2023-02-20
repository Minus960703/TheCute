export interface RootState<T> {
  [x: string]: T;
}

export interface MenuStateType {
  active: boolean;
}

export interface ModalStateType {
  active: boolean;
  content?: string;
  type?: string;
}