import { render, fireEvent } from "@testing-library/react";

import App from "./App";

// alternatif test

// it("Text Counter is succesfully rendered", () => {
//   const _expected = "Counter";
//   const { getByText } = render(<App>{_expected}</App>);
//   expect(getByText(_expected).toBeInTheDocument);
// });

it("Title h1 is succesfully rendered", () => {
  const { getByTestId } = render(<App />);
  const titleEl = getByTestId("title");

  expect(titleEl.textContent).toBe("Counter");
});

it("Counter h1 is succesfully rendered", () => {
  const { getByTestId } = render(<App />);
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");
});

it("Input is succesfully rendered and can change value", () => {
  const { getByTestId } = render(<App />);
  const inputEl = getByTestId("input");

  expect(inputEl.value).toBe("1");
  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });

  expect(inputEl.value).toBe("5");
});

test("subtract button succesfully render", () => {
  const { getByTestId } = render(<App />);
  const subtractBtn = getByTestId("btn-subtract");

  expect(subtractBtn.textContent).toBe("-");
});

test("add button succesfully render", () => {
  const { getByTestId } = render(<App />);
  const addBtn = getByTestId("btn-add");

  expect(addBtn.textContent).toBe("+");
});

test("button add  is run correctly", () => {
  const { getByTestId } = render(<App />);
  const addBtn = getByTestId("btn-add");
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");
  fireEvent.click(addBtn);
  expect(counterEl.textContent).toBe("1");
});

test("button subtract is run correctly", () => {
  const { getByTestId } = render(<App />);
  const subtractBtn = getByTestId("btn-subtract");
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");
  fireEvent.click(subtractBtn);
  expect(counterEl.textContent).toBe("-1");
});

test("changing input value and clicking on add btn works correctly", () => {
  const { getByTestId } = render(<App />);
  const addBtn = getByTestId("btn-add");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(addBtn);
  expect(counterEl.textContent).toBe("5");
});

test("changing input value and clicking on subtract btn works correctly", () => {
  const { getByTestId } = render(<App />);
  const subtract = getByTestId("btn-subtract");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(subtract);
  expect(counterEl.textContent).toBe("-5");
});
