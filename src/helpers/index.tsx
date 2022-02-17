import { Card } from "./Interfaces";

export function createCard() {
  return {
    id: GenerateUniqueId(),
    innerNumber: GenerateRandomNumber(1, 50),
  };
}

export function GenerateUniqueId() {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}

export function GenerateRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function sortObjectArray(array: Card[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j].innerNumber > array[j + 1].innerNumber) {
        const x = array[j];
        array[j] = array[j + 1];
        array[j + 1] = x;
      }
    }
  }
}

