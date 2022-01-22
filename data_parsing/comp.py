from ast import parse
from utilities import Course
import json

def parse_courses(course_strs):
    courses = []
    for thing in course_strs:
        text = thing.strip()
        subject = text[0:text.find(" ")]
        text = text[text.find(" ") + 1:]
        number = int(text[0: text.find(" ")])
        text = text[text.find("- ") + 2:]
        title = text
        courses.append({
            "type": "course",
            "value": Course(subject, number, title).get_dict()
        })
    return courses

fy_comp = parse_courses([
    "AMST 10100 - America And The World",
    "COM 20400 - Critical Perspectives On Communication",
    "EDCI 20500 - Exploring Teaching As A Career",
    "ENGL 10600 - First-Year Composition",
    "ENGL 10800 - Accelerated First-Year Composition",
    "HONR 19903 - Interdisciplinary Approaches In Writing",
    "PHIL 26000 - Philosophy And Law",
    "SCLA 10100 - Transformative Texts, Critical Thinking And Communication I: Antiquity To Modernity ",
])

tech_write_pres = parse_courses([
    "COM 21700 - Science Writing And Presentation",
    "CHM 46200 - Intermediate Organic Chemistry",
])


tech_pres = parse_courses([
    "BIOL 44100 - Biology Senior Seminar In Genetics",
    "COM 11400 - Fundamentals Of Speech Communication",
    "COM 31400 - Advanced Presentational Speaking",
    "COM 31500 - Speech Communication Of Technical Information",
    "COM 32400 - Introduction To Organizational Communication",
    "COM 41500 - Discussion Of Technical Problems",
    "SCLA 10200 - Transformative Texts, Critical Thinking And Communication II: Modern World ",
])

tech_write = parse_courses([
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
])

comp = {
    "title": "Composition & Presentation",
    "type": "and",
    "value": [
        {
            "title": "First-Year Composition",
            "type": "or",
            "value": fy_comp
        },
        {
            "title": "Technical Writing And Presentation",
            "type": "or",
            "value": [
                {
                    "type": "or",
                    "value": tech_write_pres
                },
                {
                    "type": "choose 2",
                    "value": tech_pres + tech_write
                }
            ]
        }
    ]
}

with open("comp.json", "w") as file:
    file.write(json.dumps(comp, indent=4))