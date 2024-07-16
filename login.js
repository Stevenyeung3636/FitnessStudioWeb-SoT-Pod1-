var Inputs = document.getElementsByTagName("input");
var loginBtn = document.getElementsByTagName("button")[0];
var isLogin = false;


loginBtn.addEventListener("click", async () => {
    const ac = Inputs[0];
    const pw = Inputs[1];
    const url = 'http://localhost:8080/auth/login';
    const obj = {
        'username': ac,
        'password': pw,
    };
    try {
        const response = await fetch (url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj),
        });
    } catch (err) {
        throw err;
    }

    const result = await response.json();

    console.log(result)

})