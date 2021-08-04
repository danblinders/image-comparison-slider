'use strict';

$('document').ready(() => {

  // Getting slider elements from the page

  const handler = $('.comparison-slider__handler'),
        slider = $('.comparison-slider'),
        imageLeftWrapper = $('.comparison-slider__image-overlay-wrapper'),
        imageLeft = $('.comparison-slider__image-overlay');
    
  // Variable, that defines, whether slider handler pressed of not

  let isHandlerPressed = false;

  // Setting the width of overlay image equal to the width of slider

  imageLeft.css("width", `${slider.css("width")}`);

  // After mouse is pressed inside the handler area, set isHandlerPressed variable to true

  handler.on("mousedown", function() {
    isHandlerPressed = true;
  });

  // After mouse movement:
  // Get coordinates of slider and image-overlay-wrapper
  // If handler is pressed and mouse coordinates arent smaller than coordinate of the slider's left corrdinate and arent larger than coordinate of the slider's right coordinate
  // Changing left coordinate to handler
  // Chnaging width of image-overlay-wrapper 
  handler.on("mousemove", function(e) {
    const rectSlider = slider[0].getBoundingClientRect(),
          rectImageLeftWrapper = imageLeftWrapper[0].getBoundingClientRect();

    if (isHandlerPressed) {
      if ((e.pageX >= rectSlider.left) && (e.pageX <= rectSlider.right)) {
        handler.css("left", `${e.pageX - rectImageLeftWrapper.left}px`);
        imageLeftWrapper.css("width", `${e.pageX - rectImageLeftWrapper.left}px`);
      }
    }    

  });

  // After mouse is released inside the handler area, set isHandlerPressed variable to false

  handler.on("mouseup", function() {
    isHandlerPressed = false;
  });

});