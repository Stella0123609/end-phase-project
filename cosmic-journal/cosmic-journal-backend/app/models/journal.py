from pydantic import BaseModel
from datetime import date
from typing import Optional, List, Dict

class JournalCreate(BaseModel):
    text: str
    date: date
    city: str
    mood: Optional[str] = None

class JournalResponse(BaseModel):
    id: int
    text: str
    date: date
    city: str
    mood: Optional[str] = None
    star_map: List[Dict]

    class Config:
        from_attributes = True  