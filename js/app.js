function init() {
  let arrayNum = [];
  do {
    let inputVal = prompt('Enter didgits: ');
    if (inputVal === null) {
      break;
    } else {
      if (!isNaN(parseInt(inputVal))) {
        arrayNum.push(parseInt(inputVal));
      } else {
        alert('Было введено не число, попробуйте еще раз');
      }
    }
  } while (true);

  if (arrayNum.length == 0) {
    return false;
  }

  let sum = 0;

  for (const i of arrayNum) {
    sum += i;
  }

  alert(`Общая сумма чисел равна ${sum}`);
}
