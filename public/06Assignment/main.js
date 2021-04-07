document.querySelector("#companyName").innerText = "Nonsense Story";
document.querySelector("#companyMoto").innerText = "You'll remember this one";

function tellStory(){
    let regex = /\s+/g;
    let nouns = document.getElementById('nouns').value.toLowerCase().split(regex);
    let adjectives = document.getElementById('adjectives').value.toLowerCase().split(regex);
    let verbs = document.getElementById('verbs').value.toLowerCase().split(regex);

    let storyHtml = "";
    let storyElement = document.getElementById('story');

    storyHtml += `<div>Once upon a time there were three <div class="highlight">${adjectives[0]}</div> <div class="highlight">${nouns[0]}</div>.</div>`;
    storyHtml += `<div>They decided to <div class="highlight">${verbs[0]}</div> to the <div class="highlight">${nouns[1]}</div>.</div>`;
    storyHtml += `<div>On their way they met <div class="highlight">${adjectives[1]}</div> <div class="highlight">${nouns[2]}</div>.</div>`;
    storyHtml += `<div><div class="highlight">${nouns[2]}</div> <div class="highlight">${verbs[1]}</div> them <div class="highlight">${adjectives[2]}</div> <div class="highlight">${nouns[3]}</div>.</div>`;
    storyHtml += `<div>The Three <div class="highlight">${nouns[0]}</div> were so happy they <div class="highlight">${verbs[2]}</div> all the way home.</div>`;

    storyElement.innerHTML = storyHtml;
}