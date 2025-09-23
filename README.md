# JanConnect - Community Complaint Resolution Platform

JanConnect is a full-stack web application designed to empower communities by providing a platform for citizens to report, track, and endorse local civic issues. From potholes and broken streetlights to overflowing trash bins, this application helps bring visibility to problems and connects the community to drive resolution.

**Live Demo:** [**Access JanConnect on Vercel**](https://jan-connect-rust.vercel.app/)

## ✨ Key Features

* **Full User Authentication**: Secure user registration and login system using Passport.js. Users can create accounts, log in, and log out.
* **Complaint Management (CRUD)**: Authenticated users can create, read, update, and delete their own complaints.
* **Authorization & Ownership**: Robust security ensures that users can only edit or delete the complaints they have created.
* **Image Uploads**: Users can upload images directly from their device. Images are securely hosted on Cloudinary, with automatic resizing and compression for optimal performance.
* **Image Preview**: An instant client-side preview is shown when a user selects an image to upload.
* **Interactive Map & Location Picker**: An integrated Leaflet.js map allows users to pinpoint the exact location of a complaint by clicking on the map or using their device's GPS.
* **Reverse Geocoding**: Converts map coordinates into human-readable street addresses using the Nominatim API.
* **Community Endorsement / Reporting**: A "like" feature allows community members to endorse or report a complaint, helping to highlight the most pressing issues.
* **Persistent Sessions**: User login sessions are stored persistently in the MongoDB database, so users remain logged in even after server restarts or redeployments.
* **Flash Messages**: Provides user-friendly feedback for actions like successful logins, errors, and new complaint registrations.
* **Responsive Design**: A clean, mobile-first interface built with Bootstrap 5.

## 🛠️ Technologies Used

* **Frontend**: EJS, HTML5, CSS3, Bootstrap 5, Leaflet.js
* **Backend**: Node.js, Express.js
* **Database**: MongoDB with Mongoose
* **Authentication**: Passport.js (`passport-local`, `passport-local-mongoose`), Express Session, Connect-Mongo
* **Image Handling**: Cloudinary, Multer
* **Deployment**: Vercel

## 🚀 Setup and Installation (For Local Development)

To run this project on your local machine, follow these steps:

**1. Prerequisites:**

* Node.js and npm installed
* MongoDB installed and running locally, or a MongoDB Atlas account

**2. Clone the Repository:**

```bash
git clone [https://github.com/NARESH-ASHOK-MALI/JanConnect.git](https://github.com/NARESH-ASHOK-MALI/JanConnect.git)
cd JanConnect

**3. Install Dependencies:**

```bash
npm install

**4. Set Up Environment Variables:**
##Create a .env file in the root of the project and add the following variables. Replace the placeholder values with your own credentials.
# Your local or cloud MongoDB connection string
MONGO_URL="mongodb://127.0.0.1:27017/JanConnect"

# Your Cloudinary connection URL (includes cloud name, API key, and secret)
CLOUDINARY_URL="cloudinary://<api_key>:<api_secret>@<cloud_name>"

# A secret string for signing session cookies
SECRET="thisisagoodsecret"

**5. Seed the Database (Optional but Recommended):**
##To populate the database with sample users and complaints, run the initialization script from the root directory:
```bash
node init/index.js

Of course. Here is that section of text converted into proper Markdown format for your README.md file.

Markdown

### 3. Install Dependencies:

```bash
npm install
4. Set Up Environment Variables:
Create a .env file in the root of the project and add the following variables. Replace the placeholder values with your own credentials.

# Your local or cloud MongoDB connection string
MONGO_URL="mongodb://127.0.0.1:27017/JanConnect"

# Your Cloudinary connection URL (includes cloud name, API key, and secret)
CLOUDINARY_URL="cloudinary://<api_key>:<api_secret>@<cloud_name>"

# A secret string for signing session cookies
SECRET="thisisagoodsecret"
5. Seed the Database (Optional but Recommended):
To populate the database with sample users and complaints, run the initialization script from the root directory:

Bash

node init/index.js
This will create a default user with the following credentials:

Username: sampleuser

Password: password123


☁️ Deployment
This application is deployed on Vercel. For continuous deployment, any push to the main branch on GitHub will automatically trigger a new build and deployment. The same environment variables listed above must be configured in the Vercel project settings.