from utilities import Course, parse_courses
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

culture: list[Course] = []
for element in elements:
    text = element.text_content().strip()
    if (text != ""):
        subject = text[0:text.find(" ")]
        text = text[text.find(" ") + 1:]
        number = int(text[0: text.find(" ")])
        text = text[text.find("- ") + 2:]
        title = text
        culture.append(
            {
                "type": "course",
                "value": Course(subject, number, title).get_dict()
            }
        )

language = parse_courses([
    "ARAB 10100 - Standard Arabic Level I",
    "ARAB 10200 - Standard Arabic Level II",
    "ARAB 20100 - Standard Arabic Level III",
    "ASL 10100 - American Sign Language I",
    "ASL 10200 - American Sign Language II",
    "ASL 20100 - American Sign Language III",
    "CHNS 10100 - Chinese Level I",
    "CHNS 10200 - Chinese Level II",
    "CHNS 20100 - Chinese Level III",
    "FR 10100 - French Level I",
    "FR 10200 - French Level II",
    "FR 20100 - French Level III",
    "GER 10100 - German Level I",
    "GER 10200 - German Level II",
    "GER 20100 - German Level III",
    "HEBR 10100 - Modern Hebrew Level I",
    "HEBR 10200 - Modern Hebrew II",
    "HEBR 20100 - Modern Hebrew Level III",
    "HEBR 12100 - Biblical Hebrew Level I",
    "HEBR 12200 - Biblical Hebrew Level II",
    "HEBR 22100 - Biblical Hebrew Level III",
    "ITAL 10100 - Italian Level I",
    "ITAL 10200 - Italian Level II",
    "ITAL 20100 - Italian Level III",
    "JPNS 10100 - Japanese Level I",
    "JPNS 10200 - Japanese Level II",
    "JPNS 20100 - Japanese Level III",
    "KOR 10100 - Korean Level I",
    "KOR 10200 - Korean Level II",
    "KOR 20100 - Korean Level III",
    "LATN 10100 - Latin Level I",
    "LATN 10200 - Latin Level II",
    "LATN 20100 - Latin Level III",
    "PTGS 10100 - Portuguese Level I",
    "PTGS 10200 - Portuguese Level II",
    "PTGS 20100 - Portuguese Level III",
    "RUSS 10100 - Russian Level I",
    "RUSS 10200 - Russian Level II",
    "RUSS 20100 - Russian Level III",
    "SPAN 10100 - Spanish Level I",
    "SPAN 10200 - Spanish Level II",
    "SPAN 20100 - Spanish Level III ",
])

culture_lang = {
    "title": "Cultural Diversity (Language & Culture)",
    "type": "or",
    "value": [
        {
            "title": "3 Language",
            "type": "choose 3",
            "value": language
        },
        {
            "title": "2 Language and Culture",
            "type": "and",
            "value": [
                {
                    "type": "choose 2",
                    "value": language
                },
                {
                    "type": "or",
                    "value": culture
                }
            ]
        },
        {
            "title": "3 Culture",
            "type": "choose 3",
            "value": culture
        }
    ]
}

with open("culture_lang.json", "w") as file:
    file.write(json.dumps(culture_lang, indent=4))