from fastapi import APIRouter, Depends, HTTPException
from typing import List
from app.models.journal import JournalCreate, JournalResponse
from app.services.journal import JournalService
from app.core.database import get_db
from app.core.security import verify_token
from sqlalchemy.orm import Session

journal_router = APIRouter()

@journal_router.post("/journal", response_model=JournalResponse, dependencies=[Depends(verify_token)])
async def create_journal(entry: JournalCreate, db: Session = Depends(get_db)):
    try:
        journal = await JournalService(db).create_journal(entry)
        return journal
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create journal entry: {str(e)}")

@journal_router.get("/journal/all", response_model=List[JournalResponse], dependencies=[Depends(verify_token)])
async def get_journals(db: Session = Depends(get_db)):
    try:
        journals = await JournalService(db).get_all_journals()
        return journals
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to retrieve journals: {str(e)}")