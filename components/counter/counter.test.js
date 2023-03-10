import { render, screen } from "@testing-library/react";
import user from '@testing-library/user-event';
import { Counter} from "./counter";

describe('counter', () => {
    test('renders correctly', () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading');
        expect(countElement).toBeInTheDocument()
        const incrementButton = screeb.getByRole('button', {
            name: 'Increment',
        })
        expect(incrementButton).toBeInTheDocument()
    });

    test('renders a count of 0', () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('0');
    });

    test('renders a count of 1 after clicking the increment button', async () => {
        user.setup()
        render(<Counter />)
        const incrementButton = screen.getByRole('button', {
            nam: 'Increment',
        });
        await user.click(incrementButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('1')
    });

    // test('renders a count of 1 after clicking the increment button twice', async () => {
    //     user.setup()
    //     render(<Counter />)
    //     const incrementButton = screen.getByRole('button', {
    //         nam: 'Increment',
    //     });
    //     await user.click(incrementButton)
    //     const countElement = screen.getByRole('heading')
    //     expect(countElement).toHaveTextContent('1')
    // });

    test('renders a count of 10 after clicking the set button', async () => {
        user.setup()
        render(<Counter />)
        const amountInput = screen.getByRole('spinbutton')
        user.type(amountInput, '10')
        expect(amountInput).toHaveValue(10)
        const setButton = screen.getByRole('button', {
            name: 'set',
        })
        await user.click(setButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('10');
    });
});