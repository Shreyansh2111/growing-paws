# GROWING PAWS : Pet Breeding and Adoption Website

Welcome to the Growing Paws! This project is designed to facilitate pet breeding and adoption services. Built with modern web technologies, it provides a seamless user experience for breeders and adopters alike.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** Secure login and registration for users.
- **Pet Listings:** Create, read, update, and delete (CRUD) operations for pet listings.
- **Adoption Requests:** Users can send and manage adoption requests.
- **Breeder Profiles:** Detailed profiles for breeders including their available pets.
- **Search Functionality:** Easily search for pets by breed, age, location, etc.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend:**
  - React.js
  - HTML5
  - CSS3
  - JavaScript
  - Scss

- **Backend:**
  - Node.js
  - Express.js

- **Database:**
  - MongoDB

- **Other Tools and Libraries:**
  - Mongoose (for MongoDB object modeling)
  - JWT (for authentication)
  - Bcrypt (for password hashing)
  - Axios (for making HTTP requests)

## Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/souravrjpt/growing-paws.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd growing-paws
   ```

3. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

4. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

5. **Create a `.env` file in the `backend` directory and add the following:**
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   EMAIL_USER=your_email_address
   EMAIL_PASS=your_email_password
   ```

## Usage

1. **Start the backend server:**
   ```bash
   cd backend
   npm start
   ```

2. **Start the frontend development server:**
   ```bash
   cd ../frontend
   npm start
   ```

3. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## API Endpoints

Here are some of the key API endpoints used in the project:

- **User Authentication:**
  - `POST /api/users/register` - Register a new user
  - `POST /api/users/login` - Login a user
  - `GET /api/users/profile` - Get user profile (protected)

- **Pet Listings:**
  - `GET /api/pets` - Get all pets
  - `POST /api/pets` - Create a new pet (protected)
  - `GET /api/pets/:id` - Get a single pet by ID
  - `PUT /api/pets/:id` - Update a pet by ID (protected)
  - `DELETE /api/pets/:id` - Delete a pet by ID (protected)

- **Adoption Requests:**
  - `POST /api/requests` - Create a new adoption request (protected)
  - `GET /api/requests` - Get all adoption requests (protected)

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

Thank you for visiting the Pet Breeding and Adoption Website repository. If you have any questions or suggestions, feel free to open an issue or contact us directly. Happy coding!
