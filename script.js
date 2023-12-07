const possible_words = [
    "house",
    "cat",
    "car",
    "book",
    "phone",
    "laptop",
    "flower",
    "tree",
    "sun",
    "venus",
    "mountain",
    "amazon",
    "twitter",
    "fishing",
    "rain",
    "snow",
    "drive",
    "grass",
    "water",
    "campfire",
    "bottle",
    "table",
    "chair",
    "window",
    "doors",
    "keys",
    "clock",
    "agenda",
    "plant",
    "lamp"
];

var wotd_answer = possible_words[Math.floor(Math.random() * possible_words.length)];
console.warn(wotd_answer)

if (wotd_answer.includes(' ')) {
    alert('WOTD is more than one word')
}

var wotd_array = []
var wotd_guess = []

var lives = 10
var live_symbol = '♥'
var live_array = []

// forming array from letters
for (var i = 0; i < wotd_answer.length; i++) {
    wotd_array.push(wotd_answer[i])
}

function generateLives() {
    for (var i = 0; i < lives; i++) {
        live_array.push(live_symbol)
    }
    var lives_pre = document.getElementById('live_pre')
    var lives_am = document.getElementById('live_am')
    lives_pre.innerHTML = live_array.join(' ')
    lives_am.innerHTML = lives
}

function subtractLives() {
    lives -= 1
    live_array.pop()
    var lives_pre = document.getElementById('live_pre')
    var lives_am = document.getElementById('live_am')
    lives_pre.innerHTML = live_array.join(' ')
    lives_am.innerHTML = lives
    if (lives == 0) {
        var lost_game_confirm = confirm('You lost! The word was ' + wotd_answer + '. Do you want to play again?')
        if (lost_game_confirm == true) {
            location.reload()
        }
    }
}

// generate guessing fields
function generateGuessingFields() {
    for (var i = 0; i < wotd_array.length; i++) {
        wotd_guess.push('_')
    }
    var guessing_fields = document.getElementById('guessing_field')
    guessing_fields.innerHTML = wotd_guess.join(' ')
}

function guess() {
    var guessing_input = document.getElementById('letter').value
    if (guessing_input == '') {
        alert('Why you want to guess nothing? Are you really that bored? :(')
    }
    if (guessing_input.length > 1) {
        alert('Please guess only one letter at a time')
    }
    if (wotd_array.includes(guessing_input)) {
        for (var i = 0; i < wotd_array.length; i++) {
            if (wotd_array[i] == guessing_input) {
                wotd_guess[i] = guessing_input
            }
        }

        var guessing_fields = document.getElementById('guessing_field')
        guessing_fields.innerHTML = wotd_guess.join(' ')
        if (wotd_guess.join('') == wotd_answer) {
            var won_game_confirm = confirm('You won! Do you want to play again?')
            if (won_game_confirm == true) {
                location.reload()
            }
        }
    } else {
        subtractLives()
    }
}

document.addEventListener('DOMContentLoaded', function () {
    generateGuessingFields()
    generateLives()
})
