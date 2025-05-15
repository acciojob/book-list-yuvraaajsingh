//your JS code here. If required.
function addRow() {
  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let isbn = document.getElementById("isbn");

  let tableteg = document.getElementById("table-body");
  let newRow = document.createElement("tr");
  let newTitle = document.createElement("td");
  let newAuthor = document.createElement("td");
  let newISBN = document.createElement("td");
  let dltBTn= document.createElement("button");

  newTitle.innerText = title.value;
  newAuthor.innerText = author.value;
  newISBN.innerText = isbn.value;
  dltBTn.innerText= "❌";

  newRow.appendChild(newTitle);
  newRow.appendChild(newAuthor);
  newRow.appendChild(newISBN);
  newRow.appendChild(dltBTn);
  tableteg.appendChild(newRow);

  dltBTn.onclick = function(){
    newRow.remove();
  }
}
