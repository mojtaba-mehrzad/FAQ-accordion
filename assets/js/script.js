const questions = document.getElementsByClassName('faqs-list-item')

// Function to activate question text
function questionTextActive(question){
    let current = document.getElementsByClassName('question-text-active')
    if(current.length > 0){current[0].classList.remove("question-text-active")}
    question.classList.add('question-text-active')
}

// Function to show the answer
function showAnswer(answer){
        let current = document.getElementsByClassName('item-answer-active')
        if(current.length > 0){current[0].classList.remove("item-answer-active")}
        answer.classList.add('item-answer-active')
        answer.setAttribute('aria-hidden', 'false')
}

// Function to change button icon
function changingButtonIcon(button){
    let minusIcon = document.getElementsByClassName('minus-icon')
    if(minusIcon.length > 0){minusIcon[0].classList.remove("minus-icon")}
    button.classList.add('minus-icon')
    button.setAttribute('aria-expanded', 'true');

}

// Function to deactivate item
function deactiveItem(answer , button ,question){
    answer.classList.remove("item-answer-active")
    button.classList.remove("minus-icon")
    question.classList.remove("question-text-active")
    button.setAttribute('aria-expanded', 'false');
    answer.setAttribute('aria-hidden', 'true');
}

// Handle question text click
const handleQuestionText = (answer , button ,question)=>{    
        questionTextActive(question)
        showAnswer(answer)
        changingButtonIcon(button)
    
}

// Handle button click
const handleButton = (answer , button , question ,e)=>{
    if(e.target.className.match('minus-icon')){
        deactiveItem(answer , button ,question)
    }else{
        questionTextActive(question)
        changingButtonIcon(button)
        showAnswer(answer)
    }
}

// Main event handler for buttons
const handleButtons =(e)=>{
    if(e.target.tagName === "BUTTON"){
        if(e.target.className.match('question-text')){
            let answer = e.currentTarget.querySelector('.item-answer');        
            let button = e.target.nextElementSibling;
            let question = e.target;
            handleQuestionText(answer , button ,question)
        }if(e.target.className.match('item-button')){
            let answer = e.target.parentElement.nextElementSibling;
            let button = e.target;
            let question = e.target.previousElementSibling;
            handleButton(answer , button , question ,e)
        }
    }
}

// Add event listeners to all questions
for(let element of questions) {
    element.addEventListener('click' , handleButtons)
}