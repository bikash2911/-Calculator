const display = document.getElementById("display");

function appendValue(value) {
  if (display.value === "0") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  document.getElementById("display").value = "0";
}

function deleteBtn() {
  // const display = document.getElementById('display');
  if (display.value.length === 1 || display.value === "error") {
    display.value = "0";
  } else {
    display.value = display.value.slice(0, -1);
  }
}

const messages = ["🔥 Lucky", "🍀 Blessed", "💔 Sad", "❤️ Love", "💰 Rich", "🫣 Risk", "😬 Unlucky"];
let lastMessage = "";
let repeatCountForDigits = 0;

function calculate() {
  const input = display.value.trim();

  // ✅ Check if input is only 1 digit from 1-9
  if (/^[1-9]$/.test(input)) {
    repeatCountForDigits++;

    if (repeatCountForDigits >= 2) {
      display.value = "Error";
      return;
    }

    // Show random message
    let newMessage = lastMessage;
    while (newMessage === lastMessage) {
      const randomIndex = Math.floor(Math.random() * messages.length);
      newMessage = messages[randomIndex];
    }
    display.value = newMessage;
    lastMessage = newMessage;
    return;
  }

  // 🧹 Reset repeat count if other input (not 1-9 digit)
  repeatCountForDigits = 0;

  if (input === ".") {
    display.value = "Bikash Rai";
    return;
  }

  try {
    let result = eval(display.value.replace(/[^-()\d/*+.]/g, ""));
    display.value = result.toString();
  } catch (error) {
    display.value = "error";
  }
}
