var c1_votes = sessionStorage.getItem("c1_votes") ? parseInt(sessionStorage.getItem("c1_votes")) : 0;
var c2_votes = sessionStorage.getItem("c2_votes") ? parseInt(sessionStorage.getItem("c2_votes")) : 0;
var c3_votes = sessionStorage.getItem("c3_votes") ? parseInt(sessionStorage.getItem("c3_votes")) : 0;
var poll_name = "";
var cand_1 = "";
var cand_2 = "";
var cand_3 = "";

if (sessionStorage.getItem("poll-name") !== null) {
    $(".poll-name").text(sessionStorage.getItem("poll-name"));
    $(".poll-name-res").text(sessionStorage.getItem("poll-name"));
}

if (sessionStorage.getItem("c1-name") !== null) {
    $("#cn-1").text(sessionStorage.getItem("c1-name"));
    $(".c1-nme").text(sessionStorage.getItem("c1-name") + ":");
}

if (sessionStorage.getItem("c2-name") !== null) {
    $("#cn-2").text(sessionStorage.getItem("c2-name"));
    $(".c2-nme").text(sessionStorage.getItem("c2-name") + ":");
}

if (sessionStorage.getItem("c3-name") !== null) {
    $("#cn-3").text(sessionStorage.getItem("c3-name"));
    $(".c3-nme").text(sessionStorage.getItem("c3-name") + ":");
}

if (sessionStorage.getItem("c1_votes") !== null) {
    $(".c1-votes").text(c1_votes + " votes");
}

if (sessionStorage.getItem("c2_votes") !== null) {
    $(".c2-votes").text(c2_votes + " votes");
}

if (sessionStorage.getItem("c3_votes") !== null) {
    $(".c3-votes").text(c3_votes + " votes");
}

// Update vote counts in real-time
function updateVotes() {
    $(".c1-votes").text(c1_votes + " votes");
    $(".c2-votes").text(c2_votes + " votes");
    $(".c3-votes").text(c3_votes + " votes");
}

$(".btn-1").click(function () {
    c1_votes++;
    sessionStorage.setItem("c1_votes", c1_votes);
    alert("You have voted for " + $("#cn-1").text());
    updateVotes();
});

$(".btn-2").click(function () {
    c2_votes++;
    sessionStorage.setItem("c2_votes", c2_votes);
    alert("You have voted for " + $("#cn-2").text());
    updateVotes();
});

$(".btn-3").click(function () {
    c3_votes++;
    sessionStorage.setItem("c3_votes", c3_votes);
    alert("You have voted for " + $("#cn-3").text());
    updateVotes();
});

// Reset Button Functionality
$(".reset-btn").click(function () {
    sessionStorage.setItem("c1_votes", 0);
    sessionStorage.setItem("c2_votes", 0);
    sessionStorage.setItem("c3_votes", 0);
    c1_votes = 0;
    c2_votes = 0;
    c3_votes = 0;
    updateVotes();
    alert("All votes have been reset!");
});