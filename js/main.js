//-----------------------------Задание 2
var arr = [2, 4, 5, 7, 9, 4, 1, 16];
var arrMin;

function getMin(arr) {
  var minEl = arr[0];

  for ( let i = 0; i < arr.length; i++ ) {
    if ( minEl > arr[i] ) {
      minEl = arr[i];
    }
  }

  return minEl;
}

arrMin = getMin(arr);
console.log(arrMin);
document.getElementById("tasks__second-result").textContent = arrMin;

//-----------------------------Задание 3

var result = arr.filter(function(elem) {
	return elem % 2 == 0;
});

console.log(result);
document.getElementById("tasks__third-result").textContent = result;

//-----------------------------Задание 4

var persons = [
  { name: 'Johny Walker', birthDate: '1995-12-17' },
  { name: 'Andrew', birthDate: '2001-10-29' },
  { name: 'Viktor', birthDate: '1998-11-09' },
  { name: 'Andrew', birthDate: '2011-05-09' }
];

var searchName = 'Andrew';

var found = persons.filter(function(person){

  if ( person.name == searchName ){
    return person;
  }

});

console.log(found);
document.getElementById("tasks__four-result").textContent = found[0]['name'] + '__' + found[0]['birthDate'] + ' , ' + found[1]['name'] + '__' + found[1]['birthDate'];
