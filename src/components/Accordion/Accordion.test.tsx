import { render, screen } from "@testing-library/react";
import React, { useState } from "react";
import { Accordion, AccordionProps } from "./Accordion";
import { ActionTypeAccordion } from "./reducer/reducer";

describe("Accordion", () => {
    // const [isOpen, setIsOpen] = useState(false);
    // const toggleOpen = () => {
    //   setIsOpen((prevState) => !prevState);
    // };

  let initProps: AccordionProps = {
    collapsibles: [
        { header: <label>First!</label>, children: <label> I love pizza</label> },
        { header: <label>You are a fool</label>, children: <h4>No I am not</h4> },
      ],
      option: ActionTypeAccordion.Single,
  };

  test("should render content on header of Accordion", () => {
    render(<Accordion {...initProps} />);
    expect(screen.getByText('First!')).toBeInTheDocument();
    expect(screen.getByText('You are a fool')).toBeInTheDocument();

  });
});
