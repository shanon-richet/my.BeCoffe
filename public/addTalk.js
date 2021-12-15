const addTalkToDB = (e) => {
    e.preventDefault();

    const form = document.querySelector('.recipe_form');

    const id = 5;

    const formData = {
        id: id,
        date: form.date.value,
        recipe: form.recipe.value,
    };

    fetch('http://localhost:3000/dashboard/recipe/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(response => response.json())
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.error('Error:', error);
    });

    form.style.display = 'none';
    window.location.reload(); 
}

const submitRecipeBtn = document.querySelector('.submit_recipe');
submitRecipeBtn.addEventListener('click', addTalkToDB);