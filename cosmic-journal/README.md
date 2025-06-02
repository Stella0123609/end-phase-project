# Cosmic Journal

Cosmic Journal is a full-stack journaling application that allows users to log their thoughts, generate star maps, and authenticate using email/password or Google. The backend is built with FastAPI and SQLAlchemy, and the frontend uses React with Firebase authentication.

---

## Features

- User authentication (signup, login, Google OAuth)
- Journal entry creation and management
- Star map generation
- Profile management
- Responsive UI

---

## Project Structure

```
cosmic-journal/
├── cosmic-journal-backend/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── models/
│   │   ├── services/
│   │   └── ...
│   ├── alembic/
│   ├── main.py
│   ├── requirements.txt
│   └── ...
├── cosmic-journal-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── App.jsx
│   │   └── ...
│   ├── .env
│   ├── vite.config.js
│   └── ...
```

---

## Getting Started

### Prerequisites

- Python 3.8+
- Node.js 16+
- npm or yarn
- Docker (optional)

---

### Backend Setup

1. **Install dependencies:**
    ```sh
    cd cosmic-journal-backend
    python -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    ```

2. **Configure the database:**
    - Edit `alembic.ini` and set your `sqlalchemy.url` to your database connection string.

3. **Run migrations:**
    ```sh
    alembic upgrade head
    ```

4. **Start the backend server:**
    ```sh
    uvicorn main:app --reload
    ```

---

### Frontend Setup

1. **Install dependencies:**
    ```sh
    cd cosmic-journal-frontend
    npm install
    ```

2. **Configure environment variables:**
    - Edit `.env` in the frontend root with your Firebase and API settings.

3. **Start the frontend:**
    ```sh
    npm run dev
    ```

---

## API Endpoints

- `POST /api/auth/signup` — Register a new user
- `POST /api/auth/token` — Login with email/password
- `POST /api/auth/google-login` — Login with Google
- `GET /api/journal/all` — Get all journal entries
- `POST /api/journal` — Create a journal entry
- `GET /api/starmap/generate` — Generate a star map
- `GET /api/geo/city` — (If implemented) Get geo data for a city

---

## Troubleshooting

- **Circular import error:**  
  Ensure you do not import a class from the same file it is defined in.
- **404 on endpoints:**  
  Make sure routers are included in `main.py` and use the correct `/api` prefix.
- **Frontend import errors:**  
  Double-check import paths and file locations.

---

