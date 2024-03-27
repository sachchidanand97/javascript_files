console.log("jay shree ram");
console.log("Jay shree ganesh");
console.log("jay bholenath");

                //             Tic Tac Toe 


                //             winning pattern   =      0,  1,  2
                //                                      3,  4,  5
                //                                      6,  7,  8
                //                                      0,  3,  6
                //                                      1,  4,  7
                //                                      2,  5,  8
                              
                                




                // 0     1      2                        
                                                    
                // 3      4      5

                // 6     7       8 



    let boxes = document.querySelectorAll(".box");
        let reserBtn = document.querySelector("#reset-btn");

        let turnO = true;//playerX, playerO

        //let arr =  ["apple", "banana", "litchi"];

        // 2d Array
        // let arr2 = [["apple", "litchi"], ["potato", "mushroom"], ["pants", "shirts"]];
        //     console.log(arr2[0][0]);

        const winPatterns  = [
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [3, 4, 5],
            [6, 7, 8],
        ];

        boxes.forEach((box) => {
                box.addEventListener("click", () => {
                    console.log("box was clicked");
                });
            });


