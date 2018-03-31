function changeValue(key, value) {
    $("#" + key).val(value);
    $("#" + key).trigger('change');
}

function submit_form(event) {
    event.preventDefault();
    if ($(".is-invalid:visible").length !== 0) {
        return false;
    }
    data = $("form").serializeArray();
    Dict = {};
    for (var i = data.length - 1; i >= 0; i--) {
        Dict[data[i]["name"]] = data[i]["value"];
    }

    Filling[$("form").attr("id")] = Dict;
    localStorage.setItem('Filling', JSON.stringify(Filling));
    if (currentStep == 10) {
        return false;
    }
    nextStep = currentStep + 1;
    window.location.href = "?step=" + nextStep;
}

c = localStorage.getItem('Filling');
var Filling = c ? JSON.parse(c) : {};
var currentURL = new URL(window.location.href);
var URLStep = currentURL.searchParams.get("step");
var currentStep = URLStep ? parseInt(URLStep) : 0;

$("#pic-list").html(template('pic-tpl', {
    target: [data[currentStep]]
}));

var temp = new Date();
Filling["year"] = temp.getFullYear();
Filling["month"] = temp.getMonth() + 1;
Filling["day"] = temp.getDate();

$("#final_request").html(template('final_statement', {
    target: [Filling]
}));

var currentStepID = data[currentStep]["id"];
if (currentStepID in Filling) {
    var currentStepData = Filling[currentStepID];

    for (key in currentStepData) {
        changeValue(key, currentStepData[key]);
        $("#" + key).trigger('change');
    }
}