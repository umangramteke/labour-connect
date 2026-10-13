# Labour Connect — Skilled Worker & Service Platform

> **Web Technology Practical Assignment (Assignment 5)**  
> **Topic:** Server-Side Validation using ExpressJS and RESTful API Architecture.

---

## 1. Project Title and Introduction

**Labour Connect** is a responsive web-based platform built to connect skilled tradespeople (electricians, plumbers, carpenters, mechanics, painters, and appliance-repair technicians) with local households, shops, and contracting businesses.

The application bridges the informal labor economy with modern web technology, providing two core services:
1. **Employment Connect:** Employers and contractors post jobs; skilled workers view verified openings and apply directly.
2. **On-Demand Service Connect:** Customers can book emergency or scheduled home services with local verified workers.

The central technical objective of this project is to demonstrate **robust server-side validation, ExpressJS REST API routing, HTTP request/response lifecycles, and decoupled frontend-backend communication using the Fetch API**.

---

## 2. Problem Statement

Many beginner web applications rely solely on client-side HTML5 attributes (such as `required`, `pattern`, or `min`) or client-side JavaScript for form validation. However, client-side validation can easily be bypassed by disabling JavaScript, modifying DOM elements using browser Developer Tools, or sending raw HTTP requests via cURL, Postman, or PowerShell.

**Assignment Statement:**  
> *Design, develop and deploy a web application to demonstrate server-side validation using ExpressJS.*

Labour Connect proves that server-side validation acts as an independent, non-negotiable security layer that validates, cleanses, and verifies all incoming payloads before processing or storing them in memory.

---

## 3. Project Objectives

- **Demonstrate Server-Side Validation:** Implement strict, manual validation rules inside ExpressJS route handlers using JavaScript string operations, regular expressions, and logical guards without relying on third-party validation libraries.
- **Implement RESTful Architecture:** Build well-structured HTTP endpoints returning standard HTTP status codes (`200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`, and `500 Internal Server Error`).
- **Decouple Frontend and Backend:** Develop a responsive ReactJS + Bootstrap 5 frontend communicating asynchronously with the Node.js/Express backend via JSON and the Fetch API.
- **Provide Real-Time User Feedback:** Display actual server responses (success messages in green, error alerts in red), while preserving user input upon validation errors so users can make corrections.
- **Provide Examiner Demonstration Tools:** Include a live in-memory inspection table and an interactive Validation Test Bench to demonstrate edge cases during college practical examinations and viva.

---

## 4. Features and Modules

### A. Home Page
- **Branding & Hero Banner:** Displays the Labour Connect brand with the tagline *"Connecting Skills with Opportunities"* and live Express server connectivity indicator.
- **Module Highlights:** Clear navigation cards for **Employment Connect** and **On-Demand Service Connect**.
- **Live Previews:** Displays sample skilled workers and active job openings with direct action buttons.

### B. Find Workers
- **Worker Directory:** Browse profiles displaying full name, trade, experience (years), locality, daily wage (₹), and availability status.
- **Interactive Filtering:** Filter workers dynamically by trade/skill or availability status (Available / Busy / Unavailable), with real-time text search.
- **Direct Service Booking:** Click "Book Service Provider" to automatically populate the service request form with the worker's trade and details.

### C. Find Jobs (Employment Connect)
- **Job Listings:** Clean cards showing job title, employer/contractor, trade required, location, experience requirements, offered salary, and employment type (Full-time / Part-time / Contract).
- **Application Form:** Apply directly to any job. Form automatically links to the selected job ID.
- **Server Feedback:** Rejects invalid mobile numbers, missing fields, or invalid job IDs with HTTP 400.

### D. Request a Service (On-Demand Service Connect)
- **Booking Form:** Collects customer name, 10-digit mobile number, service category, location, preferred date, and problem description.
- **Strict Server Checks:** Rejects dates in the past (using server date comparison), problem descriptions under 10 characters, and unauthorized categories.

### E. Worker Registration
- **Onboarding Form:** New workers register their profile with name, mobile, skill, experience, operating area, expected payment, and availability.
- **Immediate Session Persistence:** Once validated by the server, the new worker is added to the in-memory array and instantly appears in the worker directory.

