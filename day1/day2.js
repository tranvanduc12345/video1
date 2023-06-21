//18
//toan tu so sanh
var a = '1';
console.log( `kieu du lieu `, typeof a)
var b = 1;
console.log( 'kieu du lieu',typeof b);  
if(a === b){
   console.log( 'Giong nhau'  );
}else{
   console.log('Khac nhau');
}
//19
let c = 1;
let d = 2;
var value = 'd' && 'A' && 'B';
console.log(value); 
//20
var fullname = `tran van "duc"`;
console.log(fullname.length)
//alert(typeof fullname)
var firstname =  'tran';
let lastname = 'duc';
console.log(`toi la: ${firstname} ${lastname}`);
//21
//1.Find index- tìm vị trí ký tự
let h = 'hello world s1s. html';
console.log(h.indexOf('l',4));
//2.cut string
console.log(h.slice(-3,-1))
//3.replace-thay thế
console.log(h.replace('world','duc dep trai'))
//(/world/g,'duc dep trai')-thay đổi toàn bộ
//4.convert to upper case-chuyển sang viết hoa
console.log(h.toUpperCase());
//5.convert to lower case-Chuyen sang viet thuong
console.log(h.toLowerCase());
//6.trim- bỏ dấu cách đầu và cuối khi thừa
console.log(h.trim());
//7.Split-tach mảng thành các array khi có đặc điểm chung
var languages = 'js, go, rush, python, c++'
console.log(languages.split(', '));
//8.Get a character by index- in các ký tự theo thứ tự
console.log(languages.charAt(100))
