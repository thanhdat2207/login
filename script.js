
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");
                
// Show login popup

showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
    document.getElementById("myvideo").style.display = 'none';
});

// Hide login popup
hidePopupBtn.addEventListener("click", () =>{ showPopupBtn.click()
    document.getElementById("myvideo").style.display = 'block';
});

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Ngăn chặn gửi form đi

  // Lấy giá trị từ các input
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Xử lý dữ liệu đăng nhập theo ý muốn
  // Ví dụ: Kiểm tra thông tin đăng nhập hợp lệ
  if (username === 'thanhdat2207' && password === '123456') {
    // Nếu thông tin hợp lệ, chuyển đến trang thành công
    window.location.href = "cvcanhan_ThaiThanhDat.html";
  } else {
    // Nếu thông tin không hợp lệ, hiển thị thông báo lỗi
    alert("Tên đăng nhập hoặc mật khẩu không chính xác!");
  }
});
                                        
                             
