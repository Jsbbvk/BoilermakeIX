const CULTURE_LANG = JSON.parse(`{
    "title": "Cultural Diversity (Language & Culture)",
    "type": "or",
    "value": [
        {
            "title": "3 Language",
            "type": "choose 3",
            "value": [
                {
                    "type": "course",
                    "value": {
                        "subject": "ARAB",
                        "number": 10100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ARAB&crse_numb_in=10100",
                        "title": "Standard Arabic Level I"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ARAB",
                        "number": 10200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ARAB&crse_numb_in=10200",
                        "title": "Standard Arabic Level II"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ARAB",
                        "number": 20100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ARAB&crse_numb_in=20100",
                        "title": "Standard Arabic Level III"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ASL",
                        "number": 10100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ASL&crse_numb_in=10100",
                        "title": "American Sign Language I"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ASL",
                        "number": 10200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ASL&crse_numb_in=10200",
                        "title": "American Sign Language II"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ASL",
                        "number": 20100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ASL&crse_numb_in=20100",
                        "title": "American Sign Language III"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CHNS",
                        "number": 10100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHNS&crse_numb_in=10100",
                        "title": "Chinese Level I"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CHNS",
                        "number": 10200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHNS&crse_numb_in=10200",
                        "title": "Chinese Level II"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CHNS",
                        "number": 20100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHNS&crse_numb_in=20100",
                        "title": "Chinese Level III"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "FR",
                        "number": 10100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=10100",
                        "title": "French Level I"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "FR",
                        "number": 10200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=10200",
                        "title": "French Level II"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "FR",
                        "number": 20100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=20100",
                        "title": "French Level III"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "GER",
                        "number": 10100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=10100",
                        "title": "German Level I"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "GER",
                        "number": 10200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=10200",
                        "title": "German Level II"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "GER",
                        "number": 20100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=20100",
                        "title": "German Level III"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HEBR",
                        "number": 10100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HEBR&crse_numb_in=10100",
                        "title": "Modern Hebrew Level I"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HEBR",
                        "number": 10200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HEBR&crse_numb_in=10200",
                        "title": "Modern Hebrew II"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HEBR",
                        "number": 20100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HEBR&crse_numb_in=20100",
                        "title": "Modern Hebrew Level III"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HEBR",
                        "number": 12100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HEBR&crse_numb_in=12100",
                        "title": "Biblical Hebrew Level I"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HEBR",
                        "number": 12200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HEBR&crse_numb_in=12200",
                        "title": "Biblical Hebrew Level II"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HEBR",
                        "number": 22100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HEBR&crse_numb_in=22100",
                        "title": "Biblical Hebrew Level III"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ITAL",
                        "number": 10100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ITAL&crse_numb_in=10100",
                        "title": "Italian Level I"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ITAL",
                        "number": 10200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ITAL&crse_numb_in=10200",
                        "title": "Italian Level II"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ITAL",
                        "number": 20100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ITAL&crse_numb_in=20100",
                        "title": "Italian Level III"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "JPNS",
                        "number": 10100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JPNS&crse_numb_in=10100",
                        "title": "Japanese Level I"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "JPNS",
                        "number": 10200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JPNS&crse_numb_in=10200",
                        "title": "Japanese Level II"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "JPNS",
                        "number": 20100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JPNS&crse_numb_in=20100",
                        "title": "Japanese Level III"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "KOR",
                        "number": 10100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=KOR&crse_numb_in=10100",
                        "title": "Korean Level I"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "KOR",
                        "number": 10200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=KOR&crse_numb_in=10200",
                        "title": "Korean Level II"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "KOR",
                        "number": 20100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=KOR&crse_numb_in=20100",
                        "title": "Korean Level III"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LATN",
                        "number": 10100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LATN&crse_numb_in=10100",
                        "title": "Latin Level I"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LATN",
                        "number": 10200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LATN&crse_numb_in=10200",
                        "title": "Latin Level II"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LATN",
                        "number": 20100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LATN&crse_numb_in=20100",
                        "title": "Latin Level III"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PTGS",
                        "number": 10100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PTGS&crse_numb_in=10100",
                        "title": "Portuguese Level I"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PTGS",
                        "number": 10200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PTGS&crse_numb_in=10200",
                        "title": "Portuguese Level II"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PTGS",
                        "number": 20100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PTGS&crse_numb_in=20100",
                        "title": "Portuguese Level III"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "RUSS",
                        "number": 10100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=RUSS&crse_numb_in=10100",
                        "title": "Russian Level I"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "RUSS",
                        "number": 10200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=RUSS&crse_numb_in=10200",
                        "title": "Russian Level II"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "RUSS",
                        "number": 20100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=RUSS&crse_numb_in=20100",
                        "title": "Russian Level III"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 10100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=10100",
                        "title": "Spanish Level I"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 10200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=10200",
                        "title": "Spanish Level II"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 20100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=20100",
                        "title": "Spanish Level III"
                    }
                }
            ]
        },
        {
            "title": "2 Language and Culture",
            "type": "and",
            "value": [
                {
                    "type": "choose 2",
                    "value": [
                        {
                            "type": "course",
                            "value": {
                                "subject": "ARAB",
                                "number": 10100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ARAB&crse_numb_in=10100",
                                "title": "Standard Arabic Level I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ARAB",
                                "number": 10200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ARAB&crse_numb_in=10200",
                                "title": "Standard Arabic Level II"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ARAB",
                                "number": 20100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ARAB&crse_numb_in=20100",
                                "title": "Standard Arabic Level III"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ASL",
                                "number": 10100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ASL&crse_numb_in=10100",
                                "title": "American Sign Language I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ASL",
                                "number": 10200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ASL&crse_numb_in=10200",
                                "title": "American Sign Language II"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ASL",
                                "number": 20100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ASL&crse_numb_in=20100",
                                "title": "American Sign Language III"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CHNS",
                                "number": 10100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHNS&crse_numb_in=10100",
                                "title": "Chinese Level I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CHNS",
                                "number": 10200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHNS&crse_numb_in=10200",
                                "title": "Chinese Level II"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CHNS",
                                "number": 20100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHNS&crse_numb_in=20100",
                                "title": "Chinese Level III"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "FR",
                                "number": 10100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=10100",
                                "title": "French Level I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "FR",
                                "number": 10200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=10200",
                                "title": "French Level II"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "FR",
                                "number": 20100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=20100",
                                "title": "French Level III"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "GER",
                                "number": 10100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=10100",
                                "title": "German Level I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "GER",
                                "number": 10200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=10200",
                                "title": "German Level II"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "GER",
                                "number": 20100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=20100",
                                "title": "German Level III"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HEBR",
                                "number": 10100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HEBR&crse_numb_in=10100",
                                "title": "Modern Hebrew Level I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HEBR",
                                "number": 10200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HEBR&crse_numb_in=10200",
                                "title": "Modern Hebrew II"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HEBR",
                                "number": 20100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HEBR&crse_numb_in=20100",
                                "title": "Modern Hebrew Level III"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HEBR",
                                "number": 12100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HEBR&crse_numb_in=12100",
                                "title": "Biblical Hebrew Level I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HEBR",
                                "number": 12200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HEBR&crse_numb_in=12200",
                                "title": "Biblical Hebrew Level II"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HEBR",
                                "number": 22100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HEBR&crse_numb_in=22100",
                                "title": "Biblical Hebrew Level III"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ITAL",
                                "number": 10100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ITAL&crse_numb_in=10100",
                                "title": "Italian Level I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ITAL",
                                "number": 10200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ITAL&crse_numb_in=10200",
                                "title": "Italian Level II"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ITAL",
                                "number": 20100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ITAL&crse_numb_in=20100",
                                "title": "Italian Level III"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "JPNS",
                                "number": 10100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JPNS&crse_numb_in=10100",
                                "title": "Japanese Level I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "JPNS",
                                "number": 10200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JPNS&crse_numb_in=10200",
                                "title": "Japanese Level II"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "JPNS",
                                "number": 20100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JPNS&crse_numb_in=20100",
                                "title": "Japanese Level III"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "KOR",
                                "number": 10100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=KOR&crse_numb_in=10100",
                                "title": "Korean Level I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "KOR",
                                "number": 10200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=KOR&crse_numb_in=10200",
                                "title": "Korean Level II"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "KOR",
                                "number": 20100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=KOR&crse_numb_in=20100",
                                "title": "Korean Level III"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LATN",
                                "number": 10100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LATN&crse_numb_in=10100",
                                "title": "Latin Level I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LATN",
                                "number": 10200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LATN&crse_numb_in=10200",
                                "title": "Latin Level II"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LATN",
                                "number": 20100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LATN&crse_numb_in=20100",
                                "title": "Latin Level III"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PTGS",
                                "number": 10100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PTGS&crse_numb_in=10100",
                                "title": "Portuguese Level I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PTGS",
                                "number": 10200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PTGS&crse_numb_in=10200",
                                "title": "Portuguese Level II"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PTGS",
                                "number": 20100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PTGS&crse_numb_in=20100",
                                "title": "Portuguese Level III"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "RUSS",
                                "number": 10100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=RUSS&crse_numb_in=10100",
                                "title": "Russian Level I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "RUSS",
                                "number": 10200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=RUSS&crse_numb_in=10200",
                                "title": "Russian Level II"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "RUSS",
                                "number": 20100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=RUSS&crse_numb_in=20100",
                                "title": "Russian Level III"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 10100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=10100",
                                "title": "Spanish Level I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 10200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=10200",
                                "title": "Spanish Level II"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 20100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=20100",
                                "title": "Spanish Level III"
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
                                "subject": "AAS",
                                "number": 27100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=27100",
                                "title": "Introduction To African American Studies"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AAS",
                                "number": 27700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=27700",
                                "title": "African American Popular Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AAS",
                                "number": 35900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=35900",
                                "title": "Black Women Writers"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AAS",
                                "number": 37000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=37000",
                                "title": "Black Women Rising"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AAS",
                                "number": 37100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=37100",
                                "title": "The African American Experience"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AAS",
                                "number": 37300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=37300",
                                "title": "Issues In African American Studies"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AAS",
                                "number": 37500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=37500",
                                "title": "The Black Family"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AAS",
                                "number": 37600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=37600",
                                "title": "The Black Male"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AAS",
                                "number": 37700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=37700",
                                "title": "African American Sexuality And Society"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AAS",
                                "number": 39200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=39200",
                                "title": "Caribbean History And Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AAS",
                                "number": 47300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=47300",
                                "title": "Blacks In Hollywood Film"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AAS",
                                "number": 49100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=49100",
                                "title": "Special Topics In African American Studies"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AAS",
                                "number": 57500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=57500",
                                "title": "Theories Of African American Studies"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AD",
                                "number": 12500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=12500",
                                "title": "Introduction To Interior Design"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AD",
                                "number": 22600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=22600",
                                "title": "History Of Art To 1400"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AD",
                                "number": 22700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=22700",
                                "title": "History Of Art Since 1400"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AD",
                                "number": 25100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=25100",
                                "title": "History Of Photography I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AD",
                                "number": 25500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=25500",
                                "title": "Art Appreciation"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AD",
                                "number": 31100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=31100",
                                "title": "Ancient Greek Art"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AD",
                                "number": 31200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=31200",
                                "title": "Ancient Roman Art"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AD",
                                "number": 33400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=33400",
                                "title": "New Media Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AD",
                                "number": 33900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=33900",
                                "title": "Women Artists In The 20th Century"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AD",
                                "number": 34300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=34300",
                                "title": "Northern Renaissance Art"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AD",
                                "number": 34400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=34400",
                                "title": "Latin American Art In The 20th Century"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AD",
                                "number": 34600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=34600",
                                "title": "Italian Renaissance Art"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AD",
                                "number": 34800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=34800",
                                "title": "History Of Islamic Art"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AD",
                                "number": 35900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=35900",
                                "title": "Medieval European Art"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AD",
                                "number": 38000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=38000",
                                "title": "Baroque Art"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AD",
                                "number": 38200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=38200",
                                "title": "A Global History Of Modern Art"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AD",
                                "number": 38300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=38300",
                                "title": "Modern Art"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AD",
                                "number": 38400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=38400",
                                "title": "Contemporary Art"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AD",
                                "number": 38500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=38500",
                                "title": "History Of Interior Design"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AD",
                                "number": 39100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=39100",
                                "title": "History Of Chinese Art"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AD",
                                "number": 39500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=39500",
                                "title": "History Of Design"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AD",
                                "number": 45400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=45400",
                                "title": "Modern Architecture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AGEC",
                                "number": 21700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AGEC&crse_numb_in=21700",
                                "title": "Economics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AMST",
                                "number": 10100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AMST&crse_numb_in=10100",
                                "title": "America And The World"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AMST",
                                "number": 20100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AMST&crse_numb_in=20100",
                                "title": "Interpreting America"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AMST",
                                "number": 30100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AMST&crse_numb_in=30100",
                                "title": "Perspectives On America"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AMST",
                                "number": 31000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AMST&crse_numb_in=31000",
                                "title": "Invention, Innovation, And Design"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AMST",
                                "number": 32000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AMST&crse_numb_in=32000",
                                "title": "Understanding The National Football League"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "AMST",
                                "number": 32500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AMST&crse_numb_in=32500",
                                "title": "Sports, Technology, And Innovation"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 10000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=10000",
                                "title": "Being Human: Introduction to Anthropology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 20100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=20100",
                                "title": "Introduction To Archaeology And World Prehistory"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 20300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=20300",
                                "title": "Biological Bases Of Human Social Behavior"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 20400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=20400",
                                "title": "Human Origins"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 20500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=20500",
                                "title": "Human Cultural Diversity"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 21000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=21000",
                                "title": "Technology And Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 21200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=21200",
                                "title": "Culture, Food And Health"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 23000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=23000",
                                "title": "Gender Across Cultures"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 23500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=23500",
                                "title": "The Great Apes"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 25400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=25400",
                                "title": "Archaeological Hoaxes, Myths And Frauds"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 28200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=28200",
                                "title": "Introduction To LGBTQ Studies"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 30700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=30700",
                                "title": "The Development Of Contemporary Anthropological Theory"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 31000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=31000",
                                "title": "Mortuary Practices Across Cultures"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 31100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=31100",
                                "title": "The Archaeology Of The Ancient Andes"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 31200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=31200",
                                "title": "The Archaeology Of Ancient Egypt And The Near East"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 31300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=31300",
                                "title": "Archaeology Of North America"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 32000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=32000",
                                "title": "Ancient States And Empires"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 32700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=32700",
                                "title": "Environment And Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 33500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=33500",
                                "title": "Primate Behavior"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 33600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=33600",
                                "title": "Human Variation"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 33700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=33700",
                                "title": "Human Diet: Origins And Evolution"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 34000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=34000",
                                "title": "Global Perspectives On Health"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 34100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=34100",
                                "title": "Culture And Personality"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 35800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=35800",
                                "title": "African Cultures"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 37000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=37000",
                                "title": "Ethnicity And Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 37300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=37300",
                                "title": "Anthropology Of Religion"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 37700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=37700",
                                "title": "Anthropology Of Hunter-Gatherer Societies"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 37800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=37800",
                                "title": "Archaeology And Cultural Anthropology Of Mesoamerica (Mexico, Belize And Guatemala)"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 37900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=37900",
                                "title": "Native American Cultures"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 38000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=38000",
                                "title": "Using Anthropology In The World"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 38400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=38400",
                                "title": "Designing For People: Anthropological Approaches"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 39200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=39200",
                                "title": "Selected Topics In Anthropology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 40400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=40400",
                                "title": "Comparative Social Organization"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 41400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=41400",
                                "title": "Introduction To Language And Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 42500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=42500",
                                "title": "Archaeological Method And Theory"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 43600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=43600",
                                "title": "Human Evolution"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 48200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=48200",
                                "title": "Sexual Diversity In Global Perspectives"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 50400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=50400",
                                "title": "Archaeological Theory"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 50500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=50500",
                                "title": "Culture And Society"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 50700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=50700",
                                "title": "History Of Theory In Anthropology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 53400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=53400",
                                "title": "Human Osteology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 53500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=53500",
                                "title": "Foundations Of Biological Anthropology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 53600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=53600",
                                "title": "Primate Ecology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 57500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=57500",
                                "title": "Economic Anthropology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ANTH",
                                "number": 59200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=59200",
                                "title": "Selected Topics In Anthropology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ARAB",
                                "number": 23000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ARAB&crse_numb_in=23000",
                                "title": "Arabic Literature In Translation"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ARAB",
                                "number": 23900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ARAB&crse_numb_in=23900",
                                "title": "Arab Women Writers"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ARAB",
                                "number": 28000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ARAB&crse_numb_in=28000",
                                "title": "Arabic Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ARAB",
                                "number": 28100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ARAB&crse_numb_in=28100",
                                "title": "Introduction To Islamic Civilization And Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ARAB",
                                "number": 33400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ARAB&crse_numb_in=33400",
                                "title": "North African Literature And Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ASAM",
                                "number": 24000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ASAM&crse_numb_in=24000",
                                "title": "Introduction To Asian American Studies"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ASAM",
                                "number": 34000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ASAM&crse_numb_in=34000",
                                "title": "Contemporary Issues In Asian American Studies"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ASEC",
                                "number": 49100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ASEC&crse_numb_in=49100",
                                "title": "Special Topics In Agricultural Science And Education Communication"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ASL",
                                "number": 28000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ASL&crse_numb_in=28000",
                                "title": "American Deaf Community: Language, Culture, And Society"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CHNS",
                                "number": 24100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHNS&crse_numb_in=24100",
                                "title": "Introduction To The Study Of Chinese Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CHNS",
                                "number": 28000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHNS&crse_numb_in=28000",
                                "title": "Topics in Chinese Civilization and Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CHNS",
                                "number": 28100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHNS&crse_numb_in=28100",
                                "title": "Introduction To Chinese Food Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CHNS",
                                "number": 33000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHNS&crse_numb_in=33000",
                                "title": "Introduction To Chinese Cinema"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CHNS",
                                "number": 34100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHNS&crse_numb_in=34100",
                                "title": "Chinese Literature I: Traditional Chinese Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CHNS",
                                "number": 34200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHNS&crse_numb_in=34200",
                                "title": "Chinese Literature II: Modern Chinese Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CHNS",
                                "number": 49000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHNS&crse_numb_in=49000",
                                "title": "Special Topics In Chinese Language"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CHNS",
                                "number": 59400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHNS&crse_numb_in=59400",
                                "title": "Special Topics In Chinese Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CLCS",
                                "number": 18100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=18100",
                                "title": "Classical World Civilizations"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CLCS",
                                "number": 23010,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=23010",
                                "title": "Survey Of Greek Literature In Translation"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CLCS",
                                "number": 23100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=23100",
                                "title": "Survey Of Latin Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CLCS",
                                "number": 23300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=23300",
                                "title": "Comparative Mythology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CLCS",
                                "number": 23500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=23500",
                                "title": "Introduction To Classical Mythology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CLCS",
                                "number": 23700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=23700",
                                "title": "Gender And Sexuality In Greek And Roman Antiquity"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CLCS",
                                "number": 23800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=23800",
                                "title": "The Tragic Vision"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CLCS",
                                "number": 23900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=23900",
                                "title": "The Comic Vision"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CLCS",
                                "number": 28000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=28000",
                                "title": "Topics In Classical Civilization"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CLCS",
                                "number": 33700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=33700",
                                "title": "The Ancient Epic"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CLCS",
                                "number": 33900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=33900",
                                "title": "Literature And The Law"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CLCS",
                                "number": 38000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=38000",
                                "title": "Alexander The Great and Hellenistic World"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CLCS",
                                "number": 38100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=38100",
                                "title": "Julius Caesar: Statesman, Soldier, Citizen"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CLCS",
                                "number": 38300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=38300",
                                "title": "The Roman Empire"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CLCS",
                                "number": 38400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=38400",
                                "title": "Ancient Western Medicine"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CLCS",
                                "number": 38500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=38500",
                                "title": "Science, Medicine And Magic In The Ancient West"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CLCS",
                                "number": 38600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=38600",
                                "title": "Ancient Greek Religion"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CLCS",
                                "number": 38700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=38700",
                                "title": "Roman Religion"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CLCS",
                                "number": 48000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=48000",
                                "title": "Potters And Society In Antiquity"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CLCS",
                                "number": 48100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=48100",
                                "title": "Culture And Society In The Age Of Pericles"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CLCS",
                                "number": 48300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=48300",
                                "title": "Republican Rome"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CLCS",
                                "number": 59300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=59300",
                                "title": "Special Topics In Classical Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CMPL",
                                "number": 23000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CMPL&crse_numb_in=23000",
                                "title": "Crossing Borders: Introduction To Comparative Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CMPL",
                                "number": 26600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CMPL&crse_numb_in=26600",
                                "title": "World Literature: From The Beginnings To 1700 A D"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "CMPL",
                                "number": 26700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CMPL&crse_numb_in=26700",
                                "title": "World Literature: From 1700 A D To The Present"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "COM",
                                "number": 22400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=COM&crse_numb_in=22400",
                                "title": "Communicating In The Global Workplace"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "COM",
                                "number": 25000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=COM&crse_numb_in=25000",
                                "title": "Mass Communication And Society"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "COM",
                                "number": 25100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=COM&crse_numb_in=25100",
                                "title": "Communication, Information, And Society"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "COM",
                                "number": 31200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=COM&crse_numb_in=31200",
                                "title": "Rhetoric In The Western World"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "COM",
                                "number": 31400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=COM&crse_numb_in=31400",
                                "title": "Advanced Presentational Speaking"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "COM",
                                "number": 31800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=COM&crse_numb_in=31800",
                                "title": "Principles Of Persuasion"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "COM",
                                "number": 32000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=COM&crse_numb_in=32000",
                                "title": "Small Group Communication"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "COM",
                                "number": 32900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=COM&crse_numb_in=32900",
                                "title": "History Of The Mass Media"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "COM",
                                "number": 35100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=COM&crse_numb_in=35100",
                                "title": "Mass Communication Ethics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "DANC",
                                "number": 25000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=DANC&crse_numb_in=25000",
                                "title": "Dance Appreciation"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ECON",
                                "number": 21000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ECON&crse_numb_in=21000",
                                "title": "Principles Of Economics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ECON",
                                "number": 25100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ECON&crse_numb_in=25100",
                                "title": "Microeconomics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ECON",
                                "number": 25200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ECON&crse_numb_in=25200",
                                "title": "Macroeconomics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "EDPS",
                                "number": 23500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=EDPS&crse_numb_in=23500",
                                "title": "Learning And Motivation"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 20200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=20200",
                                "title": "Engaging English"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 21700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=21700",
                                "title": "Figures Of Myth And Legend I: Monsters"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 21800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=21800",
                                "title": "Figures Of Myth And Legends II: Heroes And Villains"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 21900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=21900",
                                "title": "Figures Of Myth And Legend III: Magic And Marvels"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 22300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=22300",
                                "title": "Literature And Technology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 22400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=22400",
                                "title": "Literature, Money, And Markets"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 22500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=22500",
                                "title": "Literature, Inequality, And Injustice"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 22600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=22600",
                                "title": "Narrative Medicine"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 22800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=22800",
                                "title": "Language And Social Identity"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 23000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=23000",
                                "title": "Great Narrative Works"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 23200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=23200",
                                "title": "Thematic Studies In Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 23400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=23400",
                                "title": "Literature And The Environment"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 23500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=23500",
                                "title": "Introduction To Drama"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 23700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=23700",
                                "title": "Introduction To Poetry"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 23800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=23800",
                                "title": "Introduction To Fiction"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 24000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=24000",
                                "title": "British Literature Before 1789"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 24100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=24100",
                                "title": "British Literature After 1789"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 24900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=24900",
                                "title": "Great British Books"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 25000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=25000",
                                "title": "Great American Books"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 25700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=25700",
                                "title": "Literature Of Black America"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 25800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=25800",
                                "title": "Nobel Prize Winners In Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 26200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=26200",
                                "title": "Greek And Roman Classics In Translation"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 26400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=26400",
                                "title": "The Bible As Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 26600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=26600",
                                "title": "World Literature: From The Beginnings To 1700 A.D."
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 26700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=26700",
                                "title": "World Literature: From 1700 A.D. To The Present"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 27600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=27600",
                                "title": "Shakespeare On Film"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 27900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=27900",
                                "title": "The American Short Story In Print And Film"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 28000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=28000",
                                "title": "Games, Narrative, Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 28600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=28600",
                                "title": "The Movies"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 32200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=32200",
                                "title": "Word, Image, Media"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 33000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=33000",
                                "title": "Games And Diversity"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 33100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=33100",
                                "title": "Medieval English Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 33300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=33300",
                                "title": "Renaissance English Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 33500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=33500",
                                "title": "Restoration And Eighteenth-Century English Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 33700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=33700",
                                "title": "Nineteenth-Century English Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 33900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=33900",
                                "title": "Twentieth-Century British Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 34100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=34100",
                                "title": "Topics In Science, Literature, And Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 34200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=34200",
                                "title": "Legal Fictions"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 34300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=34300",
                                "title": "Labor And Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 34400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=34400",
                                "title": "Environmental Ethics, Policy, And Sustainability"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 34500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=34500",
                                "title": "Games And World Building"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 35000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=35000",
                                "title": "American Literature Before 1865"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 35100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=35100",
                                "title": "American Literature After 1865"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 35200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=35200",
                                "title": "Native American Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 35400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=35400",
                                "title": "Asian American Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 35800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=35800",
                                "title": "Black Drama"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 35900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=35900",
                                "title": "Black Women Writers"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 36000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=36000",
                                "title": "Gender And Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 36500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=36500",
                                "title": "Literature And Imperialism"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 36600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=36600",
                                "title": "Postcolonial Literatures"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 36700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=36700",
                                "title": "Mystery And Detective Fiction"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 37000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=37000",
                                "title": "Nineteenth-Century American Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 37100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=37100",
                                "title": "Twentieth-Century American Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 37300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=37300",
                                "title": "Science Fiction And Fantasy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 37700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=37700",
                                "title": "Modern And Contemporary Poetry"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 37900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=37900",
                                "title": "The Short Story"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 38100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=38100",
                                "title": "The British Novel"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 38200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=38200",
                                "title": "The American Novel"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 38600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=38600",
                                "title": "History Of Film To 1950"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 38700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=38700",
                                "title": "History Of Film Since 1950"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 38900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=38900",
                                "title": "Literature For Children"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 39200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=39200",
                                "title": "Young Adult Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 39300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=39300",
                                "title": "Interdisciplinary Approaches To Environmental And Sustainability Studies"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 39600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=39600",
                                "title": "Studies In Literature And Language"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 41100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=41100",
                                "title": "Studies In Major Authors"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 41200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=41200",
                                "title": "Studies In Genre"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 41300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=41300",
                                "title": "Studies In Literature And History"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 41400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=41400",
                                "title": "Studies In Literature And Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 43900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=43900",
                                "title": "Topics In Disability Studies"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 44100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=44100",
                                "title": "Chaucer\u2019s Canterbury Tales"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 44200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=44200",
                                "title": "Shakespeare"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 44400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=44400",
                                "title": "Milton"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 46000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=46000",
                                "title": "Studies In Women\u2019s Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 46200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=46200",
                                "title": "The Bible As Literature: The Old Testament"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 46300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=46300",
                                "title": "The Bible As Literature: The New Testament"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 46600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=46600",
                                "title": "Cultural Encounters"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 52800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=52800",
                                "title": "Medieval English Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 53100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=53100",
                                "title": "The Rise Of The Novel"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 53200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=53200",
                                "title": "The English Novel In The Nineteenth Century"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 53400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=53400",
                                "title": "Seventeenth-Century Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 53500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=53500",
                                "title": "Restoration And Early Eighteenth-Century Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 53800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=53800",
                                "title": "English Drama From The Restoration To The Modern Period"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 54100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=54100",
                                "title": "Studies In Chaucer\u2019s Canterbury Tales"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 54300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=54300",
                                "title": "Shakespeare In Critical Perspective"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 54400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=54400",
                                "title": "Milton"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 54700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=54700",
                                "title": "British Romanticism"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 54800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=54800",
                                "title": "Victorian Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 55200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=55200",
                                "title": "Studies In Major American Authors"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 55300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=55300",
                                "title": "Colonial And Early American Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 55400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=55400",
                                "title": "American Literary Culture 1820-1860"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 55700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=55700",
                                "title": "Nineteenth-Century African-American Narrative"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 55800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=55800",
                                "title": "American Literature In The Later Nineteenth Century"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 56000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=56000",
                                "title": "Modern American Poetry"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 57300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=57300",
                                "title": "Tragedy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 57900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=57900",
                                "title": "Modern British Fiction"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 58300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=58300",
                                "title": "U S Ethnic/Multicultural Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 59200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=59200",
                                "title": "Postcolonial Studies"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 59300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=59300",
                                "title": "Contemporary British Fiction"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 59400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=59400",
                                "title": "Contemporary Poetry"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 59500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=59500",
                                "title": "Contemporary American Fiction"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 59600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=59600",
                                "title": "Advanced Studies In Literature Or Language"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENGL",
                                "number": 59700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=59700",
                                "title": "Contemporary Black Feminist Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENTR",
                                "number": 20000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENTR&crse_numb_in=20000",
                                "title": "Introduction To Entrepreneurship And Innovation"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENTR",
                                "number": 31000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENTR&crse_numb_in=31000",
                                "title": "Marketing And Management For New Ventures"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ENTR",
                                "number": 47000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENTR&crse_numb_in=47000",
                                "title": "Women And Leadership"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "FNR",
                                "number": 48800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FNR&crse_numb_in=48800",
                                "title": "Global Environmental Issues"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "FR",
                                "number": 24100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=24100",
                                "title": "Introduction To The Study Of French Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "FR",
                                "number": 33000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=33000",
                                "title": "French Cinema"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "FR",
                                "number": 34100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=34100",
                                "title": "French Literature I: From The Middle Ages To The Enlightenment"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "FR",
                                "number": 34200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=34200",
                                "title": "French Literature II: The 19th And 20th Centuries"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "FR",
                                "number": 38000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=38000",
                                "title": "Special Topics In French Culture And Civilization"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "FR",
                                "number": 39400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=39400",
                                "title": "Special Topics In French Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "FR",
                                "number": 44300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=44300",
                                "title": "Introduction To Francophone Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "FR",
                                "number": 48000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=48000",
                                "title": "French Civilization"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "FR",
                                "number": 54100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=54100",
                                "title": "Renaissance French Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "FR",
                                "number": 54900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=54900",
                                "title": "French Literature And Film"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "FR",
                                "number": 55800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=55800",
                                "title": "French Novel Of The Twentieth Century"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "FR",
                                "number": 58100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=58100",
                                "title": "French Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "FR",
                                "number": 58200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=58200",
                                "title": "Francophone Cultures"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "FR",
                                "number": 59400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=59400",
                                "title": "Special Topics In French Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "FS",
                                "number": 47000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FS&crse_numb_in=47000",
                                "title": "Wine Appreciation"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "FVS",
                                "number": 49100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FVS&crse_numb_in=49100",
                                "title": "Special Topics In Film/Video Studies"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "GER",
                                "number": 23000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=23000",
                                "title": "German Literature In Translation"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "GER",
                                "number": 24100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=24100",
                                "title": "Introduction To The Study Of German Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "GER",
                                "number": 28000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=28000",
                                "title": "German Special Topics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "GER",
                                "number": 33000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=33000",
                                "title": "German Cinema"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "GER",
                                "number": 34100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=34100",
                                "title": "German Literature I: From The Middle Ages To The 18th Century"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "GER",
                                "number": 34200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=34200",
                                "title": "German Literature II: From The 18th Century To The 21st Century"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "GER",
                                "number": 48000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=48000",
                                "title": "German Civilization"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "GER",
                                "number": 54400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=54400",
                                "title": "German Romanticism"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "GER",
                                "number": 54500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=54500",
                                "title": "German Prose From Naturalism To The Present"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "GER",
                                "number": 55100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=55100",
                                "title": "Lyric Poetry From Romanticism To The Present"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "GER",
                                "number": 55400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=55400",
                                "title": "German Drama Before Naturalism"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "GER",
                                "number": 55500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=55500",
                                "title": "German Drama From Naturalism To The Present"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "GER",
                                "number": 58100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=58100",
                                "title": "German Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "GER",
                                "number": 59400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=59400",
                                "title": "Special Topics In German Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HEBR",
                                "number": 28400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HEBR&crse_numb_in=28400",
                                "title": "Ancient Near Eastern History And Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HEBR",
                                "number": 38000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HEBR&crse_numb_in=38000",
                                "title": "Israel And The Modern World: Cinema, Literature, History And Politics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HDFS",
                                "number": 21000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HDFS&crse_numb_in=21000",
                                "title": "Introduction To Human Development"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 10300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=10300",
                                "title": "Introduction To The Medieval World"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 10400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=10400",
                                "title": "Introduction To The Modern World"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 10500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=10500",
                                "title": "Survey Of Global History"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 15100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=15100",
                                "title": "American History To 1877"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 15200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=15200",
                                "title": "United States Since 1877"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 20100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=20100",
                                "title": "Special Topics In History"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 21000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=21000",
                                "title": "The Making Of Modern Africa"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 21100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=21100",
                                "title": "The Global Field: World Soccer And Global History"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 22800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=22800",
                                "title": "English History To 1688"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 23800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=23800",
                                "title": "History Of Russia From Medieval Times To 1861"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 23005,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=23005",
                                "title": "Hitler\u2019s Europe"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 23900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=23900",
                                "title": "History Of Russia From 1861 To The Present"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 24000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=24000",
                                "title": "East Asia And Its Historic Tradition"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 24100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=24100",
                                "title": "East Asia In The Modern World"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 24300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=24300",
                                "title": "South Asian History And Civilizations"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 24500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=24500",
                                "title": "Introduction To The Middle East History And Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 24600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=24600",
                                "title": "Modern Middle East And North Africa"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 25000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=25000",
                                "title": "United States Relations With The Middle East And North Africa"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 27100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=27100",
                                "title": "Introduction To Colonial Latin American History (1492-1810)"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 27200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=27200",
                                "title": "Introduction To Modern Latin American History (1810 To The Present)"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 30000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=30000",
                                "title": "Eve Of Destruction: Global Crises And World Organization In The 20th Century"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 30200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=30200",
                                "title": "Historical Topics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 30305,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=30305",
                                "title": "Food In Modern America"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 30400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=30400",
                                "title": "America In The 1960s"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 30505,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=30505",
                                "title": "The United States In The World 1898-Present"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 30605,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=30605",
                                "title": "Technology And War In U.S. History"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 31005,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=31005",
                                "title": "The Civil War And Reconstruction, 1850 To 1877"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 31205,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=31205",
                                "title": "The Arab-Israeli Conflict"
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
                                "number": 31405,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=31405",
                                "title": "Science, Technology, Engineering And Mathematics (STEM) And Gender"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 31505,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=31505",
                                "title": "American Beauty"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 31700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=31700",
                                "title": "A History Of The Christian Church And The Expansion Of Christianity I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 31800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=31800",
                                "title": "A History Of The Christian Church And The Expansion Of Christianity II"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 31905,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=31905",
                                "title": "Christianity In The Global Age"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 32000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=32000",
                                "title": "The World Of Charlemagne"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 32105,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=32105",
                                "title": "Spain: The First Global Empire, 1469-1713"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 32200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=32200",
                                "title": "Monarchy: Its Rise And Fall"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 32300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=32300",
                                "title": "German History"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 32400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=32400",
                                "title": "Modern France"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 32501,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=32501",
                                "title": "Twentieth Century Europe Through Autobiography"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 32600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=32600",
                                "title": "Popular Culture In Preindustrial Europe (1400-1800)"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 32900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=32900",
                                "title": "History Of Women In Modern Europe"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 33100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=33100",
                                "title": "Great Figures In History"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 33205,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=33205",
                                "title": "The Nuclear Age"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 33300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=33300",
                                "title": "Science And Society In Western Civilization I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 33505,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=33505",
                                "title": "Nationalism And Socialism In East Central Europe"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 33700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=33700",
                                "title": "Europe In The Age Of The Cold War"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 33805,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=33805",
                                "title": "History Of Human Rights"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 33900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=33900",
                                "title": "Traditional China"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 34000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=34000",
                                "title": "Modern China"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 34300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=34300",
                                "title": "Traditional Japan"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 34400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=34400",
                                "title": "History Of Modern Japan"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 34705,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=34705",
                                "title": "History Of Religion In America"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 34901,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=34901",
                                "title": "The First World War"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 35000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=35000",
                                "title": "Science And Society In The Twentieth Century World"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 35100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=35100",
                                "title": "The Second World War"
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
                                "subject": "HIST",
                                "number": 35305,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=35305",
                                "title": "Sports In America"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 35400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=35400",
                                "title": "Women In America To 1870"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 35500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=35500",
                                "title": "History Of American Military Affairs"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 35600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=35600",
                                "title": "America In Vietnam"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 35700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=35700",
                                "title": "History Of Southern Africa Since 1400"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 35900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=35900",
                                "title": "Gender In East Asian History"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 36101,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=36101",
                                "title": "Violence, War, And Militarism In Modern Africa"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 36305,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=36305",
                                "title": "The History Of Medicine And Public Health"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 36600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=36600",
                                "title": "Hispanic Heritage Of The United States"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 37005,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=37005",
                                "title": "Queens And Empresses In Early Modern Europe"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 37100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=37100",
                                "title": "Society, Culture, And Rock And Roll"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 37200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=37200",
                                "title": "History Of The American West"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 37500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=37500",
                                "title": "Women In America Since 1870"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 37600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=37600",
                                "title": "History Of Indiana"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 37700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=37700",
                                "title": "History And Culture Of Native America"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 38001,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=38001",
                                "title": "History Of United States Agriculture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 38200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=38200",
                                "title": "American Constitutional History"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 38300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=38300",
                                "title": "Recent American Constitutional History"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 38400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=38400",
                                "title": "History Of Aviation"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 38505,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=38505",
                                "title": "Media, Politics And Popular Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 38605,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=38605",
                                "title": "Land Of The Indians: Native Americans In Indiana"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 38700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=38700",
                                "title": "History Of The Space Age"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 39200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=39200",
                                "title": "Caribbean History And Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 39400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=39400",
                                "title": "Environmental History Of The United States"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 39500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=39500",
                                "title": "Junior Research Seminar"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 39600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=39600",
                                "title": "African American History To 1877"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 39800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=39800",
                                "title": "African American History Since 1877"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 40000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=40000",
                                "title": "Great Books And The Search For Meaning"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 40300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=40300",
                                "title": "Europe In The Reformation"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 40400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=40400",
                                "title": "Kings And Philosophers: Europe 1618-1789"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 40500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=40500",
                                "title": "The French Revolution And Napoleon"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 40600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=40600",
                                "title": "Rebels And Romantics: Europe 1815-1870"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 40700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=40700",
                                "title": "Road To World War I: Europe 1870-1919"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 40800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=40800",
                                "title": "Dictatorship And Democracy: Europe 1919-1945"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 41005,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=41005",
                                "title": "History Of The American Presidency"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 41300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=41300",
                                "title": "Modern European Imperialism: Repression and Resistance"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 41505,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=41505",
                                "title": "Gender And Politics In Early Modern Europe"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 41800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=41800",
                                "title": "European Society And Culture 1450-1800"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 42300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=42300",
                                "title": "Advanced Topics In Modern Germany"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 43900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=43900",
                                "title": "Communist China"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 44100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=44100",
                                "title": "Africa In The Twentieth Century"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 46000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=46000",
                                "title": "American Colonial History"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 46100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=46100",
                                "title": "The Revolutionary Era, 1763 To 1800"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 46700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=46700",
                                "title": "The Emergence Of Modern America"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 46800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=46800",
                                "title": "Recent American History"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 46900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=46900",
                                "title": "Black Civil Rights Movement"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 47005,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=47005",
                                "title": "Women And Health In America"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 47300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=47300",
                                "title": "History Of The South"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 47500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=47500",
                                "title": "Spanish Frontier In North America"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 47600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=47600",
                                "title": "The Civil War In Myth And Memory"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 47700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=47700",
                                "title": "Native American Women\u2019s History"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 48005,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=48005",
                                "title": "Madness And The Asylum In The United States"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 48500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=48500",
                                "title": "Topics In American Political History"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 48800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=48800",
                                "title": "History Of Sexual Regulation In The United States"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 49200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=49200",
                                "title": "Seminar In Historical Topics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 49500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=49500",
                                "title": "Research Seminar In Historical Topics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 50000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=50000",
                                "title": "Studies In Medieval History"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 50500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=50500",
                                "title": "Haunted Pasts: Ghosts, Ghouls And Monsters In Global Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 51200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=51200",
                                "title": "England Under The Stuarts"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 51400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=51400",
                                "title": "A History Of Western Thought I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 51500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=51500",
                                "title": "A History Of Western Thought II"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 54800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=54800",
                                "title": "Conflict In East Asia: Twentieth Century"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 57600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=57600",
                                "title": "Problems In Latin American History"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 58600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=58600",
                                "title": "United States Foreign Affairs To World War I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 58700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=58700",
                                "title": "United States Foreign Affairs: World War I To Present"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 59300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=59300",
                                "title": "Twentieth-Century American Intellectual History"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 59400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=59400",
                                "title": "Afro-American Thought And Ideology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HIST",
                                "number": 59500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=59500",
                                "title": "The Holocaust And Genocide"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "HONR",
                                "number": 19900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HONR&crse_numb_in=19900",
                                "title": "Interdisciplinary Honors - Introductory Seminar"
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
                                "subject": "IDIS",
                                "number": 49100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=IDIS&crse_numb_in=49100",
                                "title": "Special Topics In Interdisciplinary Studies"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "IDIS",
                                "number": 59100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=IDIS&crse_numb_in=59100",
                                "title": "Selected Topics In Interdisciplinary Studies"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ILS",
                                "number": 23000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ILS&crse_numb_in=23000",
                                "title": "Data Science And Society: Ethical Legal Social Issues"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ITAL",
                                "number": 23100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ITAL&crse_numb_in=23100",
                                "title": "Dante\u2019s Divine Comedy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ITAL",
                                "number": 28100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ITAL&crse_numb_in=28100",
                                "title": "The Italian Renaissance And Its Scientific And Cultural Impact On Western Civilization"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ITAL",
                                "number": 33000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ITAL&crse_numb_in=33000",
                                "title": "The Italian Cinema"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ITAL",
                                "number": 33300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ITAL&crse_numb_in=33300",
                                "title": "The Spirit Of Italian Comedy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ITAL",
                                "number": 33500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ITAL&crse_numb_in=33500",
                                "title": "Italian-American Cinema"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ITAL",
                                "number": 34100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ITAL&crse_numb_in=34100",
                                "title": "Italian Literature I: From The Middle Ages To The Enlightenment"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ITAL",
                                "number": 34200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ITAL&crse_numb_in=34200",
                                "title": "Italian Literature II: From Romanticism To The Present"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ITAL",
                                "number": 39300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ITAL&crse_numb_in=39300",
                                "title": "Special Topics In Italian Literature Or Cinema"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "ITAL",
                                "number": 49300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ITAL&crse_numb_in=49300",
                                "title": "Advanced Topics In Italian Literature Or Cinema"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "JPNS",
                                "number": 24100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JPNS&crse_numb_in=24100",
                                "title": "Introduction To The Study Of Japanese Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "JPNS",
                                "number": 28000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JPNS&crse_numb_in=28000",
                                "title": "Introduction To Modern Japanese Civilization"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "JPNS",
                                "number": 33000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JPNS&crse_numb_in=33000",
                                "title": "Japanese Cinema"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "JPNS",
                                "number": 34100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JPNS&crse_numb_in=34100",
                                "title": "Japanese Literature I: Modern Japanese Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "JPNS",
                                "number": 48000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JPNS&crse_numb_in=48000",
                                "title": "Japanese Civilization"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "JPNS",
                                "number": 48500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JPNS&crse_numb_in=48500",
                                "title": "Culinary Culture Of Japan"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "JPNS",
                                "number": 49000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JPNS&crse_numb_in=49000",
                                "title": "Special Topics In Japanese Language"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "JPNS",
                                "number": 54300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JPNS&crse_numb_in=54300",
                                "title": "Modern Japanese Popular Literature And Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "JPNS",
                                "number": 59400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JPNS&crse_numb_in=59400",
                                "title": "Special Topics In Japanese Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "JWST",
                                "number": 33000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JWST&crse_numb_in=33000",
                                "title": "Introduction To Jewish Studies"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "KOR",
                                "number": 38000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=KOR&crse_numb_in=38000",
                                "title": "Special Topics In Korean Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LALS",
                                "number": 25000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LALS&crse_numb_in=25000",
                                "title": "Introduction To Latin American And Latino Studies"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LALS",
                                "number": 26000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LALS&crse_numb_in=26000",
                                "title": "U S Latino Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LALS",
                                "number": 30100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LALS&crse_numb_in=30100",
                                "title": "Latin American Literary And Cultural Studies"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LALS",
                                "number": 40100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LALS&crse_numb_in=40100",
                                "title": "Special Topics In Latin American/Latino Studies"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LALS",
                                "number": 49500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LALS&crse_numb_in=49500",
                                "title": "Humanigration: A Border Experience"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LATN",
                                "number": 34300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LATN&crse_numb_in=34300",
                                "title": "Roman Oratory"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LATN",
                                "number": 34400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LATN&crse_numb_in=34400",
                                "title": "Roman Epic"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LATN",
                                "number": 34500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LATN&crse_numb_in=34500",
                                "title": "Roman Elegy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LATN",
                                "number": 34700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LATN&crse_numb_in=34700",
                                "title": "Roman Comedy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LATN",
                                "number": 44300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LATN&crse_numb_in=44300",
                                "title": "Roman Satire"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LATN",
                                "number": 44400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LATN&crse_numb_in=44400",
                                "title": "Roman Philosophers"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LALS",
                                "number": 26000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LALS&crse_numb_in=26000",
                                "title": "U S Latino Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LATN",
                                "number": 44600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LATN&crse_numb_in=44600",
                                "title": "Roman Historians"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LATN",
                                "number": 49000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LATN&crse_numb_in=49000",
                                "title": "Directed Reading In Latin"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LATN",
                                "number": 59000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LATN&crse_numb_in=59000",
                                "title": "Directed Reading In Latin"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LC",
                                "number": 23000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LC&crse_numb_in=23000",
                                "title": "Crossing Borders: Introduction To Comparative Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LC",
                                "number": 23100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LC&crse_numb_in=23100",
                                "title": "Fairytale, Folktale, Fable"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LC",
                                "number": 23300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LC&crse_numb_in=23300",
                                "title": "Love, Sex, And Gender In Western European Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LC",
                                "number": 23500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LC&crse_numb_in=23500",
                                "title": "East Asian Literature In Translation"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LC",
                                "number": 23700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LC&crse_numb_in=23700",
                                "title": "Our Common Bond: Languages And Cultures In A Global Context"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LC",
                                "number": 23900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LC&crse_numb_in=23900",
                                "title": "Women Writers In Translation"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LC",
                                "number": 33100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LC&crse_numb_in=33100",
                                "title": "Comparative Literature In Translation"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LC",
                                "number": 33300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LC&crse_numb_in=33300",
                                "title": "The Middle Ages On Film"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LC",
                                "number": 33800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LC&crse_numb_in=33800",
                                "title": "Language Through Films"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LC",
                                "number": 49000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LC&crse_numb_in=49000",
                                "title": "Special Topics In Foreign Languages And Literatures"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "LC",
                                "number": 59300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LC&crse_numb_in=59300",
                                "title": "Special Topics In Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "MARS",
                                "number": 22000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MARS&crse_numb_in=22000",
                                "title": "Introduction To Medieval And Renaissance Studies"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "MARS",
                                "number": 42000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MARS&crse_numb_in=42000",
                                "title": "Medieval And Renaissance Studies Seminar"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "MGMT",
                                "number": 20000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MGMT&crse_numb_in=20000",
                                "title": "Introductory Accounting"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "MGMT",
                                "number": 21200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MGMT&crse_numb_in=21200",
                                "title": "Business Accounting"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "MGMT",
                                "number": 24200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MGMT&crse_numb_in=24200",
                                "title": "Contemporary Problems In Personal Finance For Minorities"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "MGMT",
                                "number": 24300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MGMT&crse_numb_in=24300",
                                "title": "Contemporary Thought Of Minorities In Management"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "MGMT",
                                "number": 32300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MGMT&crse_numb_in=32300",
                                "title": "Principles Of Marketing"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "MGMT",
                                "number": 32400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MGMT&crse_numb_in=32400",
                                "title": "Marketing Management"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "MGMT",
                                "number": 45500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MGMT&crse_numb_in=45500",
                                "title": "Legal Background For Business I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "MUS",
                                "number": 25000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MUS&crse_numb_in=25000",
                                "title": "Music Appreciation"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "MUS",
                                "number": 36100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MUS&crse_numb_in=36100",
                                "title": "Music Theory I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "MUS",
                                "number": 36200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MUS&crse_numb_in=36200",
                                "title": "Music Theory II"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "MUS",
                                "number": 36300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MUS&crse_numb_in=36300",
                                "title": "Music Theory III"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "MUS",
                                "number": 37500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MUS&crse_numb_in=37500",
                                "title": "Selected Topics In Music"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "MUS",
                                "number": 37600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MUS&crse_numb_in=37600",
                                "title": "World Music"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "MUS",
                                "number": 37800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MUS&crse_numb_in=37800",
                                "title": "Jazz History"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "MUS",
                                "number": 38100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MUS&crse_numb_in=38100",
                                "title": "Music History I: Antiquity To Mozart"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "MUS",
                                "number": 38200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MUS&crse_numb_in=38200",
                                "title": "Music History II: Beethoven To The Present"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "OBHR",
                                "number": 33000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=OBHR&crse_numb_in=33000",
                                "title": "Introduction To Organizational Behavior"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 11000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=11000",
                                "title": "The Big Questions: Introduction to Philosophy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 11100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=11100",
                                "title": "Introduction To Ethics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 11400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=11400",
                                "title": "Global Moral Issues"
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
                                "number": 20600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=20600",
                                "title": "Introduction To Philosophy Of Religion"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 20700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=20700",
                                "title": "Ethics For Technology, Engineering, And Design"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 21900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=21900",
                                "title": "Philosophy And The Meaning Of Life"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 22100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=22100",
                                "title": "Introduction To Philosophy Of Science"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 22300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=22300",
                                "title": "Fate And Free Will"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 22500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=22500",
                                "title": "Philosophy And Gender"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 23000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=23000",
                                "title": "Religions Of The East"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 23100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=23100",
                                "title": "Religions Of The West"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 24000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=24000",
                                "title": "Social And Political Philosophy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 24200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=24200",
                                "title": "Philosophy, Culture, And The African American Experience"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 26000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=26000",
                                "title": "Philosophy And Law"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 27000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=27000",
                                "title": "Biomedical Ethics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 27500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=27500",
                                "title": "The Philosophy Of Art"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 28000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=28000",
                                "title": "Ethics And Animals"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 29000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=29000",
                                "title": "Environmental Ethics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 29300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=29300",
                                "title": "Selected Topics In Philosophy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 30100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=30100",
                                "title": "History Of Ancient Philosophy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 30200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=30200",
                                "title": "History Of Medieval Philosophy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 30300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=30300",
                                "title": "History Of Modern Philosophy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 30400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=30400",
                                "title": "Nineteenth-Century Philosophy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 30600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=30600",
                                "title": "Twentieth-Century Philosophy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 32200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=32200",
                                "title": "Philosophy Of Technology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 40200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=40200",
                                "title": "Studies In Medieval Christian Thought"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 40600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=40600",
                                "title": "Intermediate Philosophy Of Religion"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 41100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=41100",
                                "title": "Modern Ethical Theories"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 42100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=42100",
                                "title": "Philosophy Of Science"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 42400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=42400",
                                "title": "Recent Ethical Theory"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 42500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=42500",
                                "title": "Metaphysics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 43200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=43200",
                                "title": "Theory Of Knowledge"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 43500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=43500",
                                "title": "Philosophy Of Mind"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 46500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=46500",
                                "title": "Philosophy Of Language"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 49000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=49000",
                                "title": "Advanced Topics In Philosophy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 50100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=50100",
                                "title": "Studies In Greek Philosophy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 50200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=50200",
                                "title": "Studies In Medieval Philosophy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 50300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=50300",
                                "title": "Studies In Early Modern Philosophy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 50500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=50500",
                                "title": "Islamic And Jewish Philosophy And The Classical Tradition"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 50600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=50600",
                                "title": "Advanced Philosophy Of Religion"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 50700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=50700",
                                "title": "Recent American Philosophy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 51000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=51000",
                                "title": "Phenomenology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 51400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=51400",
                                "title": "Twentieth-Century Analytical Philosophy I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 51500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=51500",
                                "title": "Twentieth-Century Analytical Philosophy II"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 52000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=52000",
                                "title": "Existentialism"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 52400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=52400",
                                "title": "Contemporary Ethical Theory"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 52500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=52500",
                                "title": "Studies In Metaphysics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 53000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=53000",
                                "title": "Deconstructionist And Postmodernist Philosophy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 53200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=53200",
                                "title": "Studies In Theory Of Knowledge"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 53500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=53500",
                                "title": "Studies In Philosophy Of Mind"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 54000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=54000",
                                "title": "Studies In Social And Political Philosophy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 54500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=54500",
                                "title": "Recent Analytic Philosophy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 55100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=55100",
                                "title": "Philosophy Of The Natural Sciences"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 55200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=55200",
                                "title": "Philosophy Of The Social Sciences"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 55500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=55500",
                                "title": "Critical Theory"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHIL",
                                "number": 58000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=58000",
                                "title": "Proseminar In Philosophy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PHPR",
                                "number": 49000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHPR&crse_numb_in=49000",
                                "title": "Special Topics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 10100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=10100",
                                "title": "American Government And Politics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 12000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=12000",
                                "title": "Introduction To Public Policy And Public Administration"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 13000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=13000",
                                "title": "Introduction To International Relations"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 14100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=14100",
                                "title": "Governments Of The World"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 15000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=15000",
                                "title": "Introduction To Political Thought"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 20000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=20000",
                                "title": "Introduction To The Study Of Political Science"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 22200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=22200",
                                "title": "Women, Politics, And Public Policy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 22300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=22300",
                                "title": "Introduction To Environmental Policy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 22900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=22900",
                                "title": "Emerging Problems In Political Science"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 23000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=23000",
                                "title": "Introduction To The Study Of Peace"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 23100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=23100",
                                "title": "Introduction To United States Foreign Policy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 23500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=23500",
                                "title": "International Relations Among Rich And Poor Nations"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 23700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=23700",
                                "title": "Modern Weapons And International Relations"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 30000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=30000",
                                "title": "Introduction To Political Analysis"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 31400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=31400",
                                "title": "The President And Policy Process"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 32300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=32300",
                                "title": "Comparative Environmental Policy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 32600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=32600",
                                "title": "Black Political Participation In America"
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
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 33500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=33500",
                                "title": "China And The Challenges Of Globalization"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 34500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=34500",
                                "title": "West European Democracies In The Post-Industrial Era"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 34700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=34700",
                                "title": "Introduction To Latin American Politics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 34800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=34800",
                                "title": "East Asian Politics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 35100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=35100",
                                "title": "Foundations Of Western Political Theory: From Plato To The Reformation"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 35300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=35300",
                                "title": "Current Political Ideologies"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 36000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=36000",
                                "title": "Women And The Law"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 37200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=37200",
                                "title": "Indiana Government And Politics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 37300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=37300",
                                "title": "Campaigns And Elections"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 41000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=41000",
                                "title": "Political Parties And Politics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 41100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=41100",
                                "title": "Congress: Structure And Functioning"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 41300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=41300",
                                "title": "The Human Basis Of Politics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 41500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=41500",
                                "title": "US Politics And The Media"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 42300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=42300",
                                "title": "International Environmental Policy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 42500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=42500",
                                "title": "Environmental Law And Politics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 42800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=42800",
                                "title": "The Politics Of Regulation"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 42900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=42900",
                                "title": "Contemporary Political Problems"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 43000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=43000",
                                "title": "Selected Problems In International Relations"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 43200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=43200",
                                "title": "Selected Problems In World Order"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 43300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=43300",
                                "title": "International Organization"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 43500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=43500",
                                "title": "International Law"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 46000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=46000",
                                "title": "Judicial Politics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 46100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=46100",
                                "title": "Constitutional Law I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 46200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=46200",
                                "title": "Constitutional Law II"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 49100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=49100",
                                "title": "Political Science Senior Seminar"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 49300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=49300",
                                "title": "Interdisciplinary Undergraduate Seminar"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 51700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=51700",
                                "title": "The Politics Of Capital And Labor In The United States"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 52000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=52000",
                                "title": "Special Topics In Public Policy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 52300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=52300",
                                "title": "Environmental Politics And Public Policy"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 52400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=52400",
                                "title": "Public Policy And The Family"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 53200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=53200",
                                "title": "Nuclear Strategy And Proliferation"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "POL",
                                "number": 59000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=59000",
                                "title": "Directed Reading In Political Science"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 12000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=12000",
                                "title": "Elementary Psychology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 20000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=20000",
                                "title": "Introduction To Cognitive Psychology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 22200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=22200",
                                "title": "Introduction To Behavioral Neuroscience"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 23500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=23500",
                                "title": "Child Psychology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 23900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=23900",
                                "title": "The Psychology Of Women"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 24000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=24000",
                                "title": "Introduction To Social Psychology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 24400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=24400",
                                "title": "Introduction To Human Sexuality"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 27200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=27200",
                                "title": "Introduction To Industrial-Organizational Psychology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 29200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=29200",
                                "title": "Topics In Psychology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 31000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=31000",
                                "title": "Sensory And Perceptual Processes"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 31100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=31100",
                                "title": "Human Memory"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 31400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=31400",
                                "title": "Introduction To Learning"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 32400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=32400",
                                "title": "Introduction Cognitive Neuroscience"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 33500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=33500",
                                "title": "Stereotyping And Prejudice"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 33600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=33600",
                                "title": "Issues In Developmental Psychology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 33700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=33700",
                                "title": "Social Cognition"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 34200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=34200",
                                "title": "Introduction To Psychology Of Personality"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 35000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=35000",
                                "title": "Abnormal Psychology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 35400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=35400",
                                "title": "Close Relationships"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 36100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=36100",
                                "title": "Human Development I: Infancy And Childhood"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 36700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=36700",
                                "title": "Adult Development And Aging"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 38000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=38000",
                                "title": "Behavior Change Methods"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 39200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=39200",
                                "title": "Special Topics In Psychology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 41800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=41800",
                                "title": "Understanding Autism"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 42100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=42100",
                                "title": "Alcohol Use And Disorders"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 42200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=42200",
                                "title": "Genes and Behavior"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 42600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=42600",
                                "title": "Language Development"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 42800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=42800",
                                "title": "Drugs And Behavior"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 42900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=42900",
                                "title": "Hormones And Behavior"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 43200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=43200",
                                "title": "Social Psychology In Film"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 44300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=44300",
                                "title": "Aggression And Violence"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 46400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=46400",
                                "title": "Research Ethics In Psychological Sciences"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 47300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=47300",
                                "title": "Selection And Performance Appraisal In Organizations"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 47500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=47500",
                                "title": "Work Motivation And Job Satisfaction"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 48400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=48400",
                                "title": "The Psychology Of Consciousness"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 51500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=51500",
                                "title": "Neuroscience Of Consciousness"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 54000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=54000",
                                "title": "History Of Psychology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 56100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=56100",
                                "title": "Personality And Social Functioning In Older Adults"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PSY",
                                "number": 59100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=59100",
                                "title": "Topics In Psychology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PTGS",
                                "number": 33000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PTGS&crse_numb_in=33000",
                                "title": "Brazilian, Portuguese, And African Cinema"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PTGS",
                                "number": 55100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PTGS&crse_numb_in=55100",
                                "title": "Brazilian Poetry"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PTGS",
                                "number": 55500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PTGS&crse_numb_in=55500",
                                "title": "Brazilian Drama"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PTGS",
                                "number": 55700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PTGS&crse_numb_in=55700",
                                "title": "Brazilian Fiction"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "PTGS",
                                "number": 59400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PTGS&crse_numb_in=59400",
                                "title": "Special Topics In Luso-Brazilian Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "REL",
                                "number": 20000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=20000",
                                "title": "Introduction To The Study Of Religion"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "REL",
                                "number": 20100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=20100",
                                "title": "Interpretation Of The New Testament"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "REL",
                                "number": 20200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=20200",
                                "title": "Interpretation Of The Old Testament"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "REL",
                                "number": 20300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=20300",
                                "title": "Theology Of Paul"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "REL",
                                "number": 20400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=20400",
                                "title": "Introduction To Christian Theology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "REL",
                                "number": 23000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=23000",
                                "title": "Religions Of The East"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "REL",
                                "number": 23100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=23100",
                                "title": "Religions Of The West"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "REL",
                                "number": 25000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=25000",
                                "title": "A History Of The Christian Afterlife"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "REL",
                                "number": 31700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=31700",
                                "title": "Ancient Judaism And Early Christianity"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "REL",
                                "number": 31800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=31800",
                                "title": "The Bible And Its Early Interpreters"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "REL",
                                "number": 35000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=35000",
                                "title": "History Of Christian Theology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "REL",
                                "number": 35100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=35100",
                                "title": "Christian Mysticism"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "REL",
                                "number": 45000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=45000",
                                "title": "Christian Ethics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "REL",
                                "number": 45100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=45100",
                                "title": "Christology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "REL",
                                "number": 45200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=45200",
                                "title": "Systematic Theology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "RUSS",
                                "number": 29800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=RUSS&crse_numb_in=29800",
                                "title": "Special Topics In Russian"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "RUSS",
                                "number": 33000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=RUSS&crse_numb_in=33000",
                                "title": "Russian And East European Cinema"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "RUSS",
                                "number": 34100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=RUSS&crse_numb_in=34100",
                                "title": "Russian Literature In The Nineteenth Century"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "RUSS",
                                "number": 34200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=RUSS&crse_numb_in=34200",
                                "title": "Revolution, Repression, Renewal: Soviet Literature And Beyond"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "RUSS",
                                "number": 38000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=RUSS&crse_numb_in=38000",
                                "title": "Russian Culture And Civilization I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "RUSS",
                                "number": 48000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=RUSS&crse_numb_in=48000",
                                "title": "Russian Civilization"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "RUSS",
                                "number": 58100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=RUSS&crse_numb_in=58100",
                                "title": "Russian Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 10000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=10000",
                                "title": "Introductory Sociology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 22000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=22000",
                                "title": "Social Problems"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 27500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=27500",
                                "title": "Sociology Of Aging And The Life Course"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 31000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=31000",
                                "title": "Race And Ethnicity"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 31200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=31200",
                                "title": "American Society"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 32400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=32400",
                                "title": "Criminology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 32600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=32600",
                                "title": "Social Conflict And Criminal Justice"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 32700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=32700",
                                "title": "Crime, Deviance And Mass Media"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 32800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=32800",
                                "title": "Criminal Justice"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 33400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=33400",
                                "title": "Urban Sociology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 33800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=33800",
                                "title": "Global Social Movements"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 33900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=33900",
                                "title": "Sociology Of Global Development"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 34000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=34000",
                                "title": "General Social Psychology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 34400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=34400",
                                "title": "Environmental Sociology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 35000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=35000",
                                "title": "Sociology Of Family"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 35200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=35200",
                                "title": "Drugs, Culture, And Society"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 35600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=35600",
                                "title": "Hate And Violence"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 36700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=36700",
                                "title": "Religion In America"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 36800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=36800",
                                "title": "The Social Significance Of Religion"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 36900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=36900",
                                "title": "Religion And Chinese Society"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 37400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=37400",
                                "title": "Medical Sociology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 39100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=39100",
                                "title": "Selected Topics In Sociology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 40200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=40200",
                                "title": "Sociological Theory"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 41100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=41100",
                                "title": "Social Inequality"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 41900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=41900",
                                "title": "Sociology Of Law"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 42100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=42100",
                                "title": "Juvenile Delinquency"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 42600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=42600",
                                "title": "Social Deviance And Control"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 42900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=42900",
                                "title": "Sociology Of Protest"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 45000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=45000",
                                "title": "Gender Roles In Modern Society"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 46100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=46100",
                                "title": "Health And Social Behavior"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 52500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=52500",
                                "title": "Social Movements"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 53100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=53100",
                                "title": "Community Organization"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 56700,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=56700",
                                "title": "Religion In Social Context"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 56800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=56800",
                                "title": "Religion And Society"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 57000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=57000",
                                "title": "Sociology Of Education"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 57200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=57200",
                                "title": "Comparative Healthcare Systems"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 57300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=57300",
                                "title": "The Human Side Of Medicine"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 57400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=57400",
                                "title": "The Social Organization Of Healthcare"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 57600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=57600",
                                "title": "Health And Aging In Social Context"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SOC",
                                "number": 59100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=59100",
                                "title": "Selected Topics In Sociology"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 23100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=23100",
                                "title": "Cervantes\u2019 Don Quixote"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 23500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=23500",
                                "title": "Spanish American Literature In Translation"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 24100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=24100",
                                "title": "Introduction To The Study Of Hispanic Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 28000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=28000",
                                "title": "Second-Year Spanish: Special Topics"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 33000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=33000",
                                "title": "Spanish And Latin American Cinema"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 33500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=33500",
                                "title": "The Literature Of The Spanish-Speaking Peoples In The United States"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 34100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=34100",
                                "title": "Hispanic Literature I: Poetry And Drama"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 34200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=34200",
                                "title": "Hispanic Literature II: Prose"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 48000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=48000",
                                "title": "Spanish Civilization"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 48100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=48100",
                                "title": "Spanish Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 48200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=48200",
                                "title": "Latin American Civilization"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 48300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=48300",
                                "title": "Latin American Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 48500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=48500",
                                "title": "Food And Culture In The Hispanic World"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 49800,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=49800",
                                "title": "Advanced Topics In Spanish"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 54000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=54000",
                                "title": "Spanish Literature Of The Middle Ages"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 54100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=54100",
                                "title": "Spanish Literature Of The Golden Age"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 54200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=54200",
                                "title": "Cervantes Don Quijote"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 54300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=54300",
                                "title": "Spanish Literature Of The 18th And 19th Centuries"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 54500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=54500",
                                "title": "Spanish Literature Of The 20th Century"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 55000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=55000",
                                "title": "Spanish American Literature Of The Colonial Period"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 55100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=55100",
                                "title": "Spanish American Literature Of The 19th Century"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 55200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=55200",
                                "title": "Spanish American Literature From 1900 To 1970"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 55300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=55300",
                                "title": "Spanish American Literature From 1970- Present"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 55400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=55400",
                                "title": "Hispanic Caribbean Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 55500,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=55500",
                                "title": "Latino/a Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 55600,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=55600",
                                "title": "Mexican Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "SPAN",
                                "number": 59400,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=59400",
                                "title": "Special Topics In Hispanic Literature"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "THTR",
                                "number": 20100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=THTR&crse_numb_in=20100",
                                "title": "Theatre Appreciation"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "THTR",
                                "number": 38000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=THTR&crse_numb_in=38000",
                                "title": "History Of Theatre I"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "THTR",
                                "number": 38100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=THTR&crse_numb_in=38100",
                                "title": "History Of Theatre II"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "THTR",
                                "number": 39000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=THTR&crse_numb_in=39000",
                                "title": "Directed Study Of Special Theatre Problems"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "WGSS",
                                "number": 28000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=28000",
                                "title": "Women\u2019s, Gender, And Sexuality Studies: An Introduction"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "WGSS",
                                "number": 28100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=28100",
                                "title": "Variable Topics In Women\u2019s, Gender, And Sexuality Studies"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "WGSS",
                                "number": 28200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=28200",
                                "title": "Introduction To LGBTQ Studies"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "WGSS",
                                "number": 38000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=38000",
                                "title": "Comparative Studies In Gender And Culture"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "WGSS",
                                "number": 38100,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=38100",
                                "title": "Women Of Color In The United States"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "WGSS",
                                "number": 38200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=38200",
                                "title": "Love, Sex And Sexuality"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "WGSS",
                                "number": 38300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=38300",
                                "title": "Women, Work, And Labor"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "WGSS",
                                "number": 39000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=39000",
                                "title": "Variable Topics In Women\u2019s, Gender And Sexuality Studies"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "WGSS",
                                "number": 48000,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=48000",
                                "title": "Feminist Theory"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "WGSS",
                                "number": 48200,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=48200",
                                "title": "Interdisciplinary Studies In Sexuality: Scholarship On Lesbian And Gay Issues"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "WGSS",
                                "number": 48300,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=48300",
                                "title": "Feminisms In Global Perspective"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "WGSS",
                                "number": 49900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=49900",
                                "title": "Independent Study In Women\u2019s, Gender And Sexuality Studies"
                            }
                        },
                        {
                            "type": "course",
                            "value": {
                                "subject": "WGSS",
                                "number": 59900,
                                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=59900",
                                "title": "Selected Topics In Women\u2019s Gender And Sexuality Studies"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "title": "3 Culture",
            "type": "choose 3",
            "value": [
                {
                    "type": "course",
                    "value": {
                        "subject": "AAS",
                        "number": 27100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=27100",
                        "title": "Introduction To African American Studies"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AAS",
                        "number": 27700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=27700",
                        "title": "African American Popular Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AAS",
                        "number": 35900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=35900",
                        "title": "Black Women Writers"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AAS",
                        "number": 37000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=37000",
                        "title": "Black Women Rising"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AAS",
                        "number": 37100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=37100",
                        "title": "The African American Experience"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AAS",
                        "number": 37300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=37300",
                        "title": "Issues In African American Studies"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AAS",
                        "number": 37500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=37500",
                        "title": "The Black Family"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AAS",
                        "number": 37600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=37600",
                        "title": "The Black Male"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AAS",
                        "number": 37700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=37700",
                        "title": "African American Sexuality And Society"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AAS",
                        "number": 39200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=39200",
                        "title": "Caribbean History And Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AAS",
                        "number": 47300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=47300",
                        "title": "Blacks In Hollywood Film"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AAS",
                        "number": 49100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=49100",
                        "title": "Special Topics In African American Studies"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AAS",
                        "number": 57500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AAS&crse_numb_in=57500",
                        "title": "Theories Of African American Studies"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AD",
                        "number": 12500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=12500",
                        "title": "Introduction To Interior Design"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AD",
                        "number": 22600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=22600",
                        "title": "History Of Art To 1400"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AD",
                        "number": 22700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=22700",
                        "title": "History Of Art Since 1400"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AD",
                        "number": 25100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=25100",
                        "title": "History Of Photography I"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AD",
                        "number": 25500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=25500",
                        "title": "Art Appreciation"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AD",
                        "number": 31100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=31100",
                        "title": "Ancient Greek Art"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AD",
                        "number": 31200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=31200",
                        "title": "Ancient Roman Art"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AD",
                        "number": 33400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=33400",
                        "title": "New Media Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AD",
                        "number": 33900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=33900",
                        "title": "Women Artists In The 20th Century"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AD",
                        "number": 34300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=34300",
                        "title": "Northern Renaissance Art"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AD",
                        "number": 34400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=34400",
                        "title": "Latin American Art In The 20th Century"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AD",
                        "number": 34600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=34600",
                        "title": "Italian Renaissance Art"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AD",
                        "number": 34800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=34800",
                        "title": "History Of Islamic Art"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AD",
                        "number": 35900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=35900",
                        "title": "Medieval European Art"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AD",
                        "number": 38000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=38000",
                        "title": "Baroque Art"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AD",
                        "number": 38200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=38200",
                        "title": "A Global History Of Modern Art"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AD",
                        "number": 38300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=38300",
                        "title": "Modern Art"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AD",
                        "number": 38400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=38400",
                        "title": "Contemporary Art"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AD",
                        "number": 38500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=38500",
                        "title": "History Of Interior Design"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AD",
                        "number": 39100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=39100",
                        "title": "History Of Chinese Art"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AD",
                        "number": 39500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=39500",
                        "title": "History Of Design"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AD",
                        "number": 45400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AD&crse_numb_in=45400",
                        "title": "Modern Architecture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AGEC",
                        "number": 21700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AGEC&crse_numb_in=21700",
                        "title": "Economics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AMST",
                        "number": 10100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AMST&crse_numb_in=10100",
                        "title": "America And The World"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AMST",
                        "number": 20100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AMST&crse_numb_in=20100",
                        "title": "Interpreting America"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AMST",
                        "number": 30100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AMST&crse_numb_in=30100",
                        "title": "Perspectives On America"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AMST",
                        "number": 31000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AMST&crse_numb_in=31000",
                        "title": "Invention, Innovation, And Design"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AMST",
                        "number": 32000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AMST&crse_numb_in=32000",
                        "title": "Understanding The National Football League"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "AMST",
                        "number": 32500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=AMST&crse_numb_in=32500",
                        "title": "Sports, Technology, And Innovation"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 10000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=10000",
                        "title": "Being Human: Introduction to Anthropology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 20100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=20100",
                        "title": "Introduction To Archaeology And World Prehistory"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 20300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=20300",
                        "title": "Biological Bases Of Human Social Behavior"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 20400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=20400",
                        "title": "Human Origins"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 20500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=20500",
                        "title": "Human Cultural Diversity"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 21000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=21000",
                        "title": "Technology And Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 21200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=21200",
                        "title": "Culture, Food And Health"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 23000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=23000",
                        "title": "Gender Across Cultures"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 23500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=23500",
                        "title": "The Great Apes"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 25400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=25400",
                        "title": "Archaeological Hoaxes, Myths And Frauds"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 28200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=28200",
                        "title": "Introduction To LGBTQ Studies"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 30700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=30700",
                        "title": "The Development Of Contemporary Anthropological Theory"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 31000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=31000",
                        "title": "Mortuary Practices Across Cultures"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 31100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=31100",
                        "title": "The Archaeology Of The Ancient Andes"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 31200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=31200",
                        "title": "The Archaeology Of Ancient Egypt And The Near East"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 31300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=31300",
                        "title": "Archaeology Of North America"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 32000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=32000",
                        "title": "Ancient States And Empires"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 32700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=32700",
                        "title": "Environment And Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 33500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=33500",
                        "title": "Primate Behavior"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 33600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=33600",
                        "title": "Human Variation"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 33700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=33700",
                        "title": "Human Diet: Origins And Evolution"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 34000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=34000",
                        "title": "Global Perspectives On Health"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 34100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=34100",
                        "title": "Culture And Personality"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 35800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=35800",
                        "title": "African Cultures"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 37000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=37000",
                        "title": "Ethnicity And Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 37300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=37300",
                        "title": "Anthropology Of Religion"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 37700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=37700",
                        "title": "Anthropology Of Hunter-Gatherer Societies"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 37800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=37800",
                        "title": "Archaeology And Cultural Anthropology Of Mesoamerica (Mexico, Belize And Guatemala)"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 37900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=37900",
                        "title": "Native American Cultures"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 38000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=38000",
                        "title": "Using Anthropology In The World"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 38400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=38400",
                        "title": "Designing For People: Anthropological Approaches"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 39200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=39200",
                        "title": "Selected Topics In Anthropology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 40400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=40400",
                        "title": "Comparative Social Organization"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 41400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=41400",
                        "title": "Introduction To Language And Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 42500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=42500",
                        "title": "Archaeological Method And Theory"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 43600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=43600",
                        "title": "Human Evolution"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 48200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=48200",
                        "title": "Sexual Diversity In Global Perspectives"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 50400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=50400",
                        "title": "Archaeological Theory"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 50500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=50500",
                        "title": "Culture And Society"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 50700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=50700",
                        "title": "History Of Theory In Anthropology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 53400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=53400",
                        "title": "Human Osteology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 53500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=53500",
                        "title": "Foundations Of Biological Anthropology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 53600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=53600",
                        "title": "Primate Ecology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 57500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=57500",
                        "title": "Economic Anthropology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ANTH",
                        "number": 59200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=59200",
                        "title": "Selected Topics In Anthropology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ARAB",
                        "number": 23000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ARAB&crse_numb_in=23000",
                        "title": "Arabic Literature In Translation"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ARAB",
                        "number": 23900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ARAB&crse_numb_in=23900",
                        "title": "Arab Women Writers"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ARAB",
                        "number": 28000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ARAB&crse_numb_in=28000",
                        "title": "Arabic Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ARAB",
                        "number": 28100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ARAB&crse_numb_in=28100",
                        "title": "Introduction To Islamic Civilization And Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ARAB",
                        "number": 33400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ARAB&crse_numb_in=33400",
                        "title": "North African Literature And Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ASAM",
                        "number": 24000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ASAM&crse_numb_in=24000",
                        "title": "Introduction To Asian American Studies"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ASAM",
                        "number": 34000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ASAM&crse_numb_in=34000",
                        "title": "Contemporary Issues In Asian American Studies"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ASEC",
                        "number": 49100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ASEC&crse_numb_in=49100",
                        "title": "Special Topics In Agricultural Science And Education Communication"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ASL",
                        "number": 28000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ASL&crse_numb_in=28000",
                        "title": "American Deaf Community: Language, Culture, And Society"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CHNS",
                        "number": 24100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHNS&crse_numb_in=24100",
                        "title": "Introduction To The Study Of Chinese Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CHNS",
                        "number": 28000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHNS&crse_numb_in=28000",
                        "title": "Topics in Chinese Civilization and Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CHNS",
                        "number": 28100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHNS&crse_numb_in=28100",
                        "title": "Introduction To Chinese Food Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CHNS",
                        "number": 33000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHNS&crse_numb_in=33000",
                        "title": "Introduction To Chinese Cinema"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CHNS",
                        "number": 34100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHNS&crse_numb_in=34100",
                        "title": "Chinese Literature I: Traditional Chinese Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CHNS",
                        "number": 34200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHNS&crse_numb_in=34200",
                        "title": "Chinese Literature II: Modern Chinese Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CHNS",
                        "number": 49000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHNS&crse_numb_in=49000",
                        "title": "Special Topics In Chinese Language"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CHNS",
                        "number": 59400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHNS&crse_numb_in=59400",
                        "title": "Special Topics In Chinese Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CLCS",
                        "number": 18100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=18100",
                        "title": "Classical World Civilizations"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CLCS",
                        "number": 23010,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=23010",
                        "title": "Survey Of Greek Literature In Translation"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CLCS",
                        "number": 23100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=23100",
                        "title": "Survey Of Latin Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CLCS",
                        "number": 23300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=23300",
                        "title": "Comparative Mythology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CLCS",
                        "number": 23500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=23500",
                        "title": "Introduction To Classical Mythology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CLCS",
                        "number": 23700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=23700",
                        "title": "Gender And Sexuality In Greek And Roman Antiquity"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CLCS",
                        "number": 23800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=23800",
                        "title": "The Tragic Vision"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CLCS",
                        "number": 23900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=23900",
                        "title": "The Comic Vision"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CLCS",
                        "number": 28000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=28000",
                        "title": "Topics In Classical Civilization"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CLCS",
                        "number": 33700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=33700",
                        "title": "The Ancient Epic"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CLCS",
                        "number": 33900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=33900",
                        "title": "Literature And The Law"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CLCS",
                        "number": 38000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=38000",
                        "title": "Alexander The Great and Hellenistic World"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CLCS",
                        "number": 38100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=38100",
                        "title": "Julius Caesar: Statesman, Soldier, Citizen"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CLCS",
                        "number": 38300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=38300",
                        "title": "The Roman Empire"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CLCS",
                        "number": 38400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=38400",
                        "title": "Ancient Western Medicine"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CLCS",
                        "number": 38500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=38500",
                        "title": "Science, Medicine And Magic In The Ancient West"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CLCS",
                        "number": 38600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=38600",
                        "title": "Ancient Greek Religion"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CLCS",
                        "number": 38700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=38700",
                        "title": "Roman Religion"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CLCS",
                        "number": 48000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=48000",
                        "title": "Potters And Society In Antiquity"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CLCS",
                        "number": 48100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=48100",
                        "title": "Culture And Society In The Age Of Pericles"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CLCS",
                        "number": 48300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=48300",
                        "title": "Republican Rome"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CLCS",
                        "number": 59300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CLCS&crse_numb_in=59300",
                        "title": "Special Topics In Classical Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CMPL",
                        "number": 23000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CMPL&crse_numb_in=23000",
                        "title": "Crossing Borders: Introduction To Comparative Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CMPL",
                        "number": 26600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CMPL&crse_numb_in=26600",
                        "title": "World Literature: From The Beginnings To 1700 A D"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "CMPL",
                        "number": 26700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CMPL&crse_numb_in=26700",
                        "title": "World Literature: From 1700 A D To The Present"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "COM",
                        "number": 22400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=COM&crse_numb_in=22400",
                        "title": "Communicating In The Global Workplace"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "COM",
                        "number": 25000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=COM&crse_numb_in=25000",
                        "title": "Mass Communication And Society"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "COM",
                        "number": 25100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=COM&crse_numb_in=25100",
                        "title": "Communication, Information, And Society"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "COM",
                        "number": 31200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=COM&crse_numb_in=31200",
                        "title": "Rhetoric In The Western World"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "COM",
                        "number": 31400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=COM&crse_numb_in=31400",
                        "title": "Advanced Presentational Speaking"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "COM",
                        "number": 31800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=COM&crse_numb_in=31800",
                        "title": "Principles Of Persuasion"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "COM",
                        "number": 32000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=COM&crse_numb_in=32000",
                        "title": "Small Group Communication"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "COM",
                        "number": 32900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=COM&crse_numb_in=32900",
                        "title": "History Of The Mass Media"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "COM",
                        "number": 35100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=COM&crse_numb_in=35100",
                        "title": "Mass Communication Ethics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "DANC",
                        "number": 25000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=DANC&crse_numb_in=25000",
                        "title": "Dance Appreciation"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ECON",
                        "number": 21000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ECON&crse_numb_in=21000",
                        "title": "Principles Of Economics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ECON",
                        "number": 25100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ECON&crse_numb_in=25100",
                        "title": "Microeconomics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ECON",
                        "number": 25200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ECON&crse_numb_in=25200",
                        "title": "Macroeconomics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "EDPS",
                        "number": 23500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=EDPS&crse_numb_in=23500",
                        "title": "Learning And Motivation"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 20200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=20200",
                        "title": "Engaging English"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 21700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=21700",
                        "title": "Figures Of Myth And Legend I: Monsters"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 21800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=21800",
                        "title": "Figures Of Myth And Legends II: Heroes And Villains"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 21900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=21900",
                        "title": "Figures Of Myth And Legend III: Magic And Marvels"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 22300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=22300",
                        "title": "Literature And Technology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 22400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=22400",
                        "title": "Literature, Money, And Markets"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 22500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=22500",
                        "title": "Literature, Inequality, And Injustice"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 22600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=22600",
                        "title": "Narrative Medicine"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 22800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=22800",
                        "title": "Language And Social Identity"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 23000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=23000",
                        "title": "Great Narrative Works"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 23200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=23200",
                        "title": "Thematic Studies In Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 23400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=23400",
                        "title": "Literature And The Environment"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 23500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=23500",
                        "title": "Introduction To Drama"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 23700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=23700",
                        "title": "Introduction To Poetry"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 23800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=23800",
                        "title": "Introduction To Fiction"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 24000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=24000",
                        "title": "British Literature Before 1789"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 24100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=24100",
                        "title": "British Literature After 1789"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 24900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=24900",
                        "title": "Great British Books"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 25000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=25000",
                        "title": "Great American Books"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 25700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=25700",
                        "title": "Literature Of Black America"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 25800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=25800",
                        "title": "Nobel Prize Winners In Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 26200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=26200",
                        "title": "Greek And Roman Classics In Translation"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 26400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=26400",
                        "title": "The Bible As Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 26600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=26600",
                        "title": "World Literature: From The Beginnings To 1700 A.D."
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 26700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=26700",
                        "title": "World Literature: From 1700 A.D. To The Present"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 27600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=27600",
                        "title": "Shakespeare On Film"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 27900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=27900",
                        "title": "The American Short Story In Print And Film"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 28000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=28000",
                        "title": "Games, Narrative, Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 28600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=28600",
                        "title": "The Movies"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 32200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=32200",
                        "title": "Word, Image, Media"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 33000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=33000",
                        "title": "Games And Diversity"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 33100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=33100",
                        "title": "Medieval English Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 33300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=33300",
                        "title": "Renaissance English Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 33500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=33500",
                        "title": "Restoration And Eighteenth-Century English Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 33700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=33700",
                        "title": "Nineteenth-Century English Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 33900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=33900",
                        "title": "Twentieth-Century British Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 34100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=34100",
                        "title": "Topics In Science, Literature, And Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 34200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=34200",
                        "title": "Legal Fictions"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 34300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=34300",
                        "title": "Labor And Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 34400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=34400",
                        "title": "Environmental Ethics, Policy, And Sustainability"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 34500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=34500",
                        "title": "Games And World Building"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 35000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=35000",
                        "title": "American Literature Before 1865"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 35100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=35100",
                        "title": "American Literature After 1865"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 35200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=35200",
                        "title": "Native American Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 35400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=35400",
                        "title": "Asian American Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 35800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=35800",
                        "title": "Black Drama"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 35900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=35900",
                        "title": "Black Women Writers"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 36000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=36000",
                        "title": "Gender And Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 36500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=36500",
                        "title": "Literature And Imperialism"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 36600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=36600",
                        "title": "Postcolonial Literatures"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 36700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=36700",
                        "title": "Mystery And Detective Fiction"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 37000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=37000",
                        "title": "Nineteenth-Century American Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 37100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=37100",
                        "title": "Twentieth-Century American Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 37300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=37300",
                        "title": "Science Fiction And Fantasy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 37700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=37700",
                        "title": "Modern And Contemporary Poetry"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 37900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=37900",
                        "title": "The Short Story"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 38100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=38100",
                        "title": "The British Novel"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 38200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=38200",
                        "title": "The American Novel"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 38600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=38600",
                        "title": "History Of Film To 1950"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 38700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=38700",
                        "title": "History Of Film Since 1950"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 38900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=38900",
                        "title": "Literature For Children"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 39200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=39200",
                        "title": "Young Adult Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 39300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=39300",
                        "title": "Interdisciplinary Approaches To Environmental And Sustainability Studies"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 39600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=39600",
                        "title": "Studies In Literature And Language"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 41100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=41100",
                        "title": "Studies In Major Authors"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 41200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=41200",
                        "title": "Studies In Genre"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 41300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=41300",
                        "title": "Studies In Literature And History"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 41400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=41400",
                        "title": "Studies In Literature And Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 43900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=43900",
                        "title": "Topics In Disability Studies"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 44100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=44100",
                        "title": "Chaucer\u2019s Canterbury Tales"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 44200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=44200",
                        "title": "Shakespeare"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 44400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=44400",
                        "title": "Milton"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 46000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=46000",
                        "title": "Studies In Women\u2019s Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 46200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=46200",
                        "title": "The Bible As Literature: The Old Testament"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 46300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=46300",
                        "title": "The Bible As Literature: The New Testament"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 46600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=46600",
                        "title": "Cultural Encounters"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 52800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=52800",
                        "title": "Medieval English Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 53100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=53100",
                        "title": "The Rise Of The Novel"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 53200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=53200",
                        "title": "The English Novel In The Nineteenth Century"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 53400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=53400",
                        "title": "Seventeenth-Century Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 53500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=53500",
                        "title": "Restoration And Early Eighteenth-Century Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 53800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=53800",
                        "title": "English Drama From The Restoration To The Modern Period"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 54100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=54100",
                        "title": "Studies In Chaucer\u2019s Canterbury Tales"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 54300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=54300",
                        "title": "Shakespeare In Critical Perspective"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 54400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=54400",
                        "title": "Milton"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 54700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=54700",
                        "title": "British Romanticism"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 54800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=54800",
                        "title": "Victorian Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 55200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=55200",
                        "title": "Studies In Major American Authors"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 55300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=55300",
                        "title": "Colonial And Early American Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 55400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=55400",
                        "title": "American Literary Culture 1820-1860"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 55700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=55700",
                        "title": "Nineteenth-Century African-American Narrative"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 55800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=55800",
                        "title": "American Literature In The Later Nineteenth Century"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 56000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=56000",
                        "title": "Modern American Poetry"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 57300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=57300",
                        "title": "Tragedy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 57900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=57900",
                        "title": "Modern British Fiction"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 58300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=58300",
                        "title": "U S Ethnic/Multicultural Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 59200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=59200",
                        "title": "Postcolonial Studies"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 59300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=59300",
                        "title": "Contemporary British Fiction"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 59400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=59400",
                        "title": "Contemporary Poetry"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 59500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=59500",
                        "title": "Contemporary American Fiction"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 59600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=59600",
                        "title": "Advanced Studies In Literature Or Language"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENGL",
                        "number": 59700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENGL&crse_numb_in=59700",
                        "title": "Contemporary Black Feminist Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENTR",
                        "number": 20000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENTR&crse_numb_in=20000",
                        "title": "Introduction To Entrepreneurship And Innovation"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENTR",
                        "number": 31000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENTR&crse_numb_in=31000",
                        "title": "Marketing And Management For New Ventures"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ENTR",
                        "number": 47000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENTR&crse_numb_in=47000",
                        "title": "Women And Leadership"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "FNR",
                        "number": 48800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FNR&crse_numb_in=48800",
                        "title": "Global Environmental Issues"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "FR",
                        "number": 24100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=24100",
                        "title": "Introduction To The Study Of French Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "FR",
                        "number": 33000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=33000",
                        "title": "French Cinema"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "FR",
                        "number": 34100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=34100",
                        "title": "French Literature I: From The Middle Ages To The Enlightenment"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "FR",
                        "number": 34200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=34200",
                        "title": "French Literature II: The 19th And 20th Centuries"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "FR",
                        "number": 38000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=38000",
                        "title": "Special Topics In French Culture And Civilization"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "FR",
                        "number": 39400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=39400",
                        "title": "Special Topics In French Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "FR",
                        "number": 44300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=44300",
                        "title": "Introduction To Francophone Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "FR",
                        "number": 48000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=48000",
                        "title": "French Civilization"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "FR",
                        "number": 54100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=54100",
                        "title": "Renaissance French Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "FR",
                        "number": 54900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=54900",
                        "title": "French Literature And Film"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "FR",
                        "number": 55800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=55800",
                        "title": "French Novel Of The Twentieth Century"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "FR",
                        "number": 58100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=58100",
                        "title": "French Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "FR",
                        "number": 58200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=58200",
                        "title": "Francophone Cultures"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "FR",
                        "number": 59400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FR&crse_numb_in=59400",
                        "title": "Special Topics In French Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "FS",
                        "number": 47000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FS&crse_numb_in=47000",
                        "title": "Wine Appreciation"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "FVS",
                        "number": 49100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=FVS&crse_numb_in=49100",
                        "title": "Special Topics In Film/Video Studies"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "GER",
                        "number": 23000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=23000",
                        "title": "German Literature In Translation"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "GER",
                        "number": 24100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=24100",
                        "title": "Introduction To The Study Of German Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "GER",
                        "number": 28000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=28000",
                        "title": "German Special Topics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "GER",
                        "number": 33000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=33000",
                        "title": "German Cinema"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "GER",
                        "number": 34100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=34100",
                        "title": "German Literature I: From The Middle Ages To The 18th Century"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "GER",
                        "number": 34200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=34200",
                        "title": "German Literature II: From The 18th Century To The 21st Century"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "GER",
                        "number": 48000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=48000",
                        "title": "German Civilization"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "GER",
                        "number": 54400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=54400",
                        "title": "German Romanticism"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "GER",
                        "number": 54500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=54500",
                        "title": "German Prose From Naturalism To The Present"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "GER",
                        "number": 55100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=55100",
                        "title": "Lyric Poetry From Romanticism To The Present"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "GER",
                        "number": 55400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=55400",
                        "title": "German Drama Before Naturalism"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "GER",
                        "number": 55500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=55500",
                        "title": "German Drama From Naturalism To The Present"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "GER",
                        "number": 58100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=58100",
                        "title": "German Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "GER",
                        "number": 59400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=GER&crse_numb_in=59400",
                        "title": "Special Topics In German Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HEBR",
                        "number": 28400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HEBR&crse_numb_in=28400",
                        "title": "Ancient Near Eastern History And Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HEBR",
                        "number": 38000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HEBR&crse_numb_in=38000",
                        "title": "Israel And The Modern World: Cinema, Literature, History And Politics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HDFS",
                        "number": 21000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HDFS&crse_numb_in=21000",
                        "title": "Introduction To Human Development"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 10300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=10300",
                        "title": "Introduction To The Medieval World"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 10400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=10400",
                        "title": "Introduction To The Modern World"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 10500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=10500",
                        "title": "Survey Of Global History"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 15100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=15100",
                        "title": "American History To 1877"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 15200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=15200",
                        "title": "United States Since 1877"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 20100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=20100",
                        "title": "Special Topics In History"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 21000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=21000",
                        "title": "The Making Of Modern Africa"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 21100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=21100",
                        "title": "The Global Field: World Soccer And Global History"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 22800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=22800",
                        "title": "English History To 1688"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 23800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=23800",
                        "title": "History Of Russia From Medieval Times To 1861"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 23005,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=23005",
                        "title": "Hitler\u2019s Europe"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 23900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=23900",
                        "title": "History Of Russia From 1861 To The Present"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 24000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=24000",
                        "title": "East Asia And Its Historic Tradition"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 24100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=24100",
                        "title": "East Asia In The Modern World"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 24300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=24300",
                        "title": "South Asian History And Civilizations"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 24500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=24500",
                        "title": "Introduction To The Middle East History And Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 24600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=24600",
                        "title": "Modern Middle East And North Africa"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 25000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=25000",
                        "title": "United States Relations With The Middle East And North Africa"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 27100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=27100",
                        "title": "Introduction To Colonial Latin American History (1492-1810)"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 27200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=27200",
                        "title": "Introduction To Modern Latin American History (1810 To The Present)"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 30000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=30000",
                        "title": "Eve Of Destruction: Global Crises And World Organization In The 20th Century"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 30200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=30200",
                        "title": "Historical Topics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 30305,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=30305",
                        "title": "Food In Modern America"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 30400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=30400",
                        "title": "America In The 1960s"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 30505,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=30505",
                        "title": "The United States In The World 1898-Present"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 30605,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=30605",
                        "title": "Technology And War In U.S. History"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 31005,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=31005",
                        "title": "The Civil War And Reconstruction, 1850 To 1877"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 31205,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=31205",
                        "title": "The Arab-Israeli Conflict"
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
                        "number": 31405,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=31405",
                        "title": "Science, Technology, Engineering And Mathematics (STEM) And Gender"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 31505,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=31505",
                        "title": "American Beauty"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 31700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=31700",
                        "title": "A History Of The Christian Church And The Expansion Of Christianity I"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 31800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=31800",
                        "title": "A History Of The Christian Church And The Expansion Of Christianity II"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 31905,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=31905",
                        "title": "Christianity In The Global Age"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 32000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=32000",
                        "title": "The World Of Charlemagne"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 32105,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=32105",
                        "title": "Spain: The First Global Empire, 1469-1713"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 32200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=32200",
                        "title": "Monarchy: Its Rise And Fall"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 32300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=32300",
                        "title": "German History"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 32400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=32400",
                        "title": "Modern France"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 32501,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=32501",
                        "title": "Twentieth Century Europe Through Autobiography"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 32600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=32600",
                        "title": "Popular Culture In Preindustrial Europe (1400-1800)"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 32900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=32900",
                        "title": "History Of Women In Modern Europe"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 33100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=33100",
                        "title": "Great Figures In History"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 33205,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=33205",
                        "title": "The Nuclear Age"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 33300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=33300",
                        "title": "Science And Society In Western Civilization I"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 33505,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=33505",
                        "title": "Nationalism And Socialism In East Central Europe"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 33700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=33700",
                        "title": "Europe In The Age Of The Cold War"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 33805,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=33805",
                        "title": "History Of Human Rights"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 33900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=33900",
                        "title": "Traditional China"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 34000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=34000",
                        "title": "Modern China"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 34300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=34300",
                        "title": "Traditional Japan"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 34400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=34400",
                        "title": "History Of Modern Japan"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 34705,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=34705",
                        "title": "History Of Religion In America"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 34901,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=34901",
                        "title": "The First World War"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 35000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=35000",
                        "title": "Science And Society In The Twentieth Century World"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 35100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=35100",
                        "title": "The Second World War"
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
                        "subject": "HIST",
                        "number": 35305,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=35305",
                        "title": "Sports In America"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 35400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=35400",
                        "title": "Women In America To 1870"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 35500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=35500",
                        "title": "History Of American Military Affairs"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 35600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=35600",
                        "title": "America In Vietnam"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 35700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=35700",
                        "title": "History Of Southern Africa Since 1400"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 35900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=35900",
                        "title": "Gender In East Asian History"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 36101,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=36101",
                        "title": "Violence, War, And Militarism In Modern Africa"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 36305,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=36305",
                        "title": "The History Of Medicine And Public Health"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 36600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=36600",
                        "title": "Hispanic Heritage Of The United States"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 37005,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=37005",
                        "title": "Queens And Empresses In Early Modern Europe"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 37100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=37100",
                        "title": "Society, Culture, And Rock And Roll"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 37200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=37200",
                        "title": "History Of The American West"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 37500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=37500",
                        "title": "Women In America Since 1870"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 37600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=37600",
                        "title": "History Of Indiana"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 37700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=37700",
                        "title": "History And Culture Of Native America"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 38001,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=38001",
                        "title": "History Of United States Agriculture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 38200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=38200",
                        "title": "American Constitutional History"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 38300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=38300",
                        "title": "Recent American Constitutional History"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 38400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=38400",
                        "title": "History Of Aviation"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 38505,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=38505",
                        "title": "Media, Politics And Popular Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 38605,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=38605",
                        "title": "Land Of The Indians: Native Americans In Indiana"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 38700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=38700",
                        "title": "History Of The Space Age"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 39200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=39200",
                        "title": "Caribbean History And Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 39400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=39400",
                        "title": "Environmental History Of The United States"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 39500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=39500",
                        "title": "Junior Research Seminar"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 39600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=39600",
                        "title": "African American History To 1877"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 39800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=39800",
                        "title": "African American History Since 1877"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 40000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=40000",
                        "title": "Great Books And The Search For Meaning"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 40300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=40300",
                        "title": "Europe In The Reformation"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 40400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=40400",
                        "title": "Kings And Philosophers: Europe 1618-1789"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 40500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=40500",
                        "title": "The French Revolution And Napoleon"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 40600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=40600",
                        "title": "Rebels And Romantics: Europe 1815-1870"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 40700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=40700",
                        "title": "Road To World War I: Europe 1870-1919"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 40800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=40800",
                        "title": "Dictatorship And Democracy: Europe 1919-1945"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 41005,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=41005",
                        "title": "History Of The American Presidency"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 41300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=41300",
                        "title": "Modern European Imperialism: Repression and Resistance"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 41505,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=41505",
                        "title": "Gender And Politics In Early Modern Europe"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 41800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=41800",
                        "title": "European Society And Culture 1450-1800"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 42300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=42300",
                        "title": "Advanced Topics In Modern Germany"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 43900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=43900",
                        "title": "Communist China"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 44100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=44100",
                        "title": "Africa In The Twentieth Century"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 46000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=46000",
                        "title": "American Colonial History"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 46100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=46100",
                        "title": "The Revolutionary Era, 1763 To 1800"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 46700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=46700",
                        "title": "The Emergence Of Modern America"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 46800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=46800",
                        "title": "Recent American History"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 46900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=46900",
                        "title": "Black Civil Rights Movement"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 47005,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=47005",
                        "title": "Women And Health In America"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 47300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=47300",
                        "title": "History Of The South"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 47500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=47500",
                        "title": "Spanish Frontier In North America"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 47600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=47600",
                        "title": "The Civil War In Myth And Memory"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 47700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=47700",
                        "title": "Native American Women\u2019s History"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 48005,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=48005",
                        "title": "Madness And The Asylum In The United States"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 48500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=48500",
                        "title": "Topics In American Political History"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 48800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=48800",
                        "title": "History Of Sexual Regulation In The United States"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 49200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=49200",
                        "title": "Seminar In Historical Topics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 49500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=49500",
                        "title": "Research Seminar In Historical Topics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 50000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=50000",
                        "title": "Studies In Medieval History"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 50500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=50500",
                        "title": "Haunted Pasts: Ghosts, Ghouls And Monsters In Global Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 51200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=51200",
                        "title": "England Under The Stuarts"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 51400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=51400",
                        "title": "A History Of Western Thought I"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 51500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=51500",
                        "title": "A History Of Western Thought II"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 54800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=54800",
                        "title": "Conflict In East Asia: Twentieth Century"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 57600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=57600",
                        "title": "Problems In Latin American History"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 58600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=58600",
                        "title": "United States Foreign Affairs To World War I"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 58700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=58700",
                        "title": "United States Foreign Affairs: World War I To Present"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 59300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=59300",
                        "title": "Twentieth-Century American Intellectual History"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 59400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=59400",
                        "title": "Afro-American Thought And Ideology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HIST",
                        "number": 59500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HIST&crse_numb_in=59500",
                        "title": "The Holocaust And Genocide"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "HONR",
                        "number": 19900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HONR&crse_numb_in=19900",
                        "title": "Interdisciplinary Honors - Introductory Seminar"
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
                        "subject": "IDIS",
                        "number": 49100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=IDIS&crse_numb_in=49100",
                        "title": "Special Topics In Interdisciplinary Studies"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "IDIS",
                        "number": 59100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=IDIS&crse_numb_in=59100",
                        "title": "Selected Topics In Interdisciplinary Studies"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ILS",
                        "number": 23000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ILS&crse_numb_in=23000",
                        "title": "Data Science And Society: Ethical Legal Social Issues"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ITAL",
                        "number": 23100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ITAL&crse_numb_in=23100",
                        "title": "Dante\u2019s Divine Comedy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ITAL",
                        "number": 28100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ITAL&crse_numb_in=28100",
                        "title": "The Italian Renaissance And Its Scientific And Cultural Impact On Western Civilization"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ITAL",
                        "number": 33000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ITAL&crse_numb_in=33000",
                        "title": "The Italian Cinema"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ITAL",
                        "number": 33300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ITAL&crse_numb_in=33300",
                        "title": "The Spirit Of Italian Comedy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ITAL",
                        "number": 33500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ITAL&crse_numb_in=33500",
                        "title": "Italian-American Cinema"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ITAL",
                        "number": 34100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ITAL&crse_numb_in=34100",
                        "title": "Italian Literature I: From The Middle Ages To The Enlightenment"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ITAL",
                        "number": 34200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ITAL&crse_numb_in=34200",
                        "title": "Italian Literature II: From Romanticism To The Present"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ITAL",
                        "number": 39300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ITAL&crse_numb_in=39300",
                        "title": "Special Topics In Italian Literature Or Cinema"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "ITAL",
                        "number": 49300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ITAL&crse_numb_in=49300",
                        "title": "Advanced Topics In Italian Literature Or Cinema"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "JPNS",
                        "number": 24100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JPNS&crse_numb_in=24100",
                        "title": "Introduction To The Study Of Japanese Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "JPNS",
                        "number": 28000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JPNS&crse_numb_in=28000",
                        "title": "Introduction To Modern Japanese Civilization"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "JPNS",
                        "number": 33000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JPNS&crse_numb_in=33000",
                        "title": "Japanese Cinema"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "JPNS",
                        "number": 34100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JPNS&crse_numb_in=34100",
                        "title": "Japanese Literature I: Modern Japanese Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "JPNS",
                        "number": 48000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JPNS&crse_numb_in=48000",
                        "title": "Japanese Civilization"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "JPNS",
                        "number": 48500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JPNS&crse_numb_in=48500",
                        "title": "Culinary Culture Of Japan"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "JPNS",
                        "number": 49000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JPNS&crse_numb_in=49000",
                        "title": "Special Topics In Japanese Language"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "JPNS",
                        "number": 54300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JPNS&crse_numb_in=54300",
                        "title": "Modern Japanese Popular Literature And Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "JPNS",
                        "number": 59400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JPNS&crse_numb_in=59400",
                        "title": "Special Topics In Japanese Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "JWST",
                        "number": 33000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=JWST&crse_numb_in=33000",
                        "title": "Introduction To Jewish Studies"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "KOR",
                        "number": 38000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=KOR&crse_numb_in=38000",
                        "title": "Special Topics In Korean Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LALS",
                        "number": 25000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LALS&crse_numb_in=25000",
                        "title": "Introduction To Latin American And Latino Studies"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LALS",
                        "number": 26000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LALS&crse_numb_in=26000",
                        "title": "U S Latino Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LALS",
                        "number": 30100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LALS&crse_numb_in=30100",
                        "title": "Latin American Literary And Cultural Studies"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LALS",
                        "number": 40100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LALS&crse_numb_in=40100",
                        "title": "Special Topics In Latin American/Latino Studies"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LALS",
                        "number": 49500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LALS&crse_numb_in=49500",
                        "title": "Humanigration: A Border Experience"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LATN",
                        "number": 34300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LATN&crse_numb_in=34300",
                        "title": "Roman Oratory"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LATN",
                        "number": 34400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LATN&crse_numb_in=34400",
                        "title": "Roman Epic"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LATN",
                        "number": 34500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LATN&crse_numb_in=34500",
                        "title": "Roman Elegy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LATN",
                        "number": 34700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LATN&crse_numb_in=34700",
                        "title": "Roman Comedy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LATN",
                        "number": 44300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LATN&crse_numb_in=44300",
                        "title": "Roman Satire"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LATN",
                        "number": 44400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LATN&crse_numb_in=44400",
                        "title": "Roman Philosophers"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LALS",
                        "number": 26000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LALS&crse_numb_in=26000",
                        "title": "U S Latino Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LATN",
                        "number": 44600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LATN&crse_numb_in=44600",
                        "title": "Roman Historians"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LATN",
                        "number": 49000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LATN&crse_numb_in=49000",
                        "title": "Directed Reading In Latin"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LATN",
                        "number": 59000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LATN&crse_numb_in=59000",
                        "title": "Directed Reading In Latin"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LC",
                        "number": 23000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LC&crse_numb_in=23000",
                        "title": "Crossing Borders: Introduction To Comparative Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LC",
                        "number": 23100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LC&crse_numb_in=23100",
                        "title": "Fairytale, Folktale, Fable"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LC",
                        "number": 23300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LC&crse_numb_in=23300",
                        "title": "Love, Sex, And Gender In Western European Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LC",
                        "number": 23500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LC&crse_numb_in=23500",
                        "title": "East Asian Literature In Translation"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LC",
                        "number": 23700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LC&crse_numb_in=23700",
                        "title": "Our Common Bond: Languages And Cultures In A Global Context"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LC",
                        "number": 23900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LC&crse_numb_in=23900",
                        "title": "Women Writers In Translation"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LC",
                        "number": 33100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LC&crse_numb_in=33100",
                        "title": "Comparative Literature In Translation"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LC",
                        "number": 33300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LC&crse_numb_in=33300",
                        "title": "The Middle Ages On Film"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LC",
                        "number": 33800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LC&crse_numb_in=33800",
                        "title": "Language Through Films"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LC",
                        "number": 49000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LC&crse_numb_in=49000",
                        "title": "Special Topics In Foreign Languages And Literatures"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "LC",
                        "number": 59300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=LC&crse_numb_in=59300",
                        "title": "Special Topics In Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "MARS",
                        "number": 22000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MARS&crse_numb_in=22000",
                        "title": "Introduction To Medieval And Renaissance Studies"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "MARS",
                        "number": 42000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MARS&crse_numb_in=42000",
                        "title": "Medieval And Renaissance Studies Seminar"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "MGMT",
                        "number": 20000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MGMT&crse_numb_in=20000",
                        "title": "Introductory Accounting"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "MGMT",
                        "number": 21200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MGMT&crse_numb_in=21200",
                        "title": "Business Accounting"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "MGMT",
                        "number": 24200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MGMT&crse_numb_in=24200",
                        "title": "Contemporary Problems In Personal Finance For Minorities"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "MGMT",
                        "number": 24300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MGMT&crse_numb_in=24300",
                        "title": "Contemporary Thought Of Minorities In Management"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "MGMT",
                        "number": 32300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MGMT&crse_numb_in=32300",
                        "title": "Principles Of Marketing"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "MGMT",
                        "number": 32400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MGMT&crse_numb_in=32400",
                        "title": "Marketing Management"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "MGMT",
                        "number": 45500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MGMT&crse_numb_in=45500",
                        "title": "Legal Background For Business I"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "MUS",
                        "number": 25000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MUS&crse_numb_in=25000",
                        "title": "Music Appreciation"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "MUS",
                        "number": 36100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MUS&crse_numb_in=36100",
                        "title": "Music Theory I"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "MUS",
                        "number": 36200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MUS&crse_numb_in=36200",
                        "title": "Music Theory II"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "MUS",
                        "number": 36300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MUS&crse_numb_in=36300",
                        "title": "Music Theory III"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "MUS",
                        "number": 37500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MUS&crse_numb_in=37500",
                        "title": "Selected Topics In Music"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "MUS",
                        "number": 37600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MUS&crse_numb_in=37600",
                        "title": "World Music"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "MUS",
                        "number": 37800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MUS&crse_numb_in=37800",
                        "title": "Jazz History"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "MUS",
                        "number": 38100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MUS&crse_numb_in=38100",
                        "title": "Music History I: Antiquity To Mozart"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "MUS",
                        "number": 38200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=MUS&crse_numb_in=38200",
                        "title": "Music History II: Beethoven To The Present"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "OBHR",
                        "number": 33000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=OBHR&crse_numb_in=33000",
                        "title": "Introduction To Organizational Behavior"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 11000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=11000",
                        "title": "The Big Questions: Introduction to Philosophy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 11100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=11100",
                        "title": "Introduction To Ethics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 11400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=11400",
                        "title": "Global Moral Issues"
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
                        "number": 20600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=20600",
                        "title": "Introduction To Philosophy Of Religion"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 20700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=20700",
                        "title": "Ethics For Technology, Engineering, And Design"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 21900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=21900",
                        "title": "Philosophy And The Meaning Of Life"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 22100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=22100",
                        "title": "Introduction To Philosophy Of Science"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 22300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=22300",
                        "title": "Fate And Free Will"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 22500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=22500",
                        "title": "Philosophy And Gender"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 23000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=23000",
                        "title": "Religions Of The East"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 23100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=23100",
                        "title": "Religions Of The West"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 24000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=24000",
                        "title": "Social And Political Philosophy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 24200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=24200",
                        "title": "Philosophy, Culture, And The African American Experience"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 26000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=26000",
                        "title": "Philosophy And Law"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 27000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=27000",
                        "title": "Biomedical Ethics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 27500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=27500",
                        "title": "The Philosophy Of Art"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 28000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=28000",
                        "title": "Ethics And Animals"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 29000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=29000",
                        "title": "Environmental Ethics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 29300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=29300",
                        "title": "Selected Topics In Philosophy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 30100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=30100",
                        "title": "History Of Ancient Philosophy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 30200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=30200",
                        "title": "History Of Medieval Philosophy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 30300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=30300",
                        "title": "History Of Modern Philosophy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 30400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=30400",
                        "title": "Nineteenth-Century Philosophy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 30600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=30600",
                        "title": "Twentieth-Century Philosophy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 32200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=32200",
                        "title": "Philosophy Of Technology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 40200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=40200",
                        "title": "Studies In Medieval Christian Thought"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 40600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=40600",
                        "title": "Intermediate Philosophy Of Religion"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 41100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=41100",
                        "title": "Modern Ethical Theories"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 42100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=42100",
                        "title": "Philosophy Of Science"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 42400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=42400",
                        "title": "Recent Ethical Theory"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 42500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=42500",
                        "title": "Metaphysics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 43200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=43200",
                        "title": "Theory Of Knowledge"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 43500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=43500",
                        "title": "Philosophy Of Mind"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 46500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=46500",
                        "title": "Philosophy Of Language"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 49000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=49000",
                        "title": "Advanced Topics In Philosophy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 50100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=50100",
                        "title": "Studies In Greek Philosophy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 50200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=50200",
                        "title": "Studies In Medieval Philosophy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 50300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=50300",
                        "title": "Studies In Early Modern Philosophy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 50500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=50500",
                        "title": "Islamic And Jewish Philosophy And The Classical Tradition"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 50600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=50600",
                        "title": "Advanced Philosophy Of Religion"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 50700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=50700",
                        "title": "Recent American Philosophy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 51000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=51000",
                        "title": "Phenomenology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 51400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=51400",
                        "title": "Twentieth-Century Analytical Philosophy I"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 51500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=51500",
                        "title": "Twentieth-Century Analytical Philosophy II"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 52000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=52000",
                        "title": "Existentialism"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 52400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=52400",
                        "title": "Contemporary Ethical Theory"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 52500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=52500",
                        "title": "Studies In Metaphysics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 53000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=53000",
                        "title": "Deconstructionist And Postmodernist Philosophy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 53200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=53200",
                        "title": "Studies In Theory Of Knowledge"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 53500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=53500",
                        "title": "Studies In Philosophy Of Mind"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 54000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=54000",
                        "title": "Studies In Social And Political Philosophy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 54500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=54500",
                        "title": "Recent Analytic Philosophy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 55100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=55100",
                        "title": "Philosophy Of The Natural Sciences"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 55200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=55200",
                        "title": "Philosophy Of The Social Sciences"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 55500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=55500",
                        "title": "Critical Theory"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHIL",
                        "number": 58000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHIL&crse_numb_in=58000",
                        "title": "Proseminar In Philosophy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PHPR",
                        "number": 49000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHPR&crse_numb_in=49000",
                        "title": "Special Topics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 10100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=10100",
                        "title": "American Government And Politics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 12000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=12000",
                        "title": "Introduction To Public Policy And Public Administration"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 13000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=13000",
                        "title": "Introduction To International Relations"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 14100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=14100",
                        "title": "Governments Of The World"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 15000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=15000",
                        "title": "Introduction To Political Thought"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 20000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=20000",
                        "title": "Introduction To The Study Of Political Science"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 22200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=22200",
                        "title": "Women, Politics, And Public Policy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 22300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=22300",
                        "title": "Introduction To Environmental Policy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 22900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=22900",
                        "title": "Emerging Problems In Political Science"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 23000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=23000",
                        "title": "Introduction To The Study Of Peace"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 23100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=23100",
                        "title": "Introduction To United States Foreign Policy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 23500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=23500",
                        "title": "International Relations Among Rich And Poor Nations"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 23700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=23700",
                        "title": "Modern Weapons And International Relations"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 30000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=30000",
                        "title": "Introduction To Political Analysis"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 31400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=31400",
                        "title": "The President And Policy Process"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 32300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=32300",
                        "title": "Comparative Environmental Policy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 32600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=32600",
                        "title": "Black Political Participation In America"
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
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 33500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=33500",
                        "title": "China And The Challenges Of Globalization"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 34500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=34500",
                        "title": "West European Democracies In The Post-Industrial Era"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 34700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=34700",
                        "title": "Introduction To Latin American Politics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 34800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=34800",
                        "title": "East Asian Politics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 35100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=35100",
                        "title": "Foundations Of Western Political Theory: From Plato To The Reformation"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 35300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=35300",
                        "title": "Current Political Ideologies"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 36000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=36000",
                        "title": "Women And The Law"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 37200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=37200",
                        "title": "Indiana Government And Politics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 37300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=37300",
                        "title": "Campaigns And Elections"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 41000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=41000",
                        "title": "Political Parties And Politics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 41100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=41100",
                        "title": "Congress: Structure And Functioning"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 41300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=41300",
                        "title": "The Human Basis Of Politics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 41500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=41500",
                        "title": "US Politics And The Media"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 42300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=42300",
                        "title": "International Environmental Policy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 42500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=42500",
                        "title": "Environmental Law And Politics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 42800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=42800",
                        "title": "The Politics Of Regulation"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 42900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=42900",
                        "title": "Contemporary Political Problems"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 43000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=43000",
                        "title": "Selected Problems In International Relations"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 43200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=43200",
                        "title": "Selected Problems In World Order"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 43300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=43300",
                        "title": "International Organization"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 43500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=43500",
                        "title": "International Law"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 46000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=46000",
                        "title": "Judicial Politics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 46100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=46100",
                        "title": "Constitutional Law I"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 46200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=46200",
                        "title": "Constitutional Law II"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 49100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=49100",
                        "title": "Political Science Senior Seminar"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 49300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=49300",
                        "title": "Interdisciplinary Undergraduate Seminar"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 51700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=51700",
                        "title": "The Politics Of Capital And Labor In The United States"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 52000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=52000",
                        "title": "Special Topics In Public Policy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 52300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=52300",
                        "title": "Environmental Politics And Public Policy"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 52400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=52400",
                        "title": "Public Policy And The Family"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 53200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=53200",
                        "title": "Nuclear Strategy And Proliferation"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "POL",
                        "number": 59000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=POL&crse_numb_in=59000",
                        "title": "Directed Reading In Political Science"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 12000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=12000",
                        "title": "Elementary Psychology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 20000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=20000",
                        "title": "Introduction To Cognitive Psychology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 22200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=22200",
                        "title": "Introduction To Behavioral Neuroscience"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 23500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=23500",
                        "title": "Child Psychology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 23900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=23900",
                        "title": "The Psychology Of Women"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 24000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=24000",
                        "title": "Introduction To Social Psychology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 24400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=24400",
                        "title": "Introduction To Human Sexuality"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 27200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=27200",
                        "title": "Introduction To Industrial-Organizational Psychology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 29200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=29200",
                        "title": "Topics In Psychology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 31000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=31000",
                        "title": "Sensory And Perceptual Processes"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 31100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=31100",
                        "title": "Human Memory"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 31400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=31400",
                        "title": "Introduction To Learning"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 32400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=32400",
                        "title": "Introduction Cognitive Neuroscience"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 33500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=33500",
                        "title": "Stereotyping And Prejudice"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 33600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=33600",
                        "title": "Issues In Developmental Psychology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 33700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=33700",
                        "title": "Social Cognition"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 34200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=34200",
                        "title": "Introduction To Psychology Of Personality"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 35000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=35000",
                        "title": "Abnormal Psychology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 35400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=35400",
                        "title": "Close Relationships"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 36100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=36100",
                        "title": "Human Development I: Infancy And Childhood"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 36700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=36700",
                        "title": "Adult Development And Aging"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 38000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=38000",
                        "title": "Behavior Change Methods"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 39200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=39200",
                        "title": "Special Topics In Psychology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 41800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=41800",
                        "title": "Understanding Autism"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 42100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=42100",
                        "title": "Alcohol Use And Disorders"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 42200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=42200",
                        "title": "Genes and Behavior"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 42600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=42600",
                        "title": "Language Development"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 42800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=42800",
                        "title": "Drugs And Behavior"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 42900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=42900",
                        "title": "Hormones And Behavior"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 43200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=43200",
                        "title": "Social Psychology In Film"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 44300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=44300",
                        "title": "Aggression And Violence"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 46400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=46400",
                        "title": "Research Ethics In Psychological Sciences"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 47300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=47300",
                        "title": "Selection And Performance Appraisal In Organizations"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 47500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=47500",
                        "title": "Work Motivation And Job Satisfaction"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 48400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=48400",
                        "title": "The Psychology Of Consciousness"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 51500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=51500",
                        "title": "Neuroscience Of Consciousness"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 54000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=54000",
                        "title": "History Of Psychology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 56100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=56100",
                        "title": "Personality And Social Functioning In Older Adults"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PSY",
                        "number": 59100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PSY&crse_numb_in=59100",
                        "title": "Topics In Psychology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PTGS",
                        "number": 33000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PTGS&crse_numb_in=33000",
                        "title": "Brazilian, Portuguese, And African Cinema"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PTGS",
                        "number": 55100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PTGS&crse_numb_in=55100",
                        "title": "Brazilian Poetry"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PTGS",
                        "number": 55500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PTGS&crse_numb_in=55500",
                        "title": "Brazilian Drama"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PTGS",
                        "number": 55700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PTGS&crse_numb_in=55700",
                        "title": "Brazilian Fiction"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "PTGS",
                        "number": 59400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PTGS&crse_numb_in=59400",
                        "title": "Special Topics In Luso-Brazilian Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "REL",
                        "number": 20000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=20000",
                        "title": "Introduction To The Study Of Religion"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "REL",
                        "number": 20100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=20100",
                        "title": "Interpretation Of The New Testament"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "REL",
                        "number": 20200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=20200",
                        "title": "Interpretation Of The Old Testament"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "REL",
                        "number": 20300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=20300",
                        "title": "Theology Of Paul"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "REL",
                        "number": 20400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=20400",
                        "title": "Introduction To Christian Theology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "REL",
                        "number": 23000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=23000",
                        "title": "Religions Of The East"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "REL",
                        "number": 23100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=23100",
                        "title": "Religions Of The West"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "REL",
                        "number": 25000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=25000",
                        "title": "A History Of The Christian Afterlife"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "REL",
                        "number": 31700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=31700",
                        "title": "Ancient Judaism And Early Christianity"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "REL",
                        "number": 31800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=31800",
                        "title": "The Bible And Its Early Interpreters"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "REL",
                        "number": 35000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=35000",
                        "title": "History Of Christian Theology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "REL",
                        "number": 35100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=35100",
                        "title": "Christian Mysticism"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "REL",
                        "number": 45000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=45000",
                        "title": "Christian Ethics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "REL",
                        "number": 45100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=45100",
                        "title": "Christology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "REL",
                        "number": 45200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=REL&crse_numb_in=45200",
                        "title": "Systematic Theology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "RUSS",
                        "number": 29800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=RUSS&crse_numb_in=29800",
                        "title": "Special Topics In Russian"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "RUSS",
                        "number": 33000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=RUSS&crse_numb_in=33000",
                        "title": "Russian And East European Cinema"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "RUSS",
                        "number": 34100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=RUSS&crse_numb_in=34100",
                        "title": "Russian Literature In The Nineteenth Century"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "RUSS",
                        "number": 34200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=RUSS&crse_numb_in=34200",
                        "title": "Revolution, Repression, Renewal: Soviet Literature And Beyond"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "RUSS",
                        "number": 38000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=RUSS&crse_numb_in=38000",
                        "title": "Russian Culture And Civilization I"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "RUSS",
                        "number": 48000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=RUSS&crse_numb_in=48000",
                        "title": "Russian Civilization"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "RUSS",
                        "number": 58100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=RUSS&crse_numb_in=58100",
                        "title": "Russian Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 10000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=10000",
                        "title": "Introductory Sociology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 22000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=22000",
                        "title": "Social Problems"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 27500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=27500",
                        "title": "Sociology Of Aging And The Life Course"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 31000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=31000",
                        "title": "Race And Ethnicity"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 31200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=31200",
                        "title": "American Society"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 32400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=32400",
                        "title": "Criminology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 32600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=32600",
                        "title": "Social Conflict And Criminal Justice"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 32700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=32700",
                        "title": "Crime, Deviance And Mass Media"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 32800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=32800",
                        "title": "Criminal Justice"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 33400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=33400",
                        "title": "Urban Sociology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 33800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=33800",
                        "title": "Global Social Movements"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 33900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=33900",
                        "title": "Sociology Of Global Development"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 34000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=34000",
                        "title": "General Social Psychology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 34400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=34400",
                        "title": "Environmental Sociology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 35000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=35000",
                        "title": "Sociology Of Family"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 35200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=35200",
                        "title": "Drugs, Culture, And Society"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 35600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=35600",
                        "title": "Hate And Violence"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 36700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=36700",
                        "title": "Religion In America"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 36800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=36800",
                        "title": "The Social Significance Of Religion"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 36900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=36900",
                        "title": "Religion And Chinese Society"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 37400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=37400",
                        "title": "Medical Sociology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 39100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=39100",
                        "title": "Selected Topics In Sociology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 40200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=40200",
                        "title": "Sociological Theory"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 41100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=41100",
                        "title": "Social Inequality"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 41900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=41900",
                        "title": "Sociology Of Law"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 42100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=42100",
                        "title": "Juvenile Delinquency"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 42600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=42600",
                        "title": "Social Deviance And Control"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 42900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=42900",
                        "title": "Sociology Of Protest"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 45000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=45000",
                        "title": "Gender Roles In Modern Society"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 46100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=46100",
                        "title": "Health And Social Behavior"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 52500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=52500",
                        "title": "Social Movements"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 53100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=53100",
                        "title": "Community Organization"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 56700,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=56700",
                        "title": "Religion In Social Context"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 56800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=56800",
                        "title": "Religion And Society"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 57000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=57000",
                        "title": "Sociology Of Education"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 57200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=57200",
                        "title": "Comparative Healthcare Systems"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 57300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=57300",
                        "title": "The Human Side Of Medicine"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 57400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=57400",
                        "title": "The Social Organization Of Healthcare"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 57600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=57600",
                        "title": "Health And Aging In Social Context"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SOC",
                        "number": 59100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SOC&crse_numb_in=59100",
                        "title": "Selected Topics In Sociology"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 23100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=23100",
                        "title": "Cervantes\u2019 Don Quixote"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 23500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=23500",
                        "title": "Spanish American Literature In Translation"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 24100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=24100",
                        "title": "Introduction To The Study Of Hispanic Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 28000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=28000",
                        "title": "Second-Year Spanish: Special Topics"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 33000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=33000",
                        "title": "Spanish And Latin American Cinema"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 33500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=33500",
                        "title": "The Literature Of The Spanish-Speaking Peoples In The United States"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 34100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=34100",
                        "title": "Hispanic Literature I: Poetry And Drama"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 34200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=34200",
                        "title": "Hispanic Literature II: Prose"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 48000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=48000",
                        "title": "Spanish Civilization"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 48100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=48100",
                        "title": "Spanish Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 48200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=48200",
                        "title": "Latin American Civilization"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 48300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=48300",
                        "title": "Latin American Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 48500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=48500",
                        "title": "Food And Culture In The Hispanic World"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 49800,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=49800",
                        "title": "Advanced Topics In Spanish"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 54000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=54000",
                        "title": "Spanish Literature Of The Middle Ages"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 54100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=54100",
                        "title": "Spanish Literature Of The Golden Age"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 54200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=54200",
                        "title": "Cervantes Don Quijote"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 54300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=54300",
                        "title": "Spanish Literature Of The 18th And 19th Centuries"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 54500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=54500",
                        "title": "Spanish Literature Of The 20th Century"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 55000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=55000",
                        "title": "Spanish American Literature Of The Colonial Period"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 55100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=55100",
                        "title": "Spanish American Literature Of The 19th Century"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 55200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=55200",
                        "title": "Spanish American Literature From 1900 To 1970"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 55300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=55300",
                        "title": "Spanish American Literature From 1970- Present"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 55400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=55400",
                        "title": "Hispanic Caribbean Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 55500,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=55500",
                        "title": "Latino/a Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 55600,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=55600",
                        "title": "Mexican Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "SPAN",
                        "number": 59400,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SPAN&crse_numb_in=59400",
                        "title": "Special Topics In Hispanic Literature"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "THTR",
                        "number": 20100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=THTR&crse_numb_in=20100",
                        "title": "Theatre Appreciation"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "THTR",
                        "number": 38000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=THTR&crse_numb_in=38000",
                        "title": "History Of Theatre I"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "THTR",
                        "number": 38100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=THTR&crse_numb_in=38100",
                        "title": "History Of Theatre II"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "THTR",
                        "number": 39000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=THTR&crse_numb_in=39000",
                        "title": "Directed Study Of Special Theatre Problems"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "WGSS",
                        "number": 28000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=28000",
                        "title": "Women\u2019s, Gender, And Sexuality Studies: An Introduction"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "WGSS",
                        "number": 28100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=28100",
                        "title": "Variable Topics In Women\u2019s, Gender, And Sexuality Studies"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "WGSS",
                        "number": 28200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=28200",
                        "title": "Introduction To LGBTQ Studies"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "WGSS",
                        "number": 38000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=38000",
                        "title": "Comparative Studies In Gender And Culture"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "WGSS",
                        "number": 38100,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=38100",
                        "title": "Women Of Color In The United States"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "WGSS",
                        "number": 38200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=38200",
                        "title": "Love, Sex And Sexuality"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "WGSS",
                        "number": 38300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=38300",
                        "title": "Women, Work, And Labor"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "WGSS",
                        "number": 39000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=39000",
                        "title": "Variable Topics In Women\u2019s, Gender And Sexuality Studies"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "WGSS",
                        "number": 48000,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=48000",
                        "title": "Feminist Theory"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "WGSS",
                        "number": 48200,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=48200",
                        "title": "Interdisciplinary Studies In Sexuality: Scholarship On Lesbian And Gay Issues"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "WGSS",
                        "number": 48300,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=48300",
                        "title": "Feminisms In Global Perspective"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "WGSS",
                        "number": 49900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=49900",
                        "title": "Independent Study In Women\u2019s, Gender And Sexuality Studies"
                    }
                },
                {
                    "type": "course",
                    "value": {
                        "subject": "WGSS",
                        "number": 59900,
                        "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=WGSS&crse_numb_in=59900",
                        "title": "Selected Topics In Women\u2019s Gender And Sexuality Studies"
                    }
                }
            ]
        }
    ]
}
`)

export default CULTURE_LANG
