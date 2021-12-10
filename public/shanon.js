const recipeTalks = document.querySelector('recipe-talks')
const recipeForm = document.querySelector('.recipe_form_hidden')

const date = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

for (let i = 0; i < 15; i++) {
    const calendar = document.createElement('section')
    const squares = document.createElement('p')
    squares.classList.add('calendar-square')

    calendar.appendChild(squares);
    recipeTalks.appendChild(calendar);

    squares.onclick = (e) => {
        if (recipeForm.classList.contains('recipe_form_hidden')) {
            recipeForm.classList.add('recipe_form')
            recipeForm.classList.remove('recipe_form_hidden')
            var inputDate = document.querySelector('.date')
            inputDate.value = e.target.innerText;
        }
        else {
            recipeForm.classList.add('recipe_form_hidden')
            recipeForm.classList.remove('recipe_form')
        }
    }
}

const square = document.querySelectorAll('.calendar-square')
square[0].innerText= new Date(date.getTime()).toLocaleDateString('fr-FR', options);
square[1].innerText= new Date(date.getTime() + 86400000).toLocaleDateString('fr-FR', options);
square[2].innerText= new Date(date.getTime() + 172000000).toLocaleDateString('fr-FR', options);
square[3].innerText= new Date(date.getTime() + 259200000).toLocaleDateString('fr-FR', options);
square[4].innerText= new Date(date.getTime() + 345600000).toLocaleDateString('fr-FR', options);
square[5].innerText= new Date(date.getTime() + 432000000).toLocaleDateString('fr-FR', options);
square[6].innerText= new Date(date.getTime() + 518400000).toLocaleDateString('fr-FR', options);
square[7].innerText= new Date(date.getTime() + 604800000).toLocaleDateString('fr-FR', options);
square[8].innerText= new Date(date.getTime() + 691200000).toLocaleDateString('fr-FR', options);
square[9].innerText= new Date(date.getTime() + 777600000).toLocaleDateString('fr-FR', options);
square[10].innerText= new Date(date.getTime() + 864000000).toLocaleDateString('fr-FR', options);
square[11].innerText= new Date(date.getTime() + 950400000).toLocaleDateString('fr-FR', options);
square[12].innerText= new Date(date.getTime() + 1036800000).toLocaleDateString('fr-FR', options);
square[13].innerText= new Date(date.getTime() + 1123200000).toLocaleDateString('fr-FR', options);
square[14].innerText= new Date(date.getTime() + 1209600000).toLocaleDateString('fr-FR', options);

// square[0].innerText= new Date(date.getTime());
// square[1].innerText= new Date(date.getTime() + 86400000);
// square[2].innerText= new Date(date.getTime() + 172000000);
// square[3].innerText= new Date(date.getTime() + 259200000);
// square[4].innerText= new Date(date.getTime() + 345600000);
// square[5].innerText= new Date(date.getTime() + 432000000);
// square[6].innerText= new Date(date.getTime() + 518400000);
// square[7].innerText= new Date(date.getTime() + 604800000);
// square[8].innerText= new Date(date.getTime() + 691200000);
// square[9].innerText= new Date(date.getTime() + 777600000);
// square[10].innerText= new Date(date.getTime() + 864000000);
// square[11].innerText= new Date(date.getTime() + 950400000);
// square[12].innerText= new Date(date.getTime() + 1036800000);
// square[13].innerText= new Date(date.getTime() + 1123200000);
// square[14].innerText= new Date(date.getTime() + 1209600000);
