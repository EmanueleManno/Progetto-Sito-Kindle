<!--SCRIPT-->
<script>
export default {

};
</script>

<!--TEMPLATE-->
<template>
    <!--Sezione Quattro-->
    <section class="section-four">
        <!--Parte alta della sezione-->
        <div class="testimonial-up container w-100">
            <!--Titolo e sottotitolo-->
            <div class="title-up">
                <!--Titolo-->
                <h2>What The Critics Say</h2>
                <!--Sottotitolo-->
                <h5>TESTIMONIALS FROM AROUND THE WORLD</h5>
            </div>
            <!--Bottone-->
            <div class="button-up">
                <button type="button" class="btn btn-warning text-white">Read all Testimonials</button>
            </div>
        </div>
        <!--Parte sotto della sezione-->
        <div class="testimonial-down container w-100">
            <!--Parte di sinistra con la testimonianza principale-->
            <div class="main-testimonial text-white h-100">
                <!--Titolo-->
                <div class="main-testimonial-title w-100">Best Author Of His Generation</div>
                <!--Testo-->
                <div class="main-testimonial-text w-100"><span>This book will change your perspective on
                        life</span>
                    <p>Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt. Maecenas eleifend congue
                        cursus.
                        In vitae enim quis sem pharetra.Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                    <p>Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor vulutpat. Nulla
                        quis lorem ut liber. Proin eget torto risus. Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Donec rutrum congue leo eget malesuada.</p>
                </div>
                <!--Firma-->
                <div class="main-testimonial-signature w-100">
                    <img src="../assets/materiale/images/nytimes-logo-white-xsmall.png" alt="ny">
                    <p>Justine Kilpatrick,</p>
                    <p class="paragraph-color"> The New York Times</p>
                </div>
            </div>
            <!--Parte di destra con le altre testimonianze-->
            <div class="others-testimonials h-100">
                <!--Parte sopra-->
                <div class="other-up w-100">
                    <!--Citazione-->
                    <div class="other-citation w-100">
                        <div class="other-citation-title w-100">A True Masterpiece, Bravo!</div>
                        <div class="other-citation-text w-100">Nulla quis lorem ut libero malesuada feugiat. Vivamus magna
                            justo, lacinia eget cosectetur sed, convalllis at tellus. Vivamus suscipit tortor eget felis
                            porttitor vulutpat. Nulla quis lorem ut libero malesuada feug at.</div>
                    </div>
                    <!--Autore-->
                    <div class="other-author w-100">
                        <!--Immagine-->
                        <div class="other-author-img">
                            <img src="../assets/materiale/images/theguardian-xsmall.png" alt="guardian">
                        </div>
                        <!--Firma-->
                        <div class="other-author-signature"><span>Gerald Hendley,</span> The Globe And Mail</div>
                    </div>
                </div>
                <!--Parte sotto-->
                <div class="other-down w-100">
                    <!--Citazione-->
                    <div class="other-citation w-100">
                        <!--Titolo-->
                        <div class="other-citation-title w-100">A Unique View On The World</div>
                        <!--Testo-->
                        <div class="other-citation-text w-100">Donec sollicitudin molestie malesuada. Curabitur arcu
                            erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula
                            elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit
                            amet.</div>
                    </div>
                    <!--Autore-->
                    <div class="other-author w-100">
                        <!--Immagine-->
                        <div class="other-author-img">
                            <img src="../assets/materiale/images/globe-xsmall.png" alt="globe">
                        </div>
                        <!--Firma-->
                        <div class="other-author-signature"><span>Mary Maxey,</span> The Gobe And Mail</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<!--STYLE-->
<style lang="scss" scoped>
/*Collegamento col file delle variabili*/
@use '/src/assets/scss/vars' as *;

/*Collegamento col file delle mixins*/
@use '/src/assets/scss/mixins' as *;

/*Stile della sezione*/
.section-four {
    @include flex-column;
    height: $Big;

    /*Parte sopra della sezione*/
    .testimonial-up {
        @include flex-row-between;
        flex-basis: 15%;

        /*Titolo e sottotitolo*/
        .title-up {
            flex-basis: 50%;

            /*H2*/
            h2 {
                font-weight: bold;
                font-size: 40px;
            }

            /*H5*/
            h5 {
                color: $VerdeAcqua;
                font-size: 20px;
            }
        }

        /*Bottone*/
        .button-up {
            flex-basis: 50%;
            display: flex;
            justify-content: flex-end;
        }
    }

    /*Parte sotto della sezione*/
    .testimonial-down {
        @include flex-row-between;
        flex-basis: 75%;

        /*Testimonianza principale*/
        .main-testimonial {
            @include flex-column;
            flex-basis: 50%;
            background-image: url(../assets/materiale/images/testimonial2-2x.jpg);
            border-bottom-right-radius: 150px;
            background-repeat: no-repeat;
            background-size: cover;
            padding: 0 50px;

            /*Titolo testimonianza*/
            .main-testimonial-title {
                @include flex-row-start;
                flex-basis: 20%;
                font-weight: bold;
                font-size: 30px;
                border-bottom: 1px solid;
                border-bottom-color: $GrigioChiaro;
            }

            /*Testo testimonianza*/
            .main-testimonial-text {
                @include flex-column-left;
                flex-basis: 50%;

                span {
                    font-size: 20px;
                    padding-bottom: 20px;
                }
            }

            /*Firma testimonianza*/
            .main-testimonial-signature {
                @include flex-row-start;
                flex-basis: 15%;

                img {
                    padding-right: 15px;
                    padding-bottom: 25px;
                }

                .paragraph-color {
                    color: $VerdeAcqua;
                    font-weight: bold;
                }
            }
        }

        /*Altre testimonianze*/
        .others-testimonials {
            @include flex-column;
            flex-basis: 45%;

            /*Parte in alto*/
            .other-up {
                @include flex-column;
                flex-basis: 50%;

                /*Citazione*/
                .other-citation {
                    @include flex-column;
                    flex-basis: 80%;
                    background-color: $BiancoCrema;
                    padding: 25px 100px;

                    /*Titolo di citazione*/
                    .other-citation-title {
                        @include center-flex;
                        font-weight: bold;
                        flex-basis: 25%;
                        font-size: 25px;
                    }

                    /*Testo di citazione*/
                    .other-citation-text {
                        @include othercitationtextstyle;
                        color: $GrigioScuro;
                    }
                }

                /*Autore*/
                .other-author {
                    @include flex-row-start;
                    flex-basis: 20%;

                    /*Firma*/
                    .other-author-signature {
                        padding-left: 75px;

                        span {
                            font-weight: bold;
                            color: $GrigioMezzo;
                        }
                    }
                }
            }

            /*Parte in bassso*/
            .other-down {
                flex-basis: 50%;
                @include flex-column;

                /*Citazione*/
                .other-citation {
                    @include flex-column;
                    flex-basis: 80%;
                    background-color: $BiancoCrema;
                    padding: 25px 100px;

                    /*Titolo di citazione*/
                    .other-citation-title {
                        @include center-flex;
                        font-weight: bold;
                        flex-basis: 25%;
                        font-size: 22px;
                    }

                    /*Testo di citazione*/
                    .other-citation-text {
                        @include othercitationtextstyle;
                        color: $GrigioScuro;
                    }
                }

                /*Autore*/
                .other-author {
                    @include flex-row-start;
                    flex-basis: 20%;

                    /*Firma*/
                    .other-author-signature {
                        padding-left: 75px;

                        span {
                            font-weight: bold;
                            color: $GrigioMezzo;
                        }
                    }
                }
            }
        }
    }
}
</style>