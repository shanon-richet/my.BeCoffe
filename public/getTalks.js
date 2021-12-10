// find calendar.. const calendar = document.querySelector('.calendar');

const recipetalks = document.querySelector('.upcoming-recipe-talks');

fetch('http://localhost:3000/dashboard/recipe/')
.then(response => response.json())
.then(json => {
    console.log(json)
    for (const talk of json) {
        console.log(talk.recipe);

        if (isThisWeek(talk.date)) {
            const singleTalk = document.createElement('div');
            singleTalk.classList.add('one-upcoming-talk');

            const date = document.createElement('p');
            date.innerText = talk.date;

            const recipe = document.createElement('h4');
            recipe.innerText = talk.recipe;

            const name = document.createElement('p');
            name.innerText = talk.name;

            singleTalk.appendChild(date);
            singleTalk.appendChild(recipe);
            singleTalk.appendChild(name);
            recipetalks.appendChild(singleTalk);
        }

        // const calendarDate = findCalendarDate(talk.date);
        // if (calendarDate !== null) {
        //     const div = document.createElement('div');

        //     const divRecipe = document.createElement('h4');
        //     divRecipe.innerText = talk.recipe;

        //     const divName = document.createElement('p');
        //     divName.innerText = talk.name;

        //     div.appendChild(divRecipe);
        //     div.appendChild(divName);

        //     calendarDate.appendChild(div);
        // } 
    }
})

// const findCalendarDate = (date) => {
//     // find all dates on calendar
//     const allDates = ;

//     for (const calDate of allDates) {
//         // find class of calDate (the date)
//         const dateString = calDate.classList.value;
//         if (dateString === date) {
//             return calDate;
//         }
//     }
//     return null;
// };

const isThisWeek = (date) => {
    const today = moment();
    const talkDay = moment(date);

    return (today.isoWeek() === talkDay.isoWeek());
}