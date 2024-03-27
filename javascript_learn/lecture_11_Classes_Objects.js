console.log("Hello Javascript");

//                 Protottypes in js 

// A javaScript Object is an entity having state and behaviour (properties and method).


            // const student = {
            //     fullName: "bony mishra",
            //     marks: 94.4,
            //     printMarks: function() {
            //         console.log("marks = ", this.marks); //student.marks
            //     },
            // };
            //     console.log(student);
            //     console.log(student.fullName);
            //     console.log(student.marks);
            //    console.log(student.printMarks);
            //    console.log(student);
       
// js object have a spical property called Protottypes.

        //console.log(student.toString);
        

                    // let arr = ["apple", "mango", "banana"];
            //    typeof console.log(arr);
            //   console.log(arr.push("litchi"));

// we can set Protottype using _ _ Protottype _ _  


              //i have created itself prototype 

            //   const employee = {
            //     calcTax1() {         // but this is a correct way function define
            //         console.log("tax rate is 10%");
            //     },                                       // there are two types of define function in js
            //     // calcTax2 : function () {
            //     //     console.log("tax rate is 10%");
            //     // }
            // };

            // console.log(employee.calcTax1());


            // const karanArjun = {
            //     salary: 50000,
            // };

            // console.log(karanArjun);


            //how to set prototype in js object.
            
            // const employee = {
            //     calcTax() {         
            //         console.log("tax rate is 10%");
            //     },                                       
            // };

            // const karanArjun = {
            //     salary: 50000,
            // };  

            // karanArjun.__proto__ = employee

            // console.log(karanArjun);
            // console.log(karanArjun.calcTax());


            //New Example of prototpype in js

                 const employee = {
                calcTax() {         
                    console.log("tax rate is 10%");
                },                                       
            };

            const karanArjun = {
                salary: 50000,
            }; 
            
            
            const karanArjun2 = {
                salary: 50000,
            };  

            const karanArjun3 = {
                salary: 50000,
            };  

            const karanArjun4 = {
                salary: 50000,
            };  

            karanArjun.__proto__ = employee;
            karanArjun2.__proto__ = employee;
            karanArjun3.__proto__ = employee;
            karanArjun4.__proto__ = employee;

            console.log(karanArjun2);
            




     


//             *if object & Protottype have some method, object's method will be used.




  



    