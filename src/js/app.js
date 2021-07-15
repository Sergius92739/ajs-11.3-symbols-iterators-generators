/**
 * Функция, которая определяет, соответствует ли объект протоколу итерирования,
 * возвращая, соответственно, true/false.
 * @param {object} object , в виде объекта
 * @returns true / false
 */

export default function canIterate(object) {
  try {
    if (object[Symbol.iterator]) {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
}
