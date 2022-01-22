from utilities import parse_courses
import json

mi = {
    "title": "Machine Intelligence Track",
    "type": "and", 
    "value": [
        {
            "title": "Required",
            "type": "and",
            "value": parse_courses([
                "CS 37300 - Data Mining And Machine Learning",
				"CS 38100 - Introduction To The Analysis Of Algorithms ",
            ]) + [
				{
					"type": "or",
					"value": parse_courses([
						"CS 47100 - Introduction to Artificial Intelligence ",
						"CS 47300 - Web Information Search And Management ",
					])
				},
				{
					"type": "or",
					"value": parse_courses([
						"STAT 41600 - Probability",
						"MA 41600 - Probability",
						"STAT 51200 - Applied Regression Analysis "
					])
				}
			]
        },
        {
            "title": "Electives",
            "type": "choose 2",
            "value": parse_courses([
                "CS 31400 - Numerical Methods",
				"CS 34800 - Information Systems",
				"CS 35200 - Compilers: Principles And Practice",
				"CS 44800 - Introduction To Relational Database Systems",
				"CS 45600 - Programming Languages",
				"CS 47100 - Introduction to Artificial Intelligence",
				"CS 47300 - Web Information Search And Management",
				"CS 48300 - Introduction To The Theory Of Computation",
				"CS 49000 - Topics In Computer Sciences For Undergraduates ",
				"CS 57700 - Natural Language Processing",
				"CS 57800 - Statistical Machine Learning ",
            ])
        }
    ]
}

with open("tracks/mi.json", "w") as file:
    file.write(json.dumps(mi, indent=4))