#Overview
The project creates an Image Grid component with a page navigation feature using Javascript .
For the demonstration purpose the images are fetched from gettyimages . You will need a valid api-key
to make it work .

#Project Structure
###GridView.html
This is the main file providing the ImageGrid component. Open this file in your browser to see the effect.

###SeedGrid.js
This is the backbone of the project which pulls images from http://developer.gettyimages.com/ . 
It is also responsible for populating the grid with images. 

###pageSelector.js
This script controls the logic of Page navigation . By default the Page Count is set to 8. It can be changed by modifying 
the maxPageCount. 

#Other Components 
It makes use of spin.js to display the spinner while loading images. 


