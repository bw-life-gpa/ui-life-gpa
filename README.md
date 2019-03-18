# ui-life-gpa
## Welcome to International-UI Repo

[live Demo](try-lifegpa.netlify.com)

Clone it to your computer using command line 
``` 
git clone urlGoesHere
```
download will include HTML, JS, LESS, and the compiled CSS file. 

Less files are structured as follows;
- Features
- Sections
- Variables
- global.less
- Index.less

before editing make sure the less watch compiler is running.
```
less-watch-compiler less css index.less
```
**Base-**
Global variables  are stored in;
- global.less

The Eric Meyer reset is in
- global.less

**Components-**
Animations are stored here
- actions.less

Buttons can be edited here
- mixins.less

**Layout-**
Footer is set to the bottom of the page. alter setting here
- footer.less

Navigation bar and dropdown buttons are edited here
- header.less

Sections and main content are found here
- main.less

**JavaScript-**
The JS file toggles the pages.
- main.js

Carousel animations can be edited here. Most use TweenMax
- Carousel.js

Navigation animation and links can be edited here
- dropdown.js


**Additional-**
Additional files included in repo.
- images(various images)
- favicon.ico
- README.md(obviously)


# MVP's For project

MVP Features Breakdown:

Login Page/Modal - After a user logs in, they'll be directed to a home page.

Navigation - Navigation is present on all pages, Users should know what page is active by clicking on a nav link and activating their tab.

Home Page - contains of list of students, laid out in a grid format.

Single Child Add Page- Clicking add child brings up a form (could be modal, could be its own page) where a user can add information about a new child. Form should include name, a place to upload an optional picture, status at the school (student, past student, or visitor), age, insurance card (Y/N) and expiration date, birth certificate Y/N, special needs, child’s representative and contact info. Clicking submit adds the child to the homepage.

Single Child View Page - Loads all information from the intake form about the child

## Build Week Schedule

**Friday Before Build Week -** 
- Students are to select a project they'd like to work on in Monday.com.
- Students will organize into teams, Github repositories created, Project Management tools (trello) set up, Slack channel organized adding in all Team members and their PM's.
- Build your own Github Organization and add Team Members there ALL MEMBERS of your team INCLUDING PMS need to have access to your orgs.
- Read through Role requirements.
- Read through the Daily Milestones and Rubric requirements for each role.
- **Web UI** - Find a template from a site like HTML5 Up and use that templates color scheme/design flow for your app. This is a task you will all do as a team. *Not all Marketing websites will look the same/follow the same theme, but at least one has to be the default for the React app.

**Monday - Milestones**
- **All Team members -** All Project's repositories set up on Github to be done first thing.
- **Web UI -** Marketing landing page scaffolded with common layout structure implemented, mobile first features starting to come into play, lorem ipsum in place of copy as placeholder is set in place.

**Tuesday - Milestones**
- **UI Developer**
    - ****Marketing site fully responsive to Mobile and Desktop screen widths.
    - ****Marketing "Login" call to action links user to the Deployed React app login screen.

**Wednesday - Milestones**
- **Web UI**
    - Marketing site replace placeholder copy with description of product.
    - All marketing site pages fully responsive and built out, may still need to polish up styling and layout.

**Thursday - Milestones - FEATURE FREEZE 🥶**
- **All Team Members -**
    - No new features past 11AM PST/GMT.
    - Polish everything.
    - Strong emphasis on bug fixes and UI/UX.
- **All Team Members -** Document your projects within the Readme files in their Github repositories. Without having to talk to you specifically, any developer should be able to install, contribute to, and run your project based on the descriptions found in your readme.

**Friday - Demo Day**
- There will be a school wide demo held on Friday for 1 hour during the morning.
    - Students will volunteer their projects to be demoed to their PMs.
    - Only 10 Projects will be demoed across the entire student body.
- Group wide demos will take place in your PM groups - PMs will use the project rubric to assign a score.

[Technical Design Document](https://docs.google.com/document/d/1kYs8G4W65JW59-OyD9Uzbde-IDhUXHZxo2zBkVksfBU/edit)
