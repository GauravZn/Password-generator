const passBox = document.getElementById('pass');
const length = 8;

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890!@#$%&";

function generatePassword() {

    let ans = "";

    while (ans.length < 8) {
        ans += chars[Math.floor(Math.random() * chars.length)]
    }
    passBox.value = ans;
}

function copyPassword() {
    passBox.select();
    document.execCommand("copy");
    // passBox.blur();
    setTimeout(() => {
        passBox.setSelectionRange(0, 0);
    }, 1000);
}
