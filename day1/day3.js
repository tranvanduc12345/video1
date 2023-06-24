//video22
var value = 20/ 'ABC'
var age = 19
var pi = 3.14;
console.log( isNaN(value)) //kiem tra dang typeof
console.log(typeof age.toString());//chuyen number sang string
console.log(pi.toFixed(1));//lam tron dang string

//video23
var languages = [
   'javascript',
   'php',
   'ruby',
   'python',
   null,
   undefined,
   function(){

   },
   {},
] //= new Array()
console.log(languages)
console.log(Array.isArray(new Array(1,2)))
console.log(languages[0])
//video24
// 1.to String
// 2.Join
// 3.pop><shift(5)
// 4.push
// 5.shift
// 6.unshift
// 7.splicing
// 8.concat
// 9.slicing

console.log(languages.toString());//mảng sang chuỗi
console.log(languages.join(' - '))//thêm ký tự vao khoảng cách các mảng
console.log(languages.pop());//xóa phần tử cuối mảng và trả lại phần tử đã xóa

console.log(languages);
console.log(languages.push('dart'))//thêm phân tử vào cuối mảng và trả về độ daì mới
console.log(languages);
console.log(languages.shift());//xóa phần tử đầu tiên và trả về phàn tử đã xóa
//xóa hết trả về undefined
console.log(languages);
console.log(languages.unshift('define','web3'))//thêm vào đầu maảng và trả về độ dài mới
var toto = [
   'sol',
   'link',
   'op',
   'arb'
]
toto.splice(1,1,'ltc');//vị trí xóa-số lượng xóa sau đó-thêm vào chuỗi
console.log(toto);
console.log(languages.concat(toto))//nối hai chuỗi
console.log(toto.slice(1,3))






