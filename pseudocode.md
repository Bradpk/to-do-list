DESCRIPTION: <br>

Create an online to-do list manager application.<br>

------------------------------------------------
MoSCoW:<br>

Must Have: <br>
Dynamically render the content with React using components<br>
Display all to-do list items<br>
Three "views" for the user: All, Completed, & To-Do (not completed)<br>
Cross out or check off one item as "completed"<br>
See a count of remaining items<br>
Remove one item (either hard delete or soft delete/archive)<br>
Check off or cross out all items in one click as a "completed all" function<br>
Ability to press a button and all checked off items become active again<br>
Website must be responsive<br>
Website must be styled<br>
Your repo should be public so that others can see your code and comment on it.<br>

Should Have: <br>
Remove all completed items (soft delete/archive)<br>
Use LocalStorage to persist data on a revisit or reloading of the page. With this implementation add a useEffect hook to access localStorage.<br>
Create a flow diagram for the front end architecture to be used in an MVP<br>
Add a separate “Reminders” set of functionality<br>

Could Have: <br>
Edit To-Do's inline with a doubleclick event that changes it from a rendered text to a text input.<br>
Add due dates and alarms to the to-dos that handle pop ups in your browser in an elegant fashion<br>
Automatically mark to-dos with a new status based on done/not done and the time it was due.<br>

Won't Have:<br>
Laser Beams<br>

------------------------------------------------
ATOMIC DESIGN: <br>

Atoms: <br>
h1, input box, input button, p, delete button for each list item, clear all button<br>

Molecules: <br>
Form box: input & button<br>
List: To Do Items & corrisponding buttons <br>

Organisms: <br>

------------------------------------------------
KANBAN:<br>

As a user I need to be able to enter an item into my to do list<br>

As a user I need to view my to do list items<br>

As a user I need to be able to check off an item as completed<br>

As a user I need to view if an item has been completed<br>

As a user I need to view if an item is not completed<br>

As a user I need to be able to delete items <br>

As a user I need to be able to view the updated list after deleting items <br>

As a user I need to be able to delete all items to reset the list <br>

As a user I need to be able to view the list with ALL items, completed items and not completed items<br>

------------------------------------------------
QUESTIONS: <br>

What components will I need? <br>

What functions will I need? <br>

Should I be nesting components in other components and if so which ones? <br>

How do I update the display using the useState declarations?<br>

What's all this localstorage business about? <br>

------------------------------------------------
STEP BY STEP: <br>

// User Travels To Page<br>

// Page displays an input field <br>

// User enter their "to do" items into the input field <br>

// User clicks button to add it to a list<br>

// Items are displayed in a list<br>

// Items can be added, ticked off, deleted one by one, or all at once<br>

// List can be filitered to view ALL, Completed and Not Completed items<br>

------------------------------------------------
PROCEDURAL <br>

BEGIN<br>

INIT: <br>
Import react <br>
Import bootstrap <br>
Variable to store ALL items <br>
Variable to store completed items<br>
Variable to store incompleted items <br>
Title<br>
Input Box<br>
Input Button <br>
All Button <br>
Completed Button <br>
Not Completed Button <br>
Delete All Button <br>
Delete Button <br>

INPUT: <br>
User enters relevant information <br>

RENDER: Relevant information is displayed on the screen <br>

END: <br>

------------------------------------------------
FUNCTIONS:<br>
function HandleInput - (To retrieve formatted information the user put into the input box) <br>

function AddItem - (To add new items to the list)<br>

function CheckItem - (To display an item as completed) <br>

function CheckAll - (To toggle between selecting ALL items as either completed or not completed) <br>

function getID - (To give each item a unique ID)<br>

function DeleteItem - (To delete an an item from the list)<br>

function DeleteAll - (To remove ALL the items from the list)<br>

function ViewAll - (To change the UI list to display All items) <br>

function ViewCompleted - (To change the UI list to display the completed items) <br>

function ViewNotCompleted - (To change the UI list to display the not completed items) <br>

function LocalStoreage - (To store the information) <- Still confuzzled on the local storage stuff <br>

------------------------------------------------
OBJECTS: <br>

------------------------------------------------
COMPONENTS: <br>

HEADER COMPONENT:<br>
useState declarations for keeping track of changes and connecting them with event handlers that alter the JSX to render their display<br>

INPUT COMPONENT: <br>
useState declarations for keeping track of changes and connecting them with event handlers that alter the JSX to render their display<br>

LIST COMPONENT:<br>
useState declarations for keeping track of changes and connecting them with event handlers that alter the JSX to render their display<br>

APP COMPONENT:<br>
All other components go inside this one<br>



