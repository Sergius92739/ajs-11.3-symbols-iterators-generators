import canIterate from '../app';

test('Функция должна вернуть корректные значения', () => {
  expect(canIterate(new Map())).toBeTruthy();
  expect(canIterate(new Set())).toBeTruthy();
  expect(canIterate(null)).toBeFalsy();
  expect(canIterate(10)).toBeFalsy();
  expect(canIterate('Netology')).toBeTruthy();
});
