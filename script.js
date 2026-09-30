* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #0b0b0b;
    color: white;
}


/* =========================
   CABEÇALHO
========================= */

header {
    width: 100%;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 8%;

    background: #0b0b0b;

    border-bottom: 1px solid #222;
}

.logo {
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 2px;
}

nav {
    display: flex;
    gap: 30px;
}

nav a {
    color: white;
    text-decoration: none;
    font-size: 14px;

    transition: 0.3s;
}

nav a:hover {
    color: #d4af37;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 650px;

    display: flex;
    align-items: center;

    padding: 80px 8%;

    background:
        linear-gradient(
            90deg,
            #0b0b0b 0%,
            #111111 60%,
            #181818 100%
        );
}

.hero-content {
    max-width: 650px;
}

.small-title {
    color: #d4af37;

    font-size: 13px;

    letter-spacing: 3px;

    margin-bottom: 20px;
}

.hero h1 {
    font-size: 70px;

    line-height: 1.05;

    margin-bottom: 25px;
}

.hero p {
    font-size: 18px;

    line-height: 1.7;

    color: #cfcfcf;

    margin-bottom: 35px;
}


/* =========================
   BOTÕES
========================= */

.button {
    display: inline-block;

    padding: 16px 30px;

    background: #d4af37;

    color: #000;

    text-decoration: none;

    font-weight: bold;

    border-radius: 5px;

    transition: 0.3s;
}

.button:hover {
    background: #f0cf55;

    transform: translateY(-2px);
}


/* =========================
   SERVIÇOS
========================= */

.services {
    padding: 100px 8%;

    text-align: center;

    background: #111;
}

.section-title {
    color: #d4af37;

    font-size: 13px;

    letter-spacing: 3px;

    margin-bottom: 15px;
}

.services h2,
.about h2,
.contact h2 {
    font-size: 42px;

    margin-bottom: 50px;
}

.service-container {
    display: flex;

    justify-content: center;

    gap: 25px;

    flex-wrap: wrap;
}

.service-card {
    width: 300px;

    padding: 35px 25px;

    background: #181818;

    border: 1px solid #292929;

    border-radius: 8px;

    transition: 0.3s;
}

.service-card:hover {
    transform: translateY(-8px);

    border-color: #d4af37;
}

.service-card h3 {
    font-size: 22px;

    margin-bottom: 15px;
}

.service-card p {
    color: #aaa;

    line-height: 1.6;

    margin-bottom: 20px;
}

.service-card strong {
    color: #d4af37;

    font-size: 24px;
}


/* =========================
   SOBRE
========================= */

.about {
    padding: 100px 8%;

    background: #0b0b0b;

    max-width: 1100px;

    margin: auto;
}

.about h2 {
    margin-bottom: 25px;
}

.about p:not(.section-title) {
    color: #bbb;

    font-size: 17px;

    line-height: 1.8;

    margin-bottom: 15px;

    max-width: 700px;
}


/* =========================
   CONTATO
========================= */

.contact {
    padding: 100px 8%;

    text-align: center;

    background: #111;
}

.contact h2 {
    margin-bottom: 20px;
}

.contact > p:not(.section-title) {
    color: #bbb;

    margin-bottom: 30px;

    line-height: 1.7;
}

.location {
    margin-top: 30px;

    color: #aaa;
}


/* =========================
   RODAPÉ
========================= */

footer {
    padding: 30px;

    text-align: center;

    background: #050505;

    color: #777;

    font-size: 13px;

    line-height: 2;
}


/* =========================
   CELULAR
========================= */

@media (max-width: 768px) {

    header {
        height: auto;

        padding: 25px;

        flex-direction: column;

        gap: 20px;
    }

    nav {
        gap: 15px;

        flex-wrap: wrap;

        justify-content: center;
    }

    nav a {
        font-size: 13px;
    }

    .hero {
        min-height: 600px;

        padding: 60px 25px;

        text-align: center;

        justify-content: center;
    }

    .hero h1 {
        font-size: 48px;
    }

    .hero p {
        font-size: 16px;
    }

    .services,
    .about,
    .contact {
        padding: 70px 25px;
    }

    .services h2,
    .about h2,
    .contact h2 {
        font-size: 32px;
    }

    .service-card {
        width: 100%;
        max-width: 350px;
    }
}