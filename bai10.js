let a=Number(prompt('Nhập số ký điện'));
if (a<50){
    document.write("Số tiền bạn phải trả là: "+a*1.678);
}else if (a<100){
    document.write("Số tiền bạn phải trả là: "+a*1.734);
}else if (a<200){
    document.write("Số tiền bạn phải trả là: "+a*2.014);
}else {
    document.write("Số tiền bạn phải trả là: "+a*2.536);
}