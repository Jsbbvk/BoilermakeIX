const CGVIZ = JSON.parse(`{
    "title": "Database and Information Systems Track",
    "type": "and",
    "value": [
        {
            "title": "Required",
            "type": "and",
            "value": [
                {
                    "type": "course",
                    "value": {
                        "subject": "CS",
                        "number": 33400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=33400",
                        "title": "Fundamentals Of Computer Graphics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CS",
                        "number": 31400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=31400",
                        "title": "Numerical Methods"
                    }
                },
                {
                    "type": "or",
                    "value": [
                        {
                            "type": "course",
                            "value": {
                                "subject": "CS",
                                "number": 37300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=37300",
                                "title": "Data Mining And Machine LearningCS 43400 - Advanced Computer GraphicsCS 47100 - Introduction to Artificial Intelligence"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "title": "Electives",
            "type": "pick 3",
            "value": [
                {
                    "type": "course",
                    "value": {
                        "subject": "CS",
                        "number": 35200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=35200",
                        "title": "Compilers: Principles And PracticeCS 35400 - Operating SystemsCS 37300 - Data Mining And Machine LearningCS 38100 - Introduction To The Analysis Of AlgorithmsCS 42200 - Computer NetworksCS 43400 - Advanced Computer GraphicsCS 45600 - Programming LanguagesCS 47100 - Introduction to Artificial IntelligenceCS 49000 - Topics In Computer Sciences For Undergraduates - Intro to Data Viz"
                    }
                }
            ]
        }
    ]
}`)

export default CGVIZ
