//sửa thông tin ở đây
setTimeout(function() {
  console.log('fill input');
  //ho ten
  document.querySelector('input.bB[name="hvt"]').value = 'trịnh tiến quân'
  //id number
  document.querySelector('input.bB[name="s"]').value = '035092013752'
  //noi cap
  document.querySelector('input.bB[name="dcc"]').value = 'cục cảnh sát qlhc về ttxh'
  //adress
  document.querySelector('input.bB[name="dctt"]').value = 'Lương Khánh Thiện, Phủ Lý, hà nam'
  //phone
  document.querySelector('input.bB[name="sdt"]').value = '0962130922'
  // ngay sinh
  document.querySelector('input.bB[name="ns"]').value='28-10-1992';
  //email
  document.querySelector('input.bB.hT[name="ht"]').value = 'trinhquanhn1992@gmail.com'
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
},100);
//enable button dang ky
var timer = setInterval(function() {
    let now = new Date();
    console.log('clicking find email');
  var button = document.querySelector('.pa-btn.gh'); // Nút xác nhận xac nhap trang 1
  var mxn = document.querySelector('input.bB[name="mxn"]'); // Trường nhập captcha
  var thongBao = document.querySelector('.tB').innerText;//thong bao
   var inputEmailCode = document.querySelector('input[name="dh"]'); // Trường nhập mã email
    if(now.getHours()===11){
      if (mxn.value.length === 5) {
            if (button.disabled) {
              button.disabled = false;
            }
            button.click();
      }
        if (!inputEmailCode.disabled) {
        console.log('email input found!');
        document.title = 'Email';
        clearInterval(timer);
        var timer1 = setInterval(function() {
            console.log('clicking to death');
            var button2 = document.querySelector('.pa-btn.dh'); // Nút xác nhận trang 2
            var inputEmailCode = document.querySelector('input[name="dh"]'); // Trường nhập mã email
            if(inputEmailCode.value.length>0){
              if (button2.disabled) {
              button2.disabled = false;
            }
            button2.click();
            }
        },1);
        }
    }
}, 1);
//tung
 //ho ten
  document.querySelector('input.bB[name="hvt"]').value = 'Mai Văn Tùng'
  //id number
  document.querySelector('input.bB[name="s"]').value = '035203003891'
  //noi cap
  document.querySelector('input.bB[name="dcc"]').value = 'cục cảnh sát qlhc về ttxh'
  //adress
  document.querySelector('input.bB[name="dctt"]').value = 'đồng tân, tân sơn, kim bảng, hà nam'
  //phone
  document.querySelector('input.bB[name="sdt"]').value = '0949355950'
  // ngay sinh
  document.querySelector('input.bB[name="ns"]').value='28-10-1992';
  //email
  document.querySelector('input.bB.hT[name="ht"]').value = 'mai.vantung03@proton.me'
  // ngay cap
  document.querySelector('input.bB.cN[name="nc"]').value = '31/12/2021';
//nhung
  //ho ten
  document.querySelector('input.bB[name="hvt"]').value = 'Tô thị trang nhung'
  //id number
  document.querySelector('input.bB[name="s"]').value = '001179034852'
  //noi cap
  document.querySelector('input.bB[name="dcc"]').value = 'cục cảnh sát qlhc về ttxh'
  //adress
  document.querySelector('input.bB[name="dctt"]').value = '368-C7 tân mai, hoàng mai, hà nội'
  //phone
  document.querySelector('input.bB[name="sdt"]').value = '0983252568'
  // ngay sinh
  document.querySelector('input.bB[name="ns"]').value='02/09/1979';
  //email
  document.querySelector('input.bB.hT[name="ht"]').value = 'nhungtt.vic@gmail.com'
  // ngay cap
  document.querySelector('input.bB.cN[name="nc"]').value = '04/12/2021';
