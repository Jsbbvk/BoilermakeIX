class Course:
    def __init__(self, subject, number, title="", credits=None, description="", prereqs=None) -> None:
        self.subject = subject
        self.number = number
        self.title = title
        self.url = f"https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in={subject}&crse_numb_in={number}"
        self.credits = credits
        self.description = description
        self.prereqs = prereqs

    def get_dict(self):
        res = { "subject": self.subject, "number": self.number, "url": self.url }
        if self.title != "": res["title"] = self.title
        if self.credits != None: res["credits"] = self.credits
        if self.description != "": res["description"] = self.description
        if self.prereqs != None: res["prereqs"] = self.prereqs
        return res


def parse_courses(course_strs):
    courses = []
    for thing in course_strs:
        text = thing.strip()
        subject = text[0:text.find(" ")]
        text = text[text.find(" ") + 1:]
        number = int(text[0: text.find(" ")])
        text = text[text.find("- ") + 2:]
        title = text
        courses.append({
            "type": "course",
            "value": Course(subject, number, title).get_dict()
        })
    return courses


TYPES = [
    "and",
    "or",
    "choose n",
    
    "course",
    "course_corequiste",
    "course_concurrent",
]