const fName = document.getElementById("fName");
const lastName = document.getElementById("lastName");
const brith = document.getElementById("brith");
const Id = document.getElementById("Id");
const city = document.getElementById("city");
const btn = document.getElementById("btn");
const search = document.getElementById("search");
search.placeholder = "Type Name Or ID";
const btnSearch = document.getElementById("btnSearch");

let allSubjects = [];

function upper(input) {
  input.value = input.value.toUpperCase();
}

btn.addEventListener("click", () => {
  let tempDate = new Date();
  let obj = {
    name: fName.value,
    lastName: lastName.value,
    brith: brith.value,
    id: Id.value,
    city: city.value,
    date: `${tempDate.getDate()}/${
      tempDate.getMonth() + 1
    }/${tempDate.getFullYear()}`,
    time: `${tempDate.getHours()}:${
      tempDate.getMinutes() < 10
        ? "0" + tempDate.getMinutes()
        : tempDate.getMinutes()
    }:${
      tempDate.getSeconds() < 10
        ? "0" + tempDate.getSeconds()
        : tempDate.getSeconds()
    }`,
  };
  if (beforInsert(obj)) {
    allSubjects.push(obj);
    printTable(obj);
  } else {
    alert("THIS ID IS ALLREADY EXIST,CHECK AGAIN");
  }
});

function beforInsert(obj) {
  for (let i = 0; i < allSubjects.length; i++) {
    if (obj.id == allSubjects[i].id) {
      return false;
    }
  }
  return true;
}

function printTable(obj) {
  if (allSubjects.length == 1) {
    newEl = document.createElement("table");
    newEl.setAttribute("id", "idTable");
    newEl.innerHTML = `<tr>
       <th>Name</th>
       <th>Last name</th>
       <th>Brith</th>
       <th>ID</th>
       <th>City</th>
       <th>Date</th>
       <th>Time</th>
       <th></th>
       </tr>`;
    document.body.appendChild(newEl);
  }
  const Table = document.getElementById("idTable");
  Table.innerHTML += `<tr>
    <td>${obj.name}</td>
    <td>${obj.lastName}</td>
    <td>${obj.brith}</td>
    <td>${obj.id}</td>
    <td>${obj.city}</td>
    <td>${obj.date}</td>
    <td>${obj.time}</td>
    </tr>`;
}

btnSearch.addEventListener("click", () => {
  if (search.value) {
    let obj;
    for (let i = 0; i < allSubjects.length; i++) {
      if (search.value == allSubjects[i].id ||search.value == allSubjects[i].name) {
        obj = allSubjects[i];
      }
    }
    console.log(obj);
  }
});
