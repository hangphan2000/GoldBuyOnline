//sửa thông tin ở đây
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
}
setTimeout(function() {
  document.querySelector('input.bB[name="hvt"]').value = person.fullName //ho ten
  document.querySelector('input.bB[name="s"]').value = person.idNumber //id number
  document.querySelector('input.bB[name="dcc"]').value = person.issuePlace //noi cap
  document.querySelector('input.bB[name="dctt"]').value = person.address //address
  document.querySelector('input.bB[name="sdt"]').value = person.phone  //phone
  document.querySelector('input.bB[name="ns"]').value= person.birthday; // ngay sinh
  document.querySelector('input.bB.hT[name="ht"]').value = person.email //email
  document.querySelector('input.bB.cN[name="nc"]').value = person.issueDate; // ngay cap
  document.querySelector('select[name="l"]').selectedIndex = person.vietinLoaiCC; // chon loai can cuoc
  document.querySelector('select[name="gt"]').selectedIndex = person.vietinSexIndex; // chon gt
  document.querySelector('select[name="dc"]').selectedIndex = person.vietinNoiGiaoDich; // chon noi gd
  document.querySelector('input.bB[name="mxn"]').focus(); // focus vao o viet capcha
  window.scrollTo(0, document.body.scrollHeight);  // Cuộn xuống cuối trang
},100);
//enable button dang ky
let button;
let mxn;
let thongBao;
let inputEmailCode;
let now;
var timer = setInterval(function() {
    now = new Date();
    console.log('clicking find email');
  button = document.querySelector('.pa-btn.gh'); // Nút xác nhận xac nhap trang 1
  mxn = document.querySelector('input.bB[name="mxn"]'); // Trường nhập captcha
  thongBao = document.querySelector('.tB').innerText;//thong bao
   inputEmailCode = document.querySelector('input[name="dh"]'); // Trường nhập mã email
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
            button = document.querySelector('.pa-btn.dh'); // Nút xác nhận trang 2
            inputEmailCode = document.querySelector('input[name="dh"]'); // Trường nhập mã email
            if(inputEmailCode.value.length>0){
              if (button.disabled) {
              button.disabled = false;
            }
            button.click();
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
