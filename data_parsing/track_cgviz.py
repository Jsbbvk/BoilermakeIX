from utilities import parse_courses
import json

cgviz = {
    "title": "Computer Graphics and Visualization Track",
    "type": "and", 
    "value": [
        {
            "title": "Required",
            "type": "and",
            "value": parse_courses([
				"CS 33400 - Fundamentals Of Computer Graphics",
				"CS 31400 - Numerical Methods ",
            ]) + [
				{
					"type": "or",
					"value": parse_courses([
						"CS 37300 - Data Mining And Machine Learning",
						"CS 43400 - Advanced Computer Graphics",
						"CS 47100 - Introduction to Artificial Intelligence ",
					])
				}
			]
        },
        {
            "title": "Electives",
            "type": "pick 3",
            "value": parse_courses([
				"CS 35200 - Compilers: Principles And Practice",
				"CS 35400 - Operating Systems",
				"CS 37300 - Data Mining And Machine Learning",
				"CS 38100 - Introduction To The Analysis Of Algorithms",
				"CS 42200 - Computer Networks",
				"CS 43400 - Advanced Computer Graphics",
				"CS 45600 - Programming Languages",
				"CS 47100 - Introduction to Artificial Intelligence",
				"CS 49000 - Topics In Computer Sciences For Undergraduates - Intro to Data Viz",
			])
        }
    ]
}

with open("tracks/cgviz.json", "w") as file:
    file.write(json.dumps(cgviz, indent=4))