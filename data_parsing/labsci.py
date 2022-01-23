from utilities import parse_courses
import json

labsci = {
    "title": "Laboratory Science",
    "type": "or",
    "value": [
        {
            "title": "Biology Sequence 1",
            "type": "and",
            "value": parse_courses([
                "BIOL 11000 - Fundamentals Of Biology I",
                "BIOL 11100 - Fundamentals Of Biology II ",
            ])
        },
        {
            "title": "Biology Sequence 2",
            "type": "and",
            "value": parse_courses([
                "BIOL 12100 - Biology I: Diversity, Ecology, And Behavior",
                "BIOL 13100 - Biology II: Development, Structure, And Function Of Organisms",
                "BIOL 13500 - First Year Biology Laboratory "
            ])
        },
        {
            "title": "Chemistry Sequence 1",
            "type": "and",
            "value": parse_courses(["CHM 11500 - General Chemistry "]) + [
                {
                    "type": "or",
                    "value": parse_courses([
                        "CHM 11600 - General Chemistry",
                        "CHM 12901 - General Chemistry With A Biological Focus "
                    ])
                }
            ]
        },
        {
            "title": "Chemistry Sequence 2",
            "type": "and",
            "value": parse_courses([
                "CHM 12500 - Introduction To Chemistry I",
                "CHM 12600 - Introduction To Chemistry II ",
            ])
        },
        {
            "title": "Chemistry Sequence 3",
            "type": "and",
            "value": parse_courses([
                "CHM 25500 - Organic Chemistry",
                "CHM 25501 - Organic Chemistry Laboratory",
                "CHM 25600 - Organic Chemistry",
                "CHM 25601 - Organic Chemistry Laboratory ",
            ])
        },
        {
            "title": "Chemistry Sequence 4",
            "type": "and",
            "value": parse_courses(["CHM 26505 - Organic Chemistry "])+ [
                {
                    "type": "or",
                    "value": parse_courses([
                        "CHM 26300 - Organic Chemistry Laboratory",
                        "CHM 26500 - Organic Chemistry Laboratory",
                        "CHM 26700 - Organic Chemistry Laboratory Honors",
                    ])
                }
            ]
        },
        {
            "title": "Chemistry Sequence 5",
            "type": "and",
            "value": parse_courses(["CHM 26605 - Organic Chemistry "])+ [
                {
                    "type": "or",
                    "value": parse_courses([
                        "CHM 26400 - Organic Chemistry Laboratory",
                        "CHM 26600 - Organic Chemistry Laboratory",
                        "CHM 26800 - Organic Chemistry Laboratory Honors ",
                    ])
                }
            ]
        },
        {
            "title": "Earth, Atmospheric, and Planetary Sciences Sequence",
            "type": "and",
            "value": parse_courses([
                "EAPS 11100 - Physical Geology ",
                "EAPS 11200 - Earth Through Time ",
            ])
        },
        {
            "title": "Physics Sequence 1",
            "type": "and",
            "value": parse_courses([
                "PHYS 17200 - Modern Mechanics ",
                "PHYS 27200 - Electric And Magnetic Interactions ",
            ])
        },
        {
            "title": "Physics Sequence 2",
            "type": "and",
            "value": parse_courses([
                "PHYS 17200 - Modern Mechanics",
                "PHYS 24100 - Electricity And Optics",
                "PHYS 25200 - Electricity And Optics Laboratory ",
            ])
        },
        {
            "title": "Physics Sequence 3",
            "type": "and",
            "value": parse_courses([
                "PHYS 17200 - Modern Mechanics",
                "PHYS 22100 - General Physics ",
            ])
        },
        {
            "title": "Physics Sequence 4",
            "type": "and",
            "value": parse_courses([
                "PHYS 22000 - General Physics",
                "PHYS 22100 - General Physics ",
            ])
        },
        {
            "title": "Physics Sequence 5",
            "type": "and",
            "value": parse_courses([
                "PHYS 23300 - Physics For Life Sciences I",
                "PHYS 23400 - Physics For Life Sciences II ",
            ])
        },
    ]
}

with open("labsci.json", "w") as file:
    file.write(json.dumps(labsci, indent=4))