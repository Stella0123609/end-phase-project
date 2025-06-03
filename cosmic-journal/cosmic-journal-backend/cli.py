import click
from app.services.auth import AuthService
from app.services.starmap import generate_star_map
from app.core.database import get_db
from sqlalchemy.orm import Session

@click.group()
def cli():
    pass

@cli.command()
def runserver():
    import uvicorn
    from main import app
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)

@cli.command()
@click.argument('email')
@click.argument('password')
def create_user(email, password):
    db = next(get_db())
    AuthService(db).register_user({"email": email, "password": password})
    click.echo(f"User {email} created")

@cli.command()
@click.argument('latitude', type=float)
@click.argument('longitude', type=float)
@click.argument('date')
def generate_starmap(latitude, longitude, date):
    result = generate_star_map(latitude, longitude, date)
    click.echo(result)

if __name__ == "__main__":
    cli()