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