// Quiz JS 
const correctAns = ['B','C','A','A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAns = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    // check answer 
    userAns.forEach ((ans,index) =>{
        if( ans === correctAns[index] ){
            score +=25;
        }
    });
    console.log(score);

    //Show result

    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if( output === score){
            clearInterval(timer);
        }else{
            output++;
        }

    }, 40);

});


