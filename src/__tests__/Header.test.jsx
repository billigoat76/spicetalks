import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import { appStore } from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("testing the Header component of app", () => {
  it("should load the header component with a  login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //querying

    const button = screen.getByText("Login");

    //assertion
    expect(button).toBeInTheDocument();
  });

  // it("should render header component with  cart ", () => {
  //   render(
  //     <BrowserRouter>
  //       <Provider store={appStore}>
  //         <Header />
  //       </Provider>
  //     </BrowserRouter>
  //   );
  //   const cart = screen.getByText(/Cart/);

  //   expect(cart).toBeInTheDocument();
  // });

  // it("should change Login button to Logout onclick", () => {
  //   render(
  //     <BrowserRouter>
  //       <Provider store={appStore}>
  //         <Header />
  //       </Provider>
  //     </BrowserRouter>
  //   );

  //   const loginButton = screen.getByText('Login');
  //   console.log(loginButton);

  //   // simulate the click event 
  //   fireEvent.click(loginButton);

  //   const logoutButton = screen.getByText('Logout');

  //   expect(logoutButton).toBeInTheDocument();


  // });
});
