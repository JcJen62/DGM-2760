document.querySelector("#companyName").innerText = "The Arborist";
document.querySelector("#companyMoto").innerText = "Gotta love trees!";

const trees = ["Oak", "Pine", "Aspen", "Bald Cypress"];
const errorElm = document.querySelector("#error");
const displayElm = document.querySelector("#displayResults");

const listTrees = (lowerTrees) => {
  if (lowerTrees) {
    let treeList = "";
    lowerTrees.forEach((tree) => {
      treeList += `${tree} <br>`;
    });
    displayElm.innerHTML = `${treeList} <span>${lowerTrees.length} elements long</span>`;
  } else {
    let treeList = "";
    trees.forEach((tree) => {
      treeList += `${tree} <br>`;
    });
    displayElm.innerHTML = `${treeList} <span>${trees.length} elements long</span>`;
  }
};

listTrees();

//Adding Trees
document.querySelector("#addTreeEnd").onclick = () => {
  trees.push("Redwood");
  listTrees();
};

document.querySelector("#addTreeStart").onclick = () => {
  trees.unshift("Pear");
  listTrees();
};

//Remove Trees
document.querySelector("#removeTreeOne").onclick = () => {
  if (trees.length > 0) {
    trees.shift();
    listTrees();
  } else {
    errorElm.textContent = "There are no trees to remove.";
  }
};

document.querySelector("#removeTreeTwo").onclick = () => {
  if (trees.length > 2) {
    trees.splice(1, 1);
    listTrees();
  } else if (trees.length === 1) {
    errorElm.textContent = "There is only one tree.";
  } else {
    errorElm.textContent = "There are no trees to remove.";
  }
};

document.querySelector("#removeTreeLast").onclick = () => {
  if (trees.length > 0) {
    trees.pop();
    listTrees();
  } else {
    errorElm.textContent = "There are no trees to remove.";
  }
};

//Manipulate Trees
document.querySelector("#sortTrees").onclick = () => {
  trees.sort();
  listTrees();
};

document.querySelector("#lowerCaseTrees").onclick = () => {
  let convertedTrees = trees.map((trees) => trees.toLowerCase());
  listTrees(convertedTrees);
};

//Display certain elements
document.querySelector('#showName3').onclick = () => {
  if (trees.length < 3){
    errorElm.textContent = "There are not 3 Trees."
  } else {
    displayElm.innerHTML = `The Third tree is a ${trees[2]}`
  }
}

document.querySelector('#showName4').onclick = () => {
  if (trees.length < 4){
    errorElm.textContent = "There are not 4 Trees."
  } else {
    displayElm.innerHTML = `The Third tree is a ${trees[3]}`
  }
}
