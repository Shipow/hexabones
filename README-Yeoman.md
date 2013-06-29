# Yeoman-Angular-Haml

This seed project uses Yeoman with Angular and HAML. It's just 'yo angular' with CoffeeScript and HAML instead of JavaScript and HTML. See commit history for changes to Gruntfile.js for grunt-haml.

See also: 

* [generator-angular](https://github.com/yeoman/generator-angular)
* http://jeff.konowit.ch/posts/yeoman-rails-angular/

## Assumptions

* brew
* nodejs
* chrome
* ruby -- uses the haml gem at compile time

## Installation

First make sure brew is current:
      
    brew update

And same for nodejs
    
    brew upgrade node

Install yeoman:

    npm install -g yo grunt-cli bower
    
Install haml gem:

    gem install haml

Install dependencies:
    
    cd yeoman-angular-haml
    npm install
    bower install

## Test (Karma)

    grunt test

## Run

Launch the server:

    grunt server


Edit app/view/main.html.haml and watch the LiveReload goodness!




