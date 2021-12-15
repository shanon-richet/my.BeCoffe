const editForm = document.querySelector('.edit-recipe-form');

const editButton = editForm.querySelector('.edit-recipe-btn');
editButton.addEventListener('click', () => {
    const date = editForm.querySelector('input[name="date"]').value;
    editTalk(date);
})


const editTalk = (date) => {
    const newRecipe = editForm.querySelector('input[name="recipe"]').value;

    const editedData = {
        recipe: newRecipe
    };

    fetch('http://localhost:3000/dashboard/recipe/' + date, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedData)
    })
    .then(response => response.json())
    .then(result => {
        if (result.error){
            alert(result.error);
        }
        window.location.reload();
    })
    .catch(error => {
        console.log('Error:', error);
    });
}