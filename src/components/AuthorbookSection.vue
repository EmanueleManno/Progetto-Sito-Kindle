<!--SCRIPT-->
<script>
export default {

};
</script>

<!--TEMPLATE-->
<template>
    <!--Sezione Sette-->
    <section class="section-seven">
        <!--Contenitore-->
        <div class="container w-100 h-100">
            <!--Parte in alto del titolo-->
            <div class="section-title w-100">
                <!--Titolo-->
                <h2>Dig A Little Deeper Into Damon Vaughn</h2>
                <!--Sottotitolo---->
                <h5>FIND OUT MORE ABOUT THE AUTHOR HIMSELF</h5>
            </div>
            <!--Contenitore delle cards-->
            <div class="cards-container w-100 ">
                <!--Cards-->
                <div class="event-card background-one h-100 ">
                    <!--Immagine della card-->
                    <div class="card-space w-100 "></div>
                    <!--Titolo della card-->
                    <div class="card-title w-100 ">About Me</div>
                    <!--Paragrafo della card-->
                    <div class="card-paragraph w-100 ">Vestibulum ante ipsum primis</div>
                </div>
                <div class="event-card background-two h-100">
                    <!--Immagine della card-->
                    <div class="card-space w-100"></div>
                    <!--Titolo della card-->
                    <div class="card-title w-100">My Latest Book</div>
                    <!--Paragrafo della card-->
                    <div class="card-paragraph w-100">Vestibulum ante ipsum primis</div>
                </div>
                <div class="event-card background-three h-100">
                    <!--Immagine della card-->
                    <div class="card-space w-100"></div>
                    <!--Titolo della card-->
                    <div class="card-title w-100">Book Signing</div>
                    <!--Paragrafo della card-->
                    <div class="card-paragraph w-100 ">Vestibulum ante ipsum primis</div>
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
.section-seven {
    height: $Medium;

    /*Contenitore di sezione*/
    .container {
        @include flex-column;

        /*Sezione del titolo*/
        .section-title {
            @include flex-column;
            flex-basis: 15%;

            /*Titolo*/
            h2 {
                font-weight: bold;
            }

            /*Sottotitolo*/
            h5 {
                color: $VerdeAcqua;
            }
        }

        /*Sezione delle cards*/
        .cards-container {
            @include flex-row-around;
            flex-basis: 70%;

            /*Background One*/
            .background-one {
                background-image: $BackgroundFirstCard;
                background-repeat: no-repeat;
                background-size: cover;
            }

            /*Background One*/
            .background-two {
                background-image: $BackgroundSecondCard;
                background-repeat: no-repeat;
                background-size: cover;
            }

            /*Background One*/
            .background-three {
                background-image: $BackgroundThirdCard;
                background-repeat: no-repeat;
                background-size: cover;
            }


            /*Card*/
            .event-card {
                @include flex-column;
                flex-basis: 30%;
                border-bottom-right-radius: 30px;

                /*Immagine della card*/
                .card-space {
                    flex-basis: 70%;
                    backdrop-filter: brightness(50%);
                }

                /*Titolo della card*/
                .card-title {
                    text-align: center;
                    font-weight: bold;
                    font-size: 20px;
                    flex-basis: 15%;
                    color: $BiancoPuro;
                    backdrop-filter: brightness(50%);
                    border-bottom: 1px solid $GrigioChiaro;
                }

                /*Paragrafo della card*/
                .card-paragraph {
                    text-align: center;
                    padding-top: 10px;
                    flex-basis: 15%;
                    color: $GialloOcra;
                    backdrop-filter: brightness(50%);
                }
            }
        }
    }
}
</style>