let info = document.getElementById("info"),
  key = document.getElementById("key");

  document.onkeydown = document.body.onkeydown = function (e) {
    e = e || window.event; // ใช้ e หรือ window.event เพื่อรองรับเบราว์เซอร์เก่า
    info.innerHTML = '';
    key.innerHTML = e.keyCode || e.which;
    return false;
  }