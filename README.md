
  # E-commerce Back End


   ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
 

  ## Description

Driven by a passion for simplifying backend development, I created this project to offer a user-friendly Express.js API seamlessly integrated with MySQL through Sequelize. The aim is to redefine the developer experience by focusing on smoother setups, adaptable configurations, and optimized data operations. This project tackles the complexities of backend development, automating configurations and refining data operations to empower developers with an intuitive and efficient development journey. The result is a more accessible and enjoyable process, seamlessly connecting Express.js with MySQL for a seamless and efficient backend solution.
 

  ## Installation
  To install this project, follow these steps:

1. **Clone the Repository:**
   ```
   git clone git@github.com:EricRisher/ecommerce-backend.git
   ```

2. **Install Dependencies:**
   ```
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the project root and add your MySQL database name, username, and password:
   ```
   DB_NAME=your_database_name
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   ```

4. **Run Seed Command:**
   ```
   npm run seed
   ```

6. **Start the Application:**
   ```
   npm start
   ```

7. **Access the API:**
   The API will be accessible at `localhost:3001`.

8. **Explore Routes in Postman:**
   Test the API routes using Postman, ensuring that GET, POST, PUT, and DELETE operations function as expected for categories, products, and tags.

These steps will set up the project, initialize the database, and start the application. Adjust configurations as needed for your environment.

  ## Usage
Find a complete video walkthrough [here!](https://drive.google.com/file/d/1YtVS05obm7KY2QoKisPH8Zx2n_MvRq9M/view?usp=sharing)
  
### 1. **Get Categories, Products, and Tags:**
   - **Request Type:** GET
   - **Endpoint:** `localhost:3001/api/categories`

### 2. **Get Category, Product, or Tag by ID:**
   - **Request Type:** GET
   - **Endpoint:** `localhost:3001/api/categories/1`

### 3. **Create a Category, Product, or Tag:**
   - **Request Type:** POST
   - **Endpoint:** `localhost:3001/api/categories`
   - **Body:** JSON - `{"category_name": "Books"}`

### 4. **Update a Category, Product, or Tag:**
   - **Request Type:** PUT
   - **Endpoint:** `localhost:3001/api/categories/1`
   - **Body:** JSON - `{"category_name": "New Electronics"}`

### 5. **Delete a Category, Product, or Tag:**
   - **Request Type:** DELETE
   - **Endpoint:** `localhost:3001/api/categories/1`

Feel free to customize the requests in Postman, and these concise examples should guide you through testing the CRUD operations of the API effectively.

  ## Contributing
  None

  ## Tests
  None

  ## Questions
  If you have any questions, please contact me at 
  rishereric13@gmail.com
  or visit my GitHub page at
  [GitHub](https://github.com/EricRisher)

