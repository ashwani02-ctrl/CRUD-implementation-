# formhandle

Full-stack form management project with separate frontend and backend apps.

## Overview

- `frontend/` contains the React + Vite user interface.
- `backend/` contains the Express API for MongoDB CRUD operations.

## Setup

### Backend

1. Open `backend/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in `backend/` with:
   ```env
   PORT=5000
   DB_URL=<your-mongodb-connection-string>
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend

1. Open `frontend/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite dev server:
   ```bash
   npm run dev
   ```

## Usage

- Backend API runs on the port set in `backend/.env`.
- Frontend runs on Vite default port (`http://localhost:5173`).

## Project structure

- `backend/` - Express, MongoDB CRUD routes
- `frontend/` - React + Vite UI

## Notes

- Keep documentation for each app in its own folder.
- Use the root `README.md` for project-wide instructions.
