from cgitb import text
from re import sub
from utilities import Course
import requests
from lxml import html
import json

headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
    "Connection": "keep-alive",
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0",
}


res = requests.get("https://www.purdue.edu/provost/students/s-initiatives/curriculum/courses.html", headers=headers, verify=False)

with open("output.html", "w") as file:
	file.write(res.text)