
//Lessons: Overview of last class Copy  - Canvas   --- (1) ----

// const firstName = "Mohammad";
// const lastName = "Darmussa";
// let currentDate = "12/15/2021";
// const learningLang = "JavaScript";

// function aboutMe() {
//      // const month = "December";
//      // const year = "2021";
//      return (`My name is ${firstName} ${lastName} today is ${currentDate} `)

// }
// // console.log(aboutMe());


// //------------------------------------------------------------------------------------------------

// // Lessons: Learming About Arrays Copy - Canvas  --- (2) ----

// const theName = ['Mohammad', 'Darmussa', 'JavaScript'];
// const dates = [11, 12, 2021];


// function greeting () {
//      theName.push('Python')
//      // dates.push(9);
//      // dates[4] = 5
//      theName.splice(2, 0, 'I am learning') // 0 means that won't remove the next value, adding 1 will remove the next value
//      // return (`Hello, my name is ${theName[0]} ${theName[1]}, I am currently learning ${theName[2]} and ${theName[3]}. My bootcamp started on ${dates.join('-')}`);
//      return (`Hello, my name is ${theName.join(' ')}, My bootcamp started on ${dates.join('-')}`);
// };

// // console.log(greeting()) 
// // console.log(theName)
// // console.log(theName[3])
// // console.log(theName.length)


// const stringArray = ["HTML", "CSS", "JavaScript", "React", "Bananas"];
// function reIntroduce () {
//      stringArray.pop();
//      stringArray.push("and Python but not bananna")
//      return (`Hello, my name is ${theName[0]} ${theName[1]}. I am learning ${stringArray.join(', ')}`);
// }
// // console.log(reIntroduce());



// //------------------------------------------------------------------------------------------------

// //Lessons: Learning About Objects Copy  - Canvas  --- (3) ----

// const itsMe = {
//      fName: 'Mohammad',
//      lName: 'Darmussa',
//      lang: 'JavaScript',
//      curDate: '12/15/2021',
//      randomId: 361
// };
// const fName = itsMe.fName;

// function greeting () {
//      itsMe.currentMonth = 'December';
//      itsMe.currentYear = '2021';
//      console.log(`Hello, my name is ${itsMe.fName} ${itsMe.lName}`);
//      console.log(`Today's date is ${itsMe.currentMonth}, ${itsMe.currentYear}`);
//      console.log(`I am currently learning how to program in ${itsMe.lang}`)

//      // different way by declaring a new object inside the function
//      // console.log(`Hello, my name is ${itsMe.fName} ${itsMe.lName}`);
//      // const todaysDate = {currentMonth: 'December', currentYear: '2021'}
//      // console.log(`Today's date is ${todaysDate.currentMonth}, ${todaysDate.currentYear}`)
//      // console.log(`I am currently learning how to program in ${itsMe.lang}`)
//      itsMe.lang = 'Python';
//      console.log(`I am changing the programming languae from JavaScript to ${itsMe.lang}`)
//      delete itsMe.randomId
//      console.log(itsMe)
//      console.log(`The value of current month key`)
//      console.log()
// }
// // console.log(greeting())

//------------------------------------------------------------------------------------------------

// Lessons: Learning About Conditionals Copy  - Canvas  --- (4) ----

const myFriendsSchedule = {saturday: true};
const myMoneySchedule = {saturday: 10};

function canWeGoToTheMovies (saturday) {

     let theDateWeWantToGo = {};

     if (myFriendsSchedule.saturday && myMoneySchedule.saturday) {
          // myFriendsSchedule[saturday] = saturday;
          // myMoneySchedule[saturday] = 10;
          let theDateWeWantToGo = {};
          console.log('yes, we can go');
          return theDateWeWantToGo;
     } else if (myFriendsSchedule.saturday || myMoneySchedule.saturday) {
          let theDateWeWantToGo2 = {};
          console.log('yep, we can go too');
          return theDateWeWantToGo2;

     } else if (!(myFriendsSchedule.saturday && myMoneySchedule.saturday)) {
          let theDateWeWantToGo1 = {};
          console.log('We can not go to the movies');
          return theDateWeWantToGo1;

     }
}


     console.log(canWeGoToTheMovies(1));


//------------------------------------------------------------------------------------------------

