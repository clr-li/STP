const nav = [
    {
        text: 'Home',
        short: '🏠',
        url: '/'
    },
    {
        text: 'About',
        short: '&nbsp;&nbsp;👥',
        url: '/about.html'
    },
    {
        text: 'Tutoring',
        short: '📚',
        url: 'tutoring.html'
    },
    {
        text: 'Contact',
        short: '📧',
        url: '/contact.html'
    },
    {
        text: 'Donate',
        short: '💳',
        url: '/support.html'
    },
    {
        text: 'Join Us',
        short: '&#10781;',
        url: '/join.html'
    },
    {
        text: 'Portal',
        short: '🤝',
        url: '/portal.html'
    },
];

let navlinkshort = '';
navlinkshort += `<li><a href="${nav[0].url}" class="active">${nav[0].short}</a></li>`;
for (let i = 1; i < 4; i++)
    navlinkshort += `<li><a href="${nav[i].url}" class="active1">${nav[i].short}</a></li>`;
navlinkshort += '<div class="line"></div><li><a><i class="fa fa-bars" onclick="show()"></i></a></li>';

let navlinkslong = '';
navlinkslong += `<li><a href="${nav[0].url}" class="active">${nav[0].text}</a></li>`;
for (let i = 1; i < 4; i++)
    navlinkslong += `<li><a href="${nav[i].url}" class="active1">${nav[i].text}</a></li>`;
navlinkslong += '<div class="line"></div><li><a><i class="fa fa-bars" onclick="show()"></i></a></li>';

const navhtml = `
<nav class="navigation">
    <ul id="links"></ul>
</nav>
`;

let drophtml = '<div class="dropdown" id="dropdown">';
for (let i = 4; i < nav.length; i++)
    drophtml += `<div class="drop"><a href="${nav[i].url}">${nav[i].text}</a></div>`;
drophtml += '</div>';

document.body.innerHTML = navhtml + drophtml;