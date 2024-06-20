var num1=0;
var num2=0;
function fn(){
    
    document.getElementById("tim").innerHTML=num1++ 
    document.getElementById("tim1").innerHTML=num2 + ":"
    if(num1 > 60){
        num1=0;
        num2++;
    }
    else if(num2 > 60){
        // num2=0;
        // num2++;
    }
}
var sto=setInterval(fn,500)
document.getElementById("sub").style.display="none"
var all=[
    
    {},
    { question: "What color is the sky?", options: ["Green", "Red", "Blue", "Yellow"], answer: 2 },
    { question: "What sound does a cow make?", options: ["Moo", "Meow", "Woof", "Tweet"], answer: 0 },
    { question: "Which fruit is yellow and curved?", options: ["Apple", "Banana", "Orange", "Grapes"], answer: 1 },
    { question: "Which animal is known as man's best friend?", options: ["Cat", "Dog", "Elephant", "Fish"], answer: 1 },
    { question: "What color are bananas?", options: ["Blue", "Red", "Yellow", "Purple"], answer: 2 },
    { question: "What is the shape of a ball?", options: ["Square", "Triangle", "Circle", "Rectangle"], answer: 2 },
    { question: "What do bees make?", options: ["Milk", "Honey", "Juice", "Butter"], answer: 1 },
    { question: "What color are strawberries?", options: ["Red", "Blue", "Green", "Purple"], answer: 0 },
    { question: "Which animal says 'meow'?", options: ["Dog", "Cat", "Cow", "Sheep"], answer: 1 },
    { question: "Which part of the plant is green and used in photosynthesis?", options: ["Root", "Leaf", "Stem", "Flower"], answer: 1 },
    { question: "Who is known as the 'Master Blaster' in cricket?", options: ["Sachin Tendulkar", "Ricky Ponting", "Brian Lara", "Jacques Kallis"], answer: 0 },
    { question: "What color is an apple?", options: ["Red", "Blue", "Yellow", "Green"], answer: 0 },
    { question: "Which animal says 'quack'?", options: ["Dog", "Cat", "Duck", "Cow"], answer: 2 },
    { question: "What do you use to brush your teeth?", options: ["Comb", "Toothbrush", "Spoon", "Fork"], answer: 1 },
    { question: "What color is a carrot?", options: ["Purple", "Red", "Green", "Orange"], answer: 3 },
    { question: "Which animal is the tallest in the world?", options: ["Elephant", "Giraffe", "Lion", "Tiger"], answer: 1 },
    { question: "What color is the sun?", options: ["Blue", "Red", "Yellow", "Green"], answer: 2 },
    { question: "What do you wear on your feet?", options: ["Hat", "Shirt", "Shoes", "Gloves"], answer: 2 },
    { question: "What is the opposite of 'big'?", options: ["Large", "Small", "Tall", "Huge"], answer: 1 },
    { question: "Which fruit is red and often used to make juice?", options: ["Apple", "Banana", "Orange", "Grapes"], answer: 0 },
    { question: "Which animal lives in water?", options: ["Dog", "Cat", "Fish", "Bird"], answer: 2 }
]

var num=0; var ans1;

    
    //    document.getElementById("all").style.display="blccok"
document.getElementById("all1").style.display="none"
var alls=document.getElementById("all")
   alls.style.display="none"

   document.getElementById("next").classList.add("str")
   document.getElementById("allh").style.display="none"


document.getElementById("next").addEventListener("click",function fn(){
console.log("next");
    // document.body.style.background="radial-gradient(circle, rgba(232,169,69,1) 0%, rgba(233,100,100,1) 97%);"
document.body.classList.add("chng")    
   document.getElementById("allh").style.display="block"
document.getElementById("sub").style.display="block"
    if(num >= 21){

        // alert(`Your Marks Is ${obtm}`)
        num=0;
        clearInterval(sto)
        num1=0
        num2=0
        // document.getElementById("re").innerHTML=`${obtm}`
        //  document.getElementById("re1").innerHTML=`${obtm}`
        //           document.getElementById("re3").innerHTML=`${obtm * 100 / 21}`
        //  document.getElementById("re2").innerHTML = `${obtm - 21}`;

            document.getElementById("all").style.display="none"
   
// alls1.classList.add("sho")
document.getElementById("next").style.display="none"
document.getElementById("sub").style.display="none"



document.getElementById("result").style.display="block"
    }   
    ++num    
 
// NOT COMMENT
document.getElementById("next").classList.remove("str")
     document.getElementById("next").style.display="none"

// NOT COMMENT

    document.getElementById("ques1").innerHTML=` ${num}) `+all[`${num}`].question
    document.getElementById("opt1").innerHTML=all[`${num}`].options[0]
    document.getElementById("opt2").innerHTML=all[`${num}`].options[1]
    document.getElementById("opt3").innerHTML=all[`${num}`].options[2]
    document.getElementById("opt4").innerHTML=all[`${num}`].options[3]
    ans1=all[num].answer;
   

   alls.style.display="block"
    document.getElementById("next").innerHTML=`<i class="fas fa-fast-forward"></i>`
   
    
})

var obtm=0;
document.getElementById("sub").addEventListener("click",()=>{


    var a1=document.getElementsByName("opt")
    
var ans;
    for(let i=0;i<a1.length;i++){

if(a1[i].checked == true){
    ans=a1[i].value
    
// NOT COMMENT 
    document.getElementById("next").style.display="inline-block"
    
// NOT COMMENT
    
}
else if(a1[i].checked == false){
    
}

    


else{
    document.getElementById("next").disabled = true;

}

}

        console.log(ans == ans1);
        if(ans == ans1){
            
        ++obtm
    }
    
    console.log(obtm)
}


)

document.getElementById("result").style.display="none"
document.getElementById("all1").style.display="none"
document.getElementById("result").addEventListener("click",()=>{
   
     document.getElementById("allh").style.display="none"
    document.body.classList.remove("chng")  
    alert("If You Want TO Check Our Result Through Email Fill This Form  ")
    document.getElementById("all").style.display="none"       
    document.getElementById("all1").style.display="block"
    document.getElementById("result").style.display="none"
    document.getElementById("sub").style.display="none"
})
//  document.getElementById("emai").style.display="none"
// function em(){
//     document.getElementById("emai").style.display="block"
// }
// setTimeout(em,5200)



// form

document.getElementById("submit1").addEventListener("click", () => {
    // Capture values from input fields
    var params = {
        to_name: "Recipient's Name", // Replace with actual recipient's name
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        // message: document.getElementById("message").value,
        quiz_results: generateQuizResults() // Call function to generate quiz results
    };

    // Replace with your actual EmailJS service ID and template ID
    const serviceID = "service_477fyxf";
    const templateID = "template_i02v0vk";

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, params)
        .then((response) => {
            console.log("Email sent successfully:", response);
            // Clear input fields after successful send
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            // document.getElementById("message").value = "";
            alert("Your Result Is Send Your Email");
            // location.reload()
        location.reload()
            // Optional: Reset quiz or other actions after email send
            // resetQuiz();
        })
        .catch((error) => {
            console.error("Email send failed:", error);
            alert("Failed to send message. Please try again later.");
        });
});

// Function to generate quiz results
function generateQuizResults() {
    // Example logic to generate quiz results
    // Replace with your actual logic to gather and format quiz results
    return `
    Result of Your Quiz\n
Total Marks Is 21\n
Your Marks Is ${obtm}\n
Percentage is ${obtm * 100 / 21}\n
`

}