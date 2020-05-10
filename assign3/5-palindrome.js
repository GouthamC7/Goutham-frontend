// Enter your code here
function check() {
    document.getElementById("result").innerHTML = "No"
    console.log("check")
    var value = document.getElementById("number").value;
    var input = parseInt(value);
    //var remainder = 0;
    var rev ;
    var final = 0;
    if(isNumber(input)) {
        console.log(input)
        /*while (input != 0) {
            remainder = input % 10;
            console.log(remainder)
            reverse = reverse * 10 + remainder;
            console.log(reverse)
            input /= 10;
        } */
        rev = input.toString();
        rev = rev.split("").reverse().join("");
        final = parseInt(rev);
        console.log(final)
        if(input === final) {
            console.log("palindrome")
            document.getElementById("result").innerHTML = "Yes"
        }
    }
    
}

function isNumber (value) {
    return typeof value === 'number' && isFinite(value);
    }
