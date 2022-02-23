var acc = document.getElementsByClassName("accordion");
var camelCaseInput = document.getElementsByClassName("camelCaseInput");
var camelCaseOutput = document.getElementsByClassName("camelCaseOutput");
var i;
  
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

function camelCaseChanged(val) {
    let x = 0;
    let val2 = '';
    for (const char of val) {
        if (x % 2 === 0) {
            val2 += char.toLowerCase();
        } else {
            val2 += char.toUpperCase();
        }
        x += 1;
    }
    alert(val2);
}