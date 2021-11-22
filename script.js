const myButton = document.querySelector("button");
console.log(myButton);
let place = document.getElementById("place");
console.log(place);

myButton.addEventListener("click", addValue);

function addValue() {
  console.log("labas");
  const inputValueRow = document.getElementById("myInputRows").value;
  const inputValueCol = document.getElementById("myInputCol").value;

  console.log(inputValueRow);
  console.log(inputValueCol);

  for (let i = 0; i < inputValueRow; i++) {
    const myRow = document.createElement("tr");
    place.appendChild(myRow);

    // eiluteje kuriu stulpelius
    for (let i = 0; i < inputValueCol; i++) {
      const myCol = document.createElement("td");
      myCol.innerText = "stulpelis";
      myRow.appendChild(myCol);
    }
  }
}
