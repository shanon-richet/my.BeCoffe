const recipeForm = document.querySelector('.recipe_form')

const date = new Date();
const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (let i = 0; i < 20; i++) {
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

for (let i = 0; i < 5; i++) {
  square[i].innerText = days[i]
  square[i].setAttribute('class', 'week-days')
}

if (date.getDay() == 5) {
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

if (date.getDay() == 4) {
  square[5].innerText= new Date(date.getTime() - 259200000).toLocaleDateString('fr-Fr', options);//lundi
  square[6].innerText= new Date(date.getTime() - 172000000).toLocaleDateString('fr-FR', options);//mardi
  square[7].innerText= new Date(date.getTime() - 86400000).toLocaleDateString('fr-FR', options);//mercredi
  square[8].innerText= new Date(date.getTime()).toLocaleDateString('fr-FR', options);//jeudi
  square[9].innerText= new Date(date.getTime() + 86400000).toLocaleDateString('fr-FR', options);//vendredi
  square[10].innerText= new Date(date.getTime() + 172000000).toLocaleDateString('fr-FR', options);//lundi
  square[11].innerText= new Date(date.getTime() + 259200000).toLocaleDateString('fr-FR', options);
  square[12].innerText= new Date(date.getTime() + 345600000).toLocaleDateString('fr-FR', options);//mercredi
  square[13].innerText= new Date(date.getTime() + 432000000).toLocaleDateString('fr-FR', options);
  square[14].innerText= new Date(date.getTime() + 518400000).toLocaleDateString('fr-FR', options);//vdd
  square[15].innerText= new Date(date.getTime() + 604800000).toLocaleDateString('fr-FR', options);//lundi
  square[16].innerText= new Date(date.getTime() + 864000000).toLocaleDateString('fr-FR', options);
  square[17].innerText= new Date(date.getTime() + 950400000).toLocaleDateString('fr-FR', options);//mercredi
  square[18].innerText= new Date(date.getTime() + 1036800000).toLocaleDateString('fr-FR', options);
  square[19].innerText= new Date(date.getTime() + 1123200000).toLocaleDateString('fr-FR', options);//jeudi
  square[20].innerText= new Date(date.getTime() + 1209600000).toLocaleDateString('fr-FR', options);
}

if (date.getDay() == 3) {
  square[5].innerText= new Date(date.getTime() - 172000000).toLocaleDateString('fr-FR', options);//lundi
  square[6].innerText= new Date(date.getTime() - 86400000).toLocaleDateString('fr-FR', options);//mardi
  square[7].innerText= new Date(date.getTime()).toLocaleDateString('fr-FR', options);//mercredi
  square[8].innerText= new Date(date.getTime() + 86400000).toLocaleDateString('fr-FR', options);//jeudi
  square[9].innerText= new Date(date.getTime() + 172000000).toLocaleDateString('fr-FR', options);//vendredi
  square[10].innerText= new Date(date.getTime() + 432000000).toLocaleDateString('fr-FR', options);//lundi
  square[13].innerText= new Date(date.getTime() + 518400000).toLocaleDateString('fr-FR', options);//mardi
  square[14].innerText= new Date(date.getTime() + 604800000).toLocaleDateString('fr-FR', options);//mercredi
  square[15].innerText= new Date(date.getTime() + 864000000).toLocaleDateString('fr-FR', options);
  square[16].innerText= new Date(date.getTime() + 950400000).toLocaleDateString('fr-FR', options);//vendredi
  square[17].innerText= new Date(date.getTime() + 1209600000).toLocaleDateString('fr-FR', options);//lundi
  square[18].innerText= new Date(date.getTime() + 1123200000).toLocaleDateString('fr-FR', options);//mardi
  square[19].innerText= new Date(date.getTime() + 1209600000).toLocaleDateString('fr-FR', options);
}

if (date.getDay() == 2) {
  square[5].innerText= new Date(date.getTime() - 86400000).toLocaleDateString('fr-FR', options);//lundi
  square[6].innerText= new Date(date.getTime()).toLocaleDateString('fr-FR', options);//mardi
  square[7].innerText= new Date(date.getTime() + 86400000).toLocaleDateString('fr-FR', options);//mercredi
  square[8].innerText= new Date(date.getTime() + 172000000).toLocaleDateString('fr-FR', options);
  square[9].innerText= new Date(date.getTime() + 259200000).toLocaleDateString('fr-FR', options);//vendredi
  square[10].innerText= new Date(date.getTime() + 432000000).toLocaleDateString('fr-FR', options);//lundi
  square[11].innerText= new Date(date.getTime() + 518400000).toLocaleDateString('fr-FR', options);//mardi
  square[12].innerText= new Date(date.getTime() + 604800000).toLocaleDateString('fr-FR', options);//mercredi
  square[13].innerText= new Date(date.getTime() + 691200000).toLocaleDateString('fr-FR', options);//jeudi
  square[14].innerText= new Date(date.getTime() + 777600000).toLocaleDateString('fr-FR', options);//vendredi  
  square[15].innerText= new Date(date.getTime() + 1209600000).toLocaleDateString('fr-FR', options);//lundi
  square[16].innerText= new Date(date.getTime() + 1123200000).toLocaleDateString('fr-FR', options);//mardi
  square[17].innerText= new Date(date.getTime() + 1209600000).toLocaleDateString('fr-FR', options);
  square[18].innerText= new Date(date.getTime() + 12960000000).toLocaleDateString('fr-FR', options);//jeudi
  square[19].innerText= new Date(date.getTime() + 1382400000).toLocaleDateString('fr-FR', options);//vendredi
}

if (new Date(date.getDay() == 1)) {
  square[10].innerText= new Date(date.getTime() + 518400000).toLocaleDateString('fr-FR', options);//L
  square[11].innerText= new Date(date.getTime() + 604800000).toLocaleDateString('fr-FR', options);
  square[12].innerText= new Date(date.getTime() + 691200000).toLocaleDateString('fr-FR', options);
  square[13].innerText= new Date(date.getTime() + 777600000).toLocaleDateString('fr-FR', options);
  square[14].innerText= new Date(date.getTime() + 864000000).toLocaleDateString('fr-FR', options);//vendredi
  
  square[15].innerText= new Date(date.getTime() + 1123200000).toLocaleDateString('fr-FR', options);//lundi
  square[16].innerText= new Date(date.getTime() + 1209600000).toLocaleDateString('fr-FR', options);
  square[17].innerText= new Date(date.getTime() + 1296000000).toLocaleDateString('fr-FR', options);//mercredi
  square[18].innerText= new Date(date.getTime() + 1382400000).toLocaleDateString('fr-FR', options);//jeudi
  square[19].innerText= new Date(date.getTime() + 1468800000).toLocaleDateString('fr-FR', options);//vendredi

}

if (date.getDay() == 1) {
  square[6].innerText= new Date(date.getTime()).toLocaleDateString('fr-FR', options);//lundi
  square[7].innerText= new Date(date.getTime() + 86400000).toLocaleDateString('fr-FR', options);//mardi
  square[8].innerText= new Date(date.getTime() + 172000000).toLocaleDateString('fr-FR', options);//mercredi
  square[9].innerText= new Date(date.getTime() + 259200000).toLocaleDateString('fr-FR', options);//jeudi
  square[10].innerText= new Date(date.getTime() + 432000000).toLocaleDateString('fr-FR', options);//vendredi 
  square[11].innerText= new Date(date.getTime() + 691200000).toLocaleDateString('fr-FR', options);//lundi
  square[12].innerText= new Date(date.getTime() + 777600000).toLocaleDateString('fr-FR', options);//mardi 
  square[13].innerText= new Date(date.getTime() + 864000000).toLocaleDateString('fr-FR', options);//mercredi
  square[14].innerText= new Date(date.getTime() + 950400000).toLocaleDateString('fr-FR', options);//jeudi
  square[15].innerText= new Date(date.getTime() + 1036800000).toLocaleDateString('fr-FR', options);//vendredi  
  square[16].innerText= new Date(date.getTime() + 1296000000).toLocaleDateString('fr-FR', options);//lundi
  square[17].innerText= new Date(date.getTime() + 1382400000).toLocaleDateString('fr-FR', options);//mardi
  square[18].innerText= new Date(date.getTime() + 1468800000).toLocaleDateString('fr-FR', options);
  square[19].innerText= new Date(date.getTime() + 1555200000).toLocaleDateString('fr-FR', options);//jeudi
  square[20].innerText= new Date(date.getTime() + 1641600000).toLocaleDateString('fr-FR', options);
}
  
// Close form button

const closeFormBtns = document.querySelectorAll('.close-form');

for (const button of closeFormBtns) {
    button.onclick = () => {
        const parent = button.parentNode;
        parent.style.display = 'none';
    }
}

// Adding classes to dates (important)

const firstMonday = new Date('2021-12-13');
let classDate = firstMonday;

for (let i = 5; i < 15; i++) {
  const dateFormatted = moment(classDate).format('YYYY-MM-DD');
  square[i].classList.add(dateFormatted);
  if (i !== 5 && (i + 1) % 5 === 0) {
    classDate.setDate(classDate.getDate() + 3)
  }
  else {
    classDate.setDate(classDate.getDate() + 1)
  }
}
