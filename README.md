# AI Notes – Semantic Note Taking App

AI Notes is a **full-stack note taking application with semantic search**.
Users can create notes and later retrieve them using **AI-powered semantic similarity** rather than simple keyword matching.

The project demonstrates a **modern production-ready stack** using:

* FastAPI
* PostgreSQL + pgvector
* React + Vite
* TailwindCSS
* Docker & Docker Compose

---

# 🚀 Features

* 🔐 JWT Authentication (Register / Login / Logout)
* 📝 Create and delete notes
* 🔎 AI powered **semantic search**
* 🧠 Embeddings generated for note content
* ⚡ FastAPI backend
* 🎨 Modern React UI with TailwindCSS
* 🐳 Fully containerized with Docker
* 🗄 PostgreSQL + pgvector for vector similarity search

---

# 🏗 Architecture

```
Browser
   ↓
React Frontend (Vite + Tailwind)
   ↓
FastAPI Backend
   ↓
PostgreSQL + pgvector
```

Semantic search flow:

```
User query
   ↓
Embedding generation
   ↓
pgvector similarity search
   ↓
Most relevant notes returned
```

---

# 📂 Project Structure

```
crisps
│
├── backend
│   ├── app
│   │   ├── auth
│   │   ├── notes
│   │   ├── search
│   │   ├── utils
│   │   ├── database
│   │   └── core
│   ├── Dockerfile
│   └── requirements.txt
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── pages
│   │   ├── store
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── docker-compose.yml
└── README.md
```

---

# ⚙️ Tech Stack

## Backend

* FastAPI
* SQLAlchemy
* PostgreSQL
* pgvector
* JWT Authentication
* Passlib (bcrypt hashing)

## Frontend

* React
* Vite
* TailwindCSS
* Framer Motion
* Axios

## DevOps

* Docker
* Docker Compose
* Nginx (frontend serving)

---

# 🧠 Semantic Search

Each note is converted into an **embedding vector**.

Example:

```
Note → Embedding → Stored in pgvector
```

When a user searches:

```
Search Query
   ↓
Embedding created
   ↓
Vector similarity search
   ↓
Top relevant notes returned
```

The backend performs:

```sql
ORDER BY embedding <-> query_embedding
LIMIT 5
```

This allows **meaning-based search**, not just keyword matching.

---

# 🔐 Authentication Flow

```
Register
   ↓
Login
   ↓
JWT token issued
   ↓
Token stored in frontend
   ↓
Token sent in Authorization header
```

Example header:

```
Authorization: Bearer <token>
```

---

# 🐳 Running the Project with Docker

### 1️⃣ Clone the repository

```
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

### 2️⃣ Start containers

```
docker compose up --build
```

---

# 🌐 Access Services

Frontend

```
http://localhost:3000
```

Backend API Docs

```
http://localhost:8000/docs
```

PostgreSQL

```
localhost:5432
```

---

# 🔧 Backend API Endpoints

### Authentication

```
POST /auth/register
POST /auth/login
```

### Notes

```
POST /notes
GET /notes
DELETE /notes/{note_id}
```

### Semantic Search

```
POST /search
```

Example request:

```
{
  "query": "machine learning notes"
}
```

---

# 🎨 Frontend Features

* Animated UI using **Framer Motion**
* TailwindCSS styling
* Modal-based note creation
* Real-time note updates
* Search bar for semantic search

---

# 🧪 Local Development (Without Docker)

### Backend

```
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend

```
cd frontend
npm install
npm run dev
```

---

# 📈 Future Improvements

* Edit notes
* Pagination
* Vector index optimization
* Note tagging
* Dark mode UI
* AI summarization

---

# 📄 License

This project is for educational purposes.

---

# 👨‍💻 Author

Built by **Divyanshu Srivastava**

Full-stack project demonstrating **AI-powered semantic search with modern web architecture**.

