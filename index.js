const element = document.createElement("div");

const mainElement = document.querySelector('main#main');
mainElement.parentNode.removeChild(mainElement);

const newHeader = document.createElement('h1');
newHeader.textContent = 'victory';
newHeader.setAttribute('id', 'victory');
newHeader.textContent = 'YOUR-NAME is the champion';

document.body.append(element);

const ul = document.createElement("ul");
for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.textContent = (i + 1).toString();
    ul.append(li);
  }

  element.append(ul);

const parentElement = mainElement.parentNode;

parentElement.removeChild("#main");

const main = document.getElementById("main");
main.innerHTML =
  "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";