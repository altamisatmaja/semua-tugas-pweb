const stepMenuOne = document.querySelector(".formbold-step-menu1");
const stepMenuTwo = document.querySelector(".formbold-step-menu2");
const stepMenuThree = document.querySelector(".formbold-step-menu3");

const stepOne = document.querySelector(".formbold-form-step-1");
const stepTwo = document.querySelector(".formbold-form-step-2");
const stepThree = document.querySelector(".formbold-form-step-3");

const formSubmitBtn = document.querySelector(".formbold-btn");
const formBackBtn = document.querySelector(".formbold-back-btn");

formSubmitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (stepMenuOne.classList.contains("active")) {
    if (
      document.getElementById("firstname").value.trim() === "" ||
      document.getElementById("lastname").value.trim() === "" ||
      document.getElementById("dob").value.trim() === "" ||
      document.getElementById("email").value.trim() === "" ||
      document.getElementById("address").value.trim() === ""
    ) {
      alert("Harap lengkapi semua data terlebih dahulu.");
      return;
    }
    
    stepMenuOne.classList.remove("active");
    stepMenuTwo.classList.add("active");
    stepOne.classList.remove("active");
    stepTwo.classList.add("active");
    formBackBtn.classList.add("active");
    formSubmitBtn.textContent = "Daftar";
  } else if (stepMenuTwo.classList.contains("active")) {
    if (document.getElementById("message").value.trim() === "") {
      alert("Harap isi pesan terlebih dahulu.");
      return;
    }
    
    alert("Pendaftaran berhasil!");
    window.location.href = "index.html";
    stepMenuTwo.classList.remove("active");
    stepMenuThree.classList.add("active");
    stepTwo.classList.remove("active");
    stepThree.classList.add("active");
    formSubmitBtn.style.display = "none";
    formBackBtn.classList.remove("active");
  }
});
