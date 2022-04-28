# TypeScript-tutor
* 🔔 TS is statically typed, JS is dynamically typed 
1. `npm i -g typescript`
2. `tsc --init` create config file (tsc - compiler)
3. For compiling type in terminal `tsc` (`app.ts`to `app.js`)
4. for execution type `node app.js`
### data type check (no TS)
```js
if(num !== number){
    throw new Error("error")
}
```
## Functions ✨
```js
let getFullName = (firstName:string, secondName:string):string => {
    return `${firstName} ${secondName}`
}
```
## Objects ✨
```js
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
```
```js
interface ContactsValue {
    phone: string;
    email: string;
    city: string
}
interface AddressValue  {
    officeId: number;
    isOpened: boolean;
    contacts: ContactsValue
}

const address = {
    officeId: 45,
    isOpened: false,
    contacts: {
        phone: "067111222333",
        email: "jeck@gmail.com",
        city: "London"
    }
}
// OR
const address = {
    officeId: number,
    isOpened: boolian,
    contacts: {
        phone: string,
        email: string,
        city: string
    }
}
```
## Array with same types ✨
```js
const arr: string[] = ['1','2','3']
// or with generic
const arr: Array<string> = ['1','2','3']
```
### Tuples
```js
const skills: [number, string] = [1,"devOps"]
const [id, skill] = skills
// this topple limited to two elements
// but I can skills.push(10) becouse runtime
```
* for random length
```js
const skills: [number, string, ...boolean[]] = [1, "devOps", true, true]
const otherSkills: [number, string] = [1, "devOps", true, true] // also valid
```
## READONLY ✨
```js
const arr: readonly string[] = ['1','2','3']
arr.push("4") // error Свойство "push" не существует в типе "readonly string[]"

// with generic
const arr: ReadonlyArray<string> = ['1','2','3']
```
## ENUM ✨
```js
// 200 - OK, 404 - "Not found", 500 - "Internal Server Error"
enum StatusCode {
    OK = 200,
    NOTFOUND = 404,
    SERVERERROR = 500
}
const result = {
    message: "It's OK",
    statusCode: StatusCode.OK
}
//cases:
// 1
if(result.statusCode === 200){}
// 2
function action(status: StatusCode){}

// *** Constant ENUM ***
const enum Rules {
    ADMIN=1,
    USER=2
}
```