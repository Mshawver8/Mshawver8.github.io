function showResponse() {
    var responses = [
        "Have you prayed about it?",
                "Have you been to a meeting today?",
                "Pray, read pages 86-88, and call me back ",
                "You can't think your way into acting; you have to act your way into thinking.",
                "What's your part in this?",
                "Have you done a fourth step?",
                "All you have to do is keep your side of the street clean ",
                "Pray, drink a glass of water  eat something, and take a shower  and call me back."
                "Pray, do some dishes, and call me back."
          "Reach out to another alcoholic."
          "Who can you help?"
    ];
    var response = responses[Math.floor(Math.random() * responses.length)];
    document.getElementById('answer').innerText = response;
}
