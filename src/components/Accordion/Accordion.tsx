import React, { useReducer } from "react";
import { Collapsible, CollapsibleProps } from "../Collapsible/Collapsible";
import { accordionReducer, ActionTypeAccordion } from "./reducer/reducer";

export type options = "single" | "multi";

export interface AccordionProps {
  collapsibles?: CollapsibleProps[];
  option?: ActionTypeAccordion;
}

const Accordion = ({
  collapsibles,
  option = ActionTypeAccordion.Single,
}: AccordionProps) => {
  const initialState = Array.apply(null, Array(5)).map(Boolean.prototype.valueOf,false);
  const [state, dispatch] = useReducer(accordionReducer, initialState);

  return (
    <>
      {collapsibles?.map((element, index) => {
        return (
          <Collapsible
            key={index}
            header={element.header}
            isOpen={state[index]}
            onClick={() => dispatch({ type: option, payload: index })}
          >
            {element.children}
          </Collapsible>
        );
      })}
    </>
  );
};

export { Accordion };
