# Bike Store API

An Express.js application built with TypeScript, MongoDB, and Mongoose for managing a Bike Store. This API allows users to manage products (bikes) and orders, with features such as inventory management, schema validation, and revenue calculation.

---

## Features

1. **Product Management (CRUD)**:
   - Create, retrieve, update, and delete bike records.
   - Support for filtering bikes by `name`, `brand`, or `category`.

2. **Order Management**:
   - Place an order for bikes.
   - Automatically update inventory after an order.
   - Prevent orders if stock is insufficient.

3. **Revenue Calculation**:
   - Calculate total revenue using MongoDB's aggregation pipeline.

4. **Data Integrity**:
   - Mongoose schema validation ensures robust data management.
   - Enum-based category restriction (`Mountain`, `Road`, `Hybrid`, `Electric`).

5. **Error Handling**:
   - Descriptive error messages for validation, resource not found, and insufficient stock.
   - Stack trace included for debugging.

---

## Technologies Used

- **Backend**: Express.js with TypeScript
- **Database**: MongoDB with Mongoose
- **Validation**: Mongoose schema
- **Environment Management**: `dotenv`

---

## API Endpoints

### **Products**
1. **Create a Bike**: `POST /api/products`
2. **Get All Bikes**: `GET /api/products?searchTerm=<filter>`
3. **Get a Specific Bike**: `GET /api/products/:productId`
4. **Update a Bike**: `PUT /api/products/:productId`
5. **Delete a Bike**: `DELETE /api/products/:productId`

### **Orders**
1. **Place an Order**: `POST /api/orders`
2. **Calculate Revenue**: `GET /api/orders/revenue`

---

## Installation and Setup

### Prerequisites
- Node.js (v18 or later)
- MongoDB installed and running locally or cloud access (e.g., MongoDB Atlas)

### Steps to Set Up Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<your-username>/bike-store-api.git
   cd bike-store-api


## Install Dependencies:

bash
Copy code
npm install
Set Up Environment Variables: Create a .env file in the root directory and configure the following variables:

bash
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/bikeStore
Run the Application:

bash
Copy code
npm run dev
Test the API: Use tools like Postman or curl to interact with the API at http://localhost:5000/api.