// ? Question-2:Write a function called "printPersons" that takes an array of persons and displays them on the screen.
const persons = [
    { name: "Alice", age: 18 },
    { name: "Bob", age: 21 },
    { name: "Charlie", age: 15 },
  ];
  function printPersons (persons) {
    const body = document.querySelector('body')
    const container = document.createElement('div')
    body.appendChild(container)
    persons.forEach(person=> {
      const paragraph = document.createElement('p') 
      paragraph.textContent = `${persons.name} is ${persons.age}years old` ; 
  
      container.appendChild(paragraph)
    });
    
  }
  printPersons(persons);
  
  