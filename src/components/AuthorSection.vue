<!--SCRIPT-->
<script>
export default {

};
</script>

<!--TEMPLATE-->
<template>
    <!--Sezione Uno-->
    <section class="section-one">
        <!--Contenitore di sezione-->
        <div class="container text-center">
            <!--Titolo-->
            <h2>More About Damon Vaughn</h2>
            <!--Paragrafo-->
            <h4>Damon Vaughn is a professor of psychology at the University of Toronto, a clinical psychologist and the
                author of the multi-million copy bestseller "The story of my life"</h4>
            <!--Bottone-->
            <button class="btn">Meet the author</button>
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
.section-one {
    @include flex-row;
    height: $Normal;

    /*Stile del contenitore*/
    .container {
        @include flex-column;

        /*Stile del titolo di sezione*/
        h2 {
            color: $GialloOcra;
            font-size: 50px;
        }

        /*Stile del paragrafo di sezione*/
        h4 {
            font-size: 30px;
            padding: 25px 0;
            line-height: 50px;
        }

        /*Stile del bottone*/
        .btn {
            color: $BiancoPuro;
            background-color: $VerdeAcqua;
            width: 175px;
            height: 40px;
        }

        .btn:hover {
            font-weight: bold;
            box-shadow: 2px 2px 2px 2px $VerdeAcqua;
        }
    }

}
</style>