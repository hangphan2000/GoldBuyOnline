
// ngay sinh
document.querySelector('input.bB.cN[name="ns"]').value='28-10-1992';
// ngay cap
document.querySelector('input.bB.cN[name="nc"]').value = '25-08-2021';
// chon loai can cuoc
document.querySelector('select[name="l"]').selectedIndex = 1;
// chon gt
document.querySelector('select[name="gt"]').selectedIndex = 2;
// chon noi gd
document.querySelector('select[name="dc"]').selectedIndex = 1;
// focus vao o viet capcha
document.querySelector('input.bB[name="mxn"]').focus();
// Cuộn xuống cuối trang
window.scrollTo(0, document.body.scrollHeight);

//------------------------------mai anh
var button = document.querySelector('.pa-btn.gh');
setInterval(function() {
    if (button.disabled) {
        button.disabled = false;
    }
}, 100);

//------------------------------auto click button: copy to console trước đó nhớ allow pasting
var button = document.querySelector('.pa-btn.gh');
var counter = 0;
setInterval(function() {
    if (button.disabled) {
        button.disabled = false;
    }
    button.click();
    counter++;
    document.title = counter;
}, 100);

//----------------------open tabs
// Open 20 tabs with the same URL
for (let i = 0; i < 20; i++) {
  window.open('https://dangkymuavang.vietinbankgold.vn/');
}

//---------------------------------------test
//enable button dang ky
var timer = setInterval(function() {
    console.log('running');
  var button = document.querySelector('.pa-btn.gh'); // Nút xác nhận
  var mxn = document.querySelector('input.bB[name="mxn"]'); // Trường nhập captcha
  var inputEmailCode = document.querySelector('input[name="dh"]'); // Trường nhập mã email
  var thongBao = document.querySelector('.tB').innerText;//thong bao
  if (mxn.value.length === 5) {
    if (button.disabled) {
      console.log('button disabled');
      button.disabled = false;
    }
    button.click();
  }
  if (!inputEmailCode.disabled) {
    console.log('email input found!');
    document.title = 'Email';
    clearInterval(timer);
  }
}, 100);


