function showResponse() {
    var responses = [
        ""Have you prayed about it?"",

""Have you been to a meeting today?"",

"Pray, read pages 86-88, and call me back ",

"You can't feel your way into acting; you have to act your way into feeling.",

"What's your part in this?",

"Have you done a fourth step on this?",

"All you have to do is keep your side of the street clean.",

"Pray, drink a glass of water eat something, and call me back.",

"Pray, do some dishes, and call me back.",

"Reach out to another alcoholic.",

"Have you thought about someone you can help?"
    ];
    var response = responses[Math.floor(Math.random() * responses.length)];
    document.getElementById('answer').innerText = response;
}
