// const num1 = parseFloat(prompt('Введіть перше число:'));
// const num2 = parseFloat(prompt('Введіть друге число:'));
// const operator = prompt('Введіть оператор (+, -, *, /):');
// let result;

// switch (operator) {
//   case '+':
//     result = num1 + num2;
//     break;
//   case '-':
//     result = num1 - num2;
//     break;
//   case '*':
//     result = num1 * num2;
//     break;
//   case '/':
//     result = num1 / num2;
//     break;
//   default:
//     console.log('Невірний оператор');
//     break;
// }

// console.log('Результат: ' + result);

// const rangeTrigger = document.querySelector('.range-trigger');

// rangeTrigger.addEventListener('click', () => {
//   const rangeInput = document.querySelector('.range-input').value;

//   switch (true) {
//     case rangeInput >= 55 && rangeInput <= 99:
//       alert('In range')
//     break;

//     default:
//     alert('Error')
//     break;
//   }

//   // if (rangeInput >= '55' && rangeInput <= '99') {
//   //   alert('In range!')
//   // } else {
//   //   alert('Error')
//   // }
// });

// const rangeTrigger = document.querySelector('.range-trigger');
// const userAge = 70;
// const ageGroups = ['діти', 'дорослі', 'пенсіонери'];

// rangeTrigger.addEventListener('click', () => {
  
//   switch (true) {
//     case userAge <= 16:
//       alert(`maxim is ${ageGroups[0]}`)
//     break;
//     case userAge >= 17 && userAge <= 60:
//       alert(`maxim is ${ageGroups[1]}`)
//     break;
//     case userAge >= 61 && userAge <= 100:
//       alert(`maxim is ${ageGroups[2]}`)
//     break;
//     default:
//       alert('error');
//     break;
//   };
// });

const triggerButton = document.querySelector('.range-trigger');
const ageGroups = ['діти', 'дорослі', 'пенсіонери', 'dinasours', 'aliens'];
const kidImg = document.querySelector('.kid-img');
const adultImg = document.querySelector('.adult-img');
const oldImg = document.querySelector('.old-img');
const dinaImg = document.querySelector('.dina-img');
const alienImg = document.querySelector('.alien-img')
const ageInputNValue = document.querySelector('.range-input');

triggerButton.addEventListener('click', () => {
  const ageInput = document.querySelector('.range-input').value;

  switch (true) {

    case ageInput <= 16:
      console.log(`${ageGroups[0]}`);

      switch (true) {

        case kidImg.classList.contains('inactive'):
          kidImg.classList.replace('inactive', 'active');
          triggerButton.classList.add('inactive');
          ageInputNValue.classList.add('inactive');
        break;

        default:
          kidImg.classList.replace('inactive', 'active');
          triggerButton.classList.replace('inactive', 'active');
          ageInputNValue.classList.add('inactive');
        break;

      };
      break;

      case ageInput >= 17 && ageInput <= 60:
        console.log(`${ageGroups[1]}`);
        switch (true) {
          case adultImg.classList.contains('inactive'):
            adultImg.classList.replace('inactive', 'active');
            triggerButton.classList.add('inactive');
            ageInputNValue.classList.add('inactive');
            break;
          default:
            adultImg.classList.replace('inactive', 'active');
            triggerButton.classList.replace('inactive', 'active');
            ageInputNValue.classList.add('inactive');
            break;
        }
        break;   

        case ageInput >= 61 && ageInput <= 100:
          console.log(`${ageGroups[2]}`);

          switch (true) {

            case oldImg.classList.contains('inactive'):
              oldImg.classList.replace('inactive', 'active');
              triggerButton.classList.add('inactive');
              ageInputNValue.classList.add('inactive');
              break;

            default:
              oldImg.classList.replace('inactive', 'active');
              triggerButton.classList.replace('inactive', 'active');
              ageInputNValue.classList.add('inactive');
              break;
          };

        break;

          case ageInput >= 101 && ageInput <= 4000:
          console.log(`${ageGroups[3]}`);

          switch (true) {

            case dinaImg.classList.contains('inactive'):
              dinaImg.classList.replace('inactive', 'active');
              triggerButton.classList.add('inactive');
              ageInputNValue.classList.add('inactive');
              break;

            default:
              dinaImg.classList.replace('inactive', 'active');
              triggerButton.classList.replace('inactive', 'active');
              ageInputNValue.classList.add('inactive');
              break;
          };

          break;

          case ageInput >= 4001:
          console.log(`${ageGroups[4]}`);
          switch (true) {

            case alienImg.classList.contains('inactive'):
              alienImg.classList.replace('inactive', 'active');
              triggerButton.classList.add('inactive');
              ageInputNValue.classList.add('inactive');
              break;

            default:
              alienImg.classList.replace('inactive', 'active');
              triggerButton.classList.replace('inactive', 'active');
              ageInputNValue.classList.add('inactive');
              break;
          };

        break;
    };

    if (isNaN(ageInput)) {
      alert('Write a valid number')
      setInterval(() => {
        window.close();
      }, 1500);
    }
});
