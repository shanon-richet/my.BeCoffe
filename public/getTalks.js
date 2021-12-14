const recipetalks = document.querySelector('.upcoming-recipe-talks');

fetch('http://localhost:3000/dashboard/recipe/')
.then(response => response.json())
.then(json => {
    for (const talk of json) {
        const day = new Date(talk.date);
        const fixedDay = new Date();

        fixedDay.setDate(day.getDate() + 1);

        if (isLaterThisWeek(fixedDay)) {
            const singleTalk = document.createElement('div');
            singleTalk.classList.add('one-upcoming-talk');

            const date = document.createElement('p');
            const formattedDate = new Date(fixedDay).toLocaleDateString();
            date.innerText = formattedDate;

            const recipe = document.createElement('h4');
            recipe.innerText = talk.recipe;

            const name = document.createElement('p');
            name.innerText = talk.name;

            singleTalk.appendChild(date);
            singleTalk.appendChild(recipe);
            singleTalk.appendChild(name);
            recipetalks.appendChild(singleTalk);
        }

        const calendarDate = findCalendarDate(fixedDay);
        if (calendarDate !== null) {
            const div = document.createElement('div');
            div.classList.add('added-recipe-talk');

            calendarDate.onclick = null;

            div.onclick = (e) => {
                console.log('here');
                console.log(e.target)
                const form = document.querySelector('.edit-recipe-form');
                form.style.display = 'flex';

                const addRecipeForm = document.querySelector('.recipe_form');
                if (addRecipeForm.style.display === 'flex') {
                    addRecipeForm.style.display = 'none';
                }
                
                const inputDate = form.querySelector('.date')
                inputDate.value = calendarDate.className.split(" ")[1];
            }

            const divRecipe = document.createElement('h4');
            divRecipe.innerText = talk.recipe;

            const divName = document.createElement('p');
            divName.innerText = talk.name;

            div.appendChild(divRecipe);
            div.appendChild(divName);

            calendarDate.appendChild(div);
        } 
    }
})

const findCalendarDate = (dateStr) => {
    const date = moment(dateStr).format('YYYY-MM-DD');
    const calendarDates = document.querySelectorAll('.calendar-square');

    for (const calDate of calendarDates ) {
        const dateString = calDate.className.split(" ")[1];
        if (dateString === date) {
            return calDate;
        }
    }
    return null;
};

const isLaterThisWeek = (date) => {
    const today = moment();
    const talkDay = moment(date);

    if (today.isoWeek() === talkDay.isoWeek() && talkDay > today) {
        return true;
    }
    return false;
}