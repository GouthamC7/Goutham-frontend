// Enter your code here
function print() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var status = document.getElementById("status");
    var section = document.getElementsByName("section");
    var subject = document.getElementsByName("subject");
    var goals = document.getElementById("goals");
    var subjects = "";
    console.log("Name: "+ name.value);
    console.log("Email: "+ email.value);
    console.log("Staus: "+ status.value);
    for(var i=0; i< section.length; i++) {
        if(section[i].checked) {
            if(section[i].value == "410p")
                console.log("Class section: UnderGrad");
            if(section[i].value == "510")
                console.log("Class section: Grad");
        }
    }
    for(var i=0; i< subject.length; i++) {
        if(subject[i].checked) {
            subjects += subject[i].value + ", ";
        }
    }
    var printSubjects = subjects.substring(0, subjects.length - 2);
    console.log("Courses: " + printSubjects);
    console.log("Class goals: " + goals.value);
}