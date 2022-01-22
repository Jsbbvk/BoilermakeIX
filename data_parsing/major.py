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

# gen ends
gen_eds = []
for element in elements:
    course = {}
    text = element.text_content().strip()
    if (text != ""):
        course["subject"] = text[0:text.find(" ")]
        text = text[text.find(" ") + 1:]
        course["number"] = int(text[0: text.find(" ")])
        text = text[text.find("- ") + 2:]
        course["title"] = text
        gen_eds.append(course)

print(gen_eds[0])
# print (json.dumps(gen_eds, indent=4))

# first year composition
things = [
    "AMST 10100 - America And The World",
    "COM 20400 - Critical Perspectives On Communication",
    "EDCI 20500 - Exploring Teaching As A Career",
    "ENGL 10600 - First-Year Composition",
    "ENGL 10800 - Accelerated First-Year Composition",
    "HONR 19903 - Interdisciplinary Approaches In Writing",
    "PHIL 26000 - Philosophy And Law",
    "SCLA 10100 - Transformative Texts, Critical Thinking And Communication I: Antiquity To Modernity ",
]

fy_comp = []
for thing in things:
    course = {}
    text = thing.strip()
    course["subject"] = text[0:text.find(" ")]
    text = text[text.find(" ") + 1:]
    course["number"] = int(text[0: text.find(" ")])
    text = text[text.find("- ") + 2:]
    course["title"] = text
    fy_comp.append(course)

print (fy_comp[0])

things = [
    "COM 21700 - Science Writing And Presentation",
    "CHM 46200 - Intermediate Organic Chemistry",
]

tech_writing_pres = []
for thing in things:
    course = {}
    text = thing.strip()
    course["subject"] = text[0:text.find(" ")]
    text = text[text.find(" ") + 1:]
    course["number"] = int(text[0: text.find(" ")])
    text = text[text.find("- ") + 2:]
    course["title"] = text
    tech_writing_pres.append(course)

things = [
    "BIOL 44100 - Biology Senior Seminar In Genetics",
    "COM 11400 - Fundamentals Of Speech Communication",
    "COM 31400 - Advanced Presentational Speaking",
    "COM 31500 - Speech Communication Of Technical Information",
    "COM 32400 - Introduction To Organizational Communication",
    "COM 41500 - Discussion Of Technical Problems",
    "SCLA 10200 - Transformative Texts, Critical Thinking And Communication II: Modern World ",
    "ENGL 30400 - Advanced Composition",
    "ENGL 30900 - Digital Design And Production",
    "ENGL 41900 - Multimedia Writing",
    "ENGL 42000 - Business Writing",
    "ENGL 42100 - Technical Writing",
    "ENGL 42201 - Writing For The Health And Human Sciences",
    "ENGL 42400 - Writing For High Technology Industries",
    "ENGL 43400 - Science And Medical Writing",
    "ENGL 49000 - Worksite Internship Practicum",
    "MGMT 39000 - Junior Level Problems In Management (Strategic Decision Making - Honors)",
]
tech_pres = [
    
]

print (tech_writing_pres[0])