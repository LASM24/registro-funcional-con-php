async function registerUser() {
    try {
        var regUsername = document.getElementById("regUsername").value;
        var regPassword = document.getElementById("regPassword").value;

        var response = await sendRequest("POST", "../php/register.php", {
            regUsername: regUsername,
            regPassword: regPassword
        });

        alert(response);
    } catch (error) {
        console.error("Error al registrar usuario:", error);
    }
}

async function loginUser() {
    try {
        var loginUsername = document.getElementById("loginUsername").value;
        var loginPassword = document.getElementById("loginPassword").value;

        var response = await sendRequest("POST", "../php/login.php", {
            loginUsername: loginUsername,
            loginPassword: loginPassword
        });

        var responseArray = response.split("|");

        if (responseArray[0] === "success") {
            var rol = responseArray[1];
            if (rol === "admin") {
                window.location.href = "../../admin/html/index.html";
            } else if (rol === "cliente") {
                window.location.href = "../../client/html/index.html";
            } else {
                alert("Error: Rol no reconocido");
            }
        } else {
            alert("Error al iniciar sesión. Verifica tus credenciales.");
        }
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
    }
}

async function sendRequest(method, url, data) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(xhr.responseText);
                } else {
                    reject("Error en la solicitud al servidor. Estado: " + xhr.status);
                }
            }
        };
        xhr.send(encodeFormData(data));
    });
}

function encodeFormData(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}