### F. Live Server Records & Examiner Test Bench
- **Live Record Inspector:** Tabular view of all service requests and job applications stored in memory during the current session (`GET /api/service-requests` and `GET /api/applications`).
- **Interactive Test Bench:** One-click test runner specifically designed for college viva demonstrations. Sends valid and invalid requests and inspects the exact HTTP status code, request payload, and server response JSON.

---

## 5. Technology Stack

As per project guidelines, only essential, beginner-friendly technologies are used:

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend Framework** | ReactJS (v19, Vite) | Declarative UI, state management, component hierarchy |
| **Styling & Icons** | Bootstrap 5 & Bootstrap Icons | Clean, responsive grid layout, cards, alerts, modern typography |
| **Backend Runtime** | Node.js (v24 LTS) | JavaScript server runtime |
| **Backend Framework** | ExpressJS (v4) | RESTful API routing, middleware, request handling, server validation |
| **Middleware** | `cors`, `express.json()`, `express.urlencoded()` | Cross-origin requests & JSON body parsing |
| **Communication** | Native JavaScript Fetch API | Asynchronous HTTP requests and JSON data exchange |
| **Data Storage** | In-Memory JavaScript Arrays | Lightweight session data storage without external DB setup |
| **Tools** | Visual Studio Code, Web Browser, PowerShell | Development and testing environment |

> **Note:** Advanced ORMs, databases (MongoDB/MySQL), TypeScript, Tailwind CSS, or third-party validation libraries (Joi, Zod) were intentionally excluded to maintain simplicity and meet beginner college practical requirements.

---

## 6. Project Folder Structure

```
labour-connect/
├── client/                               # ReactJS Frontend Application
│   ├── public/                           # Static assets
│   ├── src/
│   │   ├── components/                   # Reusable React components
│   │   │   ├── Navbar.jsx                # Responsive navigation with live API health indicator
│   │   │   ├── WorkerCard.jsx            # Card showing worker profile, badges, and action
│   │   │   └── JobCard.jsx               # Card showing job opening and apply trigger
│   │   ├── pages/                        # Application views
│   │   │   ├── HomePage.jsx              # Landing page, hero, modules, and previews
│   │   │   ├── FindWorkersPage.jsx       # Directory of workers with skill/status filters
│   │   │   ├── FindJobsPage.jsx          # Job listings with application form
│   │   │   ├── RequestServicePage.jsx    # Doorstep service booking form
│   │   │   ├── RegisterWorkerPage.jsx    # Worker onboarding form
│   │   │   └── RecordsPage.jsx           # Live session data & Examiner Test Bench
│   │   ├── App.jsx                       # Main application state and page controller
│   │   ├── index.css                     # Custom design system tokens & styles
│   │   └── main.jsx                      # React DOM root entry point
│   ├── index.html                        # HTML template with Google Fonts and Bootstrap Icons
│   ├── vite.config.js                    # Vite configuration with API reverse proxy to port 5000
│   └── package.json                      # Frontend dependencies (React, Bootstrap)
├── server/                               # ExpressJS Backend
│   ├── server.js                         # Core server: API routes, in-memory arrays & validation logic
│   └── package.json                      # Backend dependencies (Express, CORS)
└── README.md                             # Complete project documentation
```

---

## 7. Instructions to Install Dependencies

Open a terminal (PowerShell or Command Prompt) in the project root directory:

### Step 1: Install Backend Dependencies
```powershell
cd server
npm install
cd ..
```

### Step 2: Install Frontend Dependencies
```powershell
cd client
npm install
cd ..
```

---

## 8. Commands to Run the Application on Windows

Open **two separate terminal windows** (or split terminals in VS Code).

### Terminal 1: Start ExpressJS Server (Backend)
```powershell
cd "c:\Users\ramte\OneDrive\Desktop\wt assignment\assignmnet 5\server"
node server.js
```
*The server will start on `http://localhost:5000`.*

### Terminal 2: Start React Frontend (Vite)
```powershell
cd "c:\Users\ramte\OneDrive\Desktop\wt assignment\assignmnet 5\client"
npm run dev
```
*The React client will launch on `http://localhost:5173` (or `http://127.0.0.1:5173`).*

Open your browser and navigate to **`http://localhost:5173`**.

---

## 9. API Route Documentation

All API routes are implemented in `server/server.js` and communicate using JSON.

