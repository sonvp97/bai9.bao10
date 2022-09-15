let M=Number(prompt('Nhập số tiền gốc'));
let r=Number(prompt('Lãi suất hàng tháng'));
let n=Number(prompt('Số tháng vay'));
document.write('Số tiền phải trả là'+M*Math.pow(r+1,n));
