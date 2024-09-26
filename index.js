
        const emailInput = document.getElementById('email');
        emailInput.addEventListener('input', () => validate(emailInput));

        function validate(element) {
            if (element.validity.typeMismatch) {
                element.setCustomValidity("Enter the correct format!!");
                element.reportValidity();
            } else {
                element.setCustomValidity('');
            }
        }

        function displayValues(event) {
            event.preventDefault();
            
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const dob = document.getElementById("dob").value;
            const checkbox = document.getElementById("checkbox").checked;
            
            const entryvalues = document.getElementById("entryvalues");
            entryvalues.innerHTML +=
            `<tr>
                <td>${name}</td>
                <td>${email}</td>
                <td>${password}</td>
                <td>${dob}</td>
                <td>${checkbox ? 'true' : 'false'}</td>
            </tr>`;
            
            let userEntries = JSON.parse(localStorage.getItem("user-entries")) || [];
            userEntries.push({ name, email, password, dob, acceptedTerms: checkbox });
            localStorage.setItem("user-entries", JSON.stringify(userEntries));
            

            document.getElementById("registrationForm").reset();
        }

        window.onload = function() {
            let userEntries = JSON.parse(localStorage.getItem("user-entries")) || [];
            const entryvalues = document.getElementById("entryvalues");

            
            userEntries.forEach(entry => {
                entryvalues.innerHTML +=
                `<tr>
                    <td>${entry.name}</td>
                    <td>${entry.email}</td>
                    <td>${entry.password}</td>
                    <td>${entry.dob}</td>
                    <td>${entry.acceptedTerms ? 'true' : 'false'}</td>
                </tr>`;
            });
        };
    