### 1. `GET /`
- **Description:** Health check route confirming that the API is active.
- **Response:** HTTP `200 OK`
```json
{
  "message": "Labour Connect API is running successfully!",
  "status": "active",
  "timestamp": "2026-10-13T10:19:15.981Z"
}
```

### 2. `GET /api/workers`
- **Description:** Retrieves all registered workers (sample workers + newly registered workers).
- **Response:** HTTP `200 OK`
```json
{
  "success": true,
  "count": 6,
  "data": [ ... ]
}
```

### 3. `POST /api/workers`
- **Description:** Registers a new worker after validating all fields on the server.
- **Request Body:**
```json
{
  "name": "Anand Deshmukh",
  "mobile": "9811223344",
  "skill": "Painter",
  "experience": 4,
  "location": "Civil Lines, Nagpur",
  "payment": 550,
  "availability": "Available"
}
```
- **Responses:**
  - Valid: HTTP `201 Created` with `{ "success": true, "message": "Worker registered successfully!", "data": { ... } }`
  - Invalid: HTTP `400 Bad Request` with `{ "success": false, "error": "<validation message>" }`

### 4. `GET /api/jobs`
- **Description:** Retrieves the list of available jobs.
- **Response:** HTTP `200 OK` with job listings array.

### 5. `POST /api/applications`
- **Description:** Accepts and validates a job application.
- **Request Body:**
```json
{
  "applicantName": "Rohit Joshi",
  "mobile": "9876543210",
  "jobId": "job-101",
  "applicantSkill": "Electrician"
}
```
- **Responses:**
  - Valid: HTTP `201 Created` with confirmation message.
  - Invalid: HTTP `400 Bad Request` with reason for rejection.

### 6. `POST /api/service-requests`
- **Description:** Accepts and validates a customer service booking.
- **Request Body:**
```json
{
  "customerName": "Sunita Patil",
  "mobile": "9822334455",
  "category": "Plumber",
  "location": "Ramdaspeth, Nagpur",
  "preferredDate": "2026-10-15",
  "description": "Water pipe leaking under kitchen counter."
}
```
- **Responses:**
  - Valid: HTTP `201 Created` with booking confirmation.
  - Invalid: HTTP `400 Bad Request` with error message.

### 7. `GET /api/service-requests`
- **Description:** Returns all service requests submitted during the active server session.
- **Response:** HTTP `200 OK` with request records.

### 8. `GET /api/applications`
- **Description:** Returns all job applications submitted during the active server session.
- **Response:** HTTP `200 OK` with application records.

---

## 10. Server-Side Validation Rules

Server-side validation is implemented directly inside each `POST` route in `server/server.js` using native JavaScript logic:

### Worker Registration (`POST /api/workers`)
1. **Full Name:** Required, must be a string, and after trimming must contain at least 2 characters (`name.trim().length >= 2`).
2. **Mobile Number:** Required, must contain **exactly 10 numeric digits** matching `/^[0-9]{10}$/`.
3. **Skill / Profession:** Required, non-empty string.
4. **Experience:** Required, must be a valid number, and must be $\ge 0$ (`!isNaN(exp) && exp >= 0`).
5. **Location:** Required, non-empty string.
6. **Expected Payment:** Required, must be a valid number, and must be $> 0$ (`!isNaN(pay) && pay > 0`).
7. **Availability:** Required, must strictly match one of: `['Available', 'Busy', 'Unavailable']`.

### Service Request (`POST /api/service-requests`)
1. **Customer Name:** Required, non-empty string.
2. **Mobile Number:** Required, exactly 10 numeric digits matching `/^[0-9]{10}$/`.
3. **Service Category:** Must belong to `['Plumber', 'Electrician', 'Carpenter', 'Mechanic', 'Painter', 'Appliance Repair']`.
4. **Location:** Required, non-empty string.
5. **Preferred Date:** Must be a valid date format and **must not be in the past**, calculated by comparing against the server's current date set to midnight:
   ```javascript
   const today = new Date();
   today.setHours(0, 0, 0, 0);
   const reqDate = new Date(preferredDate + 'T00:00:00');
   if (reqDate < today) {
     return res.status(400).json({ success: false, error: "Preferred date cannot be in the past." });
   }
   ```
6. **Problem Description:** Required, must contain **at least 10 characters** (`description.trim().length >= 10`).

