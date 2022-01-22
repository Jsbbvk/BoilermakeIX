const IL = JSON.parse(`
{
    "title": "Information Literacy (IL)",
    "type": "or",
    "value": [
        {
            "type": "course",
            "value": {
                "subject": "AGR",
                "number": 20100,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AGR&crse_numb_in=20100",
                "title": "Communications Across Cultures  (Fall 2013 and after only)"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "BIOL",
                "number": 11500,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=BIOL&crse_numb_in=11500",
                "title": "Biology Resource Seminar"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "COM",
                "number": 25100,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=COM&crse_numb_in=25100",
                "title": "Intro to Electronic Mass Media"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "COM",
                "number": 25100,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=COM&crse_numb_in=25100",
                "title": "Communication, Information and Society"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "EDCI",
                "number": 27000,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=EDCI&crse_numb_in=27000",
                "title": "Intro to Educational Technology  (Fall 2013 and after only)"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "EDPS",
                "number": 10500,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=EDPS&crse_numb_in=10500",
                "title": "Academic and Career Planning  (Fall 2013 and after only)"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "ENGL",
                "number": 10600,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=10600",
                "title": "First Year Composition"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "ENGL",
                "number": 10800,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=10800",
                "title": "Accelerated First Year Composition"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "ENGL",
                "number": 30400,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=30400",
                "title": "Advanced Composition (Fall 2021 and after only)"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "ENGL",
                "number": 38000,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=38000",
                "title": "Issues in Rhetoric and Public Life (Fall 2021 and after only)"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "ENGR",
                "number": 13100,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGR&crse_numb_in=13100",
                "title": "Transforming Ideas to Innovation I"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "ENGR",
                "number": 13300,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGR&crse_numb_in=13300",
                "title": "Transforming Ideas to Innovation \u2013 EPICS"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "ENGR",
                "number": 14100,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGR&crse_numb_in=14100",
                "title": "Honors Creativity & Innovation in Engineering Design I"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "HONR",
                "number": 19903,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HONR&crse_numb_in=19903",
                "title": "Interdisciplinary Approaches to Writing"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "ILS",
                "number": 17500,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ILS&crse_numb_in=17500",
                "title": "Information Strategies For Hospitality & Tourism Management (Spring 2021 and after only)"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "MGMT",
                "number": 17500,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MGMT&crse_numb_in=17500",
                "title": "Information Strategies for Management Students"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "NUR",
                "number": 22301,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=NUR&crse_numb_in=22301",
                "title": "Foundations of Research and Evidence-based Practice  (Fall 2013 and after only)"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "PHIL",
                "number": 12000,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=12000",
                "title": "Critical Thinking"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "PHIL",
                "number": 26000,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=26000",
                "title": "Philosophy & Law"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "POL",
                "number": 30000,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=30000",
                "title": "Introduction to Political Analysis"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "PSY",
                "number": 10000,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=10000",
                "title": "Intro to the Science and Fields of Psychology"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "SCLA",
                "number": 10100,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SCLA&crse_numb_in=10100",
                "title": "Transformative Texts: Critical Thinking & Communication I: Antiquity to Modernity"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "STAT",
                "number": 11300,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=STAT&crse_numb_in=11300",
                "title": "Statistics and Society"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "STAT",
                "number": 30100,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=STAT&crse_numb_in=30100",
                "title": "Elementary Statistical Methods"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "TECH",
                "number": 12000,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=TECH&crse_numb_in=12000",
                "title": "Technology and the Individual  (Fall 2013 and after only)"
            }
        }
    ]
}
`)

export default IL
