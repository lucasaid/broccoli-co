# Airwallex Test

## To run
Using pnpm for more speed and disk space efficiency.  

Install dependencies:  
`pnpm install`  

Start server:  
`pnpm dev`  

Local server will be spun up here: http://localhost:5173/  

## Requirements
- Landing page
  - Header
  - Intro text
  - Button
  - Footer
  - full height with footer locked to bottom of screen
- Button triggers modal
- Modal contains a form
  - title
  - Full name
  - Email
  - Confirm email
  - Button
  - background overlay
  - close modal?
  - if user clicks outside modal does it close?
- Button validates data
  - max lengths?
  - trim space
  - validate email format
  - check confirm email
- Error if validation does not pass with pointer to fields that have issues
- Button POSTs to API endpoint
- Loading state for sending data
- Error on issue with API endpoint
- Success message
  - rendered in modal
  - title
  - description
  - button that closes modal
- Mobile first styling


## Other things to consider
- will footer be fixed? eg. if the content is more than that can fit on screen (mobile, small screen) do we scroll the content area with footer fixed? or will the footer move below the view.
- should there be a close button for the modal? will help with accessibility
- does the modal close on the background overlay click
- should there be a direct link to the form so it is automatically opened?


## Components to consider
- Header
- Footer
- Button (for this use case i would probably just stick with creating a styled base input button)
- Modal
- Input field

## Extra Notes
- Implemented a light/dark mode media query which will change appearance based on users preferences


## Issues/Future
- Update image to be svg (free image I got required a lot of messing around to get the svg to be contained in it's viewport correctly)