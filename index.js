// Add your code here

function submitData(userName, UserEmail){
    let formData = {
        name: userName,
        email: UserEmail
    };

    return (
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json",
            },
            body: JSON.stringify(formData),

        })
        .then( (response) => response.json() )
        .then( (result) => {
            const body = document.querySelector('body');
            const p = document.createElement('p');
            p.textContent = result.id;
            body.appendChild(p);
        })
        .catch( (error) => {
            const body = document.querySelector('body');
            const p = document.createElement('p');
            p.textContent = error.message;
            body.appendChild(p);
        })
    )

}

