// Enter your code here

// Input:
// http://www.example.com?name=r2d2&email=r2d2%40me.com&human=no

// Output
// http://www.example.com
// name: r2d2
// email: r2d2@me.com
// human: no

function print() {
    var temp = "";
   
    var array = [];
    let app = document.querySelector(".bg-info");
    let maindiv = document.createElement("div");
    maindiv.className = "bg-light border rounded w-50 mx-auto mt-5 p-3";
    var input = document.getElementById("comments");
    var url = decodeURIComponent(input.value);
    var website = url.split("?");
    let heading = document.createElement("div");
    heading.innerHTML = ('<h1>Results</h1>'+'<h4>URL</h4>' + website[0]+ '<br><br>' + '<h4>Query Parameters</h4>');
    maindiv.append(heading);
    var temp = website[1];
    var params = temp.split('&');
    params.forEach( element => {
        var params = {};
        var split = element.split("=");
        params[split[0]] = split[1];
        array.push(params);
        let div = document.createElement("div");
        div.innerHTML = split[0] + ": " + split[1];
        maindiv.append(div);
    })
    app.append(maindiv)
    
}
