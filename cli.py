import json

import click
import requests

@click.command()
@click.option('--question', '-q',  help='Question to ask.')
def ask_defacto(question: str):
    url = "http://api.open-notify.org/astros.json"
    response = requests.get(url)

    click.echo(response.json())


if __name__ == '__main__':
    ask_defacto()
