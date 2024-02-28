function login() {
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    let userData = JSON.parse(localStorage.getItem("userData"));
    let foundUser = userData.find(user =>user.username === username && user.password === password);
    if(foundUser) {
        alert("სისტემაში შესვლა განხორციელდა წარმატებულად");
        window.location.href = "welcome.html";
    }else {
        alert("Invalid username or password");
    }
}