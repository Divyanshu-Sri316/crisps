from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.db import get_db
from app.auth.schemas import RegisterRequest, LoginRequest
from app.auth.service import register_user, authenticate_user
from app.utils.jwt import generate_token

router = APIRouter()


@router.post("/register")
def register(data: RegisterRequest, db: Session = Depends(get_db)):

    user = register_user(db, data.email, data.password)

    token = generate_token(user.id)

    return {"access_token": token}


@router.post("/login")
def login(data: LoginRequest, db: Session = Depends(get_db)):

    user = authenticate_user(db, data.email, data.password)

    token = generate_token(user.id)

    return {"access_token": token}