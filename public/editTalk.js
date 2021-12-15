const editBtn = document.querySelector('.edit-recipe-submit');
editBtn.addEventListener('click', () => {
    editTalk();
})

const form = document.querySelector('.edit-recipe-form');

const editTalk = () => {
    const newRecipe = form.querySelector('input[name="recipe"]').value;
    const newDate = form.querySelector('input[name="date"]').value;

    const editedData = {
        date: newDate,
        recipe: newRecipe
    };

    fetch('http://localhost:3000/dashboard/recipe/' + newDate, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedData)
    })
    .then(response => response.json())
    .then(result => {
        console.log(result);
        if (result[0].message) {
            alert(result[0].message);
        }
        window.location.reload();
    })
    .catch(error => {
        console.error('Error:', error);
    });

}