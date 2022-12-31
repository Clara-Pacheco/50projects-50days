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

![preview]()

## 🔟 Dad Jokes

![preview]()

## Event Keycodes

![preview]()

## Faq Collapse

![preview]()

## Random Choice Picker

![preview]()

## Animated Navigation

![preview]()

## Incrementing Counter

![preview]()

## Drink Water

![preview]()

## Movie App

![preview]()

## Background Slider

![preview]()

## Theme Clock

![preview]()

## Button Ripple Effect

![preview]()

## Drag N Drop

![preview]()

## Drawing App

![preview]()

## Kinetic Loader

![preview]()

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


