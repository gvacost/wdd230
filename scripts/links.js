const baseURL= "https://github.com/gvacost/wdd230";
const linksURL = "https://raw.githubusercontent.com/gvacost/wdd230/main/data/links.json"
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

        name.textContent = `${week.week}: `;

        week.links.forEach((link) => {
            
            const linkAnchor = document.createElement('a');
            linkAnchor.href = link.url;
            linkAnchor.textContent = ` ${link.title} | `;
            name.appendChild(linkAnchor);

        });
        sect.appendChild(name)
    });

};

displayLinks();