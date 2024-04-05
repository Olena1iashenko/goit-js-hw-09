// const linkGoHome = document.querySelector('a');

// const form = document.createElement('form');
// form.classList.add('feedback-form');
// form.setAttribute('autocomplete', 'off');

// form.innerHTML = `
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// `;

// form.after(linkGoHome);

// console.log(form);

const feedbackFormEl = document.querySelector('.feedback-form');
const LS_KEY = "feedback-form-state";
let userData = {};

feedbackFormEl.addEventListener("submit", onSubmit);
feedbackFormEl.addEventListener("input", onInput);

function addDataToLocalStorage(key, value) {
  try {
    const userDataFromLS = JSON.stringify(value);
    localStorage.setItem(key, userDataFromLS);
  } catch (err) {
    console.log(err.message);
  }
}

(function getDataFromLocalStorage(key) {
  try {
      const userDataFromLS = JSON.parse(localStorage.getItem(key));
      if (userDataFromLS) {
          feedbackFormEl.elements.email.value = userDataFromLS.email;
          feedbackFormEl.elements.message.value = userDataFromLS.message;
    }
  } catch (error) {
    console.log(error.message);
  }
})(LS_KEY)

function onSubmit(event) {
  event.preventDefault();
  const { email, message } = event.currentTarget.elements;

  if (!email.value.trim() || !message.value.trim()) return alert('Fill in both fields!');

  let userData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  console.log(userData);
  
  event.currentTarget.reset();
 localStorage.removeItem(LS_KEY)
}

function onInput(event) {
    const { email, message } = event.currentTarget.elements;
    userData.email = email.value.trim();
    userData.message = message.value.trim();
    addDataToLocalStorage(LS_KEY, userData);
}

// getDataFromLocalStorage(LS_KEY);