// ------if else------

// const numOrStr = prompt('input number or string');
// console.log(numOrStr)

// if (numOrStr === null) {
//     console.log('ви скасували')
// } else if (numOrStr.trim() === '') {
//     console.log('Empty String');
// } else if (isNaN(+numOrStr)) {
//     console.log(' number is Ba_NaN')
// } else {
//     console.log('OK!')
// }

// ------switch case------
const numOrStrSwitch = prompt('input number or string');
console.log(numOrStrSwitch);

switch (true) {

    case numOrStrSwitch === null:
        console.log('ви скасували');
        break;

    case numOrStrSwitch.trim() === '':
        console.log('Empty String');
        break;

    case isNaN(+numOrStrSwitch):
        console.log(' number is Ba_NaN');
        break;

    default:
        console.log('OK!');
        break;

}


