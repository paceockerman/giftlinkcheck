var input = document.getElementById("input");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.key === 'Enter') {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        submitForm()
    }
});


function submitForm() {
    let link = document.getElementById("input").value;
    const pattern = /https:\/\/discord.gift/i;
    let result = pattern.test(link);
    if (result) {
        document.getElementById('result').innerHTML = 'This is a real discord gift link!'
    } else {
        document.getElementById('result').innerHTML = 'This is a <b>scam</b>! Do not click this link.'
    }
}