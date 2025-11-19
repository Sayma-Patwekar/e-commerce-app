## backend
# go init
1. cd shopsmart/backend
2. go mod init shopsmart-backend
3. go mod tidy

==============================
## frontend
npm create vite@latest shopsmart-frontend --template react
(choose: react, javascript, rolldown-vite: 'no', install with npm and start now: 'yes'), 
cd shopsmart-frontend
npm run dev
# open http://localhost:5173




==============================
## database
psql -U postgres -f database/init.sql
cd backend
go run main.go
