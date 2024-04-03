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

  function calcMarks(){

    let marks=0
    if(document.querySelector('input[name="question1"]:checked').value=="true"){
      marks+=2
    }
    if(document.querySelector('input[name="question2"]:checked').value=="true"){
      marks+=2
    }
    alert("Your marks is : "+marks + " out of 4")
}
  function popW(){
    window.open("pop.html","","height=400px width=1400px")
}  