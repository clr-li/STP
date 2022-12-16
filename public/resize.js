const dropdown = document.getElementById('dropdown');
let dropped = false;
function show() {
    dropped = !dropped;
}

function displayMenu() {
    if (dropdown.classList.contains('Active')) {
        dropdown.classList.remove('Active');
        dropped = false;
    } else if (dropped) {
        dropdown.classList.add('Active');
    }
}
window.onclick = displayMenu;
// complicated code to ensure dropdown closes when menu button is hit or any of the rest of the page is hit but the links still work on mobile browsers:
window.addEventListener('touchend', (e) => {
  if (e.target.tagName !== 'A' && dropped) {
    displayMenu();
    // e.target.click();
    document.getSelection().removeAllRanges(); // deselect menu button
    e.preventDefault();
  }
});

const links = document.getElementById('links');
function resize() {
    if (window.innerWidth < 768) {
        links.innerHTML = navlinkshort;
    } else {
        links.innerHTML = navlinkslong;
    }
    try { document.getElementById('carousel').height = document.getElementById('carousel').contentWindow.document.body.scrollHeight; } catch {}
}
resize();

function resizeFooter() {
    let height = document.getElementById('footer').offsetHeight;
    document.getElementById('content').style.minHeight = window.document.body.offsetHeight - height - 50 + 'px';
}
resizeFooter();

window.onresize = () => { resize(); resizeFooter(); };
window.onload = () => { window.dispatchEvent(new Event('resize')); };