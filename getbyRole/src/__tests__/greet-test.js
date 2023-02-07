import { render, screen } from "@testing-library/react"
import { Greet } from "../components/greet1/greet"


describe.only('Greet', () => {
test('Greet renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
})

test('Greet renders with a name', () => {
    render(<Greet name='vishvas' />)
    const textElement = screen.getByText('Hello vishvas')
    expect(textElement).toBeInTheDocument()
})

})