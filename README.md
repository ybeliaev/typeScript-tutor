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
## 🔥EXAMPLE FUNCTION🔥

```js
/* Запрос */
{
	"topicId": 5,
	"status": "published" // "draft", "deleted" - optional
}
/* Ответ */
 [
	{
		"question": "Как осуществляется доставка?",
		"answer": "быстро!",
		"tags": [
			"popular",
			"new"
		],
		"likes": 3,
		"status": "published"
	}
]
enum QuestionStatus {
    Published = "published",
    Draft = "draft",
    Deleted = "deleted"
}
interface RequestValue {
    topicId: number,
    status?: QuestionStatus.Published
}
interface AnswerValue {
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: string;
}

const getFaqs = async (req:RequestValue): Promise<AnswerValue[]> => {
    const res = await fetch('./faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    })
    const data = await res.json()
    return data
}
```
## 🔥 UNION 🔥
```js

// сужение типов конструкцией if else
function logID(id: string|number|boolean){
    if(typeof id === 'string'){
        console.log(id)// id распознаётся как строка
    }else{
        console.log (id)
    }
}
function logError(err: string|string[]){
    if(Array.isArray(err)){
        return err
    }
}
function logObject(obj: {a:number}|{b:number}){
    if("a" in obj){
        return obj.a
    }
}
```
## 🔥 Literal Types 🔥
```ts
function fetchAuth(url: string, method: "post"|"get"): true | false {
    return
}
fetchAuth("http", "get")

// case 2
const method = 'post'
fetchAuth("http", method) // OK, but with let  method = 'post' don't work

// case 3
let method = 'post'
fetchAuth("http", method as "post")// OK, но такая кастомизация - костыль

```
## 🔥 Type Aliases 🔥
```ts
type httpMethod = "post" | "string"

function fetchAuth(url: string, method: httpMethod): true | false {
    return true
}
// Object
type User = {
    name: string,
    age: number,
    skills: string[]
}
const user: User = {
    name: "Jore",
    age: 33,
    skills: ["js", "php"]
}
```
>Intersection:
```ts
type User = {
    name: string,
    age: number,
    skills: string[]
}
type UserID = {
    id: number
}
type UserWithID = User & UserID
// OR
type UserWithID = User & { id: number}
const user: UserWithID = {
    id: 1221,
    name: "Jore",
    age: 33,
    skills: ["js", "php"]
}
```
## 🔥 Interfaces 🔥
```ts
interface User {
    name: string,
    age: number,
    skills: string[]
}
interface UserwithID extends User {
    id: number
}
const user: UserwithID = {
    id: 1212,
    name: "Jore",
    age: 33,
    skills: ["js", "php"]
}
```
> or so
```ts

interface User {
    name: string,
    age: number,
    skills: string[],
    log: (i: number) => number
}
interface UserID {
    id: number
}
interface UserwithID extends User, UserID {date: Date}

const user: UserwithID = {
    id: 1212,
    name: "Jore",
    age: 33,
    skills: ["js", "php"],
    log(i){
        return i
    },
    date: new Date(),
}
```
## 🔥 Interfaces vs Types 🔥
> I'v merge
> 
> This can be a problem for a lot of applications.
```ts
interface User {
    name: string,    
}
interface User {
    id: number
}

const user: User = {
    name: "Yura",
    id: 12
}
```
> interface should not be extended
```ts
interface User {
    name: string,    
    id: number
}
```
But for use framework (for example Express) extended is well
_________

> `type` is good for 
```ts
type ID = string | number
```
> and it dot't merge same types  