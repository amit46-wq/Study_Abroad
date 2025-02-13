# Study_Abroad
Study MBBS Abroad Landing Page
This is a responsive landing page for the Study MBBS Abroad website. It features a lead generation form that stores user data in Firebase Firestore. The project is built using HTML, Tailwind CSS, and JavaScript.

Features
Responsive Design:

The landing page is fully responsive and works seamlessly on mobile, tablet, and desktop devices.

Lead Generation Form:

Users can submit their details (name, email, phone, and country preference).

Form data is stored in Firebase Firestore.

SEO Optimization:

Meta tags and alt text are added for better search engine visibility.

Performance Tracking:

Google Analytics and Facebook Pixel are integrated for tracking user behavior.

Setup Instructions
1. Prerequisites
Before running the project, ensure you have the following:

A modern web browser (e.g., Chrome, Firefox, Edge).

A Firebase account (to set up Firestore).

2. Firebase Setup
Create a Firebase Project:

Go to the Firebase Console.

Click Add Project and follow the steps to create a new project.

Enable Firestore:

In the Firebase Console, go to Firestore Database.

Click Create Database and start in test mode (for development purposes).

Get Firebase Configuration:

In the Firebase Console, go to Project Settings > General.

Scroll down to Your apps and click Add app (select Web).

Register your app and copy the Firebase configuration object:

Update Firebase Configuration:

Replace the placeholder values in scripts/firebaseconfig.js with your actual Firebase configuration.

 Run the Project Locally
Clone the Repository:

bash
Copy
git clone https://github.com/your-username/study-mbbs-abroad.git
cd study-mbbs-abroad
Open the Project:

Open the index.html file in your browser.

Test the Form:

Fill out the form and click Submit.

Check the Firestore Database in the Firebase Console to verify that the data is being saved.

4. Deploy the Project
Deploy to Netlify:

Go to Netlify.
Drag and drop the project folder into the Netlify dashboard, or connect your GitHub repository.
5. Integrate Analytics
Google Analytics:

Replace G-XXXXXXXXXX in the index.html file with your Google Analytics Measurement ID.

Facebook Pixel:

Replace FB_PIXEL_ID in the index.html file with your Facebook Pixel ID.
Enjoy using the Study MBBS Abroad landing page! 🚀

