<!--SCRIPT-->
<script>
export default {

};
</script>

<!--TEMPLATE-->
<template>
    <!--Sezione Otto-->
    <section class="section-eight">
        <!--Parte alta della sezione-->
        <div class="article-up container w-100">
            <!--Titolo e sottotitolo-->
            <div class="title-up">
                <!--Titolo-->
                <h2>Recent Articles</h2>
                <!--Sottotitolo-->
                <h5>READ THE LATEST ENTRIES</h5>
            </div>
            <!--Bottone-->
            <div class="button-up">
                <button type="button" class="btn btn-warning text-white">All articles</button>
            </div>
        </div>

        <!--Parte sotto della sezione-->
        <div class="article-down container w-100">
            <!--Parte di sinistra con la testimonianza principale-->
            <div class="main-article h-100">
                <!--Immagine principale-->
                <div class="main-img w-100">
                    <img src="../assets/materiale/images/20-Tips-1200x706.jpg" alt="main-img">
                </div>
                <!--Descrizione Principale-->
                <div class="main-description w-100">
                    <h5 class="description-item w-100">20 Creativity Tips</h5>
                    <p class="description-item w-100">By Admin | October 24th, 2019 | Categories: Event, Tips &
                        Tricks</p>
                    <p class="description-item w-100">Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
                        amet.</p>
                </div>
            </div>
            <!--Parte di destra con le altre testimonianze-->
            <div class="others-articles h-100">
                <!--Parte sopra-->
                <div class="other-up w-100">
                    <!--Immagine-->
                    <div class="other-img w-100 ">
                        <img src="../assets/materiale/images/thumb-13-2x-700x441.jpg" alt="other-img">
                    </div>
                    <!--Descrizione-->
                    <div class="other-description w-100">
                        <h5 class="description-item">Instanbul Travel Guide</h5>
                        <p class="description-item">October 24th, 2019 | 0 comments</p>
                    </div>
                </div>
                <!--Parte sotto-->
                <div class="other-down w-100">
                    <!--Immagine-->
                    <div class="other-img w-100">
                        <img src="../assets/materiale/images/thumb-08-2x-700x441.jpg" alt="other-img">
                    </div>
                    <!--Descrizione-->
                    <div class="other-description w-100">
                        <h5 class="description-item">What's On Your Booklist?</h5>
                        <p class="description-item">October 24th, 2019 | 0 comments</p>
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
.section-eight {
    background-color: $BiancoCrema;
    height: $Big;
    @include flex-column;

    /*Parte sopra della sezione*/
    .article-up {
        @include flex-row-between;
        flex-basis: 15%;

        /*Titolo e sottotitolo*/
        .title-up {
            flex-basis: 50%;

            h2 {
                font-weight: bold;
            }

            h5 {
                color: $VerdeAcqua;
            }
        }

        /*Bottone*/
        .button-up {
            flex-basis: 50%;
            display: flex;
            justify-content: flex-end;

            .btn {
                width: 200px;
            }
        }
    }

    /*Parte sotto della sezione*/
    .article-down {
        @include flex-row-between;
        flex-basis: 75%;

        /*Testimonianza principale*/
        .main-article {
            @include flex-column;
            flex-basis: 65%;
            background-color: $BiancoPuro;

            /*Immagine principale*/
            .main-img {
                @include center-flex;
                flex-basis: 70%;

                img {
                    @include objectninety;
                }

            }

            /*Descrizione principale*/
            .main-description {
                @include flex-column;
                flex-basis: 30%;

                .description-item {
                    display: flex;
                    align-items: center;
                    flex-basis: calc(100%/3);
                    padding: 0 40px;
                }

                h5 {
                    font-size: 25px;
                }
            }
        }

        /*Altre testimonianze*/
        .others-articles {
            @include flex-column;
            flex-basis: 30%;
            background-color: $BiancoPuro;

            /*Parte in alto*/
            .other-up {
                @include flex-column;
                flex-basis: 50%;

                /*Immagine*/
                .other-img {
                    @include center-flex;
                    flex-basis: 70%;

                    img {
                        @include objectninety;
                    }
                }

                /*Descrizione*/
                .other-description {
                    flex-basis: 30%;

                    /*Elemento descrizione*/
                    .description-item {
                        padding: 0 20px;
                    }

                    h5 {
                        font-size: 25px;
                    }
                }
            }

            /*Parte in bassso*/
            .other-down {
                flex-basis: 50%;
                @include flex-column;

                /*Immagine*/
                .other-img {
                    @include center-flex;
                    flex-basis: 70%;

                    img {
                        @include objectninety;
                    }
                }

                /*Descrizione*/
                .other-description {
                    flex-basis: 30%;

                    /*Elemento descrizione*/
                    .description-item {
                        padding: 0 20px;
                    }

                    h5 {
                        font-size: 25px;
                    }
                }
            }
        }
    }
}
</style>