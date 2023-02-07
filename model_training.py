import numpy as np
import openai
import pandas as pd
from transformers import GPT2TokenizerFast


COMPLETIONS_MODEL = "text-davinci-003"
EMBEDDING_MODEL = "text-embedding-ada-002"

openai.api_key = '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'


introduction_content = """The Defacto API is RESTful in its architectural style, utilising an API key for Authentication.
Our main drivers is to provide you with a REST API that follows industry standards and provide as clear error messages as possible. So concretely:
it uses HTTP methods to access resources via URL-encoded parameters
it uses JSON for request and response bodies
it respects the HTTP status semantics
it uses a standard data model for returning errors (see the Errors section)
We are currently not API rate-limiting"""

access_content = """Send a message to contact@getdefacto.comto get access to our API and Sandbox.
We will create an account and you will receive an email requesting you to set your password.
Once this is done, you will be able to login on our Sandbox Web Application https://sandbox.app.getdefacto.com/ where you will get access to:
your API access tokenthe loans and invoices that you will create on Defacto"""


create_borrower_content = """Defacto can only lend money to borrowers who accepted our terms and conditions (T&Cs).
If your company is the legal borrower of all the loans that you do on Defacto, you can ignore this step.
Otherwise, you should continue to follow this section. Depending on the use case, borrowers can be either:
For marketplaces: buyers or sellers on an invoice you would like to finance with Defacto
For fintechs & other platforms: end-users are your borrowers
If you are not sure about your use case here, feel free to get in touch with intercom at the bottom right corner of this page.
Keep this information in mind! You will always need to register the borrowers prior to requesting loans.
To facilitate the testing, we provide a business generation API endpoint at POST /sandbox/business-generator. It creates a fake business that you can then use as a borrower. For this example, set the is_borrower parameter to true.
Send a POST /borrowers request to create the borrower with the data from the business generator.
If you want to use your own data, make sure to fill the signed_at parameter. It is with this field that you tell Defacto that the borrower accepted our T&Cs. If you don't fill it, we will not create a credit line for this borrower,
thus preventing loan applications. In such a case, you would need to use POST /borrower/{borrower_id}/sign."""

introduction_record = ('Defacto API', 'Make your first loan in 5 minutes', introduction_content.strip(" \n"))
access_record = ('Defacto API', 'Get access to the API', access_content.strip(" \n"))
borrower_record = ('Defacto API', 'Create your borrower', create_borrower_content.strip(" \n"))


tokenizer = GPT2TokenizerFast.from_pretrained("gpt2")


def count_tokens(text: str) -> int:
    return len(tokenizer.encode(text))

def get_data():
    l = [
        introduction_record,
        access_record,
        borrower_record
    ]
    df = pd.DataFrame(l, columns =['title', 'heading', 'content'])
    df['tokens'] = df['content'].apply(count_tokens)
    df = df.set_index(["title", "heading"])
    return df










