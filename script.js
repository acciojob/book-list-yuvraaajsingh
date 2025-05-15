function addRow() {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const isbn = document.getElementById("isbn");

  if (!title.value.trim() || !author.value.trim() || !isbn.value.trim()) {
    alert("Please fill all fields.");
    return;
  }

  const tableBody = document.getElementById("book-list");

  const newRow = document.createElement("tr");

  const titleCell = document.createElement("td");
  titleCell.innerText = title.value;

  const authorCell = document.createElement("td");
  authorCell.innerText = author.value;

  const isbnCell = document.createElement("td");
  isbnCell.innerText = isbn.value;

  const actionCell = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.onclick = () => newRow.remove();
  actionCell.appendChild(deleteBtn);

  newRow.appendChild(titleCell);
  newRow.appendChild(authorCell);
  newRow.appendChild(isbnCell);
  newRow.appendChild(actionCell);

  tableBody.appendChild(newRow);

  // Clear input fields
  title.value = "";
  author.value = "";
  isbn.value = "";
}
