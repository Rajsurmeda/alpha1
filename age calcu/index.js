const inputbtn = document.querySelector(".age-dob-input");
const calculatebtn = document.querySelector(".calculate-btn");

calculatebtn.addEventListener("click",()=>{
    if(inputbtn.value===""){
        alert("please enter your date of birth");
    }else{
       console.log("input",inputbtn.value);
       const dob = new Date(inputbtn.value);
       console.log("dob",dob);
       const dob_year = dob.getFullYear();

    // ? current
       const now = new Date();
       console.log("now",now);
       const now_year = now.getFullYear();
       console.log("now_year",now_year);
       const age =now_year - dob_year;
       console.log("age",  age);
       ageresult.innerHTML = `your age is ${age}`;
    }
})