function toggle(ids, property, enabled) {
    for (var id in ids) {
        if (property == "valid") {
            if (enabled) {
                $(ids[id]).removeClass("is-invalid").addClass("is-valid");
            } else {
                $(ids[id]).removeClass("is-valid").addClass("is-invalid");
            }
        } else if (property == "readOnly") {
            $(ids[id]).prop('readOnly', enabled);
        } else {
            if (enabled) {
                $(ids[id]).show();
            } else {
                $(ids[id]).hide();
            }
        }
    }
}

function checkEmpty(id) {
    var value = $(id).val();
    toggle([id], "valid", value !== "");
    return value;
}

function IDTypeVerification() {
    var IDType = checkEmpty("#IDType");
    if (IDType === "身份证") {
        changeValue("Nationality", "中国");
        toggle(["#Gender", "#Nationality", "#Birthdate"], 'readOnly', true);
    } else {
        toggle(["#Gender", "#Birthdate"], 'readOnly', false);
        if (IDType === "回乡证" || IDType === "台胞证") {
            toggle(["#Nationality"], 'readOnly', true);
            changeValue("Nationality", "中国");
        } else {
            toggle(["#Nationality"], 'readOnly', false);
        }
    }
}

function ChineseID() {
    var chineseIDTable = {
        "coefficient": [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
        "representation": ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"],
        "provinceCode": {
            "11": "北京市",
            "12": "天津市",
            "13": "河北省",
            "14": "山西省",
            "15": "内蒙古自治区",
            "21": "辽宁省",
            "22": "吉林省",
            "23": "黑龙江省",
            "31": "上海市",
            "32": "江苏省",
            "33": "浙江省",
            "34": "安徽省",
            "35": "福建省",
            "36": "江西省",
            "37": "山东省",
            "41": "河南省",
            "42": "湖北省",
            "43": "湖南省",
            "44": "广东省",
            "45": "广西壮族自治区",
            "46": "海南省",
            "50": "重庆市",
            "51": "四川省",
            "52": "贵州省",
            "53": "云南省",
            "54": "西藏自治区",
            "61": "陕西省",
            "62": "甘肃省",
            "63": "青海省",
            "64": "宁夏回族自治区",
            "65": "新疆维吾尔自治区",
            "91": "香港特别行政区",
            "92": "澳门特别行政区",
            "71": "台湾省"
        }
    }
    var IDType = checkEmpty("#IDType");
    var IDString = checkEmpty("#IDNumber");
    if (IDType === "身份证") {
        var IDArray = IDString.split("");

        function ValidateChineseID(IDArray) {
            if (IDArray.length !== 18) {
                return false;
            }
            for (var i = 0, c = 0; i < IDArray.length - 1; i++) {
                c += parseInt(IDArray[i]) * chineseIDTable["coefficient"][i];
            }
            return IDArray[17] === chineseIDTable["representation"][c % 11];
        }
        if (ValidateChineseID(IDArray)) {
            var YY = IDString.substr(6, 4),
                MM = IDString.substr(10, 2),
                DD = IDString.substr(12, 2);
            changeValue("Birthdate", YY + "-" + MM + "-" + DD);
            changeValue("Gender", parseInt(IDArray[16]) % 2 === 0 ? "女" : "男");
            changeValue("Province", chineseIDTable["provinceCode"][IDString.substr(0, 2)]);
            toggle(["#IDNumber"], "valid", true);
        } else {
            toggle(["#IDNumber"], "valid", false);
        }
    }
}

function RelationshipCheck() {
    var Relationship = checkEmpty("#Relationship");
    var currentStepData = data[currentStep]["questions"];
    for (var key in currentStepData) {
        toggle(["#" + currentStepData[key]["id"] + "_Div"], "show", Relationship !== "本人");
    }
    toggle(["#Relationship_Div"], "show", true);

    if (Relationship && currentStepID === "Applicant") {
        var maleRelatives = ["父亲", "儿子", "哥哥", "弟弟", "祖父", "外祖父", "孙子", "外孙子"];
        var femaleRelatives = ["母亲", "女儿", "姐姐", "妹妹", "祖母", "外祖母", "孙女", "外孙女"];
        var Gender = checkEmpty("#Gender");
        var previousGender = Filling["Delegate"]["Gender"];
        toggle(["#Gender", "#Relationship"], "valid",
            (Relationship === "本人") ||
            (Relationship === "配偶" && ((Gender === "男" && previousGender === "女") || (Gender === "女" && previousGender === "男"))) ||
            (maleRelatives.includes(Relationship) && Gender === "男") ||
            (femaleRelatives.includes(Relationship) && Gender === "女"));
        $("#Gender").attr('onchange', "RelationshipCheck()");
        var Birthdate = checkEmpty("#Birthdate");
        var previousBirthdate = Filling["Delegate"]["Birthdate"];


    }
}

function ClientageCheck() {
    var Clientage = checkEmpty("#Clientage");
    var currentStepData = data[currentStep]["questions"];
    for (var key in currentStepData) {
        toggle(["#" + currentStepData[key]["id"] + "_Div"], "show", Clientage !== "否");
    }
    toggle(["#Clientage_Div"], "show", true);
}

function agreement() {
    $("#final_request").hide();
    var Signature = checkEmpty("#Signature");
        toggle(["#Signature"], "valid", false);
    if (Signature === Filling["Delegate"]["Name"] || 
        Signature === Filling["Applicant"]["Name"]) {
        toggle(["#Signature"],"valid", true);
        $("#final_request").show();
    }
}

function displayPic(picID) {
    $("#" + picID + "_Preview").attr("src", $("#" + picID + "_B64").val());
}

function readFile(picID) {
    var reader = new FileReader();
    var file = $("#" + picID).prop('files')[0]
    reader.addEventListener("load", function() {
        $("#" + picID + "_B64").val(reader.result);
        displayPic(picID);
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }

}