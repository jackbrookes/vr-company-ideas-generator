var data;

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status === 200) {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function init() {
    loadJSON(function (response) {
        // Parse JSON string into object
        data = JSON.parse(response);
    });
}


function generateCompany()
{
    var verb = data.verbs[Math.floor(Math.random() * data.verbs.length)];
    document.getElementById("verb").innerHTML = verb;

    var qualifier = data.qualifiers[Math.floor(Math.random() * data.qualifiers.length)];
    document.getElementById("qualifier").innerHTML = qualifier;
}

init();