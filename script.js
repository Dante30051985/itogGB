const pasw1 = document.querySelector('input#pasw1');
const pasw2 = document.querySelector('input#pasw2');

pasw2.oninput = () => {
   let enterPassword = pasw2.value;
   if (enterPassword != pasw1.value) {
        pasw1.style.borderColor = 'red', pasw2.style.borderColor = 'red';
   } else {
        pasw1.style.borderColor = 'green', pasw2.style.borderColor = 'green';
   }
}
