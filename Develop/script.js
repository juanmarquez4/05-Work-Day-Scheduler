
//change the background color of the input based on time of the day.

function backgroundColor(){
    //gets current time
    var sCurrentTime = moment().format("H");
    var iCurrentTime = parseInt (sCurrentTime);
    console.log(iCurrentTime);


    //gets string time in input element and converts to integer and 24H format.
    var sTimeEl = $(".time-element").html();
    console.log(sTimeEl);
    for ( var i=0; i < sTimeEl.length; i++){
        var iTimeEl = parseInt(sTimeEl.slice(0,2));
        var mer = sTimeEl.slice(-2);
        if (mer =="PM"){
        iTimeEl = iTimeEl + 12;
        }
        console.log(iTimeEl);
        console.log(mer);
        var checkTime = $(".text-area");
        console.log(checkTime)
    };
    


  //compares current time with time in input element
    var inputElement = $(".text-area");
    for (var i=0; i < inputElement.length; i++ ){
        if(iCurrentTime > iTimeEl){
        $(".text-area").addClass("past");
        } else if ( iCurrentTime < iTimeEl){
        $(".text-area").addClass("future");
        } else {
        $(".text-area").addClass("present");
        }          
    };
};

backgroundColor();




