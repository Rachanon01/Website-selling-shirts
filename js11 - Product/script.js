const productImg = document.getElementById('productImg');
const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');
const blueColor = document.getElementById('blueColor');
const redColor = document.getElementById('redColor');
const greenColor = document.getElementById('greenColor');
const productBrand = document.getElementById('productBrand');
const limited = document.getElementById('limited')

//คำสั่งเมื่อ click ที่ปุ่มจะให้ทำคำสั่งในปีกกา
blueColor.addEventListener('click', () => {
  productImg.src = 'img/nike-blue.png'; //เปลี่ยนรูปภาพ
  productName.textContent = 'blue Nike Dunk High By You'; //เปลี่ยนตัวหนังสือ
  productPrice.innerHTML = '<strong>$100.00</strong>'; //เปลี่ยนราคาใช่ innerHTML เพื่อไม่ให้แท็ค strong มองเห็นในจอ
  productBrand.style.backgroundColor = 'blue'; //เปลื่ยนสีพื้นหลังของ NIKE 
  limited.style.display = 'none'; //เปลี่ยน span ให้หายจากจอ
})

redColor.addEventListener('click', () => {
  productImg.src = 'img/nike-red.png';
  productName.textContent = 'Red Nike Dunk High By You';
  productPrice.innerHTML = '<strong>$150.00</strong>';
  productBrand.style.backgroundColor = 'red';
  limited.style.display = 'block'; //เปลื่อน span ให้เป็น block เพื่อให้แสดงขึ้นมา
})

greenColor.addEventListener('click', () => {
  productImg.src = 'img/nike-green.png';
  productName.textContent = 'green Nike Dunk High By You';
  productPrice.innerHTML = '<strong>$100.00</strong>';
  productBrand.style.backgroundColor = 'green';
  limited.style.display = 'none'
})