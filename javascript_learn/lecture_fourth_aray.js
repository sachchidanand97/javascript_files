//console.log("jay shree ganesh & Bony mishra");


// how to store multiple value in Array in single variable;

// let marks = [97, 82, 75, 64, 36];
// console.log(marks);
// console.log(marks.length); // property

// let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman"];
// console.log(heroes);


// Array indices in Js 

// [97, 82, 64, 76, 36] the value are store linear fashion(single line fashion).
//  0    1   2   3   4

//  if get any position value the use arr[position_name]

//mark = [97, 82, 64, 76, 36];
// console.log(mark);
// console.log(mark[0]);

// // how to change array vale you can use this

// mark[2] = 66;
// console.log(mark);

// dont change string value in array beacuse string value is inmutable in js 
// But array value in mutable in js

//Lopping over an array
  //Print all element of an array


//    using loop iterable. array iterable comes to may type of data types like [String, object, array];
    //  string => collection of character 
    //  Object => collection of key value pairs 
    //  array => collection of similier types of items value.

    //  first loop use to for loop

    //let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"];

    // for (let idx = 0; idx <= heroes.length; idx++) {
    //     console.log(heroes[idx]);
    // }

    // for of

    // for(let hero of heroes) {
    //     console.log(hero);
    // }


    // let cities = ["delhi", "pune", "mumbai", "hydrabad", "gurugram", "lko"];

    // for(let city of cities) {
    //      console.log(city);
    //     //console.log(city.toLocaleUpperCase());
    // }
     

    // Array method in js 

    // push(): add to end 

    //let foodItems  = ["potato", "apple", "litchi", "tomato"];
        //  console.log(foodItems);

        //  foodItems.push("chips");

        //  console.log(foodItems);

    // pop(): delete form end & return 
        //let foodItems  = ["potato", "apple", "litchi", "tomato"];
        //    let deleteItem = foodItems.pop();
        //    console.log(foodItems);
        //    console.log("deleted", deleteItem);

    // toString(): converts array to string

        // let foodItems  = ["potato", "apple", "litchi", "tomato"];
        // let mark = [99, 94, 95, 78, 98];
        // console.log(mark);
        // console.log(mark.toString());
        // console.log(foodItems);
        // console.log(foodItems.toString());

    // Concat(): join multiple array & returns result.
    //    let marvelHero = ["thor", "spiderman", "ironma"];
    //    let dcHeroes = ["superman", "batman"];

    //    let hero = marvelHero.concat(dcHeroes);
    //    console.log(hero);
    //    let zero = dcHeroes.concat(marvelHero);
    //     console.log(zero);

    //unshift(): add to start -> same as push
        // let marvelHero = ["thor", "spiderman", "ironma"];
        //  marvelHero.unshift("antman");
        //  console.log(marvelHero);
  
    //shift(); delete from start & return   -> same as pop
        // let marvelHero = ["thor", "spiderman", "ironma"];

        // let value = marvelHero.shift();
        // console.log(value);

        // console.log(marvelHero);


     // slice(); returns a piece of the array  =>Dont change original array

        // let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman", "Dr.Strange"];
        // console.log(heroes);

        // console.log(heroes.slice(1,3));
        // console.log(heroes.slice(1));


     // splice(): change  original array (add, remove, replace)

     //   let arr = [1, 2, 3, 4, 5, 6, 7, 8];
            // arr.splice(2, 2, 101, 102);
            // console.log(arr);

            // Add Element form splice

            // arr.splice(2, 0, 101);
            // console.log(arr);

            //Delete element single element

            // arr.splice(3, 1);
            // console.log(arr);

            //Replace Element

            // arr.splice(3, 1, 101);
            // console.log(arr);
        
            // console.log(arr);
            // arr.splice(4);
            // console.log(arr);