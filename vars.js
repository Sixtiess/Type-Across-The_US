//arrays
let states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

let capitals = ['Montgomery', 'Juneau', 'Phoenix', 'Little Rock', 'Sacramento', 'Denver', 'Hartford', 'Dover', 'Tallahassee', 'Atlanta', 'Honolulu', 'Boise', 'Springfield', 'Indianapolis', 'Des Moines', 'Topeka', 'Frankfort', 'Baton Rouge', 'Augusta', 'Annapolis', 'Boston', 'Lansing', 'Saint Paul', 'Jackson', 'Jefferson City', 'Helena', 'Lincoln', 'Carson City', 'Concord', 'Trenton', 'Santa Fe', 'Albany', 'Raleigh', 'Bismarck', 'Columbus', 'Oklahoma City', 'Salem', 'Harrisburg', 'Providence', 'Columbia', 'Pierre', 'Nashville', 'Austin', 'Salt Lake City', 'Montpelier', 'Richmond', 'Olympia', 'Charleston', 'Madison', 'Cheyenne'];

let capitalX = [414, 155, 141, 344, 55, 216, 529, 512, 440, 436, 245, 117, 374, 404, 330, 309, 421, 363, 547, 499, 543, 416, 332, 377, 346, 160, 297, 77, 536, 516, 205, 510, 490, 258, 437, 294, 57, 494, 540, 468, 265, 404, 290, 150, 521, 495, 62, 455, 371, 219];

let capitalY = [249, 399, 242, 225, 165, 165, 110, 149, 276, 232, 386, 102, 164, 156, 138, 173, 180, 285, 68, 150, 99, 119, 99, 261,181,77,148,155,86,133,220,97,194,73,150,220,81,131,110,220,106,204,287,150,77,172,53,168,117,145];

let lineList = [];

let typed = "";
let inpt, index, f, clr1, clr2, timer, lastPicker, carX, carY, stepX, stepY;
let score = 0;
let page = 1;
let mode = 'easy';
let solidVar = 'easy';
let toggleX = 20;
let toggleY = 520;
let toggleW = 80;
let toggleH = 40;
let winner = false;
let stepsRemaining = 0;
let animationSteps = 80;
