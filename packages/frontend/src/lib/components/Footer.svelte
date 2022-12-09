<svelte:head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=devicex-width, initial-scale=1.0" />
    <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        rel="stylesheet"
    />
    <title>Document</title>
</svelte:head>
<main class="main-section" />

<footer class="footer-sec">
    <div class="main">
        <div class="logo row">
            <div class="footer-header">
                <img src="/images/logo.svg" class="manik" alt="" />
            </div>
            <div class="logo-des">
                <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour.
                </p>

                <a href="/" class="btn-know">Know More</a>
            </div>
        </div>

        <div class="office row">
            <div class="footer-header">
                <h3>Office</h3>
            </div>
            <div class="office-des">
                <p>
                    here are <br /> many variations of passages<br />of Lorem
                    Ipsum<br />available
                </p>

                <a href="/">ytch8.io@gmail.com</a>

                <p class="num">1900 100 bik</p>
            </div>
        </div>

        <div class="link row">
            <div class="footer-header">
                <h3>Links</h3>
            </div>

            <div class="link-des">
                <a href="/" class="footer-links">Home</a>
                <a href="/about" class="footer-links">About</a>
                <a href="#category" class="footer-links">Galery</a>
            </div>
        </div>

        <div class="newsletter row">
            <div class="footer-header">
                <h3>Newsletter</h3>
            </div>
            <div class="newsletter-des">
                <div class="subcribe">
                    <i class="sub-icon ri-mail-check-fill text-white" />
                    <input type="mail" placeholder="Enter Email ID" required />
                    <i class="sub-icon ri-arrow-right-line" />
                </div>
                <div class="icons">
                    <a href="/"><i class="social-icon ri-facebook-fill" /></a>
                    <a href="/"><i class="social-icon ri-instagram-line" /></a>
                    <a href="/"><i class="social-icon ri-linkedin-fill" /></a>
                    <a href="/"><i class="social-icon ri-github-line" /></a>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright">
        <hr />

        <p>© Copyright 2022 Game Tech.</p>
    </div>
</footer>

<style lang="scss">
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: "Poppins", sans-serif;
    }

    footer {
        margin-top: 14px;
        color: #fff;
        background-image: linear-gradient(90deg, #98c379 0%, #e06c75 100%);
        width: 100%;
        height: 100%;
        font-size: 0.8rem;
    }

    @media (max-width: 960px) {
        footer {
            width: 100%;
            top: 120px;
        }

        .main {
            margin: 50px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr 1fr;
        }

        .logo {
            grid-column: 1/3;
        }

        .office {
            grid-column: 3/5;
        }
        .link {
            grid-column: 1/3;
        }
    }

    @media (max-width: 660px) {
        .main {
            gap: 10px;
            margin: 0;
        }

        .icons {
            display: flex;
        }

        .row {
            grid-column: 1/4;
        }
    }

    .manik {
        width: 120px;
    }
    .main {
        margin: 50px;
        padding-top: 20px;
        padding-bottom: 50px;
        display: grid;
        gap: 50px;
        grid-template-columns: repeat(4, 1fr);
    }
    .row {
        margin-top: 50px;
    }
    .footer-header {
        font-size: 1.5rem;
        margin-bottom: 20px;
    }

    .office-des {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .office a {
        text-decoration: none;
        color: #292c34;
    }
    .num {
        font-size: 1rem;
        font-weight: 500;
    }
    .link-des a {
        color: #fff;
        text-decoration: none;
        font-size: 1rem;
    }

    .icons a {
        text-decoration: none;
        color: #fff;
        border: 1px solid #fff;
        justify-content: center;
        padding: 10px;
        border-radius: 50%;
        align-items: center;
        font-size: 1.1rem;
        margin: 2%;
    }

    .office a:hover {
        color: #fff;
    }

    .link-des {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .link-des a:hover {
        color: #fb2576;
        transition: linear 0.3s;
    }

    .btn-know {
        text-decoration: none;
        padding: 10px;
        position: relative;
        top: 30px;
        background-color: transparent;
        border: 1px solid #282c34;
        color: #282c34;
        text-transform: uppercase;
        border-radius: 10px;
    }

    .btn-know:hover {
        color: white;
        background-color: #282c34;
        transition: linear 0.3s;
    }
    .subcribe {
        display: flex;
    }
    input[type="mail"] {
        border: none;
        padding-bottom: 5px;
        border-bottom: 1px solid #fff;
        background-color: transparent;
        font-size: 0.8rem;
    }
    .sub-icon {
        margin: 7px;
        margin-right: 15px;
        margin-left: 0;
        font-size: 1.5rem;
    }
    .ri-arrow-right-line {
        margin-left: 0;
    }

    .social-icon {
        position: relative;
        top: 2px;
    }
    .icons a:hover {
        color: #fff;
        background-color: #fb2576;
        border-color: #fb2576;
    }
    .newsletter-des {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .copyright {
        text-align: center;
    }

    hr {
        width: 90%;
        margin: 2px auto;
        opacity: 40%;
        border: 0.01px solid white;
    }

    .copyright p {
        padding: 20px;
    }
</style>
