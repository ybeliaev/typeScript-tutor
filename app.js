"use strict";
const getUser = (obj) => {
    return `${obj.name} is ${obj.work}`;
};
const user = {
    name: "John",
    work: "developer",
    age: 23
};
getUser(user);
