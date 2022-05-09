# Flipping-Flashcards
This project's idea was to create a tool that imports questions and answers from a spreadsheet: either uploaded by the user or a Google sheet.

For now, the only way to introduce a new flashcard set is to hard code it into the javascript file, but there is a factory function that handles object creation to make it easier.

## To do:
1. Figure out a way to include formatting in the flashcard content. Currently questions and answers get imported using the jQuery text() method, which doesn't allow for paragraph breaks or text formatting.
3. Introduce a way for users to import new flashcard sets easily.
