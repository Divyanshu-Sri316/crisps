from fastapi import FastAPI
from sqlalchemy import text

from app.database.db import engine
from app.database.base import Base

from app.models.user import User
from app.models.note import Note
from fastapi.middleware.cors import CORSMiddleware

from app.auth.router import router as auth_router
from app.notes.router import router as notes_router
from app.search.router import router as search_router


app = FastAPI(title="AI Notes API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


with engine.connect() as conn:
    conn.execute(text("CREATE EXTENSION IF NOT EXISTS vector"))


Base.metadata.create_all(bind=engine)


app.include_router(auth_router, prefix="/auth")
app.include_router(notes_router, prefix="/notes")
app.include_router(search_router, prefix="/search")


@app.get("/")
def health():
    return {"status": "running"}