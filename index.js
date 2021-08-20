// Add your code here
function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            let newUserInfo = document.createElement('div')
            let newUserName = document.createElement('div')
            let newUserEmail = document.createElement('div')
            let newUserId = document.createElement('div')

            newUserName.textContent = json.name
            newUserEmail.textContent = json.email
            newUserId.textContent = json.id

            newUserInfo.append(newUserName, newUserEmail, newUserId)
            document.querySelector('body').append(newUserInfo)
        })
        .catch(error => {
            document.querySelector('body').append(error.message);
        });


};

