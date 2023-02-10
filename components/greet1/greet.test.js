import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"


describe.only('Greet', () => {
it('Greet renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
})

it('Greet renders with a name', () => {
    render(<Greet name='vishvas' />)
    const textElement = screen.getByText('Hello vishvas')
    expect(textElement).toBeInTheDocument()
})

})