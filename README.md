# Trello-like Application - Front-End assignment

## Setup

Prerequisites

npm install

Install Project Dependencies : Mocha Test Framework

## Start the development server

json-server db.json

This command serves the app at `http://localhost:3000/` 

## Run Mocha Test Framework

Navigate to test folder

mocha

This command will run the tests and their outcome at the terminal

## Project Description

- Trello Like App will consume the fake API and render all the columns and their respective cards

![trello-like-app](/images/trello_like_app_main_page.png) 

### Trello-Card

- User should be able to create a new card

- User should be able to modify a card

- User should be able to delete a card

### Trello-Column

- User should be able to create a new column

- User should be able to modify a column

- User should be able to delete a column

![trello-like-app](/images/trello-card-column_add_edit_delete.png) 

- Double Click on Column, Card, & Card Title to edit them

![trello-like-app](/images/trello-edit.png) 

### Click on a card to see its description:

- The description should be in the same view and extend the card container,
- It should not open another page or popup/popin.

Before Clicking Card 5
![trello-like-app](/images/trello-card-toggle_before.png) 

After Clicking on Card 5, it will show the description
![trello-like-app](/images/trello-card-toggle_after.png) 

### Cards and columns should be unique

- Add a huge math random to create unique id for new column and card title

![trello-like-app](/images/trello_delete_column.png) 

### Search Trello-Cards

- search for any keywords presents on one or multiple cards. The view shall update without reloading the whole page

![trello-like-app](/images/trello-card-search.png) 

### Drag and Drop Trello-Cards (Failed)

![trello-like-app](/images/trello-card-drag-drop.png) 

# Assignment's Criterions

### Web Components

This page contains description and requirements for a Front-End assignment on [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

### Duration

The duration of this assessment is usually two days.

### Goal


The goal is to check the applicant is able to:

- Grasp what are web components,
- Create an application from scratch using web components,
- Make responsive view,
- Write clean code,
- Cover the code with unit tests,
- Use git,
- Write short and clean documentation.


### Requirements

1. Create a public github repository that you will send to us.
2. For implementation you should and can only use **Web Components**. No frameworks or external libraries can be used except for testing.
3. You should consume the data of the fake API provided by this repository (see section 'Materials' below).
4. Create a single page that list all columns with their respective cards.
	- Each column is defined by a title and the cards it contains,
	- Each card is defined by a mandatory title, an optional description and the column it belongs to.
5. The user should be able to:
	- display all columns with all cards,
	- create a new card,
	- modify a card,
	- delete a card,
	- add a column,
	- modify a column,
	- delete a column,
	- search for any keywords presents on one or multiple cards. The view shall update without reloading the whole page,
	- Drag and drop a card from one column to another,
	- Click on a card to see its description:
		- The description should be in the same view and extend the card container,
		- It should not open another page or popup/popin.
6. Cards and columns should be unique (i.e we should not see 2 cards or 2 columns with the same title).
7. Explain in simple words how to install and run your project within your README file.
8. Send the link of your github repository for reviewing to [tgcorbeaux@maltem.com](mailto:tgcorbeaux@maltem.com).

##### Remarks
Feel free to add everything you think meaningful to your application as long as the above requirements are done.
In addition and for helping you starting this assessment:
- This is not compulsory to make a cross-platforms app,
- You might want to use Chrome for your development as it supports natively web components and their dependencies.

### Specification

* The code needs to work after we pull it and try it (no bugs).
* The view should be responsive, user-friendly and clear.

### Materials

* Your application will consume data of a fake API powered by [JSON Server](https://github.com/typicode/json-server). You will find more instructions about how to install it and use it clicking on the previous link.
* You will also find a fake DB file called `db.json` inside the `materials` folder of this repository. This fake DB contains structured data you will have to use for building your application.