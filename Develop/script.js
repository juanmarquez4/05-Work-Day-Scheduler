//change the background color of the input based on time of the day.
function backgroundColor(){

    //gets current time and formats to 24H
    var sCurrentTime = moment().format("H");
    var iCurrentTime = parseInt (sCurrentTime);
    // console.log(iCurrentTime);

    //gets string time in input element and converts to integer and 24H format.
    for ( var i=0; i < 9; i++){
        var sTimeEl = $(".time-element").eq(i).html();
        // console.log(sTimeEl);
        //splits string element and converts to integer
        var iTimeEl = parseInt(sTimeEl.slice(0,2));
        var mer = sTimeEl.slice(-2);
        // console.log(iTimeEl);
        // console.log(mer);
        //converts to 24H format to be able to compare with current time
        if (mer =="PM" && (iTimeEl < 12) ){
        iTimeEl = iTimeEl + 12;
        }
        
        //compares 24H format current time with 24H formt time in input element
        if(iCurrentTime > iTimeEl){
            $(".text-area").eq(i).addClass("past");
            } else if ( iCurrentTime < iTimeEl){
            $(".text-area").eq(i).addClass("future");
            } else {
            $(".text-area").eq(i).addClass("present");
            }   
    };
};

backgroundColor();


// // Changes the content of the input tag and saves it in the local storage

var inputContent = document.querySelector(".form-control");
var saveContent = document.querySelectorAll(".btn");

console.log(inputContent);
console.log(saveContent);

function renderLastRegistered(event){
    
        var event = inputContent.value;
        console.log("welcome to " + event);
        if ( event !== ""){
            localStorage.setItem("content", event);
            console.log(localStorage);        
        }
    
        var currentContent = localStorage.getItem("content");
        console.log("this is my " + currentContent);
    
        inputContent.placeholder = currentContent;
      
};

for (var i=0; i< saveContent.length; i++){
    saveContent[i].addEventListener("click",renderLastRegistered);
};

renderLastRegistered();

// Changes the content of the input tag and saves it in the local storage TODO: Version2.0

// var saveContent = document.querySelectorAll(".btn");
// console.log(saveContent);

// function renderLastRegistered(event){
    
//         var event = $(this).siblings(".form-control").val();
//         console.log("welcome to " + event);
//         console.log($(this).siblings());
//         if ( event !== ""){
//             localStorage.setItem("content", event);
//             console.log(localStorage);        
//         }
    
//         var currentContent = localStorage.getItem("content");
//         console.log("this is my " + currentContent);
//         // var task =  $(this).siblings().input.placeholder;
//         // console.log(task);
//         // event.placeholder = currentContent;
      
// };

// for (var i=0; i< saveContent.length; i++){
//     saveContent[i].addEventListener("click",renderLastRegistered);
// };

// renderLastRegistered();

///////////////////////////////////


