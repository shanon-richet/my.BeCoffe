const recipeForm = document.querySelector('.recipe_form')

const date = new Date();
const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
// const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// for (let i = 0; i < 5; i++) {
//     const weekday = document.createElement('p')

//     weekday[i].innerText = days[i]
//     weekday[i].classList.add('weekDays')
// }

for (let i = 0; i < 15; i++) {
    const calendar = document.querySelector('.calendar')
    const squares = document.createElement('div')
    squares.classList.add('calendar-square')

    calendar.appendChild(squares);

    squares.onclick = (e) => {
        recipeForm.style.display = 'flex';
        
        const inputDate = recipeForm.querySelector('.date')
        inputDate.value = e.target.className.split(" ")[1];

        const editRecipeForm = document.querySelector('.edit-recipe-form');
        if (editRecipeForm.style.display === 'flex') {
            editRecipeForm.style.display = 'none';
        }
    }
}

const square = document.querySelectorAll('.calendar-square');

if (new Date(date.getDay() == 0)) {
  square[0].innerText= new Date(date.getTime() - 345600000).toLocaleDateString('fr-Fr', options);//lundi
  square[0].classList.add(new Date(date.getTime() - 345600000).toISOString().split('T')[0]);

  square[1].innerText= new Date(date.getTime() - 259200000).toLocaleDateString('fr-FR', options);//mardi
  square[1].classList.add(new Date(date.getTime() - 259200000).toISOString().split('T')[0]);

  square[2].innerText= new Date(date.getTime() - 172000000).toLocaleDateString('fr-FR', options);//mercredi
  square[2].classList.add(new Date(date.getTime() - 172000000).toISOString().split('T')[0]);

  square[3].innerText= new Date(date.getTime() - 86400000).toLocaleDateString('fr-FR', options);//jeudi
  square[3].classList.add(new Date(date.getTime() - 86400000).toISOString().split('T')[0]);

  square[4].innerText= new Date(date.getTime()).toLocaleDateString('fr-FR', options);//vendredi
  square[4].classList.add(new Date(date.getTime()).toISOString().split('T')[0]);

  square[5].innerText= new Date(date.getTime() + 259200000).toLocaleDateString('fr-FR', options);//lundi
  square[5].classList.add(new Date(date.getTime() + 259200000).toISOString().split('T')[0]);

  square[6].innerText= new Date(date.getTime() + 345600000).toLocaleDateString('fr-FR', options);
  square[6].classList.add(new Date(date.getTime() + 345600000).toISOString().split('T')[0]);

  square[7].innerText= new Date(date.getTime() + 432000000).toLocaleDateString('fr-FR', options);//mercredi
  square[7].classList.add(new Date(date.getTime() + 432000000).toISOString().split('T')[0]);

  square[8].innerText= new Date(date.getTime() + 518400000).toLocaleDateString('fr-FR', options);
  square[8].classList.add(new Date(date.getTime() + 518400000).toISOString().split('T')[0]);

  square[9].innerText= new Date(date.getTime() + 604800000).toLocaleDateString('fr-FR', options);//vdd
  square[9].classList.add(new Date(date.getTime() + 604800000).toISOString().split('T')[0]);

  square[10].innerText= new Date(date.getTime() + 864000000).toLocaleDateString('fr-FR', options);//lundi
  square[10].classList.add(new Date(date.getTime() + 864000000).toISOString().split('T')[0]);

  square[11].innerText= new Date(date.getTime() + 950400000).toLocaleDateString('fr-FR', options);
  square[11].classList.add(new Date(date.getTime() + 950400000).toISOString().split('T')[0]);

  square[12].innerText= new Date(date.getTime() + 1036800000).toLocaleDateString('fr-FR', options);//mercredi
  square[12].classList.add(new Date(date.getTime() + 1036800000).toISOString().split('T')[0]);

  square[13].innerText= new Date(date.getTime() + 1123200000).toLocaleDateString('fr-FR', options);
  square[13].classList.add(new Date(date.getTime() + 1123200000).toISOString().split('T')[0]);

  square[14].innerText= new Date(date.getTime() + 1209600000).toLocaleDateString('fr-FR', options);//vendredi
  square[14].classList.add(new Date(date.getTime() + 1209600000).toISOString().split('T')[0]);
}

const closeFormBtns = document.querySelectorAll('.close-form');

for (const button of closeFormBtns) {
    button.onclick = () => {
        const parent = button.parentNode;
        parent.style.display = 'none';
    }
}