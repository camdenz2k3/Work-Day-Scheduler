const moment = require("moment/moment");

var currentDay = $("currentDay")
var schedule = $(".container")
var timeBlocks = [
    {
        time: moment("7am", "hr").format("hr")
    },
    {
        time: moment("8am", "hr").format("hr"),
        hour: 8 
    },
    {
        time: moment("9am", "hr").format("hr"),
        hour: 9 
    },
    {
        time: moment("10am", "hr").format("hr"),
        hour: 10 
    },
    {
        time: moment("11am", "hr").format("hr"),
        hour: 11 
    },
    {
        time: moment("12pm", "hr").format("hr"),
        hour: 12 
    },
    {
        time: moment("1pm", "hr").format("hr"),
        hour: 13 
    },
    {
        time: moment("2pm", "hr").format("hr"),
        hour: 14 
    },
    {
        time: moment("3pm", "hr").format("hr"),
        hour: 15 
    },
    {
        time: moment("4pm", "hr").format("hr"),
        hour: 16 
    },
    {
        time: moment("5pm", "hr").format("hr"),
        hour: 17 
    }
];
var hours = Number(moment().format())

currentDay.text(moment().format("dddd, MMMM"));

$(timeBlocks).each(function(index) {
    
    var row = $('<div>').addClass('row time-block').appendTo(calendar);
    
    $('<div>').addClass('hour').text(timeBlocks[index].time).appendTo(row);
    
    var textarea = $('<textarea>').addClass('description').appendTo(row);
    
    var savedEvent = localStorage.getItem('event-' + timeBlocks[index].time);
    textarea.val(savedEvent);
    
    if (timeBlocks[index].hour === hours) {
        $(textarea).addClass('present');
    } else if (timeBlocks[index].hour < hours) {
        $(textarea).addClass('past');
    } else if (timeBlocks[index].hour > hours) {
        $(textarea).addClass('future');
    };


    var saveBtn = $('<div>').addClass('saveBtn').appendTo(row);
    $('<i>').addClass('fas fa-save').appendTo(saveBtn);
    function saveText() {
        localStorage.setItem('event-' + timeBlocks[index].time, textarea.val());
    };
    $(saveBtn).on('click', saveText);
})