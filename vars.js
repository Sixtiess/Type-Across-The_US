//arrays
let states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

let capitals = ['Montgomery', 'Juneau', 'Phoenix', 'Little Rock', 'Sacramento', 'Denver', 'Hartford', 'Dover', 'Tallahassee', 'Atlanta', 'Honolulu', 'Boise', 'Springfield', 'Indianapolis', 'Des Moines', 'Topeka', 'Frankfort', 'Baton Rouge', 'Augusta', 'Annapolis', 'Boston', 'Lansing', 'Saint Paul', 'Jackson', 'Jefferson City', 'Helena', 'Lincoln', 'Carson City', 'Concord', 'Trenton', 'Santa Fe', 'Albany', 'Raleigh', 'Bismarck', 'Columbus', 'Oklahoma City', 'Salem', 'Harrisburg', 'Providence', 'Columbia', 'Pierre', 'Nashville', 'Austin', 'Salt Lake City', 'Montpelier', 'Richmond', 'Olympia', 'Charleston', 'Madison', 'Cheyenne'];


let capitalX = [401, 145, 133, 333, 53, 203, 493, 477, 426, 420, 237, 111, 362, 390, 308, 299, 407, 350, 529, 482, 525, 401, 320, 363, 333, 154, 287, 75, 519, 499, 198, 493, 472, 248, 422, 283, 53, 477, 510, 450, 255, 389, 279, 144, 502, 476, 58, 438, 357, 211];

let capitalY = [248, 398, 241, 224, 164, 164, 109, 149, 276, 231, 385, 101, 164, 155, 138, 172, 180, 286, 68, 150, 99, 118, 98, 259, 180, 74, 148, 156, 86, 133, 220, 97, 192, 72, 146, 218, 80, 130, 108, 219, 105, 202, 286, 148, 74, 171, 52, 166, 115, 144];

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
