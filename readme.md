# Scrabble solver challenge #

## Coding challenge description ##
* The goal is to write a digital assistant for you next game of [Scrabble](https://en.wikipedia.org/wiki/Scrabble)
* The user provides a series of letters and the app generates valid words using a subset of those letters
* Please make sure to not use the same entered letter multiple times ("eonliyl" can be rearranged into "lonely" but not "loonie" since the "o" only appears once in the scrambled letters)
* Create an API that generates possible words from those letters and calculates their score. It also includes their definition from https://dictionaryapi.dev 
* In the frontend, display the top 10 scoring words sorted by total points and word length and the description for the top 5 scoring words
* On screens above 800px, display the attached header image on top of the page
* Have **fun** and make it beautiful!

## Resources ##
* https://dictionaryapi.dev 
* Headerimage for desktop: *header.png*
* Word list: provided as *words.json*
* Score list for each letter: provided as *scores.json* (count refers to how often a number exists in the game and value is the actual point score for using that letter)
