//  ===== input field values ======
const navbar = document.querySelectorAll(".nav-link");
const navCollapse = document.querySelector(".navbar-collapse.collapse");
const fullName = document.querySelector(".input-username");
const email = document.querySelector(".input-email");
const number = document.querySelector(".input-number");
const person = document.querySelector(".input-person");
const date = document.querySelector(".input-date");
const time = document.querySelector(".input-time");

// ===== main value ====
const form = document.querySelector(".form");

// ===== NavBar field =====
navbar.forEach((e) => {
    e.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    });
});

// ====== form submition field ======

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
});

// ======== Errors =======

const setError = (att, message) => {
    const className = document.querySelector(`.${att}`);
    const error = className.lastElementChild;
    error.classList.add("text-danger");
    error.textContent = message;
};

const setSuccess = (att, message) => {
    const className = document.querySelector(`.${att}`);
    const error = className.lastElementChild;
    error.classList.remove("text-danger");
    error.textContent = message;
};

// ====== validation field ======
const userNameValid = (isUserNameValid) => {
    let userpattern = /^[a-z0-9_-]{3,15}$/;
    return userpattern.test(isUserNameValid);
};

const emailValid = (isValid) => {
    let userpattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return userpattern.test(isValid);
};

const phoneValid = (isValid) => {
    let userpattern = /^[0-9]{10}$/;
    return userpattern.test(isValid);
};

const personValid = (isValid) => {
    let userpattern = /^[1-5]$/;
    return userpattern.test(isValid);
};

const validateInputs = () => {
    let fullNameValue = fullName.value;
    let emailValue = email.value;
    let numberValue = number.value;
    let personValue = person.value;
    let dateValue = date.value;
    let timeValue = time.value;

    //   name field

    if (fullNameValue === "") {
        setError("username", "this field is required !");
    } else if (!userNameValid(fullNameValue)) {
        setError("username", "this field is invalid !");
    } else {
        setSuccess("username", "");
    }

    //  email field

    if (emailValue === "") {
        setError("email", "this field is required !");
    } else if (!emailValid(emailValue)) {
        setError("email", "this field is invalid !");
    } else {
        setSuccess("email", "");
    }

    //  number field

    if (numberValue === "") {
        setError("number", "this field is required !");
    } else if (!phoneValid(numberValue)) {
        setError("number", "this field is invalid !");
    } else {
        setSuccess("number", "");
    }

    //  person field

    if (personValue === "") {
        setError("person", "this field is required !");
    } else if (!personValid(personValue)) {
        setError("person", "this field is invalid (max[0-5]) !");
    } else {
        setSuccess("person", "");
    }

    //  date field

    if (dateValue === "") {
        setError("date", "this field is required !");
    } else {
        setSuccess("date", "");
    }

    //  time field

    if (timeValue === "") {
        setError("time", "this field is required !");
    } else {
        setSuccess("time", "");
    }
};
