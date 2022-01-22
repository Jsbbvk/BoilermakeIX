const SCI = JSON.parse(`
{
    "title": "Science (SCI)",
    "type": "or",
    "value": [
        {
            "type": "course",
            "value": {
                "subject": "ANTH",
                "number": 20400,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ANTH&crse_numb_in=20400",
                "title": "Intro to Bio Anthro and Human Evolution"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "ASTR",
                "number": 26300,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ASTR&crse_numb_in=26300",
                "title": "Descriptive Astronomy: The Solar System"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "ASTR",
                "number": 26400,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ASTR&crse_numb_in=26400",
                "title": "Descriptive Astronomy: Stars and Galaxies"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "BIOL",
                "number": 11000,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=BIOL&crse_numb_in=11000",
                "title": "Fundamentals of Biology I"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "BIOL",
                "number": 11100,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=BIOL&crse_numb_in=11100",
                "title": "Fundamentals of Biology II"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "BIOL",
                "number": 11200,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=BIOL&crse_numb_in=11200",
                "title": "Fundamentals of Biology I"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "BIOL",
                "number": 11300,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=BIOL&crse_numb_in=11300",
                "title": "Fundamentals of Biology II"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "BIOL",
                "number": 12100,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=BIOL&crse_numb_in=12100",
                "title": "Biology I: Ecology, Diversity, & Behavior"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "BIOL",
                "number": 13100,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=BIOL&crse_numb_in=13100",
                "title": "Biology II: Dev, Structure & Function of Organisms (Summer 2023 and earlier only)"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "BIOL",
                "number": 13500,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=BIOL&crse_numb_in=13500",
                "title": "First Year Biology Lab"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "BIOL",
                "number": 14501,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=BIOL&crse_numb_in=14501",
                "title": "First year biol lab with neuro res project"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "BIOL",
                "number": 14502,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=BIOL&crse_numb_in=14502",
                "title": "First year BIOL lab with Micro Res Project"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "BIOL",
                "number": 14600,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=BIOL&crse_numb_in=14600",
                "title": "Introduction to Biology"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "BIOL",
                "number": 20100,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=BIOL&crse_numb_in=20100",
                "title": "Human Anatomy and Physiology"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "BIOL",
                "number": 20200,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=BIOL&crse_numb_in=20200",
                "title": "Human Anatomy and Physiology"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "BIOL",
                "number": 20300,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=BIOL&crse_numb_in=20300",
                "title": "Human Anatomy and Physiology"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "BIOL",
                "number": 20400,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=BIOL&crse_numb_in=20400",
                "title": "Human Anatomy and Physiology"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "BIOL",
                "number": 20500,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=BIOL&crse_numb_in=20500",
                "title": "Biology for Elementary School Teachers"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "BIOL",
                "number": 20600,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=BIOL&crse_numb_in=20600",
                "title": "Biology for Elementary School Teachers"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "BIOL",
                "number": 30200,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=BIOL&crse_numb_in=30200",
                "title": "Human Design: Anatomy and Physiology"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "BTNY",
                "number": 11000,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=BTNY&crse_numb_in=11000",
                "title": "Intro to Plant Science"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "CHM",
                "number": 11100,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHM&crse_numb_in=11100",
                "title": "General Chemistry"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "CHM",
                "number": 11200,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHM&crse_numb_in=11200",
                "title": "General Chemistry"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "CHM",
                "number": 11500,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHM&crse_numb_in=11500",
                "title": "General Chemistry"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "CHM",
                "number": 11600,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHM&crse_numb_in=11600",
                "title": "General Chemistry"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "CHM",
                "number": 12500,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHM&crse_numb_in=12500",
                "title": "Introduction to Chemistry"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "CHM",
                "number": 12600,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHM&crse_numb_in=12600",
                "title": "Introduction to Chemistry II"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "CHM",
                "number": 12901,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHM&crse_numb_in=12901",
                "title": "General Chemistry with Biological focus"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "CHM",
                "number": 13600,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHM&crse_numb_in=13600",
                "title": "General Chemistry Honors"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "CHM",
                "number": 20000,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=CHM&crse_numb_in=20000",
                "title": "Fundamentals of Chemistry (Summer 2023 and earlier only)"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "EAPS",
                "number": 10200,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=EAPS&crse_numb_in=10200",
                "title": "Earth Science for Elementary Education (Fall 2021 and earlier only)"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "EAPS",
                "number": 10500,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=EAPS&crse_numb_in=10500",
                "title": "The Planets"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "EAPS",
                "number": 10900,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=EAPS&crse_numb_in=10900",
                "title": "The Dynamic Earth (Summer 2023 and earlier only)"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "EAPS",
                "number": 11100,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=EAPS&crse_numb_in=11100",
                "title": "Physical Geology"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "EAPS",
                "number": 11200,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=EAPS&crse_numb_in=11200",
                "title": "Earth Through Time"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "EAPS",
                "number": 11600,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=EAPS&crse_numb_in=11600",
                "title": "Earthquakes and Volcanoes"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "EAPS",
                "number": 11700,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=EAPS&crse_numb_in=11700",
                "title": "Introduction to Atmospheric Science"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "EAPS",
                "number": 12900,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=EAPS&crse_numb_in=12900",
                "title": "Earth System Dynamics"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "EAPS",
                "number": 13800,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=EAPS&crse_numb_in=13800",
                "title": "Thunderstorms & Tornadoes"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "EAPS",
                "number": 22100,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=EAPS&crse_numb_in=22100",
                "title": "Survey of Atmospheric Science"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "EAPS",
                "number": 22500,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=EAPS&crse_numb_in=22500",
                "title": "Science of the Atmosphere"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "EAPS",
                "number": 24300,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=EAPS&crse_numb_in=24300",
                "title": "Earth Materials I (Summer 2023 and earlier only)"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "EAPS",
                "number": 24400,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=EAPS&crse_numb_in=24400",
                "title": "Earth Materials II (Summer 2023 and earlier only)"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "EAPS",
                "number": 31201,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=EAPS&crse_numb_in=31201",
                "title": "Earth Systems Science for Elementary Teachers"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "ENTM",
                "number": 10500,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENTM&crse_numb_in=10500",
                "title": "Insects: Friends & Foe"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "ENTM",
                "number": 20600,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENTM&crse_numb_in=20600",
                "title": "General Entomology"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "ENTM",
                "number": 21000,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENTM&crse_numb_in=21000",
                "title": "Intro to Insect Behavior"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "ENTM",
                "number": 22810,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENTM&crse_numb_in=22810",
                "title": "Forensic Investigation"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "ENTM",
                "number": 22820,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=ENTM&crse_numb_in=22820",
                "title": "Forensic Analysis"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "HORT",
                "number": 10100,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=HORT&crse_numb_in=10100",
                "title": "Fundamentals of Horticulture"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "NRES",
                "number": 23000,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=NRES&crse_numb_in=23000",
                "title": "Survey of Meteorology (Summer 2023 and earlier only)"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "NUTR",
                "number": 20200,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=NUTR&crse_numb_in=20200",
                "title": "Principles Of Food Preparation And Nutrition"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "NUTR",
                "number": 30300,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=NUTR&crse_numb_in=30300",
                "title": "Essentials of Nutrition"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "PHYS",
                "number": 15200,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHYS&crse_numb_in=15200",
                "title": "Mechanics"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "PHYS",
                "number": 17200,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHYS&crse_numb_in=17200",
                "title": "Modern Mechanics"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "PHYS",
                "number": 21400,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHYS&crse_numb_in=21400",
                "title": "Nature of Physics"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "PHYS",
                "number": 21500,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHYS&crse_numb_in=21500",
                "title": "Physics for Elementary Education"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "PHYS",
                "number": 21800,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHYS&crse_numb_in=21800",
                "title": "General Physics I"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "PHYS",
                "number": 21900,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHYS&crse_numb_in=21900",
                "title": "General Physics II"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "PHYS",
                "number": 22000,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHYS&crse_numb_in=22000",
                "title": "General Physics"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "PHYS",
                "number": 22100,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHYS&crse_numb_in=22100",
                "title": "General Physics"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "PHYS",
                "number": 23000,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHYS&crse_numb_in=23000",
                "title": "Physical Science for Elementary Education (Fall 2021 only)"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "PHYS",
                "number": 24100,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHYS&crse_numb_in=24100",
                "title": "Electricity and Optics"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "PHYS",
                "number": 27200,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=PHYS&crse_numb_in=27200",
                "title": "Electric and Magnetic Interactions"
            }
        },
        {
            "type": "course",
            "value": {
                "subject": "SLHS",
                "number": 30600,
                "url": "https://selfservice.mypurdue.purdue.edu/prod/bwckctlg.p_disp_course_detail?cat_term_in=202310&subj_code_in=SLHS&crse_numb_in=30600",
                "title": "Introduction to Phonetics  (Prior to Fall 2018)"
            }
        }
    ]
}
`)

export default SCI
