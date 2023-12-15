

var quote = [
    `"You miss 100% of the shots you don't take."`,
    '"Resentment is like drinking poison and waiting for your enemies to die."',
    ` "It's not what happens to you, but how you react to it that matters." `,
    '"Do not take life too seriously. You will not get out alive."',
    '"The best revenge is massive success."',
]

var userName = ["--Wayne Gretzy", "--Nelson Mandela", "--Epictetus", "--Elbert Hubbard", "--Frank Sinatra"]

var num ;
var previousWisdomIndex = null;
function oneQuote() {

    do{
        num = Math.floor(Math.random() * userName.length);
    }
    while(num == previousWisdomIndex)
    previousWisdomIndex = num;
    document.getElementById("quotes").innerHTML = quote[num];
    document.getElementById("user").innerHTML = userName[num];
}