let a=Number(prompt('Nhập lương'));
if (a<9){
    document.write('Thuế thu nhập cá nhân là :' +0);
}else {
    document.write('Thuế thu nhập cá nhân là: '+ a*10/100);
}