const baseURL= "https://github.com/gvacost/wdd230";
const linksURL = "https://github.com/gvacost/wdd230/blob/main/data/links.json"
const sect = document.querySelector('.card.l-a ul')

async function getLinks(){
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayLinks(data.weeks);
}

getLinks();

const displayLinks = (weeks) => {
    weeks.forEach((week, i) => {
        let name = document.createElement('li');

        name.textContent = `${week.week}`;

        const linksList = document.createElement('ul');

        week.links.forEach((link) => {
            const linkItem = document.createElement('li');
            const linkAnchor = document.createElement('a');
            linkAnchor.href = link.url;
            linkAnchor.textContent = link.title;
            linkItem.appendChild(linkAnchor);
            linksList.appendChild(linkItem);
        });
        name.appendChild(linksList);
        sect.appendChild(name)
    });

};

displayLinks();