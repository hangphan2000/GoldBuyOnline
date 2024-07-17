//nhớ thêm dòng email vu.duyhai63@proton.me
//---------------------------phan 1
// sửa thông tin tại đây
const name = 'Vũ Duy Hải'; const t1= 100;
const birthday = '16/03/1963'; const t2= 100;
const adress = 'Tổ 8 Minh Khai, Phủ Lý, hà nam'; const t3= 100;
const phone = '0972996973'; const t4= 100;
const cmnd= '035063010610'; const t5= 100;
const noicap= 'cục cảnh sát qlhc về ttxh'; const t6= 100;
const ngaycap= '19/11/2021'; const t7= 100;
const tcheckbox = 100;
//---------------------------------------
function triggerEvent(el, type) {
  const event = new Event(type, { bubbles: true });
  el.dispatchEvent(event);
}

var timer = setInterval(function() {
  var input101 = document.getElementById('input-101');
  if (input101) {
    //name
    setTimeout(function(){
      const input96= document.getElementById('input-96');
      if (input96) {
          input96.value = name;
          triggerEvent(input96, 'input');
      }
      },t1);
    //ngay sinh
    setTimeout(function(){
      input101.focus();
      input101.value = birthday;
      triggerEvent(input101, 'input');
      triggerEvent(input101, 'change');
    },t2);      
    //adress
    setTimeout(function(){
      const input105= document.getElementById('input-105');
      if (input105) {
          input105.value = adress;
          triggerEvent(input105, 'input');
      }
      },t3); 
    //phone
    setTimeout(function(){
      const input111= document.getElementById('input-111');
      if (input111) {
          input111.value = phone;
          triggerEvent(input111, 'input');
      }
      },t4); 
    //cmnd
    setTimeout(function(){
      const input114= document.getElementById('input-114');
      if (input114) {
          input114.value = cmnd;
          triggerEvent(input114, 'input');
      }
      },t5);  
    //noi cap
    setTimeout(function(){
      const input123= document.getElementById('input-123');
      if (input123) {
          input123.value = noicap;
          triggerEvent(input123, 'input');
      }
      },t6);       
    //ngay cap
    setTimeout(function(){
      var input119 = document.getElementById('input-119');
      input119.focus();
      input119.value = ngaycap;
      triggerEvent(input119, 'input');
      triggerEvent(input119, 'change');
    }, t7);
    //checkbox
    setTimeout(function(){
        const checkbox = document.querySelector('input[type=checkbox]');
        if (checkbox) {
            checkbox.checked = true;
            triggerEvent(checkbox, 'change');
        }
      },tcheckbox);
    clearInterval(timer);
  }
}, 100);
//---------------------------phan 2
let inputElement;
let timer = setInterval(function() {
  inputElement = document.getElementById('input-25');
  if (inputElement) {
    inputElement.click();
    document.querySelector('.v-list-item__content').click();
    let button;
let timer1 = setInterval(function(){
  button = document.querySelector('button[type="button"][step="3"].btn-main.next-step');
  if(button){
    button.click();
    clearInterval(timer1);
  }
},100);
    clearInterval(timer);
  }
}, 100);
