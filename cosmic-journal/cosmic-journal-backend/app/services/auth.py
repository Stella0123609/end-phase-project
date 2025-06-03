from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from app.models.user import UserCreate
from app.services.auth import AuthService
from app.core.database import get_db
from sqlalchemy.orm import Session
from pydantic import BaseModel

auth_router = APIRouter()

class GoogleLoginRequest(BaseModel):
    id_token: str

@auth_router.post("/auth/signup")
async def signup(user: UserCreate, db: Session = Depends(get_db)):
    try:
        await AuthService(db).register_user(user)
        return {"message": "User created successfully"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@auth_router.post("/auth/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = await AuthService(db).authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    access_token = await AuthService(db).create_access_token(user.email)
    return {"access_token": access_token, "token_type": "bearer", "user_email": user.email}

@auth_router.post("/auth/google-login")
async def google_login(request: GoogleLoginRequest, db: Session = Depends(get_db)):
    try:
        id_token = request.id_token
        # Verify Google ID token (simplified; use google-auth-library in production)
        user_email = "google-user@example.com"  # Placeholder; replace with actual token verification
        user = await AuthService(db).authenticate_user(user_email, "dummy")
        if not user:
            user_data = UserCreate(email=user_email, password="google-auth")
            await AuthService(db).register_user(user_data)
            user = await AuthService(db).authenticate_user(user_email, "dummy")
        access_token = await AuthService(db).create_access_token(user.email)
        return {"access_token": access_token, "token_type": "bearer", "user_email": user.email}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Google login failed: {str(e)}")