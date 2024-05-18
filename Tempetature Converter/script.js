let bo = document.querySelector('#cl');
function round(number) {
    return Math.round(number * 100) / 100;
}
function convert() {
    let input = document.getElementById("input").value;
    let select = document.getElementById("select").value;
    if (select == 'cel') {
        var h = round((input * 9 / 5) + 32);
        document.getElementById("output").style.color = "black";
        document.getElementById("output").innerHTML = "= " + h;
        document.getElementById("icon").innerHTML = "&#8457";
        var k = round(input + 273.15);
        document.getElementById("outputt").innerHTML = "= " + k + " k";
    }
    else if (select == "fah") {
        var c = round((input - 32) * 5 / 9);
        document.getElementById("output").style.color = "black";
        document.getElementById("output").innerHTML = "= " + c;
        document.getElementById("icon").innerHTML = "&#8451";
        var k = round(c + 273.15);
        document.getElementById("outputt").innerHTML = "= " + k + " k";
    }
    else if (select == "kel") {
        var c = round(input - 273.15);
        document.getElementById("output").style.color = "black";
        document.getElementById("output").innerHTML = "= " + c;
        document.getElementById("icon").innerHTML = "&#8451";
        var h = round(c * 9 / 5 + 32);
        document.getElementById("outputt").innerHTML = "= " + h;
        document.getElementById("iconn").innerHTML = "&#8457";
    }
    else {
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerHTML = "<h4>! You must choose a Unit !</h4>";
        document.getElementById('outputt').innerHTML = "";
        document.getElementById("icon").innerHTML = "";
        document.getElementById("iconn").innerHTML = "";
    }
}

bo.addEventListener('click', () => {
    document.getElementById("input").value = "";
    document.getElementById('output').innerHTML = "";
    document.getElementById('outputt').innerHTML = "";
    document.getElementById("icon").innerHTML = "";
    document.getElementById("iconn").innerHTML = "";
})
