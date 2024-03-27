    console.log("jay shree ganesh");

//                                Dom Manipulation

// Attributes => :

//              > getAttribute(attr) => to get the Attributes value 

        // let div = document.querySelector("div");
        // console.log(div);

        // let id = div.getAttribute("id");
        // console.log(id);

        // let nameTest = div.getAttribute("name");
        // console.log(nameTest); 


        // let para = document.querySelector("p");
        // console.log(para.getAttribute("class"));


//              > setAttribute(attr, value) => to set the Attribute val th 

    // let para  = document.querySelector("p");
    //     console.log(para.setAttribute("class", "newClass"));


// Style => :
//        > node.style

                        // let div = document.querySelector("div");
                        //     console.log(div);
                        //     console.log(div.style);

                        //     div.style.backgroundColor = "green";
                        //     div.style.backgroundColor = "purple";



                        //     div.style.fontSize = "26px";

                        //     div.innerText = "Hello!";


                        //     css                                                                       js 

                        //     inside the set css property and value in                               inside the set css property and value in
                        //                                                                                         js file. 

                        //                                                                                         fontSize: value;
                                                                                                                                
                        //     css file                                                                      

                        //     font-Size: value;



                               // Dom Manipulation 

//Insert Element    let el = document.createElement("div")

                let newBtn  = document.createElement("button");
                newBtn.innerText = "click me!";
                console.log(newBtn.innerText);
                console.log(newBtn);


       // > Node.append(el) //adds at the end of node (inside) 

            // let div = document.querySelector("div");
            //     div.append(newBtn);

       // > node.prepend(el) //adds at the start of node (inside)
                // let div = document.querySelector("div");
                // div.prepend(newBtn);


       // > node.before(el)  //adds before the node (outside) 

            //    let div = document.querySelector("div");
            //    div.before(newBtn);

       // > node.after(el) //adds after the node (outside) 

            // let div = document.querySelector("div");
            // div.after(newBtn);


    // new Example;
        let newHeading = document.createElement("h1");
            newHeading.innerHTML = "<i>Hi, I am new!</i>";


            document.querySelector("body").prepend(newHeading);
        

// Delete Element  
      // > node.remove() // remove the node 

        let para = document.querySelector("p");
            para.remove(); 

            newHeading.remove();

            eighth