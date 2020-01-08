const currentDaySpan = document.querySelector("#currentDay");
const containerDiv = document.querySelector(".container");

const currentDate = moment().format("dddd MMMM Do");
const currentTime = moment().format("h") + moment().format("A");
const inputHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
//var date = moment();
var dateArr = currentDate.split(" ");
console.log(dateArr);
console.log(currentTime);
currentDaySpan.textContent = dateArr[0] + ", " + dateArr[1] + " " + dateArr[2];

var inputHoursIndex = inputHours.indexOf(currentTime);
console.log(inputHoursIndex);
for(let i = 0; i < inputHours.length;i++){
    let rowDiv = $("<div>");
    $(".container").append(rowDiv)
    rowDiv.addClass("row");

    let hourDiv = $("<div>");
    $(rowDiv).append(hourDiv);
    hourDiv.addClass("hour col-sm-1").text(inputHours[i]);
    console.log(inputHours[i]);

    let entryDiv = $("<div>");
    $(rowDiv).append(entryDiv);
    console.log(i + " " + inputHoursIndex);
    switch(true){
        case i < inputHoursIndex:
            entryDiv.addClass("past col-sm-8");
            break;
        case i === inputHoursIndex:
            entryDiv.addClass("present  col-sm-8");
            break;
        case i > inputHoursIndex:
            entryDiv.addClass("future  col-sm-8");
            break;
    }
    let textAreaBox = $("<textarea>");
    $(entryDiv).append(textAreaBox);
    textAreaBox.val("mark");
    //entryDiv.text("mark");

    let saveDiv = $("<div>");
    $(rowDiv).append(saveDiv);
    saveDiv.addClass("col-sm-1 btnDiv");
    let saveBtn = $("<button>");
    $(saveDiv).append(saveBtn);
    $(saveBtn).addClass("saveBtn");
    saveBtn.text("save");

}
