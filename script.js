
let birthday;
let currentDate;
let christmasDay = new Date("2023-12-25");
let newYear = new Date("2024-01-01");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//when 'submit' button is clicked, sets date input value to "birthday" date variable to be displayed later
function submit(){
    var date = document.getElementById("birth-date").value;
    if(date != ""){
        if(confirm("Submit date as your birthday?")){

            birthday = new Date(date); //sets 'birthday' variable to the value of #birth-date input html element;

        }
    }
}

//runs when the buttons in the div class="buttons" is clicked
function display(button){
    switch (button){

        //when 'Current Date' button is pressed, creates a new Date object and displays the current date
        case 'btnCurrentDate':
            currentDate = new Date();
            subtitle.innerHTML = "Displaying Current Date";
            output.innerHTML = months[currentDate.getMonth()] + " " + currentDate.getDate() + ", " + currentDate.getFullYear();
            break;

        //when 'Your Birthday' button is pressed, displays your birthday; if birthday variable is null, displays the text "no date found"
        case 'btnBirthday':
            subtitle.innerHTML = "Displaying Birthday Date";
            if (birthday != null){
                output.innerHTML = months[birthday.getMonth()] +  " " + birthday.getDate() + ", " + birthday.getFullYear();
            } else {
                output.innerHTML = "No date found";
            }
            break;
        
        //when 'Christmas' button is pressed, displays christmas date
        case 'btnChristmas':
            subtitle.innerHTML = "Displaying Christmas Date";
            output.innerHTML = months[christmasDay.getMonth()] + " " + christmasDay.getDate() + ", " + christmasDay.getFullYear();
            break;

        //when 'New Year' button is pressed, displays New Year date
        case 'btnNewYear':
            subtitle.innerHTML = "Displaying New Year Date";
            output.innerHTML = months[newYear.getMonth()] + " " + newYear.getDate() + ", " + newYear.getFullYear();
    }
}

