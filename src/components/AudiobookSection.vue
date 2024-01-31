<!--SCRIPT-->
<script>
export default {

};
</script>

<!--TEMPLATE-->
<template>
    <!--Sezione Tre-->
    <section class="section-three">
        <!--Contenitore di sezione-->
        <div class="container-section-three container h-100">
            <!--Colonna-->
            <div class="first-col-section-three h-100">
                <!--Immagine-->
                <img src="../assets/materiale/images/audible-app-2x.png" alt="audible">
            </div>
            <!--Colonna-->
            <div class="second-col-section-three ">
                <!--Item della colonna-->
                <div class="col-items text-center">
                    <!--Titolo H3-->
                    <h3>New Audiobook</h3>
                    <!--Titolo H4-->
                    <h4>NO TIME TO READ? NO PROBLEM. LISTEN TO IT</h4>
                    <!--Paragrafo-->
                    <p>Donec fringilla nunc eu turpis dignissim, at euismod sapient tincidunt. Maecenas eleifend congue
                        cursus.</p>
                    <!--Immagini dei loghi-->
                    <div class="logos">
                        <img class="logo" src="../assets/materiale/images/audible-logo.png" alt="audible">
                        <img class="logo" src="../assets/materiale/images/bb-logotan-2x-200x66.png" alt="barnes">
                        <img class="logo" src="../assets/materiale/images/kindle-logo-tall.png" alt="kindle">
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
.section-three {
    @include image-norepeat-cover;
    background-image: $BackgroundSectionThree;
    height: $Normal;

    /*Stile del contenitore*/
    .container-section-three {
        @include flex-row-center;

        /*Stile della prima colonna*/
        .first-col-section-three {
            flex-basis: 50%;
            position: relative;

            /*Immagini*/
            img {
                height: 90%;
                position: absolute;
                bottom: 0;
            }
        }

        /*Stile della seconda colonna*/
        .second-col-section-three {
            @include flex-column;
            flex-basis: 50%;

            /*Item della colonna*/
            .col-items {
                flex-basis: 15%;

                /*H3*/
                h3 {
                    font-size: 40px;
                    font-weight: bold;
                    color: $BiancoPuro;
                }

                /*H4*/
                h4 {
                    font-size: 18px;
                    color: $GialloOcra;
                    padding: 20px 0;
                }

                /*Paragrafo*/
                p {
                    font-size: 20px;
                    color: $GrigioChiaro;
                }

                /*Loghi*/
                .logos {
                    @include flex-row-between;

                    /*Logo*/
                    .logo {
                        flex-basis: calc(100%/3);
                        max-height: 50%;
                        max-width: 30%;
                    }
                }
            }
        }
    }
}
</style>