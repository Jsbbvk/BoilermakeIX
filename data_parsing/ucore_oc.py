import json
from utilities import parse_courses

oc = parse_courses([
	"COM 11400 - Fundamentals of Speech Communication",
	"COM 21700 - Science Writing and Presentations",
	"EDCI 49600 - Student Teaching in the Elementary School (Fall 2021 and after only)",
	"EDCI 49800 - Supervised Teaching (Fall 2021 and after only)",
	"EDPS 31500 - Collaborative Leadership: Interpersonal Skills  (Fall 2013 and after only)",
	"EDPS 49800 - Supervised Teaching- Special Education (Fall 2021 and after only)",
	"HDFS 45000 - Supervised Teaching in Inclusive Programs for Young Children (Fall 2021 and after only)",
	"SCLA 10200 - Transformative Texts: Critical Thinking & Communication II: Modern World",
])

oc = {
	"title": "Oral Communication (OC)",
	"type": "or",
	"value": oc
}

with open("ucore/oc.json", "w") as file:
	file.write(json.dumps(oc, indent=4))