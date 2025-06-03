from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from app.models.user import UserCreate
from app.core.database import get_db
from sqlalchemy.orm import Session

auth_router = APIRouter()

@auth_router.post("/auth/signup")
async def signup(user: UserCreate, db: Session = Depends(get_db)):
    # Dummy implementation
    return {"message": "User created successfully (dummy response)"}

@auth_router.post("/auth/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    # Dummy implementation
    if form_data.username != "test@example.com" or form_data.password != "password":
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"access_token": "dummy_token", "token_type": "bearer", "user_email": form_data.username}

@auth_router.post("/auth/google-login")
async def google_login(id_token: str, db: Session = Depends(get_db)):
    # Dummy implementation
    user_email = "google-user@example.com"
    return {"access_token": "dummy_google_token", "token_type": "bearer", "user_email": user_email}