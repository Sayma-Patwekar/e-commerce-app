# note:after installing dependencies always run 'go mod tidy'

* go mod init shopping-app
cd backend
go get -u github.com/gorilla/mux
go get -u github.com/lib/pq
go get github.com/joho/godotenv
go get golang.org/x/crypto/bcrypt
go get github.com/gorilla/handlers
go get github.com/golang-jwt/jwt/v4

cd frontend
* npx create-react-app .
* npm install react-router-dom
(for reference)
`
Success! Created frontend at /Users/saymapatwekar/Documents/projects/shopping-app/frontend
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd /Users/saymapatwekar/Documents/projects/shopping-app/frontend
  npm start
`
# databsase setup
manually create database and tables using psql terminal(queries are present in backend/init.sql)
* run init.sql to create tables
 $ CREATE DATABASEshopping_db;  (in terminal)
* create tables manually in above database

# run app
# run backend:
cd backend
go run cmd/api/main.go

# run frontend
cd frontend
npm start


# database commands
* use database
 \c shopping_db; or \connect shopping_db;

* show tables
 \dt; or \d;

* show table schema
 \d <table_name>;

* show table data
 select * from <table_name>;
 select * from users;
 select * from products;
 select * from admins;

* clear screen in psql
 Ctrl + L


* drop db
 DROP DATABASE <db_name>;

* drop tables
 DROP TABLE users;
 DROP TABLE products;
 DROP TABLE admins;

# users data
username: sayma
email: sayma@gmail.com
password: sayma@123

# admin data
username: admin1
password: admin1@123


# errors:
1. Cross-Origin Resource Sharing (CORS) policy
   - Description: This error occurs when the frontend makes a request to the backend, but the backend does not allow requests from the frontend's domain.(as both fronetend and backend both are running on different port, hence we need to add logic in backend(main file) to allow requests from frontend's domain)
   - Solution: Configure the backend to allow requests from the frontend's domain. Add the appropriate CORS headers to the backend responses.
  backend/cmd/api/main.go
  `
  // CORS middleware
	corsHandler := gohandlers.CORS(
		gohandlers.AllowedOrigins([]string{"http://localhost:3000"}),
		gohandlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}),
		gohandlers.AllowedHeaders([]string{"Content-Type", "Authorization"}),
	)
  `

# stidy and understand
* CORS policy (Cross-Origin Resource Sharing)
* jwt token(needed if you're implementing CORS)

2. "500 Internal Server Error," which points to a problem on the backend. This usually happens when the server runs into an issue it can't recover from while processing a request.