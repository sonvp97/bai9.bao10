let a=Number(prompt('Nhập số a'));
let b=Number(prompt('Nhập số b'));
let c=Number(prompt('Nhập số c'));
if (c<0){
    result="Phương trình vô nghiệm";
}else if (c=0){
    result="x="+-b/(2*a);
}else {
    result="Phương trình có 2 nghiệm phân biệt:x1="+(-b+Math.sqrt(c))/(2*a)+(-b-Math.sqrt(c))/(2*a);
}
