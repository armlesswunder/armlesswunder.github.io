var acc = document.getElementsByClassName("accordion");
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

function camelCaseChanged() {
    let x = 0;
    let val2 = '';
    for (const char of document.getElementById("camelCaseInput").value) {
        if (x % 2 === 0) {
            val2 += char.toLowerCase();
        } else {
            val2 += char.toUpperCase();
        }
        x += 1;
    }
    document.getElementById("camelCaseOutput").textContent = val2;
}