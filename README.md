# JanConnect - Community Complaint Resolution Platform

JanConnect is a comprehensive full-stack web application that empowers communities to report, track, and endorse local civic issues. From potholes and broken streetlights to overflowing trash bins, JanConnect brings visibility to problems and connects the community to drive resolution through transparent governance.

**Live Demo:** [JanConnect on Vercel](https://jan-connect-rust.vercel.app/)

---

## ✨ Core Features

### 🔐 **User Authentication & Authorization**
- **Secure Registration/Login** – Passport.js with local strategy
- **Role-Based Access Control** – Separate user and admin roles
- **Session Management** – MongoDB-backed persistent sessions
- **Password Security** – Automatic hashing and salting with passport-local-mongoose
- **Flash Messages** – User-friendly notifications for all actions

### 📝 **Complaint Management (CRUD)**
- **Create Complaints** – Rich form with image upload, location mapping, and detailed descriptions
- **View All Complaints** – Paginated listing with filtering and sorting
- **Edit Complaints** – Users can modify their own complaints
- **Delete Complaints** – Mark complaints as resolved with automatic cleanup
- **Ownership Protection** – Users can only modify their own complaints

### 🖼️ **Image Management**
- **Cloudinary Integration** – Professional image hosting with auto-resize & compression
- **Client-Side Preview** – Real-time image preview before upload
- **Multiple Formats** – Support for JPG, PNG, and other common formats
- **Automatic Cleanup** – Images deleted from Cloudinary when complaints are removed

### 🗺️ **Interactive Mapping & Location Services**
- **Leaflet.js Integration** – Interactive maps with OpenStreetMap tiles
- **GPS Location Support** – "Get My Location" button for automatic positioning
- **Click-to-Select** – Click anywhere on map to set complaint location
- **Reverse Geocoding** – Convert coordinates to human-readable addresses via Nominatim API
- **GeoJSON Support** – Proper geographic data storage and retrieval

### 👥 **Community Engagement**
- **Endorsement System** – Users can endorse/report complaints to highlight priority issues
- **Report Counter** – Visual display of community support for each complaint
- **Toggle Endorsement** – Users can add or remove their endorsement
- **Community Visibility** – Most endorsed complaints gain priority visibility

### 📊 **Complaint Tracking & Status Management**
- **Multi-Stage Workflow** – Comprehensive status tracking system:
  - Pending Verification
  - Verified
  - Assigned to Authority
  - Work in Progress
  - Resolved
  - Rejected
- **Timeline View** – Visual timeline showing complaint progress
- **Status Notes** – Admins can add notes for each status update
- **Authority Assignment** – Assign complaints to specific municipal authorities

### 🛡️ **Admin Dashboard & Management**
- **Admin Authentication** – Separate admin login system
- **Dashboard Overview** – Statistics and pending complaint management
- **Complaint Verification** – Admins can verify or reject complaints
- **Authority Management** – Assign complaints to municipal authorities
- **Status Updates** – Comprehensive complaint lifecycle management
- **Authority Database** – Manage list of municipal authorities by city

### 📱 **Responsive Design & User Experience**
- **Mobile-First Design** – Optimized for all device sizes
- **Bootstrap 5** – Modern, accessible UI components
- **Glass Morphism** – Modern translucent design elements
- **Smooth Animations** – CSS transitions and hover effects
- **Accessibility** – ARIA labels and keyboard navigation support
- **Progressive Enhancement** – Works without JavaScript for core functionality

### 🎨 **Modern UI/UX Features**
- **Hero Section** – Animated landing page with typing effect
- **Card-Based Layout** – Clean, organized content presentation
- **Interactive Elements** – Hover effects and smooth transitions
- **Color-Coded Status** – Visual status indicators throughout the app
- **Loading States** – User feedback during async operations
- **Error Handling** – Graceful error messages and fallbacks

---

## 🛠️ Technical Stack

### **Frontend Technologies**
- **EJS** – Server-side templating engine
- **HTML5** – Semantic markup
- **CSS3** – Modern styling with custom properties
- **Bootstrap 5** – Responsive UI framework
- **Leaflet.js** – Interactive mapping library
- **Font Awesome** – Icon library
- **Google Fonts** – Plus Jakarta Sans typography

### **Backend Technologies**
- **Node.js** – JavaScript runtime environment
- **Express.js** – Web application framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB object modeling
- **Passport.js** – Authentication middleware
- **Express Session** – Session management
- **Connect-Mongo** – MongoDB session store

### **Third-Party Services**
- **Cloudinary** – Image hosting and processing
- **Multer** – File upload middleware
- **Nominatim API** – Reverse geocoding service
- **OpenStreetMap** – Map tiles and data

### **Development & Deployment**
- **Vercel** – Cloud deployment platform
- **Environment Variables** – Secure configuration management
- **Method Override** – HTTP method support
- **Connect Flash** – Flash message middleware

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas)
- Cloudinary account (for image hosting)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/NARESH-ASHOK-MALI/JanConnect.git
   cd JanConnect
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   MONGO_URL=mongodb://127.0.0.1:27017/JanConnect
   SECRET=your-super-secret-string
   CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret
   ```

4. **Database Setup**
   ```bash
   # Start MongoDB (if running locally)
   mongod
   
   # Or use MongoDB Atlas connection string in .env
   ```

5. **Run the application**
   ```bash
   npm start
   ```

6. **Access the application**
   Open your browser and navigate to `http://localhost:8080`

