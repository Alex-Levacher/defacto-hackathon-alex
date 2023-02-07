import json

import click
import requests

@click.command()
def ask_defacto():
    while True:
        question = click.prompt('Hi there, what can I help you with?', type=str, default="")
        if not question:
            break
        print(question)
        url = "http://api.open-notify.org/astros.json"
        response = requests.get(url)
        click.echo(response.json())

    print("kthxbye")



if __name__ == '__main__':
    ask_defacto()
