function getAndUpdate(){
    console.log("Updating list....");
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    }

    else{
        itemJsonArraystr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    }
    
    update();
    
}

function update(){
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    }

    else{
        itemJsonArraystr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
    }

    // populate the table
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str +=`
        <th scope="row">${index+1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class = "btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
          </tr>
        `;

    });
    tableBody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
// update();
function deleted(itemIdx){
    console.log("Delete", itemIdx);
    itemJsonArrayStr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // Delete itemIndex element form the array

    itemJsonArray.splice(itemIdx,1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();

}
function clearSt(){
    if(confirm("Want to Clear Compelete Table?")){
    console.log("Clearing The Storage");
    localStorage.clear();
    }
    update();
}
let clr = document.getElementById("clear");
clr.addEventListener("click",clearSt);