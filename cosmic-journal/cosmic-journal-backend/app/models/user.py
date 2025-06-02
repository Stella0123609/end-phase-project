from pydantic import BaseModel
from typing import Optional

class UserCreate(BaseModel):
    email: str
    password: str

class User(UserCreate):
    id: Optional[int] = None
    hashed_password: Optional[str] = None

    class Config:
        from_attributes = True  