#Phần 1
//sửa thông tin ở đây
const fullname = 'Mai văn cường'
const address2= '368-C7 tân mai, hoàng mai, hà nội'
const address1= '368-C7 tân mai, hoàng mai, hà nội'
const acctnum= '8832713711'
const cellphone= '0965711999'
const idnumber= '035075000001'
const issuedate= '10/07/2021'
const birthday= '20/12/1975'
const amount= 1 // số lượng cây
//------------
function triggerEvent(el, type) {
    const event = new Event(type, { bubbles: true });
    el.dispatchEvent(event);
}
//address2
var branch= document.getElementById("address2");
branch.value = address2;
triggerEvent(branch, 'input');
//address1
var branch= document.getElementById("address1");
branch.value = address1;
triggerEvent(branch, 'input');
//amount
var branch= document.getElementById("amount");
branch.value = amount;
triggerEvent(branch, 'input');
//acctnum
var branch= document.getElementById("acctnum");
branch.value = acctnum;
triggerEvent(branch, 'input');
//cellphone
var branch= document.getElementById("cellphone");
branch.value = cellphone;
triggerEvent(branch, 'input');
//idnumber
var branch= document.getElementById("idnumber");
branch.value = idnumber;
triggerEvent(branch, 'input');
//full name
var branch= document.getElementById("fullname");
branch.value = fullname;
triggerEvent(branch, 'input');
//ngay cap issuedate
var branch= document.getElementById("issuedate");
branch.value = issuedate;
triggerEvent(branch, 'input');
//birthday
var branch= document.getElementById("birthday");
branch.value = birthday;
triggerEvent(branch, 'input');

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
//check dong y
document.querySelector('.iCheck-helper').click();

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
