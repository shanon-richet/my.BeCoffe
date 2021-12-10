const recipeForm = document.querySelector('.recipe_form_hidden')

const date = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (let i = 0; i < 20; i++) {
    const calendar = document.querySelector('.calendar')
    const squares = document.createElement('p')
    squares.classList.add('calendar-square')

    calendar.appendChild(squares);

    squares.onclick = (e) => {
        if (recipeForm.classList.contains('recipe_form_hidden')) {
            recipeForm.classList.add('recipe_form')
            recipeForm.classList.remove('recipe_form_hidden')
            var inputDate = document.querySelector('.date')
            inputDate.value = e.target.className.split(" ")[1];
        }
        else {
            recipeForm.classList.add('recipe_form_hidden')
            recipeForm.classList.remove('recipe_form')
        }
    }
}

const square = document.querySelectorAll('.calendar-square');

for (let i = 0; i < 5; i++) {
  square[i].innerText = days[i]
  square[i].classList.add('weekDays')
}

if (new Date(date.getDay() == 5)) {
  square[5].innerText= new Date(date.getTime() - 345600000).toLocaleDateString('fr-Fr', options);//lundi
  square[5].classList.add(new Date(date.getTime() - 345600000).toISOString().split('T')[0]);

  square[6].innerText= new Date(date.getTime() - 259200000).toLocaleDateString('fr-FR', options);//mardi
  square[6].classList.add(new Date(date.getTime() - 259200000).toISOString().split('T')[0]);

  square[7].innerText= new Date(date.getTime() - 172000000).toLocaleDateString('fr-FR', options);//mercredi
  square[7].classList.add(new Date(date.getTime() - 172000000).toISOString().split('T')[0]);

  square[8].innerText= new Date(date.getTime() - 86400000).toLocaleDateString('fr-FR', options);//jeudi
  square[8].classList.add(new Date(date.getTime() - 86400000).toISOString().split('T')[0]);

  square[9].innerText= new Date(date.getTime()).toLocaleDateString('fr-FR', options);//vendredi
  square[9].classList.add(new Date(date.getTime()).toISOString().split('T')[0]);

  square[10].innerText= new Date(date.getTime() + 259200000).toLocaleDateString('fr-FR', options);//lundi
  square[10].classList.add(new Date(date.getTime() + 259200000).toISOString().split('T')[0]);

  square[11].innerText= new Date(date.getTime() + 345600000).toLocaleDateString('fr-FR', options);
  square[11].classList.add(new Date(date.getTime() + 345600000).toISOString().split('T')[0]);

  square[12].innerText= new Date(date.getTime() + 432000000).toLocaleDateString('fr-FR', options);//mercredi
  square[12].classList.add(new Date(date.getTime() + 432000000).toISOString().split('T')[0]);

  square[13].innerText= new Date(date.getTime() + 518400000).toLocaleDateString('fr-FR', options);
  square[13].classList.add(new Date(date.getTime() + 518400000).toISOString().split('T')[0]);

  square[14].innerText= new Date(date.getTime() + 604800000).toLocaleDateString('fr-FR', options);//vdd
  square[14].classList.add(new Date(date.getTime() + 604800000).toISOString().split('T')[0]);

  square[15].innerText= new Date(date.getTime() + 864000000).toLocaleDateString('fr-FR', options);//lundi
  square[15].classList.add(new Date(date.getTime() + 864000000).toISOString().split('T')[0]);

  square[16].innerText= new Date(date.getTime() + 950400000).toLocaleDateString('fr-FR', options);
  square[16].classList.add(new Date(date.getTime() + 950400000).toISOString().split('T')[0]);

  square[17].innerText= new Date(date.getTime() + 1036800000).toLocaleDateString('fr-FR', options);//mercredi
  square[17].classList.add(new Date(date.getTime() + 1036800000).toISOString().split('T')[0]);

  square[18].innerText= new Date(date.getTime() + 1123200000).toLocaleDateString('fr-FR', options);
  square[18].classList.add(new Date(date.getTime() + 1123200000).toISOString().split('T')[0]);

  square[19].innerText= new Date(date.getTime() + 1209600000).toLocaleDateString('fr-FR', options);//vendredi

}
if (new Date(date.getDay() == 4)) {
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
if (new Date(date.getDay() == 3)) {
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
if (new Date(date.getDay() == 2)) {
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
