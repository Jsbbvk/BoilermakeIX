import json
from utilities import Course

math = {
    "title": "Mathematics",
    "type": "and",
    "value": [
        {
            "type": "or",
            "value": [
                {
                    "type": "course",
                    "value": Course("MA", 16100, "Plane Analytic Geometry And Calculus I").get_dict()
                },
                {
                    "type": "course",
                    "value": Course("MA", 16500, "Analytic Geometry And Calculus I").get_dict()
                },
            ]
        },
        {
            "type": "or",
            "value": [
                {
                    "type": "course",
                    "value": Course("MA", 16200, "Plane Analytic Geometry And Calculus II").get_dict()
                },
                {
                    "type": "course",
                    "value": Course("MA", 16600, "Analytic Geometry And Calculus II").get_dict()
                },
            ]
        },
        {
            "type": "or",
            "value": [
                {
                    "type": "course",
                    "value": Course("MA", 26100, "Multivariate Calculus").get_dict()
                },
                {
                    "type": "course",
                    "value": Course("MA", 27101, "Honors Multivariate Calculus").get_dict()
                },
            ]
        },
        {
            "type": "or",
            "value": [
                {
                    "type": "course",
                    "value": Course("MA", 26500, "Linear Algebra").get_dict()
                },
                {
                    "type": "course",
                    "value": Course("MA", 35100, "Elementary Linear Algebra").get_dict()
                },
            ]
        },
    ]
}

with open("math.json", "w") as file:
    file.write(json.dumps(math, indent=4))

stats = {
    "title": "Statistics",
    "type": "or",
    "value": [
        {
            "type": "course",
            "value": Course("STAT", 35000, "Introduction To Statistics").get_dict()
        },
        {
            "type": "course",
            "value": Course("STAT", 51100, "Statistical Methods").get_dict()
        },
    ]
}

with open("stats.json", "w") as file:
    file.write(json.dumps(stats, indent=4))

cs_core = {
    "title": "CS Core",
    "type": "and",
    "value": [
        {
            "type": "course",
            "value": Course("CS", 19100, "Freshman Resources Seminar").get_dict()
        },
        {
            "type": "course",
            "value": Course("CS", 19300, "Tools").get_dict()
        },
        {
            "type": "course",
            "value": Course("CS", 18000, "Problem Solving And Object-Oriented Programming").get_dict()
        },
        {
            "type": "course",
            "value": Course("CS", 18200, "Foundations Of Computer Science").get_dict()
        },
        {
            "type": "course",
            "value": Course("CS", 24000, "Programming In C").get_dict()
        },
        {
            "type": "course",
            "value": Course("CS", 25000, "Computer Architecture").get_dict()
        },
        {
            "type": "course",
            "value": Course("CS", 25100, "Data Structures And Algorithms").get_dict()
        },
        {
            "type": "course",
            "value": Course("CS", 25200, "Systems Programming ").get_dict()
        },
    ]
}

with open("cs_core.json", "w") as file:
    file.write(json.dumps(cs_core, indent=4))