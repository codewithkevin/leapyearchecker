function myFunction() {
    var leapYear = document.getElementById("myText").value;

    if(leapYear % 4 === 0){
        
        if(leapYear % 400 === 0){
            document.getElementById("demo").innerHTML = "It is a leay year"
        }

        else {
            document.getElementById("demo").innerHTML = "It is not a leap year"
        }
    }

    else {
        document.getElementById("demo").innerHTML = "It is not a leap year";
    }
    
}
