import json

import click
import requests

from model_training import get_data
from utils import compute_doc_embeddings, construct_prompt

@click.command()
def ask_defacto():
    while True:
        question = click.prompt('Hi there, what can I help you with?', type=str, default="")
        if not question:
            break
        url = "http://localhost:3000/api/ask"

        df = get_data()
        document_embeddings = compute_doc_embeddings(df)

        prompt = construct_prompt(
            question,
            document_embeddings,
            df
        )
        print(prompt)
        response = requests.post(url=url, json = {'question': question})
        click.echo(response.json())







if __name__ == '__main__':
    ask_defacto()
