import multi from "./multiplicador";

describe("Multiplocar", () => {
    it("deberia multiplicar dos numeros", () => {
      expect(multi(3, 2)).toEqual(6);
    });
  });