function tipPerPerson(bill, tip, people) {
  return (bill * (tip / 100)) / people;
}

console.log(tipPerPerson(500, 15, 7));
