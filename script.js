
function showSignUp() {
    document.querySelector('h2').innerText = 'Sign Up';
    document.querySelector('form').innerHTML = `
        <input type="text" placeholder="Full Name" required>
        <input type="text" placeholder="Email" required>
        <input type="password" placeholder="Password" required>
        <button type="submit">Sign Up</button>
    `;
    document.querySelector('.switch a').innerText = 'Login';
    document.querySelector('.switch a').setAttribute('onclick', 'showLogin()');
}

function showLogin() {
    document.querySelector('h2').innerText = 'Login';
    document.querySelector('form').innerHTML = `
        <input type="text" placeholder="Username" required>
        <input type="password" placeholder="Password" required>
        <button type="submit">Login</button>
    `;
    document.querySelector('.switch a').innerText = 'Sign Up';
    document.querySelector('.switch a').setAttribute('onclick', 'showSignUp()');
}
