//im doin stuff
$(document).ready(function () {
    const html = function (question, index, questions) {
        return `
        <div class="form-group"
        <div><h1>${question}</h1></div>
        <div id="id-${index+1}">
          ${[1, 2, 3, 4, 5].map(val => `
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions${index+1}"  value="${val}">
              <label class="form-check-label" for="inlineRadio${val}">${val}</label>
            </div>
            `).join('')}
        </div> 
        <br>`
    };
    //array of questions
    const questions = ['question one?', 'question two?', 'question three?', 'question four?', 'question five?']
    let form = questions.map(html);
    // console.log("form", form)
    $('#survey-questions').append(form);

    //<!-- BELOW CODE IS CRITICAL. IT HANDLES HOW FORM DATA IS SENT TO OUR SERVER -->

    // In this code below we create the Front-end JavaScript which "POSTS" our form data to our express server.
    // In essence, when the user hits submit, jQuery grabs all of the fields then sends a post request to our api
    // Our api recognizes the route (/api/tables)... and then runs the associated code (found in api-routes.js).
    // In this case the associated code "saves" the data to the table-data.js file or waitinglist-data.js file

    $(".submit").on("click", function (event) {
        event.preventDefault();

        // Here we grab the form elements
        var surveyResult = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: questions.map((e, i) => $(`#id-${i+1} input:radio:checked`).val()),
        };

        console.log("surveyResult", surveyResult);

        // This line is the magic. It"s very similar to the standard ajax function we used.
        // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
        // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
        // depending on if a tables is available or not.
        $.post("/app/data/friends", surveyResult,
            function (data) {

                alert("Yay! We received your survey");

                // Clear the form when submitting
                $("#name").val("");
                $("#photo").val("");
                // $("#survey-questions").val("");
            });
    });
});