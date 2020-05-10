// Enter your code here
function find() {
    var input = document.getElementById("input").value;
    var text  = document.getElementById("intro").innerHTML;
    text = text.split(input).join('<span class="highlight">' + input + '</span>');
    document.getElementById("intro").innerHTML = text;
    var highlight = document.querySelectorAll(".highlight");
 

    var style = document.createElement('style');
    style.innerHTML =
	'.highlight {' +
		'background-color: yellow;' +
	'}';

    var ref = document.querySelector('script');
    ref.parentNode.insertBefore(style, ref);
    
}