interface ObjValue  {
    name: string;
    work: string;
}

const getUser = (obj: ObjValue): string => {
    return `${obj.name} is ${obj.work}`
}
const user = {
    name: "John",
    work: "developer",
    age: 23
}
getUser(user)