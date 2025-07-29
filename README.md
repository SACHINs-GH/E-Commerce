<div align="center">

# 🛒 E-Commerce Application

### *A Modern Full-Stack Shopping Experience*

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-FF6B6B?style=for-the-badge&logoColor=white)](https://e-commerce-qftn.onrender.com)
[![GitHub Repo](https://img.shields.io/badge/📂_GitHub_Repo-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SACHINs-GH/E-Commerce)

---

*A comprehensive e-commerce platform built with modern web technologies, featuring user authentication, shopping cart functionality, product management, and review system.*

</div>

## ✨ Features

<table>
<tr>
<td width="50%">

### 🛍️ **Shopping Experience**
- 📱 Responsive product catalog
- 🛒 Shopping cart functionality  
- ❤️ Wishlist/Favorites management
- ⭐ Product reviews & ratings system
- 💬 User-generated product reviews

</td>
<td width="50%">

### 🔐 **User Management**
- 👤 Secure user authentication
- 📝 Easy registration process
- 🔒 Password encryption with bcrypt
- 🎯 Role-based access (Buyer/Seller)
- 🍪 Session-based security

</td>
</tr>
</table>

### 🏪 **Seller Features**
- ➕ Add new products with detailed descriptions
- ✏️ Edit existing product information
- 🗑️ Remove products from catalog
- 💰 Product pricing management

### 🛡️ **Security & Performance**
- 🍪 Secure session management
- ✅ Input validation with Joi
- 🚀 Optimized database queries
- 📱 Mobile-responsive design

## 🚀 Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Backend** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white) |
| **Database** | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat&logo=mongoose&logoColor=white) |
| **Authentication** | ![Passport](https://img.shields.io/badge/Passport-34E27A?style=flat&logo=passport&logoColor=white) ![bcrypt](https://img.shields.io/badge/bcrypt-003A70?style=flat&logoColor=white) |
| **Frontend** | ![EJS](https://img.shields.io/badge/EJS-B4CA65?style=flat&logoColor=white) ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) |
| **Validation** | ![Joi](https://img.shields.io/badge/Joi-000000?style=flat&logoColor=white) |
| **Tools** | ![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white) ![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white) ![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=flat&logo=nodemon&logoColor=white) |

</div>

## 📋 Prerequisites

<div align="center">

| Requirement | Version | Download |
|-------------|---------|----------|
| ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white) | v14+ | [Download](https://nodejs.org/) |
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) | Atlas Account | [Sign Up](https://www.mongodb.com/cloud/atlas) |
| ![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white) | Latest | Comes with Node.js |

</div>

## ⚙️ Installation & Setup

### 🔽 **Step 1: Clone the Repository**

```bash
# Clone this repository
git clone https://github.com/SACHINs-GH/E-Commerce.git

# Navigate to project directory
cd E-Commerce
```

### 📦 **Step 2: Install Dependencies**

```bash
# Install all required packages
npm install

# Or using yarn
yarn install
```

### 🔧 **Step 3: Environment Configuration**

1. **Copy the environment template:**
   ```bash
   cp .env.example .env
   ```

2. **Update your `.env` file with actual values:**
   ```env
   # 🗄️ Database Configuration
   MONGODB_PASSWORD=your_mongodb_atlas_password
   
   # 🌐 Server Configuration  
   PORT=3000
   NODE_ENV=development
   
   # 🔐 Security Configuration
   SESSION_SECRET=your_super_secret_session_key_here
   
   # 📱 Application Settings
   APP_NAME=E-Commerce App
   APP_VERSION=1.0.0
   ```

### 🚀 **Step 4: Start the Application**

<table>
<tr>
<td width="50%">

**🔧 Development Mode**
```bash
npm run dev
```
*Uses nodemon for auto-restart*

</td>
<td width="50%">

**🌐 Production Mode**
```bash
npm start
```
*Optimized for deployment*

</td>
</tr>
</table>

### 🎯 **Step 5: Access the Application**

<div align="center">

🌐 **Open your browser and visit:**

**[http://localhost:3000](http://localhost:3000)**

</div>

## 📁 Project Structure

<details>
<summary><strong>🔍 Click to expand folder structure</strong></summary>

```
🛒 E-Commerce/
├── 📂 controllers/           # Business logic controllers
│   ├── 🎮 productController.js      # Product CRUD operations
│   ├── 👤 userController.js         # User authentication & management
│   ├── 🛒 cartController.js         # Shopping cart functionality
│   ├── ❤️ favouritesController.js   # Wishlist management
│   └── ⭐ reviewController.js       # Product reviews
├── 📂 database/
│   └── 🔗 db.js                    # MongoDB connection setup
├── 📂 middlewares/
│   └── 🛡️ authentication.js        # Auth middleware & guards
├── 📂 models/               # Database schemas
│   ├── 📦 productModel.js          # Product data structure
│   ├── 👥 userModel.js             # User data structure
│   ├── 💬 reviewModel.js           # Review data structure
│   ├── ✅ validateProduct.js       # Product validation rules
│   ├── ✅ validateReview.js        # Review validation rules
│   └── ✅ validateUser.js          # User validation rules
├── 📂 public/
│   └── 🎨 style.css               # Custom styling
├── 📂 routes/               # API endpoints
│   ├── 🛍️ productRoutes.js         # Product-related routes
│   └── 👤 userRoutes.js            # User-related routes
├── 📂 views/                # EJS templates
│   ├── 📂 layout/
│   │   └── 🏗️ boilerplate.ejs      # Main layout template
│   ├── 📂 partials/
│   │   ├── ⚡ flash.ejs            # Flash messages
│   │   ├── 🦶 footer.ejs           # Footer component
│   │   └── 🧭 navbar.ejs           # Navigation bar
│   ├── 📂 products/
│   │   ├── ➕ addProduct.ejs       # Add product form
│   │   ├── 🛒 cart.ejs             # Shopping cart page
│   │   ├── ✏️ editProduct.ejs       # Edit product form
│   │   ├── ❤️ favourites.ejs       # Favorites page
│   │   ├── 🏠 home.ejs             # Product catalog
│   │   └── 👁️ showProduct.ejs      # Product details
│   ├── 📂 users/
│   │   ├── 🔐 login.ejs            # Login form
│   │   └── 📝 signup.ejs           # Registration form
│   └── ❌ error.ejs               # Error page template
├── 📄 .env.example         # Environment template
├── 🚫 .gitignore          # Git ignore rules
├── 📦 package.json        # Dependencies & scripts
├── 📚 README.md           # Documentation (you're here!)
└── 🚀 server.js           # Application entry point
```

</details>

## 🔗 API Endpoints

<details>
<summary><strong>📦 Product Management</strong></summary>

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| `GET` | `/p/products` | 📋 View all products | Public |
| `GET` | `/p/products/single/:id` | 👁️ View product details | 🔒 Login Required |
| `GET` | `/p/products/new` | ➕ Add product form | 🏪 Sellers Only |
| `POST` | `/p/products/add` | ✅ Create new product | 🏪 Sellers Only |
| `GET` | `/p/products/edit/:id` | ✏️ Edit product form | 🏪 Sellers Only |
| `PATCH` | `/p/products/update/:id` | 🔄 Update product | 🏪 Sellers Only |
| `DELETE` | `/p/products/delete/:id` | 🗑️ Delete product | 🏪 Sellers Only |

</details>

<details>
<summary><strong>👤 User Authentication</strong></summary>

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| `GET` | `/u/login` | 🔐 Login page | Public |
| `GET` | `/u/signup` | 📝 Signup page | Public |
| `POST` | `/u/authenticate` | ✅ Login user | Public |
| `POST` | `/u/signup/create` | 👥 Register new user | Public |
| `POST` | `/u/logout` | 🚪 Logout user | 🔒 Login Required |

</details>

<details>
<summary><strong>🛒 Cart & Favorites</strong></summary>

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| `GET` | `/p/cart` | 🛒 View cart items | 🔒 Login Required |
| `POST` | `/p/cart/add/:id` | ➕ Add to cart | 🔒 Login Required |
| `POST` | `/p/cart/remove/:id` | ➖ Remove from cart | 🔒 Login Required |
| `GET` | `/p/favourites` | ❤️ View favorites | 🔒 Login Required |
| `GET` | `/p/favourites/add/:id` | 💝 Add to favorites | 🔒 Login Required |
| `GET` | `/p/favourites/remove/:id` | 💔 Remove from favorites | 🔒 Login Required |

</details>

<details>
<summary><strong>⭐ Reviews & Ratings</strong></summary>

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| `POST` | `/p/reviews/add` | ✍️ Add product review | 🔒 Login Required |
| `DELETE` | `/p/reviews/delete/:id` | 🗑️ Delete review | 🔒 Login Required |

</details>

## Live Demo

<div align="center">

### 🌟 **Experience the Live Application**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Now-FF6B6B?style=for-the-badge&logoColor=white)](https://e-commerce-qftn.onrender.com)

*Click above to explore the fully functional e-commerce platform!*

</div>

---

## 🔧 Environment Variables

<div align="center">

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `MONGODB_PASSWORD` | 🔑 MongoDB Atlas password | ✅ Yes | - |
| `PORT` | 🌐 Server port number | ❌ No | `3000` |
| `NODE_ENV` | 🏗️ Environment mode | ❌ No | `development` |
| `SESSION_SECRET` | 🔐 Secret key for sessions | ✅ Yes | - |
| `APP_NAME` | 📱 Application name | ❌ No | `E-Commerce App` |
| `APP_VERSION` | 🔖 Application version | ❌ No | `1.0.0` |

</div>

## 🚀 Deployment

### 📋 **Production Checklist**

<table>
<tr>
<td width="50%">

**🔧 Configuration**
- Environment variables configured
- `NODE_ENV=production` set
- Database connection secured
- Session secret is strong and unique

</td>
<td width="50%">

**🛡️ Security & Monitoring**
- Error handling implemented
- Input validation with Joi
- Password encryption with bcrypt
- HTTPS ready (secure cookies)
- Git sensitive files ignored

</td>
</tr>
</table>

### 🌐 **Deploy to Render**

<details>
<summary><strong>📖 Step-by-step Render deployment</strong></summary>

1. **🔗 Connect Repository**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

2. **⚙️ Configure Service**
   ```
   Name: your-ecommerce-app
   Environment: Node
   Build Command: npm install
   Start Command: npm start
   ```

3. **🔐 Set Environment Variables**
   ```
   MONGODB_PASSWORD=your_mongodb_password
   SESSION_SECRET=your_session_secret
   NODE_ENV=production
   ```

4. **🚀 Deploy**
   - Click "Create Web Service"
   - Wait for automatic deployment

</details>

## 🤝 Contributing

<div align="center">

**We welcome contributions from the community! 🎉**

</div>

### 🔄 **How to Contribute**

1. **🍴 Fork the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/E-Commerce.git
   ```

2. **🌿 Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **💾 Commit your changes**
   ```bash
   git commit -m '✨ Add some amazing feature'
   ```

4. **📤 Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **🔀 Open a Pull Request**

### 🐛 **Bug Reports & Feature Requests**

Found a bug or have a feature idea? [Open an issue](https://github.com/SACHINs-GH/E-Commerce/issues) and let us know!

---

## 📞 Support & Contact

<div align="center">

### 🤔 **Need Help?**

[![GitHub Issues](https://img.shields.io/badge/GitHub_Issues-Ask_Question-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SACHINs-GH/E-Commerce/issues)

**For questions, support, or feedback:**
- 📧 Open an issue on GitHub
- 💬 Start a discussion in the repository
- ⭐ Star the repo if you found it helpful!

</div>

---

<div align="center">

### 🎯 **Built with ❤️ by [Sachin](https://github.com/SACHINs-GH)**

[![GitHub Profile](https://img.shields.io/badge/Follow_on_GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SACHINs-GH)

*Thank you for checking out this project! Don't forget to ⭐ star the repository if you found it useful.*

---

**Made in 2025 | E-Commerce Platform | Full-Stack Development**

</div>
