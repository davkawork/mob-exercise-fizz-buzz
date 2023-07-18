const prod_code = (number) => {
  if (number % 3 == 0 && number % 5 == 0) {
    return "FizzBuzz";
  } else if (number % 3 == 0) {
    return "Fizz";
  } else if (number % 5 == 0) {
    return "Buzz";
  } else return number;
};

describe("Fizz Buzz", () => {
  it("Returns Fizz if the number is divisible by 3", () => {
    // Arrange
    const param = 3;

    // Act
    const result = prod_code(param);

    // Assert
    expect(result).toBe("Fizz");
  });

  it("Returns Buzz if the number is divisible by 5", () => {
    // Arrange
    const param = 5;

    // Act
    const result = prod_code(param);

    // Assert
    expect(result).toBe("Buzz");
  });

  it("Returns Fizzbuzz if the number is divisible by 3 & 5", () => {
    // Arrange
    const param = 15;

    // Act
    const result = prod_code(param);

    // Assert
    expect(result).toBe("FizzBuzz");
  });

  it("Returns the number if it's not divisible by 3 & 5", () => {
    // Arrange
    const param = 17;

    // Act
    const result = prod_code(param);

    // Assert
    expect(result).toBe(17);
  }); 

  
});
