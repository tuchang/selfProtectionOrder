var peopleForm = [{
    "id": "Name",
    "type": "text",
    "required": true,
    "width": "3",
    "title": "姓名",
    "placeholder": "例：狐小狸",
    "hint": "请按照证件上的姓名填入。"
}, {
    "id": "IDType",
    "type": "text",
    "width": "3",
    "required": true,
    "title": "证件类型",
    "selections": ["身份证", "回乡证", "台胞证", "护照"],
    "onchange": "IDTypeVerification()"
}, {
    "id": "IDNumber",
    "type": "text",
    "required": true,
    "width": "6",
    "title": "证件号码",
    "onchange": "ChineseID()",
    "invalidHint": "身份证号码应为 18 位，除最后一位可为 X 外，其它位应为阿拉伯数字。"
}, {
    "id": "Gender",
    "type": "select",
    "title": "性别",
    "required": true,
    "width": "3",
    "selections": ["男", "女"],
    "hint": "证件为身份证者可免填。"
}, {
    "id": "Birthdate",
    "type": "date",
    "width": "3",
    "required": true,
    "title": "出生日期",
    "placeholder": "例：1983-03-21",
    "hint": "证件为身份证者可免填。"
}, {
    "id": "Nationality",
    "type": "text",
    "width": "3",
    "required": true,
    "title": "国籍",
    "placeholder": "例：中国",
    "hint": "证件类型为身份证、回乡证或台胞证者可免填。"
}, {
    "id": "EthnicGroup",
    "type": "text",
    "width": "3",
    "title": "民族",
    "placeholder": "例：汉",
    "hint": "请填写身份证上的民族。使用其他证件者可免填。"
}, {
    "id": "Province",
    "type": "text",
    "width": "3",
    "required": true,
    "placeholder": "例：广东省",
    "title": "省/直辖市/自治区/特别行政区",
    "selections": ["北京市", "天津市", "河北省", "山西省", "内蒙古自治区",
        "辽宁省", "吉林省", "黑龙江省", "上海市", "江苏省", "浙江省",
        "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省",
        "湖南省", "广东省", "广西壮族自治区", "海南省",
        "重庆市", "四川省", "贵州省", "云南省", "西藏自治区",
        "陕西省", "甘肃省", "青海省", "宁夏回族自治区", "新疆维吾尔自治区",
        "香港特别行政区", "澳门特别行政区", "台湾省"
    ]
}, {
    "id": "City",
    "type": "text",
    "width": "3",
    "placeholder": "例：广州市",
    "title": "市/地区",
    "hint":"（直辖市请留空）"
}, {
    "id": "District",
    "type": "text",
    "required": true,
    "width": "3",
    "placeholder": "例：天河区",
    "title": "区/县/市"
}, {
    "id": "Phone",
    "type": "tel",
    "width": "3",
    "required": true,
    "title": "联系电话",
    "placeholder": "13800138000 或 02012345678",
    "hint": "座机请含区号"
}, {
    "id": "Address",
    "type": "text",
    "width": "8",
    "required": true,
    "placeholder": "例：天府路 1 号天河区人民政府 339 室",
    "title": "常住地址（如不知道可以写身份证上的）"
}, {
    "id": "Occupation",
    "type": "text",
    "width": "4",
    "title": "工作单位、职业",
    "placeholder": "例：广州市天河区教育局 xx 科科员"
}]

var measurementForm = [];
for (var i = 0 + 1; i < 10 + 1; i++) {
    measurementForm[i - 1] = {
        "id": "Measurement" + i,
        "type": "text",
        "title": "第 " + i + " 项保护请求",
        "selections": [
            "禁止被申请人在保护裁定生效期间对申请人及申请人的近亲属实施家庭暴力。",
            "禁止被申请人在保护裁定生效期间以任何手段散布、宣扬损害申请人名誉的不实谣言。",
            "禁止被申请人在保护裁定生效期间以任何手段骚扰、跟踪、接触申请人和申请人的相关亲属、好友；",
            "责令被申请人在保护裁定生效期间迁出申请人住所，并不得在申请人的住所及其他申请人经常出入的场所附近 200 米内活动。",
            "禁止被申请人在保护裁定生效期间擅自处理价值较大的夫妻共同财产，或者擅自以共同名义对外借贷、担保。",
            "责令被申请人在保护裁定生效期间自费接受心理治疗。",
            "责令被申请人支付申请人在保护裁定生效期间的生活费、抚养、教育未成年子女、赡养老人的合理费用。",
            "责令被申请人支付申请人因被申请人的暴力行为而需要接受的医疗费、心理辅导费、误工费等合理费用。",
            "在保护裁定生效期间暂停被申请人对未成年的申请人行使监护权及/或探视权。"
        ]
    };
}
measurementForm[0]["placeholder"] = "禁止被申请人在距离申请人的住所、单位、学校及其他申请人经常出入的场所附近 50 米至 200 米内活动。";

measurementForm[0]["required"] = "required";

