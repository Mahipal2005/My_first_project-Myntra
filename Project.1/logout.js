let Authen = localStorage.getItem('auth') || "Not Authenticated";

if (Authen !== "authorized") {
    window.location.href = "login_signup.html";
} else {
    let div_auth = document.getElementById('div_auth');

    let h1 = document.createElement('h1');
    h1.id = 'user_auth';
    h1.innerText = "Are you sure you want to log out?";

    let div_btn = document.createElement('div');
    div_btn.id = 'btn_login';

    let yes_btn = document.createElement('button');
    yes_btn.id = 'yes_btn';
    yes_btn.innerText = 'Yes';
    yes_btn.addEventListener('click', function () {
        logout();
    });

    let no_btn = document.createElement('button');
    no_btn.id = 'no_btn';
    no_btn.innerText = 'No';
    no_btn.addEventListener('click', function () {
        cancelLogout();
    });

    div_btn.append(yes_btn, no_btn);
    h1.append(div_btn);
    div_auth.append(h1);

    // Append the div_auth to a div (assuming div exists)
    // Replace 'div' with the correct element you want to append to
    // Example: document.body.appendChild(div_auth);

    function logout() {
        localStorage.removeItem('auth');
        alert('Logout successful');
        window.location.href = "index.html";
    }

    function cancelLogout() {
        alert("Logout canceled");

    }

    // Append the div_auth to the document or specific container
    div.appendChild(div_auth); // Replace 'div' with the correct container
}

// Accessing user_auth outside the block
let user_auth = document.getElementById('user_auth');
