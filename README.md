# Node.js GraphQL Application

This is a Node.js application that implements a GraphQL API to manage various resources such as users, products, orders,
chats, and carts. The application provides the following functionalities through **Queries** and **Mutations**.

---

## Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Features](#features)
    - [Queries](#queries)
    - [Mutations](#mutations)
- [Database Management](#database-management)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ghercadarius/MenOfGeniusNode2025.git
   cd MenOfGeniusNode2025
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create db.sqlite file:
    ```bash
    bash refresh.sh
    ```

4. Start the application:
   ```bash
   npm run start
   ```

The server will run on `http://localhost:3001` by default.

---

## Getting Started

1. After starting the application, navigate to `http://localhost:3001/graphql` to access the GraphQL Playground.
2. Use the **Queries** and **Mutations** documented below to interact with the API.

---

## Features

### Queries

The application provides the following queries:

#### User Queries

- **`user`**: Fetch a single user by ID.
- **`users`**: Retrieve a list of all users.
- **`me`**: Get the currently logged-in user's details.

#### Product Queries

- **`product`**: Fetch a single product by ID.
- **`products`**: Retrieve a list of all products.
- **`myProducts`**: Get the products created by the logged-in user.

#### Cart Queries

- **`cart`**: Retrieve the current user's cart details.

#### Chat Queries

- **`chat`**: Fetch a single chat by ID.
- **`chats`**: Retrieve a list of all chats.
- **`chatsUser`**: Get chats related to the logged-in user.
- **`messagesChat`**: Retrieve messages for a specific chat.

#### Order Queries

- **`offersReceived`**: Retrieve offers received by the logged-in user.
- **`myOrders`**: Get the orders placed by the logged-in user.

---

### Mutations

The application provides the following mutations:

#### User Mutations

- **`createUser`**: Create a new user.
- **`updateUser`**: Update an existing user's details.
- **`deleteUser`**: Delete a user by ID.

#### Auth Mutations

- **`login`**: Authenticate a user and generate a token.

#### Product Mutations

- **`uploadProduct`**: Add a new product.

#### Cart Mutations

- **`addProductToCart`**: Add a product to the user's cart.
- **`removeProductFromCart`**: Remove a specific product from the cart.
- **`removeAllProductsFromCart`**: Clear all products from the cart.

#### Chat Mutations

- **`createChat`**: Create a new chat.
- **`createMessage`**: Add a message to a chat.

#### Order Mutations

- **`createOrder`**: Create a new order.
- **`confirmOrder`**: Confirm an existing order.
- **`respondToOffer`**: Respond to an order offer.

---

## Database Management

This project uses a SQLite database stored as a file (`db.sqlite`). The database is managed using Sequelize, and you can
reset and seed the database using the following script:

1. Create a shell script (e.g., `refresh.sh`) with the following content:
   ```bash
   #!/bin/bash
   rm -f ./db.sqlite
   npx sequelize db:migrate
   npx sequelize db:seed:all
   ```

2. Make the script executable:
   ```bash
   chmod +x reset-db.sh
   ```

3. Run the script to reset and seed the database:
   ```bash
   bash refresh.sh
   ```

---

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **GraphQL**: Query language for the API.
- **SQLite**: Database for storing data.
- **Sequelize**: ORM for managing database interactions.
- **JWT**: Authentication using JSON Web Tokens.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Open a pull request.

---

## Contributors

- **Nicoleta Caramaliu** ([GitHub Profile](https://github.com/NicoletaCaramaliu))
- **Diana Manolache** ([GitHub Profile](https://github.com/dianamanolache))
- **Darius Gherca** ([GitHub Profile](https://github.com/ghercadarius))
- **Octavian Macelaru** ([GitHub Profile](https://github.com/omacelaru))

If you'd like to be added as a contributor, feel free to open a pull request!


