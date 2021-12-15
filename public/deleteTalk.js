const form = document.querySelector('.edit-recipe-form');

const button = form.querySelector('.delete-talk-btn');
button.addEventListener('click', () => {
    const date = form.querySelector('input[name="date"]').value;
    deleteTalk(date);
})

function deleteTalk(date) {
    console.log(date);

    fetch('http://localhost:3000/dashboard/recipe/' + date, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(result => {
        window.location.reload();
    })
    .catch(error => {
        console.error('Error:', error);
    });
}