
# 🌟 Sparkle Backend API

Welcome to the **Sparkle** application's backend API!  
This service manages AI safety incident logs.

---

## 🚀 Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose ODM)

---

# Project Structure

```
Sparkle/
└── Backend/
    ├── index.js
    ├── .env
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    ├── routes/
    │   └── incident.routes.js
    ├── controllers/
    │   └── incident.controllers.js
    └── models/
        └── incident.Model.js
```

---

## 🛠️ Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/goutamdz/sparkle.git
   cd sparkle/backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment Variables**
   Create a `.env` file in the root folder:

   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   MONGO_DB=sparkle
   PORT=5000
   ```

4. **Start the Server**
   ```bash
   npm run dev    # For development (with nodemon)
   npm start      # For production
   ```

---

## 🛤️ Base URL

```
http://localhost:5000/api/incident
```

---

# 📚 API Routing Overview

| Method | Route | Description |
|:------:|:-----:|:------------|
| GET    | `/getAllIncidents` | Fetch all incidents |
| GET    | `/getIncidentById/:id` | Fetch a single incident by ID |
| POST   | `/createIncident` | Create a new incident |
| DELETE | `/deleteIncident/:id` | Delete an incident by ID |

---

## 🔥 Example Responses

### 1. **Fetch All Incidents**
**Route:** `GET /getAllIncidents`  
```json
[
  {
    "_id": "644a5f2e8f1b2c0012345678",
    "title": "Incident 1",
    "description": "Description of incident 1",
    "status": "open",
    "severity": "high",
    "createdAt": "2025-04-27T10:00:00.000Z",
    "updatedAt": "2025-04-27T10:00:00.000Z"
  }
]
```

---

### 2. **Fetch Incident By ID**
**Route:** `GET /getIncidentById/:id`  
```json
{
  "_id": "644a5f2e8f1b2c0012345678",
  "title": "Incident 1",
  "description": "Description of incident 1",
  "status": "open",
  "severity": "high",
  "createdAt": "2025-04-27T10:00:00.000Z",
  "updatedAt": "2025-04-27T10:00:00.000Z"
}
```
**If ID is invalid:**
```json
{
  "message": "Invalid incident ID"
}
```

---

### 3. **Create New Incident**
**Route:** `POST /createIncident`  

**Data to send in POST request:**

```json
{
  "title": "New Incident",
  "description": "Details about the new incident",
  "severity": "medium"
}
```

**Example Response:**
```json
{
  "_id": "644a5f2e8f1b2c0012345678",
  "title": "New Incident",
  "description": "Details about the new incident",
  "status": "open",
  "severity": "medium",
  "createdAt": "2025-04-27T10:00:00.000Z",
  "updatedAt": "2025-04-27T10:00:00.000Z"
}
```

---

### 4. **Delete Incident**
**Route:** `DELETE /deleteIncident/:id`  
**On Success:**
```json
{
  "message": "Incident deleted successfully"
}
```
**If Incident not found:**
```json
{
  "message": "Incident not found"
}
```

---

## ⚙️ Notes
- Ensure your **MongoDB server** is running.
- Use valid **MongoDB ObjectId** when using `:id` routes.
- Test using tools like **Postman**, **Insomnia**, etc.

---

## 📄 Environment Variables (`.env`)

| Key | Description | Example |
|:----|:------------|:--------|
| `MONGO_URI` | MongoDB Connection String | `mongodb://localhost:27017` |
| `MONGO_DB` | Database Name | `sparkle` |
| `PORT` | Server Port | `5000` |

---

## 🖥️ Running the Server

```bash
npm install
npm run dev
```

Server runs at:
```
http://localhost:5000/
```

---

## 🎯 Future Improvements
- Add pagination for `/getAllIncidents`
- Add authentication & authorization

---
