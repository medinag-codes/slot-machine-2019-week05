let min = 5
let max = 50
let wallet = 500

// click eventlisteners
document.querySelector('#minBet').addEventListener('click',betMin );
document.querySelector('#maxBet').addEventListener('click', betMax);
document.querySelector('#wallet').innerText = wallet


// array of images to match on the slot machine
let images = ['images/cherries.png', 'images/seven.png', 'images/watermelon.png', 'images/bar.png', 'images/lemon.png']

// starting images on the slot machine
function startImage(){
    for (imageEl of document.querySelectorAll('.wheel')){
    imageEl.innerHTML = `<img src="${images[0]}" alt="default">`
    }
}
startImage();

// Run a function to place bets

function betMin(){
    play(min)
}

function betMax(){
    play(max)
}

function play(bet){
    
    // math.random to pick item
    let slot1 =  images[Math.floor(Math.random()* images.length )]
    let slot2 = images[Math.floor(Math.random()* images.length)]
    let slot3 = images[Math.floor(Math.random()* images.length)]
    document.querySelector('.slot1').innerHTML = `<img src="${slot1}" alt="default">`
    document.querySelector('.slot2').innerHTML = `<img src="${slot2}" alt="default">`
    document.querySelector('.slot3').innerHTML = `<img src="${slot3}" alt="default">`
    console.log(slot1, slot2, slot3)
        if( wallet < bet){
            alert ("Not Enough Funds")
            return;
        }
        // if 1 ===2= || 2==3
                // add to total
                // UPDATE dom to show new total
                // say you win
        // else 
            //subtract from total
            // UPDATE dom to show new total
            // say you lose 
        if(slot1 === slot2 && slot2 === slot3){
            document.getElementById('message').innerText = "You Win!"
            document.getElementById('wallet').innerText = wallet += bet
        }else{ 
            document.getElementById('message').innerText = "You Lost!"
            document.getElementById('wallet').innerText = wallet -= bet
        }
        
}


//     let slot1 =  images[Math.floor(Math.random()* images.length )]
//     let slot2 = images[Math.floor(Math.random()* images.length)]
//     let slot3 = images[Math.floor(Math.random()* images.length)]
//     console.log(slot1, slot2, slot3)
//     if( wallet < max){
//         alert ("Not Enough Funds")
//         return;
//     }
//         if(slot1 === slot2 && slot2 === slot3){
//             document.getElementById('message').innerText = "You Win!"
//             document.getElementById('wallet').innerText = wallet += max
//     }else{ 
//         document.getElementById('message').innerText = "You Lost!"
//         document.getElementById('wallet').innerText = wallet -= max
//     }
// }
























// function winBet(){
//     wallet + wallet * (bet * 2)
// }

// // Update the wallet

// // when you spin the wheel, a random image will be selected
// function spinWheel(){
//     let index = Math.floor(Math.random(4) * images.length)
// }

// // when you click on the spin button, you start the game
// function spinButton(){
//     // check if all the results are the same
//     if(results[0] === results[1]=== results[2]){
//         h2.innerText = "You Win!"
//         wallet += amount
//     }else h2.innerText = "Try Again!"
//         wallet -= amount
// }



