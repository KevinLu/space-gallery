export interface LikeAction {
  type: 'LIKE' | 'RESET';
  payload: string;
}

export interface LikeState {
  [key: string]: boolean;
}
