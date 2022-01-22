from re import sub
from utilities import Course
import requests
from lxml import html

headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
    "Connection": "keep-alive",
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0",
}

def get_course(subject, number):
    url = f"https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in={subject}&crse_numb_in={number}"
    try:
        # TODO: verify=false is VERY BAD, Get a valid SSL certificate instead
        # response = requests.get(url=url, headers=headers, verify=False)
        response = requests.get(url=url, headers=headers)
        doc = html.fromstring(response.text)
        text: str = doc.find_class("ntdefault")[0].text_content()
        text = text[text.find("\n") + 1:]
        
        title = doc.find_class("nttitle")[0].text_content()
        title = title[title.find("- ") + 2:]
        
        
        x = text.find("Credit Hours:") + 14
        credits = text[x:text.find(" " , x)]
        credits_len = len(credits)
        if credits[-1] == ".": credits = credits[0:-1]
        credits = float(credits)
        
        text = text[x + credits_len + 1:].strip()
        description = text[0:text.find("\n")]

        p_words: list[str] = ("(" + text[text.find("Prerequisites:") + 14::] + ")").replace("\n", "").replace("(", " ( ").replace(")", " ) ").split()
        prereqs = []
        for i in range(0, len(p_words)):
            word = p_words[i].replace(" ", "")
            if word == "(":
                prereqs.append({
                    "type": "and",
                    "value": []
                })
            elif word == "and" or word == "or":
                prereqs[-1]["type"] = word
            elif word.isalpha() and word.isupper() and i < len(p_words) - 1:
                next = p_words[i + 1]
                if next.isnumeric():
                    prereqs[-1]["value"].append({
                        "type": "course",
                        "value": Course(word, int(next)).get_dict()
                    })
            elif word == "concurrently]":
                if len(prereqs[-1]["value"]) > 0:
                    prereqs[-1]["value"][-1]["type"] = "course_concurrent"
            elif word == ")":
                if len(prereqs) != 1:
                    last = prereqs.pop()
                    prereqs[-1]["value"].append(last)

        if subject == "CS" and number == 18000:
            prereqs = [{
                "type": "and",
                "value": [
                    {
                        "type": "course_corequisite",
                        "value": Course("CS", 19100, "Freshman Resources Seminar").get_dict()
                    },
                    {
                        "type": "course_corequisite",
                        "value": Course("CS", 19300, "Tools").get_dict()
                    },
                    prereqs[0]
                ]
            }]

        return Course(subject, number, title, credits, description, prereqs[0]).get_dict()
    except Exception as e:
        print (e)
        return None