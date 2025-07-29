# E-Commerce Application

A full-stack e-commerce application built with Node.js, Express.js, MongoDB, and EJS templating engine.

## Features

- 🛍️ Product browsing and management
- 👤 User authentication (signup/login/logout)
- 🛒 Shopping cart functionality
- ❤️ Favorites/Wishlist
- ⭐ Product reviews and ratings
- 🔒 Secure user sessions
- 📱 Responsive design

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: Passport.js with Local Strategy
- **Templating**: EJS with EJS-Mate
- **Security**: Helmet.js, bcrypt
- **Validation**: Joi
- **Session Management**: Express-session

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SACHINs-GH/E-Commerce.git
   cd E-Commerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Copy `.env.example` to `.env`
   - Update the environment variables with your actual values:
   ```env
   MONGODB_PASSWORD=your_mongodb_password
   PORT=6969
   NODE_ENV=development
   SESSION_SECRET=your_super_secret_session_key
   APP_NAME=E-Commerce App
   APP_VERSION=1.0.0
   ```

4. **Start the application**
   
   **Development mode:**
   ```bash
   npm run dev
   ```
   
   **Production mode:**
   ```bash
   npm start
   ```

5. **Access the application**
   Open your browser and navigate to `http://localhost:6969`

## Project Structure

```
E-Commerce/
├── controllers/
│   ├── productController.js
│   ├── userController.js
│   ├── cartController.js
│   ├── favouritesController.js
│   └── reviewController.js
├── database/
│   └── db.js
├── middlewares/
│   └── authentication.js
├── models/
│   ├── productModel.js
│   ├── userModel.js
│   ├── reviewModel.js
│   └── validation files
├── public/
│   └── style.css
├── routes/
│   ├── productRoutes.js
│   └── userRoutes.js
├── views/
│   ├── layout/
│   ├── partials/
│   ├── products/
│   └── users/
├── .env.example
├── .gitignore
├── package.json
└── server.js
```

## API Endpoints

### Products
- `GET /p/products` - View all products
- `GET /p/products/single/:id` - View product details
- `GET /p/products/new` - Add product form (sellers only)
- `POST /p/products/add` - Create new product (sellers only)
- `GET /p/products/edit/:id` - Edit product form (sellers only)
- `PATCH /p/products/update/:id` - Update product (sellers only)
- `DELETE /p/products/delete/:id` - Delete product (sellers only)

### User Authentication
- `GET /u/login` - Login page
- `GET /u/signup` - Signup page
- `POST /u/authenticate` - Login user
- `POST /u/signup/create` - Register new user
- `POST /u/logout` - Logout user

### Cart & Favorites
- `GET /p/cart` - View cart
- `POST /p/cart/add/:id` - Add to cart
- `POST /p/cart/remove/:id` - Remove from cart
- `GET /p/favourites` - View favorites
- `GET /p/favourites/add/:id` - Add to favorites
- `GET /p/favourites/remove/:id` - Remove from favorites

