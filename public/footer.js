const html = `
<div class="row">
    <div class="colbig">
        <img src="/assets/logo.png" onclick="window.location = '/'"></img>
    </div>
    <div class="colsmall">
        <h2>Get started</h2>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/notimplemented.html?feature=K-12 Tutoring, Test Prep, and Music Lessons">Tutoring Services</a></li>
            <li><a href="/contact.html">Contact</a></li>
        </ul>
    </div>
    <div class="colsmall">
        <h2>About Us</h2>
        <ul>
            <li><a href="/about.html#Our Mission">Our Mission</a></li>
            <li><a href="/about.html#Meet Our Tutors">Meet Our Tutors</a></li>
            <li><a href="/about.html#Reviews">Reviews</a></li>
        </ul>
    </div>
    <div class="colsmall">
        <h2>Support Us</h2>
        <ul>
            <li><a href="/portal.html">Tutor Portal</a></li>
            <li><a href="/join.html?feature=Join Us">Become a Tutor</a></li>
            <li><a href="/support.html">Donate</a></li>
        </ul>
    </div>
    <div class="colbig">
        <div class="social-networks">
            <a href="/notimplemented.html?feature=No Social Media Yet"><i class="fa fa-instagram"></i></a>
            <a href="tel:+1724383-6080"><i class="fa fa-phone"></i></a>
            <a href="mailto:info.seattletutoring@gmail.com"><i class="fa fa-envelope"></i></a>
        </div>
        <div style="text-align: center; margin-top: 8px; white-space: nowrap; width: fit-content; margin-left: -8px">
          <h3>Seattle Tutoring Partners</h3>
          <p>info.seattletutoring@gmail.com</p>
          <p>Seattle, WA 98195</p>
          <p>+1 (724) 383-6080‬</p>
        </div>
    </div>
    <div style="clear: both"></div>
</div>
<div class="footer-copyright">
    <p>© 2022. All rights reserved. Images, logos, and content cannot be used without permission.</p>
</div>
`;

let footer = document.createElement('footer');
footer.id = "footer";
footer.innerHTML = html;
document.body.appendChild(footer);