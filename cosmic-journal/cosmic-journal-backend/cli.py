import click
from main import app

@click.group()
def cli():
    pass

@cli.command()
def runserver():
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)

if __name__ == "__main__":
    cli()