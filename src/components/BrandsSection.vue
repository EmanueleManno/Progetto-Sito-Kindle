<!--SCRIPT-->
<script>
export default {

};
</script>

<!--TEMPLATE-->
<template>
    <!--Sezione Due-->
    <section class="section-two">
        <!--Contenitore delle immagini dei brand-->
        <div class="brands-container container h-100">
            <!--Immagini-->
            <img class="img-brand" src="../assets/materiale/images/ebay-logotan-2x.png" alt="ebay">
            <img class="img-brand" src="../assets/materiale/images/audible-logotan-2x.png" alt="audible">
            <img class="img-brand" src="../assets/materiale/images/bb-logotan-2x.png" alt="barnes">
            <img class="img-brand" src="../assets/materiale/images/kindlefire-logotan-2x.png" alt="kindle">
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
.section-two {
    height: $Small;
    background-color: $BiancoCrema;

    /*Stile del container*/
    .brands-container {
        @include flex-row-between;

        /*Stile delle immagini dei brand*/
        .img-brand {
            flex-basis: 15%;
            height: calc(100%/3);
            width: calc(100%/4);
        }

    }

}
</style>