import { detect_fizzbuzz, generate_fizzbuzz_array } from "./fizzBuzz";

describe("Fizz Buzz", () => {
  it("Returns Fizz if the number is divisible by 3", () => {
    // Arrange
    const param = 3;

    // Act
    const result = detect_fizzbuzz(param);

    // Assert
    expect(result).toBe("Fizz");
  });

  it("Returns Buzz if the number is divisible by 5", () => {
    // Arrange
    const param = 5;

    // Act
    const result = detect_fizzbuzz(param);

    // Assert
    expect(result).toBe("Buzz");
  });

  it("Returns Fizzbuzz if the number is divisible by 3 & 5", () => {
    // Arrange
    const param = 15;

    // Act
    const result = detect_fizzbuzz(param);

    // Assert
    expect(result).toBe("FizzBuzz");
  });

  it("Returns the number if it's not divisible by 3 & 5", () => {
    // Arrange
    const param = 17;

    // Act
    const result = detect_fizzbuzz(param);

    // Assert
    expect(result).toBe(17);
  });
});

//-----------------
//-- Ex 2
//-----------------

describe("Test for exercise 2", () => {
  it("Count up to 5 and return range array with fizzbuzz", () => {
    // Arrange
    const param = 5;

    // Act
    const result = generate_fizzbuzz_array(param);

    // Assert
    expect(result).toStrictEqual([1, 2, "Fizz", 4, "Buzz"]);
  });

  it("Count up to 15 and return range array with fizzbuzz", () => {
    //Arrange
    const param = 15;

    //Act
    const result = generate_fizzbuzz_array(param);
    console.log(result);

    //Assert
    expect(result).toStrictEqual([
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
      11,
      "Fizz",
      13,
      14,
      "FizzBuzz"
    ]);
  });
});