---

## 📁 Project Structure

```
JanConnect/
├── models/                 # Database models
│   ├── user.js            # User schema and authentication
│   ├── listing.js         # Complaint schema and tracking
│   └── authority.js       # Municipal authority schema
├── views/                  # EJS templates
│   ├── layouts/           # Layout templates
│   ├── includes/          # Reusable components
│   ├── listings/          # Complaint-related pages
│   ├── users/             # Authentication pages
│   └── admin/             # Admin dashboard pages
├── public/                # Static assets
│   ├── css/               # Stylesheets
│   └── Assets/            # Images and media
├── init/                  # Database initialization
├── cloudinary.js          # Cloudinary configuration
├── app.js                 # Main application file
└── package.json           # Dependencies and scripts
```

---

## 🔧 API Endpoints

### **Public Routes**
- `GET /` – Home page with hero section
- `GET /listings` – View all complaints
- `GET /listings/:id` – View specific complaint details
- `GET /signup` – User registration form
- `GET /login` – User login form
- `GET /admin/login` – Admin login form

### **Authenticated Routes**
- `POST /listings` – Create new complaint
- `GET /listings/new` – New complaint form
- `GET /listings/:id/edit` – Edit complaint form
- `PUT /listings/:id` – Update complaint
- `DELETE /listings/:id` – Delete complaint
- `POST /listings/:id/report` – Endorse/unendorse complaint
- `POST /logout` – User logout

### **Admin Routes**
- `GET /admin/dashboard` – Admin dashboard
- `POST /listings/:id/status` – Update complaint status
- `POST /admin/login` – Admin authentication

### **API Endpoints**
- `GET /api/city-stats` – Get resolved complaints by city (JSON)

---

## 🎯 Key Features in Detail

### **Complaint Lifecycle**
1. **Submission** – User creates complaint with image and location
2. **Verification** – Admin reviews and verifies complaint
3. **Assignment** – Admin assigns to appropriate municipal authority
4. **Progress Tracking** – Status updates throughout resolution process
5. **Resolution** – Complaint marked as resolved or rejected

### **Security Features**
- Password hashing with salt
- Session-based authentication
- CSRF protection
- Input validation and sanitization
- File upload restrictions
- Role-based access control

### **Performance Optimizations**
- Image compression and resizing
- Database indexing
- Efficient queries with population
- CDN integration for static assets
- Responsive image loading

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Naresh Ashok Mali**
- GitHub: [@NARESH-ASHOK-MALI](https://github.com/NARESH-ASHOK-MALI)

---

## 🙏 Acknowledgments

- OpenStreetMap contributors for map data
- Bootstrap team for the UI framework
- Cloudinary for image hosting services
- The Node.js and Express.js communities
- All contributors and users of JanConnect

---

*JanConnect: Highlighting Issues, Inspiring Action.*