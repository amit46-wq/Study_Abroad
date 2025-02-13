
import { db, collection, addDoc } from "./firebaseconfig.js";

document.getElementById('lead-form').addEventListener('submit', async function (e) {
  e.preventDefault();


  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const country = document.getElementById('country').value;

 
  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  try {
    
    await addDoc(collection(db, 'students'), {
      name: name,
      email: email,
      phone: phone,
      country: country,
      timestamp: new Date()
    });

    alert('Form submitted successfully!');
    document.getElementById('lead-form').reset(); // Clear the form
  } catch (error) {
    console.error("Error adding document: ", error);
    alert('An error occurred. Please try again.');
  }
});


function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}