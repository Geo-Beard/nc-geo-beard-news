# Geo-Beard News Site

## Project Overview

### Summary

This project has been part of the Northcoders bootcamp, 16th May 2022 - 19th August 2022.

The purpose of this project has been to build a full stack application which involved:

    1) building a back end API in order to be able to access application data programmatically
    2) building a front end which utilises the back end API created earlier in the bootcamp

The intention here was to mimic the building of a real world backend service, such as reddit.

The front end application was constructed using React.

The database used was PSQL, and interactions have been carried out using node-postgres.

### Using Geo-Beard News

As part of the bootcamp requirements the front end application had to satisfy the following user stories:

    1) View a list of all articles
    2) View a separate page for each topic with a list of related articles
    3) View an individual article
    4) Vote on an article (upvote and downvote, with a single vote)
    5) View a list of comments associated with an article
    6) Post a new comment to an existing article - for a valid user
    7) Sort articles based on: date, comment count, number of votes
    8) Order articles in ascending or descending order
    9) Delete comments - for a valid user
    10) Have responsive error handling for invalid URL paths

As the Guest user - the default user for the Home page, you can browse articles, topics, view comments. You will not be able to comment on an article without being a valid user, you can also not delete comments as the Guest user.

To be recognised as a valid user, select one of the user options from the Home page. You will then be able to comment on articles (using that username as your input for the comment username) and also be able to delete your comments.

### Links

The following link will take you to the hosted version of this project:

https://geo-beard-news.netlify.app/

The following links will take you to the back end API, and back end repo:

https://geo-beard-news.herokuapp.com/api

https://github.com/Geo-Beard/geo-news-backend.git

The following link will take you to the creators github profile:

https://github.com/Geo-Beard

## Set-up instructions

### Install Node.js

Ensure that you have Node.js installed with these minimum requirements:

    Node.js: v18.1.0

To check which version you currently have installed:

    node --version

### Cloning the repo

In order to clone this repo use the following:

    git clone https://github.com/Geo-Beard/nc-geo-beard-news

If you would like to make changes to this repo yourself, fork the repo then clone it.

### Installing dependencies

To install all dependencies required run:

    npm install

### Running dev site locally

Once you have installed all dependencies run:

    npm start
