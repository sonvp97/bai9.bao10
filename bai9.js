let a=Number(prompt('Nhập cạnh bên'));
let b=Number(prompt('Nhập cạnh bên'));
let c=Number(prompt('Nhập cạnh bên đối diện'));
if(a>0&&b>0&&c>0&&a+b>c&&b + c > a&&a + c > b){
    document.write("Là hình tam giác");
}else {
    document.write('Không phải là hình tam giác');
}