# E-commerce Application

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/ecommerce-app.git
    cd ecommerce-app
    ```

2. Install dependencies for both backend and frontend:
    ```bash
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

3. Start the backend server:
    ```bash
    cd backend
    npm start
    ```

4. Start the frontend server:
    ```bash
    cd frontend
    npm start
    ```

5. Open `http://localhost:3000` in your browser.

## Application Architecture

- **Backend:** Express server connected to MongoDB using Mongoose.
- **Frontend:** React application with components for displaying and managing products.
- **Deployment:** Hosted on Heroku.

## Testing

Run tests with:
```bash
cd backend
npm test

