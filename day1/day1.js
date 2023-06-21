console.log('xin chao viet nam')
console.log('tran van duc')
var fullName = 'tran van duc';
console.log(fullName);
let a = 3;
let b = 4;
let c = a ** b;//a mu b
console.log('gia tri cua c la' ,c);

// setInterval(function() {
//    alert('Day la tieu de');
//    confirm('xac nhan do tuoi')
//    prompt('Nhap vao thong tin')
// },5000);
// 10
var number = 5;
var giatri = number++;
console.log('output:',giatri);
console.log('output:', number);
var d = 7;
var output = d++ + --d;
//7 + 8-1 = 14;
console.log('gia tri cua output:',output);
console.log('Gia tri cua d :', d);

//12
var firstname = 'duc';
var lastname = 'tran';
console.log(firstname + ' '+lastname);
var hoten = 'duc';
hoten = hoten +' tran';
console.log(hoten);

var j = 0;
var i = 1;
var sosanh = j<i;
console.log(sosanh);

var issuccess = 1>2;
if(issuccess){
   console.log('dung');
}else{
   console.log('sai');
}
//video17
//number
//string
//boolean type 
var iss = true;
//undefined type
//null
var isNull = null;//nothing
//symbol
var id = Symbol('id');//unique(duy nhat);
//functinon
var myfunctinon = function(){
   console.log('duc dep trai vay sao?');
}
myfunctinon();
//object
var myObject ={
   Name : 'duc',
   Age: 18,
   adress: 'ha nam',
   myfunctinon:function(){

   }
}
console.log('Tieu de o day:', myObject);
//array
var myArray =[
   'hello',
   'xin chao', 
   'see you soon',
]
console.log(myArray);
console.log(typeof myArray);



