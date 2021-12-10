export function deleteTalk(date) {

    const dateObj = {
        date: date
    };

    fetch('http://localhost:3000/dashboard/recipe/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(dateObj)
    })
    .then(response => response.json())
    .then(result => {
        window.location.reload();
    })
    .catch(error => {
        console.error('Error:', error);
    });
}