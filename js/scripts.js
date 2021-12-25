var input = document.getElementById("input");
input.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        submitForm()
    }
});


function submitForm() {
    let link = document.getElementById("input").value;
    const urlpattern = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
    const pattern = /^https:\/\/discord.gift\/[A-Za-z0-9]{16}$/i;
    let isUrl = urlpattern.test(link)
    let result = pattern.test(link);
    if (!isUrl) {
        document.getElementById('result').innerHTML = 'This does not appear to be a valid link.'
    } else {
        if (result) {
            document.getElementById('result').innerHTML = 'This is a valid discord gift link.'
        } else {
            document.getElementById('result').innerHTML = 'This is likely a <b>scam</b>! It is not a discord gift link.'
        }
    }
}
