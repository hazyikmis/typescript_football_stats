//GENERICS

//silly method below
const addOne = (a: number): number => {
  return a + 1;
};
const addTwo = (a: number): number => {
  return a + 2;
};
const addThree = (a: number): number => {
  return a + 3;
};

//clever way:
const add = (a: number, b: number): number => {
  return a + b;
};

//////// silly ways below again ////
class HoldNumber {
  data: number;
}

class HoldString {
  data: string;
}

const holdNumber = new HoldNumber();
holdNumber.data = 123;
const holdString = new HoldString();
holdString.data = '123';

//////// generics ////
class HoldAnything<TypeOfData> {
  data: TypeOfData;
}

const holdNumber2 = new HoldAnything<number>();
holdNumber2.data = 123;
const holdString2 = new HoldAnything<string>();
holdString2.data = '123';
