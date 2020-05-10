// Enter your code here
function print() {
    var text = document.getElementById("userinput").innerHTML;
    var phrases = text.split(/[.:;?!~,&]+/);
    let app = document.querySelector("form");
    phrases.forEach(element => {
        let div = document.createElement("div");
        div.innerHTML = element + '<hr>';
        app.append(div);
    })

}