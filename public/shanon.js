const recipeTalks = document.querySelector('recipe-talks')
const recipeForm = document.querySelector('.recipe_form_hidden')

const date = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (let i = 0; i < 20; i++) {
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

const square = document.querySelectorAll('p')

for (let i = 0; i < 5; i++) {
  square[i].innerText = days[i]
  square[i].classList.add('weekDays')
}

if (new Date(date.getDay() == 5)) {
  square[5].innerText= new Date(date.getTime() - 345600000).toLocaleDateString('fr-Fr', options);//lundi
  square[6].innerText= new Date(date.getTime() - 259200000).toLocaleDateString('fr-FR', options);//mardi
  square[7].innerText= new Date(date.getTime() - 172000000).toLocaleDateString('fr-FR', options);//mercredi
  square[8].innerText= new Date(date.getTime() - 86400000).toLocaleDateString('fr-FR', options);//jeudi
  square[9].innerText= new Date(date.getTime()).toLocaleDateString('fr-FR', options);//vendredi
  square[10].innerText= new Date(date.getTime() + 259200000).toLocaleDateString('fr-FR', options);//lundi
  square[11].innerText= new Date(date.getTime() + 345600000).toLocaleDateString('fr-FR', options);
  square[12].innerText= new Date(date.getTime() + 432000000).toLocaleDateString('fr-FR', options);//mercredi
  square[13].innerText= new Date(date.getTime() + 518400000).toLocaleDateString('fr-FR', options);
  square[14].innerText= new Date(date.getTime() + 604800000).toLocaleDateString('fr-FR', options);//vdd
  square[15].innerText= new Date(date.getTime() + 864000000).toLocaleDateString('fr-FR', options);//lundi
  square[16].innerText= new Date(date.getTime() + 950400000).toLocaleDateString('fr-FR', options);
  square[17].innerText= new Date(date.getTime() + 1036800000).toLocaleDateString('fr-FR', options);//mercredi
  square[18].innerText= new Date(date.getTime() + 1123200000).toLocaleDateString('fr-FR', options);
  square[19].innerText= new Date(date.getTime() + 1209600000).toLocaleDateString('fr-FR', options);//vendredi
}