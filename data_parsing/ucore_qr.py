from utilities import parse_courses
import json

qr = parse_courses([
"EDCI 22200 - Knowing the World Through Mathematics (Fall 2020 and after only)",
"MA 13800 - Mathematics for Elementary Teachers II  (Fall 2013 and after only)",
"MA 15300 - Algebra and Trigonometry I",
"MA 15400 - Algebra and Trigonometry II  (Spring 2016 and earlier only)",
"MA 15555 - Quantitative Reasoning",
"MA 15800 - Functions and Trigonometry",
"MA 15910 - Introduction to Calculus",
"MA 16010 - Applied Calculus I",
"MA 16020 - Applied Calculus II",
"MA 16100 - Plane Analytic Geometry and Calculus I",
"MA 16200 - Plane Analytic Geometry and Calculus II",
"MA 16500 - Analytic Geometry and Calculus I",
"MA 16600 - Analytic Geometry and Calculus II",
"MA 17300 - Calculus and Analytic Geometry II",
"MA 17400 - Multivariable Calculus",
"MA 18100 - Honors Calculus I",
"MA 18200 - Honors Calculus II",
"MA 19000 - Quantitative Reasoning",
"MA 22000 - Introduction to Calculus",
"MA 22100 - Calculus for Technology I",
"MA 22200 - Calculus for Technology II",
"MA 22300 - Introductory Analysis I",
"MA 22400 - Introductory Analysis II",
"MA 23100 - Calculus for the Life Sciences I",
"MA 23200 - Calculus for the Life Sciences II",
"MA 26100 - Multivariate Calculus",
"MA 26200 - Plane Analytic Geometry and Calculus II",
"MA 26500 - Linear Algebra",
"MA 26600 - Ordinary Differential Equations",
"MA 27100 - Several Variable Calculus",
"MA 27101 - Honors Multivariate Calculus",
"MA 35100 - Elementary Linear Algebra",
"MA 36600 - Ordinary Differential Equations",
"PHIL 15000 - Principles Of Logic",
])

qr = {
	"title": "Quantitative Reasoning (QR)",
	"type": "or",
	"value": qr
}

with open("ucore/qr.json", "w") as file:
	file.write(json.dumps(qr, indent=4))