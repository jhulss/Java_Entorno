import fizzBuzz from "./fizzBuzz";

describe("FizzBuzz", () => {
    it("genera para un numero", () => {
      expect(fizzBuzz(1)).toEqual("1");
    });

    it("genera para otro numero", () => {
        expect(fizzBuzz(2)).toEqual("2");
      });

    it("genera fizz para 3", () => {
        expect(fizzBuzz(3)).toEqual("Fizz");
      });
    it("genera fizz para multiplo de 3", () => {
        expect(fizzBuzz(6)).toEqual("Fizz");
      });
    it("genera otro numero", () =>{
      expect(fizzBuzz(4)).toEqual("4");
    });
    it("genera buzz para 5", () => {
      expect(fizzBuzz(5)).toEqual("Buzz");
    });
  it("genera buzz para multiplos de 5", () => {
      expect(fizzBuzz(10)).toEqual("Buzz");
    });

  });


 