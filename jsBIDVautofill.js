#Phần 1
//sửa thông tin ở đây
const fullname = 'Mai Văn Tùng'
const address2= 'đồng tân, tân sơn, kim bảng, hà nam'
const address1= 'đồng tân, tân sơn, kim bảng, hà nam'
const acctnum= '4823373892'
const cellphone= '0949355950'
const idnumber= '035203003891'
const issuedate= '31/12/2021'
const birthday= '30/01/2003'
const amount= 1 // số lượng cây
//------------
function triggerEvent(el, type) {
    const event = new Event(type, { bubbles: true });
    el.dispatchEvent(event);
}
//click dong y co tai khoan
document.getElementById('btnYes').click();
//branch dia diem giao dich
var branch= document.getElementById("branch");
branch.selectedIndex = 2;
triggerEvent(branch, 'change');
// capital
var capital= document.getElementById("capital");
capital.selectedIndex = 1;
triggerEvent(capital, 'change');
// purpose
var purpose= document.getElementById("purpose");
purpose.selectedIndex = 2;
triggerEvent(purpose, 'change');
//check dong y
document.querySelector('.iCheck-helper').click();

window.scrollTo(0, document.body.scrollHeight);// Cuộn xuống cuối trang

//-------------------------------------------------Phần 2
function triggerEvent(el, type) {
    const event = new Event(type, { bubbles: true });
    el.dispatchEvent(event);
}
//click dong y co tai khoan
document.getElementById('btnYes').click();
//branch dia diem giao dich
var branch= document.getElementById("branch");
branch.selectedIndex = 2;
triggerEvent(branch, 'change');
// capital
var capital= document.getElementById("capital");
capital.selectedIndex = 1;
triggerEvent(capital, 'change');
// purpose
var purpose= document.getElementById("purpose");
purpose.selectedIndex = 2;
triggerEvent(purpose, 'change');
//issueplace
var dropdown = document.getElementById("issueplace");
dropdown.selectedIndex = 0;
triggerEvent(dropdown, 'change');
//check dong y
let customCheckbox = document.querySelector('.iCheck-helper').click();
// checkbox
var check = document.getElementById("terms");
check.checked = true;
triggerEvent(check, 'input');

window.scrollTo(0, document.body.scrollHeight);// Cuộn xuống cuối trang

//-------------------------------------Phần 3
var timer = setInterval(function() {
    console.log('click button is running...');
    var captchaInput = document.getElementById('captcha'); //captcha 6 so
    var otpcodeInput = document.getElementById('otpcode'); //otp 6 so
    var btnOne = document.querySelector('.btn.btn-blue.next-step.btn-block');//button xac nhan trang 1
    var btnTwo = document.querySelector('.btn.btn-blue.finish-step.btn-block');//button xac nhan trang 2
    if(captchaInput.value.length === 6){
        btnOne.click();
        captchaInput.value = '';
        triggerEvent(captchaInput,'input');
    }
    if(otpcodeInput.value.length === 6){
         btnTwo.click();
        otpcodeInput.value = '';
        triggerEvent(otpcodeInput,'input');
    }
},100);
