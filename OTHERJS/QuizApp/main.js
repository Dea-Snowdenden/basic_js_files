var pos = 0, test, test_status, question, choices, chA, chB, chC, correct = 0;
var questions = [
    [ "what is earth?", "plant", "seed", "planet", "something", "C" ],
    [ "Where is Manila?", "Philippines", "New York", "Holland", "California", "A" ],
    [ "What is h20?", "Hydrogen", "Water", "Juice", "Element", "B" ],
    [ "When is the new year?", "dec6", "dec31", "jan1", "july4", "B"]
];

function _(x){
    return document.getElementById(x);
}

function renderQuestion(){
    test =  _("test");
    _("test_status").innerHTML = "Question " + (pos+1)+ " of "+ questions.length;
    question = question[pos][0];
    chA =  questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    test.innerHTML = "<h3>" + question+"</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>"
    <br>";    
    test.innerHTML = "<button onclick='checkAnswer()'>SUBMIT ANSWER</button>";
}
