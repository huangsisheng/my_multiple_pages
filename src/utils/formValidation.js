import { showToast } from "./http"
// 验证所有电话
export const checkAllMobile = (value) => {
    var phone = /^1\d{10}$/g,
        tel = /^0\d{2,3}-?\d{7,8}$/g;
    return phone.test(value) || tel.test(value) 
};

// 验证数字
export const checkNum = (rule, value, callback) => {
    var reg = /^[0-9]*$/g,
        flag = reg.test(value);
    if (!flag) {
        return callback(new Error('只能输入数字'));
    } else {
        callback();
    }
};

// 验证两位小数
export const checkFloatNum = (rule, value, callback) => {
    // var reg = /(?!0\.00)(\d+\.\d{2}$)/,
    var reg = /^(([0-9]+|0)\.([0-9]{2}))$/,
        flag = reg.test(value);
    if(!value)
        return callback()
    if (!flag) {
        return callback(new Error('保留两位小数'));
    } else {
        callback();
    }
};

//验证车架号(只能输入数字和字母)
export const checkVin = (value) => {
    var reg = /^(?![0-9]+$)(?![A-Z]+$)[0-9A-Z]{17}$/g,
        flag = reg.test(value);
    return flag
};

//验证中文名字(只能输入中文不能大于四个子)
export const checkName = (rule, value, callback) => {
    var reg = /^[a-zA-Z\u4e00-\u9fa5]{1,10}$/g,
        flag = reg.test(value);
    if (!flag) {
        return callback(new Error('只能输入10个以内的汉字和字母'));
    } else {
        callback();
    }
};

//验证中文名字(只能输入中文不能大于50个字)
export const checkPolicyName = (rule, value, callback) => {
    var reg = /^[a-zA-Z\u4e00-\u9fa5]{1,50}$/g,
        flag = reg.test(value);
    if (!flag) {
        return callback(new Error('只能输入50个以内的汉字和字母'));
    } else {
        callback();
    }
};

//验证车牌号
export const checkVehicleNumber = (plateNumber) => {
    if (plateNumber.trim().length == 8) {//新能源汽车
        var reg = /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{6}$/;
    } else {//普通汽车
        var reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    }
    var flag = reg.test(plateNumber);
    return flag
}

// 验证手机
export const checkMobile = (value) => {
    var reg = /^1\d{10}$/g, 
        flag = reg.test(value.replace(/\s+/g, ""));
    return flag
};

//验证车主身份证号(只能输入15位数字)
export const checkIdcard = (value) => {
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/g,
        flag = reg.test(value.trim());
    return flag
};

//验证邮箱
export const checkEmail = (rule, value, callback) => {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/g,
        flag = reg.test(value);
    if (!flag) {
        return callback(new Error('邮箱格式不正确'));
    } else {
        callback();
    }
};

//验证车价、赔偿限额(只能输入数字)
export const checkPrice = (value) => {
    var reg = /^\d+(\.\d{2})?$/g,
        flag = reg.test(value);
    return flag
};

//验证数字或字母
export const checkWord = (rule, value, callback) => {
    var reg = /^[a-zA-Z\d]+$/g,
        flag = reg.test(value);
    if (!flag) {
        return callback(new Error('格式为数字或字母'));
    } else {
        callback();
    }
};

//验证是否为中文
export const checkname = (rule, value, callback) => {
    var reg = /^(?!_)(?!.*?_$)[a-zA-Z\u4e00-\u9fa5]{2,}$/g,
        flag = reg.test(value);
    if (!flag) {
        return callback(new Error('只能输入2个以上的中英文字符'));
    } else {
        callback();
    }
};

//验证为英文
export const checkvalue = (rule, value, callback) => {
    var reg = /^[a-zA-Z]+$/g,
        flag = reg.test(value);
    if (!flag) {
        return callback(new Error('请输入英文字符'));
    } else {
        callback();
    }
};

//验证中文
export const checkChinese = (rule, value, callback) => {
    var reg = /^[\u4e00-\u9fa5]+$/g,
        flag = reg.test(value);
    if (!flag) {
        return callback(new Error('只能输入中文'));
    } else {
        callback();
    }
};

export const checkOaNumber = (rule, value, callback) => {
    if (!value) {
        return callback();
    }
    var reg = /^[a-zA-Z0-9]+$/,
        flag = reg.test(value);
    if (!flag) {
        return callback(new Error('只能输入字母和数字'));
    } else {
        callback();
    }
}

// 验证特殊字符
export const checkSpecial = (rule, value, callback) => {
    var reg = /[~'!@#￥$%^&*()-+_=:.,/]/,
        flag = reg.test(value);
    console.log(flag)
    if (flag) {
        return callback(new Error('不能输入特殊字符'));
    } else {
        callback();
    }
}
