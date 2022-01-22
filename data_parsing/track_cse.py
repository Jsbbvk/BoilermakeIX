from utilities import parse_courses
import json

cse = {
    "title": "Computational Science and Engineering Track",
    "type": "and", 
    "value": [
        {
            "title": "Required",
            "type": "and",
            "value": parse_courses([
				"CS 31400 - Numerical Methods ",
				"CS 38100 - Introduction To The Analysis Of Algorithms ",
            ]) + [
				{
					"type": "or",
					"value": parse_courses([
						"MA 36600 - Ordinary Differential Equations",
						"MA 26600 - Ordinary Differential Equations ",
					])
				}
			]
        },
		{
			"title": "Applications",
			"type": "or",
			"value": parse_courses([
				"CS 37300 - Data Mining And Machine Learning",
				"CS 47300 - Web Information Search And Management",
				"CS 47800 - Introduction to Bioinformatics",
				"ECE 30100 - Signals And Systems",
				"IE 33600 - Operations Research - Stochastic Models ",
			])
		},
		{
			"title": "Systems",
			"type": "or",
			"value": parse_courses([
				"CS 35200 - Compilers: Principles And Practice",
				"CS 35300 - Principles Of Concurrency And Parallelism",
				"CS 35400 - Operating Systems ",
			])
		},
        {
            "title": "Electives",
            "type": "pick 2",
            "value": parse_courses([
				"CS 30700 - Software Engineering I",
				"CS 42200 - Computer Networks",
				"CS 45600 - Programming Languages",
				"CS 47100 - Introduction to Artificial Intelligence",
				"CS 48300 - Introduction To The Theory Of Computation",
				"CS 51400 - Numerical Analysis",
				"CS 51500 - Numerical Linear Algebra",
				"CS 52000 - Computational Methods In Optimization",
				"CS 52500 - Parallel Computing",
				"IE 33500 - Operations Research - Optimization",
				"MA 34100 - Foundations Of Analysis",
				"MA 44000 - Honors Real Analysis I ",
			])
        }
    ]
}

with open("tracks/cse.json", "w") as file:
    file.write(json.dumps(cse, indent=4))