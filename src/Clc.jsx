import React from "react";

function add(value_1,value_2){
    var value_1 = value_1;
    var value_2 = value_2;
    var rs = value_1 + value_2;
    return rs;
}
function sub(value_1,value_2){
    var value_1 = value_1;
    var value_2 = value_2;
    var rs = value_1 - value_2;
    return rs;
}
function multi(value_1,value_2){
    var value_1 = value_1;
    var value_2 = value_2;
    var rs = value_1 * value_2;
    return rs;
}
function division(value_1,value_2){
    var value_1 = value_1;
    var value_2 = value_2;
    var rs = value_1/value_2;
    rs =rs.toFixed(2);
    return rs;
}

export {add,sub,multi,division};