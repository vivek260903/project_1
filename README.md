# project_1 <br>
**Project Structure**
```
kaggle-clone/
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── User.js
│   │   └── Dataset.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── datasets.js
│   └── controllers/
│       ├── authController.js
│       └── datasetController.js
├── frontend/
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── DatasetList.js
│   │   │   └── DatasetDetail.js
│   │   └── pages/
│   │       ├── Home.js
│   │       ├── Login.js
│   │       └── Register.js
├── README.md
```  

---

### README.md
```
# Kaggle Clone

## Overview
A simplified replica of Kaggle: user auth, dataset browsing, and dataset detail pages.

## Technologies
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: React, React Router, Axios, Tailwind CSS

## Setup Steps

### 1. Backend
1. Navigate to `backend/`
2. Install dependencies: `npm install`
3. Create `.env` file with:
   ```
   MONGO_URI=<Your MongoDB URI>
   JWT_SECRET=<Your JWT Secret>
   ```
4. Run server: `npm run dev`

### 2. Frontend
1. Navigate to `frontend/`
2. Install dependencies: `npm install`
3. Run app: `npm start`

## Features Implemented
1. **User Authentication**: Registration & login with JWT.
2. **Dataset API**: CRUD operations for datasets.
3. **Dataset Browsing**: List and detail views.
4. **Responsive UI**: Styled with Tailwind.