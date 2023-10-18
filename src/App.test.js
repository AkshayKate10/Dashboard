import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import configureStore from "redux-mock-store";

describe("APP Tests", () => {
  const mockStore = configureStore([]);
  const initialstate = {
    allCards: [],
    columns: [],
    filteredCards: [],
    isModal: false,
    filterInputs: {
      selectedUser: "",
      selectedStatus: "",
    },
  };
  const store = mockStore(initialstate);
  it("Should show app heading", async () => {
    render(<App />);
    expect(screen.getByTestId("app-header")).toBeInTheDocument();
  });
  it("Should show user dropdown", async () => {
    render(<App />);
    expect(screen.getByTestId("user-dropdown")).toBeInTheDocument();
  });
  it("Should show status dropdown", async () => {
    render(<App />);
    expect(screen.getByTestId("status-dropdown")).toBeInTheDocument();
  });
  it("Should show reset button", async () => {
    render(<App />);
    expect(screen.getByTestId("reset-button")).toBeInTheDocument();
  });
  it("Should click reset button", () => {
    const { getByTestId } = render(<App />);
    const reset = getByTestId("reset-button");
    fireEvent.click(reset);
    render(<App />);
  });
});
