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

//-----------------
//-- Ex 2
//-----------------
const generate_fizzbuzz_array = (number) => {
    let fizzbuzz_array = [];

    for (let i = 1; i <= number; i++) {
        value = prod_code(i);
        fizzbuzz_array.push(value);
    }

    return fizzbuzz_array;
};

describe("Test for exercise 2", () => {
    it("Count up to given number and return range array", () => {
        // Arrange
        const param = 5;

        // Act
        const result = generate_fizzbuzz_array(param);
        
        // Assert
        expect(result).toStrictEqual([ 1, 2, "Fizz", 4, "Buzz" ]);

    });
});
