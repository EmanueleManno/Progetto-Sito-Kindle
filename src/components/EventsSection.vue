<!--SCRIPT-->
<script>
export default {

};
</script>

<!--TEMPLATE-->
<template>
    <!--Sezione Cinque-->
    <section class="section-five">
        <!--Contenitore-->
        <div class="container w-100 h-100">
            <!--Parte in alto del titolo-->
            <div class="section-title w-100">
                <h2>Upcoming Events</h2>
                <h4>MEET THE AUTHOR IN PERSON</h4>
            </div>
            <!--Parte sotto con le cards-->
            <div class="cards-container w-100">
                <!--Cards-->
                <div class="event-card h-100">
                    <!--Immagine della card-->
                    <div class="card-image w-100">
                        <img src="../assets/materiale/images/event-05.jpg" alt="image">
                    </div>
                    <!--Titolo della card-->
                    <div class="card-title w-100">
                        <h5>Chicago Book Signing</h5>
                    </div>
                    <!--Paragrafo della card-->
                    <div class="card-paragraph w-100">
                        <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget
                            tincidunt nibh pulvinar a nulla.</p>
                    </div>
                </div>
                <div class="event-card h-100">
                    <!--Immagine della card-->
                    <div class="card-image w-100">
                        <img src="../assets/materiale/images/event-04.jpg" alt="image">
                    </div>
                    <!--Titolo della card-->
                    <div class="card-title w-100">
                        <h5>Meet & Greet With Amanda</h5>
                    </div>
                    <!--Paragrafo della card-->
                    <div class="card-paragraph w-100">
                        <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget
                            tincidunt nibh pulvinar a nulla.</p>
                    </div>
                </div>
                <div class="event-card h-100">
                    <!--Immagine della card-->
                    <div class="card-image w-100">
                        <img src="../assets/materiale/images/event-07.jpg" alt="image">
                    </div>
                    <!--Titolo della card-->
                    <div class="card-title w-100">
                        <h5>Open Book: Dialogues</h5>
                    </div>
                    <!--Paragrafo della card-->
                    <div class="card-paragraph h-100 w-100">
                        <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget
                            tincidunt nibh pulvinar a nulla.</p>
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
.section-five {
    background-color: $BiancoCrema;
    height: $Medium;

    /*Contenitore di sezione*/
    .container {
        @include flex-column;

        /*Sezione del titolo*/
        .section-title {
            @include flex-column;
            flex-basis: 15%;

            h2 {
                font-size: 40px;
            }

            h4 {
                color: $GialloOcra;
                font-size: 17px;
            }
        }

        /*Sezione delle cards*/
        .cards-container {
            @include flex-row-around;
            flex-basis: 75%;

            /*Card*/
            .event-card {
                @include flex-column;
                flex-basis: 30%;

                /*Immagine della card*/
                .card-image {
                    flex-basis: 50%;

                    img {
                        @include objecthoundred;
                    }
                }

                /*Titolo della card*/
                .card-title {
                    @include center-flex;
                    background-color: $BiancoPuro;
                    flex-basis: 25%;

                    /*H5*/
                    h5 {
                        font-size: 25px;
                    }
                }

                /*Paragrafo della card*/
                .card-paragraph {
                    background-color: $BiancoPuro;
                    flex-basis: 25%;
                    border-top: 1px solid;
                    padding: 10px 25px;
                    border-top-color: $GrigioChiaro;

                    p {
                        padding-top: 10px;
                        text-align: center;
                    }
                }

            }
        }
    }
}
</style>