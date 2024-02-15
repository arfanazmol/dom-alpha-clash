// function play() {
//     // step 1: hide the home screen. to hide the screen add the class hidden to the home section
//     // const homeSection = document.getElementById('home_screen');
//     // homeSection.classList.add('hidden'); //এটা দ্বারা বোঝাই যে ক্লাস এর ভিতরে যতগুলা এলিমেন্ট আছে সবগুলো কে hidden করে দেয় ।
//     // console.log(homeSection.classList);

//     //step 2: show the play ground
// //    const playgroundSection = document.getElementById('play_ground');
// //    playgroundSection.classList.remove('hidden');
//    //    console.log(playgroundSection.classList)
// }

function continueGame(){
    //step 1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);
}

function play(){
    hideElementById('home_screen');
    showElementById('play_ground');
    continueGame()
}