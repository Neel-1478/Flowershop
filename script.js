function calcSal(){
    // alert("Onchange")
    // alert(document.getElementById("Sal").value)
    let sal=eval(document.getElementById("Sal").value)
    let bonus=sal*document.getElementById("Performance").value
    let totalSal=eval(sal+bonus)
    Employee.Bonus.value=bonus
    Employee.TotalSal.value=totalSal
    alert("Bonus : "+bonus+"\nTotal Sal : "+totalSal)
    
  }

  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const question1 = form.querySelectorAll('[name="question1"]');
    const question2 = form.querySelectorAll('[name="question2"]');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      let score = 0;
  
  
      for (let i = 0; i < question1.length; i++) {
        if (question1[i].value === 'B') {
          score++;
        }
        else{
          score=0;
        }
      }
  
      for (let i = 0; i < question2.length; i++) {
        if (question2[i].value === 'A') {
          score++;
        }
        else{
          score=0;
        }
      }

      
  
      alert(`Your score is ${score}`);
    });
  });  


  function popW(){
    window.open("pop.html","","height=400px width=1400px")
}  