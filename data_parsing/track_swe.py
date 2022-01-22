from utilities import parse_courses
import json

swe = {
    "title": "Software Engineering Track",
    "type": "and",
    "value": [
        {
            "title": "Required",
            "type": "and",
            "value": parse_courses([
                "CS 30700 - Software Engineering I",
                "CS 38100 - Introduction To The Analysis Of Algorithms",
                "CS 40700 - Software Engineering Senior Project",
                "CS 40800 - Software Testing ",
            ]) + [{
                "type": "or",
                "value": parse_courses([
                    "CS 35200 - Compilers: Principles And Practice",
                    "CS 35400 - Operating Systems ",
                ])
            }]
        },
        {
            "title": "Electives",
            "type": "or",
            "value": parse_courses([
                "CS 34800 - Information Systems",
                "CS 35200 - Compilers: Principles And Practice",
                "CS 35300 - Principles Of Concurrency And Parallelism",
                "CS 35400 - Operating Systems",
                "CS 37300 - Data Mining And Machine Learning",
                "CS 42200 - Computer Networks",
                "CS 42600 - Computer Security",
                "CS 44800 - Introduction To Relational Database Systems",
                "CS 45600 - Programming Languages",
                "CS 47300 - Web Information Search And Management",
                "CS 48900 - Embedded Systems",
                "CS 49000 - Topics In Computer Sciences For Undergraduates ",
                "CS 51000 - Software Engineering",
                "CS 59000 - Topics In Computer Sciences ",
            ])
        }
    ]
}

with open("tracks/swe.json", "w") as file:
    file.write(json.dumps(swe, indent=4))