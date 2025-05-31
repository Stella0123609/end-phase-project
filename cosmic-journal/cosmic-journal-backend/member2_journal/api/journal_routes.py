from fastapi import APIRouter, Depends, HTTPException
from member2_journal.models.journal import Journal
from member2_journal.services.journal_service import JournalService
from sqlalchemy.orm import Session
from database import SessionLocal

journal_router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@journal_router.post("/create")
async def create_journal(journal: Journal, db: Session = Depends(get_db)):
    return JournalService(db).create_journal(journal)

@journal_router.get("/all")
async def get_journals(db: Session = Depends(get_db)):
    return JournalService(db).get_all_journals()