function Validate() {
        let name = document.getElementById("name").value.trim();
        let mail = document.getElementById("email").value.trim();
        let Key = document.getElementById("key").value.trim();

        const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const regName = /^[a-zA-Z\s]+$/;

        if (!(name.length > 5)) {
            alert("Name should be at least 6 characters");
            return false;
        }

        if (!regName.test(name)) {
            alert("Only characters A-Z, a-z and spaces allowed in name");
            return false;
        }

        if (!(mail.endsWith("@gmail.com") || mail.endsWith("@yahoo.com") || mail.endsWith("@outlook.com"))) {
            alert("Invalid mail! Please enter a valid email address");
            return false;
        }

        if (!reg.test(mail)) {
            alert("Invalid mail format");
            return false;
        }

        if (!(Key.length > 5)) {
            alert("Password must be at least 6 characters");
            return false;
        }

        // Save to localStorage
        localStorage.setItem("userName", name);
        localStorage.setItem("Email", mail);
        localStorage.setItem("Password", Key);

        alert("Thank you for being our community member.");
        window.location.href = `Hello.html?mail=${encodeURIComponent(mail)}&Key=${encodeURIComponent(Key)}`;

        return true;
    }
      function Next(){
        window.location.href="../HtmlFiles/Login.html";
        return false;
    }