
it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment(
      {
        amount: 1200,
      years: 1,
      rate: 0,
      }
    )).toEqual('100.00');
  });
  
  
  it("should return a result with 2 decimal places", function() {
    expect(removeDecimals(3.33333333)).toEqual('3.33')
  });
  