
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