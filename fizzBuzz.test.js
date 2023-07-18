const prod_code = (number) => {
if(number % 3 == 0){
    return "Fizz";
}
if(number % 5 == 0){
    return "Buzz";
}

return false;
};

describe('Fizz Buzz', () => {

    it('Returns Fizz if the number is divisible by 3', () => {
        expect(prod_code(3)).toBe("Fizz");
    });

    it('Returns Buzz if the number is divisible by 5', () => {
        expect(prod_code(5)).toBe("Buzz");
    });


        // Arrange
        // Act
        // Assert


});
