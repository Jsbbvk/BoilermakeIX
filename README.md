# Blanner
Degree and course planning made easy

## Inspiration

Planning for degrees and course requirements is a common task for Purdue students. Unfortunately, it can get overwhelming very quickly. Searching through Purdue webpages for the right info and maintaining large Excel spreadsheets, it's quite a task!

However, who said it had to be this way? Thus, the idea for a simple course planner was born.

## What it does
The Boilermaker Planner (aka the Blanner) is an intuitive and easy to use web app for planning degrees and courses.

- Beautiful user interface for an engaging user experience
- Specify which majors and degree tracks you hope to graduate in
- Enter classes already fulfilled, and view remaining classes to be fulfilled
- Search and view info and prerequisites for classes
- Add courses to a semester schedule planner
- View majors and track overlap as you add courses
- Export to and import from csv files for portability and later usage

## How we built it
We found no suitable and public Purdue APIs that would let us get course information, thus we opted to write a backend that would scrape and parse the Purdue website to get necessary information.

The user interface was created using ReactJS and Material-UI, as well as other popular frontend libraries.

## Challenges we ran into
Getting data proved to be more difficult than expected, as there were no suitable and public Purdue APIs. Web scraping and parsing were complicated at some points because certain web pages were formatted in different ways. In the end, we opted to hardcode some of the data into static local files.

## Accomplishments that we're proud of
We were able to deliver a user interface that we believe to be very intuiitive while maintaining looks.
We also managed to build a basic API to get course information and prerequisites.

## What we learned

## What's next for Blanner
Blanner currently has known issues:
- Inability to correctly display corequisites
- Some web pages are parsed incorrectly, thus leading to incorrect prerequisites and data anomalies
- Performance improvements for client side app
- Additional user features and convenience
