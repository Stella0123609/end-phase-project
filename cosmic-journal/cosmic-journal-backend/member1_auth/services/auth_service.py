from sqlalchemy.orm import Session
from member1_auth.models.user import User
from passlib.context import CryptContext
from database import SessionLocal

class AuthService:
    def __init__(self):
        self.pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
        self.db = SessionLocal()

    def register_user(self, user_data):
        hashed_password = self.pwd_context.hash(user_data.hashed_password)
        db_user = User(email=user_data.email, hashed_password=hashed_password)
        self.db.add(db_user)
        self.db.commit()
        self.db.refresh(db_user)
        return db_user

    def authenticate_user(self, email: str, password: str):
        user = self.db.query(User).filter(User.email == email).first()
        if not user or not self.pwd_context.verify(password, user.hashed_password):
            return None
        return user