# Orphan & Sponsor API

## Project Description
This project is a simple backend API built using **Node.js, Express, and Sequelize**.

The system manages **Sponsors** and **Orphans**, where:
- One sponsor can sponsor many orphans
- Each orphan belongs to one sponsor

This project demonstrates CRUD operations and relationships using MySQL.

---

## Technologies Used
- Node.js
- Express.js
- Sequelize ORM
- MySQL (Docker)
- dotenv
- nodemon

---

## Setup Instructions

### 1 Clone the repository
```bash
git clone https://github.com/USERNAME/orphan-sponsor-api.git
cd orphan-sponsor-api
```

### 2 Install dependencies
```bash
npm install
```

### 3 Create .env file
Create a file named .env in the root folder:
```bash
PORT=3000
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=123456
DB_NAME=orphan_db
```

### 4 Run MySQL using Docker
```bash
docker run --name mysql-orphan \
-e MYSQL_ROOT_PASSWORD=123456 \
-e MYSQL_DATABASE=orphan_db \
-p 3306:3306 -d mysql:8
```

### 5 Run migrations
```bash
npx sequelize-cli db:migrate
```

## How to Run the Project
```bash
npm run dev
```
The server will run at:
## http://localhost:3000

## API Endpoints:
## Home Route

## GET /
Returns a welcome message and project information.
---
## Sponsors APIs

## GET /api/sponsors
Get all sponsors

## GET /api/sponsors/:id
Get sponsor by ID

## POST /api/sponsors
Create sponsor

## PUT /api/sponsors/:id
Update sponsor

## DELETE /api/sponsors/:id
Delete sponsor

## Example Request (Sponsor)

```json
{
  "name": "Ahmad",
  "email": "ahmad@test.com"
}
```
## Orphans APIs

## GET /api/orphans
Get all orphans

---

## GET /api/orphans/:id
Get orphan with sponsor details

---

### POST /api/orphans
Create a new orphan

```json id="o1"
{
  "name": "malek",
  "age": 10,
  "sponsorId": 1
}
```
