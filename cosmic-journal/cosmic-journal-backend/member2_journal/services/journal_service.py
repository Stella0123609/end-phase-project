from sqlalchemy.orm import Session
from member2_journal.models.journal import Journal

class JournalService:
    def __init__(self, db: Session):
        self.db = db

    def create_journal(self, journal: Journal):
        db_journal = Journal(content=journal.content)
        self.db.add(db_journal)
        self.db.commit()
        self.db.refresh(db_journal)
        return db_journal

    def get_all_journals(self):
        return self.db.query(Journal).all()