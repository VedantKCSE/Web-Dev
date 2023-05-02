function validateForm() {
    const email = document.forms["employee-form"]["email"].value;
    const name = document.forms["employee-form"]["name"].value;
    const mobile = document.forms["employee-form"]["mobile"].value;
    const address = document.forms["employee-form"]["address"].value;
    const salary = document.forms["employee-form"]["salary"].value;

    // Regular expression to validate email format
    const emailRegex = /\S+@\S+\.\S+/;

    // Regular expression to validate name format
    const nameRegex = /^[A-Za-z ]+$/;

    // Regular expression to validate mobile number format
    const mobileRegex = /^[0-9]{10}$/;

    // Regular expression to validate salary format
    const salaryRegex = /^\d+$/;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (!nameRegex.test(name)) {
        alert("Please enter a valid name (letters and spaces only)");
        return false;
    }

    if (!mobileRegex.test(mobile)) {
        alert("Please enter a valid 10 digit mobile number");
        return false;
    }

    if (address === "") {
        alert("Please enter an address");
        return false;
    }

    if (!salaryRegex.test(salary)) {
        alert("Please enter a valid salary");
        return false;
    }

    return true;
}