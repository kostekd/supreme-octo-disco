import { render, screen } from "@testing-library/react";
import React, { useState } from "react";
import { Collapsible, CollapsibleProps } from "./Collapsible";

describe("Collapsible", () => {
    // const [isOpen, setIsOpen] = useState(false);
    // const toggleOpen = () => {
    //   setIsOpen((prevState) => !prevState);
    // };

  let initProps: CollapsibleProps = {
    header: 'Foo',
    isOpen: false,
    onClick: () => {},
    children: <p>Bar</p> 
  };

  test("should render content on Button", () => {
    render(<Collapsible {...initProps} />);
    expect(screen.getByText('Foo')).toBeInTheDocument();
  });

  test("should call onClick", () => {
    const onClick = jest.fn();
    initProps = { ...initProps, onClick };
    render(<Collapsible {...initProps} />);

    screen.getByText('Foo').click();
    screen.getByText('Foo').click();

    expect(onClick).toBeCalledTimes(2);
  });
});
