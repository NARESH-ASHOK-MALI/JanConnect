# JanConnect - Community Complaint Resolution Platform  

JanConnect is a full-stack web application that empowers communities to report, track, and endorse local civic issues. From potholes and broken streetlights to overflowing trash bins, JanConnect brings visibility to problems and connects the community to drive resolution.  

**Live Demo:** [JanConnect on Vercel](https://jan-connect-rust.vercel.app/)  

---

## ✨ Features  

- **User Authentication** – Secure registration/login with Passport.js.  
- **Complaint Management (CRUD)** – Create, read, update, and delete complaints.  
- **Authorization & Ownership** – Users can only modify their own complaints.  
- **Image Uploads** – Upload and store images on Cloudinary with auto-resize & compression.  
- **Image Preview** – Client-side preview before upload.  
- **Interactive Map** – Pinpoint complaint locations using Leaflet.js with GPS support.  
- **Reverse Geocoding** – Convert coordinates to addresses via Nominatim API.  
- **Community Endorsement** – Like/report complaints to highlight priority issues.  
- **Persistent Sessions** – MongoDB-backed sessions keep users logged in.  
- **Flash Messages** – User-friendly notifications for actions and errors.  
- **Responsive Design** – Mobile-first UI built with Bootstrap 5.  

---

## 🛠️ Tech Stack  

**Frontend:** EJS, HTML5, CSS3, Bootstrap 5, Leaflet.js  
**Backend:** Node.js, Express.js  
**Database:** MongoDB + Mongoose  
**Auth:** Passport.js (Local Strategy), Express Session, Connect-Mongo  
**Image Handling:** Cloudinary, Multer  
**Deployment:** Vercel  

---

## 🚀 Local Setup  

### 1. Prerequisites  
- Node.js & npm  
- MongoDB (local or Atlas)  

### 2. Clone Repository  
```bash
git clone https://github.com/NARESH-ASHOK-MALI/JanConnect.git
cd JanConnect
