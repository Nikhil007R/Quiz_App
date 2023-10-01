window.onload = function(){
    show(0);
}


// for our first page 

function submitForm(e){
    e.preventDefault();
    // console.log("Form Submitted!!!")
    let name = document.forms["welcome-form"]["submit-name"].value;
    console.log(name);

    // Storing player name in session storage. 
    sessionStorage.setItem("name", name);

    // after clicking quiz should start  
    location.href = 'Quiz_Question.html';

}

// *** Welcome Player Name ****

let quiz_user = document.querySelector(".quiz_user");
let name_of_user = sessionStorage.getItem("name");
quiz_user.innerHTML = `<h4>Welcome! ${name_of_user}</h4>`;
console.log(name_of_user);

// for Questions 



let all_questions = [
    {
        id: 1,
        question: "The Gum-Gum Pistol is a signature move of which anime character?",
        answer: "Monkey D. Luffy",
        options: 
        [
            "Ichigo Kurasagi",
            "Goku ",
            "Monkey D. Luffy",
            "Chobits"
        ]
    },

    {
        id: 2,
        question: "In the anime Fairy Tail, which kind of wizard is Lucy?",
        answer: "Celestial Wizard",
        options: 
        [
            "Fire Wizard ",
            "Dark Wizard ",
            "Celestial Wizard",
            "Ice Wizard "
        ]
    },

    {
        id: 3,
        question: "In the anime Fullmetal Alchemist, which homunculi is created when Alphonse and Edward Elric used Alchemy to bring their mom back to life?",
        answer: "Sloth",
        options: 
        [
            "Sloth",
            "Greed ",
            "Envy",
            "Pride"
        ]
    },

    {
        id: 4,
        question: "In the Anime Hunter X Hunter, who is the father of Gon Freecs?",
        answer: "Ging Freeccs",
        options: 
        [
            "Gin Freecss",
            "Mito Freecss ",
            "gito Freecss",
            "Ging Freeccs"
        ]
    },

    {
        id: 5,
        question: "Haikyuu!! is an anime centred around a boy who wants to be successful in which sport?",
        answer: "Volleyball",
        options: 
        [
            "Volleyball",
            "Basketball  ",
            "Baseball",
            "Soccer"
        ]
    },

    {
        id: 6,
        question: "What is the meaning of Deku, the nichname of Izuku Modriya in the anime My Hero Academia?",
        answer: "A person who cannot do anything",
        options: 
        [
            "A person who cannot do anything",
            "A nerd who loves playing ",
            "A good friend",
            "A person who wants to be the hero"
        ]
    },

    {
        id: 7,
        question: "Goku belongs to which race in the anime Dragon ball?",
        answer: "Saiyan",
        options: 
        [
            "Majin",
            "Saiyan",
            "Android",
            "Namekian"
        ]
    },

    {
        id: 8,
        question: "As of the 2021, what is the highest grossing anime movies of all time?",
        answer: "Demon slayer Mugen train",
        options: 
        [
            "Your Name",
            "Demon slayer Mugen train",
            "Howl's Moving castle",
            "Jujutsu Kaisen 0"
        ]
    },

    {
        id: 9,
        question: "Who is the main character in the anime Pokemon?",
        answer: "ash Ketchum",
        options: 
        [
            "ash Ketchum",
            "Misty ",
            "Professor Oak",
            "Brad"
        ]
    },

    {
        id: 10,
        question: "Who is the main character in seven deadly sins anime?",
        answer: "Meliodas",
        options: 
        [
            "Ban",
            "Escanor ",
            "King",
            "Meliodas"
        ]
    },

    {
        id: 11,
        question: "How many squads are there in anime Black Clover?",
        answer: "nine",
        options: 
        [
            "eight",
            "seven",
            "nine",
            "six"
        ]
    },

    {
        id: 12,
        question: "Who is called The Lion's sin of Pride?",
        answer: "Escanor",
        options: 
        [
            "Meliodas",
            "Escanor",
            "Ban",
            "Merlin"
        ]
    },

    {
        id: 13,
        question: "Accoring to IMDB rating who is at the Top position?",
        answer: "Fullmetal alchemist",
        options: 
        [
            "Fullmetal alchemist",
            "One piece",
            "Hunter X Hunter ",
            "Death note"
        ]
    },

    {
        id: 14,
        question: "Who was the first member of the Levi squad to die in Attack on titan?",
        answer: "Gunther",
        options: 
        [
            "Eren Yeager",
            "Sasha Blouse",
            "Erwin Smith",
            "Gunther"
        ]
    },

    {
        id: 15,
        question: "Who is known as the One Punch man?",
        answer: "Saitama",
        options: 
        [
            "King",
            "Saitama",
            "Genos ",
            "Mumen Rider"
        ]
    },
]

let question_counter = 0;
let Correct_answer = 0;
let Incorrect_answer = 0;
let point = 0;


function next(){
    
    let user_answer = document.querySelector("li.active").innerHTML;
    // console.log(user_answer);
    
    
    // color checker according to the answer of the user 
    
    let color_checker = document.querySelectorAll(".check")[question_counter];
    // console.log(color_checker);
    
    // ********* Check answer with user ********** 
    
    
    if(user_answer == all_questions[question_counter].answer){
        Correct_answer++;
        console.log(Correct_answer, "Correct Answer");
        color_checker.classList.add("green");

        // Points that user get after every right answer 

        point = point + 10;
        sessionStorage.setItem("points", point)
    }
    else{
        Incorrect_answer++;
        console.log(Incorrect_answer, "Incorrect Answer");
        color_checker.classList.add("red");
        
    }
    
    // Jumping to last page of the html 
    
    if(question_counter == all_questions.length -1){
        location.href = "end.html"
        return;
    }
    
    question_counter++;
    // console.log(question_counter);
    show(question_counter);
}

function show(count){
    let question = document.getElementById("questions");
    // question.innerHTML = "<h2>" + all_questions[count].question + "</h2>";
    question.innerHTML = `<h2> Q${count+1}. ${all_questions[count].question}</h2>
    <ul class="option_group" id="list_options">
        <li class="option">${all_questions[count].options[0]}</li>
        <li class="option">${all_questions[count].options[1]}</li>
        <li class="option">${all_questions[count].options[2]}</li>
        <li class="option">${all_questions[count].options[3]}</li>
</ul>
    `;
    toggleActive();
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");

    // console.log(option);

    option.forEach(el =>{
        el.addEventListener('click', function(){

            // console.log(el);

            option.forEach(ab=>{
                
                // console.log(ab)

                if(ab.classList.contains("active")){
                    ab.classList.remove("active")
                }
            })
            el.classList.add("active");
        })
    })
    
    }



