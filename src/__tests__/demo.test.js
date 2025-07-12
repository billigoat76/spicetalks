import { sum } from "../components/demo";

test("sum function should calculate sum of two numbers", () => {
  const res = sum(3, 4);
  expect(res).toBe(7); // assertion
});
