import click
from member1_auth.services.auth_service import AuthService

@click.group()
def auth():
    pass

@auth.command()
@click.argument('email')
@click.argument('password')
def create_user(email, password):
    AuthService().create_user(email, password)
    click.echo(f"User {email} created successfully")