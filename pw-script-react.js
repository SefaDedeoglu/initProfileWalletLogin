var initProfileWalletLogin = (token,returnUrl) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: "",
        redirect: 'follow'
    };

    fetch("https://demo-api.profilewallet.com/api/organizational/users", requestOptions)
        .then(response => {
            if (response.status) {
                // const min_window = window.open("https://demo-frontend.profilewallet.com/?returnUrl="+returnUrl, "_blank", "toolbar=no,scrollbars=yes,resizable=no,top=500,left=500,width=400,height=600");
                window.location.href = `https://demo-frontend.profilewallet.com/login-with-profile-wallet/?returnUrl=${returnUrl}&token=${token}`

            }
        })
        .catch(error => console.log('error', error));
    }

export default initProfileWalletLogin;

