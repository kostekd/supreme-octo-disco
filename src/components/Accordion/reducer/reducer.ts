export enum ActionTypeAccordion {
  Single = "SINGLE",
  Multi = "MULTI",
}

type State = Array<Boolean>;

type Action = {
  type: ActionTypeAccordion;
  payload: number;
};

export const accordionReducer = (state: State, action: Action): State => {
  const { type, payload } = action;
  let newState;

  switch (type) {
    case ActionTypeAccordion.Single:
      newState = state.map((element, index) => {
        if (payload === index) {
          return !element;
        } else {
          return false;
        }
      });
      return newState;

    case ActionTypeAccordion.Multi:
      newState = state.map((element, index) => {
        if (payload === index) {
          return !element;
        }
        return element;
      });
      return newState;
  }
};
