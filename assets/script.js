var hours = Number(moment().format('k'))
var alert = $('#alert')
var currentDay = $("#currentDay")
var schedule = $(".container")
var timeBlocks = [
    {
        time: moment("7am", "ha").format("ha"),
        hour: 7
    },
    {
        time: moment("8am", "ha").format("ha"),
        hour: 8 
    },
    {
        time: moment("9am", "ha").format("ha"),
        hour: 9 
    },
    {
        time: moment("10am", "ha").format("ha"),
        hour: 10 
    },
    {
        time: moment("11am", "ha").format("ha"),
        hour: 11 
    },
    {
        time: moment("12pm", "ha").format("ha"),
        hour: 12 
    },
    {
        time: moment("1pm", "ha").format("ha"),
        hour: 13 
    },
    {
        time: moment("2pm", "ha").format("ha"),
        hour: 14 
    },
    {
        time: moment("3pm", "ha").format("ha"),
        hour: 15 
    },
    {
        time: moment("4pm", "ha").format("ha"),
        hour: 16 
    },
    {
        time: moment("5pm", "ha").format("ha"),
        hour: 17 
    }
];

alert.hide();

currentDay.text(moment().format("MMMM Do YYYY, h:mm:ss a"));

$(timeBlocks).each(function(index) {
    
    var row = $('<div>').addClass('row time-block').appendTo(schedule);
    
    $('<div>').addClass('col-md-1 hour').text(timeBlocks[index].time).appendTo(row);
    
    var textarea = $('<textarea>').addClass('col-8 col-md-10 description').appendTo(row);
    
    var savedEvent = localStorage.getItem('event-' + timeBlocks[index].time);
    textarea.val(savedEvent);
    
    if (timeBlocks[index].hour === hours) {
        $(textarea).addClass('present');
    } else if (timeBlocks[index].hour < hours) {
        $(textarea).addClass('past');
    } else if (timeBlocks[index].hour > hours) {
        $(textarea).addClass('future');
    };


    var saveBtn = $('<div>').addClass('saveBtn col-md-1 col-2').appendTo(row);
    $('<i>').addClass('fas fa-save').appendTo(saveBtn);
    function saveText() {
        localStorage.setItem('event-' + timeBlocks[index].time, textarea.val());
        alert.show().fadeOut(4500)
    };
    $(saveBtn).on('click', saveText);
})