function init() {
    showReviews();
    renderHeader();
    renderFooter();
}

function loadOffer() {
    renderHeader();
    renderFooter();
}
function loadAbout() {
    renderHeader();
    renderFooter();
}

function renderHeader() {
    document.getElementById('header').innerHTML = headerHTML();
}

function renderFooter() {
    document.getElementById('footer').innerHTML = footerHTML();
}

function openHome() {
    window.location.href = "index.html";
}

function openOffer() {
    window.location.href = "offer.html";
}

function openAbout() {
    window.location.href = "about.html";
}

function openImpressum() {
    window.location.href = "impressum.html";
}

function openAGB() {
    window.location.href = "agb.html";
}

function openDatenschutz() {
    window.location.href = "datenschutz.html";
}

function openBlog() {
    window.location.href = "https://lisasofiemros-communications.com/blog/";
}

function headerHTML() {
    return /*HTML*/`
            <div>
            <img onclick="openHome()" class="logo" src="img/logo.png">
        </div>
        <div class="menu">
            <span class="menu-link" onclick="openHome()">HOME</span>
            <span class="menu-link" onclick="openOffer()">ANGEBOT</span>
            <span class="menu-link" onclick="openAbout()">ÜBER MICH</span>
            <span class="menu-link" onclick="openBlog()">BLOG</span>
            <a class="phonebutton" href="tel:0170 5888097">
                <img class="icon" src="img/phone_black.png" alt="">
            </a>
            <a class="link" href="mailto:lisa.sofie.mros@gmail.com">
                <img class="icon" src="img/email_black.png" alt="">
            </a>
            <div class="burger-menu" onclick="openBurgerMenu()">
                <div class="burger-row"></div>
                <div class="burger-row"></div>
                <div class="burger-row"></div>
            </div>
        </div>`
}

function footerHTML() {
    return /*HTML*/`
    <div class="footer-left">
            <span onclick="openAGB()" class="footer-link">AGB</span>
            <span onclick="openImpressum()" class="footer-link">IMPRESSUM</span>
            <span onclick="openDatenschutz()" class="footer-link">DATENSCHUTZ</span>
        </div>

        <div class="footer-right-section">
            <div class="footer-right">
                <span class="footer-typo">SOCIAL MEDIA</span>
                <div class="icon-section-footer">
                    <a href="https://www.facebook.com/lisasofiemros" target="_blank">
                    <img class="icon-footer" src="./img/icons_white/facebook_icon_white.png" alt="Facebook">
                    </a>
                    <a href="https://www.instagram.com/lisasofie.mros" target="_blank">
                    <img class="icon-footer" src="./img/icons_white/instagram_icon_white.png" alt="Instagram">
                    </a>
                    <a href="https://www.linkedin.com/in/lisa-sofie-mros-5972288b?challengeId=AQEakB-6QOni_AAAAY6aSmjgOjoe3RejgvRfJ2VV3iFKEvAqNMFUCB2hjLaF2d6Dj0qVIIH4X5e2vW3dOMLrHIFPBKZ9F2Ay3Q&submissionId=1b55a2ca-c931-c217-65ea-274459a43d39&challengeSource=AgGGkwZzSaCGVwAAAY6aTCUSsYb610SNdJOgctvsWzKB1xqr-b4ugwcrGcX-6YI&challegeType=AgH6kxeC8URCYgAAAY6aTCUV19gDWI65gRLbSolDSOEOJ88dixH37lI&memberId=AgHQzZaqoGVhXgAAAY6aTCUYRHPNRMINOAvWArg8L9xO2gY&recognizeDevice=AgEdtd-nuiwckwAAAY6aTCUb6MRMF7YaKChCOC9fH97PuM7tnKGM" target="_blank">
                    <img class="linkedin-icon" src="./img/icons_white/linkedin_icon_blue.png" alt="Linkedin">
                    </a>
                    <a href="https://www.youtube.com/channel/UCoCo-n_UFDB2vidxGD93uAA/featured" target="_blank">
                    <img class="icon-footer" src="./img/icons_white/youtube_icon_white.png" alt="Youtube">
                    </a>
                </div>
            </div>

            <div class="footer-right">
                <span class="footer-typo">PODCAST</span>
                <div class="icon-section-footer">
                <a href="https://music.amazon.com/podcasts/9bdc81e1-b38e-4762-8c6e-6ce6dab51a4c/give-your-vision-your-voice" target="_blank">
                    <img class="icon-footer" src="./img/icons_white/amazon_music_icon_white_square.png" alt="Amazonmusic">
                    </a>
                    <a href="https://open.spotify.com/show/4OqJzc2Hghpq08Bg7zypGC" target="_blank">
                    <img class="icon-footer" src="./img/icons_white/spotify_icon_white.png" alt="Spotify">
                    </a>
                    <a href="https://podcasts.apple.com/us/podcast/give-your-vision-your-voice/id1649232398" target="_blank">
                    <img class="icon-footer" src="./img/icons_white/apple_podcast_icon_white.svg" alt="ApplePodcast">
                    </a>
                </div>
            </div>
        </div>`
}

