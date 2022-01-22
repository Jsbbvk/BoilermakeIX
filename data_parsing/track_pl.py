from utilities import parse_courses
import json

pl = {
    "title": "Programming Language Track",
    "type": "and", 
    "value": [
        {
            "title": "Required",
            "type": "and",
            "value": parse_courses([
				"CS 35200 - Compilers: Principles And Practice",
				"CS 35400 - Operating Systems",
				"CS 45600 - Programming Languages "
            ])
        },
        {
            "title": "Electives",
            "type": "choose 3",
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
                    ])
                },
				{
					"type": "or",
					"value": parse_courses([
						"MA 45300 - Elements Of Algebra I",
						"MA 38500 - Introduction To Logic ",
					])
				}
            ]
        }
    ]
}

with open("tracks/pl.json", "w") as file:
    file.write(json.dumps(pl, indent=4))