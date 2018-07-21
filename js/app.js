function init() {
  let arrayNum = [];
  do {
    let inputVal = prompt('Enter didgits: ');
    if (inputVal === null) {
      break;
    } else {
      if (!isNaN(inputVal)) {
        arrayNum.push(inputVal);
      } else {
        alert('Было введено не число, попробуйте еще раз');
      }
    }
  } while (true);

    if(arrayNum.length > 0)
    {break;}

  let sum = 0;

  for (const i of arrayNum) {
      sum += arrayNum[i];
  }

  alert(`Общая сумма чисел равна ${sum}`);

}
