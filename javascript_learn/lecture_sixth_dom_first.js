console.log("jay Shree Ram");

// <!DOCTYPE html> this is decleration of use html version and doctype provide the instruction to the web browser about what version of HTML the page writen in.

// <html lang="en" This indicates that the coding in this file will be done in English.
//     <head> This is the provide of meta informaton and this tage used it include css file.
//     </head>
//     <body> this is write all html tags inside the body tage like. form, hedding, div, span and all about. 

//     </body>
// </html>

//console.dir() it used to spical object (document) proprties method to print

// What is Dom?

//  when a web page is loaded, the browser creates  a Document Object Model (DOM) of the page.

//  all indivisual box is node. 


//                                       Window -> node -> object

//                                      document -> node -> object

//                                      html -> node -> object


//         head                                                                       body

// meta meta ltitle link                                 
//                                                     div                                                    script


//                                     img    h1       p        div



// console.dir(window);
// console.dir(window.document);
// //console.log(window.body);
// console.dir(document.body);
// console.log(document.body);
// console.dir(document.head);


// Dom Manipulation.

//   Selecting with id
//         document.getElementByid("myid")

// Selecting with class
//     document.getElementByClassName("myclass")


// Selecting with tag. 
//     document.getElementByTagName("p")

// console.dir(document.head);
// console.log(document.head);

// let heading = document.getElementById("heading");
//     // The easiest way to find an HTML element in the DOM, is by using the element id.
//     // This example finds the element with id="intro":

//     // If the element is found, the method will return the element as an object (in element).
//     // If the element is not found, element will contain null.

// console.log(heading);
// console.dir(heading);



    // let headings = document.getElementsByClassName("heading");
    //     //document.getElementByClassname() return to HTML Collection (Array) format.
    //     console.dir(headings);
    //     console.log(headings);


        // let paras = document.getElementsByTagName("p");
        //     console.dir(paras);
        //     // console.log(paras);

    
                        //DOM Manipulation

    // Query Selector
    //  document.querySelector("myid / myClass / tag")
    //     return first element

    // Query selector are rturn to node list in js 

        // let firstelements = document.querySelector("p"); // return first element
        //     console.dir(firstelements);


        // let allElements = document.querySelectorAll("p"); //All Matching elements
        //     console.dir(allElements);


    // tagName: return tag for element nodes.
            // let firstelements = document.querySelector("p"); // return first element
            //         console.dir(firstelements);
            //         console.log(firstelements.tagName);

    // innerText: return the text content of the elements and all its children.
        //                                                                                         this is a tree like structure. 
        //                         [Dom Version] - body -> parent   

        //                    parent - [div                        script] -> child (siblings)                                   <body> th
        //                                                                                                 <div>
        //                                                                                                     <img>
        //                                                                                                     <h1></h1>
        //                                                                                                     <p></p>
        //                                                                                                     <div></div>
        //                                                                                                 </div>
        //                                                                                             </body>                

        //    childNode       - [img   h1     p   div]


        //                             parent

        //                               child

        //                               descendant



            // console.dir(document.body.firstChild);
            // console.dir(document.querySelector("div"));
            // console.log(document.querySelector("div"));
            // console.log(document.querySelector("div").children);

            // let div = document.querySelector("div");
            //  console.dir(div);
            //  console.dir(div.innerText);


    // innerHTML: return the plain text or HTML contents in the element.
            // let div = document.querySelector("div");
            //  console.dir(div.innerHTML);



        //     let div = document.querySelector("div");
        //     console.dir(div.innerHTML = "abcd");
        //    console.dir(div.innerHTML = "<div>jay shree ram</div>");
        
    // textContent: return textual content even for hidden elements.

            let div = document.querySelector("div")
                console.dir(div);

            let heading = document.querySelector("h1");
            console.log(heading);
             console.dir(heading.textContent);