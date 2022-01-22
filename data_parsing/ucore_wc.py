import json
from utilities import parse_courses

wc = parse_courses([
"AMST 10100 - America and the World",
"CLCS 23100 - Survey of Latin Literature  (Summer 2019 and earlier only)",
"CLCS 23700 - Gender & Sexuality in Greek & Roman Antiquity  (Summer 2019 and earlier only)",
"CLCS 33900 - Literature and the Law  (Summer 2019 and earlier only)",
"COM 20400 - Critical Perspectives on Communication",
"EDCI 20500 - Exploring Teaching as a Career",
"ENGL 10600 - First Year Composition",
"ENGL 10800 - Accelerated First Year Composition",
"ENGL 30400 - Advanced Composition (Fall 2021 and after only)",
"ENGL 38000 - Issues in Rhetoric and Public Life (Fall 2021 and after only)",
"HONR 19903 - Interdisciplinary Approaches to Writing",
"PHIL 26000 - Philosophy & Law (Summer 2023 and earlier only)",
"SCLA 10100 - Transformative Texts: Critical Thinking & Communication I: Antiquity to Modernity",
"SPAN 33000 - Spanish And Latin American Cinema (Summer 2020 and earlier only)",
])

wc = {
	"title": "Written Communication (WC)",
	"type": "or",
	"value": wc
}

with open("ucore/wc.json", "w") as file:
	file.write(json.dumps(wc, indent=4))