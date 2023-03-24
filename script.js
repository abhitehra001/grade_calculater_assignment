const english = document.getElementById("english");
const maths = document.getElementById("maths");
const physics = document.getElementById("physics");
const chemistry = document.getElementById("chemistry");
const computer = document.getElementById("computer");
const total = document.getElementById("total");
const average = document.getElementById("average");
const grade = document.getElementById("grade");
const calculate = document.getElementById("calculateGrade")

let totalMarks = 0;
let averageMarks = 0;
let gotGrade = "T";

const validateInput = (val) => {
    if(val.length<=3 && /^[0-9]+$/.test(val) || val.length===0){
        if(val.length===3 && parseInt(val)>100){
            window.alert("Please Enter Marks in range of 0-100")
            return false;
        }
        if(val.length>0){
            totalMarks += parseInt(val);
            if(parseInt(val)<35){
                gotGrade = "F";
            }
        }else{
            gotGrade = "F";
        }
        return true;
    }else{
        window.alert("Please Enter Marks in range of 0-100")
        return false;
    }
}
const calculateGrade = () => {
    totalMarks = 0;
    if(!validateInput(english.value)){
        return;
    }
    if(!validateInput(maths.value)){
        return;
    }
    if(!validateInput(physics.value)){
        return;
    }
    if(!validateInput(chemistry.value)){
        return;
    }
    if(!validateInput(computer.value)){
        return;
    }
    total.innerText = `Total Marks: ${totalMarks}`;
    averageMarks = parseInt(totalMarks/5);
    average.innerText = `Your Average marks are: ${(totalMarks/5).toFixed(2)}`;
    if(gotGrade!=="F"){
        if(averageMarks>=90){
            gotGrade = "A";
        }else if(averageMarks>=80){
            gotGrade = "B";
        }else if(averageMarks>=70){
            gotGrade = "C";
        }else if(averageMarks>=60){
            gotGrade = "D";
        }else {
            gotGrade = "F";
        }
    }
    grade.innerText = `You Got ${gotGrade} Grade`;
}
calculate.addEventListener("click", ()=>{
    totalMarks = 0;
    averageMarks = 0;
    gotGrade = "T";
    grade.innerText = "";
    average.innerText = "";
    total.innerText = "";
    calculateGrade();
})