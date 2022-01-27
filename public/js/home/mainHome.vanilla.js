/* -------------------------- Array --------------------------- */

// Create an array
const namesArray = ["Juan Carlos", "Daniel", "Miguel", "Victor"];

/* Iterate an array */

const arraySampleMethod1 = () => {
  const __containerArrayMethod1 = containerArrayMethod1;
  var content = `<h3>Array Method #1</h3>`;

  for (let index = 0; index < namesArray.length; index++) {
    content += `<p>${namesArray[index]}</p>`;
  }
  __containerArrayMethod1.innerHTML = content;
};

const arraySampleMethod2 = () => {
  let index = 0;
  const __containerArrayMethod2 = containerArrayMethod2;
  var content = `<h3>Array Method #2</h3>`;

  while (index < namesArray.length) {
    content += `<p>${namesArray[index]}</p>`;
    index++;
  }
  __containerArrayMethod2.innerHTML = content;
};

const arraySampleMethod3 = () => {
  const __containerArrayMethod3 = containerArrayMethod3;
  var content = `<h3>Array Method #3</h3>`;

  namesArray.forEach((element) => {
    content += `<p>${element}</p>`;
  });
  __containerArrayMethod3.innerHTML = content;
};

/* -------------------------- Object --------------------------- */

// Create an object

const person = { firstName: "John", lastName: "Doe", age: 46 };

// Get information from an object

const objectSampleMethod1 = () => {
  const __containerObjectMethod1 = containerObjectMethod1;
  var content = `<h3>Object Method #1</h3>`;

  content += `
    <p>First Name: ${person.firstName}</p>
    <p>Last Name: ${person.lastName}</p>
    <p>Age: ${person.age}</p>
  `;

  __containerObjectMethod1.innerHTML = content;
};

const objectSampleMethod2 = () => {
  const __containerObjectMethod2 = containerObjectMethod2;
  var content = `<h3>Object Method #2</h3>`;

  content += `
    <p>First Name: ${person["firstName"]}</p>
    <p>Last Name: ${person["lastName"]}</p>
    <p>Age: ${person["age"]}</p>
  `;

  __containerObjectMethod2.innerHTML = content;
};

// Array of objects

// Create a matrix

const matrix = [
  { firstName: "John", lastName: "Doe", age: 46 },
  { firstName: "Juan Carlos", lastName: "Sequeira", age: 20 },
  { firstName: "Miguel", lastName: "Piedra", age: 25 },
];

const matrixSampleMethod1 = () => {
  const __containerMatrixMethod1 = containerMatrixMethod1;
  var content = `<h3>Matrix Method #1</h3>`;

  matrix.forEach((element) => {
    content += `
      <p>First Name: ${element["firstName"]}</p>
      <p>Last Name: ${element["lastName"]}</p>
      <p>Age: ${element["age"]}</p>
      <span>----------------------</span>
      <br/>
  `;
  });

  __containerMatrixMethod1.innerHTML = content;
};

// Array

arraySampleMethod1();
arraySampleMethod2();
arraySampleMethod3();

// Object

objectSampleMethod1();
objectSampleMethod2();

// Matrix

matrixSampleMethod1();
