const prod_code = (number) => {
if(number % 3 == 0){
    return true;
}
return false;
};

describe('Fizz Buzz', () => {
    it('Returns Fizz if the number is divisible by 3', () => {
        // Arrange
        // Act
        // Assert
        expect(prod_code(3)).toBe('thing');
    });

});
