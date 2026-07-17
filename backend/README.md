# Backend

Express API for the form handling app.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file with:
   ```env
   PORT=5000
   DB_URL=<your-mongodb-connection-string>
   ```
3. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

- `POST /createuser` — create a new form entry
- `GET /getuser` — read all form entries
- `PUT /updateuser/:id` — update a form entry by ID
- `DELETE /deleteuser/:id` — delete a form entry by ID

## Notes

- The app stores data in MongoDB database `formdb`.
- The collection name is `formdata`.
