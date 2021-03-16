function inputName() {
    var firstName = document.querySelector('#firstName').value;
    console.log(firstName);

    document.querySelector('#display-name').innerHTML = firstName;

}

function printTodaysDate() {
    var date = new Date();


    var dateToday = document.getElementById("today-date").innerHTML = date.toDateString();
 /*   var todaysDate = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    document.write(today); */
}

