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
var hour
