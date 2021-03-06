import { Action } from './index';

const ACTION_DISMISS_BAR = 'DISMISS_BAR';

export interface CustomTaskListState {
  isOpen: boolean;
}

const initialState: CustomTaskListState = {
  isOpen: true,
};

export function reduce(state: CustomTaskListState = initialState, action: Action) {
  switch (action.type) {
    case ACTION_DISMISS_BAR: {
      return {
        ...state,
        isOpen: false,
      };
    }

    default:
      return state;
  }
}
