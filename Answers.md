# Answers #

1. How much time did you end up spending on this coding test?

Something around 9 hours I believe.
Wednesday, the base for backend and front end and the route between them and the function for counting the words, 3 hours. 
Friday, start of text transformation. 3 hours
Monday, 3 hours, touching up transformation, structuring and cleaning up code.

2. Explain why you chose the code structure(s) you used in your solution.
I used Node.js with express, I was tempted to use a Python backend, we use Sanic in school right now and I really like Python but its Node.js I got the most experience with building complete applications. I pretty much started prototyping, getting down my idea of the workflow to see if any unexpected problems shows up, and later touching up the code and structure.

Problems I had with this was some json formatting the first day, and Monday finding linebreaks. I havent worked with uploading text files and processing them like this.

Monday I structured the back end code into modules, app.js does the usual Express stuff, in textService the route for the post request from the frontend is handled, with help from the separate counter function, and then transforming the text, with help of the splitting function. The route for was more lines then the standard express methods and it became much cleaner to have it in it's own file, same with the counter function altough it's shorter.

In the textservice function, after the counter has returned the most frequently used word the functions transform the original text and it does that in three ways because of case sensitivity, all lower case, first letter upper case, and all uppercase. The three versions is stored in an array which then is looped over and sent to the splitting function, I did a lot of splitting and joining and needed to do it for each version of the word, so I think this was the cleanest way to achieve this.

Btw, I see myself like more of an backend developer but I choosed to do it fullstack because I like the workflow better, Im more comfortable with it, and its fun to do requests and putting the response data where it should be etc.

3. What would you add to your solution if you had more time?
I would do a better interface on the frontend, this one does what's required and I felt like I didnt know how to style it, there's almost nothing there to style in this state. So for this version I put my creativity elsewhere, especially when I felt the time ticking away and I didnt want to spend much more than 8 hours on this.

It would be fun to make it look more like processing tool, listing the most used words, toggle the foo-bar on and off, showing the time of the transformation process. Also then I would have some kind of sense of what kind of application this could be and with that in mind it would be fun to write the CSS.

Also I researched some regex because I believe it would be very useful for this, but to learn it is on my to-do list.

4. What did you think of this recruitment test?
Fun! It's very open for interpretation.

Git repository:
https://github.com/pellehardstedt/hiq_technical_test

## Where do I hand in my solution? ##
* Please send your solution to [anna.eggert@hiq.se](mailto:anna.eggert@hiq.se) as a zip-file 
    * All typically ignored files and folders should be removed (node_modules, bin etc).
    * The zip-file should contain a clone of this git repo, with your work added in commit(s).
