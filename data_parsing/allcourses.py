import json
import os

folders = ["major", "tracks", "ucore"]

courses = {}

def rec(obj):
	# print(obj)
	if obj["type"] not in ["course", "course_corequiste", "course_concurrent"]:
		for value in obj["value"]:
			rec(value)
	else:
		course_id = obj["value"]["subject"] + " " + str(obj["value"]["number"])
		courses[course_id] = {
			"course_id": course_id,
			"subject": obj["value"]["subject"],
			"number": obj["value"]["number"],
			"title": obj["value"]["title"]
		}


for folder in folders:
	files = os.listdir(folder)
	for file in files:
		data = None
		with open(os.path.join(folder, file), "r") as f:
			data = json.load(f)
		print (file)
		rec(data)

# x = list(courses.values())
x = list(courses.keys())
x.sort()
y = []
for i in x:
	y.append(courses[i])

with open("allcourses.json", "w") as file:
	file.write(json.dumps(y, indent=4))
