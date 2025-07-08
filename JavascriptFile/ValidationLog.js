   function Validate() {
        let mail = document.getElementById("email").value.trim();
        let Key = document.getElementById("key").value.trim();

        const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!(mail.endsWith("@gmail.com") || mail.endsWith("@yahoo.com") || mail.endsWith("@outlook.com"))) {
            alert("Invalid mail! Please enter a correct email address");
            return false;
        }

        if (!reg.test(mail)) {
            alert("Invalid email format");
            return false;
        }

        if (!(Key.length > 5)) {
            alert("Password must be at least 6 characters");
            return false;
        }

        const userName = localStorage.getItem("userName")?.trim(); 
        const LogUser = localStorage.getItem("Email")?.trim();
        const logKey = localStorage.getItem("Password")?.trim();

        if (mail === LogUser && Key === logKey) {
            alert(`Successfully Logged in, ${userName}`);
            window.location.href ="./HtmlFiles/LoggedFile.html";
            return false;
        } else {
            alert("Invalid email or password");
            return false;
        }
    }
    function Next(){
        window.location.href="./HtmlFiles/Sign.html";
        return false;
    }