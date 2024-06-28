function showResponse() {
    var responses = [
        "Yes, definitely!",
        "No, not a chance.",
        "Ask again later.",
        "It is certain.",
        "Better not tell you now.",
        "Concentrate and ask again.",
        "Very doubtful.",
        "Outlook good."
    ];
    var response = responses[Math.floor(Math.random() * responses.length)];
    document.getElementById('answer').innerText = response;
}
