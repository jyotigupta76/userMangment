document.getElementById('expenseForm').addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const userName = document.getElementById('userName').value;
  const expenseAmount = document.getElementById('expenseAmount').value;
  const splitMethod = document.getElementById('splitMethod').value;

  // Send this data to the backend via API call (using fetch or axios)

  // For now, let's just log the input
  console.log({
    userName,
    expenseAmount,
    splitMethod
  });

  // Reset the form
  document.getElementById('expenseForm').reset();
}

// Function to update additional fields based on split method
document.getElementById('splitMethod').addEventListener('change', function(event) {
  const splitMethod = event.target.value;
  const extraFields = document.getElementById('extraFields');

  if (splitMethod === 'exact' || splitMethod === 'percentage') {
    extraFields.classList.remove('hidden');
    extraFields.innerHTML = `
      <label for="splitDetails">Enter split details:</label>
      <input type="text" id="splitDetails" placeholder="E.g., exact amounts or percentages">
    `;
  } else {
    extraFields.classList.add('hidden');
    extraFields.innerHTML = '';
  }
});
