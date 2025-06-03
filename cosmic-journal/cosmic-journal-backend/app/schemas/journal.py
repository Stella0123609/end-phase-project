from sqlalchemy import Column, Integer, String, Date, JSON
from app.core.database import Base

class Journal(Base):
    __tablename__ = "journals"
    id = Column(Integer, primary_key=True, index=True)
    text = Column(String, nullable=False)
    date = Column(Date, nullable=False)
    city = Column(String, nullable=False)
    mood = Column(String, nullable=True)
    star_map = Column(JSON, nullable=True)