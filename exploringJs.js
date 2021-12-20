// Canvas Material Practicing  -  Reading: Exploring JavaScript-2  


//  --------  1  -------   (Objects)

// const myInfo = {
//      "name": "Mohammad Darmussa",
//      "cell": "7331722",
//      "birthday": "Jun 11",
// }
// name, cell, bd are keys
// mohammad, 733172, jun 11 are values

// const friendInfo = {
//      name: "Ayan Marrit",
//      cell: "2948125",
//      birthday: "Nov 05",
// }
// console.log(myInfo, friendInfo)

// const superhero = {
//      name: "Wonder Woman",
//      alias: "Diana Prince",
//      bracelets: 2,
//      lessos: 1
// }

// hero_name = superhero['name']  //retrieving the name
// // console.log(hero_name)
// // console.log(superhero['name'])   // second way to retrieve

// number_of_lessos = superhero.lessos //retrieving the lessos
// // console.log(number_of_lessos)

// superhero.alias = "Princess Diana of Themyscira"   //updating a value
// // console.log(superhero.alias)

// superhero.hometown = "Italy"   //adding a new value
// // console.log(superhero)

// delete superhero.lessos;  //deleting a value lessos
// console.log(superhero)
// console.log(superhero.lessos)   //undefined value if deleted


//---------- 2 ---------- (Arrays)
// const todos = ["pet the cat", "go to work", "shop for groceries", "go home", "feed the cat"]

// const firstItem = todos[0]  // calling first item
// console.log(firstItem)

// const secondItem = todos[1];  //callig the second item
// console.log(secondItem);

// const aa = todos[111]  //callig an item is not within the  array
// console.log(aa)

// const howMany = todos.length;  //calling the length of the array
// console.log(howMany)

// todos.push('go to sleep')  //adding a new item to the array
// console.log(todos)

// const LastItem = todos.pop();   // pop is to remove the last item
// console.log(todos);
// console.log(LastItem);  // see the last item that was removed

// const firstItem = todos.shift();   //shift - Removes from the beginning of an Array
// console.log(todos);
// console.log(firstItem);

// const specificItem = todos.splice(0 ,3);   //removes from a specific Array index
// console.log(todos);
// console.log(specificItem);

// // more example about splice
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const removed = arr.splice(2);
// console.log(arr)

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    
// for( let i = 0; i < arr.length; i++){ 

//     if ( arr[i] === 5) { 

//         arr.splice(i, 1); 
//     }

// }
// console.log(arr)


// filter        ??   filter - allows you to programatically remove elements from an Array



// const todoString = todos.join('!\n ');   //join is to add anything infront of each item
// console.log(todoString)  //  \n is to add a anything infront of each item except last item

// const todoString = todos.split('! ');   //??
// console.log(todoString);

// const idx = todos.indexOf('go to work'); // index0f s to find the index number of an item
// console.log(idx)


//---------- 3 ---------- (Boolean)

// const todos = ["pet the cat", "go to work", "shop for groceries", "go home", "feed the cat"]

// // printTodoCount(todos)

// function printTodoCount() {
//      const howmany = todos.length;

//      if (howmany == 0) {
//           console.log('all done')
//      } 
//      else { 
//           console.log(`you have ${howmany} things left to do`)
//      }
// }

// // console.log(todos)

// //can't compare objects or arrays
// const obj1 = { name: 'alice' };
// const obj2 = { name: 'alice' };

// if (obj1 == obj2) {
//   console.log('They are equal');
// } else {
//   console.log('They are not equal');
// }



//---------- 4 ---------- (Loops)

// //printing 1 - 10
// let n = 1;
// while (n <= 10) {
//      console.log(n)
//      // n = n + 1;     // if we remove it, it will get infinite loop
//      n--;   // another way to write n=n+1
// }

//printing the even numbers
// let n = 1;
// while (n <= 10) {
//      const isEven = (n % 2) === 0;
//      if (isEven) {
//           console.log(n);
//      }
//      n++;
// }

//printing the array using the loop
// const todos = ["pet the cat", "go to work", "shop for groceries", "go home", "feed the cat"] 
// let i = 0;
// const howMany = todos.length;
// while (i <= howMany) { //howmany = 5, that the length of the array
//      console.log(todos[i]);
//      i++;
// }
// console.log(todos[i]);
// // console.log(todos.length)


// for (let n=1; n<=10; n++) {
//      console.log(n);
//    }


// for (let n = 10; n>0; n--) {
//      console.log(n);
// }

//printing an array using for loop
// const todos = ["pet the cat", "go to work", "shop for groceries", "go home", "feed the cat"]
// const howmany = todos.length;
// for (let i=0; i<howmany; i++) {
//      console.log(todos[i])
// }


