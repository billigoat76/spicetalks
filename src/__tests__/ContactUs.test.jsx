import { render, screen } from '@testing-library/react';
import ContactUs from '../components/ContactUs'; // correct path to your component

describe("Contact us page test cases",()=>{
    it('should load contact us component', () => {
    render(<ContactUs />);
    const heading = screen.getByText("Send us a message");
    expect(heading).toBeInTheDocument();
});

it('should load button inside contactus component', () => {
    render(<ContactUs />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});

it('should load input email inside contactus component', () => {
    render(<ContactUs/>);   
    const email = screen.getByPlaceholderText('you@example.com')
    expect(email).toBeInTheDocument();
});

it('should load three input boxes inside contact us component',()=>{
    render(<ContactUs/>)

    const inputBoxes = screen.getAllByRole('textbox');

    expect(inputBoxes.length).toBe(3)
})
})
