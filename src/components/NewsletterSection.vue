<!--SCRIPT-->
<script>
export default {

};
</script>

<!--TEMPLATE-->
<template>
    <!--Sezione Sei-->
    <section class="section-six">
        <!--Contenitore di sezione-->
        <div class="container h-100 w-50">
            <!--Titolo-->
            <div class="title text-center w-50">
                <h3>Subscribe To My Newsletter</h3>
            </div>
            <!--Sottotitolo---->
            <div class="subtitle w-100">
                <h5>BE NOTIFIED ABOUT BOOK SIGNING TOUR DATES</h5>
            </div>
            <!--Inputs-->
            <div class="inputs w-100">
                <!--Form email-->
                <form class="px-4">
                    <div class="form-group">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Insert your email...*">
                    </div>
                </form>
                <!--Bottone Subscribe-->
                <button type="button" class="btn btn-success">Subscribe</button>
            </div>
            <!--Paragrafo-->
            <div class="paragraph w-100">
                <p>Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt</p>
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
.section-six {
    background-image: $BackgroundSectionSix;
    height: $Normal;

    /*Container*/
    .container {
        @include flex-column;

        /*Titolo*/
        .title {
            @include center-flex;
            flex-basis: 25%;

            /*H3*/
            h3 {
                font-size: 45px;
                font-weight: bold;
                color: $BiancoPuro;
            }
        }

        /*Sottotitolo*/
        .subtitle {
            @include center-flex;
            flex-basis: 15%;

            /*H5*/
            h5 {
                font-size: 18px;
                color: $GialloOcra;
            }
        }

        /*Inputs*/
        .inputs {
            @include center-flex;
            flex-basis: 25%;

            input {
                height: 50px;
                width: 300px;
            }

            button {
                height: 50px;
                width: 150px;
            }
        }

        /*Paragrafo*/
        .paragraph {
            @include center-flex;
            flex-basis: 15%;

            p {
                color: $GrigioChiaro;
            }
        }
    }
}
</style>