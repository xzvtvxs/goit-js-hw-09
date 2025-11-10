// const form = document.querySelector('.feedback-form');
// // const email = form.elements.email;
// // const message = form.elements.message;
// const KEY = "feedback-form-state";

// const formData = {
//     email: "",
//     message: ""
// };

// const savedData = JSON.parse(localStorage.getItem(KEY));

// if (savedData) {
//     formData.email = savedData.email ?? "";
//     formData.message = savedData.message ?? "";
//     form.elements.email.value = formData.email;
//     form.elements.message.value = formData.message;
// };

// form.addEventListener('input', (e) => {
//     const { name, value } = e.target;
//     formData[name] = value.trim();
//     localStorage.setItem(KEY, JSON.stringify(formData));
// });

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (formData.email === "" || formData.message === "") {
//     alert("Fill please all fields");
//     return ;
//     }
//     console.log(formData);
//     localStorage.removeItem(KEY);
//     form.reset();
//     formData.email = '';
//     formData.message = '';
// });

// ************************************************************

// const form = document.querySelector('.feedback-form');
// const email = form.elements.email;
// const message = form.elements.message;
// const KEY = "feedback-form-state";

// const formData = {
//     email: "",
//     message: ""
// };

// function load() {
//     const rawData = localStorage.getItem(KEY);
//     if (!rawData)
//         return;
//     try {
//         const saved = JSON.parse(rawData);
//         formData.email = saved.email || '';
//         formData.message = saved.message || '';
//         email.value = formData.email;
//         message.value = formData.message;
//     } catch {

//     };
// };

// function save() {
//     formData.email = email.value;
//     formData.message = message.value;
//     localStorage.setItem(KEY, JSON.stringify(formData));
// };

// function onSubmit(e) {
//     e.preventDefault();
//     const emailValue = formData.email.trim();
//     const messageValue = formData.message.trim();
//     if (!email.value || !message.value) {
//         alert("Fill please all fields");
//         return;
//     }
//     console.log(formData);
//     localStorage.removeItem(KEY);
//     form.reset();
//     formData.email = '';
//     formData.message = '';
// };

// load();
// form.addEventListener('input', save);
// form.addEventListener('submit', onSubmit);

const form = document.querySelector('.feedback-form');
const KEY = "feedback-form-state";

const formData = {
    email: "",
    message: ""
};

function load() {
    const savedString = localStorage.getItem(KEY);
    if (savedString === null) {
        return;
    }
    let savedObject;
    try {
        savedObject = JSON.parse(savedString);
    } catch (error) {
        return;
    }
    if (savedObject.email) {
        formData.email = savedObject.email.trim();
    } else {
        formData.email = "";
    }
    if (savedObject.message) {
        formData.message = savedObject.message.trim();
    } else {
        formData.message = "";
    }
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

function save(evt) {
    const field = evt.target.name;
    const value = evt.target.value.trim();
    if (field === "email") {
        formData.email = value;
    }
    if (field === "message") {
        formData.message = value;
    }
    localStorage.setItem(KEY, JSON.stringify(formData));
}

function onSubmit(evt) {
    evt.preventDefault();
    const emailValue = formData.email.trim();
    const messageValue = formData.message.trim();
    if (emailValue === "" || messageValue === "") {
        alert("Fill please all fields");
        return;
    }
    console.log({
        email: emailValue,
        message: messageValue
    });
    localStorage.removeItem(KEY);
    form.reset();
    formData.email = "";
    formData.message = "";
};

load();

form.addEventListener('input', save);
form.addEventListener('submit', onSubmit);