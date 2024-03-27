console.log("Jay shre Ganesh");
    

    //                         Event in Js 

    // The change in the state an object is known as an Event


    // Event are fired to notify code of "interesting changes" that may affect code execution.Event



    //         > Mouse events (click, double, clck etc.)

    //         > Keyboard events (keypress, keyup, keydown)

    //         > Form events (submit etc.)

    //         > print event & many more 


        // let btn1 = document.querySelector("#btn1");
        //     btn1.onclick = () => {
        //         console.log("Handler1");
        //         let a = 25;
        //         a++
        //         console.log(a);//26
        //     };

        //     btn1.onclick = () => {
        //         console.log("Handler2")    if you want to assigin same function in js then first function is oerwrite.
        //     }


        // let div = document.querySelector("div");
        //     div.onmouseover = () => {
        //         console.log("you are inside div");
        //     };


//                                     Event Object

// It is a special object that has  details about the event. 

// All event handlers have access to the Event objects properties and methods. 


//     node.event = (e) => {
//         //handle here
//     }

//            let btn1 = document.querySelector("#btn1");

//             // btn1.onclick = (e) => {
//             //     console.log(e);
//             // }

//                btn1.onclick = (evt) => {
//                 console.log(evt);
//                 console.log(evt.type);
//                 console.log(evt.target);
//                 console.log(evt.clientX, evt.clientY);
//             }



//            let div = document.querySelector("div");
//             div.onmouseover = (evt) => {
//                 console.log(evt);
//                 console.log(evt.type);
//                 console.log(evt.target);
//                 console.log(evt.clientX, evt.clientY);
//             };

// //     e.target e.type e.clintX, e.clintY



//                                 Event Listener

// Node.addEventListener(event, callback)                          1 -> inline handling => this droback -> my html code is very lenghty
 
   let btn1 = document.querySelector("#btn1");
    
        // addEventListener("click", () => {
        //     console.log("button1 was clicked");
        // });

        //   addEventListener("click", (evt) => {
        //     console.log("button1 was clicked");
        //     console.log(evt);
        //     console.log(evt.type);
        // });

        btn1.addEventListener("click", (evt) => {
            console.log("button was clicked - handler1");
        });

        btn1.addEventListener("click", () => {
            console.log("button1 was clicked - handler2");
        });

        const handler3 = () => {
            console.log("button1 was clicked - handler3");
        };

        btn1.addEventListener("click", handler3);
       
        btn1.addEventListener("click", (evt) => {
            console.log("button was clicked - handler4");
        });

        btn1.removeEventListener("click", handler3);
//                                                                 2 - > js Node.event handler = () => { => this droback -> at the time write single function  handle.

//                                                                  }

// Node.removeEventListener(event, callback)


// *Note: the callback reference should be same to remove


