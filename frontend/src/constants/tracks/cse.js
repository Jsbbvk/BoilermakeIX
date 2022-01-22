const CSE = JSON.parse(`{
    "title": "Computational Science and Engineering Track",
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
                        "number": 31400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=31400",
                        "title": "Numerical Methods"
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
                    "type": "or",
                    "value": [
                        {
                            "type": "course",
                            "value": {
                                "subject": "MA",
                                "number": 36600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MA&crse_numb_in=36600",
                                "title": "Ordinary Differential Equations"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "MA",
                                "number": 26600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MA&crse_numb_in=26600",
                                "title": "Ordinary Differential Equations"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "title": "Applications",
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
                        "number": 47300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=47300",
                        "title": "Web Information Search And Management"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CS",
                        "number": 47800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=47800",
                        "title": "Introduction to Bioinformatics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ECE",
                        "number": 30100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ECE&crse_numb_in=30100",
                        "title": "Signals And Systems"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "IE",
                        "number": 33600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=IE&crse_numb_in=33600",
                        "title": "Operations Research - Stochastic Models"
                    }
                }
            ]
        },
        {
            "title": "Systems",
            "type": "or",
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
                        "number": 35300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=35300",
                        "title": "Principles Of Concurrency And Parallelism"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CS",
                        "number": 35400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=35400",
                        "title": "Operating Systems"
                    }
                }
            ]
        },
        {
            "title": "Electives",
            "type": "pick 2",
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
                        "number": 42200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=42200",
                        "title": "Computer Networks"
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
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CS",
                        "number": 47100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=47100",
                        "title": "Introduction to Artificial Intelligence"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CS",
                        "number": 48300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=48300",
                        "title": "Introduction To The Theory Of Computation"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CS",
                        "number": 51400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=51400",
                        "title": "Numerical Analysis"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CS",
                        "number": 51500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=51500",
                        "title": "Numerical Linear Algebra"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CS",
                        "number": 52000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=52000",
                        "title": "Computational Methods In Optimization"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CS",
                        "number": 52500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CS&crse_numb_in=52500",
                        "title": "Parallel Computing"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "IE",
                        "number": 33500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=IE&crse_numb_in=33500",
                        "title": "Operations Research - Optimization"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "MA",
                        "number": 34100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MA&crse_numb_in=34100",
                        "title": "Foundations Of Analysis"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "MA",
                        "number": 44000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MA&crse_numb_in=44000",
                        "title": "Honors Real Analysis I"
                    }
                }
            ]
        }
    ]
}`)

export default CSE