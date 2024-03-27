console.log("jay shree ganesh or jay ma Lakshmi & Bony mishra");

//Function in Js 

//   Block of code that performs a specific task, can be  invoked whenever needed.

//                     ps 

//                      D
// Modi 
//                      c


    // console.log("hello!"); // this is a function.

    //  "abc".toLocaleUpperCase(); // this is a function.

    //  [1, 2, 3].push(4); // this is a function.


    // there are two parts of function.                                    Function call 
                                                                          
    //                                                                        functionName();

    // Function definition 

    // function functionName() {
    //     //do some work // this is a block of code.
    // }



    // function functionName(param1, param2...) {
    //     //do some work
    // }


    // Function example prctice. 

//   function myFunction() {
//         console.log("jay shree krishna!");
//         console.log("we are learning js :");
//   }

//         myFunction();
//         myFunction();
//         myFunction();

//how to show fix message by using function 

//    function myFunction(msg) { //parameter -> input
//     console.log(msg);
//    }

//         myFunction("I love js");


// Function -> 2 numbers, sum

        // function sum(a , b) {
        //     console.log(a + b);
        // }

        // sum(1, 2);
        // sum (100, 121);


        // function sum(a , b) {
        //      //local variable
        //     s = a + b;
        //     console.log("before return");
        //         return s;
        //     console.log("after return");
        // }

        //  let val = sum(3, 4);
        //  console.log(a);
        //     console.log(val);


//Arrow Function  
    //compact way of writing a function 

    // const functionName = (param1, param2...) => {
    //     some do work
    // }

    // sum function
    // function sum(a, b) {
    //     return a+b;
    // }

    // const arrowSum = (a, b) => {
    //     console.log(a+b);
    // }
    //  console.log(arrowSum);
    //  arrowSum(3, 4);

  //multiplaction function
    // function mul(a, b) {
    //     return a*b;
    // }

    // const arrowMul = (a, b) => {
    //     console.log(a*b);
    // }
     
    //     console.log(arrowMul);
    //     arrowMul(3, 4);


// forEach Loop in Array 

    // Method                        function
    //  "abc".toUpercase() 

    //  this is a method.                this is a function

//   arr.forEach(callBackFunction)
//    CallBackFunction: Here, it is a function to execute for each Element in the array 

//     *A callback is a function passed as an argument to another function.
      
//       arr.forEach((val) => {
//         console.log(val);
//       })

//       we add the method any object or datatype with associate is called method.


    //let arr = [1, 2, 3, 4, 5];
    //let arr = ["pune", "Delhi", "mumbai", "goa", "shimla"];

        // arr.forEach(function printval(val) { //value at each idx.
        //     console.log(val);

        // })

        // arr.forEach((val) => {
        //     console.log(val);
        // });

        // arr.forEach((val, idx, arr) => {
        //     console.log(val.toLocaleUpperCase(), idx, arr);
        // });

        // forEach only use array not be use to string anouther error.


        // forEach => higer order function/method. 

//Qs. - For a given array of number, print the square of each value using the forEach loop.

    `    // let num  = [2, 3, 4, 5];
        // let calcSquare = 
        //     (num) => {
        //         console.log(num * num); //num**2
        //     };
        //  num.forEach(calcSquare);`

// Some More Array Methods

//     Map:

//     Creates a new array with the result of some  operation. the value its callback return are used to form new array.Array. 

//     arr.map(callbackFnx(value, index, array))
//         let newArr = arr.map((val)) => {
//             return val*2;
//         }

//   let nums = [67, 52, 39];
//     nums.map((val) => {
//         console.log(val);
//     });


    //let nums = [67, 52, 39];
    //    let newArr =  nums.map((val) => {
    //         return val;
    //     });
    //     console.log(newArr);

    // let calcSquare = (nums) => {
    //     console.log(nums * nums);
    // };



// Filter Method 

//  Creates a new  array of element that give true  for a conditionlfilter.

//  Ex. all even element.

    // let newArr = arr.filter ((val) => { // this is a arrat filter method syntax.
    //     return val % 2 === 0;
    // });

    // let arr = [1,2, 3, 4, 5, 6, 7];
    //    let  evenArr = arr.filter((val)=> {
    //         return val % 2 === 0;
    //     });

    //     console.log(evenArr);


//Reduce method. 

    //Performs some operations & reduces the array to a single value. it returns that single value.
        // first example.
            // let arr = [1, 2, 3,4];
            //   const output =   arr.reduce((res, curr) => {
            //        return  res + curr;
            //     });

            //     console.log(output);

       // second example.
            // let arr = [5, 6, 1, 8, ,201, 9, 0, 2];
            //     const output  = arr.reduce((prev, curr) => {
            //         return prev > curr ? prev : curr;
            //     });

            //         console.log(output);