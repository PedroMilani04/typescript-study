"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'string',
    number1: 12,
    number2: 15
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: 'Pedro', isPaid: false });
var createCourse = function () {
    return { name: 'TS', price: 0 };
};
function createUser2(user) {
    return { name: user.name, email: user.email, isActive: user.isActive };
}
createUser2({ name: 'a', email: '', isActive: true });
