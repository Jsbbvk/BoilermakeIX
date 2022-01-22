from utilities import parse_courses
import json

security = {
    "title": "Security Track",
    "type": "and", 
    "value": [
        {
            "title": "Required",
            "type": "and",
            "value": parse_courses([
                "CS 35400 - Operating Systems",
                "CS 35500 - Introduction To Cryptography",
                "CS 42600 - Computer Security ",
            ])
        },
        {
            "title": "Electives",
            "type": "pick 3",
            "value": parse_courses([
                "CS 35200 - Compilers: Principles And Practice",
                "CS 38100 - Introduction To The Analysis Of Algorithms",
                "CS 42200 - Computer Networks",
                "CS 49000 - Topics In Computer Sciences For Undergraduates",
            ]) + [
                {
                    "type": "or",
                    "value": parse_courses([
                        "CS 30700 - Software Engineering I",
                        "CS 40800 - Software Testing ",
                    ])
                },
                {
                    "type": "or",
                    "value": parse_courses([
                        "CS 34800 - Information Systems",
                        "CS 44800 - Introduction To Relational Database Systems",
                        "CS 47300 - Web Information Search And Management ",
                    ])
                },
                {
                    "type": "or",
                    "value": parse_courses([
                        "CS 35300 - Principles Of Concurrency And Parallelism",
                        "CS 45600 - Programming Languages "
                    ])
                },
                {
                    "type": "or",
                    "value": parse_courses([
                        "CS 37300 - Data Mining And Machine Learning",
                        "CS 47100 - Introduction to Artificial Intelligence "
                    ])
                },
                {
                    "type": "or",
                    "value": parse_courses([
                        "CS 48900 - Embedded Systems ",
                        "CS 49000 - Topics In Computer Sciences For Undergraduates"
                    ])
                },
            ]
        }
    ]
}

with open("tracks/security.json", "w") as file:
    file.write(json.dumps(security, indent=4))