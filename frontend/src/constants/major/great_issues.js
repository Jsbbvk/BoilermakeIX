const GREAT_ISSUES = JSON.parse(`{
    "title": "Greate Issues in Science",
    "type": "or",
    "value": [
        {
            "type": "course",
            "value": {
                "subject": "BIOL",
                "number": 31200,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=BIOL&crse_numb_in=31200",
                "title": "Great Issues Genomics And Society"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "BIOL",
                "number": 39500,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=BIOL&crse_numb_in=39500",
                "title": "Special Assignments"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "BIOL",
                "number": 48300,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=BIOL&crse_numb_in=48300",
                "title": "Great Issues: Environmental And Conservation Biology"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "CHM",
                "number": 49000,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHM&crse_numb_in=49000",
                "title": "Selected Topics In Chemistry For Upper-Division Students"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "CNIT",
                "number": 49900,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CNIT&crse_numb_in=49900",
                "title": "Topics In Computer And Information Technology"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "EAPS",
                "number": 30100,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=EAPS&crse_numb_in=30100",
                "title": "Oil !"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "EAPS",
                "number": 32700,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=EAPS&crse_numb_in=32700",
                "title": "Climate, Science And Society"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "EAPS",
                "number": 36000,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=EAPS&crse_numb_in=36000",
                "title": "Great Issues In Science And Society"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "EAPS",
                "number": 36400,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=EAPS&crse_numb_in=36400",
                "title": "Natural Hazards: Science And Society"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "EAPS",
                "number": 37500,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=EAPS&crse_numb_in=37500",
                "title": "Great Issues - Fossil Fuels, Energy And Society"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "HIST",
                "number": 31305,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=31305",
                "title": "Medical Devices And Innovation"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "HIST",
                "number": 35205,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=35205",
                "title": "Death, Disease And Medicine In Twentieth Century American History"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "HONR",
                "number": 29900,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HONR&crse_numb_in=29900",
                "title": "Interdisciplinary Honors - Experiential Learning"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "HONR",
                "number": 39900,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HONR&crse_numb_in=39900",
                "title": "Interdisciplinary Honors - Special Topics Seminar"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "MA",
                "number": 27900,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MA&crse_numb_in=27900",
                "title": "Modern Mathematics In Science And Society"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "ME",
                "number": 49200,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ME&crse_numb_in=49200",
                "title": "Technology And Values"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "PHYS",
                "number": 31700,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHYS&crse_numb_in=31700",
                "title": "Special Nuclear Materials"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "PHYS",
                "number": 49000,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHYS&crse_numb_in=49000",
                "title": "Special Assignments"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "POL",
                "number": 32700,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=32700",
                "title": "Global Green Politics"
            }
        }
    ]
}`)

export default GREAT_ISSUES
