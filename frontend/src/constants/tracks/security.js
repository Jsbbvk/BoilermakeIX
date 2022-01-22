const SECURITY = JSON.parse(`{
    "title": "Security Track",
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
                        "number": 35400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=35400",
                        "title": "Operating Systems"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CS",
                        "number": 35500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=35500",
                        "title": "Introduction To Cryptography"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CS",
                        "number": 42600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=42600",
                        "title": "Computer Security"
                    }
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
                        "title": "Compilers: Principles And Practice"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CS",
                        "number": 38100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=38100",
                        "title": "Introduction To The Analysis Of Algorithms"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CS",
                        "number": 42200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=42200",
                        "title": "Computer Networks"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CS",
                        "number": 49000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=49000",
                        "title": "Topics In Computer Sciences For Undergraduates"
                    }
                },
                {
                    "type": "or",
                    "value": [
                        {
                            "type": "course",
                            "value": {
                                "subject": "CS",
                                "number": 30700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=30700",
                                "title": "Software Engineering I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CS",
                                "number": 40800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=40800",
                                "title": "Software Testing"
                            }
                        }
                    ]
                },
                {
                    "type": "or",
                    "value": [
                        {
                            "type": "course",
                            "value": {
                                "subject": "CS",
                                "number": 34800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=34800",
                                "title": "Information Systems"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CS",
                                "number": 44800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=44800",
                                "title": "Introduction To Relational Database Systems"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CS",
                                "number": 47300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=47300",
                                "title": "Web Information Search And Management"
                            }
                        }
                    ]
                },
                {
                    "type": "or",
                    "value": [
                        {
                            "type": "course",
                            "value": {
                                "subject": "CS",
                                "number": 35300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=35300",
                                "title": "Principles Of Concurrency And Parallelism"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CS",
                                "number": 45600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=45600",
                                "title": "Programming Languages"
                            }
                        }
                    ]
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
                                "title": "Data Mining And Machine Learning"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CS",
                                "number": 47100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=47100",
                                "title": "Introduction to Artificial Intelligence"
                            }
                        }
                    ]
                },
                {
                    "type": "or",
                    "value": [
                        {
                            "type": "course",
                            "value": {
                                "subject": "CS",
                                "number": 48900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=48900",
                                "title": "Embedded Systems"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CS",
                                "number": 49000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=49000",
                                "title": "Topics In Computer Sciences For Undergraduates"
                            }
                        }
                    ]
                }
            ]
        }
    ]
}`)

export default SECURITY
