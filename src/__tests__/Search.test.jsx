import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import Body from "../components/Body"; // adjust if needed

// MOCKS
import { beforeAll, beforeEach, vi } from "vitest";

vi.mock("axios");
vi.mock("../hooks/useOnlineStatus", () => ({
  default: () => true,
}));


// REAL DATA MOCK
import restaurantData from "../mocks/mockResListData.json"; // create this file

const restaurantList = restaurantData.map((item) => item); // exact same format Swiggy sends
const restaurantInfos = restaurantList.map((r) => r.info);

axios.get.mockResolvedValue({
  data: {
    data: {
      cards: [
        {}, {}, {}, {},
        {
          card: {
            card: {
              gridElements: {
                infoWithStyle: {
                  restaurants: restaurantList,
                },
              },
            },
          },
        },
      ],
    },
  },
});

describe("Body Component - Search Functionality", async () => {

    beforeAll(()=>{
        console.log('before all test cases')
    })

    beforeEach(()=>{
        console.log('before each test case')
    })
  test("should filter and show 'McDonald's' when searched", async () => {
    render(
      <MemoryRouter>
        <Body />
      </MemoryRouter>
    );

    // Wait until one of the restaurants is shown
    await screen.findByText("Pizza Hut");

    const searchInput = screen.getByPlaceholderText(/Search for restaurants/i);
    const searchButton = screen.getByRole("button", { name: /search/i });

    await fireEvent.change(searchInput, "mcdonald");
    await fireEvent.click(searchButton);

    // Assertion
    expect(screen.getByText("McDonald's")).toBeInTheDocument();
    expect(screen.queryByText("Pizza Hut")).toBeInTheDocument();
  });


  test("should show no results for nonsense search", async () => {
    render(
    <MemoryRouter>
      <Body />
    </MemoryRouter>
  );

  // Wait until a known restaurant is shown
  await screen.findByText("Pizza Hut");

  
  // Search nonsense
  const searchInput = screen.getByPlaceholderText(/Search for restaurants/i);
  const searchButton = screen.getByRole("button", { name: /Search/i });

  fireEvent.change(searchInput, { target: { value: "shafsdad" } });
  fireEvent.click(searchButton);

  // Check that no restaurants are shown
  const afterList = screen.queryAllByTestId("rescard");
  expect(afterList.length).toBe(0);
  });
});
