function showResponse() {
    var responses = [
        "Have you prayed about it?",

"Have you been to a meeting today?",

"Pray, read pages 86-88, and call me back ",

"You can't feel your way into acting; you have to act your way into feeling.",

"What's your part in this?",

"Have you done a fourth step on this?",

"All you have to do is keep your side of the street clean.",

"Pray, drink a glass of water, eat something, and call me back.",

"Pray, do some dishes, and call me back.",

"Reach out to another alcoholic.",

"Have you thought about someone you can help?",
        "You can't stay sober on someone else's spirituality.",
        "Have you talked to your higher power today?"
    ];
    var response = responses[Math.floor(Math.random() * responses.length)];
    document.getElementById('answer').innerText = response;
}
window.onload = function() {
    // Check if the 'page_views' key exists in local storage
    if (localStorage.getItem("page_views")) {
        // If it exists, increase the count by 1
        localStorage.setItem("page_views", Number(localStorage.getItem("page_views")) + 1);
    } else {
        // If it doesn't exist, set the count to 1
        localStorage.setItem("page_views", 1);
    }

    // Display the count in the 'visitCount' element
    document.getElementById("visitCount").innerText = localStorage.getItem("page_views");
}
