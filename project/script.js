window.onload = function() {
    var input = document.getElementById("answer");
    var submitBtn = document.getElementById("submit");
    var result = document.getElementById("result");
    var timer = document.getElementById("timer");
    var startTime; 
    var score = 0;
    submitBtn.addEventListener("click", function() {
      var userAnswer = parseInt(input.value);
      var isCorrect = checkAnswer(userAnswer);
  
      if (isCorrect) {
        var endTime = new Date().getTime();
        var responseTime = (endTime - startTime) / 1000; // Calculate the response time in seconds
        result.textContent = "Correct! Response time: " + responseTime + "s";
        generateQuestion();
        score += 1;
      } else {
        result.textContent = "Incorrect. Try again.";
      }
    });
  
    function generateQuestion() {
      var number1 = Math.floor(Math.random() * 100) + 1;
      var number2 = Math.floor(Math.random() * 100) + 1;
      var answer = number1 * number2;
  
      var question = document.getElementById("question");
      question.textContent = "Multiply " + number1 + " and " + number2 + " together.";
  
      startTime = new Date().getTime(); // Capture the starting time
    }
  
    function checkAnswer(userAnswer) {
      var question = document.getElementById("question");
      var numbers = question.textContent.match(/\d+/g);
      var expectedAnswer = parseInt(numbers[0]) * parseInt(numbers[1]);
      return userAnswer === expectedAnswer;
    }
  
    generateQuestion();
  };
  