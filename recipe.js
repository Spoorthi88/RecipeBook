function addRecipe() {
  const name = document.getElementById('recipeName').value.trim();
  const ingredients = document.getElementById('ingredients').value.trim();
  const steps = document.getElementById('steps').value.trim();
  const errorMessage = document.getElementById('errorMessage');
  const successMessage = document.getElementById('successMessage');

  if (!name || !ingredients || !steps) {
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
    return;
  }

  errorMessage.style.display = 'none';
  successMessage.style.display = 'block';

  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 3000);

  // Clear fields
  document.getElementById('recipeName').value = '';
  document.getElementById('ingredients').value = '';
  document.getElementById('steps').value = '';
  clearPreview();
}