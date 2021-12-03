import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>);
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm/>);
    const firstName = screen.getByLabelText(/First Name:/i);
    userEvent.type(firstName, "Harry");

    const lastName = screen.getByLabelText(/Last Name/i);
    userEvent.type(lastName, "Potter");

    const address = screen.getByLabelText(/Address/i);
    userEvent.type(address, "Hogwarts");

    const city = screen.getByLabelText(/City/i);
    userEvent.type(city, "Wizard World");

    const state = screen.getByLabelText(/State/i);
    userEvent.type(state, "Florida");

    const zip = screen.getByLabelText(/Zip/i);
    userEvent.type(zip, "32819");

    const button = screen.getByRole('button');
    userEvent.click(button);

    const successMsg = screen.getByTestId(/successMessage/i);
    expect(successMsg).toBeInTheDocument();
});
