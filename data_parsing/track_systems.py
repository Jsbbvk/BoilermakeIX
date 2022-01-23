from utilities import parse_courses
import json

systems = {
    "title": "Systems Software Track",
    "type": "and",
    "value": [
        {
            "title": "Required",
            "type": "and",
            "value": parse_courses([
                "CS 35200 - Compilers: Principles And Practice",
                "CS 35400 - Operating Systems",
                "CS 42200 - Computer Networks ",
            ])
        },
        {
            "title": "Electives",
            "type": "or",
			"pick": 2,
            "value": parse_courses([
                "CS 30700 - Software Engineering I",
                "CS 33400 - Fundamentals Of Computer Graphics",
                "CS 35300 - Principles Of Concurrency And Parallelism",
                "CS 38100 - Introduction To The Analysis Of Algorithms",
                "CS 42600 - Computer Security",
                "CS 44800 - Introduction To Relational Database Systems",
                "CS 45600 - Programming Languages",
                "CS 48900 - Embedded Systems",
                "CS 49000 - Topics In Computer Sciences For Undergraduates ",
            ])
        }
    ]
}

with open("tracks/systems.json", "w") as file:
    file.write(json.dumps(systems, indent=4))