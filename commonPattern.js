// (Common Patterns)   ------   Canvas Material Practicing

// let n=5;
// let conversation = "";
// while (n >= 0) {
//      console.log(`${n} cookies for me`)
//      conversation += "one for me, "
//      n--;
//      console.log(`${n} cookies for you`)
//      conversation += "one for you\n"
//      n--;
// }
// console.log(n);




// let n = 5;
// let conversation = "";
// while (n > 0) {
//      if (n % 2 !== 0) {
//           console.log(`${n} cookies for me`)
//           conversation += "one for me";
//      } else {
//           console.log(`${n} cookies for you`)
//           conversation += "one for you"
//      }
//      n--;
// }




// let n = 5;
// let conversation = "";
// while (n > 0) {
//      if (n % 2 !== 0) {
//           // console.log(`${n} cookies for me`)
//           conversation += "one for me. ";
//      } else {
//           // console.log(`${n} cookies for you`)
//           conversation += "one for you\n"
//      }
//      n--;
// }
// console.log(conversation)




// let n = 5;
// let conversation = '';
// while (n > 0) {
//      if (n % 2 !==0) {
//           conversation += "one for me. ";
//           if (n === 1) {
//                conversation += "none for you. ";
//           }
//      } else {
//           conversation += "one for you\n";
//           if (n === 1) {
//                conversation += "none for me. ";
//           }
//      }
//      n--;

// }
// console.log(conversation);



// const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];

// //printing all item in the arrey 
// for (let i=0; i<ratings.length; i++) {
//      console.log(ratings[i]);
// }

//  //prints only the 5-star ratings:
// for (let i=0; i<ratings.length; i++) {
//      if (ratings[i] === 5) {
//           console.log(ratings[i]);
//      }
// }

// // another way to pring 5 stars by declaring a varialbe which is max
// const max = ratings.length; // max is 20
// for (let i=0; i<max; i++) {
//      const stars = ratings[i]; // ratings[0] = 3, ratings[2]=5 ...etc
//      if (stars === 5) {
//           console.log(stars);
//      }
// }


//// adding a count variable that you increment everytime you print
// const max = ratings.length;
// const count = 0;
// for (let i=0; i<max; i++) {
//   const stars = ratings[i];
//   if (stars === 5) {
//      count++;
//   }
// }
// if (count >= 6) {
//   console.log('This is a featured product!');
// } else {
//   console.log('Sorry, no homepage for you.');
// }
 // this code is not working ????



//  ----- summing Arrays -----

//  const c1Votes = [996, 139, 80, 591, 217, 817, 235, 846, 141, 60];
//  const c2Votes = [746, 154, 366, 515, 523, 846, 590, 806, 446, 23];

//  //printing each item in the array
// const max = c1Votes.length; // c2Votes.length is the same
// for (let i=0; i<max; i++) {
//      console.log(c1Votes[i]);
//      console.log(c2Votes[i]);
// }


//Add variables to hold the total votes for each candidate. Inside the loop, add the number of votes for that candidate.
// const max = c1Votes.length;
// let c1Total = 0;
// let c2Total = 0;
// for (let i=0; i<max; i++) {
//      console.log(c1Votes[i]);
//      c1Total += c1Votes[i];
//      console.log(c2Votes[i]);
//      c2Total += c2Votes[i];
// }
// console.log('the total for candidate 1 is: ', c1Total);
// console.log('the total for candidate 2 is: ', c2Total);

// if (c1Total > c2Total) {
//      console.log('candidate 1 is the winner!');
// } else if (c2Total > c1Total) {
//      console.log('candidate 2 is the winner!')
// } else {
//      console.log('Time for a run-off. It was a tie!');
// }



//  ----- Searchig Arrays -----


// const guests = ['Scarlett', 'Plum', 'Peacock', 'Green', 'Mustard', 'White'];
// const tables = [3, 1, 1, 2, 3, 2];

// const guessToFind = 'Mustard';
// for (let i=0; i<guests.length; i++) {
//      if (guests[i] === guessToFind) {
//           console.log(`${guessToFind} sits at table ${tables[i]}`)
//      }
// }


// // stop the loop once it is found ----- break
// const guessToFind = 'Mustard';
// for (let i=0; i<guests.length; i++) {
//      if (guests[i] === guessToFind) {
//           console.log(`${guessToFind} sits at table ${tables[i]}`);
//           break;
//      }
// }
// // The break keyword stops a loop immediately.



// If we do not find the guest's name in the Array, tell our program to print an appropriate error message.

// const guestToFind = 'Mustard'; // hard-coded in this example
// let foundIndex = -1;
// for (let i=0; i<guests.length; i++) {
//   if (guests[i] === guestToFind) {
//     foundIndex = i;
//     break;
//   }
// }
// if (foundIndex !== -1) {
//   console.log(`${guestToFind} sits at table ${tables[foundIndex]}`);
// } else {
//   console.log(`${guestToFind} is not on the guest list.`);
// }


// // returning function
// function indexFor(guestToFind) {
//      let foundIndex = -1;
//      for (let i=0; i<guests.length; i++) {
//           if(guests[i] ===guestToFind) {
//                foundIndex = i;
//                break;
//           }
//      }
//      return foundIndex;
// }
// const guestToFind = 'Mustard';
// const index = indexFor(guestToFind);
// const guestTable = tables[index];
// if (index !== -1) {
//      console.log(`${guestToFind} sits at table ${guestTable}`);
// } else {
//      console.log(`${guestToFind} is not on the guest list.`);
// }



// function indexFor(guestToFind) {
//      let foundIndex = -1;
//      for (let i=0; i<guests.length; i++) {
//        if (guests[i] === guestToFind) {
//          foundIndex = i;
//          break;
//        }
//      }
//      return foundIndex;
//    }
   
//    function printTableFor(guestToFind) {
//      const index = indexFor(guestToFind);
//      const guestTable = tables[index];
//      if (index !== -1) {
//        console.log(`${guestToFind} sits at table ${guestTable}`);
//      } else {
//        console.log(`${guestToFind} is not on the guest list.`);
//      }
//    }
   
//    printTableFor('Mustard');
//    printTableFor('Batman');
//    printTableFor('Moe');



// --- Finding a substring / sequence    -----

// const HEALTHY = 'GCTGGGTGGGACACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTTGGGCAACCC';
// let sample1 = 'GCTGGGTGGGACACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTTGGGCAACCC';
// let sample2 = 'GCTZGGTGGGZCACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTZGGGCAACCC';

// let sequence = [];
// for (let i=0; i<sample1.length; i++) {
//      const letter = sample1[i];
//      if(letter === 'Z') {
//           sequence.push(HEALTHY[i]);
//      } else {
//           sequence.push(letter);
//      }
// }
// sequence = sequence.join('  ');
// console.log(sequence)
   


// ------ Object ------- back to the first example

//how many of each kind of rating a product has received.

// const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
// const max = ratings.length;
// const ratingsCount = {};
// for (let i=0; i<max; i++) {
//      const stars = ratings[i];
//      if (ratingsCount[stars]) {
//           ratingsCount[stars]++;
//      } else {
//           ratingsCount[stars] = 1;
//      }
// }
// console.log(ratingsCount)
