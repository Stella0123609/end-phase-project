import click
from member2_journal.services.journal_service import JournalService
from database import SessionLocal

@click.group()
def journal():
    pass

@journal.command()
@click.argument('content')
def add(content):
    db = SessionLocal()
    journal_service = JournalService(db)
    journal_service.create_journal(content=content)
    click.echo("Journal entry added")