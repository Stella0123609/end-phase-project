from sqlalchemy.orm import Session
from app.schemas.journal import Journal
from app.models.journal import JournalCreate, JournalResponse
from app.services.geoapify import get_coordinates
from app.services.starmap import generate_star_map

class JournalService:
    def __init__(self, db: Session):
        self.db = db

    async def create_journal(self, entry: JournalCreate):
        coordinates = await get_coordinates(entry.city)
        star_map = generate_star_map(coordinates["latitude"], coordinates["longitude"], entry.date.strftime("%Y-%m-%d"))
        db_entry = Journal(
            text=entry.text,
            date=entry.date,
            city=entry.city,
            mood=entry.mood,
            star_map=star_map
        )
        self.db.add(db_entry)
        self.db.commit()
        self.db.refresh(db_entry)
        return JournalResponse.from_orm(db_entry)

    async def get_all_journals(self):
        return [JournalResponse.from_orm(journal) for journal in self.db.query(Journal).all()]