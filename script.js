const pageContainer = document.querySelector("#pageContainer");
const mainHeading = document.querySelector("#mainHeading");
const nameInput = document.querySelector("#nameInput");
const greetingButton = document.querySelector("#greetingButton");
const backgroundButton = document.querySelector("#backgroundButton");
const resetButton = document.querySelector("#resetButton");
const messageArea = document.querySelector("#messageArea");

// Event Handler: Displays a personalized greeting
function displayGreeting() {
    const name = nameInput.value.trim();

    if (name === "") {
        messageArea.textContent = "Please enter your name.";
    } else {
        mainHeading.textContent = `Hello, ${name}!`;
        messageArea.textContent = "The greeting displayed successfully.";
    }
}

// Event Handler: Changes the webpage background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightyellow";
    console.log("Background color was changed.");
    messageArea.textContent = "Background color was changed.";
}

// Event Handler: Resets the webpage to its original state
function resetDisplay() {
    mainHeading.textContent = "Basic Event-Driven WebPage";
    nameInput.value = "";
    document.body.style.backgroundColor = "white";
    messageArea.textContent = "You are typing:";
}

// Event Handler: Displays the text currently being entered
function typing() {
    messageArea.textContent = `You are typing: ${nameInput.value}`;
}

// Event Handler: Displays a message when the mouse is over a button
function handleMouseover(event) {
    console.log(`The mouse is over the ${event.target.textContent} button.`);
}


// Event Source: greetingButton
// Event Listener: click
// Event Handler: displayGreeting
greetingButton.addEventListener("click", displayGreeting);

// Event Source: backgroundButton
// Event Listener: click
// Event Handler: changeBackgroundColor
backgroundButton.addEventListener("click", changeBackgroundColor);

// Event Source: resetButton
// Event Listener: click
// Event Handler: resetDisplay
resetButton.addEventListener("click", resetDisplay);

// Event Source: nameInput
// Event Listener: input
// Event Handler: typing
nameInput.addEventListener("input", typing);

// Event Source: greetingButton
// Event Listener: mouseover
// Event Handler: handleMouseover
greetingButton.addEventListener("mouseover", handleMouseover);

// Event Source: backgroundButton
// Event Listener: mouseover
// Event Handler: handleMouseover
backgroundButton.addEventListener("mouseover", handleMouseover);

// Event Source: resetButton
// Event Listener: mouseover
// Event Handler: handleMouseover
resetButton.addEventListener("mouseover", handleMouseover);

// Debugging message
console.log("JavaScript file loaded successfully.");