import {
  changeStringCase,
  sumOfArray,
  divisibleBy,
  addDotsToString,
  objectEntries,
} from '../index';

describe('changeStringCase()', () => {
  describe('must return', () => {
    test('uppercased string', function () {
      const result = changeStringCase('test STRING', 'uppercase');

      expect(result).toStrictEqual('TEST STRING');
    });

    test('lowercased string', function () {
      const result = changeStringCase('TEST string', 'lowercase');

      expect(result).toStrictEqual('test string');
    });

    test('default string', function () {
      const result = changeStringCase('TEST string', '');

      expect(result).toStrictEqual('TEST string');
    });
  });
});

describe('sumOfArray()', () => {
  describe('must return sum of all numbers in array which contains', function () {
    test('only numbers type', function () {
      const result = sumOfArray([1, 2, 3, 4, 5]);

      expect(result).toEqual(15);
    });

    test('different types', function () {
      const result = sumOfArray([
        1,
        ['qw', 75],
        { id: 3487 },
        3,
        true,
        5,
        'asd',
      ]);

      expect(result).toStrictEqual(9);
    });
  });
});

describe('divisibleBy()', () => {
  test('must return array which contains numbers divisible by 2 without a remainder', function () {
    const result = divisibleBy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);

    expect(result).toStrictEqual([2, 4, 6, 8, 10]);
  });
});

describe('addDotsToString()', () => {
  describe('must return', () => {
    test('string with total length 10 symbols including 3 dots in the end', function () {
      const result = addDotsToString('very long test string', 10);

      expect(result).toStrictEqual('very lo...');
    });

    test('default string', function () {
      const result = addDotsToString('very long test string', 100);

      expect(result).toStrictEqual('very long test string');
    });
  });
});

describe('objectEntries()', () => {
  test('must return new array of arrays which contains 2 values - object key and object value', function () {
    const arg = {
      name: 'first name',
      surname: 'last name',
      age: 21,
    };

    const result = objectEntries(arg);

    expect(result).toStrictEqual([
      ['name', 'first name'],
      ['surname', 'last name'],
      ['age', 21],
    ]);
  });
});
