function addContactToTable() {
    const tableBody = document.getElementById('contactTable');
    
    for (let i = 0; i < localStorage.length; i++) {
        var row = document.createElement('tr');

        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        console.log("The key is " + key + " and the value is " + value)
        row.innerHTML = `
            <td>${key}</td>
            <td>${value}</td>
            <td><button onclick="deleteContact(this)">Delete</button>
            <button onclick="updateContact(this)">Update</button></td>
        `;
        tableBody.appendChild(row);
    }
}
setTimeout(()=>{ 
    addContactToTable(); 
},100);

function submit(event) {
    let inputKey = document.getElementById('firstName').value;
    let inputValue = document.getElementById('lastName').value;
   
    localStorage.setItem(inputKey, inputValue);
  }
    


function deleteContact(button) {

   const row = button.closest('tr');
   let delKey = row.children[0].textContent;
   localStorage.removeItem(delKey);
   location.reload();
}

function updateContact(button) {

    let row = button.parentNode.parentNode;
    let updKey = row.children[0].textContent;
    let updvalue = row.children[1].textContent;
    let updPhoneNumber = row.children[2].textContent;
    document.getElementById('key').value = updKey;
    document.getElementById('value').value = updvalue;
    document.getElementById('phoneNumber').value = updPhoneNumber;
    document.getElementById("addBtn").style.display = 'none';
    document.getElementById("updateBtn").style.display = 'inline';
    document.getElementById("updateBtn").setAttribute("onclick", `updateContact2('${contactId}')`)
}

