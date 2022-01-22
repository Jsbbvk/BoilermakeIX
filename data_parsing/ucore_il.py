import json
from utilities import parse_courses

il = parse_courses([
"AGR 20100 - Communications Across Cultures  (Fall 2013 and after only)",
"BIOL 11500 - Biology Resource Seminar",
"COM 25100 - Intro to Electronic Mass Media",
"COM 25100 - Communication, Information and Society",
"EDCI 27000 - Intro to Educational Technology  (Fall 2013 and after only)",
"EDPS 10500 - Academic and Career Planning  (Fall 2013 and after only)",
"ENGL 10600 - First Year Composition",
"ENGL 10800 - Accelerated First Year Composition",
"ENGL 30400 - Advanced Composition (Fall 2021 and after only)",
"ENGL 38000 - Issues in Rhetoric and Public Life (Fall 2021 and after only)",
"ENGR 13100 - Transforming Ideas to Innovation I",
"ENGR 13300 - Transforming Ideas to Innovation – EPICS",
"ENGR 14100 - Honors Creativity & Innovation in Engineering Design I",
"HONR 19903 - Interdisciplinary Approaches to Writing",
"ILS 17500 - Information Strategies For Hospitality & Tourism Management (Spring 2021 and after only)",
"MGMT 17500 - Information Strategies for Management Students",
"NUR 22301 - Foundations of Research and Evidence-based Practice  (Fall 2013 and after only)",
"PHIL 12000 - Critical Thinking",
"PHIL 26000 - Philosophy & Law",
"POL 30000 - Introduction to Political Analysis",
"PSY 10000 - Intro to the Science and Fields of Psychology",
"SCLA 10100 - Transformative Texts: Critical Thinking & Communication I: Antiquity to Modernity",
"STAT 11300 - Statistics and Society",
"STAT 30100 - Elementary Statistical Methods",
"TECH 12000 - Technology and the Individual  (Fall 2013 and after only)",
])

il = {
	"title": "Information Literacy (IL)",
	"type": "or",
	"value": il
}

with open("ucore/il.json", "w") as file:
	file.write(json.dumps(il, indent=4))