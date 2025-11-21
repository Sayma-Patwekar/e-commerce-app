* go mod init shopping-app
cd backend
* go get -u github.com/gorilla/mux
* go get -u github.com/lib/pq
* go get github.com/joho/godotenv

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


* drop
 DROP DATABASE <db_name>;