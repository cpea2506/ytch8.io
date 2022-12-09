<script>
    import FaCheckCircle from 'svelte-icons/fa/FaCheckCircle.svelte';
</script>

<style>
    .wrapper__break {
        width: 100%;
        height: 50px;
        margin-top: 20px;
        text-align: center;
        /* vertical-align: middle; */
    }
    .icon {
        width: 30px;
        height: 30px;
        display: inline-block;
    }

    .line {
        width: 53px;
        height: 0;
        border: 1px solid #C4C4C4;
        margin: 0px 3px;
        margin-bottom: 15px;
        display:inline-block;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }
    .wrap__content {
        display: flex;
        margin-bottom: 10px;
    }
    
    .text__content {
        flex: 1;
        margin-right: 10px;
        background-color: #e8e3e3;
    }
    .wrap__image {
        flex: 1;
        margin-right: 10px;
    }

    .wrap__image .image{
        height: 100%;
    }
    .content__title {
        border: 1px solid #C4C4C4;
        text-align: center;
        background-color: #e06c75;
        color: #fff;
    }

    .content__second__title {
        border: 1px solid #C4C4C4;
        text-align: center;
        background-color: #98c379;
        color: #fff;
    }

    .content__tri__title{
        border: 1px solid #C4C4C4;
        text-align: center;
        background-color: #61afef;
        color: #fff;
    }

    .content__fourth__title{
        border: 1px solid #C4C4C4;
        text-align: center;
        background-color: #e5c07b;
        color: #fff;
    }

    .list__type {
        list-style-type: circle;
        margin-left: 40px;
        padding: 5px;
    }

    .list__type__nested{
        list-style-type: cjk-ideographic;
        margin-left: 40px;
    }
    .header {
        margin-bottom: 10px;
    }

    .footer {
        width: 100%;
        background-color: #ccc;
    }

    .footer__img {
        height: 200px;
    }
</style>

<div> 
    <!-- Header -->
    <div class="header">
        <h1 class="text-4xl font-bold text-center m-10"> Welcome to Ytch8.io </h1>
        <div class="wrapper__break">
            <div class="line"></div>
            <div class="icon"><FaCheckCircle /></div>
            <div class="line"></div>
        </div>
        <h4 class="text-center text-lg ">These are some litle thing about us!</h4>
    </div>

    <!-- Content -->
    <div class="content">
        <!-- Intro -->
        <div class="wrap__content"> 
            <div class="wrap__image"> 
                <img src="https://img.freepik.com/vector-premium/juega-juegos-diviertete-letrero-neon-almohadilla-juego-letrero-luminoso-banner-luz-logo-juego-emblema-neon-ilustracion-vectorial_136277-880.jpg" alt="img" class="image" />
            </div>

            <div class="text__content"> 
                <div class="content__title font-bold text-4xl mb-5 p-10"> What is Ytch8? </div>
                <div class="content__text">
                    <ul class="list__type"> 
                        <li class="text-xl font-semibold mb-5">Ytch8 is the website for gamer who want to 
                            experience diversity type of game</li>
                        <li class="text-xl font-semibold mb-5">This website is also a good environment for independent developers 
                            independent studio to deploy their product that have no fame, a good start for a good future!
                        </li>
                        <li class="text-xl font-semibold mb-5">
                            Ytch8 is also mean: Youth, Talent, Competitive, Hard-working and Infinity Pation!
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
        <!-- Member -->
        <div class="wrap__content"> 
            <div class="text__content"> 
                <div class="content__second__title font-bold text-4xl mb-5 p-10"> Member </div>
                <div > 
                    <ul class="list__type">
                        <li class="text-xl font-semibold mb-5">Do Ngoc Anh Vien or known as Au Duong Vim
                            <ul class="list__type__nested">
                                <li>he is very friendly and have a nice sense of humor</li>
                                <li>very active and iager to learn new technologies that support our website</li>
                            </ul>
                        </li>
                        <li class="text-xl font-semibold mb-5">Hau Kien Tin or known as MAL
                            <ul class="list__type__nested">
                                <li>he is very friendly and have a nice sense of humor</li>
                                <li>very active and iager to learn new technologies that support our website</li>
                            </ul>
                        </li>
                        <li class="text-xl font-semibold mb-5">Nguyen Khang Duy or known as Khang Dui
                            <ul class="list__type__nested">
                                <li>he is very friendly and have a nice sense of humor</li>
                                <li>very active and iager to learn new technologies that support our website</li>
                            </ul>
                        </li>
                        <li class="text-xl font-semibold mb-5 ">Nguyen Thanh Tuong or known as Tuong-student
                            <ul class="list__type__nested">
                                <li>he is very friendly and have a nice sense of humor</li>
                                <li>very active and iager to learn new technologies that support our website</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="wrap__image"> 
                <img src="https://www.shutterstock.com/image-vector/continuous-line-drawing-four-jumping-260nw-1504885985.jpg" alt="img" class="image"/>
            </div>
        </div>
        <!-- Target -->
        <div class="wrap__content"> 
            <div class="wrap__image"> 
                <img src="https://thumbs.dreamstime.com/b/d-render-two-arrows-hit-center-target-dartboard-blue-background-minimal-business-finance-concept-rendering-249134907.jpg" alt="img" class="image" />
            </div>

            <div class="text__content"> 
                <div class="content__tri__title font-bold text-4xl mb-5 p-10 ">Target </div>
                <div class="content__text">
                    <ul class="list__type"> 
                        <li class="text-xl font-semibold mb-5">Welcome more gamers who want to experience independent games</li>
                        <li class="text-xl font-semibold mb-5">Give more chances and comfortable environment for developers that
                            they cant satisfy their creativity mind.
                        </li>
                        <li class="text-xl font-semibold mb-5">
                            Will and always made a friendly website for everyone and never give up, believe in friendship will make
                            stronger.
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
<!-- thank you -->
        <div class="wrap__content"> 
            
            <div class="text__content"> 
                <div class="content__fourth__title font-bold text-4xl mb-5 p-10 ">Epilogue</div>
                <div class="content__text">
                    <ul class="list__type"> 
                        <li class="text-xl font-semibold mb-5">Thanks everyone for using and believe our website. It was a big effort for us
                            to maintain and upgrade this website for your convinience.
                        </li>
                        <li class="text-xl font-semibold mb-5">Please follow us and stay stun for more suprise in the future!
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="wrap__image"> 
                <img src="https://wallpapercave.com/wp/wp7801035.jpg" alt="img" class="image" />
            </div>
        </div>

    </div>

    <!-- Break Footer -->
    <div class="wrapper__break">
        <div class="line"></div>
        <div class="icon"><FaCheckCircle /></div>
        <div class="line"></div>
    </div>
    <!-- Footer -->
    <div class="footer"> 
    </div>


    
</div>