var reasonForm = [{
    "id": "Abstract",
    "type": "text",
    "title": "事件概述",
    "placeholder": "被申请人对申请人本人施行了家庭暴力",
    "selections": [
        "被申请人曾经对申请人本人施行了殴打、捆绑、残害等直接的、积极的、身体上的暴力行为。",
        "申请人曾经目睹被申请人对申请人的近亲属施行了殴打、捆绑、残害等身体上的暴力行为。",
        "被申请人曾经以言语、书面或电子形式，声称威胁将对申请人及 / 或其近亲属进行家庭暴力行为。",
        "被申请人曾经以言语、书面或电子形式，对申请人及 / 或其近亲属进行经常性谩骂、恐吓等精神上的暴力行为。",
        "被申请人曾经以言语、书面或电子形式，在申请人的亲友中散布、宣扬损害申请人名誉的不实谣言。",
        "被申请人限制申请人合理处分、使用夫妻共同财产，以至于对申请人的生理、心理健康造成影响。",
        "被申请人身为申请人的监护人，怠惰履行监护义务，以至于对申请人的生理、心理健康造成影响。",
        "被申请人曾经亲身或以直接或间接手段骚扰、监视、跟踪、掌控申请人及 / 或其近亲属的行踪活动。",
    ],
    "hint": "请填写事情的概述。双击可获得我们的建议。"
}, {
    "id": "Date",
    "type": "date",
    "title": "事件发生的时间"
}, {
    "id": "Place",
    "type": "text",
    "title": "事件发生的地点、场所",
    "placeholder": "如：申请人的学校、微信朋友圈"
}, {
    "id": "Detail",
    "type": "textarea",
    "title": "事件发生的细节"
}, {
    "id": "Photo1",
    "type": "file",
    "width": "6",
    "title": "事件的证据性图片 1",
    "onchange": "readFile('Photo1')"
}, {
    "id": "Photo2",
    "type": "file",
    "width": "6",
    "title": "事件的证据性图片 2",
    "onchange": "readFile('Photo2')"
}, {
    "id": "Description1",
    "type": "text",
    "width": "6",
    "title": "事件的证据性描述 1"
}, {
    "id": "Description2",
    "type": "text",
    "width": "6",
    "title": "事件的证据性描述 2"
}, {
    "id": "Photo3",
    "type": "file",
    "width": "6",
    "title": "事件的证据性图片 3",
    "onchange": "readFile('Photo3')"
}, {
    "id": "Photo4",
    "type": "file",
    "width": "6",
    "title": "事件的证据性图片 4",
    "onchange": "readFile('Photo4')"
}, {
    "id": "Description3",
    "type": "text",
    "width": "6",
    "title": "事件的证据性描述 3"
}, {
    "id": "Description4",
    "type": "text",
    "width": "6",
    "title": "事件的证据性描述 4"
}]

var data = [{
    "id": "Delegate",
    "title": "第一步：您的个人信息",
    "hint": "如果您是亲自申请或代近亲属提出申请，请在这里填写您的个人信息；如果您是律师，请在这里填写您的委托人的个人信息。",
    "questions": peopleForm
}, {
    "id": "Applicant",
    "title": "第二步：申请人的个人信息",
    "hint": "请在这里填写申请人的个人信息。如您是亲自申请，您可以在“关系”处选择本人，从而无需再次填写。",
    "questions": [{
        "id": "Relationship",
        "type": "text",
        "title": "和您的关系",
        "required": "required",
        "other": "other",
        "selections": ["本人", "配偶",
            "父亲", "母亲", "女儿", "儿子", "哥哥", "姐姐", "妹妹", "弟弟", "祖父", "外祖父", "孙子", "外孙子",
            "祖母", "外祖母", "孙女", "外孙女"
        ],
        "onchange": "RelationshipCheck()",
        "invalidHint": "年龄、性别等要素与亲属关系似乎不符。《反家庭暴力法》目前允许近亲属、公安机关、妇女联合会、居民委员会、村民委员会、救助管理机构为申请人签发人身安全保护令。"
    }].concat(peopleForm)
}, {
    "id": "Representative",
    "title": "第三步：诉讼代理人的个人信息",
    "hint": "请准备好诉讼代理人的身份证件。",
    "questions": [{
        "id": "Clientage",
        "type": "text",
        "title": "您是否委托了诉讼代理人，协助您为受害人办理人身安全保护令？",
        "required": "required",
        "selections": ["是", "否"],
        "onchange": "ClientageCheck()"
    }].concat(peopleForm)
}, {
    "id": "Respondent",
    "title": "第四步：被申请人的个人信息",
    "hint": "请准备好被申请人的身份信息。",
    "questions": peopleForm
}]
for (var c = 1, i = data.length; c <= 5; c++) {
    var id = i + c - 1;
    data[id] = {
        "id": "Reasons" + c,
        "title": "第六步：申请人提出诉求的理由（第 " + c + " 个，共 5 个）",
        "hint": "您可以最多添加 10 项理由。双击输入框可以看到一些我们建议的理由，您可根据自身实际情况加以参考。同时，您也可以上传手机截图，相机照片等作为证据；图片将会自动插入到系统中。",
        "questions": reasonForm
    }
}
data.push({
    "id": "Requests",
    "title": "最后一步：申请人计划向法院提出的诉求",
    "hint": "您可以最多添加 10 项诉求。我们已经根据申请人遇到的情况给出了一些诉求，您可根据自身实际情况加以参考修改。",
    "questions": measurementForm
});
data.push({
    "id": "Final",
    "title": "签名、导出",
    "hint": "接下来您可以将该网页直接打印，或导出为 PDF 文档。请按下右上角三条横线处查看免责声明，同意免责声明方可打印、导出。打印、导出后请您签名，并提交到您管辖地所在的基层人民法院。",
    "questions": [{
        "id": "Signature",
        "type": "text",
        "title": "本人郑重声明：我明白，向法院做出不真实的陈述，可能导致申请被驳回。因此，我在此对申请书中所述的内容的完整性、真实性、准确性负责。同时，本人承担因使用本软件带来的一切后果，放弃向软件作者索赔的权利。",
        "placeholder": "请在此处再次键入本人中文全名。",
        "onchange": "agreement()"
    }]
});