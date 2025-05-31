import click
from member3_starmap.services.starmap_service import StarMapService

@click.group()
def starmap():
    pass

@starmap.command()
@click.argument('latitude', type=float)
@click.argument('longitude', type=float)
def generate(latitude, longitude):
    result = StarMapService().generate_starmap(latitude, longitude)
    click.echo(result)