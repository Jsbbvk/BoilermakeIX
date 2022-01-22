const ALL_COURSES = JSON.parse(`[
    {
        "course_id": "AAS 27100",
        "subject": "AAS",
        "number": 27100,
        "title": "Intro to African American Studies"
    },
    {
        "course_id": "AAS 27700",
        "subject": "AAS",
        "number": 27700,
        "title": "African American Popular Culture"
    },
    {
        "course_id": "AAS 35900",
        "subject": "AAS",
        "number": 35900,
        "title": "Black Women Writers"
    },
    {
        "course_id": "AAS 37000",
        "subject": "AAS",
        "number": 37000,
        "title": "Black Women Rising"
    },
    {
        "course_id": "AAS 37100",
        "subject": "AAS",
        "number": 37100,
        "title": "The African American Experience"
    },
    {
        "course_id": "AAS 37300",
        "subject": "AAS",
        "number": 37300,
        "title": "Issues In African American Studies"
    },
    {
        "course_id": "AAS 37500",
        "subject": "AAS",
        "number": 37500,
        "title": "The Black Family"
    },
    {
        "course_id": "AAS 37600",
        "subject": "AAS",
        "number": 37600,
        "title": "The Black Male"
    },
    {
        "course_id": "AAS 37700",
        "subject": "AAS",
        "number": 37700,
        "title": "African American Sexuality And Society"
    },
    {
        "course_id": "AAS 39200",
        "subject": "AAS",
        "number": 39200,
        "title": "Caribbean History And Culture"
    },
    {
        "course_id": "AAS 47300",
        "subject": "AAS",
        "number": 47300,
        "title": "Blacks In Hollywood Film"
    },
    {
        "course_id": "AAS 49100",
        "subject": "AAS",
        "number": 49100,
        "title": "Special Topics In African American Studies"
    },
    {
        "course_id": "AAS 57500",
        "subject": "AAS",
        "number": 57500,
        "title": "Theories Of African American Studies"
    },
    {
        "course_id": "ABE 22600",
        "subject": "ABE",
        "number": 22600,
        "title": "Biotechnology Laboratory I"
    },
    {
        "course_id": "ABE 29000",
        "subject": "ABE",
        "number": 29000,
        "title": "Sophomore Seminar"
    },
    {
        "course_id": "AD 11300",
        "subject": "AD",
        "number": 11300,
        "title": "Basic Drawings"
    },
    {
        "course_id": "AD 11700",
        "subject": "AD",
        "number": 11700,
        "title": "Photography I"
    },
    {
        "course_id": "AD 12500",
        "subject": "AD",
        "number": 12500,
        "title": "Intro to Interior Design"
    },
    {
        "course_id": "AD 22600",
        "subject": "AD",
        "number": 22600,
        "title": "History of Art to 1400"
    },
    {
        "course_id": "AD 22700",
        "subject": "AD",
        "number": 22700,
        "title": "History of Art since 1400"
    },
    {
        "course_id": "AD 24200",
        "subject": "AD",
        "number": 24200,
        "title": "Ceramics I"
    },
    {
        "course_id": "AD 25100",
        "subject": "AD",
        "number": 25100,
        "title": "History of Photography"
    },
    {
        "course_id": "AD 25500",
        "subject": "AD",
        "number": 25500,
        "title": "Art Appreciation"
    },
    {
        "course_id": "AD 26500",
        "subject": "AD",
        "number": 26500,
        "title": "Relief Printmaking"
    },
    {
        "course_id": "AD 26600",
        "subject": "AD",
        "number": 26600,
        "title": "Silkscreen Printmaking"
    },
    {
        "course_id": "AD 27500",
        "subject": "AD",
        "number": 27500,
        "title": "Beginning Sculpture"
    },
    {
        "course_id": "AD 31100",
        "subject": "AD",
        "number": 31100,
        "title": "Ancient Greek Art"
    },
    {
        "course_id": "AD 31200",
        "subject": "AD",
        "number": 31200,
        "title": "Ancient Roman Art"
    },
    {
        "course_id": "AD 33400",
        "subject": "AD",
        "number": 33400,
        "title": "New Media Culture"
    },
    {
        "course_id": "AD 33900",
        "subject": "AD",
        "number": 33900,
        "title": "Women Artists In The 20th Century (Fall 2021 and after only)"
    },
    {
        "course_id": "AD 34300",
        "subject": "AD",
        "number": 34300,
        "title": "Northern Renaissance Art"
    },
    {
        "course_id": "AD 34400",
        "subject": "AD",
        "number": 34400,
        "title": "Latin American Art In The 20th Century"
    },
    {
        "course_id": "AD 34600",
        "subject": "AD",
        "number": 34600,
        "title": "Italian Renaissance Art"
    },
    {
        "course_id": "AD 34800",
        "subject": "AD",
        "number": 34800,
        "title": "History Of Islamic Art"
    },
    {
        "course_id": "AD 35900",
        "subject": "AD",
        "number": 35900,
        "title": "Medieval European Art"
    },
    {
        "course_id": "AD 38000",
        "subject": "AD",
        "number": 38000,
        "title": "Baroque Art"
    },
    {
        "course_id": "AD 38200",
        "subject": "AD",
        "number": 38200,
        "title": "A Global History Of Modern Art"
    },
    {
        "course_id": "AD 38300",
        "subject": "AD",
        "number": 38300,
        "title": "Modern Art"
    },
    {
        "course_id": "AD 38400",
        "subject": "AD",
        "number": 38400,
        "title": "Contemporary Art"
    },
    {
        "course_id": "AD 38500",
        "subject": "AD",
        "number": 38500,
        "title": "History Of Interior Design"
    },
    {
        "course_id": "AD 39100",
        "subject": "AD",
        "number": 39100,
        "title": "History Of Chinese Art"
    },
    {
        "course_id": "AD 39500",
        "subject": "AD",
        "number": 39500,
        "title": "History of Design (Fall 2021 and after only)"
    },
    {
        "course_id": "AD 45400",
        "subject": "AD",
        "number": 45400,
        "title": "Modern Architecture"
    },
    {
        "course_id": "AGEC 20300",
        "subject": "AGEC",
        "number": 20300,
        "title": "Intro to Microeconomics for Food and Agribusiness"
    },
    {
        "course_id": "AGEC 20400",
        "subject": "AGEC",
        "number": 20400,
        "title": "Intro to Resource Economics and Environmental Policy"
    },
    {
        "course_id": "AGEC 21700",
        "subject": "AGEC",
        "number": 21700,
        "title": "Economics"
    },
    {
        "course_id": "AGEC 25000",
        "subject": "AGEC",
        "number": 25000,
        "title": "The Economic Geography of World Food and Resources"
    },
    {
        "course_id": "AGR 20100",
        "subject": "AGR",
        "number": 20100,
        "title": "Communications Across Cultures  (Fall 2013 and after only)"
    },
    {
        "course_id": "AGRY 12500",
        "subject": "AGRY",
        "number": 12500,
        "title": "Environmental Science and Conservation"
    },
    {
        "course_id": "AGRY 28500",
        "subject": "AGRY",
        "number": 28500,
        "title": "World Crop Adaptation and Distribution"
    },
    {
        "course_id": "AGRY 29000",
        "subject": "AGRY",
        "number": 29000,
        "title": "Introduction to Environmental Science"
    },
    {
        "course_id": "AMST 10100",
        "subject": "AMST",
        "number": 10100,
        "title": "America and the World"
    },
    {
        "course_id": "AMST 20100",
        "subject": "AMST",
        "number": 20100,
        "title": "Intro to American Studies"
    },
    {
        "course_id": "AMST 21000",
        "subject": "AMST",
        "number": 21000,
        "title": "Sport in American Culture"
    },
    {
        "course_id": "AMST 25000",
        "subject": "AMST",
        "number": 25000,
        "title": "Introduction to American Protest Movements"
    },
    {
        "course_id": "AMST 30100",
        "subject": "AMST",
        "number": 30100,
        "title": "Perspectives On America"
    },
    {
        "course_id": "AMST 31000",
        "subject": "AMST",
        "number": 31000,
        "title": "Invention, Innovation, Design"
    },
    {
        "course_id": "AMST 32000",
        "subject": "AMST",
        "number": 32000,
        "title": "Understanding The National Football League"
    },
    {
        "course_id": "AMST 32500",
        "subject": "AMST",
        "number": 32500,
        "title": "Sports, Technology and Innovation"
    },
    {
        "course_id": "ANSC 10200",
        "subject": "ANSC",
        "number": 10200,
        "title": "Intro to Animal Agriculture"
    },
    {
        "course_id": "ANTH 10000",
        "subject": "ANTH",
        "number": 10000,
        "title": "Intro to Anthropology"
    },
    {
        "course_id": "ANTH 20100",
        "subject": "ANTH",
        "number": 20100,
        "title": "Intro to Archaeological and World Prehistory"
    },
    {
        "course_id": "ANTH 20300",
        "subject": "ANTH",
        "number": 20300,
        "title": "Biological Basis of Human Social Behavior"
    },
    {
        "course_id": "ANTH 20400",
        "subject": "ANTH",
        "number": 20400,
        "title": "Intro to Bio Anthro and Human Evolution"
    },
    {
        "course_id": "ANTH 20500",
        "subject": "ANTH",
        "number": 20500,
        "title": "Human Cultural Diversity"
    },
    {
        "course_id": "ANTH 21000",
        "subject": "ANTH",
        "number": 21000,
        "title": "Technology and Culture"
    },
    {
        "course_id": "ANTH 21200",
        "subject": "ANTH",
        "number": 21200,
        "title": "Culture, Food And Health"
    },
    {
        "course_id": "ANTH 23000",
        "subject": "ANTH",
        "number": 23000,
        "title": "Gender Across Cultures"
    },
    {
        "course_id": "ANTH 23500",
        "subject": "ANTH",
        "number": 23500,
        "title": "The Great Apes"
    },
    {
        "course_id": "ANTH 25400",
        "subject": "ANTH",
        "number": 25400,
        "title": "Archaeological Hoaxes, Myths And Frauds"
    },
    {
        "course_id": "ANTH 28200",
        "subject": "ANTH",
        "number": 28200,
        "title": "Introduction To LGBTQ Studies"
    },
    {
        "course_id": "ANTH 30700",
        "subject": "ANTH",
        "number": 30700,
        "title": "The Development Of Contemporary Anthropological Theory"
    },
    {
        "course_id": "ANTH 31000",
        "subject": "ANTH",
        "number": 31000,
        "title": "Mortuary Practices Across Cultures"
    },
    {
        "course_id": "ANTH 31100",
        "subject": "ANTH",
        "number": 31100,
        "title": "The Archaeology Of The Ancient Andes"
    },
    {
        "course_id": "ANTH 31200",
        "subject": "ANTH",
        "number": 31200,
        "title": "The Archaeology Of Ancient Egypt And The Near East"
    },
    {
        "course_id": "ANTH 31300",
        "subject": "ANTH",
        "number": 31300,
        "title": "Archaeology Of North America"
    },
    {
        "course_id": "ANTH 32000",
        "subject": "ANTH",
        "number": 32000,
        "title": "Ancient States And Empires"
    },
    {
        "course_id": "ANTH 32700",
        "subject": "ANTH",
        "number": 32700,
        "title": "Environment And Culture"
    },
    {
        "course_id": "ANTH 33500",
        "subject": "ANTH",
        "number": 33500,
        "title": "Primate Behavior"
    },
    {
        "course_id": "ANTH 33600",
        "subject": "ANTH",
        "number": 33600,
        "title": "Human Variation"
    },
    {
        "course_id": "ANTH 33700",
        "subject": "ANTH",
        "number": 33700,
        "title": "Human Diet: Origins And Evolution"
    },
    {
        "course_id": "ANTH 34000",
        "subject": "ANTH",
        "number": 34000,
        "title": "Global Perspectives On Health"
    },
    {
        "course_id": "ANTH 34100",
        "subject": "ANTH",
        "number": 34100,
        "title": "Culture And Personality"
    },
    {
        "course_id": "ANTH 35800",
        "subject": "ANTH",
        "number": 35800,
        "title": "African Cultures"
    },
    {
        "course_id": "ANTH 37000",
        "subject": "ANTH",
        "number": 37000,
        "title": "Ethnicity And Culture"
    },
    {
        "course_id": "ANTH 37300",
        "subject": "ANTH",
        "number": 37300,
        "title": "Anthropology Of Religion"
    },
    {
        "course_id": "ANTH 37700",
        "subject": "ANTH",
        "number": 37700,
        "title": "Anthropology Of Hunter-Gatherer Societies"
    },
    {
        "course_id": "ANTH 37800",
        "subject": "ANTH",
        "number": 37800,
        "title": "Archaeology And Cultural Anthropology Of Mesoamerica (Mexico, Belize And Guatemala)"
    },
    {
        "course_id": "ANTH 37900",
        "subject": "ANTH",
        "number": 37900,
        "title": "Native American Culture"
    },
    {
        "course_id": "ANTH 38000",
        "subject": "ANTH",
        "number": 38000,
        "title": "Using Anthropology In The World"
    },
    {
        "course_id": "ANTH 38400",
        "subject": "ANTH",
        "number": 38400,
        "title": "Designing For People: Anthropological Approaches"
    },
    {
        "course_id": "ANTH 39200",
        "subject": "ANTH",
        "number": 39200,
        "title": "Selected Topics In Anthropology"
    },
    {
        "course_id": "ANTH 40400",
        "subject": "ANTH",
        "number": 40400,
        "title": "Comparative Social Organization"
    },
    {
        "course_id": "ANTH 41400",
        "subject": "ANTH",
        "number": 41400,
        "title": "Introduction To Language And Culture"
    },
    {
        "course_id": "ANTH 42500",
        "subject": "ANTH",
        "number": 42500,
        "title": "Archaeological Method And Theory"
    },
    {
        "course_id": "ANTH 43600",
        "subject": "ANTH",
        "number": 43600,
        "title": "Human Evolution"
    },
    {
        "course_id": "ANTH 48200",
        "subject": "ANTH",
        "number": 48200,
        "title": "Sexual Diversity In Global Perspectives"
    },
    {
        "course_id": "ANTH 50400",
        "subject": "ANTH",
        "number": 50400,
        "title": "Archaeological Theory"
    },
    {
        "course_id": "ANTH 50500",
        "subject": "ANTH",
        "number": 50500,
        "title": "Culture And Society"
    },
    {
        "course_id": "ANTH 50700",
        "subject": "ANTH",
        "number": 50700,
        "title": "History Of Theory In Anthropology"
    },
    {
        "course_id": "ANTH 53400",
        "subject": "ANTH",
        "number": 53400,
        "title": "Human Osteology"
    },
    {
        "course_id": "ANTH 53500",
        "subject": "ANTH",
        "number": 53500,
        "title": "Foundations Of Biological Anthropology"
    },
    {
        "course_id": "ANTH 53600",
        "subject": "ANTH",
        "number": 53600,
        "title": "Primate Ecology"
    },
    {
        "course_id": "ANTH 57500",
        "subject": "ANTH",
        "number": 57500,
        "title": "Economic Anthropology"
    },
    {
        "course_id": "ANTH 59200",
        "subject": "ANTH",
        "number": 59200,
        "title": "Selected Topics In Anthropology"
    },
    {
        "course_id": "ARAB 10100",
        "subject": "ARAB",
        "number": 10100,
        "title": "Standard Arabic Level I"
    },
    {
        "course_id": "ARAB 10200",
        "subject": "ARAB",
        "number": 10200,
        "title": "Standard Arabic Level II"
    },
    {
        "course_id": "ARAB 20100",
        "subject": "ARAB",
        "number": 20100,
        "title": "Standard Arabic Level III"
    },
    {
        "course_id": "ARAB 20200",
        "subject": "ARAB",
        "number": 20200,
        "title": "Standard Arabic Level IV"
    },
    {
        "course_id": "ARAB 23000",
        "subject": "ARAB",
        "number": 23000,
        "title": "Arabic Literature In Translation"
    },
    {
        "course_id": "ARAB 23900",
        "subject": "ARAB",
        "number": 23900,
        "title": "Arab Women Writers (Spring 2022 and after only)"
    },
    {
        "course_id": "ARAB 28000",
        "subject": "ARAB",
        "number": 28000,
        "title": "Arabic Culture"
    },
    {
        "course_id": "ARAB 28100",
        "subject": "ARAB",
        "number": 28100,
        "title": "Introduction To Islamic Civilization And Culture"
    },
    {
        "course_id": "ARAB 30100",
        "subject": "ARAB",
        "number": 30100,
        "title": "Standard Arabic Level V"
    },
    {
        "course_id": "ARAB 30200",
        "subject": "ARAB",
        "number": 30200,
        "title": "Standard Arabic Level VI"
    },
    {
        "course_id": "ARAB 33400",
        "subject": "ARAB",
        "number": 33400,
        "title": "North African Literature And Culture"
    },
    {
        "course_id": "ASAM 24000",
        "subject": "ASAM",
        "number": 24000,
        "title": "Intro to Asian American Studies"
    },
    {
        "course_id": "ASAM 34000",
        "subject": "ASAM",
        "number": 34000,
        "title": "Contemporary Issues In Asian American Studies"
    },
    {
        "course_id": "ASEC 33100",
        "subject": "ASEC",
        "number": 33100,
        "title": "The Role of Horses in Human History, Culture and Society"
    },
    {
        "course_id": "ASEC 35500",
        "subject": "ASEC",
        "number": 35500,
        "title": "Controversial Science and Media in the Public Sphere"
    },
    {
        "course_id": "ASEC 49100",
        "subject": "ASEC",
        "number": 49100,
        "title": "Special Topics In Agricultural Science And Education Communication"
    },
    {
        "course_id": "ASL 10100",
        "subject": "ASL",
        "number": 10100,
        "title": "American Sign Language I"
    },
    {
        "course_id": "ASL 10200",
        "subject": "ASL",
        "number": 10200,
        "title": "American Sign Language II"
    },
    {
        "course_id": "ASL 20100",
        "subject": "ASL",
        "number": 20100,
        "title": "American Sign Language III"
    },
    {
        "course_id": "ASL 20200",
        "subject": "ASL",
        "number": 20200,
        "title": "American Sign Language IV"
    },
    {
        "course_id": "ASL 28000",
        "subject": "ASL",
        "number": 28000,
        "title": "American Deaf Community: Language, Culture, And Society"
    },
    {
        "course_id": "ASM 23600",
        "subject": "ASM",
        "number": 23600,
        "title": "Environmental Systems Management"
    },
    {
        "course_id": "ASTR 26300",
        "subject": "ASTR",
        "number": 26300,
        "title": "Descriptive Astronomy: The Solar System"
    },
    {
        "course_id": "ASTR 26400",
        "subject": "ASTR",
        "number": 26400,
        "title": "Descriptive Astronomy: Stars and Galaxies"
    },
    {
        "course_id": "ASTR 37000",
        "subject": "ASTR",
        "number": 37000,
        "title": "Cosmology"
    },
    {
        "course_id": "ASTR 56200",
        "subject": "ASTR",
        "number": 56200,
        "title": "Introduction To High Energy Astrophysics"
    },
    {
        "course_id": "ASTR 56300",
        "subject": "ASTR",
        "number": 56300,
        "title": "Astroparticle Physics"
    },
    {
        "course_id": "BCHM 10000",
        "subject": "BCHM",
        "number": 10000,
        "title": "Intro to Biochemistry"
    },
    {
        "course_id": "BCM 10001",
        "subject": "BCM",
        "number": 10001,
        "title": "Introduction to Construction Management"
    },
    {
        "course_id": "BIOL 11000",
        "subject": "BIOL",
        "number": 11000,
        "title": "Fundamentals of Biology I"
    },
    {
        "course_id": "BIOL 11100",
        "subject": "BIOL",
        "number": 11100,
        "title": "Fundamentals of Biology II"
    },
    {
        "course_id": "BIOL 11200",
        "subject": "BIOL",
        "number": 11200,
        "title": "Fundamentals of Biology I"
    },
    {
        "course_id": "BIOL 11300",
        "subject": "BIOL",
        "number": 11300,
        "title": "Fundamentals of Biology II"
    },
    {
        "course_id": "BIOL 11500",
        "subject": "BIOL",
        "number": 11500,
        "title": "Biology Resource Seminar"
    },
    {
        "course_id": "BIOL 12100",
        "subject": "BIOL",
        "number": 12100,
        "title": "Biology I: Ecology, Diversity, & Behavior"
    },
    {
        "course_id": "BIOL 13100",
        "subject": "BIOL",
        "number": 13100,
        "title": "Biology II: Dev, Structure & Function of Organisms (Summer 2023 and earlier only)"
    },
    {
        "course_id": "BIOL 13500",
        "subject": "BIOL",
        "number": 13500,
        "title": "First Year Biology Lab"
    },
    {
        "course_id": "BIOL 14501",
        "subject": "BIOL",
        "number": 14501,
        "title": "First year biol lab with neuro res project"
    },
    {
        "course_id": "BIOL 14502",
        "subject": "BIOL",
        "number": 14502,
        "title": "First year BIOL lab with Micro Res Project"
    },
    {
        "course_id": "BIOL 14600",
        "subject": "BIOL",
        "number": 14600,
        "title": "Introduction to Biology"
    },
    {
        "course_id": "BIOL 20100",
        "subject": "BIOL",
        "number": 20100,
        "title": "Human Anatomy and Physiology"
    },
    {
        "course_id": "BIOL 20200",
        "subject": "BIOL",
        "number": 20200,
        "title": "Human Anatomy and Physiology"
    },
    {
        "course_id": "BIOL 20300",
        "subject": "BIOL",
        "number": 20300,
        "title": "Human Anatomy and Physiology"
    },
    {
        "course_id": "BIOL 20400",
        "subject": "BIOL",
        "number": 20400,
        "title": "Human Anatomy and Physiology"
    },
    {
        "course_id": "BIOL 20500",
        "subject": "BIOL",
        "number": 20500,
        "title": "Biology for Elementary School Teachers"
    },
    {
        "course_id": "BIOL 20600",
        "subject": "BIOL",
        "number": 20600,
        "title": "Biology for Elementary School Teachers"
    },
    {
        "course_id": "BIOL 30200",
        "subject": "BIOL",
        "number": 30200,
        "title": "Human Design: Anatomy and Physiology"
    },
    {
        "course_id": "BIOL 31200",
        "subject": "BIOL",
        "number": 31200,
        "title": "Great Issues in Genomics and Society  (Fall 2015 and earlier only)"
    },
    {
        "course_id": "BIOL 39500",
        "subject": "BIOL",
        "number": 39500,
        "title": "Special Assignments"
    },
    {
        "course_id": "BIOL 44100",
        "subject": "BIOL",
        "number": 44100,
        "title": "Biology Senior Seminar In Genetics"
    },
    {
        "course_id": "BIOL 44215",
        "subject": "BIOL",
        "number": 44215,
        "title": "Multidisciplinary Design Of Systems And Devices For Physiology Measurements"
    },
    {
        "course_id": "BIOL 47800",
        "subject": "BIOL",
        "number": 47800,
        "title": "Introduction to Bioinformatics"
    },
    {
        "course_id": "BIOL 48300",
        "subject": "BIOL",
        "number": 48300,
        "title": "Great Issues: Environmental And Conservation Biology"
    },
    {
        "course_id": "BIOL 56200",
        "subject": "BIOL",
        "number": 56200,
        "title": "Neural Systems"
    },
    {
        "course_id": "BTNY 11000",
        "subject": "BTNY",
        "number": 11000,
        "title": "Intro to Plant Science"
    },
    {
        "course_id": "BTNY 20100",
        "subject": "BTNY",
        "number": 20100,
        "title": "Plants and Civilization"
    },
    {
        "course_id": "BTNY 21100",
        "subject": "BTNY",
        "number": 21100,
        "title": "Plants and the Environment"
    },
    {
        "course_id": "BTNY 28500",
        "subject": "BTNY",
        "number": 28500,
        "title": "Plants and Civilization"
    },
    {
        "course_id": "CHM 11100",
        "subject": "CHM",
        "number": 11100,
        "title": "General Chemistry"
    },
    {
        "course_id": "CHM 11200",
        "subject": "CHM",
        "number": 11200,
        "title": "General Chemistry"
    },
    {
        "course_id": "CHM 11500",
        "subject": "CHM",
        "number": 11500,
        "title": "General Chemistry"
    },
    {
        "course_id": "CHM 11600",
        "subject": "CHM",
        "number": 11600,
        "title": "General Chemistry"
    },
    {
        "course_id": "CHM 12500",
        "subject": "CHM",
        "number": 12500,
        "title": "Introduction to Chemistry"
    },
    {
        "course_id": "CHM 12600",
        "subject": "CHM",
        "number": 12600,
        "title": "Introduction to Chemistry II"
    },
    {
        "course_id": "CHM 12901",
        "subject": "CHM",
        "number": 12901,
        "title": "General Chemistry with Biological focus"
    },
    {
        "course_id": "CHM 13600",
        "subject": "CHM",
        "number": 13600,
        "title": "General Chemistry Honors"
    },
    {
        "course_id": "CHM 20000",
        "subject": "CHM",
        "number": 20000,
        "title": "Fundamentals of Chemistry (Summer 2023 and earlier only)"
    },
    {
        "course_id": "CHM 25500",
        "subject": "CHM",
        "number": 25500,
        "title": "Organic Chemistry"
    },
    {
        "course_id": "CHM 25501",
        "subject": "CHM",
        "number": 25501,
        "title": "Organic Chemistry Laboratory"
    },
    {
        "course_id": "CHM 25600",
        "subject": "CHM",
        "number": 25600,
        "title": "Organic Chemistry"
    },
    {
        "course_id": "CHM 25601",
        "subject": "CHM",
        "number": 25601,
        "title": "Organic Chemistry Laboratory"
    },
    {
        "course_id": "CHM 26300",
        "subject": "CHM",
        "number": 26300,
        "title": "Organic Chemistry Laboratory"
    },
    {
        "course_id": "CHM 26400",
        "subject": "CHM",
        "number": 26400,
        "title": "Organic Chemistry Laboratory"
    },
    {
        "course_id": "CHM 26500",
        "subject": "CHM",
        "number": 26500,
        "title": "Organic Chemistry Laboratory"
    },
    {
        "course_id": "CHM 26505",
        "subject": "CHM",
        "number": 26505,
        "title": "Organic Chemistry"
    },
    {
        "course_id": "CHM 26600",
        "subject": "CHM",
        "number": 26600,
        "title": "Organic Chemistry Laboratory"
    },
    {
        "course_id": "CHM 26605",
        "subject": "CHM",
        "number": 26605,
        "title": "Organic Chemistry"
    },
    {
        "course_id": "CHM 26700",
        "subject": "CHM",
        "number": 26700,
        "title": "Organic Chemistry Laboratory Honors"
    },
    {
        "course_id": "CHM 26800",
        "subject": "CHM",
        "number": 26800,
        "title": "Organic Chemistry Laboratory Honors"
    },
    {
        "course_id": "CHM 29000",
        "subject": "CHM",
        "number": 29000,
        "title": "Selected Topics In Chemistry For Lower-Division Students"
    },
    {
        "course_id": "CHM 46200",
        "subject": "CHM",
        "number": 46200,
        "title": "Intermediate Organic Chemistry"
    },
    {
        "course_id": "CHM 48100",
        "subject": "CHM",
        "number": 48100,
        "title": "Environmental Chemistry"
    },
    {
        "course_id": "CHM 49000",
        "subject": "CHM",
        "number": 49000,
        "title": "Selected Topics In Chemistry For Upper-Division Students"
    },
    {
        "course_id": "CHM 57900",
        "subject": "CHM",
        "number": 57900,
        "title": "Computational Chemistry"
    },
    {
        "course_id": "CHM 59900",
        "subject": "CHM",
        "number": 59900,
        "title": "Special Assignments"
    },
    {
        "course_id": "CHNS 10100",
        "subject": "CHNS",
        "number": 10100,
        "title": "Chinese Level I"
    },
    {
        "course_id": "CHNS 10200",
        "subject": "CHNS",
        "number": 10200,
        "title": "Chinese Level II"
    },
    {
        "course_id": "CHNS 20100",
        "subject": "CHNS",
        "number": 20100,
        "title": "Chinese Level III"
    },
    {
        "course_id": "CHNS 20200",
        "subject": "CHNS",
        "number": 20200,
        "title": "Chinese Level IV"
    },
    {
        "course_id": "CHNS 24100",
        "subject": "CHNS",
        "number": 24100,
        "title": "Introduction to the Study of Chinese Literature"
    },
    {
        "course_id": "CHNS 28000",
        "subject": "CHNS",
        "number": 28000,
        "title": "Topics in Chinese Civilization and Culture"
    },
    {
        "course_id": "CHNS 28100",
        "subject": "CHNS",
        "number": 28100,
        "title": "Introduction To Chinese Food Culture"
    },
    {
        "course_id": "CHNS 30100",
        "subject": "CHNS",
        "number": 30100,
        "title": "Chinese Level V"
    },
    {
        "course_id": "CHNS 30200",
        "subject": "CHNS",
        "number": 30200,
        "title": "Chinese Level VI"
    },
    {
        "course_id": "CHNS 33000",
        "subject": "CHNS",
        "number": 33000,
        "title": "Introduction to Chinese Cinema"
    },
    {
        "course_id": "CHNS 34100",
        "subject": "CHNS",
        "number": 34100,
        "title": "Chinese Literature I: Traditional Chinese Literature"
    },
    {
        "course_id": "CHNS 34200",
        "subject": "CHNS",
        "number": 34200,
        "title": "Chinese Literature II: Modern Chinese Literature"
    },
    {
        "course_id": "CHNS 40100",
        "subject": "CHNS",
        "number": 40100,
        "title": "Chinese Level VII"
    },
    {
        "course_id": "CHNS 40200",
        "subject": "CHNS",
        "number": 40200,
        "title": "Chinese Level VII"
    },
    {
        "course_id": "CHNS 49000",
        "subject": "CHNS",
        "number": 49000,
        "title": "Special Topics In Chinese Language"
    },
    {
        "course_id": "CHNS 59400",
        "subject": "CHNS",
        "number": 59400,
        "title": "Special Topics In Chinese Literature"
    },
    {
        "course_id": "CLCS 18100",
        "subject": "CLCS",
        "number": 18100,
        "title": "Classical World Civilizations"
    },
    {
        "course_id": "CLCS 23010",
        "subject": "CLCS",
        "number": 23010,
        "title": "Survey of Greek Literature in Translation"
    },
    {
        "course_id": "CLCS 23100",
        "subject": "CLCS",
        "number": 23100,
        "title": "Survey of Latin Literature"
    },
    {
        "course_id": "CLCS 23200",
        "subject": "CLCS",
        "number": 23200,
        "title": "Classical Roots of English Words"
    },
    {
        "course_id": "CLCS 23300",
        "subject": "CLCS",
        "number": 23300,
        "title": "Comparative Mythology"
    },
    {
        "course_id": "CLCS 23500",
        "subject": "CLCS",
        "number": 23500,
        "title": "Classical Mythology"
    },
    {
        "course_id": "CLCS 23700",
        "subject": "CLCS",
        "number": 23700,
        "title": "Gender & Sexuality in Greek & Roman Antiquity"
    },
    {
        "course_id": "CLCS 23800",
        "subject": "CLCS",
        "number": 23800,
        "title": "The Tragic Vision"
    },
    {
        "course_id": "CLCS 23900",
        "subject": "CLCS",
        "number": 23900,
        "title": "The Comic Vision"
    },
    {
        "course_id": "CLCS 28000",
        "subject": "CLCS",
        "number": 28000,
        "title": "Topics In Classical Civilization"
    },
    {
        "course_id": "CLCS 33700",
        "subject": "CLCS",
        "number": 33700,
        "title": "The Ancient Epic"
    },
    {
        "course_id": "CLCS 33900",
        "subject": "CLCS",
        "number": 33900,
        "title": "Literature and the Law"
    },
    {
        "course_id": "CLCS 38000",
        "subject": "CLCS",
        "number": 38000,
        "title": "Alexander the Great & Hellenistic World"
    },
    {
        "course_id": "CLCS 38100",
        "subject": "CLCS",
        "number": 38100,
        "title": "Julius Caesar: Statesman, Soldier, Citizen"
    },
    {
        "course_id": "CLCS 38300",
        "subject": "CLCS",
        "number": 38300,
        "title": "The Roman Empire"
    },
    {
        "course_id": "CLCS 38400",
        "subject": "CLCS",
        "number": 38400,
        "title": "Ancient Western Medicine"
    },
    {
        "course_id": "CLCS 38500",
        "subject": "CLCS",
        "number": 38500,
        "title": "Science, Medicine, and Magic In The Ancient West (Fall 2022 and after only)"
    },
    {
        "course_id": "CLCS 38600",
        "subject": "CLCS",
        "number": 38600,
        "title": "Ancient Greek Religion"
    },
    {
        "course_id": "CLCS 38700",
        "subject": "CLCS",
        "number": 38700,
        "title": "Roman Religion"
    },
    {
        "course_id": "CLCS 48000",
        "subject": "CLCS",
        "number": 48000,
        "title": "Potters And Society In Antiquity"
    },
    {
        "course_id": "CLCS 48100",
        "subject": "CLCS",
        "number": 48100,
        "title": "Culture And Society In The Age Of Pericles"
    },
    {
        "course_id": "CLCS 48300",
        "subject": "CLCS",
        "number": 48300,
        "title": "Republican Rome"
    },
    {
        "course_id": "CLCS 59300",
        "subject": "CLCS",
        "number": 59300,
        "title": "Special Topics In Classical Literature"
    },
    {
        "course_id": "CM 10000",
        "subject": "CM",
        "number": 10000,
        "title": "Introduction to Construction"
    },
    {
        "course_id": "CMPL 23000",
        "subject": "CMPL",
        "number": 23000,
        "title": "Crossing Borders: Introduction To Comparative Literature"
    },
    {
        "course_id": "CMPL 26600",
        "subject": "CMPL",
        "number": 26600,
        "title": "Intro to World Lit Beg - 1600"
    },
    {
        "course_id": "CMPL 26700",
        "subject": "CMPL",
        "number": 26700,
        "title": "World Lit from 1700 to the present"
    },
    {
        "course_id": "CNIT 49900",
        "subject": "CNIT",
        "number": 49900,
        "title": "Topics In Computer And Information Technology"
    },
    {
        "course_id": "COM 11400",
        "subject": "COM",
        "number": 11400,
        "title": "Fundamentals of Speech Communication"
    },
    {
        "course_id": "COM 20400",
        "subject": "COM",
        "number": 20400,
        "title": "Critical Perspectives on Communication"
    },
    {
        "course_id": "COM 21200",
        "subject": "COM",
        "number": 21200,
        "title": "Approaches to the study of interpersonal communication"
    },
    {
        "course_id": "COM 21700",
        "subject": "COM",
        "number": 21700,
        "title": "Science Writing and Presentations"
    },
    {
        "course_id": "COM 22400",
        "subject": "COM",
        "number": 22400,
        "title": "Communicating in the Global Workplace"
    },
    {
        "course_id": "COM 25000",
        "subject": "COM",
        "number": 25000,
        "title": "Mass Communication And Society"
    },
    {
        "course_id": "COM 25100",
        "subject": "COM",
        "number": 25100,
        "title": "Communication, Information and Society"
    },
    {
        "course_id": "COM 31200",
        "subject": "COM",
        "number": 31200,
        "title": "Rhetoric In The Western World"
    },
    {
        "course_id": "COM 31400",
        "subject": "COM",
        "number": 31400,
        "title": "Advanced Presentational Speaking"
    },
    {
        "course_id": "COM 31500",
        "subject": "COM",
        "number": 31500,
        "title": "Speech Communication Of Technical Information"
    },
    {
        "course_id": "COM 31800",
        "subject": "COM",
        "number": 31800,
        "title": "Principles Of Persuasion"
    },
    {
        "course_id": "COM 32000",
        "subject": "COM",
        "number": 32000,
        "title": "Small Group Communication"
    },
    {
        "course_id": "COM 32400",
        "subject": "COM",
        "number": 32400,
        "title": "Introduction To Organizational Communication"
    },
    {
        "course_id": "COM 32900",
        "subject": "COM",
        "number": 32900,
        "title": "History Of The Mass Media"
    },
    {
        "course_id": "COM 35100",
        "subject": "COM",
        "number": 35100,
        "title": "Mass Communication Ethics"
    },
    {
        "course_id": "COM 41500",
        "subject": "COM",
        "number": 41500,
        "title": "Discussion Of Technical Problems"
    },
    {
        "course_id": "CS 10100",
        "subject": "CS",
        "number": 10100,
        "title": "Digital Literacy"
    },
    {
        "course_id": "CS 18000",
        "subject": "CS",
        "number": 18000,
        "title": "Problem Solving And Object-Oriented Programming"
    },
    {
        "course_id": "CS 18200",
        "subject": "CS",
        "number": 18200,
        "title": "Foundations Of Computer Science"
    },
    {
        "course_id": "CS 24000",
        "subject": "CS",
        "number": 24000,
        "title": "Programming In C"
    },
    {
        "course_id": "CS 25000",
        "subject": "CS",
        "number": 25000,
        "title": "Computer Architecture"
    },
    {
        "course_id": "CS 25100",
        "subject": "CS",
        "number": 25100,
        "title": "Data Structures And Algorithms"
    },
    {
        "course_id": "CS 25200",
        "subject": "CS",
        "number": 25200,
        "title": "Systems Programming "
    },
    {
        "course_id": "CS 30700",
        "subject": "CS",
        "number": 30700,
        "title": "Software Engineering I"
    },
    {
        "course_id": "CS 31400",
        "subject": "CS",
        "number": 31400,
        "title": "Numerical Methods"
    },
    {
        "course_id": "CS 33400",
        "subject": "CS",
        "number": 33400,
        "title": "Fundamentals Of Computer Graphics"
    },
    {
        "course_id": "CS 34800",
        "subject": "CS",
        "number": 34800,
        "title": "Information Systems"
    },
    {
        "course_id": "CS 35200",
        "subject": "CS",
        "number": 35200,
        "title": "Compilers: Principles And PracticeCS 35400 - Operating SystemsCS 37300 - Data Mining And Machine LearningCS 38100 - Introduction To The Analysis Of AlgorithmsCS 42200 - Computer NetworksCS 43400 - Advanced Computer GraphicsCS 45600 - Programming LanguagesCS 47100 - Introduction to Artificial IntelligenceCS 49000 - Topics In Computer Sciences For Undergraduates - Intro to Data Viz"
    },
    {
        "course_id": "CS 35300",
        "subject": "CS",
        "number": 35300,
        "title": "Principles Of Concurrency And Parallelism"
    },
    {
        "course_id": "CS 35400",
        "subject": "CS",
        "number": 35400,
        "title": "Operating Systems"
    },
    {
        "course_id": "CS 35500",
        "subject": "CS",
        "number": 35500,
        "title": "Introduction To Cryptography"
    },
    {
        "course_id": "CS 37300",
        "subject": "CS",
        "number": 37300,
        "title": "Data Mining And Machine LearningCS 43400 - Advanced Computer GraphicsCS 47100 - Introduction to Artificial Intelligence"
    },
    {
        "course_id": "CS 38100",
        "subject": "CS",
        "number": 38100,
        "title": "Introduction To The Analysis Of Algorithms"
    },
    {
        "course_id": "CS 40700",
        "subject": "CS",
        "number": 40700,
        "title": "Software Engineering Senior Project"
    },
    {
        "course_id": "CS 40800",
        "subject": "CS",
        "number": 40800,
        "title": "Software Testing"
    },
    {
        "course_id": "CS 42200",
        "subject": "CS",
        "number": 42200,
        "title": "Computer Networks"
    },
    {
        "course_id": "CS 42600",
        "subject": "CS",
        "number": 42600,
        "title": "Computer Security"
    },
    {
        "course_id": "CS 44800",
        "subject": "CS",
        "number": 44800,
        "title": "Introduction To Relational Database Systems"
    },
    {
        "course_id": "CS 45600",
        "subject": "CS",
        "number": 45600,
        "title": "Programming Languages"
    },
    {
        "course_id": "CS 47100",
        "subject": "CS",
        "number": 47100,
        "title": "Introduction to Artificial Intelligence"
    },
    {
        "course_id": "CS 47300",
        "subject": "CS",
        "number": 47300,
        "title": "Web Information Search And Management"
    },
    {
        "course_id": "CS 47800",
        "subject": "CS",
        "number": 47800,
        "title": "Introduction to Bioinformatics"
    },
    {
        "course_id": "CS 48300",
        "subject": "CS",
        "number": 48300,
        "title": "Introduction To The Theory Of Computation"
    },
    {
        "course_id": "CS 48900",
        "subject": "CS",
        "number": 48900,
        "title": "Embedded Systems"
    },
    {
        "course_id": "CS 49000",
        "subject": "CS",
        "number": 49000,
        "title": "Topics In Computer Sciences For Undergraduates"
    },
    {
        "course_id": "CS 49700",
        "subject": "CS",
        "number": 49700,
        "title": "Honors Research Project - (Senior Project)"
    },
    {
        "course_id": "CS 51000",
        "subject": "CS",
        "number": 51000,
        "title": "Software Engineering"
    },
    {
        "course_id": "CS 51400",
        "subject": "CS",
        "number": 51400,
        "title": "Numerical Analysis"
    },
    {
        "course_id": "CS 51500",
        "subject": "CS",
        "number": 51500,
        "title": "Numerical Linear Algebra"
    },
    {
        "course_id": "CS 52000",
        "subject": "CS",
        "number": 52000,
        "title": "Computational Methods In Optimization"
    },
    {
        "course_id": "CS 52500",
        "subject": "CS",
        "number": 52500,
        "title": "Parallel Computing"
    },
    {
        "course_id": "CS 57700",
        "subject": "CS",
        "number": 57700,
        "title": "Natural Language Processing"
    },
    {
        "course_id": "CS 57800",
        "subject": "CS",
        "number": 57800,
        "title": "Statistical Machine Learning"
    },
    {
        "course_id": "CS 59000",
        "subject": "CS",
        "number": 59000,
        "title": "Topics In Computer Sciences"
    },
    {
        "course_id": "DANC 25000",
        "subject": "DANC",
        "number": 25000,
        "title": "Dance Appreciation"
    },
    {
        "course_id": "DANC 37800",
        "subject": "DANC",
        "number": 37800,
        "title": "Survey of Concert Dance History (Fall 2021 and after only)"
    },
    {
        "course_id": "EAPS 10000",
        "subject": "EAPS",
        "number": 10000,
        "title": "Planet Earth"
    },
    {
        "course_id": "EAPS 10200",
        "subject": "EAPS",
        "number": 10200,
        "title": "Earth Science for Elementary Education (Fall 2021 and earlier only)"
    },
    {
        "course_id": "EAPS 10400",
        "subject": "EAPS",
        "number": 10400,
        "title": "Oceanography"
    },
    {
        "course_id": "EAPS 10500",
        "subject": "EAPS",
        "number": 10500,
        "title": "The Planets"
    },
    {
        "course_id": "EAPS 10600",
        "subject": "EAPS",
        "number": 10600,
        "title": "Geosciences in the Cinema"
    },
    {
        "course_id": "EAPS 10900",
        "subject": "EAPS",
        "number": 10900,
        "title": "The Dynamic Earth (Summer 2023 and earlier only)"
    },
    {
        "course_id": "EAPS 11100",
        "subject": "EAPS",
        "number": 11100,
        "title": "Physical Geology"
    },
    {
        "course_id": "EAPS 11200",
        "subject": "EAPS",
        "number": 11200,
        "title": "Earth Through Time"
    },
    {
        "course_id": "EAPS 11300",
        "subject": "EAPS",
        "number": 11300,
        "title": "Introduction to Environmental Science"
    },
    {
        "course_id": "EAPS 11600",
        "subject": "EAPS",
        "number": 11600,
        "title": "Earthquakes and Volcanoes"
    },
    {
        "course_id": "EAPS 11700",
        "subject": "EAPS",
        "number": 11700,
        "title": "Introduction to Atmospheric Science"
    },
    {
        "course_id": "EAPS 12000",
        "subject": "EAPS",
        "number": 12000,
        "title": "Introduction to Geography"
    },
    {
        "course_id": "EAPS 12500",
        "subject": "EAPS",
        "number": 12500,
        "title": "Environmental Science and Conservation"
    },
    {
        "course_id": "EAPS 12900",
        "subject": "EAPS",
        "number": 12900,
        "title": "Earth System Dynamics"
    },
    {
        "course_id": "EAPS 13800",
        "subject": "EAPS",
        "number": 13800,
        "title": "Thunderstorms & Tornadoes"
    },
    {
        "course_id": "EAPS 20000",
        "subject": "EAPS",
        "number": 20000,
        "title": "Water World: Processes and Challenges in Global Hydrology"
    },
    {
        "course_id": "EAPS 22100",
        "subject": "EAPS",
        "number": 22100,
        "title": "Survey of Atmospheric Science"
    },
    {
        "course_id": "EAPS 22500",
        "subject": "EAPS",
        "number": 22500,
        "title": "Science of the Atmosphere"
    },
    {
        "course_id": "EAPS 24300",
        "subject": "EAPS",
        "number": 24300,
        "title": "Earth Materials I (Summer 2023 and earlier only)"
    },
    {
        "course_id": "EAPS 24400",
        "subject": "EAPS",
        "number": 24400,
        "title": "Earth Materials II (Summer 2023 and earlier only)"
    },
    {
        "course_id": "EAPS 30100",
        "subject": "EAPS",
        "number": 30100,
        "title": "Oil !"
    },
    {
        "course_id": "EAPS 31201",
        "subject": "EAPS",
        "number": 31201,
        "title": "Earth Systems Science for Elementary Teachers"
    },
    {
        "course_id": "EAPS 32500",
        "subject": "EAPS",
        "number": 32500,
        "title": "Aviation Meteorology"
    },
    {
        "course_id": "EAPS 32700",
        "subject": "EAPS",
        "number": 32700,
        "title": "Climate, Science And Society"
    },
    {
        "course_id": "EAPS 36000",
        "subject": "EAPS",
        "number": 36000,
        "title": "Great Issues In Science And Society"
    },
    {
        "course_id": "EAPS 36400",
        "subject": "EAPS",
        "number": 36400,
        "title": "Natural Hazards: Science And Society"
    },
    {
        "course_id": "EAPS 37500",
        "subject": "EAPS",
        "number": 37500,
        "title": "Great Issues - Fossil Fuels, Energy And Society"
    },
    {
        "course_id": "EAPS 38500",
        "subject": "EAPS",
        "number": 38500,
        "title": "Principles Of Engineering Geology"
    },
    {
        "course_id": "EAPS 43400",
        "subject": "EAPS",
        "number": 43400,
        "title": "Weather Analysis And Forecasting"
    },
    {
        "course_id": "ECE 30100",
        "subject": "ECE",
        "number": 30100,
        "title": "Signals And Systems"
    },
    {
        "course_id": "ECON 21000",
        "subject": "ECON",
        "number": 21000,
        "title": "Principles of Economics"
    },
    {
        "course_id": "ECON 25100",
        "subject": "ECON",
        "number": 25100,
        "title": "Microeconomics"
    },
    {
        "course_id": "ECON 25200",
        "subject": "ECON",
        "number": 25200,
        "title": "Macroeconomics"
    },
    {
        "course_id": "ECON 51400",
        "subject": "ECON",
        "number": 51400,
        "title": "Microeconomic Theory (Summer 2021 and earlier only)"
    },
    {
        "course_id": "EDCI 20500",
        "subject": "EDCI",
        "number": 20500,
        "title": "Exploring Teaching as a Career"
    },
    {
        "course_id": "EDCI 22200",
        "subject": "EDCI",
        "number": 22200,
        "title": "Knowing the World Through Mathematics (Fall 2020 and after only)"
    },
    {
        "course_id": "EDCI 27000",
        "subject": "EDCI",
        "number": 27000,
        "title": "Intro to Educational Technology  (Fall 2013 and after only)"
    },
    {
        "course_id": "EDCI 28500",
        "subject": "EDCI",
        "number": 28500,
        "title": "Multiculturalism in Education"
    },
    {
        "course_id": "EDCI 42100",
        "subject": "EDCI",
        "number": 42100,
        "title": "The Teaching Of Biology In Secondary Schools"
    },
    {
        "course_id": "EDCI 42400",
        "subject": "EDCI",
        "number": 42400,
        "title": "The Teaching Of Earth And Physical Science In The Secondary Schools"
    },
    {
        "course_id": "EDCI 42500",
        "subject": "EDCI",
        "number": 42500,
        "title": "Teaching Of Secondary Mathematics - Methods I"
    },
    {
        "course_id": "EDCI 49600",
        "subject": "EDCI",
        "number": 49600,
        "title": "Student Teaching in the Elementary School (Fall 2021 and after only)"
    },
    {
        "course_id": "EDCI 49800",
        "subject": "EDCI",
        "number": 49800,
        "title": "Supervised Teaching (Fall 2021 and after only)"
    },
    {
        "course_id": "EDPS 10500",
        "subject": "EDPS",
        "number": 10500,
        "title": "Academic and Career Planning  (Fall 2013 and after only)"
    },
    {
        "course_id": "EDPS 23500",
        "subject": "EDPS",
        "number": 23500,
        "title": "Learning and Motivation"
    },
    {
        "course_id": "EDPS 26500",
        "subject": "EDPS",
        "number": 26500,
        "title": "The Inclusive Classroom (Summer 2020 and earlier only)"
    },
    {
        "course_id": "EDPS 31500",
        "subject": "EDPS",
        "number": 31500,
        "title": "Collaborative Leadership: Interpersonal Skills  (Fall 2013 and after only)"
    },
    {
        "course_id": "EDPS 31600",
        "subject": "EDPS",
        "number": 31600,
        "title": "Collaborative Leadership: Cross-Cultural Settings"
    },
    {
        "course_id": "EDPS 49800",
        "subject": "EDPS",
        "number": 49800,
        "title": "Supervised Teaching- Special Education (Fall 2021 and after only)"
    },
    {
        "course_id": "EDST 20000",
        "subject": "EDST",
        "number": 20000,
        "title": "History & Philosophy of Education"
    },
    {
        "course_id": "EDST 20010",
        "subject": "EDST",
        "number": 20010,
        "title": "Educational Policies And Laws (Summer 2020 and earlier only)"
    },
    {
        "course_id": "EDST 24800",
        "subject": "EDST",
        "number": 24800,
        "title": "Contemporary Issues in American Schools"
    },
    {
        "course_id": "EEE 35500",
        "subject": "EEE",
        "number": 35500,
        "title": "Engineering Environmental Sustainability (Fall 2020 and after only)"
    },
    {
        "course_id": "ENGL 10600",
        "subject": "ENGL",
        "number": 10600,
        "title": "First Year Composition"
    },
    {
        "course_id": "ENGL 10800",
        "subject": "ENGL",
        "number": 10800,
        "title": "Accelerated First Year Composition"
    },
    {
        "course_id": "ENGL 11000",
        "subject": "ENGL",
        "number": 11000,
        "title": "American Language And Culture For International Students I"
    },
    {
        "course_id": "ENGL 20200",
        "subject": "ENGL",
        "number": 20200,
        "title": "Engaging English"
    },
    {
        "course_id": "ENGL 21700",
        "subject": "ENGL",
        "number": 21700,
        "title": "Figures Of Myth And Legend I: Monsters"
    },
    {
        "course_id": "ENGL 21800",
        "subject": "ENGL",
        "number": 21800,
        "title": "Figures Of Myth And Legends II: Heroes And Villains"
    },
    {
        "course_id": "ENGL 21900",
        "subject": "ENGL",
        "number": 21900,
        "title": "Figures of Myth and Legend III"
    },
    {
        "course_id": "ENGL 22300",
        "subject": "ENGL",
        "number": 22300,
        "title": "Literature and Technology"
    },
    {
        "course_id": "ENGL 22400",
        "subject": "ENGL",
        "number": 22400,
        "title": "Literature, Money, And Markets"
    },
    {
        "course_id": "ENGL 22500",
        "subject": "ENGL",
        "number": 22500,
        "title": "Literature, Inequality, and Injustice"
    },
    {
        "course_id": "ENGL 22600",
        "subject": "ENGL",
        "number": 22600,
        "title": "Narrative Medicine"
    },
    {
        "course_id": "ENGL 22700",
        "subject": "ENGL",
        "number": 22700,
        "title": "Intro to Linguistics"
    },
    {
        "course_id": "ENGL 22800",
        "subject": "ENGL",
        "number": 22800,
        "title": "Language and Social Identity  (Spring 2021 and earlier only)"
    },
    {
        "course_id": "ENGL 23000",
        "subject": "ENGL",
        "number": 23000,
        "title": "Great Narrative Works"
    },
    {
        "course_id": "ENGL 23200",
        "subject": "ENGL",
        "number": 23200,
        "title": "Thematic Studies In Literature"
    },
    {
        "course_id": "ENGL 23400",
        "subject": "ENGL",
        "number": 23400,
        "title": "Ecological Literature"
    },
    {
        "course_id": "ENGL 23500",
        "subject": "ENGL",
        "number": 23500,
        "title": "Introduction To Drama"
    },
    {
        "course_id": "ENGL 23700",
        "subject": "ENGL",
        "number": 23700,
        "title": "Introduction to Poetry"
    },
    {
        "course_id": "ENGL 23800",
        "subject": "ENGL",
        "number": 23800,
        "title": "Intro to Fiction"
    },
    {
        "course_id": "ENGL 24000",
        "subject": "ENGL",
        "number": 24000,
        "title": "Survey Of The British Literature: From The Beginnings Through The Neoclassical Period"
    },
    {
        "course_id": "ENGL 24100",
        "subject": "ENGL",
        "number": 24100,
        "title": "Survey Of The British Literature: From The Rise Of Romanticism To The Modern Period"
    },
    {
        "course_id": "ENGL 24900",
        "subject": "ENGL",
        "number": 24900,
        "title": "Great British Books"
    },
    {
        "course_id": "ENGL 25000",
        "subject": "ENGL",
        "number": 25000,
        "title": "Great American Books"
    },
    {
        "course_id": "ENGL 25700",
        "subject": "ENGL",
        "number": 25700,
        "title": "Literature Of Black America"
    },
    {
        "course_id": "ENGL 25800",
        "subject": "ENGL",
        "number": 25800,
        "title": "Nobel Prize Winners In Literature"
    },
    {
        "course_id": "ENGL 26200",
        "subject": "ENGL",
        "number": 26200,
        "title": "Greek And Roman Classics In Translation"
    },
    {
        "course_id": "ENGL 26400",
        "subject": "ENGL",
        "number": 26400,
        "title": "The Bible as Literature"
    },
    {
        "course_id": "ENGL 26600",
        "subject": "ENGL",
        "number": 26600,
        "title": "World Literature: From the Beginnings to 1700 A.D."
    },
    {
        "course_id": "ENGL 26700",
        "subject": "ENGL",
        "number": 26700,
        "title": "World Lit from 1700 to the present"
    },
    {
        "course_id": "ENGL 27600",
        "subject": "ENGL",
        "number": 27600,
        "title": "Shakespeare on Film"
    },
    {
        "course_id": "ENGL 27900",
        "subject": "ENGL",
        "number": 27900,
        "title": "The American Short Story In Print And Film"
    },
    {
        "course_id": "ENGL 28000",
        "subject": "ENGL",
        "number": 28000,
        "title": "Games, Narrative, Culture"
    },
    {
        "course_id": "ENGL 28600",
        "subject": "ENGL",
        "number": 28600,
        "title": "The Movies"
    },
    {
        "course_id": "ENGL 30400",
        "subject": "ENGL",
        "number": 30400,
        "title": "Advanced Composition (Fall 2021 and after only)"
    },
    {
        "course_id": "ENGL 30900",
        "subject": "ENGL",
        "number": 30900,
        "title": "Digital Design And Production"
    },
    {
        "course_id": "ENGL 32200",
        "subject": "ENGL",
        "number": 32200,
        "title": "Word, Image, Media"
    },
    {
        "course_id": "ENGL 33000",
        "subject": "ENGL",
        "number": 33000,
        "title": "Games And Diversity"
    },
    {
        "course_id": "ENGL 33100",
        "subject": "ENGL",
        "number": 33100,
        "title": "Medieval English Literature"
    },
    {
        "course_id": "ENGL 33300",
        "subject": "ENGL",
        "number": 33300,
        "title": "Renaissance English Literature"
    },
    {
        "course_id": "ENGL 33500",
        "subject": "ENGL",
        "number": 33500,
        "title": "Restoration And Eighteenth-Century English Literature"
    },
    {
        "course_id": "ENGL 33700",
        "subject": "ENGL",
        "number": 33700,
        "title": "Nineteenth-Century English Literature"
    },
    {
        "course_id": "ENGL 33900",
        "subject": "ENGL",
        "number": 33900,
        "title": "Twentieth-Century British Literature"
    },
    {
        "course_id": "ENGL 34100",
        "subject": "ENGL",
        "number": 34100,
        "title": "Topics In Science, Literature, And Culture"
    },
    {
        "course_id": "ENGL 34200",
        "subject": "ENGL",
        "number": 34200,
        "title": "Legal Fictions"
    },
    {
        "course_id": "ENGL 34300",
        "subject": "ENGL",
        "number": 34300,
        "title": "Labor And Literature"
    },
    {
        "course_id": "ENGL 34400",
        "subject": "ENGL",
        "number": 34400,
        "title": "Environmental Ethics, Policy, And Sustainability"
    },
    {
        "course_id": "ENGL 34500",
        "subject": "ENGL",
        "number": 34500,
        "title": "Games And World Building"
    },
    {
        "course_id": "ENGL 35000",
        "subject": "ENGL",
        "number": 35000,
        "title": "Survey Of American Literature From Its Beginnings To 1865"
    },
    {
        "course_id": "ENGL 35100",
        "subject": "ENGL",
        "number": 35100,
        "title": "Survey Of American Literature From 1865 To The Post-World War II Period"
    },
    {
        "course_id": "ENGL 35200",
        "subject": "ENGL",
        "number": 35200,
        "title": "Native American Literature"
    },
    {
        "course_id": "ENGL 35400",
        "subject": "ENGL",
        "number": 35400,
        "title": "Asian American Literature"
    },
    {
        "course_id": "ENGL 35800",
        "subject": "ENGL",
        "number": 35800,
        "title": "Black Drama"
    },
    {
        "course_id": "ENGL 35900",
        "subject": "ENGL",
        "number": 35900,
        "title": "Black Women Writers"
    },
    {
        "course_id": "ENGL 36000",
        "subject": "ENGL",
        "number": 36000,
        "title": "Gender and Literature"
    },
    {
        "course_id": "ENGL 36500",
        "subject": "ENGL",
        "number": 36500,
        "title": "Literature and Imperialism"
    },
    {
        "course_id": "ENGL 36600",
        "subject": "ENGL",
        "number": 36600,
        "title": "Postcolonial Literatures"
    },
    {
        "course_id": "ENGL 36700",
        "subject": "ENGL",
        "number": 36700,
        "title": "Mystery and Detective Fiction"
    },
    {
        "course_id": "ENGL 37000",
        "subject": "ENGL",
        "number": 37000,
        "title": "Nineteenth-Century American Literature"
    },
    {
        "course_id": "ENGL 37100",
        "subject": "ENGL",
        "number": 37100,
        "title": "Twentieth-Century American Literature"
    },
    {
        "course_id": "ENGL 37300",
        "subject": "ENGL",
        "number": 37300,
        "title": "Science Fiction and Fantasy"
    },
    {
        "course_id": "ENGL 37700",
        "subject": "ENGL",
        "number": 37700,
        "title": "Modern And Contemporary Poetry"
    },
    {
        "course_id": "ENGL 37900",
        "subject": "ENGL",
        "number": 37900,
        "title": "The Short Story"
    },
    {
        "course_id": "ENGL 38000",
        "subject": "ENGL",
        "number": 38000,
        "title": "Issues in Rhetoric and Public Life (Fall 2021 and after only)"
    },
    {
        "course_id": "ENGL 38100",
        "subject": "ENGL",
        "number": 38100,
        "title": "The British Novel"
    },
    {
        "course_id": "ENGL 38200",
        "subject": "ENGL",
        "number": 38200,
        "title": "The American Novel"
    },
    {
        "course_id": "ENGL 38600",
        "subject": "ENGL",
        "number": 38600,
        "title": "History Of Film To 1950"
    },
    {
        "course_id": "ENGL 38700",
        "subject": "ENGL",
        "number": 38700,
        "title": "History Of Film Since 1950"
    },
    {
        "course_id": "ENGL 38900",
        "subject": "ENGL",
        "number": 38900,
        "title": "Literature for Children"
    },
    {
        "course_id": "ENGL 39200",
        "subject": "ENGL",
        "number": 39200,
        "title": "Young Adult Literature"
    },
    {
        "course_id": "ENGL 39300",
        "subject": "ENGL",
        "number": 39300,
        "title": "Interdisciplinary Approaches To Environmental And Sustainability Studies"
    },
    {
        "course_id": "ENGL 39600",
        "subject": "ENGL",
        "number": 39600,
        "title": "Studies In Literature And Language"
    },
    {
        "course_id": "ENGL 41100",
        "subject": "ENGL",
        "number": 41100,
        "title": "Studies In Major Authors"
    },
    {
        "course_id": "ENGL 41200",
        "subject": "ENGL",
        "number": 41200,
        "title": "Studies In Genre"
    },
    {
        "course_id": "ENGL 41300",
        "subject": "ENGL",
        "number": 41300,
        "title": "Studies In Literature And History"
    },
    {
        "course_id": "ENGL 41400",
        "subject": "ENGL",
        "number": 41400,
        "title": "Studies In Literature And Culture"
    },
    {
        "course_id": "ENGL 41900",
        "subject": "ENGL",
        "number": 41900,
        "title": "Multimedia Writing"
    },
    {
        "course_id": "ENGL 42000",
        "subject": "ENGL",
        "number": 42000,
        "title": "Business Writing"
    },
    {
        "course_id": "ENGL 42100",
        "subject": "ENGL",
        "number": 42100,
        "title": "Technical Writing"
    },
    {
        "course_id": "ENGL 42201",
        "subject": "ENGL",
        "number": 42201,
        "title": "Writing For The Health And Human Sciences"
    },
    {
        "course_id": "ENGL 42400",
        "subject": "ENGL",
        "number": 42400,
        "title": "Writing For High Technology Industries"
    },
    {
        "course_id": "ENGL 43400",
        "subject": "ENGL",
        "number": 43400,
        "title": "Science And Medical Writing"
    },
    {
        "course_id": "ENGL 43900",
        "subject": "ENGL",
        "number": 43900,
        "title": "Topics In Disability Studies"
    },
    {
        "course_id": "ENGL 44100",
        "subject": "ENGL",
        "number": 44100,
        "title": "Chaucer\u2019s Canterbury Tales"
    },
    {
        "course_id": "ENGL 44200",
        "subject": "ENGL",
        "number": 44200,
        "title": "Shakespeare"
    },
    {
        "course_id": "ENGL 44400",
        "subject": "ENGL",
        "number": 44400,
        "title": "Milton"
    },
    {
        "course_id": "ENGL 46000",
        "subject": "ENGL",
        "number": 46000,
        "title": "Studies In Women\u2019s Literature"
    },
    {
        "course_id": "ENGL 46200",
        "subject": "ENGL",
        "number": 46200,
        "title": "The Bible As Literature: The Old Testament"
    },
    {
        "course_id": "ENGL 46300",
        "subject": "ENGL",
        "number": 46300,
        "title": "The Bible As Literature: The New Testament"
    },
    {
        "course_id": "ENGL 46600",
        "subject": "ENGL",
        "number": 46600,
        "title": "Cultural Encounters"
    },
    {
        "course_id": "ENGL 49000",
        "subject": "ENGL",
        "number": 49000,
        "title": "Worksite Internship Practicum"
    },
    {
        "course_id": "ENGL 52800",
        "subject": "ENGL",
        "number": 52800,
        "title": "Medieval English Literature"
    },
    {
        "course_id": "ENGL 53100",
        "subject": "ENGL",
        "number": 53100,
        "title": "The Rise Of The Novel"
    },
    {
        "course_id": "ENGL 53200",
        "subject": "ENGL",
        "number": 53200,
        "title": "The English Novel In The Nineteenth Century"
    },
    {
        "course_id": "ENGL 53400",
        "subject": "ENGL",
        "number": 53400,
        "title": "Seventeenth-Century Literature"
    },
    {
        "course_id": "ENGL 53500",
        "subject": "ENGL",
        "number": 53500,
        "title": "Restoration And Early Eighteenth-Century Literature"
    },
    {
        "course_id": "ENGL 53800",
        "subject": "ENGL",
        "number": 53800,
        "title": "English Drama From The Restoration To The Modern Period"
    },
    {
        "course_id": "ENGL 54100",
        "subject": "ENGL",
        "number": 54100,
        "title": "Studies In Chaucer\u2019s Canterbury Tales"
    },
    {
        "course_id": "ENGL 54300",
        "subject": "ENGL",
        "number": 54300,
        "title": "Shakespeare In Critical Perspective"
    },
    {
        "course_id": "ENGL 54400",
        "subject": "ENGL",
        "number": 54400,
        "title": "Milton"
    },
    {
        "course_id": "ENGL 54700",
        "subject": "ENGL",
        "number": 54700,
        "title": "British Romanticism"
    },
    {
        "course_id": "ENGL 54800",
        "subject": "ENGL",
        "number": 54800,
        "title": "Victorian Literature"
    },
    {
        "course_id": "ENGL 55200",
        "subject": "ENGL",
        "number": 55200,
        "title": "Studies In Major American Authors"
    },
    {
        "course_id": "ENGL 55300",
        "subject": "ENGL",
        "number": 55300,
        "title": "Colonial And Early American Literature"
    },
    {
        "course_id": "ENGL 55400",
        "subject": "ENGL",
        "number": 55400,
        "title": "American Literary Culture 1820-1860"
    },
    {
        "course_id": "ENGL 55700",
        "subject": "ENGL",
        "number": 55700,
        "title": "Nineteenth-Century African-American Narrative"
    },
    {
        "course_id": "ENGL 55800",
        "subject": "ENGL",
        "number": 55800,
        "title": "American Literature In The Later Nineteenth Century"
    },
    {
        "course_id": "ENGL 56000",
        "subject": "ENGL",
        "number": 56000,
        "title": "Modern American Poetry"
    },
    {
        "course_id": "ENGL 57300",
        "subject": "ENGL",
        "number": 57300,
        "title": "Tragedy"
    },
    {
        "course_id": "ENGL 57900",
        "subject": "ENGL",
        "number": 57900,
        "title": "Modern British Fiction"
    },
    {
        "course_id": "ENGL 58300",
        "subject": "ENGL",
        "number": 58300,
        "title": "U S Ethnic/Multicultural Literature"
    },
    {
        "course_id": "ENGL 59200",
        "subject": "ENGL",
        "number": 59200,
        "title": "Postcolonial Studies"
    },
    {
        "course_id": "ENGL 59300",
        "subject": "ENGL",
        "number": 59300,
        "title": "Contemporary British Fiction"
    },
    {
        "course_id": "ENGL 59400",
        "subject": "ENGL",
        "number": 59400,
        "title": "Contemporary Poetry"
    },
    {
        "course_id": "ENGL 59500",
        "subject": "ENGL",
        "number": 59500,
        "title": "Contemporary American Fiction"
    },
    {
        "course_id": "ENGL 59600",
        "subject": "ENGL",
        "number": 59600,
        "title": "Advanced Studies In Literature Or Language"
    },
    {
        "course_id": "ENGL 59700",
        "subject": "ENGL",
        "number": 59700,
        "title": "Contemporary Black Feminist Literature"
    },
    {
        "course_id": "ENGR 13100",
        "subject": "ENGR",
        "number": 13100,
        "title": "Transforming Ideas to Innovation I"
    },
    {
        "course_id": "ENGR 13300",
        "subject": "ENGR",
        "number": 13300,
        "title": "Transforming Ideas to Innovation \u2013 EPICS"
    },
    {
        "course_id": "ENGR 14100",
        "subject": "ENGR",
        "number": 14100,
        "title": "Honors Creativity & Innovation in Engineering Design I"
    },
    {
        "course_id": "ENGR 20100",
        "subject": "ENGR",
        "number": 20100,
        "title": "Engineering in Global Context (Summer 2016 and earlier only, course renumbered to ENGR 31000)"
    },
    {
        "course_id": "ENGR 27920",
        "subject": "ENGR",
        "number": 27920,
        "title": "Sophomore Participation In Vertically Integrated Projects (VIP) (Fall 2020 only, course prefix changed to VIP)"
    },
    {
        "course_id": "ENGR 31000",
        "subject": "ENGR",
        "number": 31000,
        "title": "Engineering in Global Context (Fall 2016 and after only, course renumbered from ENGR 20100)"
    },
    {
        "course_id": "ENGR 37920",
        "subject": "ENGR",
        "number": 37920,
        "title": "Junior Participation In Vertically Integrated Projects (VIP) (Fall 2020 only, course prefix changed to VIP)"
    },
    {
        "course_id": "ENGR 47920",
        "subject": "ENGR",
        "number": 47920,
        "title": "Senior Participation In Vertically Integrated Projects (VIP) (Fall 2020 only, course prefix changed to VIP)"
    },
    {
        "course_id": "ENTM 10500",
        "subject": "ENTM",
        "number": 10500,
        "title": "Insects: Friends & Foe"
    },
    {
        "course_id": "ENTM 12800",
        "subject": "ENTM",
        "number": 12800,
        "title": "Investigating Forensic Science"
    },
    {
        "course_id": "ENTM 20600",
        "subject": "ENTM",
        "number": 20600,
        "title": "General Entomology"
    },
    {
        "course_id": "ENTM 21000",
        "subject": "ENTM",
        "number": 21000,
        "title": "Intro to Insect Behavior"
    },
    {
        "course_id": "ENTM 21800",
        "subject": "ENTM",
        "number": 21800,
        "title": "Intro to Forensic Science (Fall 2014 and earlier only)"
    },
    {
        "course_id": "ENTM 22810",
        "subject": "ENTM",
        "number": 22810,
        "title": "Forensic Investigation"
    },
    {
        "course_id": "ENTM 22820",
        "subject": "ENTM",
        "number": 22820,
        "title": "Forensic Analysis"
    },
    {
        "course_id": "ENTR 20000",
        "subject": "ENTR",
        "number": 20000,
        "title": "Introduction To Entrepreneurship And Innovation"
    },
    {
        "course_id": "ENTR 31000",
        "subject": "ENTR",
        "number": 31000,
        "title": "Marketing And Management For New Ventures"
    },
    {
        "course_id": "ENTR 47000",
        "subject": "ENTR",
        "number": 47000,
        "title": "Women And Leadership"
    },
    {
        "course_id": "EPCS 10100",
        "subject": "EPCS",
        "number": 10100,
        "title": "Engineering Projects in Community Service"
    },
    {
        "course_id": "EPCS 10200",
        "subject": "EPCS",
        "number": 10200,
        "title": "Engineering Projects in Community Service"
    },
    {
        "course_id": "EPCS 11100",
        "subject": "EPCS",
        "number": 11100,
        "title": "First Year Participation in EPICS I"
    },
    {
        "course_id": "EPCS 12100",
        "subject": "EPCS",
        "number": 12100,
        "title": "First Year Participation in EPICS I"
    },
    {
        "course_id": "EPCS 20100",
        "subject": "EPCS",
        "number": 20100,
        "title": "Engineering Projects in Community Service"
    },
    {
        "course_id": "EPCS 20200",
        "subject": "EPCS",
        "number": 20200,
        "title": "Engineering Projects in Community Service"
    },
    {
        "course_id": "EPCS 30100",
        "subject": "EPCS",
        "number": 30100,
        "title": "Engineering Projects in Community Service"
    },
    {
        "course_id": "EPCS 30200",
        "subject": "EPCS",
        "number": 30200,
        "title": "Engineering Projects in Community Service"
    },
    {
        "course_id": "EPCS 40100",
        "subject": "EPCS",
        "number": 40100,
        "title": "Engineering Projects in Community Service"
    },
    {
        "course_id": "EPCS 40200",
        "subject": "EPCS",
        "number": 40200,
        "title": "Engineering Projects in Community Service"
    },
    {
        "course_id": "EPCS 41100",
        "subject": "EPCS",
        "number": 41100,
        "title": "Senior Design Participation In EPICS"
    },
    {
        "course_id": "EPCS 41200",
        "subject": "EPCS",
        "number": 41200,
        "title": "Senior Design Participation In EPICS"
    },
    {
        "course_id": "EPCS 49000",
        "subject": "EPCS",
        "number": 49000,
        "title": "EPICS Special Topics Course"
    },
    {
        "course_id": "FNR 10300",
        "subject": "FNR",
        "number": 10300,
        "title": "Intro to Environmental Conservation"
    },
    {
        "course_id": "FNR 12500",
        "subject": "FNR",
        "number": 12500,
        "title": "Environmental Science and Conservation"
    },
    {
        "course_id": "FNR 22310",
        "subject": "FNR",
        "number": 22310,
        "title": "Introduction to Environmental Policy"
    },
    {
        "course_id": "FNR 23000",
        "subject": "FNR",
        "number": 23000,
        "title": "World Forests and Society"
    },
    {
        "course_id": "FNR 24000",
        "subject": "FNR",
        "number": 24000,
        "title": "Wildlife in America"
    },
    {
        "course_id": "FNR 48800",
        "subject": "FNR",
        "number": 48800,
        "title": "Global Environmental Issues"
    },
    {
        "course_id": "FR 10100",
        "subject": "FR",
        "number": 10100,
        "title": "French Level I"
    },
    {
        "course_id": "FR 10200",
        "subject": "FR",
        "number": 10200,
        "title": "French Level II"
    },
    {
        "course_id": "FR 10500",
        "subject": "FR",
        "number": 10500,
        "title": "Accelerated Basic French (Summer 2020 and after only)"
    },
    {
        "course_id": "FR 20100",
        "subject": "FR",
        "number": 20100,
        "title": "French Level III"
    },
    {
        "course_id": "FR 20200",
        "subject": "FR",
        "number": 20200,
        "title": "French Level IV"
    },
    {
        "course_id": "FR 20500",
        "subject": "FR",
        "number": 20500,
        "title": "Accelerated Intermediate French (Summer 2020 and after only)"
    },
    {
        "course_id": "FR 24100",
        "subject": "FR",
        "number": 24100,
        "title": "Introduction To The Study Of French Literature"
    },
    {
        "course_id": "FR 30100",
        "subject": "FR",
        "number": 30100,
        "title": "French Level V"
    },
    {
        "course_id": "FR 30200",
        "subject": "FR",
        "number": 30200,
        "title": "French Level VI"
    },
    {
        "course_id": "FR 33000",
        "subject": "FR",
        "number": 33000,
        "title": "French Cinema"
    },
    {
        "course_id": "FR 34100",
        "subject": "FR",
        "number": 34100,
        "title": "French Literature I: From The Middle Ages To The Enlightenment"
    },
    {
        "course_id": "FR 34200",
        "subject": "FR",
        "number": 34200,
        "title": "French Literature II: The 19th And 20th Centuries"
    },
    {
        "course_id": "FR 38000",
        "subject": "FR",
        "number": 38000,
        "title": "Special Topics In French Culture And Civilization"
    },
    {
        "course_id": "FR 39400",
        "subject": "FR",
        "number": 39400,
        "title": "Special Topics In French Literature"
    },
    {
        "course_id": "FR 40100",
        "subject": "FR",
        "number": 40100,
        "title": "French Level VII"
    },
    {
        "course_id": "FR 40200",
        "subject": "FR",
        "number": 40200,
        "title": "French Level VIII"
    },
    {
        "course_id": "FR 44300",
        "subject": "FR",
        "number": 44300,
        "title": "Introduction To Francophone Literature"
    },
    {
        "course_id": "FR 48000",
        "subject": "FR",
        "number": 48000,
        "title": "French Civilization"
    },
    {
        "course_id": "FR 54100",
        "subject": "FR",
        "number": 54100,
        "title": "Renaissance French Literature"
    },
    {
        "course_id": "FR 54900",
        "subject": "FR",
        "number": 54900,
        "title": "French Literature And Film"
    },
    {
        "course_id": "FR 55800",
        "subject": "FR",
        "number": 55800,
        "title": "French Novel Of The Twentieth Century"
    },
    {
        "course_id": "FR 58100",
        "subject": "FR",
        "number": 58100,
        "title": "French Culture"
    },
    {
        "course_id": "FR 58200",
        "subject": "FR",
        "number": 58200,
        "title": "Francophone Cultures"
    },
    {
        "course_id": "FR 59400",
        "subject": "FR",
        "number": 59400,
        "title": "Special Topics In French Literature"
    },
    {
        "course_id": "FS 16100",
        "subject": "FS",
        "number": 16100,
        "title": "Science of Food"
    },
    {
        "course_id": "FS 47000",
        "subject": "FS",
        "number": 47000,
        "title": "Wine Appreciation"
    },
    {
        "course_id": "FVS 49100",
        "subject": "FVS",
        "number": 49100,
        "title": "Special Topics In Film/Video Studies"
    },
    {
        "course_id": "GER 10100",
        "subject": "GER",
        "number": 10100,
        "title": "German Level I"
    },
    {
        "course_id": "GER 10200",
        "subject": "GER",
        "number": 10200,
        "title": "German Level II"
    },
    {
        "course_id": "GER 10500",
        "subject": "GER",
        "number": 10500,
        "title": "Accelerated Basic German (Summer 2020 and after only)"
    },
    {
        "course_id": "GER 20100",
        "subject": "GER",
        "number": 20100,
        "title": "German Level III"
    },
    {
        "course_id": "GER 20200",
        "subject": "GER",
        "number": 20200,
        "title": "German Level IV"
    },
    {
        "course_id": "GER 20500",
        "subject": "GER",
        "number": 20500,
        "title": "Accelerated Intermediate German (Summer 2020 and after only)"
    },
    {
        "course_id": "GER 23000",
        "subject": "GER",
        "number": 23000,
        "title": "German Literature in Translation"
    },
    {
        "course_id": "GER 24100",
        "subject": "GER",
        "number": 24100,
        "title": "Introduction To The Study Of German Literature"
    },
    {
        "course_id": "GER 28000",
        "subject": "GER",
        "number": 28000,
        "title": "German Special Topics"
    },
    {
        "course_id": "GER 30100",
        "subject": "GER",
        "number": 30100,
        "title": "German Level V"
    },
    {
        "course_id": "GER 30200",
        "subject": "GER",
        "number": 30200,
        "title": "German Level VI"
    },
    {
        "course_id": "GER 33000",
        "subject": "GER",
        "number": 33000,
        "title": "German Cinema"
    },
    {
        "course_id": "GER 34100",
        "subject": "GER",
        "number": 34100,
        "title": "German Literature I: From The Middle Ages To The 18th Century"
    },
    {
        "course_id": "GER 34200",
        "subject": "GER",
        "number": 34200,
        "title": "German Literature II: From The 18th Century To The 21st Century"
    },
    {
        "course_id": "GER 40100",
        "subject": "GER",
        "number": 40100,
        "title": "German Level VII"
    },
    {
        "course_id": "GER 40200",
        "subject": "GER",
        "number": 40200,
        "title": "German Level VIII"
    },
    {
        "course_id": "GER 48000",
        "subject": "GER",
        "number": 48000,
        "title": "German Civilization"
    },
    {
        "course_id": "GER 54400",
        "subject": "GER",
        "number": 54400,
        "title": "German Romanticism"
    },
    {
        "course_id": "GER 54500",
        "subject": "GER",
        "number": 54500,
        "title": "German Prose From Naturalism To The Present"
    },
    {
        "course_id": "GER 55100",
        "subject": "GER",
        "number": 55100,
        "title": "Lyric Poetry From Romanticism To The Present"
    },
    {
        "course_id": "GER 55400",
        "subject": "GER",
        "number": 55400,
        "title": "German Drama Before Naturalism"
    },
    {
        "course_id": "GER 55500",
        "subject": "GER",
        "number": 55500,
        "title": "German Drama From Naturalism To The Present"
    },
    {
        "course_id": "GER 58100",
        "subject": "GER",
        "number": 58100,
        "title": "German Culture"
    },
    {
        "course_id": "GER 59400",
        "subject": "GER",
        "number": 59400,
        "title": "Special Topics In German Literature"
    },
    {
        "course_id": "GREK 10100",
        "subject": "GREK",
        "number": 10100,
        "title": "Ancient Greek Level I"
    },
    {
        "course_id": "GREK 10200",
        "subject": "GREK",
        "number": 10200,
        "title": "Ancient Greek Level II"
    },
    {
        "course_id": "GREK 20100",
        "subject": "GREK",
        "number": 20100,
        "title": "Ancient Greek Level III"
    },
    {
        "course_id": "GREK 20200",
        "subject": "GREK",
        "number": 20200,
        "title": "Ancient Greek Level IV"
    },
    {
        "course_id": "GS 10000",
        "subject": "GS",
        "number": 10000,
        "title": "American Language And Culture For International Students I  (Fall 2015 and after only)"
    },
    {
        "course_id": "GSLA 30100",
        "subject": "GSLA",
        "number": 30100,
        "title": "Theories of Global Studies"
    },
    {
        "course_id": "HDFS 20100",
        "subject": "HDFS",
        "number": 20100,
        "title": "Introduction to Family Processes"
    },
    {
        "course_id": "HDFS 21000",
        "subject": "HDFS",
        "number": 21000,
        "title": "Intro to Human Development"
    },
    {
        "course_id": "HDFS 28000",
        "subject": "HDFS",
        "number": 28000,
        "title": "Diversity in Individual and Family Life"
    },
    {
        "course_id": "HDFS 45000",
        "subject": "HDFS",
        "number": 45000,
        "title": "Supervised Teaching in Inclusive Programs for Young Children (Fall 2021 and after only)"
    },
    {
        "course_id": "HEBR 10100",
        "subject": "HEBR",
        "number": 10100,
        "title": "Modern Hebrew Level I"
    },
    {
        "course_id": "HEBR 10200",
        "subject": "HEBR",
        "number": 10200,
        "title": "Modern Hebrew Level II"
    },
    {
        "course_id": "HEBR 12100",
        "subject": "HEBR",
        "number": 12100,
        "title": "Biblical Hebrew Level I"
    },
    {
        "course_id": "HEBR 12200",
        "subject": "HEBR",
        "number": 12200,
        "title": "Biblical Hebrew Level II"
    },
    {
        "course_id": "HEBR 20100",
        "subject": "HEBR",
        "number": 20100,
        "title": "Modern Hebrew Level III"
    },
    {
        "course_id": "HEBR 20200",
        "subject": "HEBR",
        "number": 20200,
        "title": "Modern Hebrew Level IV"
    },
    {
        "course_id": "HEBR 22100",
        "subject": "HEBR",
        "number": 22100,
        "title": "Biblical Hebrew Level III"
    },
    {
        "course_id": "HEBR 22200",
        "subject": "HEBR",
        "number": 22200,
        "title": "Biblical Hebrew Level IV"
    },
    {
        "course_id": "HEBR 28000",
        "subject": "HEBR",
        "number": 28000,
        "title": "Modern Israel"
    },
    {
        "course_id": "HEBR 28400",
        "subject": "HEBR",
        "number": 28400,
        "title": "Ancient Near Eastern History And Culture"
    },
    {
        "course_id": "HEBR 38000",
        "subject": "HEBR",
        "number": 38000,
        "title": "Israel and the Modern World  (Spring 2014 and after only)"
    },
    {
        "course_id": "HIST 10300",
        "subject": "HIST",
        "number": 10300,
        "title": "Intro to the Medieval World"
    },
    {
        "course_id": "HIST 10400",
        "subject": "HIST",
        "number": 10400,
        "title": "Intro to the Modern World"
    },
    {
        "course_id": "HIST 10500",
        "subject": "HIST",
        "number": 10500,
        "title": "Survey of Global World"
    },
    {
        "course_id": "HIST 15100",
        "subject": "HIST",
        "number": 15100,
        "title": "American History to 1877"
    },
    {
        "course_id": "HIST 15200",
        "subject": "HIST",
        "number": 15200,
        "title": "United States since 1877"
    },
    {
        "course_id": "HIST 20100",
        "subject": "HIST",
        "number": 20100,
        "title": "Special Topics In History"
    },
    {
        "course_id": "HIST 21000",
        "subject": "HIST",
        "number": 21000,
        "title": "The Making of Modern Africa"
    },
    {
        "course_id": "HIST 21100",
        "subject": "HIST",
        "number": 21100,
        "title": "The Global Field: World Soccer and Global History"
    },
    {
        "course_id": "HIST 22800",
        "subject": "HIST",
        "number": 22800,
        "title": "English History To 1688"
    },
    {
        "course_id": "HIST 23005",
        "subject": "HIST",
        "number": 23005,
        "title": "Hitler\u2019s Europe"
    },
    {
        "course_id": "HIST 23800",
        "subject": "HIST",
        "number": 23800,
        "title": "History of Russia from Medieval times to 1861"
    },
    {
        "course_id": "HIST 23900",
        "subject": "HIST",
        "number": 23900,
        "title": "History of Russia from 1861 to the Present"
    },
    {
        "course_id": "HIST 24000",
        "subject": "HIST",
        "number": 24000,
        "title": "East Asia and Its Historic Tradition"
    },
    {
        "course_id": "HIST 24100",
        "subject": "HIST",
        "number": 24100,
        "title": "East Asia in the Modern World"
    },
    {
        "course_id": "HIST 24300",
        "subject": "HIST",
        "number": 24300,
        "title": "South Asian History and Civilizations"
    },
    {
        "course_id": "HIST 24500",
        "subject": "HIST",
        "number": 24500,
        "title": "Middle East History and Culture"
    },
    {
        "course_id": "HIST 24600",
        "subject": "HIST",
        "number": 24600,
        "title": "Modern Middle East and North Africa"
    },
    {
        "course_id": "HIST 25000",
        "subject": "HIST",
        "number": 25000,
        "title": "U. S. Relations with the Middle East & No. Africa"
    },
    {
        "course_id": "HIST 27100",
        "subject": "HIST",
        "number": 27100,
        "title": "Latin American History to 1824"
    },
    {
        "course_id": "HIST 27200",
        "subject": "HIST",
        "number": 27200,
        "title": "Latin American History from 1824"
    },
    {
        "course_id": "HIST 30000",
        "subject": "HIST",
        "number": 30000,
        "title": "Eve Of Destruction: Global Crises And World Organization In The 20th Century"
    },
    {
        "course_id": "HIST 30200",
        "subject": "HIST",
        "number": 30200,
        "title": "Historical Topics"
    },
    {
        "course_id": "HIST 30305",
        "subject": "HIST",
        "number": 30305,
        "title": "Food in Modern America"
    },
    {
        "course_id": "HIST 30400",
        "subject": "HIST",
        "number": 30400,
        "title": "America in the 1960s"
    },
    {
        "course_id": "HIST 30505",
        "subject": "HIST",
        "number": 30505,
        "title": "The U. S. in the World 1898-present"
    },
    {
        "course_id": "HIST 30605",
        "subject": "HIST",
        "number": 30605,
        "title": "Technology And War In U.S. History"
    },
    {
        "course_id": "HIST 31005",
        "subject": "HIST",
        "number": 31005,
        "title": "The Civil War and Reconstruction, 1850-1877"
    },
    {
        "course_id": "HIST 31205",
        "subject": "HIST",
        "number": 31205,
        "title": "The Arab-Israeli Conflict"
    },
    {
        "course_id": "HIST 31305",
        "subject": "HIST",
        "number": 31305,
        "title": "Medical Devices and Innovation"
    },
    {
        "course_id": "HIST 31405",
        "subject": "HIST",
        "number": 31405,
        "title": "Science, Technology, Engineering And Mathematics (STEM) And Gender"
    },
    {
        "course_id": "HIST 31505",
        "subject": "HIST",
        "number": 31505,
        "title": "American Beauty"
    },
    {
        "course_id": "HIST 31700",
        "subject": "HIST",
        "number": 31700,
        "title": "A History Of The Christian Church And The Expansion Of Christianity I"
    },
    {
        "course_id": "HIST 31800",
        "subject": "HIST",
        "number": 31800,
        "title": "A History Of The Christian Church And The Expansion Of Christianity II"
    },
    {
        "course_id": "HIST 31905",
        "subject": "HIST",
        "number": 31905,
        "title": "Christianity In The Global Age"
    },
    {
        "course_id": "HIST 32000",
        "subject": "HIST",
        "number": 32000,
        "title": "The World Of Charlemagne"
    },
    {
        "course_id": "HIST 32105",
        "subject": "HIST",
        "number": 32105,
        "title": "Spain: The First Global Empire, 1469-1713"
    },
    {
        "course_id": "HIST 32200",
        "subject": "HIST",
        "number": 32200,
        "title": "Monarchy: Its Rise And Fall"
    },
    {
        "course_id": "HIST 32300",
        "subject": "HIST",
        "number": 32300,
        "title": "German History"
    },
    {
        "course_id": "HIST 32400",
        "subject": "HIST",
        "number": 32400,
        "title": "Modern France"
    },
    {
        "course_id": "HIST 32501",
        "subject": "HIST",
        "number": 32501,
        "title": "Twentieth Century Europe Through Autobiography"
    },
    {
        "course_id": "HIST 32600",
        "subject": "HIST",
        "number": 32600,
        "title": "Popular Culture In Preindustrial Europe (1400-1800)"
    },
    {
        "course_id": "HIST 32900",
        "subject": "HIST",
        "number": 32900,
        "title": "History of Women in Modern Europe"
    },
    {
        "course_id": "HIST 33100",
        "subject": "HIST",
        "number": 33100,
        "title": "Great Figures In History"
    },
    {
        "course_id": "HIST 33205",
        "subject": "HIST",
        "number": 33205,
        "title": "The Nuclear Age"
    },
    {
        "course_id": "HIST 33300",
        "subject": "HIST",
        "number": 33300,
        "title": "Science & Society in Western Civilization I"
    },
    {
        "course_id": "HIST 33400",
        "subject": "HIST",
        "number": 33400,
        "title": "Science & Society in Western Civilization II"
    },
    {
        "course_id": "HIST 33505",
        "subject": "HIST",
        "number": 33505,
        "title": "Nationalism And Socialism In East Central Europe"
    },
    {
        "course_id": "HIST 33700",
        "subject": "HIST",
        "number": 33700,
        "title": "Europe In The Age Of The Cold War"
    },
    {
        "course_id": "HIST 33805",
        "subject": "HIST",
        "number": 33805,
        "title": "History of Human Rights"
    },
    {
        "course_id": "HIST 33900",
        "subject": "HIST",
        "number": 33900,
        "title": "Traditional China"
    },
    {
        "course_id": "HIST 34000",
        "subject": "HIST",
        "number": 34000,
        "title": "Modern China"
    },
    {
        "course_id": "HIST 34100",
        "subject": "HIST",
        "number": 34100,
        "title": "History Of Africa South Of The Sahara"
    },
    {
        "course_id": "HIST 34300",
        "subject": "HIST",
        "number": 34300,
        "title": "Traditional Japan"
    },
    {
        "course_id": "HIST 34400",
        "subject": "HIST",
        "number": 34400,
        "title": "History of Modern Japan"
    },
    {
        "course_id": "HIST 34705",
        "subject": "HIST",
        "number": 34705,
        "title": "History Of Religion In America"
    },
    {
        "course_id": "HIST 34901",
        "subject": "HIST",
        "number": 34901,
        "title": "The First World War"
    },
    {
        "course_id": "HIST 35000",
        "subject": "HIST",
        "number": 35000,
        "title": "Science & Society in the Twentieth Century World"
    },
    {
        "course_id": "HIST 35100",
        "subject": "HIST",
        "number": 35100,
        "title": "The Second World War"
    },
    {
        "course_id": "HIST 35205",
        "subject": "HIST",
        "number": 35205,
        "title": "Death, Disease and Medicine in Twentieth-Century American History"
    },
    {
        "course_id": "HIST 35305",
        "subject": "HIST",
        "number": 35305,
        "title": "Sports In America"
    },
    {
        "course_id": "HIST 35400",
        "subject": "HIST",
        "number": 35400,
        "title": "Women in America to 1870"
    },
    {
        "course_id": "HIST 35500",
        "subject": "HIST",
        "number": 35500,
        "title": "History of American Military Affairs"
    },
    {
        "course_id": "HIST 35600",
        "subject": "HIST",
        "number": 35600,
        "title": "America In Vietnam"
    },
    {
        "course_id": "HIST 35700",
        "subject": "HIST",
        "number": 35700,
        "title": "History Of Southern Africa Since 1400"
    },
    {
        "course_id": "HIST 35900",
        "subject": "HIST",
        "number": 35900,
        "title": "Gender in East Asian History"
    },
    {
        "course_id": "HIST 36101",
        "subject": "HIST",
        "number": 36101,
        "title": "Violence, War, And Militarism In Modern Africa"
    },
    {
        "course_id": "HIST 36305",
        "subject": "HIST",
        "number": 36305,
        "title": "The History of Medicine and Public Health"
    },
    {
        "course_id": "HIST 36600",
        "subject": "HIST",
        "number": 36600,
        "title": "Hispanic Heritage Of The United States"
    },
    {
        "course_id": "HIST 37005",
        "subject": "HIST",
        "number": 37005,
        "title": "Queens And Empresses In Early Modern Europe"
    },
    {
        "course_id": "HIST 37100",
        "subject": "HIST",
        "number": 37100,
        "title": "Society, Culture, and Rock and Roll"
    },
    {
        "course_id": "HIST 37200",
        "subject": "HIST",
        "number": 37200,
        "title": "History Of The American West"
    },
    {
        "course_id": "HIST 37500",
        "subject": "HIST",
        "number": 37500,
        "title": "Women in America since 1870"
    },
    {
        "course_id": "HIST 37600",
        "subject": "HIST",
        "number": 37600,
        "title": "History Of Indiana"
    },
    {
        "course_id": "HIST 37700",
        "subject": "HIST",
        "number": 37700,
        "title": "History and Culture of Native America"
    },
    {
        "course_id": "HIST 38001",
        "subject": "HIST",
        "number": 38001,
        "title": "History of U. S. Agriculture"
    },
    {
        "course_id": "HIST 38200",
        "subject": "HIST",
        "number": 38200,
        "title": "American Constitutional History"
    },
    {
        "course_id": "HIST 38300",
        "subject": "HIST",
        "number": 38300,
        "title": "Recent American Constitutional History"
    },
    {
        "course_id": "HIST 38400",
        "subject": "HIST",
        "number": 38400,
        "title": "History of Aviation"
    },
    {
        "course_id": "HIST 38505",
        "subject": "HIST",
        "number": 38505,
        "title": "Media, Politics and Popular Culture"
    },
    {
        "course_id": "HIST 38605",
        "subject": "HIST",
        "number": 38605,
        "title": "Land Of The Indians: Native Americans In Indiana"
    },
    {
        "course_id": "HIST 38700",
        "subject": "HIST",
        "number": 38700,
        "title": "History of the Space Age"
    },
    {
        "course_id": "HIST 39200",
        "subject": "HIST",
        "number": 39200,
        "title": "Caribbean History And Culture"
    },
    {
        "course_id": "HIST 39400",
        "subject": "HIST",
        "number": 39400,
        "title": "Environmental History of the United States"
    },
    {
        "course_id": "HIST 39500",
        "subject": "HIST",
        "number": 39500,
        "title": "Junior Research Seminar"
    },
    {
        "course_id": "HIST 39600",
        "subject": "HIST",
        "number": 39600,
        "title": "The Afro-American to 1865"
    },
    {
        "course_id": "HIST 39800",
        "subject": "HIST",
        "number": 39800,
        "title": "The Afro-American since 1865"
    },
    {
        "course_id": "HIST 40000",
        "subject": "HIST",
        "number": 40000,
        "title": "Great Books And The Search For Meaning"
    },
    {
        "course_id": "HIST 40300",
        "subject": "HIST",
        "number": 40300,
        "title": "Europe In The Reformation"
    },
    {
        "course_id": "HIST 40400",
        "subject": "HIST",
        "number": 40400,
        "title": "Kings And Philosophers: Europe 1618-1789"
    },
    {
        "course_id": "HIST 40500",
        "subject": "HIST",
        "number": 40500,
        "title": "The French Revolution And Napoleon"
    },
    {
        "course_id": "HIST 40600",
        "subject": "HIST",
        "number": 40600,
        "title": "Rebels And Romantics: Europe 1815-1870"
    },
    {
        "course_id": "HIST 40700",
        "subject": "HIST",
        "number": 40700,
        "title": "Road To World War I: Europe 1870-1919"
    },
    {
        "course_id": "HIST 40800",
        "subject": "HIST",
        "number": 40800,
        "title": "Dictatorship And Democracy: Europe 1919-1945"
    },
    {
        "course_id": "HIST 41005",
        "subject": "HIST",
        "number": 41005,
        "title": "History of the American Presidency"
    },
    {
        "course_id": "HIST 41300",
        "subject": "HIST",
        "number": 41300,
        "title": "Modern European Imperialism: Repression and Resistance"
    },
    {
        "course_id": "HIST 41505",
        "subject": "HIST",
        "number": 41505,
        "title": "Gender And Politics In Early Modern Europe"
    },
    {
        "course_id": "HIST 41800",
        "subject": "HIST",
        "number": 41800,
        "title": "European Society And Culture 1450-1800"
    },
    {
        "course_id": "HIST 42300",
        "subject": "HIST",
        "number": 42300,
        "title": "Advanced Topics In Modern Germany"
    },
    {
        "course_id": "HIST 43900",
        "subject": "HIST",
        "number": 43900,
        "title": "Communist China"
    },
    {
        "course_id": "HIST 44100",
        "subject": "HIST",
        "number": 44100,
        "title": "Africa In The Twentieth Century"
    },
    {
        "course_id": "HIST 46000",
        "subject": "HIST",
        "number": 46000,
        "title": "American Colonial History"
    },
    {
        "course_id": "HIST 46100",
        "subject": "HIST",
        "number": 46100,
        "title": "The Revolutionary Era, 1763 To 1800"
    },
    {
        "course_id": "HIST 46700",
        "subject": "HIST",
        "number": 46700,
        "title": "The Emergence Of Modern America"
    },
    {
        "course_id": "HIST 46800",
        "subject": "HIST",
        "number": 46800,
        "title": "Recent American History"
    },
    {
        "course_id": "HIST 46900",
        "subject": "HIST",
        "number": 46900,
        "title": "Black Civil Rights Movement"
    },
    {
        "course_id": "HIST 47005",
        "subject": "HIST",
        "number": 47005,
        "title": "Women and Health in America"
    },
    {
        "course_id": "HIST 47300",
        "subject": "HIST",
        "number": 47300,
        "title": "History Of The South"
    },
    {
        "course_id": "HIST 47500",
        "subject": "HIST",
        "number": 47500,
        "title": "Spanish Frontier In North America"
    },
    {
        "course_id": "HIST 47600",
        "subject": "HIST",
        "number": 47600,
        "title": "The Civil War In Myth And Memory"
    },
    {
        "course_id": "HIST 47700",
        "subject": "HIST",
        "number": 47700,
        "title": "Native American Women\u2019s History"
    },
    {
        "course_id": "HIST 48005",
        "subject": "HIST",
        "number": 48005,
        "title": "Madness And The Asylum In The United States"
    },
    {
        "course_id": "HIST 48500",
        "subject": "HIST",
        "number": 48500,
        "title": "Topics In American Political History"
    },
    {
        "course_id": "HIST 48800",
        "subject": "HIST",
        "number": 48800,
        "title": "History Of Sexual Regulation In The United States"
    },
    {
        "course_id": "HIST 49200",
        "subject": "HIST",
        "number": 49200,
        "title": "Seminar In Historical Topics"
    },
    {
        "course_id": "HIST 49500",
        "subject": "HIST",
        "number": 49500,
        "title": "Research Seminar In Historical Topics"
    },
    {
        "course_id": "HIST 50000",
        "subject": "HIST",
        "number": 50000,
        "title": "Studies In Medieval History"
    },
    {
        "course_id": "HIST 50500",
        "subject": "HIST",
        "number": 50500,
        "title": "Haunted Pasts: Ghosts, Ghouls And Monsters In Global Culture"
    },
    {
        "course_id": "HIST 51200",
        "subject": "HIST",
        "number": 51200,
        "title": "England Under The Stuarts"
    },
    {
        "course_id": "HIST 51400",
        "subject": "HIST",
        "number": 51400,
        "title": "A History Of Western Thought I"
    },
    {
        "course_id": "HIST 51500",
        "subject": "HIST",
        "number": 51500,
        "title": "A History Of Western Thought II"
    },
    {
        "course_id": "HIST 54800",
        "subject": "HIST",
        "number": 54800,
        "title": "Conflict In East Asia: Twentieth Century"
    },
    {
        "course_id": "HIST 57600",
        "subject": "HIST",
        "number": 57600,
        "title": "Problems In Latin American History"
    },
    {
        "course_id": "HIST 58600",
        "subject": "HIST",
        "number": 58600,
        "title": "United States Foreign Affairs To World War I"
    },
    {
        "course_id": "HIST 58700",
        "subject": "HIST",
        "number": 58700,
        "title": "United States Foreign Affairs: World War I To Present"
    },
    {
        "course_id": "HIST 59300",
        "subject": "HIST",
        "number": 59300,
        "title": "Twentieth-Century American Intellectual History"
    },
    {
        "course_id": "HIST 59400",
        "subject": "HIST",
        "number": 59400,
        "title": "Afro-American Thought And Ideology"
    },
    {
        "course_id": "HIST 59500",
        "subject": "HIST",
        "number": 59500,
        "title": "The Holocaust And Genocide"
    },
    {
        "course_id": "HONR 19900",
        "subject": "HONR",
        "number": 19900,
        "title": "Interdisciplinary Honors - Introductory Seminar"
    },
    {
        "course_id": "HONR 19901",
        "subject": "HONR",
        "number": 19901,
        "title": "The Evolution of Ideas  (Fall 2018 and earlier ONLY)"
    },
    {
        "course_id": "HONR 19903",
        "subject": "HONR",
        "number": 19903,
        "title": "Interdisciplinary Approaches to Writing"
    },
    {
        "course_id": "HONR 29900",
        "subject": "HONR",
        "number": 29900,
        "title": "Interdisciplinary Honors - Experiential Learning"
    },
    {
        "course_id": "HONR 39900",
        "subject": "HONR",
        "number": 39900,
        "title": "Interdisciplinary Honors - Special Topics Seminar"
    },
    {
        "course_id": "HORT 10100",
        "subject": "HORT",
        "number": 10100,
        "title": "Fundamentals of Horticulture"
    },
    {
        "course_id": "HORT 12100",
        "subject": "HORT",
        "number": 12100,
        "title": "Medicine in the Garden"
    },
    {
        "course_id": "HORT 30600",
        "subject": "HORT",
        "number": 30600,
        "title": "History of Horticulture"
    },
    {
        "course_id": "HSCI 20100",
        "subject": "HSCI",
        "number": 20100,
        "title": "Principles of Public Health Science"
    },
    {
        "course_id": "HSCI 20200",
        "subject": "HSCI",
        "number": 20200,
        "title": "Essentials of Environmental, Occupational, & Radiological Health Sciences"
    },
    {
        "course_id": "HTM 37200",
        "subject": "HTM",
        "number": 37200,
        "title": "Global Tourism Geography"
    },
    {
        "course_id": "IDIS 49100",
        "subject": "IDIS",
        "number": 49100,
        "title": "Special Topics In Interdisciplinary Studies"
    },
    {
        "course_id": "IDIS 59100",
        "subject": "IDIS",
        "number": 59100,
        "title": "Selected Topics In Interdisciplinary Studies"
    },
    {
        "course_id": "IE 33500",
        "subject": "IE",
        "number": 33500,
        "title": "Operations Research - Optimization"
    },
    {
        "course_id": "IE 33600",
        "subject": "IE",
        "number": 33600,
        "title": "Operations Research - Stochastic Models"
    },
    {
        "course_id": "ILS 17500",
        "subject": "ILS",
        "number": 17500,
        "title": "Information Strategies For Hospitality & Tourism Management (Spring 2021 and after only)"
    },
    {
        "course_id": "ILS 23000",
        "subject": "ILS",
        "number": 23000,
        "title": "Data Science And Society: Ethical Legal Social Issues"
    },
    {
        "course_id": "IT 22600",
        "subject": "IT",
        "number": 22600,
        "title": "Biotechnical Lab I"
    },
    {
        "course_id": "ITAL 10100",
        "subject": "ITAL",
        "number": 10100,
        "title": "Italian Level I"
    },
    {
        "course_id": "ITAL 10200",
        "subject": "ITAL",
        "number": 10200,
        "title": "Italian Level II"
    },
    {
        "course_id": "ITAL 10500",
        "subject": "ITAL",
        "number": 10500,
        "title": "Accelerated Basic Italian"
    },
    {
        "course_id": "ITAL 20100",
        "subject": "ITAL",
        "number": 20100,
        "title": "Italian Level III"
    },
    {
        "course_id": "ITAL 20200",
        "subject": "ITAL",
        "number": 20200,
        "title": "Italian Level IV"
    },
    {
        "course_id": "ITAL 20500",
        "subject": "ITAL",
        "number": 20500,
        "title": "Accelerated Intermediate Italian"
    },
    {
        "course_id": "ITAL 23100",
        "subject": "ITAL",
        "number": 23100,
        "title": "Dante\u2019s Divine Comedy"
    },
    {
        "course_id": "ITAL 28000",
        "subject": "ITAL",
        "number": 28000,
        "title": "Italian Culture & Civilization"
    },
    {
        "course_id": "ITAL 28100",
        "subject": "ITAL",
        "number": 28100,
        "title": "The Italian Renaissance"
    },
    {
        "course_id": "ITAL 30100",
        "subject": "ITAL",
        "number": 30100,
        "title": "Italian Level V"
    },
    {
        "course_id": "ITAL 30200",
        "subject": "ITAL",
        "number": 30200,
        "title": "Italian Level VI"
    },
    {
        "course_id": "ITAL 33000",
        "subject": "ITAL",
        "number": 33000,
        "title": "Italian Cinema"
    },
    {
        "course_id": "ITAL 33300",
        "subject": "ITAL",
        "number": 33300,
        "title": "The Spirit of Italian Comedy"
    },
    {
        "course_id": "ITAL 33500",
        "subject": "ITAL",
        "number": 33500,
        "title": "Italian-American Cinema"
    },
    {
        "course_id": "ITAL 34100",
        "subject": "ITAL",
        "number": 34100,
        "title": "Italian Literature I: From The Middle Ages To The Enlightenment"
    },
    {
        "course_id": "ITAL 34200",
        "subject": "ITAL",
        "number": 34200,
        "title": "Italian Literature II: From Romanticism To The Present"
    },
    {
        "course_id": "ITAL 38000",
        "subject": "ITAL",
        "number": 38000,
        "title": "Italian Culture & Civilization"
    },
    {
        "course_id": "ITAL 39300",
        "subject": "ITAL",
        "number": 39300,
        "title": "Special Topics In Italian Literature Or Cinema"
    },
    {
        "course_id": "ITAL 49300",
        "subject": "ITAL",
        "number": 49300,
        "title": "Advanced Topics In Italian Literature Or Cinema"
    },
    {
        "course_id": "JPNS 10100",
        "subject": "JPNS",
        "number": 10100,
        "title": "Japanese Level I"
    },
    {
        "course_id": "JPNS 10200",
        "subject": "JPNS",
        "number": 10200,
        "title": "Japanese Level II"
    },
    {
        "course_id": "JPNS 20100",
        "subject": "JPNS",
        "number": 20100,
        "title": "Japanese Level III"
    },
    {
        "course_id": "JPNS 20200",
        "subject": "JPNS",
        "number": 20200,
        "title": "Japanese Level IV"
    },
    {
        "course_id": "JPNS 24100",
        "subject": "JPNS",
        "number": 24100,
        "title": "Introduction To The Study Of Japanese Literature"
    },
    {
        "course_id": "JPNS 28000",
        "subject": "JPNS",
        "number": 28000,
        "title": "Introduction To Modern Japanese Civilization"
    },
    {
        "course_id": "JPNS 30100",
        "subject": "JPNS",
        "number": 30100,
        "title": "Japanese Level V"
    },
    {
        "course_id": "JPNS 30200",
        "subject": "JPNS",
        "number": 30200,
        "title": "Japanese Level VI"
    },
    {
        "course_id": "JPNS 33000",
        "subject": "JPNS",
        "number": 33000,
        "title": "Japanese Cinema"
    },
    {
        "course_id": "JPNS 34100",
        "subject": "JPNS",
        "number": 34100,
        "title": "Japanese Literature I: Modern Japanese Literature"
    },
    {
        "course_id": "JPNS 40100",
        "subject": "JPNS",
        "number": 40100,
        "title": "Japanese Level VII"
    },
    {
        "course_id": "JPNS 40200",
        "subject": "JPNS",
        "number": 40200,
        "title": "Japanese Level VIII"
    },
    {
        "course_id": "JPNS 48000",
        "subject": "JPNS",
        "number": 48000,
        "title": "Japanese Civilization"
    },
    {
        "course_id": "JPNS 48500",
        "subject": "JPNS",
        "number": 48500,
        "title": "Culinary Culture Of Japan"
    },
    {
        "course_id": "JPNS 49000",
        "subject": "JPNS",
        "number": 49000,
        "title": "Special Topics In Japanese Language"
    },
    {
        "course_id": "JPNS 54300",
        "subject": "JPNS",
        "number": 54300,
        "title": "Modern Japanese Popular Literature And Culture"
    },
    {
        "course_id": "JPNS 59400",
        "subject": "JPNS",
        "number": 59400,
        "title": "Special Topics In Japanese Literature"
    },
    {
        "course_id": "JWST 33000",
        "subject": "JWST",
        "number": 33000,
        "title": "Introduction to Jewish Studies"
    },
    {
        "course_id": "KOR 10100",
        "subject": "KOR",
        "number": 10100,
        "title": "Korean Level I"
    },
    {
        "course_id": "KOR 10200",
        "subject": "KOR",
        "number": 10200,
        "title": "Korean Level II"
    },
    {
        "course_id": "KOR 20100",
        "subject": "KOR",
        "number": 20100,
        "title": "Korean Level III"
    },
    {
        "course_id": "KOR 38000",
        "subject": "KOR",
        "number": 38000,
        "title": "Special Topics In Korean Culture"
    },
    {
        "course_id": "LA 16100",
        "subject": "LA",
        "number": 16100,
        "title": "Land and Society"
    },
    {
        "course_id": "LALS 25000",
        "subject": "LALS",
        "number": 25000,
        "title": "Introduction To Latin American And Latino Studies"
    },
    {
        "course_id": "LALS 26000",
        "subject": "LALS",
        "number": 26000,
        "title": "U S Latino Culture"
    },
    {
        "course_id": "LALS 30100",
        "subject": "LALS",
        "number": 30100,
        "title": "Latin American Literary And Cultural Studies"
    },
    {
        "course_id": "LALS 40100",
        "subject": "LALS",
        "number": 40100,
        "title": "Special Topics In Latin American/Latino Studies"
    },
    {
        "course_id": "LALS 49500",
        "subject": "LALS",
        "number": 49500,
        "title": "Humanigration: A Border Experience"
    },
    {
        "course_id": "LATN 10100",
        "subject": "LATN",
        "number": 10100,
        "title": "Latin Level I"
    },
    {
        "course_id": "LATN 10200",
        "subject": "LATN",
        "number": 10200,
        "title": "Latin Level II"
    },
    {
        "course_id": "LATN 20100",
        "subject": "LATN",
        "number": 20100,
        "title": "Latin Level III"
    },
    {
        "course_id": "LATN 20200",
        "subject": "LATN",
        "number": 20200,
        "title": "Latin Level IV"
    },
    {
        "course_id": "LATN 34300",
        "subject": "LATN",
        "number": 34300,
        "title": "Roman Oratory"
    },
    {
        "course_id": "LATN 34400",
        "subject": "LATN",
        "number": 34400,
        "title": "Roman Epic"
    },
    {
        "course_id": "LATN 34500",
        "subject": "LATN",
        "number": 34500,
        "title": "Roman Elegy"
    },
    {
        "course_id": "LATN 34600",
        "subject": "LATN",
        "number": 34600,
        "title": "Roman Rhetoric"
    },
    {
        "course_id": "LATN 34700",
        "subject": "LATN",
        "number": 34700,
        "title": "Roman Comedy"
    },
    {
        "course_id": "LATN 44200",
        "subject": "LATN",
        "number": 44200,
        "title": "Roman Lyric Poetry"
    },
    {
        "course_id": "LATN 44300",
        "subject": "LATN",
        "number": 44300,
        "title": "Roman Satire"
    },
    {
        "course_id": "LATN 44400",
        "subject": "LATN",
        "number": 44400,
        "title": "Roman Philosophers"
    },
    {
        "course_id": "LATN 44500",
        "subject": "LATN",
        "number": 44500,
        "title": "Roman Encyclopedists"
    },
    {
        "course_id": "LATN 44600",
        "subject": "LATN",
        "number": 44600,
        "title": "Roman Historians"
    },
    {
        "course_id": "LATN 49000",
        "subject": "LATN",
        "number": 49000,
        "title": "Directed Reading In Latin"
    },
    {
        "course_id": "LATN 59000",
        "subject": "LATN",
        "number": 59000,
        "title": "Directed Reading In Latin"
    },
    {
        "course_id": "LC 23000",
        "subject": "LC",
        "number": 23000,
        "title": "Crossing Borders: Introduction To Comparative Literature"
    },
    {
        "course_id": "LC 23100",
        "subject": "LC",
        "number": 23100,
        "title": "Fairytale, Folktale, Fable"
    },
    {
        "course_id": "LC 23300",
        "subject": "LC",
        "number": 23300,
        "title": "Love, Sex, And Gender In Western European Literature"
    },
    {
        "course_id": "LC 23500",
        "subject": "LC",
        "number": 23500,
        "title": "East Asian Literature In Translation"
    },
    {
        "course_id": "LC 23700",
        "subject": "LC",
        "number": 23700,
        "title": "Our Common Bond: Languages And Cultures In A Global Context"
    },
    {
        "course_id": "LC 23900",
        "subject": "LC",
        "number": 23900,
        "title": "Contemp. Foreign Women Writers in Translation"
    },
    {
        "course_id": "LC 26100",
        "subject": "LC",
        "number": 26100,
        "title": "Introduction to the Linguistic Study of Foreign Languages"
    },
    {
        "course_id": "LC 33100",
        "subject": "LC",
        "number": 33100,
        "title": "Comparative Literature In Translation"
    },
    {
        "course_id": "LC 33300",
        "subject": "LC",
        "number": 33300,
        "title": "The Middle Ages on Film"
    },
    {
        "course_id": "LC 33800",
        "subject": "LC",
        "number": 33800,
        "title": "Language Through Films"
    },
    {
        "course_id": "LC 49000",
        "subject": "LC",
        "number": 49000,
        "title": "Special Topics In Foreign Languages And Literatures"
    },
    {
        "course_id": "LC 59300",
        "subject": "LC",
        "number": 59300,
        "title": "Special Topics In Literature"
    },
    {
        "course_id": "LING 20100",
        "subject": "LING",
        "number": 20100,
        "title": "Intro to Linguistics"
    },
    {
        "course_id": "MA 13800",
        "subject": "MA",
        "number": 13800,
        "title": "Mathematics for Elementary Teachers II  (Fall 2013 and after only)"
    },
    {
        "course_id": "MA 15300",
        "subject": "MA",
        "number": 15300,
        "title": "Algebra and Trigonometry I"
    },
    {
        "course_id": "MA 15400",
        "subject": "MA",
        "number": 15400,
        "title": "Algebra and Trigonometry II  (Spring 2016 and earlier only)"
    },
    {
        "course_id": "MA 15555",
        "subject": "MA",
        "number": 15555,
        "title": "Quantitative Reasoning"
    },
    {
        "course_id": "MA 15800",
        "subject": "MA",
        "number": 15800,
        "title": "Functions and Trigonometry"
    },
    {
        "course_id": "MA 15910",
        "subject": "MA",
        "number": 15910,
        "title": "Introduction to Calculus"
    },
    {
        "course_id": "MA 16010",
        "subject": "MA",
        "number": 16010,
        "title": "Applied Calculus I"
    },
    {
        "course_id": "MA 16020",
        "subject": "MA",
        "number": 16020,
        "title": "Applied Calculus II"
    },
    {
        "course_id": "MA 16100",
        "subject": "MA",
        "number": 16100,
        "title": "Plane Analytic Geometry and Calculus I"
    },
    {
        "course_id": "MA 16200",
        "subject": "MA",
        "number": 16200,
        "title": "Plane Analytic Geometry and Calculus II"
    },
    {
        "course_id": "MA 16500",
        "subject": "MA",
        "number": 16500,
        "title": "Analytic Geometry and Calculus I"
    },
    {
        "course_id": "MA 16600",
        "subject": "MA",
        "number": 16600,
        "title": "Analytic Geometry and Calculus II"
    },
    {
        "course_id": "MA 17300",
        "subject": "MA",
        "number": 17300,
        "title": "Calculus and Analytic Geometry II"
    },
    {
        "course_id": "MA 17400",
        "subject": "MA",
        "number": 17400,
        "title": "Multivariable Calculus"
    },
    {
        "course_id": "MA 18100",
        "subject": "MA",
        "number": 18100,
        "title": "Honors Calculus I"
    },
    {
        "course_id": "MA 18200",
        "subject": "MA",
        "number": 18200,
        "title": "Honors Calculus II"
    },
    {
        "course_id": "MA 19000",
        "subject": "MA",
        "number": 19000,
        "title": "Quantitative Reasoning"
    },
    {
        "course_id": "MA 22000",
        "subject": "MA",
        "number": 22000,
        "title": "Introduction to Calculus"
    },
    {
        "course_id": "MA 22100",
        "subject": "MA",
        "number": 22100,
        "title": "Calculus for Technology I"
    },
    {
        "course_id": "MA 22200",
        "subject": "MA",
        "number": 22200,
        "title": "Calculus for Technology II"
    },
    {
        "course_id": "MA 22300",
        "subject": "MA",
        "number": 22300,
        "title": "Introductory Analysis I"
    },
    {
        "course_id": "MA 22400",
        "subject": "MA",
        "number": 22400,
        "title": "Introductory Analysis II"
    },
    {
        "course_id": "MA 23100",
        "subject": "MA",
        "number": 23100,
        "title": "Calculus for the Life Sciences I"
    },
    {
        "course_id": "MA 23200",
        "subject": "MA",
        "number": 23200,
        "title": "Calculus for the Life Sciences II"
    },
    {
        "course_id": "MA 26100",
        "subject": "MA",
        "number": 26100,
        "title": "Multivariate Calculus"
    },
    {
        "course_id": "MA 26200",
        "subject": "MA",
        "number": 26200,
        "title": "Plane Analytic Geometry and Calculus II"
    },
    {
        "course_id": "MA 26500",
        "subject": "MA",
        "number": 26500,
        "title": "Linear Algebra"
    },
    {
        "course_id": "MA 26600",
        "subject": "MA",
        "number": 26600,
        "title": "Ordinary Differential Equations"
    },
    {
        "course_id": "MA 27100",
        "subject": "MA",
        "number": 27100,
        "title": "Several Variable Calculus"
    },
    {
        "course_id": "MA 27101",
        "subject": "MA",
        "number": 27101,
        "title": "Honors Multivariate Calculus"
    },
    {
        "course_id": "MA 27900",
        "subject": "MA",
        "number": 27900,
        "title": "Modern Mathematics In Science And Society"
    },
    {
        "course_id": "MA 34100",
        "subject": "MA",
        "number": 34100,
        "title": "Foundations Of Analysis"
    },
    {
        "course_id": "MA 35100",
        "subject": "MA",
        "number": 35100,
        "title": "Elementary Linear Algebra"
    },
    {
        "course_id": "MA 35301",
        "subject": "MA",
        "number": 35301,
        "title": "Linear Algebra II"
    },
    {
        "course_id": "MA 36200",
        "subject": "MA",
        "number": 36200,
        "title": "Topics In Vector Calculus"
    },
    {
        "course_id": "MA 36600",
        "subject": "MA",
        "number": 36600,
        "title": "Ordinary Differential Equations"
    },
    {
        "course_id": "MA 37300",
        "subject": "MA",
        "number": 37300,
        "title": "Financial Mathematics"
    },
    {
        "course_id": "MA 38500",
        "subject": "MA",
        "number": 38500,
        "title": "Introduction To Logic"
    },
    {
        "course_id": "MA 41600",
        "subject": "MA",
        "number": 41600,
        "title": "Probability"
    },
    {
        "course_id": "MA 42100",
        "subject": "MA",
        "number": 42100,
        "title": "Linear Programming And Optimization Techniques"
    },
    {
        "course_id": "MA 44000",
        "subject": "MA",
        "number": 44000,
        "title": "Honors Real Analysis I"
    },
    {
        "course_id": "MA 45300",
        "subject": "MA",
        "number": 45300,
        "title": "Elements Of Algebra I"
    },
    {
        "course_id": "MA 49000",
        "subject": "MA",
        "number": 49000,
        "title": "Topics In Mathematics For Undergraduates"
    },
    {
        "course_id": "MA 51400",
        "subject": "MA",
        "number": 51400,
        "title": "Numerical Analysis"
    },
    {
        "course_id": "MA 51900",
        "subject": "MA",
        "number": 51900,
        "title": "Introduction To Probability"
    },
    {
        "course_id": "MARS 22000",
        "subject": "MARS",
        "number": 22000,
        "title": "Introduction To Medieval And Renaissance Studies"
    },
    {
        "course_id": "MARS 42000",
        "subject": "MARS",
        "number": 42000,
        "title": "Medieval And Renaissance Studies Seminar"
    },
    {
        "course_id": "ME 29000",
        "subject": "ME",
        "number": 29000,
        "title": "Global Engineering Professional Seminar"
    },
    {
        "course_id": "ME 49200",
        "subject": "ME",
        "number": 49200,
        "title": "Technology And Values"
    },
    {
        "course_id": "MGMT 17500",
        "subject": "MGMT",
        "number": 17500,
        "title": "Information Strategies for Management Students"
    },
    {
        "course_id": "MGMT 20000",
        "subject": "MGMT",
        "number": 20000,
        "title": "Introductory Accounting"
    },
    {
        "course_id": "MGMT 21200",
        "subject": "MGMT",
        "number": 21200,
        "title": "Business Accounting"
    },
    {
        "course_id": "MGMT 24200",
        "subject": "MGMT",
        "number": 24200,
        "title": "Contemporary Problems In Personal Finance For Minorities"
    },
    {
        "course_id": "MGMT 24300",
        "subject": "MGMT",
        "number": 24300,
        "title": "Contemporary Thought Of Minorities In Management"
    },
    {
        "course_id": "MGMT 32300",
        "subject": "MGMT",
        "number": 32300,
        "title": "Principles Of Marketing"
    },
    {
        "course_id": "MGMT 32400",
        "subject": "MGMT",
        "number": 32400,
        "title": "Marketing Management"
    },
    {
        "course_id": "MGMT 39000",
        "subject": "MGMT",
        "number": 39000,
        "title": "Junior Level Problems In Management (Strategic Decision Making - Honors)"
    },
    {
        "course_id": "MGMT 45500",
        "subject": "MGMT",
        "number": 45500,
        "title": "Legal Background For Business I"
    },
    {
        "course_id": "MUS 25000",
        "subject": "MUS",
        "number": 25000,
        "title": "Music Appreciation"
    },
    {
        "course_id": "MUS 26100",
        "subject": "MUS",
        "number": 26100,
        "title": "Fundamentals of Music"
    },
    {
        "course_id": "MUS 36100",
        "subject": "MUS",
        "number": 36100,
        "title": "Music Theory I"
    },
    {
        "course_id": "MUS 36200",
        "subject": "MUS",
        "number": 36200,
        "title": "Music Theory II"
    },
    {
        "course_id": "MUS 36300",
        "subject": "MUS",
        "number": 36300,
        "title": "Music Theory III"
    },
    {
        "course_id": "MUS 37500",
        "subject": "MUS",
        "number": 37500,
        "title": "Selected Topics In Music"
    },
    {
        "course_id": "MUS 37600",
        "subject": "MUS",
        "number": 37600,
        "title": "World Music"
    },
    {
        "course_id": "MUS 37800",
        "subject": "MUS",
        "number": 37800,
        "title": "Jazz History"
    },
    {
        "course_id": "MUS 38100",
        "subject": "MUS",
        "number": 38100,
        "title": "Music History I: Antiquity To Mozart"
    },
    {
        "course_id": "MUS 38200",
        "subject": "MUS",
        "number": 38200,
        "title": "Music History II: Beethoven To The Present"
    },
    {
        "course_id": "NRES 12500",
        "subject": "NRES",
        "number": 12500,
        "title": "Environmental Science and Conservation"
    },
    {
        "course_id": "NRES 23000",
        "subject": "NRES",
        "number": 23000,
        "title": "Survey of Meteorology (Summer 2023 and earlier only)"
    },
    {
        "course_id": "NRES 29000",
        "subject": "NRES",
        "number": 29000,
        "title": "Introduction to Environmental Science"
    },
    {
        "course_id": "NUR 22301",
        "subject": "NUR",
        "number": 22301,
        "title": "Foundations of Research and Evidence-based Practice  (Fall 2013 and after only)"
    },
    {
        "course_id": "NUTR 20200",
        "subject": "NUTR",
        "number": 20200,
        "title": "Principles Of Food Preparation And Nutrition"
    },
    {
        "course_id": "NUTR 30300",
        "subject": "NUTR",
        "number": 30300,
        "title": "Essentials of Nutrition"
    },
    {
        "course_id": "NUTR 39800",
        "subject": "NUTR",
        "number": 39800,
        "title": "Culture & Food of France"
    },
    {
        "course_id": "OBHR 33000",
        "subject": "OBHR",
        "number": 33000,
        "title": "Introduction To Organizational Behavior"
    },
    {
        "course_id": "PHIL 11000",
        "subject": "PHIL",
        "number": 11000,
        "title": "Introduction to Philosophy"
    },
    {
        "course_id": "PHIL 11100",
        "subject": "PHIL",
        "number": 11100,
        "title": "Ethics"
    },
    {
        "course_id": "PHIL 11400",
        "subject": "PHIL",
        "number": 11400,
        "title": "Global Moral Issues"
    },
    {
        "course_id": "PHIL 12000",
        "subject": "PHIL",
        "number": 12000,
        "title": "Critical Thinking"
    },
    {
        "course_id": "PHIL 15000",
        "subject": "PHIL",
        "number": 15000,
        "title": "Principles Of Logic"
    },
    {
        "course_id": "PHIL 20600",
        "subject": "PHIL",
        "number": 20600,
        "title": "Philosophy of Religion"
    },
    {
        "course_id": "PHIL 20700",
        "subject": "PHIL",
        "number": 20700,
        "title": "Ethics for Technology, Engineering, and Design"
    },
    {
        "course_id": "PHIL 21900",
        "subject": "PHIL",
        "number": 21900,
        "title": "Introduction to Existentialism"
    },
    {
        "course_id": "PHIL 22100",
        "subject": "PHIL",
        "number": 22100,
        "title": "Introduction to Philosophy of Science"
    },
    {
        "course_id": "PHIL 22300",
        "subject": "PHIL",
        "number": 22300,
        "title": "Fate and Free Will"
    },
    {
        "course_id": "PHIL 22500",
        "subject": "PHIL",
        "number": 22500,
        "title": "Philosophy and Gender"
    },
    {
        "course_id": "PHIL 23000",
        "subject": "PHIL",
        "number": 23000,
        "title": "Religions of the East"
    },
    {
        "course_id": "PHIL 23100",
        "subject": "PHIL",
        "number": 23100,
        "title": "Religions of the West"
    },
    {
        "course_id": "PHIL 24000",
        "subject": "PHIL",
        "number": 24000,
        "title": "Social and Political Philosophy"
    },
    {
        "course_id": "PHIL 24200",
        "subject": "PHIL",
        "number": 24200,
        "title": "Philosophy, Culture, and the African-American Experience"
    },
    {
        "course_id": "PHIL 26000",
        "subject": "PHIL",
        "number": 26000,
        "title": "Philosophy & Law"
    },
    {
        "course_id": "PHIL 27000",
        "subject": "PHIL",
        "number": 27000,
        "title": "Biomedical Ethics"
    },
    {
        "course_id": "PHIL 27500",
        "subject": "PHIL",
        "number": 27500,
        "title": "Philosophy of Art"
    },
    {
        "course_id": "PHIL 28000",
        "subject": "PHIL",
        "number": 28000,
        "title": "Ethics and Animals"
    },
    {
        "course_id": "PHIL 29000",
        "subject": "PHIL",
        "number": 29000,
        "title": "Environmental Ethics"
    },
    {
        "course_id": "PHIL 29300",
        "subject": "PHIL",
        "number": 29300,
        "title": "Selected Topics In Philosophy"
    },
    {
        "course_id": "PHIL 30100",
        "subject": "PHIL",
        "number": 30100,
        "title": "History of Ancient Philosophy"
    },
    {
        "course_id": "PHIL 30200",
        "subject": "PHIL",
        "number": 30200,
        "title": "History of Medieval Philosophy"
    },
    {
        "course_id": "PHIL 30300",
        "subject": "PHIL",
        "number": 30300,
        "title": "History of Modern Philosophy"
    },
    {
        "course_id": "PHIL 30400",
        "subject": "PHIL",
        "number": 30400,
        "title": "19th Century Philosophy"
    },
    {
        "course_id": "PHIL 30600",
        "subject": "PHIL",
        "number": 30600,
        "title": "Twentieth-Century Philosophy"
    },
    {
        "course_id": "PHIL 32200",
        "subject": "PHIL",
        "number": 32200,
        "title": "Philosophy Of Technology"
    },
    {
        "course_id": "PHIL 40200",
        "subject": "PHIL",
        "number": 40200,
        "title": "Studies In Medieval Christian Thought"
    },
    {
        "course_id": "PHIL 40600",
        "subject": "PHIL",
        "number": 40600,
        "title": "Intermediate Philosophy Of Religion"
    },
    {
        "course_id": "PHIL 41100",
        "subject": "PHIL",
        "number": 41100,
        "title": "Modern Ethical Theory"
    },
    {
        "course_id": "PHIL 42100",
        "subject": "PHIL",
        "number": 42100,
        "title": "Philosophy Of Science"
    },
    {
        "course_id": "PHIL 42400",
        "subject": "PHIL",
        "number": 42400,
        "title": "Recent Ethical Theory"
    },
    {
        "course_id": "PHIL 42500",
        "subject": "PHIL",
        "number": 42500,
        "title": "Metaphysics"
    },
    {
        "course_id": "PHIL 43200",
        "subject": "PHIL",
        "number": 43200,
        "title": "Theory Of Knowledge"
    },
    {
        "course_id": "PHIL 43500",
        "subject": "PHIL",
        "number": 43500,
        "title": "Philosophy Of Mind"
    },
    {
        "course_id": "PHIL 46500",
        "subject": "PHIL",
        "number": 46500,
        "title": "Philosophy Of Language"
    },
    {
        "course_id": "PHIL 49000",
        "subject": "PHIL",
        "number": 49000,
        "title": "Advanced Topics In Philosophy"
    },
    {
        "course_id": "PHIL 50100",
        "subject": "PHIL",
        "number": 50100,
        "title": "Studies In Greek Philosophy"
    },
    {
        "course_id": "PHIL 50200",
        "subject": "PHIL",
        "number": 50200,
        "title": "Studies In Medieval Philosophy"
    },
    {
        "course_id": "PHIL 50300",
        "subject": "PHIL",
        "number": 50300,
        "title": "Studies In Early Modern Philosophy"
    },
    {
        "course_id": "PHIL 50500",
        "subject": "PHIL",
        "number": 50500,
        "title": "Islamic And Jewish Philosophy And The Classical Tradition"
    },
    {
        "course_id": "PHIL 50600",
        "subject": "PHIL",
        "number": 50600,
        "title": "Advanced Philosophy Of Religion"
    },
    {
        "course_id": "PHIL 50700",
        "subject": "PHIL",
        "number": 50700,
        "title": "Recent American Philosophy"
    },
    {
        "course_id": "PHIL 51000",
        "subject": "PHIL",
        "number": 51000,
        "title": "Phenomenology"
    },
    {
        "course_id": "PHIL 51400",
        "subject": "PHIL",
        "number": 51400,
        "title": "Twentieth-Century Analytical Philosophy I"
    },
    {
        "course_id": "PHIL 51500",
        "subject": "PHIL",
        "number": 51500,
        "title": "Twentieth-Century Analytical Philosophy II"
    },
    {
        "course_id": "PHIL 52000",
        "subject": "PHIL",
        "number": 52000,
        "title": "Existentialism"
    },
    {
        "course_id": "PHIL 52400",
        "subject": "PHIL",
        "number": 52400,
        "title": "Contemporary Ethical Theory"
    },
    {
        "course_id": "PHIL 52500",
        "subject": "PHIL",
        "number": 52500,
        "title": "Studies In Metaphysics"
    },
    {
        "course_id": "PHIL 53000",
        "subject": "PHIL",
        "number": 53000,
        "title": "Deconstructionist And Postmodernist Philosophy"
    },
    {
        "course_id": "PHIL 53200",
        "subject": "PHIL",
        "number": 53200,
        "title": "Studies In Theory Of Knowledge"
    },
    {
        "course_id": "PHIL 53500",
        "subject": "PHIL",
        "number": 53500,
        "title": "Studies In Philosophy Of Mind"
    },
    {
        "course_id": "PHIL 54000",
        "subject": "PHIL",
        "number": 54000,
        "title": "Studies In Social And Political Philosophy"
    },
    {
        "course_id": "PHIL 54500",
        "subject": "PHIL",
        "number": 54500,
        "title": "Recent Analytic Philosophy"
    },
    {
        "course_id": "PHIL 55100",
        "subject": "PHIL",
        "number": 55100,
        "title": "Philosophy Of The Natural Sciences"
    },
    {
        "course_id": "PHIL 55200",
        "subject": "PHIL",
        "number": 55200,
        "title": "Philosophy Of The Social Sciences"
    },
    {
        "course_id": "PHIL 55500",
        "subject": "PHIL",
        "number": 55500,
        "title": "Critical Theory"
    },
    {
        "course_id": "PHIL 58000",
        "subject": "PHIL",
        "number": 58000,
        "title": "Proseminar In Philosophy"
    },
    {
        "course_id": "PHPR 49000",
        "subject": "PHPR",
        "number": 49000,
        "title": "Special Topics"
    },
    {
        "course_id": "PHYS 15200",
        "subject": "PHYS",
        "number": 15200,
        "title": "Mechanics"
    },
    {
        "course_id": "PHYS 17200",
        "subject": "PHYS",
        "number": 17200,
        "title": "Modern Mechanics"
    },
    {
        "course_id": "PHYS 21400",
        "subject": "PHYS",
        "number": 21400,
        "title": "Nature of Physics"
    },
    {
        "course_id": "PHYS 21500",
        "subject": "PHYS",
        "number": 21500,
        "title": "Physics for Elementary Education"
    },
    {
        "course_id": "PHYS 21800",
        "subject": "PHYS",
        "number": 21800,
        "title": "General Physics I"
    },
    {
        "course_id": "PHYS 21900",
        "subject": "PHYS",
        "number": 21900,
        "title": "General Physics II"
    },
    {
        "course_id": "PHYS 22000",
        "subject": "PHYS",
        "number": 22000,
        "title": "General Physics"
    },
    {
        "course_id": "PHYS 22100",
        "subject": "PHYS",
        "number": 22100,
        "title": "General Physics"
    },
    {
        "course_id": "PHYS 23000",
        "subject": "PHYS",
        "number": 23000,
        "title": "Physical Science for Elementary Education (Fall 2021 only)"
    },
    {
        "course_id": "PHYS 23300",
        "subject": "PHYS",
        "number": 23300,
        "title": "Physics For Life Sciences IPHYS 23400 - Physics For Life Sciences II"
    },
    {
        "course_id": "PHYS 24100",
        "subject": "PHYS",
        "number": 24100,
        "title": "Electricity and Optics"
    },
    {
        "course_id": "PHYS 25200",
        "subject": "PHYS",
        "number": 25200,
        "title": "Electricity And Optics Laboratory"
    },
    {
        "course_id": "PHYS 27200",
        "subject": "PHYS",
        "number": 27200,
        "title": "Electric and Magnetic Interactions"
    },
    {
        "course_id": "PHYS 31700",
        "subject": "PHYS",
        "number": 31700,
        "title": "Special Nuclear Materials"
    },
    {
        "course_id": "PHYS 49000",
        "subject": "PHYS",
        "number": 49000,
        "title": "Special Assignments"
    },
    {
        "course_id": "PHYS 52600",
        "subject": "PHYS",
        "number": 52600,
        "title": "Physics Of Quantum Computing And Quantum Information"
    },
    {
        "course_id": "PHYS 56200",
        "subject": "PHYS",
        "number": 56200,
        "title": "Introduction To High Energy Astrophysics"
    },
    {
        "course_id": "PHYS 56300",
        "subject": "PHYS",
        "number": 56300,
        "title": "Astroparticle Physics"
    },
    {
        "course_id": "PHYS 58000",
        "subject": "PHYS",
        "number": 58000,
        "title": "Computational Physics"
    },
    {
        "course_id": "POL 10100",
        "subject": "POL",
        "number": 10100,
        "title": "American Government and Politics"
    },
    {
        "course_id": "POL 12000",
        "subject": "POL",
        "number": 12000,
        "title": "Introduction to Public Policy"
    },
    {
        "course_id": "POL 13000",
        "subject": "POL",
        "number": 13000,
        "title": "Introduction to International Relations"
    },
    {
        "course_id": "POL 14100",
        "subject": "POL",
        "number": 14100,
        "title": "Governments of the World"
    },
    {
        "course_id": "POL 15000",
        "subject": "POL",
        "number": 15000,
        "title": "Introduction To Political Thought"
    },
    {
        "course_id": "POL 20000",
        "subject": "POL",
        "number": 20000,
        "title": "Introduction To The Study Of Political Science"
    },
    {
        "course_id": "POL 22200",
        "subject": "POL",
        "number": 22200,
        "title": "Women, Politics, and Policy"
    },
    {
        "course_id": "POL 22300",
        "subject": "POL",
        "number": 22300,
        "title": "Introduction to Environmental Policy"
    },
    {
        "course_id": "POL 22900",
        "subject": "POL",
        "number": 22900,
        "title": "Emerging Problems In Political Science"
    },
    {
        "course_id": "POL 23000",
        "subject": "POL",
        "number": 23000,
        "title": "Introduction to the Study of Peace  (Summer 2021 and earlier only)"
    },
    {
        "course_id": "POL 23100",
        "subject": "POL",
        "number": 23100,
        "title": "Introduction to U. S. Foreign Policy"
    },
    {
        "course_id": "POL 23500",
        "subject": "POL",
        "number": 23500,
        "title": "International Relations Among Rich and Poor Nations"
    },
    {
        "course_id": "POL 23700",
        "subject": "POL",
        "number": 23700,
        "title": "Modern Weapons and International Relations"
    },
    {
        "course_id": "POL 30000",
        "subject": "POL",
        "number": 30000,
        "title": "Introduction to Political Analysis"
    },
    {
        "course_id": "POL 31400",
        "subject": "POL",
        "number": 31400,
        "title": "The President And Policy Process"
    },
    {
        "course_id": "POL 32300",
        "subject": "POL",
        "number": 32300,
        "title": "Comparative Environmental Policy"
    },
    {
        "course_id": "POL 32600",
        "subject": "POL",
        "number": 32600,
        "title": "Black Political Participation in America"
    },
    {
        "course_id": "POL 32700",
        "subject": "POL",
        "number": 32700,
        "title": "Global Green Politics"
    },
    {
        "course_id": "POL 33500",
        "subject": "POL",
        "number": 33500,
        "title": "China and the Challenge of Globalization"
    },
    {
        "course_id": "POL 34500",
        "subject": "POL",
        "number": 34500,
        "title": "West European Democracies In The Post-Industrial Era"
    },
    {
        "course_id": "POL 34700",
        "subject": "POL",
        "number": 34700,
        "title": "Introduction To Latin American Politics"
    },
    {
        "course_id": "POL 34800",
        "subject": "POL",
        "number": 34800,
        "title": "East Asian Politics"
    },
    {
        "course_id": "POL 35100",
        "subject": "POL",
        "number": 35100,
        "title": "Foundations Of Western Political Theory: From Plato To The Reformation"
    },
    {
        "course_id": "POL 35300",
        "subject": "POL",
        "number": 35300,
        "title": "Current Political Ideologies"
    },
    {
        "course_id": "POL 36000",
        "subject": "POL",
        "number": 36000,
        "title": "Women and the Law"
    },
    {
        "course_id": "POL 37200",
        "subject": "POL",
        "number": 37200,
        "title": "Indiana Government & Politics"
    },
    {
        "course_id": "POL 37300",
        "subject": "POL",
        "number": 37300,
        "title": "Campaigns And Elections"
    },
    {
        "course_id": "POL 41000",
        "subject": "POL",
        "number": 41000,
        "title": "Political Parties And Politics"
    },
    {
        "course_id": "POL 41100",
        "subject": "POL",
        "number": 41100,
        "title": "Congress: Structure And Functioning"
    },
    {
        "course_id": "POL 41300",
        "subject": "POL",
        "number": 41300,
        "title": "The Human Basis Of Politics"
    },
    {
        "course_id": "POL 41500",
        "subject": "POL",
        "number": 41500,
        "title": "US Politics And The Media"
    },
    {
        "course_id": "POL 42300",
        "subject": "POL",
        "number": 42300,
        "title": "International Environmental Policy"
    },
    {
        "course_id": "POL 42500",
        "subject": "POL",
        "number": 42500,
        "title": "Environmental Law And Politics"
    },
    {
        "course_id": "POL 42800",
        "subject": "POL",
        "number": 42800,
        "title": "The Politics Of Regulation"
    },
    {
        "course_id": "POL 42900",
        "subject": "POL",
        "number": 42900,
        "title": "Contemporary Political Problems"
    },
    {
        "course_id": "POL 43000",
        "subject": "POL",
        "number": 43000,
        "title": "Selected Problems In International Relations"
    },
    {
        "course_id": "POL 43200",
        "subject": "POL",
        "number": 43200,
        "title": "Selected Problems In World Order"
    },
    {
        "course_id": "POL 43300",
        "subject": "POL",
        "number": 43300,
        "title": "International Organization"
    },
    {
        "course_id": "POL 43500",
        "subject": "POL",
        "number": 43500,
        "title": "International Law"
    },
    {
        "course_id": "POL 46000",
        "subject": "POL",
        "number": 46000,
        "title": "Judicial Politics"
    },
    {
        "course_id": "POL 46100",
        "subject": "POL",
        "number": 46100,
        "title": "Constitutional Law I"
    },
    {
        "course_id": "POL 46200",
        "subject": "POL",
        "number": 46200,
        "title": "Constitutional Law II"
    },
    {
        "course_id": "POL 49100",
        "subject": "POL",
        "number": 49100,
        "title": "Political Science Senior Seminar"
    },
    {
        "course_id": "POL 49300",
        "subject": "POL",
        "number": 49300,
        "title": "Interdisciplinary Undergraduate Seminar"
    },
    {
        "course_id": "POL 51700",
        "subject": "POL",
        "number": 51700,
        "title": "The Politics Of Capital And Labor In The United States"
    },
    {
        "course_id": "POL 52000",
        "subject": "POL",
        "number": 52000,
        "title": "Special Topics In Public Policy"
    },
    {
        "course_id": "POL 52300",
        "subject": "POL",
        "number": 52300,
        "title": "Environmental Politics And Public Policy"
    },
    {
        "course_id": "POL 52400",
        "subject": "POL",
        "number": 52400,
        "title": "Public Policy And The Family"
    },
    {
        "course_id": "POL 53200",
        "subject": "POL",
        "number": 53200,
        "title": "Nuclear Strategy And Proliferation"
    },
    {
        "course_id": "POL 59000",
        "subject": "POL",
        "number": 59000,
        "title": "Directed Reading In Political Science"
    },
    {
        "course_id": "PSY 10000",
        "subject": "PSY",
        "number": 10000,
        "title": "Intro to the Science and Fields of Psychology"
    },
    {
        "course_id": "PSY 12000",
        "subject": "PSY",
        "number": 12000,
        "title": "Elementary Psychology"
    },
    {
        "course_id": "PSY 20000",
        "subject": "PSY",
        "number": 20000,
        "title": "Introduction To Cognitive Psychology"
    },
    {
        "course_id": "PSY 22200",
        "subject": "PSY",
        "number": 22200,
        "title": "Introduction To Behavioral Neuroscience"
    },
    {
        "course_id": "PSY 23500",
        "subject": "PSY",
        "number": 23500,
        "title": "Child Psychology"
    },
    {
        "course_id": "PSY 23900",
        "subject": "PSY",
        "number": 23900,
        "title": "The Psychology Of Women"
    },
    {
        "course_id": "PSY 24000",
        "subject": "PSY",
        "number": 24000,
        "title": "Introduction To Social Psychology"
    },
    {
        "course_id": "PSY 24400",
        "subject": "PSY",
        "number": 24400,
        "title": "Introduction To Human Sexuality"
    },
    {
        "course_id": "PSY 27200",
        "subject": "PSY",
        "number": 27200,
        "title": "Introduction To Industrial-Organizational Psychology"
    },
    {
        "course_id": "PSY 29200",
        "subject": "PSY",
        "number": 29200,
        "title": "Topics In Psychology"
    },
    {
        "course_id": "PSY 31000",
        "subject": "PSY",
        "number": 31000,
        "title": "Sensory And Perceptual Processes"
    },
    {
        "course_id": "PSY 31100",
        "subject": "PSY",
        "number": 31100,
        "title": "Human Memory"
    },
    {
        "course_id": "PSY 31400",
        "subject": "PSY",
        "number": 31400,
        "title": "Introduction To Learning"
    },
    {
        "course_id": "PSY 32400",
        "subject": "PSY",
        "number": 32400,
        "title": "Introduction Cognitive Neuroscience"
    },
    {
        "course_id": "PSY 33500",
        "subject": "PSY",
        "number": 33500,
        "title": "Stereotyping And Prejudice"
    },
    {
        "course_id": "PSY 33600",
        "subject": "PSY",
        "number": 33600,
        "title": "Issues In Developmental Psychology"
    },
    {
        "course_id": "PSY 33700",
        "subject": "PSY",
        "number": 33700,
        "title": "Social Cognition"
    },
    {
        "course_id": "PSY 34200",
        "subject": "PSY",
        "number": 34200,
        "title": "Introduction To Psychology Of Personality"
    },
    {
        "course_id": "PSY 35000",
        "subject": "PSY",
        "number": 35000,
        "title": "Abnormal Psychology"
    },
    {
        "course_id": "PSY 35400",
        "subject": "PSY",
        "number": 35400,
        "title": "Close Relationships"
    },
    {
        "course_id": "PSY 36100",
        "subject": "PSY",
        "number": 36100,
        "title": "Human Development I: Infancy And Childhood"
    },
    {
        "course_id": "PSY 36700",
        "subject": "PSY",
        "number": 36700,
        "title": "Adult Development And Aging"
    },
    {
        "course_id": "PSY 38000",
        "subject": "PSY",
        "number": 38000,
        "title": "Behavior Change Methods"
    },
    {
        "course_id": "PSY 39200",
        "subject": "PSY",
        "number": 39200,
        "title": "Special Topics In Psychology"
    },
    {
        "course_id": "PSY 41800",
        "subject": "PSY",
        "number": 41800,
        "title": "Understanding Autism"
    },
    {
        "course_id": "PSY 42100",
        "subject": "PSY",
        "number": 42100,
        "title": "Alcohol Use And Disorders"
    },
    {
        "course_id": "PSY 42200",
        "subject": "PSY",
        "number": 42200,
        "title": "Genes and Behavior"
    },
    {
        "course_id": "PSY 42600",
        "subject": "PSY",
        "number": 42600,
        "title": "Language Development"
    },
    {
        "course_id": "PSY 42800",
        "subject": "PSY",
        "number": 42800,
        "title": "Drugs And Behavior"
    },
    {
        "course_id": "PSY 42900",
        "subject": "PSY",
        "number": 42900,
        "title": "Hormones And Behavior"
    },
    {
        "course_id": "PSY 43200",
        "subject": "PSY",
        "number": 43200,
        "title": "Social Psychology In Film"
    },
    {
        "course_id": "PSY 44300",
        "subject": "PSY",
        "number": 44300,
        "title": "Aggression And Violence"
    },
    {
        "course_id": "PSY 46400",
        "subject": "PSY",
        "number": 46400,
        "title": "Research Ethics In Psychological Sciences"
    },
    {
        "course_id": "PSY 47300",
        "subject": "PSY",
        "number": 47300,
        "title": "Selection And Performance Appraisal In Organizations"
    },
    {
        "course_id": "PSY 47500",
        "subject": "PSY",
        "number": 47500,
        "title": "Work Motivation And Job Satisfaction"
    },
    {
        "course_id": "PSY 48400",
        "subject": "PSY",
        "number": 48400,
        "title": "The Psychology Of Consciousness"
    },
    {
        "course_id": "PSY 51500",
        "subject": "PSY",
        "number": 51500,
        "title": "Neuroscience Of Consciousness"
    },
    {
        "course_id": "PSY 54000",
        "subject": "PSY",
        "number": 54000,
        "title": "History Of Psychology"
    },
    {
        "course_id": "PSY 56100",
        "subject": "PSY",
        "number": 56100,
        "title": "Personality And Social Functioning In Older Adults"
    },
    {
        "course_id": "PSY 59100",
        "subject": "PSY",
        "number": 59100,
        "title": "Topics In Psychology"
    },
    {
        "course_id": "PTGS 10100",
        "subject": "PTGS",
        "number": 10100,
        "title": "Portuguese Level I"
    },
    {
        "course_id": "PTGS 10200",
        "subject": "PTGS",
        "number": 10200,
        "title": "Portuguese Level II"
    },
    {
        "course_id": "PTGS 10500",
        "subject": "PTGS",
        "number": 10500,
        "title": "Accelerated Portuguese"
    },
    {
        "course_id": "PTGS 20100",
        "subject": "PTGS",
        "number": 20100,
        "title": "Portuguese Level III"
    },
    {
        "course_id": "PTGS 20200",
        "subject": "PTGS",
        "number": 20200,
        "title": "Portuguese Level IV"
    },
    {
        "course_id": "PTGS 30100",
        "subject": "PTGS",
        "number": 30100,
        "title": " Portuguese Level V"
    },
    {
        "course_id": "PTGS 30200",
        "subject": "PTGS",
        "number": 30200,
        "title": " Portuguese Level VI"
    },
    {
        "course_id": "PTGS 33000",
        "subject": "PTGS",
        "number": 33000,
        "title": "Brazilian, Portuguese, And African Cinema"
    },
    {
        "course_id": "PTGS 55100",
        "subject": "PTGS",
        "number": 55100,
        "title": "Brazilian Poetry"
    },
    {
        "course_id": "PTGS 55500",
        "subject": "PTGS",
        "number": 55500,
        "title": "Brazilian Drama"
    },
    {
        "course_id": "PTGS 55700",
        "subject": "PTGS",
        "number": 55700,
        "title": "Brazilian Fiction"
    },
    {
        "course_id": "PTGS 59400",
        "subject": "PTGS",
        "number": 59400,
        "title": "Special Topics In Luso-Brazilian Literature"
    },
    {
        "course_id": "PUBH 20200",
        "subject": "PUBH",
        "number": 20200,
        "title": "Health in the Time of Pandemics: An Introduction (Fall 2020 and after only)"
    },
    {
        "course_id": "REL 20000",
        "subject": "REL",
        "number": 20000,
        "title": "Intro to study of religion"
    },
    {
        "course_id": "REL 20100",
        "subject": "REL",
        "number": 20100,
        "title": "Interpretation Of The New Testament"
    },
    {
        "course_id": "REL 20200",
        "subject": "REL",
        "number": 20200,
        "title": "Interpretation Of The Old Testament"
    },
    {
        "course_id": "REL 20300",
        "subject": "REL",
        "number": 20300,
        "title": "Theology Of Paul"
    },
    {
        "course_id": "REL 20400",
        "subject": "REL",
        "number": 20400,
        "title": "Introduction To Christian Theology"
    },
    {
        "course_id": "REL 23000",
        "subject": "REL",
        "number": 23000,
        "title": "Religions of the East"
    },
    {
        "course_id": "REL 23100",
        "subject": "REL",
        "number": 23100,
        "title": "Religions of the West"
    },
    {
        "course_id": "REL 25000",
        "subject": "REL",
        "number": 25000,
        "title": "A History Of The Christian Afterlife"
    },
    {
        "course_id": "REL 31700",
        "subject": "REL",
        "number": 31700,
        "title": "Ancient Judaism And Early Christianity"
    },
    {
        "course_id": "REL 31800",
        "subject": "REL",
        "number": 31800,
        "title": "The Bible And Its Early Interpreters"
    },
    {
        "course_id": "REL 35000",
        "subject": "REL",
        "number": 35000,
        "title": "History Of Christian Theology"
    },
    {
        "course_id": "REL 35100",
        "subject": "REL",
        "number": 35100,
        "title": "Christian Mysticism"
    },
    {
        "course_id": "REL 45000",
        "subject": "REL",
        "number": 45000,
        "title": "Christian Ethics"
    },
    {
        "course_id": "REL 45100",
        "subject": "REL",
        "number": 45100,
        "title": "Christology"
    },
    {
        "course_id": "REL 45200",
        "subject": "REL",
        "number": 45200,
        "title": "Systematic Theology"
    },
    {
        "course_id": "RUSS 10100",
        "subject": "RUSS",
        "number": 10100,
        "title": "Russian Level I"
    },
    {
        "course_id": "RUSS 10200",
        "subject": "RUSS",
        "number": 10200,
        "title": "Russian Level II"
    },
    {
        "course_id": "RUSS 20100",
        "subject": "RUSS",
        "number": 20100,
        "title": "Russian Level III"
    },
    {
        "course_id": "RUSS 20200",
        "subject": "RUSS",
        "number": 20200,
        "title": "Russian Level IV"
    },
    {
        "course_id": "RUSS 28100",
        "subject": "RUSS",
        "number": 28100,
        "title": "Post Soviet Experience"
    },
    {
        "course_id": "RUSS 29800",
        "subject": "RUSS",
        "number": 29800,
        "title": "Special Topics In Russian"
    },
    {
        "course_id": "RUSS 30100",
        "subject": "RUSS",
        "number": 30100,
        "title": "Russian Level V"
    },
    {
        "course_id": "RUSS 30200",
        "subject": "RUSS",
        "number": 30200,
        "title": "Russian Level VI"
    },
    {
        "course_id": "RUSS 33000",
        "subject": "RUSS",
        "number": 33000,
        "title": "Russian and East European Cinema"
    },
    {
        "course_id": "RUSS 34100",
        "subject": "RUSS",
        "number": 34100,
        "title": "Russian Literature In The Nineteenth Century"
    },
    {
        "course_id": "RUSS 34200",
        "subject": "RUSS",
        "number": 34200,
        "title": "Revolution, Repression, Renewal: Soviet Literature And Beyond"
    },
    {
        "course_id": "RUSS 38000",
        "subject": "RUSS",
        "number": 38000,
        "title": "Russian Culture And Civilization I"
    },
    {
        "course_id": "RUSS 40100",
        "subject": "RUSS",
        "number": 40100,
        "title": "Russian Level VII"
    },
    {
        "course_id": "RUSS 40200",
        "subject": "RUSS",
        "number": 40200,
        "title": "Russian Level VIII"
    },
    {
        "course_id": "RUSS 48000",
        "subject": "RUSS",
        "number": 48000,
        "title": "Russian Civilization"
    },
    {
        "course_id": "RUSS 58100",
        "subject": "RUSS",
        "number": 58100,
        "title": "Russian Culture"
    },
    {
        "course_id": "SA 10202",
        "subject": "SA",
        "number": 10202,
        "title": "Culture & Food of France"
    },
    {
        "course_id": "SCLA 10100",
        "subject": "SCLA",
        "number": 10100,
        "title": "Transformative Texts: Critical Thinking & Communication I: Antiquity to Modernity"
    },
    {
        "course_id": "SCLA 10200",
        "subject": "SCLA",
        "number": 10200,
        "title": "Transformative Texts: Critical Thinking & Communication II: Modern World"
    },
    {
        "course_id": "SCLA 20000",
        "subject": "SCLA",
        "number": 20000,
        "title": "Cornerstones in Constitutional Law"
    },
    {
        "course_id": "SLHS 11500",
        "subject": "SLHS",
        "number": 11500,
        "title": "Introduction to Communicative Disorders"
    },
    {
        "course_id": "SLHS 21500",
        "subject": "SLHS",
        "number": 21500,
        "title": "Exploring Audiology & Hearing Science"
    },
    {
        "course_id": "SLHS 22700",
        "subject": "SLHS",
        "number": 22700,
        "title": "Intro to Linguistics"
    },
    {
        "course_id": "SLHS 30600",
        "subject": "SLHS",
        "number": 30600,
        "title": "Introduction to Phonetics  (Prior to Fall 2018)"
    },
    {
        "course_id": "SLHS 30900",
        "subject": "SLHS",
        "number": 30900,
        "title": "Language Development"
    },
    {
        "course_id": "SOC 10000",
        "subject": "SOC",
        "number": 10000,
        "title": "Intro to Sociology"
    },
    {
        "course_id": "SOC 22000",
        "subject": "SOC",
        "number": 22000,
        "title": "Social Problems"
    },
    {
        "course_id": "SOC 27500",
        "subject": "SOC",
        "number": 27500,
        "title": "Social Gerontology"
    },
    {
        "course_id": "SOC 31000",
        "subject": "SOC",
        "number": 31000,
        "title": "Race And Ethnicity"
    },
    {
        "course_id": "SOC 31200",
        "subject": "SOC",
        "number": 31200,
        "title": "American Society"
    },
    {
        "course_id": "SOC 32400",
        "subject": "SOC",
        "number": 32400,
        "title": "Criminology"
    },
    {
        "course_id": "SOC 32600",
        "subject": "SOC",
        "number": 32600,
        "title": "Social Conflict and Criminal Justice"
    },
    {
        "course_id": "SOC 32700",
        "subject": "SOC",
        "number": 32700,
        "title": "Crime, Deviance And Mass Media"
    },
    {
        "course_id": "SOC 32800",
        "subject": "SOC",
        "number": 32800,
        "title": "Criminal Justice"
    },
    {
        "course_id": "SOC 33400",
        "subject": "SOC",
        "number": 33400,
        "title": "Urban Sociology"
    },
    {
        "course_id": "SOC 33500",
        "subject": "SOC",
        "number": 33500,
        "title": "Political Sociology (Fall 2021 and after only)"
    },
    {
        "course_id": "SOC 33800",
        "subject": "SOC",
        "number": 33800,
        "title": "Global Social Movements"
    },
    {
        "course_id": "SOC 33900",
        "subject": "SOC",
        "number": 33900,
        "title": "Sociology Of Global Development"
    },
    {
        "course_id": "SOC 34000",
        "subject": "SOC",
        "number": 34000,
        "title": "General Social Psychology"
    },
    {
        "course_id": "SOC 34400",
        "subject": "SOC",
        "number": 34400,
        "title": "Environmental Sociology (Fall 2021 and after only)"
    },
    {
        "course_id": "SOC 35000",
        "subject": "SOC",
        "number": 35000,
        "title": "Sociology Of Family"
    },
    {
        "course_id": "SOC 35200",
        "subject": "SOC",
        "number": 35200,
        "title": "Drugs, Culture, and Society"
    },
    {
        "course_id": "SOC 35600",
        "subject": "SOC",
        "number": 35600,
        "title": "Hate And Violence"
    },
    {
        "course_id": "SOC 36700",
        "subject": "SOC",
        "number": 36700,
        "title": "Religion In America"
    },
    {
        "course_id": "SOC 36800",
        "subject": "SOC",
        "number": 36800,
        "title": "The Social Significance Of Religion"
    },
    {
        "course_id": "SOC 36900",
        "subject": "SOC",
        "number": 36900,
        "title": "Religion And Chinese Society"
    },
    {
        "course_id": "SOC 37400",
        "subject": "SOC",
        "number": 37400,
        "title": "Medical Sociology (Fall 2021 and after only)"
    },
    {
        "course_id": "SOC 39100",
        "subject": "SOC",
        "number": 39100,
        "title": "Selected Topics In Sociology"
    },
    {
        "course_id": "SOC 40200",
        "subject": "SOC",
        "number": 40200,
        "title": "Sociological Theory"
    },
    {
        "course_id": "SOC 41100",
        "subject": "SOC",
        "number": 41100,
        "title": "Social Inequality"
    },
    {
        "course_id": "SOC 41900",
        "subject": "SOC",
        "number": 41900,
        "title": "Sociology Of Law"
    },
    {
        "course_id": "SOC 42100",
        "subject": "SOC",
        "number": 42100,
        "title": "Juvenile Delinquency"
    },
    {
        "course_id": "SOC 42600",
        "subject": "SOC",
        "number": 42600,
        "title": "Social Deviance And Control"
    },
    {
        "course_id": "SOC 42900",
        "subject": "SOC",
        "number": 42900,
        "title": "Sociology of Protest (Fall 2021 and after only)"
    },
    {
        "course_id": "SOC 45000",
        "subject": "SOC",
        "number": 45000,
        "title": "Gender Roles In Modern Society"
    },
    {
        "course_id": "SOC 46100",
        "subject": "SOC",
        "number": 46100,
        "title": "Health And Social Behavior"
    },
    {
        "course_id": "SOC 52500",
        "subject": "SOC",
        "number": 52500,
        "title": "Social Movements"
    },
    {
        "course_id": "SOC 53100",
        "subject": "SOC",
        "number": 53100,
        "title": "Community Organization"
    },
    {
        "course_id": "SOC 56700",
        "subject": "SOC",
        "number": 56700,
        "title": "Religion In Social Context"
    },
    {
        "course_id": "SOC 56800",
        "subject": "SOC",
        "number": 56800,
        "title": "Religion And Society"
    },
    {
        "course_id": "SOC 57000",
        "subject": "SOC",
        "number": 57000,
        "title": "Sociology Of Education"
    },
    {
        "course_id": "SOC 57200",
        "subject": "SOC",
        "number": 57200,
        "title": "Comparative Healthcare Systems"
    },
    {
        "course_id": "SOC 57300",
        "subject": "SOC",
        "number": 57300,
        "title": "The Human Side Of Medicine"
    },
    {
        "course_id": "SOC 57400",
        "subject": "SOC",
        "number": 57400,
        "title": "The Social Organization Of Healthcare"
    },
    {
        "course_id": "SOC 57600",
        "subject": "SOC",
        "number": 57600,
        "title": "Health And Aging In Social Context"
    },
    {
        "course_id": "SOC 59100",
        "subject": "SOC",
        "number": 59100,
        "title": "Selected Topics In Sociology"
    },
    {
        "course_id": "SPAN 10100",
        "subject": "SPAN",
        "number": 10100,
        "title": "Spanish Level I"
    },
    {
        "course_id": "SPAN 10200",
        "subject": "SPAN",
        "number": 10200,
        "title": "Spanish Level II"
    },
    {
        "course_id": "SPAN 10500",
        "subject": "SPAN",
        "number": 10500,
        "title": "Accelerated Basic Spanish (Summer 2020 and after only)"
    },
    {
        "course_id": "SPAN 20100",
        "subject": "SPAN",
        "number": 20100,
        "title": "Spanish Level III"
    },
    {
        "course_id": "SPAN 20200",
        "subject": "SPAN",
        "number": 20200,
        "title": "Spanish Level IV"
    },
    {
        "course_id": "SPAN 20500",
        "subject": "SPAN",
        "number": 20500,
        "title": "Accelerated Intermediate Spanish (Summer 2020 and after only)"
    },
    {
        "course_id": "SPAN 23100",
        "subject": "SPAN",
        "number": 23100,
        "title": "Cervantes\u2019 Don Quixote"
    },
    {
        "course_id": "SPAN 23500",
        "subject": "SPAN",
        "number": 23500,
        "title": "Spanish American Literature in Translation"
    },
    {
        "course_id": "SPAN 24100",
        "subject": "SPAN",
        "number": 24100,
        "title": "Introduction To The Study Of Hispanic Literature"
    },
    {
        "course_id": "SPAN 28000",
        "subject": "SPAN",
        "number": 28000,
        "title": "Second-Year Spanish: Special Topics"
    },
    {
        "course_id": "SPAN 30100",
        "subject": "SPAN",
        "number": 30100,
        "title": "Spanish Level V"
    },
    {
        "course_id": "SPAN 30200",
        "subject": "SPAN",
        "number": 30200,
        "title": "Spanish Level VI"
    },
    {
        "course_id": "SPAN 30500",
        "subject": "SPAN",
        "number": 30500,
        "title": "Spanish For Heritage Speakers"
    },
    {
        "course_id": "SPAN 30801",
        "subject": "SPAN",
        "number": 30801,
        "title": "Advanced Spanish For Heritage Speakers"
    },
    {
        "course_id": "SPAN 33000",
        "subject": "SPAN",
        "number": 33000,
        "title": "Spanish And Latin American Cinema"
    },
    {
        "course_id": "SPAN 33500",
        "subject": "SPAN",
        "number": 33500,
        "title": "The Literature Of The Spanish-Speaking Peoples In The United States"
    },
    {
        "course_id": "SPAN 34100",
        "subject": "SPAN",
        "number": 34100,
        "title": "Hispanic Literature I: Poetry And Drama"
    },
    {
        "course_id": "SPAN 34200",
        "subject": "SPAN",
        "number": 34200,
        "title": "Hispanic Literature II: Prose"
    },
    {
        "course_id": "SPAN 40100",
        "subject": "SPAN",
        "number": 40100,
        "title": "Spanish Level VII"
    },
    {
        "course_id": "SPAN 40200",
        "subject": "SPAN",
        "number": 40200,
        "title": "Spanish Level VIII"
    },
    {
        "course_id": "SPAN 48000",
        "subject": "SPAN",
        "number": 48000,
        "title": "Spanish Civilization"
    },
    {
        "course_id": "SPAN 48100",
        "subject": "SPAN",
        "number": 48100,
        "title": "Spanish Culture"
    },
    {
        "course_id": "SPAN 48200",
        "subject": "SPAN",
        "number": 48200,
        "title": "Latin American Civilization"
    },
    {
        "course_id": "SPAN 48300",
        "subject": "SPAN",
        "number": 48300,
        "title": "Latin American Culture"
    },
    {
        "course_id": "SPAN 48500",
        "subject": "SPAN",
        "number": 48500,
        "title": "Food And Culture In The Hispanic World"
    },
    {
        "course_id": "SPAN 49800",
        "subject": "SPAN",
        "number": 49800,
        "title": "Advanced Topics In Spanish"
    },
    {
        "course_id": "SPAN 54000",
        "subject": "SPAN",
        "number": 54000,
        "title": "Spanish Literature Of The Middle Ages"
    },
    {
        "course_id": "SPAN 54100",
        "subject": "SPAN",
        "number": 54100,
        "title": "Spanish Literature Of The Golden Age"
    },
    {
        "course_id": "SPAN 54200",
        "subject": "SPAN",
        "number": 54200,
        "title": "Cervantes Don Quijote"
    },
    {
        "course_id": "SPAN 54300",
        "subject": "SPAN",
        "number": 54300,
        "title": "Spanish Literature Of The 18th And 19th Centuries"
    },
    {
        "course_id": "SPAN 54500",
        "subject": "SPAN",
        "number": 54500,
        "title": "Spanish Literature Of The 20th Century"
    },
    {
        "course_id": "SPAN 55000",
        "subject": "SPAN",
        "number": 55000,
        "title": "Spanish American Literature Of The Colonial Period"
    },
    {
        "course_id": "SPAN 55100",
        "subject": "SPAN",
        "number": 55100,
        "title": "Spanish American Literature Of The 19th Century"
    },
    {
        "course_id": "SPAN 55200",
        "subject": "SPAN",
        "number": 55200,
        "title": "Spanish American Literature From 1900 To 1970"
    },
    {
        "course_id": "SPAN 55300",
        "subject": "SPAN",
        "number": 55300,
        "title": "Spanish American Literature From 1970- Present"
    },
    {
        "course_id": "SPAN 55400",
        "subject": "SPAN",
        "number": 55400,
        "title": "Hispanic Caribbean Literature"
    },
    {
        "course_id": "SPAN 55500",
        "subject": "SPAN",
        "number": 55500,
        "title": "Latino/a Literature"
    },
    {
        "course_id": "SPAN 55600",
        "subject": "SPAN",
        "number": 55600,
        "title": "Mexican Literature"
    },
    {
        "course_id": "SPAN 59400",
        "subject": "SPAN",
        "number": 59400,
        "title": "Special Topics In Hispanic Literature"
    },
    {
        "course_id": "STAT 11300",
        "subject": "STAT",
        "number": 11300,
        "title": "Statistics and Society"
    },
    {
        "course_id": "STAT 30100",
        "subject": "STAT",
        "number": 30100,
        "title": "Elementary Statistical Methods"
    },
    {
        "course_id": "STAT 35000",
        "subject": "STAT",
        "number": 35000,
        "title": "Introduction To Statistics"
    },
    {
        "course_id": "STAT 41600",
        "subject": "STAT",
        "number": 41600,
        "title": "Probability"
    },
    {
        "course_id": "STAT 49000",
        "subject": "STAT",
        "number": 49000,
        "title": "Topics In Statistics For Undergraduates"
    },
    {
        "course_id": "STAT 51100",
        "subject": "STAT",
        "number": 51100,
        "title": "Statistical Methods"
    },
    {
        "course_id": "STAT 51200",
        "subject": "STAT",
        "number": 51200,
        "title": "Applied Regression Analysis"
    },
    {
        "course_id": "STAT 51600",
        "subject": "STAT",
        "number": 51600,
        "title": "Basic Probability And Applications"
    },
    {
        "course_id": "STAT 51900",
        "subject": "STAT",
        "number": 51900,
        "title": "Introduction To Probability"
    },
    {
        "course_id": "SYS 30000",
        "subject": "SYS",
        "number": 30000,
        "title": "It\u2019s a Complex World: Addressing Global Challenges"
    },
    {
        "course_id": "SYS 35000",
        "subject": "SYS",
        "number": 35000,
        "title": "Systems Theories and Approaches ( Summer 2021 and earlier only)"
    },
    {
        "course_id": "SYS 40000",
        "subject": "SYS",
        "number": 40000,
        "title": "Systems Praxis (Fall 2021 and after only)"
    },
    {
        "course_id": "TECH 12000",
        "subject": "TECH",
        "number": 12000,
        "title": "Technology and the Individual  (Fall 2013 and after only)"
    },
    {
        "course_id": "THTR 20100",
        "subject": "THTR",
        "number": 20100,
        "title": "Theater Appreciation"
    },
    {
        "course_id": "THTR 38000",
        "subject": "THTR",
        "number": 38000,
        "title": "History Of Theatre I"
    },
    {
        "course_id": "THTR 38100",
        "subject": "THTR",
        "number": 38100,
        "title": "History Of Theatre II"
    },
    {
        "course_id": "THTR 39000",
        "subject": "THTR",
        "number": 39000,
        "title": "Directed Study Of Special Theatre Problems"
    },
    {
        "course_id": "VIP 27920",
        "subject": "VIP",
        "number": 27920,
        "title": "Sophomore Participation In Vertically Integrated Projects (VIP) (Spring 2021 and after only)"
    },
    {
        "course_id": "VIP 37920",
        "subject": "VIP",
        "number": 37920,
        "title": "Junior Participation In Vertically Integrated Projects (VIP) (Spring 2021 and after only)"
    },
    {
        "course_id": "VIP 47920",
        "subject": "VIP",
        "number": 47920,
        "title": "Senior Participation In Vertically Integrated Projects (VIP) (Spring 2021 and after only)"
    },
    {
        "course_id": "WGSS 28000",
        "subject": "WGSS",
        "number": 28000,
        "title": "Intro to Women\u2019s Studies"
    },
    {
        "course_id": "WGSS 28100",
        "subject": "WGSS",
        "number": 28100,
        "title": "Variable Topics In Women\u2019s, Gender, And Sexuality Studies"
    },
    {
        "course_id": "WGSS 28200",
        "subject": "WGSS",
        "number": 28200,
        "title": "Introduction to LGBT Studies"
    },
    {
        "course_id": "WGSS 38000",
        "subject": "WGSS",
        "number": 38000,
        "title": "Gender and Multiculturalism"
    },
    {
        "course_id": "WGSS 38100",
        "subject": "WGSS",
        "number": 38100,
        "title": "Women Of Color In The United States"
    },
    {
        "course_id": "WGSS 38200",
        "subject": "WGSS",
        "number": 38200,
        "title": "Love, Sex And Sexuality"
    },
    {
        "course_id": "WGSS 38300",
        "subject": "WGSS",
        "number": 38300,
        "title": "Women, Work, And Labor"
    },
    {
        "course_id": "WGSS 39000",
        "subject": "WGSS",
        "number": 39000,
        "title": "Variable Topics In Women\u2019s, Gender And Sexuality Studies"
    },
    {
        "course_id": "WGSS 48000",
        "subject": "WGSS",
        "number": 48000,
        "title": "Feminist Theory"
    },
    {
        "course_id": "WGSS 48200",
        "subject": "WGSS",
        "number": 48200,
        "title": "Interdisciplinary Studies In Sexuality: Scholarship On Lesbian And Gay Issues"
    },
    {
        "course_id": "WGSS 48300",
        "subject": "WGSS",
        "number": 48300,
        "title": "Feminisms In Global Perspective"
    },
    {
        "course_id": "WGSS 49900",
        "subject": "WGSS",
        "number": 49900,
        "title": "Independent Study In Women\u2019s, Gender And Sexuality Studies"
    },
    {
        "course_id": "WGSS 59900",
        "subject": "WGSS",
        "number": 59900,
        "title": "Selected Topics In Women\u2019s Gender And Sexuality Studies"
    },
    {
        "course_id": "YDAE 35500",
        "subject": "YDAE",
        "number": 35500,
        "title": "Controversial Science and Media in the Public Sphere (Summer 2019 and before only. Effective Fall 2019, YDAE is now ASEC)"
    }
]`)

export default ALL_COURSES
