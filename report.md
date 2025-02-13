Brief Report on Design and Development of Study MBBS Abroad Landing Page

Submitted by: Armaan Ajani
Internship Role: Frontend  Development Intern
Date: 13/02/2025

Introduction
As part of my assignment, I was tasked with designing and developing a responsive landing page for Study MBBS Abroad, a platform that helps students pursue medical degrees in countries like Russia, Uzbekistan, Kazakhstan, and more. The goal of the project was to create an engaging, user-friendly, and functional landing page that captures leads and stores them in a database for further processing.

Project Overview
The landing page was designed to provide essential information about studying MBBS abroad, including the benefits, top countries, admission process, and eligibility criteria. The key feature of the page is a lead generation form that collects user details (name, email, phone, and country preference) and stores them in Firebase Firestore. The project also integrates Google Analytics and Facebook Pixel for tracking user behavior and conversions.

Design Process
UI/UX Design:

The design focuses on simplicity and usability, with a clean layout and intuitive navigation.

A blue and white color scheme was chosen to reflect professionalism and trust.

The page is divided into sections: Hero, Why Study MBBS Abroad, Top Countries, Admission Process, and Lead Form.

Responsiveness:

The page is fully responsive and optimized for mobile, tablet, and desktop devices.

Tailwind CSS was used to streamline the styling process and ensure consistency across devices.

Engaging Visuals:

High-quality images and icons were used to make the page visually appealing.

The Hero section features a background image with a clear call-to-action (CTA) button.

Development Process
Frontend Development:

The frontend was built using HTML and Tailwind CSS for styling.

JavaScript was used for form validation and handling form submissions.

Backend Integration:

Firebase Firestore was used as the backend to store form submissions.

The form data (name, email, phone, and country preference) is saved in a Firestore collection named students.

Form Validation:

JavaScript was used to validate the form inputs (e.g., ensuring a valid email format).

Error messages are displayed to guide users in case of invalid inputs.

Analytics Integration:

Google Analytics and Facebook Pixel were integrated to track user behavior and conversions.

These tools provide insights into page views, form submissions, and user demographics.

Challenges and Solutions
Firebase Integration:

Initially, I faced issues with Firebase initialization and Firestore rules. After debugging and updating the Firestore rules to allow read/write access, the issue was resolved.

Form Clearing:

The form was not clearing after submission. This was fixed by ensuring the reset() method was called after successful data submission to Firestore.

Responsiveness:

Ensuring the page looked good on all devices was challenging. Using Tailwind CSS's utility classes made it easier to achieve a responsive design.

Key Learnings
Firebase Firestore: I gained hands-on experience in integrating Firestore for real-time data storage.

Responsive Design: I learned how to use Tailwind CSS to create responsive and visually appealing designs.

Analytics Integration: I understood how to integrate and use Google Analytics and Facebook Pixel for tracking user behavior.

Conclusion
The Study MBBS Abroad landing page is a fully functional, responsive, and user-friendly platform that effectively captures leads and stores them in Firestore. The project helped me enhance my skills in frontend development, backend integration, and analytics. I am grateful for the opportunity to work on this project and look forward to contributing more during my internship.

Thank you for the opportunity!
Armaan Ajani
armaanajani646@gmail.com
