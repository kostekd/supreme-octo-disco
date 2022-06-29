import { render, screen } from "@testing-library/react";
import React from "react";
import {Button, ButtonProps} from './Button';


describe('Button', () => {
    let initProps: ButtonProps = {
        children: <p>Essa</p>,
        size: 'large'
    }
    
    test('should render content on Button', () => {
        render(<Button {...initProps}/>);
        expect(screen.getByText('Essa')).toBeInTheDocument();
    })

    test('should call onClick', () => {
        const onClick = jest.fn();
        initProps = {...initProps, onClick};
        render(<Button {...initProps}/>);

        screen.getByText('Essa').click()

        expect(onClick).toBeCalledTimes(1);
    })
});
