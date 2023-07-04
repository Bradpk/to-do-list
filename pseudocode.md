DESCRIPTION:
Create an online to-do list manager application.


MoSCoW:

Must Have: 
Dynamically render the content with React using components
Display all to-do list items
Three "views" for the user: All, Completed, & To-Do (not completed)
Cross out or check off one item as "completed"
See a count of remaining items
Remove one item (either hard delete or soft delete/archive)
Check off or cross out all items in one click as a "completed all" function
Ability to press a button and all checked off items become active again
Website must be responsive
Website must be styled
Your repo should be public so that others can see your code and comment on it.

Should Have: 
Remove all completed items (soft delete/archive)
Use LocalStorage to persist data on a revisit or reloading of the page. With this implementation add a useEffect hook to access localStorage.
Create a flow diagram for the front end architecture to be used in an MVP
Add a separate “Reminders” set of functionality

Could Have: 
Edit To-Do's inline with a doubleclick event that changes it from a rendered text to a text input.
Add due dates and alarms to the to-dos that handle pop ups in your browser in an elegant fashion
Automatically mark to-dos with a new status based on done/not done and the time it was due.

Won't Have:
Laser Beams


ATOMIC DESIGN: 

Atoms: 

Molecules: 

Organisms: 

Templates: 

Pages: 


KANBAN:

As a user I need to view my to do list items
As a user I need to be able to check off an item as completed
As a user I need to view if an item has been completed
As a user I need to view if an item is not completed
As a user I need to be able to delete items 
As a user I need to be able to view the updated list after deleting items 
As a user I need to be able to delete all items to reset the list 


QUESTIONS: 
What components will I need? 
Should I be nesting components in other components and if so which ones? 
How do I update the display using useState?
What's all this localstorage business about? 


STEP BY STEP: 
// User Travels To Page
// Page displays an input field 
// User enter their "to do" items into the input field 
// Items are displayed in a list
// Items can be added, ticked off, deleted one by one, or all at once


VARIABLES: 



FUNCTIONS/COMPONENTS:



OBJECTS:



