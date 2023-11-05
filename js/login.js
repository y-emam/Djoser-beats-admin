function login() {
  const form = document.getElementsByTagName("form")[0];
  const email = form.email.value;
  const password = form.password.value;
  console.log(email);
  console.log(password);

  fetch("http://localhost:5000/adminLogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.token) {
        const token = res.token;
        document.cookie = `token=${token}`;

        window.location.href = "html/admin.html";
      } else {
        alert("Failed To Login. Check Your email and password");
      }
    })
    .catch((e) => {
      alert("Error: " + e);
    });
}
