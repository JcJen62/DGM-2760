document.querySelector("#companyName").innerText = "Inspector Clouseau";
document.querySelector("#companyMoto").innerText = "I Find all the answers";

function reDisplay() {
  let windowSizes = `Window size is ${window.innerWidth} pixel wide by ${window.innerHeight} pixels tall.`;
  let offset = `Window offset is ${window.screenX} from the left edge and ${window.screenY}and pixels from the top of the display.`;
  let windowURL = `This Windows URL is ${window.location}`;

  let myWindow = (document.querySelector("#myWindow").innerHTML =
    windowSizes + "<br>" + offset + "<br>" + windowURL);
}

reDisplay()

let title = `The document title is: ${document.title}`
let updated = `The site was last updated: ${document.lastModified}`

let myDocument = document.querySelector("#myDocument").innerHTML = title + "<br>" + updated