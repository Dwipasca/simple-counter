import { render, fireEvent } from "@testing-library/react";

import App from "./App";

let getByTestId;
let titleEl;
let counterEl;
let inputEl;
let subtractBtn;
let addBtn;

beforeEach(() => {
  let component = render(<App />);
  getByTestId = component.getByTestId;

  titleEl = getByTestId("title");
  counterEl = getByTestId("counter");
  inputEl = getByTestId("input");
  subtractBtn = getByTestId("btn-subtract");
  addBtn = getByTestId("btn-add");
});

it("Title h1 is succesfully rendered", () => {
  expect(titleEl.textContent).toBe("Counter");
});

it("Counter h1 is succesfully rendered", () => {
  expect(counterEl.textContent).toBe("0");
});

it("Input is succesfully rendered and can change value", () => {
  expect(inputEl.value).toBe("1");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });

  expect(inputEl.value).toBe("5");
});

test("subtract button succesfully render", () => {
  expect(subtractBtn.textContent).toBe("-");
});

test("add button succesfully render", () => {
  expect(addBtn.textContent).toBe("+");
});

test("button add  is run correctly", () => {
  expect(counterEl.textContent).toBe("0");
  fireEvent.click(addBtn);
  expect(counterEl.textContent).toBe("1");
});

test("button subtract is run correctly", () => {
  expect(counterEl.textContent).toBe("0");
  fireEvent.click(subtractBtn);
  expect(counterEl.textContent).toBe("-1");
});

test("changing input value and clicking on add btn works correctly", () => {
  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(addBtn);
  expect(counterEl.textContent).toBe("5");
});

test("changing input value and clicking on subtract btn works correctly", () => {
  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(subtractBtn);
  expect(counterEl.textContent).toBe("-5");
});
