Pure CSS Components Tabs
==================

[![Greenkeeper badge](https://badges.greenkeeper.io/joe-crick/pure-css-components-tabs.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/joe-crick/pure-css-components-tabs.svg?branch=master)](https://travis-ci.org/joe-crick/pure-css-components-tabs)
[![GitHub license](https://img.shields.io/github/license/Day8/re-frame.svg)](license.txt) 
![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)
![Current Version](https://img.shields.io/badge/version-0.0.1-green.svg)


A small JS utility for working with Pure.CSS Components Tabs. 

NOTE: This is an independent project, and is not directly associated with Pure CSS.

## Summary

[Pure.CSS Components](https://github.com/joe-crick/pure-css-components) is a library of CSS only components designed 
for use with the [Pure.CSS](https://purecss.io) framework. None of the components require any JavaScript in order to 
function. There may be times, however, when it can be useful to have JavaScript to manipulate a component. Therefore, 
I've created individual JS modules to complement the CSS only components. Don't need JS? Don't bother. Need a little 
JS? Use just what you need.

### Install from NPM

```js
yarn add purecss-components-tabs
```
or
```js
npm i purecss-components-tabs -S
```

## Example

An example HTML Tabs:

```html
<!-- .accordion is considered the base node for this tab set -->
<ul class="accordion accordion-tab">
    <li class="accordion-section">
        <input type="radio" class="accordion-section-selector pcssc-invisible" id="zero" name="tab-head" role="tab"
               checked/>
        <label for="zero" class="accordion-section-header">Option 0</label>
        <div class="accordion-section-content">
            <h2>Heading 1</h2>
            Donec mattis mauris gravida metus laoreet non rutrum sem viverra. Aenean nibh libero,
            viverra
            vel vestibulum in,
        </div>
    </li>
    <li class="accordion-section">
        <input type="radio" class="accordion-section-selector pcssc-invisible" id="one" name="tab-head" role="tab"/>
        <label for="one" class="accordion-section-header">Option 1</label>
        <div class="accordion-section-content">
            <h2>Heading 1</h2>
            Content goes here
        </div>
    </li>
    <li class="accordion-section">
        <input type="radio" class="accordion-section-selector pcssc-invisible" id="two" name="tab-head" role="tab"/>
        <label for="two" class="accordion-section-header">Option 2</label>
        <div class="accordion-section-content">
            <h2>Heading 2</h2>
            Lorem Ipsum
        </div>
    </li>
</ul>
```
This JS would work with the Tabs defined above: 

```js

import Tabs from 'purecss-components-tabs';

// Pass in a selector to the base node for the tabs you want to work with
const myTabs = Tabs('.accordion');

// Set the active tab using a zero-based index.
myTabs.setActiveTab(1);

```