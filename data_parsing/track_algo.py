from utilities import parse_courses
import json

algo = {
    "title": "Algorithmic Foundations Track",
    "type": "and", 
    "value": [
        {
            "title": "Required",
            "type": "and",
            "value": parse_courses([
				"CS 38100 - Introduction To The Analysis Of Algorithms ",
            ]) + [
				{
					"type": "or",
					"value": parse_courses([
						"CS 35200 - Compilers: Principles And Practice",
						"CS 35400 - Operating Systems ",
					])
				},
				{
					"type": "or",
					"value": parse_courses([
						"CS 37300 - Data Mining And Machine Learning",
						"CS 47100 - Introduction to Artificial Intelligence ",
					])
				}
			]
        },
        {
            "title": "Electives",
            "type": "choose 3",
            "value": parse_courses([
                "CS 31400 - Numerical Methods",
				"CS 33400 - Fundamentals Of Computer Graphics",
				"CS 35300 - Principles Of Concurrency And Parallelism",
				"CS 35500 - Introduction To Cryptography",
				"CS 44800 - Introduction To Relational Database Systems",
				"CS 45600 - Programming Languages",
				"CS 48300 - Introduction To The Theory Of Computation ",
            ]) + [
				{
					"type": "or",
					"value": parse_courses([
						"MA 34100 - Foundations Of Analysis",
						"MA 35301 - Linear Algebra II",
						"MA 36200 - Topics In Vector Calculus",
						"MA 36600 - Ordinary Differential Equations",
						"MA 38500 - Introduction To Logic",
						"MA 42100 - Linear Programming And Optimization Techniques",
						"MA 45300 - Elements Of Algebra I",
					])
				}
			]
        }
    ]
}

with open("tracks/algo.json", "w") as file:
    file.write(json.dumps(algo, indent=4))