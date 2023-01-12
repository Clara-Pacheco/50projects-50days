<div align="center">
<img width="500px" src="https://www.juicymedia.co.uk/application/files/4615/1838/4923/html_css_js.png" alt="">&nbsp;&nbsp;&nbsp;
<br>

<p align="center">
<img src="https://img.shields.io/github/last-commit/Clara-Pacheco/50projects-50days?style=for-the-badge"/>&nbsp;&nbsp;&nbsp;
<img src="https://img.shields.io/github/repo-size/Clara-Pacheco/50projects-50days?style=for-the-badge"/>&nbsp;&nbsp;&nbsp;
<img src="https://img.shields.io/github/languages/count/Clara-Pacheco/50projects-50days?style=for-the-badge"/>
</p>
<br>
<br>

# 💻 50 Projects In 50 Days - HTML, CSS & JavaScript
<br>

This repository includes 50 mini projects in HTML, CSS & JavaScript that relate to the DOM (Document Object Model) to sharpen those skills by building 50 quick, unique & fun mini projects. Here is a list of what is create in this course:

## 1️⃣ Expanding Cards

![preview](https://github.com/Clara-Pacheco/50projects-50days/blob/main/day1_expandingCards/video/project1_preview.gif)

So in this project, I built some expanding cards.

Basically, I styled these panels to have a background image and a heading, use Flexbox to align everything and then add a little bit of JavaScript so that when we click one of these, it changes the class to active and it then expands with a CSS transition.

JavaScript is used for the event.

Listeners will be using CSS transitions to give it the smooth through the effect.

You'll see the heading doesn't come in until the card is fully expanded as well and I´m using just background images and headings, but you could make these into testimonials or FAQs or whatever it might be useful.

## 2️⃣ Progress Steps

![preview](https://github.com/Clara-Pacheco/50projects-50days/blob/main/day2_progress_Steps/video/Progress-Steps-Google-Chrome-2022-12-27-09-20-50.gif)

In this project, I´m going to build some progress steps and you might see these in different kinds of websites with forms multi basically like multi level forms, shopping carts, things like that.

Just a progress bar that starts at one and just goes along.

It´s not going to have any form or anything, but we'll have these buttons to control the steps.

So it starts at one.

He's got this blue outline.

If I click next, then it goes to two.

The line we get transition goes over to two to border lights up, click next again and the same happens to three and so on.

If we are at the beginning, previous is disabled, if we're at the end, then next is disabled. Like that we can just go back and forth.

So we'll start off with the HTML style, style it with CSS and then we'll add the functionality with JavaScript.

## 3️⃣ Rotating Navigation Animation

![preview](https://github.com/Clara-Pacheco/50projects-50days/blob/main/day3_rotating_navigation/video/Rotating-Navigation-Google-Chrome-2022-12-27-17-46-50.gif)

In this project, we basically just have a simple article.

This could be anything at all, any website, any blog, whatever.

And up here we have the little navigation icon.

If we click this icon, what's going to happen is it actually rotates the entire website, and then it brings in the NAV menu, the navigation items from the side and the icon also changes from open to close button.

We're going to position them so that when we click it, this circle rotates and shows the close button.

Obviously we need a little bit of JavaScript to be able to add and remove the specific class, which I am going to call show NAV and that will rotate and bring the menu in.

So it's it's going to be mostly CSS that we're dealing with.

We need to add specific styles for specific elements.

When the show NAV class is present, the only JavaScript we really need is to add or move the class when we click this button.

## 4️⃣ Hidden Search Widget

![preview](https://github.com/Clara-Pacheco/50projects-50days/blob/main/day4_hidden_search_widget/video/project-video-preview.gif)


This is going to be one of the shortest projects, but it's a cool little widget that you can add to your website or to your application.

It's a hidden search, and we just have this button here with a little search icon from font awesome.

And as soon as we click it, it fires off a JavaScript event that activates a specific class where we add a transition for the width of this input to get wider and the button to move over using a transform property 'Translate X'. If we click it again, it's going to shrink back up.

So we'll be using CSS transitions along with just a little bit of JavaScript to add the event and toggle the class.

## 5️⃣ Blurry Loading

![preview](https://github.com/Clara-Pacheco/50projects-50days/blob/main/day5_blurry_loading/video/Blurry-Loading-Google-Chrome-2022-12-28-11-12-00.gif)

So in this project, we're going to be building a blurry loading page or loading image.

You'll see that the image starts blurred and we also start with 0%, and then that goes up to 100% and the image comes into focus.

We're just doing a blur effect on the image.

So you could use this to load just about anything in your site, like any other elements in the DOM load in that specific amount of time.

When we go from 0 to 100, we'll have to map different number ranges to the 0 to 100 load, for instance, the image blur is going to be 30 pixels when it starts and it's going to go down to zero as we go from 0 to 100.

And there's a stackoverflow function that we're going to use to help us do that, to help us map one number range to another.

### Map a range of numbers to another range of numbers
##### https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

## 6️⃣ Scroll Animation

![preview](https://github.com/Clara-Pacheco/50projects-50days/blob/main/day6_scroll_animation/video/Scroll-Animation-Google-Chrome-2022-12-29-09-17-05.gif)

in this project, we're going to build a scroll animation, which is is pretty simple, but very useful.

You might see these in websites where you start scrolling and parts of the site - images or sections of the website - start to come in.

I just created these content blocks and you can see there's three to begin with, but when I start to scroll down, the next one comes in from the left, and when we go down some more, next one comes in from the right and it's going to alternate where it comes in from.

So we're going to use CSS transitions to have it come in smoothly, JavaScript to basically tell where the trigger point is for the next box to come in, and then, we're going to add a specific class to show it.

When we go back up, it'll remove the class when it hits the trigger point and it'll all slide back out.

This can be used in a lot of different UI's and different websites.

A lot of people use jQuery for something like this or a library like animate on scroll - animate on scroll is actually a really cool library, and if you want to do some funky stuff, then you can use that.

But if it's just something simple and you're just bringing in elements when you scroll down,this is very lightweight, no extra libraries or anything and it's really easy to do.

![Dom-method](https://github.com/Clara-Pacheco/50projects-50days/blob/main/day6_scroll_animation/img/mdn.png)

### Element.getBoundingClientRect()

The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.

#### Syntax

getBoundingClientRect()

https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
## 7️⃣ Split Landing Page

![preview](https://github.com/Clara-Pacheco/50projects-50days/blob/main/day7_split_landing_pages/video/Split-Landing-Page-Google-Chrome-2022-12-29-16-40-13.gif)

In this project, we're going to be creating a split landing page.

And we're going to create this split screen with a background image, with an overlay, with some content inside.

And if we click on one side, it's going to stretch out to about 75%.

The other side, 25%.

If I hover on the right side, it's going to do the same thing.

We'll add a little hover effect onto these.

It's going to be very CSS heavy.

We'll do a little bit of JavaScript at the end for the hover effects, but lots of CSS in this project.

## 8️⃣ Form Wave

![preview](https://github.com/Clara-Pacheco/50projects-50days/blob/main/day8_form_wave_animation/video/Form-Input-Wave-Google-Chrome-2022-12-30-11-47-56.gif)

So in this one, we're going to build a simple login form here with a wave effect on the labels.

If we click in the input, you can see the label will then wave up.

So we have that cool little animation when we click in and out of the input.

So basically the way we're going to do this is wrap a span around each one of the label letters using JavaScript, and add a transition so that the label moves up when we focus on the input.

We are also going to add a dynamic transition delay, to obtain a wave effect on each letter, making them go up at a different times.

## 9️⃣ Sound Board

![preview](https://github.com/Clara-Pacheco/50projects-50days/blob/main/day9_sound_board/video/video-preview.gif)

In this project, we're going to work a little bit with the HTML five audio tag and create a soundboard.

We have different sound effects and, the idea is, basically, when we click a button, it makes a sound effect.

And if the sound is still playing and we click another one, it's going to stop that effect and start the next one.

We can do this by using audio tags, present in HTML5.

The buttons will be created entirely with JavaScript.

So basically, if you capture an audio element with 'getElementByID' or whatever, you have some methods and properties on that object that you bring in, such as play, pause and so on.

## 🔟 Dad Jokes

![preview](https://github.com/Clara-Pacheco/50projects-50days/blob/main/day10_dad_jokes/video/Dad-Jokes-Google-Chrome-2023-01-03-09-02-53.gif)

So in this project, I'm going to be building a dad joke application where it gives us a joke.

They're just silly little jokes and we can click a button to get a new joke; we can keep getting new jokes.

And where we're getting this from is actually a third party API at https://icanhazdadjoke.com.

If you go to that URL slash API, you can see basically the documentation for this API and I'm going to use the fetch API that's built into the browser to make a request and get an object with an ID, a joke and a status.

And we're going to take that joke and put it into our application.

So it's needed a basic knowledge about how HTTP requests works, as well as how the Fetch API works.

After the interface is built with HTML and CSS, we'll add our JavaScript.

I'm going use Fetch normally and also show, in the comments, how we can use it with something called async/await (when you deal with fetch, you deal with something called promises).

## 1️⃣1️⃣ Event Keycodes

![preview](https://github.com/Clara-Pacheco/50projects-50days/blob/main/day11_event_key_codes/video/Event-keyCodes-Google-Chrome-2023-01-03-12-02-54.gif)

In this project, we're going to build a little application that shows you the key code and the code for any key on your keyboard.

If I come to the page here, it says, Press any key to get the key code. I'm going to hit L and it'll show me the actual key, which is L, the key code which is 76 and the code which is keyL.

If I hit tab, we get tab nine is the key code.

This is going to be really simple, but it can be useful if you need to get the code for something.

## 1️⃣2️⃣ Faq Collapse

![preview](https://github.com/Clara-Pacheco/50projects-50days/blob/main/day12_faq_collapse/video/FAQ-Google-Chrome-2023-01-05-10-29-40.gif)

This project is inspired by a project at dribble from James
called FAQ where you have cards with questions and you can expand 
to get the answers.

I made a programmer's joke FAQ based off it. 

It was used quite a bit of CSS because we're going to use Font Awesome,
as we're not going to just put the comment icons right in the HTML.
We're going to use CSS using the specific Unicode for these fonts or for these icons.

And then we're going to position them and then add the JavaScript so that we can close and open each of these tabs to see the answer.😜

The CSS will probably take up most of the time, the JavaScript is pretty easy.

We just need to toggle the active class basically on the parent node.

## 1️⃣3️⃣ Random Choice Picker

![preview](https://github.com/Clara-Pacheco/50projects-50days/blob/main/day13_random_choice_picker/video/Random-Choice-Picker-Google-Chrome-2023-01-05-18-14-37.gif)

This is a cool little project for picking random choices.🎲

Now we have this textarea and, as soon as I start to type, it'll format down the 'textarea' as like a tag.

And to create another choice, I just need to put a comma and start to type again.

Obviously we can do as many as we want, separate them by commas.

And then, as soon as I hit 'Enter', it's going to give us this cool little effect and it's going to stop on a random choice.

It's also going to clear the text area.

And it's just going to stop on a random one.

So if you just need some little helper to help you make a choice between however many items - objects, numbers, names, symbols etc..., you can use this cool little application.

So that's what we'll be creating.👩‍💻

## 1️⃣4️⃣ Animated Navigation

![preview](https://github.com/Clara-Pacheco/50projects-50days/blob/main/day14_animated_navigation/video/Animated-Navigation-Google-Chrome-2023-01-07-07-16-02.gif)


This is a pretty simple project, at least in terms of the JavaScript.

Basically, we just need to add an event listener to the button icon, and, once we click on it,  we're going to toggle an active class.

When the button is clicked, you can see a couple of things happening: the container - the nav - shrinks, the links start to rotate until ultimately they disappear, setting the opacity to zero.

Also, the X does a rotation and turns into two lines.

So it's a pretty cool effect and you could use this on any website or application.

We're going to be doing mostly CSS here.

As you can see, we have quite a few transitions that are going to come into play when we toggle the active class.

## 1️⃣5️⃣ Incrementing Counter

![preview](https://github.com/Clara-Pacheco/50projects-50days/blob/main/day15_incrementing_counter/video/Increment-Counter-Google-Chrome-2023-01-07-08-20-14.gif)

So in this project, we're going to create an increment counter.

And I'm sure you've seen this on websites somewhere.

Basically, we have these numbers.

I'm just using Twitter, YouTube, Facebook fans, but this could be any number.

And when we come to the site initially, you can see that it accounts from zero up and we can set the whatever the increment is, we can set that to whatever we'd like to make it faster or slower.

So we're going to first just create, style it, and make it responsive, so when it's on a small screen, it goes vertical.

 After we'll add the JavaScript to make it increment like this.

## 1️⃣6️⃣ Drink Water

![preview](https://github.com/Clara-Pacheco/50projects-50days/blob/main/day16_drink_water/video/Drink-Water-Google-Chrome-2023-01-07-10-22-04.gif)

So this is kind of a cool little project.

Basically, we're going to just track cups of water.

We have a goal of two liters, and we have this big cup here and 8 small cups.

So we're going to style this and then add some JavaScript functionality.

If I click on this first one here, you can see that we have 12.5% of our two liters, meaning 1.75 liters remaining.

And if I click on like the fourth one here, it's going to not only highlight this one or fill this cup, but all the way up to that cup.

And now you can see I have 50% and one liter remaining.

If I click on all the small cups, it means I drank all of them and
the big cup is 100% filled up.

So I think it's a cool little project to kind of manipulate the DOM and do a little bit of calculation in JavaScript.

Besides, it will help you to keep healthy by drinking the amount of
water needed in a day. 🥤🤸‍♀️

## 1️⃣7️⃣  Movie App

![preview](https://github.com/Clara-Pacheco/50projects-50days/blob/main/day17_movie_app/video/Movie-App-Google-Chrome-2023-01-09-11-02-47.gif)

Inn this project, we're going to be building a movie app using a third party API from the https://www.themoviedb.org/, which gives you a giant database of movies with the title, ratings, images and just a whole bunch of data that we can work with.

So I´m going to, first of all, create the UI, add the HTML and CSS and then, 
register an API key with the the TMDB service.

After that, I´m going to add the JavaScript to make a fetch request to get the data to show the most popular movies at the time, which is what you will see
when you load the page.

We're going to have this hover effect where it shows you an overview of each movie, as well as the title of the movie and its rating.

We'll have special colors depending on what the rating is. If it's like above eight, it'll be green, if it's between five and eight, it'll be orange and finally, if it's below five, it'll be red.

And we're also going to add the search functionality.

So if I search for the word love and I hit enter, it's going to get me all the movies with the title containing the word love, or at least the first 20 or 30.

So it's not a giant application, but it gives you a good idea on using the Fetch API, working with a third party data service or data API and also putting that stuff into the DOM, adding the data to the DOM to the page.

## 1️⃣8️⃣ Background Slider

![preview](https://github.com/Clara-Pacheco/50projects-50days/blob/main/day18_background_slider/video/Background-Slider-Google-Chrome-2023-01-09-12-02-38.gif)

In this project, I´m going to build an image slider, but we're also going to have the background image change as well.

And you can see the background image is basically in line with the foreground image.

So we're going to have some event listeners on these arrows and these buttons.

When I click on them, it's going to change foreground image, but also change the background image and position it into the right place.

You can see that these back and front images are basically connected, this foreground image in the background.

One is on the slide element and the other is on the body element.

And we're going to add some JavaScript to add these event listeners and have everything line up nicely.

This can be useful in an image gallery, for example, but the most important thing is to understand the whole logic of this, bringing in the all the slides with 'querySelectorAll', having the background change to whatever the background image is for that specific slide and then looping through all the slides, removing the active class, and then adding the active class onto the next one, which
is going to be either, increment or decrement depending on which arrow we click.


## 1️⃣9️⃣ Theme Clock

![preview](https://github.com/Clara-Pacheco/50projects-50days/blob/main/day19_theme_clock/video/Theme-Clock-Google-Chrome-2023-01-10-08-33-37.gif)

So this is one of the cooler-looking projects in this series.

I'm going to build this theme clock where we use CSS to style these needles, which are obviously the hour, the minute, and the second.

And then we're going to use JavaScript to power it and have it show the current time.

We're going to update it every second so that it ticks like an actual clock.

Finally, we're going to show a digital readout of the time, the day, and the date, and we're also going to be able to toggle it to dark mode and then back to light mode.

## 2️⃣0️⃣ Button Ripple Effect

![preview](https://github.com/Clara-Pacheco/50projects-50days/blob/main/day20_button_ripple_effect/video/Button-Ripple-Effect-Google-Chrome-2023-01-10-09-25-01.gif)

This is a button with a ripple effect.

The idea is we want to have a button and then when we click on it, we're going to basically have JavaScript create a specific <span> that will have a class of 'circle', and we're going to style that to be like a round white circle with an animation.

This animation will scale up and will set its position - the top and left position, we want to set to where we click.

So we don't want to just always ripple in the center.

We want it to ripple wherever we click.

We need to do that with a combination of CSS and JavaScript.

It's a very simple thing to just have a ripple, but if you're pretty new to JavaScript, this should help you out, finding out where you're clicking, finding out the position of a specific element, adding an element, manipulating the style.

So there's quite a bit in just this tiny little project if you're just learning JavaScript or you don't know much about the DOM in general.

## Drag N Drop

![preview](https://github.com/Clara-Pacheco/50projects-50days/blob/main/day21_drag_and_drop/video/Drag-N-Drop-Google-Chrome-2023-01-11-08-34-42.gif)

In this project, I want to get into a little bit of drag-and-drop functionality.

We're going to just create and style these boxes.

One div inside one of these boxes will contain a background image coming from Unsplash, just a random image.

And you'll see that, if I grab it, a couple of things happen:

 - the image I'm holding has a class of 'hold', which gives it a gray border;
It's very faint, but it has a border.

- And then, each one of these boxes I hover over gets a class of hovered, that contains a dark background and a white dash border.

And then if I drop, it'll actually go in whichever of these hovering over.

So it's a very simple project, but it gives you a basic understanding of how drag and drop works.

And you can then go on to build some really cool interfaces or even games and stuff like that.👩‍💻🎮

## Drawing App

![preview](https://github.com/Clara-Pacheco/50projects-50days/blob/main/day22_drawing_app/video/Drawing-App-Google-Chrome-2023-01-11-10-57-19.gif)

So this is actually one of my favorite projects in this series.

It's a little drawing app that we're going to create using HTML5 canvas.

So we're going to use the canvas element.

That's what this big square is.

And there's a JavaScript API that we can use to draw shapes, we can draw circles, rectangles, images, and lines, and we're going to implement that with most events so that we can actually click and draw.

And then we're going to add these controls down here where we can change the color and the width of the pencil, as well as clear the canvas area to make a new
drawing.

So if I go down to five, you see it's a little smaller; the highest we can go is 50, so that's the thickest pencil's width; the lowest is 5, meaning the thinnest
pencil's width.

So I think it's a cool little canvas app and I think you'll enjoy it.

We will start on the interface, then build the functions to create shapes, circles, and lines with canvas, then we'll move into the mouse events and drawing, and then, these toolbox controls down here.

It's no Adobe program or anything like that, but it's a cool little app that didn't take much code at all.

## Kinetic Loader

![preview](https://github.com/Clara-Pacheco/50projects-50days/blob/main/day23_kinetic_css_loader/video/Kinetic-Loader-Google-Chrome-2023-01-12-08-45-49.gif)

This is a very small project, but it can give a special touch inside a bigger one.

We're going to create this 'Kinect loader', where we have these two triangles created with pure CSS.

Then, we'll add this animation so that they rotate and one follows another.

So we're going to look at creating keyframes and also how to create these triangles using borders.

## Content Placeholder

![preview]()

## Sticky Navbar

![preview]()

## Double Vertical Slider

![preview]()

## Toast Notification

![preview]()

## Github Profiles

![preview]()

## Double Click Heart

![preview]()

## Auto Text Effect

![preview]()

## Password Generator

![preview]()

## Good Cheap Fast

![preview]()

## Notes App

![preview]()

## Animated Countdown

![preview]()

## Image Carousel

![preview]()

## Hoverboard

![preview]()

## Pokedex

![preview]()

## Mobile Tab Navigation

![preview]()

## Password Strength Background

![preview]()

## 3d Background Boxes

![preview]()

## Verify Account UI

![preview]()

## Live User Filter

![preview]()

## Feedback UI Design

![preview]()

## Custom Range Slider

![preview]()

## Netflix Mobile Navigation

![preview]()

## Quiz App

![preview]()

## Testimonial Box Switcher

![preview]()

## Random Image Feed

![preview]()

## Todo List

![preview]()

## Insect Catch Game

![preview]()


Many people jump into a frontend framework too early. Learning vanilla JavaScript and understanding how the document object model works are essential before moving to a framework. Practicing by coding those projects teaches you this by creating real-world projects of all types.

You will also learn more about HTML5 and CSS including semantic tags in your markup, basic CSS properties such as colors, alignment, flexbox, and shadows as well as creating responsive layouts with CSS media queries, CSS custom properties, animations/transitions, and more.

50 projects may seem like a lot, but they are small enough and it is possible to complete a project in just a few hours. Of course, this depends on your skill level.

## 🧪 Skills developed by project based learning
<br>
 Modern styling with flexbox,
 CSS animations,
 custom properties,
 DOM manipulation,
 events,
 array methods,
 HTTP requests
 & more

### Information 
<br> 

📅 **Started: 23.12.2022**

📅 **Finished**: 

🕛 **Status:** in progress✔️

🌎 **Result Preview: [Veja o Projeto]()**

☑️ **Task:** Build 50 HTML/CSS/JS projects in 50 days... or less 😉

Made with 💜 by Clara 🚀


