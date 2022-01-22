from utilities import Course
import requests
from lxml import html
import json

headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
    "Connection": "keep-alive",
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0",
}

response = requests.get(url="https://catalog.purdue.edu/preview_program.php?catoid=14&poid=19155", headers=headers, verify=False)
doc = html.fromstring(response.text)
elements = doc.cssselect("li.acalog-course a")

great_issues: list[Course] = []
for element in elements:
    text = element.text_content().strip()
    if (text != ""):
        subject = text[0:text.find(" ")]
        text = text[text.find(" ") + 1:]
        number = int(text[0: text.find(" ")])
        text = text[text.find("- ") + 2:]
        title = text
        great_issues.append(
            {
                "type": "course",
                "value": Course(subject, number, title).get_dict()
            }
        )

great_issues = {
    "title": "Greate Issues in Science",
    "type": "or",
    "value": great_issues
}

with open("great_issues.json", "w") as file:
    file.write(json.dumps(great_issues, indent=4))