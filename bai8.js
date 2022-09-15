let t=parseInt(prompt('Nhập số tuổi'));
if (t>120){
    document.write('Bạn không phải con người');
}else if (t<0){
    document.write('Bạn chưa sinh ra');
}else {
    document.write('Tuổi của bạn là: '+t);
}