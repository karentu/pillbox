
## Running Instructions
                                                
### Navigate into the pillbox folder and run the command npm start, the site should load on your browser with the link localhost:3000
### Or go to the link https://karentu.github.io/pillbox/

### Repository at: https://github.com/karentu/pillbox

## Introduction
Over the past couple of years, polypharmacy has become a huge issue in the United States. A study by the Polypharmacy Initiative of the University of Kentucky estimates that about 11% of Americans take more than 5 different medications a day. Especially for older people with more complex and chronic issues the management of these medications is extremely challenging and could potentially have fatal consequences.

## Usage
This website allows users to keep track of the current and past medications that they have taken, providing both an easily accessible resource to reference when visiting doctors or during emergency room visits, while also serving as a day-to-day reminder for when to take certain medications.

Each medication on the list has dosage information, instructions on when to take the medication, and a short blurb on the purpose of the medication. 

Users have the option of searching for a certain pill, filtering by over-the-counter versus prescription, filtering by current versus past medications, and sorting alphabetically or by the time they should take the medication. These controls are accessed by the two dropdown menus and the sort button, respectively. 

## Design Principles
Since the site is designed primarily for people who may be slightly older or have less access and familiarity with web interfaces, the website is easily learnable for first time users since all the information is immediately visible when the page first loads.

Furthermore, since most users will also have chronic issues that require them to track their medications for a long time, there are affordances in place to ensure that return users can navigate more easily. For example, each of the medication tabs can collapse when the text on the header is clicked. Thus, people who are more familiar with their situation do not need to scroll as much as they would if each panel was open. 

We also wanted to make considerations for error management and recovery. Since each action is reversible (i.e. minimizing a panel can be re-opened by clicking the same place), there are low consequences for the errors and all of them are fixable by clicking the same place that caused the error to occur. 

Additionally, the blue theming of the website aims to reassure and calm users. Furthermore, the minimalist design and information structure

## Next Steps
Ideally, a web app related to medications would be able to take user input or input from other data sources and translate that into a dynamic website that could accomodate other tools such as drug interactions and user input.