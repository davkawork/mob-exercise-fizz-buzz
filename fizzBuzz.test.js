const prod_code = (number) => {
  if (number % 3 == 0 && number % 5 == 0) {
    return "FizzBuzz";
  } else if (number % 3 == 0) {
    return "Fizz";
  } else if (number % 5 == 0) {
    return "Buzz";
  } else return false;
};

describe("Fizz Buzz", () => {
  it("Returns Fizz if the number is divisible by 3", () => {
    expect(prod_code(3)).toBe("Fizz");
  });

  it("Returns Buzz if the number is divisible by 5", () => {
    expect(prod_code(5)).toBe("Buzz");
  });

  it("Returns Fizzbuzz if the number is divisible by 3 & 5", () => {
    expect(prod_code(15)).toBe("FizzBuzz");
  });

  // Arrange
  // Act
  // Assert
});
