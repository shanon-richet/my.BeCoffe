const deleteButton = editForm.querySelector('.delete-talk-btn');
deleteButton.addEventListener('click', () => {
    const date = editForm.querySelector('input[name="date"]').value;
    deleteTalk(date);
})

function deleteTalk(date) {
    fetch('http://localhost:3000/dashboard/recipe/' + date, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(result => {
        if (result.error){
            alert(result.error);
        } else {
            window.location.reload();
        }
    })
    .catch(error => {
        console.log('Error:', error);
    });
}