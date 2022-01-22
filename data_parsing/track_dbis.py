from utilities import parse_courses
import json

dbis = {
    "title": "Database and Information Systems Track",
    "type": "and", 
    "value": [
        {
            "title": "Required",
            "type": "and",
            "value": parse_courses([
				"CS 34800 - Information Systems",
				"CS 38100 - Introduction To The Analysis Of Algorithms",
				"CS 44800 - Introduction To Relational Database Systems ",
            ]) + [
				{
					"type": "or",
					"value": parse_courses([
						"CS 37300 - Data Mining And Machine Learning",
						"CS 47300 - Web Information Search And Management",
					])
				}
			]
        },
        {
            "title": "Electives",
            "type": "and",
            "value": [
				{
					"type": "or",
					"value": parse_courses([
						"CS 35200 - Compilers: Principles And Practice",
						"CS 35300 - Principles Of Concurrency And Parallelism",
						"CS 35400 - Operating Systems ",
					])
				},
				{
					"type": "or",
					"value": parse_courses([
						"CS 35500 - Introduction To Cryptography",
						"CS 42600 - Computer Security ",
					])
				},
				{
					"type": "or",
					"value": parse_courses([
						"CS 37300 - Data Mining And Machine Learning",
						"CS 42200 - Computer Networks",
						"CS 47100 - Introduction to Artificial Intelligence",
						"CS 47300 - Web Information Search And Management",
						"CS 47800 - Introduction to Bioinformatics",
						"CS 48300 - Introduction To The Theory Of Computation ",
						"CS 49000 - Topics In Computer Sciences For Undergraduates - (Senior Project)",
						"CS 49700 - Honors Research Project - (Senior Project)",
					])
				}
			]
        }
    ]
}

with open("tracks/dbis.json", "w") as file:
    file.write(json.dumps(dbis, indent=4))