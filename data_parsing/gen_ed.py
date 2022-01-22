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

response = requests.get(url="https://catalog.purdue.edu/preview_program.php?catoid=14&poid=19152", headers=headers, verify=False)
doc = html.fromstring(response.text)
elements = doc.cssselect("li.acalog-course a")

gen_eds: list[Course] = []
for element in elements:
    text = element.text_content().strip()
    if (text != ""):
        subject = text[0:text.find(" ")]
        text = text[text.find(" ") + 1:]
        number = int(text[0: text.find(" ")])
        text = text[text.find("- ") + 2:]
        title = text
        gen_eds.append(
            {
                "type": "course",
                "value": Course(subject, number, title).get_dict()
            }
        )

gen_eds = {
    "title": "General Education",
    "type": "choose 3",
    "value": gen_eds
}

with open("gen_ed.json", "w") as file:
    file.write(json.dumps(gen_eds, indent=4))