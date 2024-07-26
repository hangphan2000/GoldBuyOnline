//------------------------------------------------- phan 1
let person = {
  fullName: 'trịnh tiến quân',
  idNumber: '035092013752',
  issuePlace: 'cục cảnh sát qlhc về ttxh',
  issueDate: '25/08/2021',
  address: 'Lương Khánh Thiện, Phủ Lý, hà nam',
  phone: '0962130922',
  birthday: '28/10/1992',
  email: 'trinhquanhn1992@gmail.com',
  vietinSexIndex: 2,
  vietinLoaiCC: 1,
  vietinNoiGiaoDich: 1,
  bidvAccNum: 4821813240, //tài khoản bid
  bidvAmount: 1,
  bidvBranch: 1, //dia điểm giao dịch
  bidvCapital: 1,
  bidvPurpose: 2,
  bidvIssuePlace: 0,
}
//------------
function triggerEvent(el, type) {
    const event = new Event(type, { bubbles: true });
    el.dispatchEvent(event);
}

let e;

setTimeout(function(){
e= document.getElementById("address2"); e.value = person.address; triggerEvent(e, 'input');  //address2
e= document.getElementById("address1"); e.value = person.address; triggerEvent(e, 'input'); //address1
e= document.getElementById("amount"); e.value = person.bidvAmount; triggerEvent(e, 'input');//amount
e= document.getElementById("acctnum"); e.value = person.bidvAccNum; triggerEvent(e, 'input'); //acctnum
e= document.getElementById("cellphone"); e.value = person.phone; triggerEvent(e, 'input'); //cellphone
e= document.getElementById("idnumber"); e.value = person.idNumber; triggerEvent(e, 'input'); //idnumber
e= document.getElementById("fullname"); e.value = person.fullName; triggerEvent(e, 'input'); //full name
e= document.getElementById("issuedate"); e.value = person.issueDate; triggerEvent(e, 'input'); //ngay cap issuedate
e= document.getElementById("birthday"); e.value = person.birthday; triggerEvent(e, 'input'); //birthday
},100)

setTimeout(function(){
document.getElementById('btnYes').click(); //click dong y co tai khoan
e= document.getElementById("branch"); e.selectedIndex = person.bidvBranch; triggerEvent(e, 'change'); //branch dia diem giao dich
e= document.getElementById("capital"); e.selectedIndex = person.bidvCapital; triggerEvent(e, 'change'); //capital
e= document.getElementById("purpose"); e.selectedIndex = person.bidvPurpose; triggerEvent(e, 'change'); //purpose
e= document.getElementById("issueplace"); e.selectedIndex = person.bidvIssuePlace; triggerEvent(e, 'change'); //issueplace
e= document.getElementById("terms"); e.checked = true; triggerEvent(e, 'input'); // checkbox
window.scrollTo(0, document.body.scrollHeight);// Cuộn xuống cuối trang
},100)

//-------------------------------------Phần 2 chua dung duoc
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