let reviews = [
    {
        'text': 'Ich war von meinen Bewerbungsschreiben nicht überzeugt - es fehlte mir dieses „Na klar bin ich die, die ihr sucht!“-Gefühl. Als ich die Texte zurückbekam, war ich sprachlos: Lisa hat mit ihren Worten einfach genau meine Vibes getroffen.',
        'author': 'Luisa Spengler',
        'job': 'ERNÄHRUNGSBERATERIN',

    },
    {
        'text': 'Lisa ist ein absoluter Kommunikations-, Marketing- & Motivations-Profi - und das auf eine wertschätzende, leichte Art! Ich vertraue ihr zu 120%, denn ich spüre mit jedem Wort und in jeder Geste: Sie weiß & lebt, wovon sie spricht',
        'author': 'Nastasja Kienast',
        'job': 'HUNDETRAINERIN + BERATERIN',

    },
    {
        'text': 'Lisa hat uns bei der Erstellung eines bedeutenden Pressetextes unterstützt. Wir haben einen großartigen Entwurf zusätzlich mit wertvollen Tipps & Gedanken erhalten, den wir 1:1 so übernommen haben.',
        'author': 'Franziska Ehlers & Marie Spang',
        'job': 'BERATERINNEN',

    },

    {
        'text': 'Lisa hat mich bei der Erstellung eines Pressetextes unterstützt, sowie Tipps und Hilfestellung im Umgang mit den sozialen Netzwerken gegeben. Sie liebt und lebt was sie tut, ist sehr zuverlässig und hat immer wieder neue Ideen. Ich freue mich auf die weitere Zusammenarbeit.',
        'author': 'Marie S.',
        'job': 'TRAINERIN & COACH',

    },

    {
        'text': 'Lisa hat uns super beraten und bereits mehrere Texte für unsere Kundenansprache erstellt. Ob klassische Werbemittel oder digitaler Content, hier versteht ein Profi sein Werk! Wir freuen uns auf weitere Zusammenarbeit!',
        'author': 'Robert Zelgin',
        'job': 'UNTERNEHMENSINHABER',

    },
]

function showReviews() {
    for (let i = 0; i < 3; i++) {
        document.getElementById('review').innerHTML += `
        <div class="review-block">
        <span class="review-text">${reviews[i]['text']}</span>
        <span class="author">${reviews[i]['author']}</span>
        <span class="job-title">${reviews[i]['job']}</span>
        </div>
    `
    }
}

let currentIndex = 0;

function slightright() {
    document.getElementById('review').innerHTML = '';
    currentIndex = (currentIndex + 1) % reviews.length;  // Aktualisieren des aktuellen Index für die nächste Anzeige
    for (let i = currentIndex; i < currentIndex + 3; i++) {
        const review = reviews[i % reviews.length]; // Verwenden des Modulo-Operators, um von vorne zu beginnen, wenn das Ende erreicht ist
        document.getElementById('review').innerHTML += `
            <div class="review-block">
                <span class="review-text">${review['text']}</span>
                <span class="author">${review['author']}</span>
                <span class="job-title">${review['job']}</span>
            </div>
        `;
    }

}

function slightleft() {
    document.getElementById('review').innerHTML = '';
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    for (let i = currentIndex; i < currentIndex + 3; i++) {
        const reviewIndex = (i + reviews.length) % reviews.length; // Wenn i negativ ist, wird er durch Hinzufügen der Länge des Arrays wieder positiv
        const review = reviews[reviewIndex];
        document.getElementById('review').innerHTML += `
            <div class="review-block">
                <span class="review-text">${review['text']}</span>
                <span class="author">${review['author']}</span>
                <span class="job-title">${review['job']}</span>
            </div>
        `;
    }
}

function openBurgerMenu() {
   document.getElementById('burgermenu').classList.remove('burgermenu-closed');
   document.getElementById('burgermenu').classList.add('burgermenu-open');
   
}

function closeBurgerMenu() {
    document.getElementById('burgermenu').classList.remove('burgermenu-open');
    document.getElementById('burgermenu').classList.add('burgermenu-closed');

}

window.addEventListener("load", function(){
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "rgb(242, 151, 151)",
                "text": "white",
            },
            "button": {
                "background": "rgb(242, 151, 151)",
            }
        },
        "theme": "edgeless",
        "content": {
            "message": "Wir verwenden Cookies auf der Website, um Ihren Besuch effizienter zu machen und Ihnen Benutzerfreundlichkeit bieten zu können.",
            "dismiss": "OK",
            "link": "Informationen",
            "href": "https://lisasofiemros-communications.com/datenschutz.html"
        }
    });
});

