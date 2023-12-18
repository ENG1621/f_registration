function displayInfo() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let age = document.getElementById('age').value;
  let phone= document.getElementById('phone').value;

  const displayDiv = document.getElementById('displayInfo');
  
  // Display the information
  displayDiv.innerHTML = `
    <h2>Information Entered:</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>phone:</strong> ${phone}</p>
  `;
}