### Job Application (`POST /api/applications`)
1. **Applicant Name:** Required, non-empty string.
2. **Mobile Number:** Required, exactly 10 digits matching `/^[0-9]{10}$/`.
3. **Job ID:** Required, and must match an existing job ID found in the server's `jobs` array (`jobs.find(j => j.id === jobId)`).
4. **Applicant Skill:** Required, non-empty string.

---

## 11. Test Cases & Verification Results

All test cases were verified using automated PowerShell scripts and live HTTP submissions:

### Module 1: Worker Registration

| # | Test Scenario | Input Data | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|
| 1 | Valid Worker Registration | Full fields valid | HTTP 201 Created | HTTP 201 Created | **PASS** |
| 2 | Empty Name | `name: ""` | HTTP 400 Bad Request | HTTP 400 Bad Request | **PASS** |
| 3 | Invalid Mobile | `mobile: "12345"` | HTTP 400 Bad Request | HTTP 400 Bad Request | **PASS** |
| 4 | Negative Experience | `experience: -2` | HTTP 400 Bad Request | HTTP 400 Bad Request | **PASS** |
| 5 | Invalid Payment | `payment: 0` | HTTP 400 Bad Request | HTTP 400 Bad Request | **PASS** |
| 6 | Missing Location | `location: "   "` | HTTP 400 Bad Request | HTTP 400 Bad Request | **PASS** |

### Module 2: Service Request

| # | Test Scenario | Input Data | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|
| 1 | Valid Service Request | All fields valid, future date | HTTP 201 Created | HTTP 201 Created | **PASS** |
| 2 | Invalid Mobile | `mobile: "98765"` (< 10 digits) | HTTP 400 Bad Request | HTTP 400 Bad Request | **PASS** |
| 3 | Missing Category | `category: ""` | HTTP 400 Bad Request | HTTP 400 Bad Request | **PASS** |
| 4 | Past Service Date | `preferredDate: "2020-01-01"` | HTTP 400 Bad Request | HTTP 400 Bad Request | **PASS** |
| 5 | Short Description | `description: "Leak"` (< 10 chars) | HTTP 400 Bad Request | HTTP 400 Bad Request | **PASS** |

### Module 3: Job Application

| # | Test Scenario | Input Data | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|
| 1 | Valid Job Application | Valid name, mobile, `job-101`, skill | HTTP 201 Created | HTTP 201 Created | **PASS** |
| 2 | Missing Applicant Name | `applicantName: ""` | HTTP 400 Bad Request | HTTP 400 Bad Request | **PASS** |
| 3 | Non-numeric Mobile | `mobile: "abc1234"` | HTTP 400 Bad Request | HTTP 400 Bad Request | **PASS** |
| 4 | Unknown Job ID | `jobId: "job-9999"` (nonexistent) | HTTP 400 Bad Request | HTTP 400 Bad Request | **PASS** |

---

## 12. Limitations

1. **In-Memory Data Storage:** Records are stored in JavaScript arrays in `server.js`. When the Node.js server process restarts, newly added workers, applications, and service requests will be reset to initial defaults.
2. **Single Server Process:** Since state is stored in memory, data is not shared across multi-node clusters or serverless instances.
3. **No File Uploads:** Worker identity proof and photos are simulated using generated initials and text data to keep the project focused on the core validation learning outcome.
4. **No Authentication:** Access control and user login sessions are intentionally omitted as specified in the assignment constraints.

---

## 13. How This Project Demonstrates Server-Side Validation

1. **Independent Verification:** Even if a malicious user bypasses the browser form using tools like cURL or Postman, the Express server independently verifies every single field and immediately returns HTTP 400 with a descriptive error.
2. **Proper HTTP Status Codes:**
   - Valid submissions yield **HTTP 201 Created**.
   - Failed validation yields **HTTP 400 Bad Request**.
   - Read requests yield **HTTP 200 OK**.
   - Nonexistent routes yield **HTTP 404 Not Found**.
3. **Clean Decoupling:** The React frontend acts solely as an interactive presentation client. It reads the server's status code and error message directly from the response body and renders appropriate Bootstrap alert badges without synthesizing fake responses.
4. **Preservation of State:** When validation fails, entered values are preserved in the form state, giving users immediate clarity on what needs correction.
5. **Interactive Viva Test Bench:** College examiners can directly test edge cases with one click from the "Live Server Records" tab to verify that the Express server actively guards the application.
