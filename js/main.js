// Ganti Navbar apabila discroll
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 200){
        $('.fixed-top').css('background', 'black');
        $('.fixed-top').css('box-shadow', '0px 4px 25px -1px rgba(0, 0, 0, 0)');
        $('.dropdown-menu').css('background', 'rgba(0, 0, 0, 0.6)');
        
    } else{
        $('.fixed-top').css('background', 'rgb(255, 255, 255)');
        $('.fixed-top').css('box-shadow', '0px 4px 25px -1px rgba(0,0,0,0.2)');
        $('.dropdown-menu').css('background', 'rgb(255, 255, 255)');
    }
});

// Form Kontak kami
function ValidateForm(frm) { 
    if (frm.Nama.value == "") {
        alert('Nama harus di isi.'); frm.Nama.focus();return false;} 
        pola_email=/^[a-zA-Z ]+$/; 
        if (!pola_email.test(frm.Nama.value)){
          alert('Format Nama Harus Huruf');
          frm.Nama.focus();
          return false;
        }
    if (frm.Dari.value == "") {
        alert('Alamat email harus di isi.'); frm.Dari.focus();return false; }
        pola_email=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!pola_email.test(frm.Dari.value)){
          alert('Format Email Salah');
          frm.Dari.focus();
          return false;
        }
    if (frm.Dari.value.indexOf("@") < 1 || frm.Dari.value.indexOf(".") < 1) {
        alert('Masukkan Email Yang Benar'); frm.Dari.focus();return false; } 
    if (frm.Pesan.value == "") {alert('Silahkan kirimkan komentar atau pertanyaan.'); frm.Pesan.focus();return false; } 
    if (frm.skip_CaptchaCode.value == "") {alert('Masukan kode di samping.'); frm.skip_CaptchaCode.focus();return false; } 
    return true; } 
    function ReloadCaptchaImage(captchaImageId) { 
        var obj = document.getElementById(captchaImageId); 
        var src = obj.src; var date = new Date(); var pos = src.indexOf('&rad='); if (pos >= 0) { 
            src = src.substr(0, pos); } 
            obj.src = src + '&rad=' + date.getTime(); return false; }    