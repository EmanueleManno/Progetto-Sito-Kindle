<!--SCRIPT-->
<script>
import { FontAwesomeLayers } from '@fortawesome/vue-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    props: { headerLinks: Array },
};
</script>

<!--TEMPLATE-->
<template>
    <!--HEADER-->
    <header class="w-100">
        <!--Header Top-->
        <div class="header-top w-100">
            <div class="header-logo w-100">
                <img src="../assets/materiale/images/author-logo-round-small.png" alt="logo">
            </div>
            <!--Navbar-->
            <div class="navbar">
                <ul>
                    <!--Menu-->
                    <li v-for="link in headerLinks" :key="link.text"><a class="text-white" :href="link.url">{{
                        link.text }}</a>
                    </li>
                    <!--Icona del cart-->
                    <li class="text-white"><font-awesome-icon icon="cart-shopping" /></li>
                </ul>
            </div>
        </div>
        <!--Header Bottom-->
        <div class="header-bottom w-100 h-100">
            <!--Jumbotron-->
            <div class="jumbotron container w-75 h-100">
                <!--Titolo del Jumbo-->
                <div class="jumbo-title w-75">
                    <h2>Damon Vaughn</h2>
                </div>
                <!--Descrizione del Jumbo-->
                <div class="jumbo-description w-50">
                    <h3>Best-selling author and the most influential public intellectual in the western world right now.
                    </h3>
                </div>
                <!--Autore del Jumbo-->
                <div class="jumbo-author w-75"><i>- The New York Times</i></div>
                <!--Bottoni del Jumbo-->
                <div class="jumbo-arrows w-75">
                    <button type="button" class="btn btn-dark"><font-awesome-icon icon="fa-solid fa-arrow-left" /></button>
                    <button type="button" class="btn btn-dark"><font-awesome-icon icon="fa-solid fa-arrow-right" /></button>
                </div>
            </div>
        </div>
        <!--Box bianco all'interno dell'Header-->
        <div class="header-white-box">
            <!--Colonna del box bianco all'interno dell'Header-->
            <div class="white-box-col-70 w-100">
                <!--COLONNA DI SINISTRA-->
                <div class="white-box-col-50-left h-100">
                    <!--Immagine-->
                    <img src="../assets/materiale/images/book-widget.png" alt="widget">
                </div>
                <!--COLONNA DI DESTRA-->
                <div class="white-box-col-50-right h-100">
                    <!--Titoletto-->
                    <h4>Latest Book Release</h4>
                    <!--Sottotitoletto-->
                    <h5>D. VAUGHN AUTOBIOGRAPHY</h5>
                    <!--Paragrafo-->
                    <p>Vestibulum tristique turpis in ipsum egestas lobortis. Duis maximus bibendum volutpat. Lorem Ipsum
                        dolor sit amet.</p>
                </div>
            </div>
            <!--Colonna del box bianco all'interno dell'Header-->
            <div class="white-box-col-30 w-100">
                <!--Bottone Amazon-->
                <button type="button" class="btn btn-outline-success"><font-awesome-icon icon="fa-brands fa-amazon" /> Buy
                    on
                    Amazon</button>
                <!--Bottone Apple-->
                <button type="button" class="btn btn-outline-success"><font-awesome-icon icon="fa-brands fa-apple" /> Buy on
                    AppStore</button>
            </div>
        </div>
    </header>
</template>

<!--STYLE-->
<style lang="scss" scoped>
/*Collegamento col file delle variabili*/
@use '/src/assets/scss/vars' as *;

/*Collegamento col file delle mixins*/
@use '/src/assets/scss/mixins' as *;

/*HEADER*/
header {
    @include image-norepeat-cover;
    @include center-flex-column;
    position: relative;
    background-image: $BackgroundHeaderAndFooter;
    height: $Big;

    /*Parte alta dell'Header*/
    .header-top {
        @include flex-row-between;
        flex-basis: 25%;
        backdrop-filter: brightness(50%);

        /*Logo dell'Header*/
        .header-logo {
            @include center-flex;
            flex-basis: 30%;

            img {
                text-align: center
            }
        }

        /*NavBar dell'Header*/
        .navbar {
            @include flex-row;
            flex-basis: 60%;

            ul {
                @include center-flex;

                li {
                    cursor: pointer;
                    font-weight: bold;
                    padding: 0 20px;
                    text-shadow: 1px 1px 1px black;
                }

                li:hover {
                    font-size: 20px;
                    text-shadow: 5px 5px 5px black;
                }
            }

        }
    }

    /*Parte bassa dell'Header*/
    .header-bottom {
        flex-basis: 75%;
        @include flex-column-left;
        backdrop-filter: brightness(50%);

        /*Jumbotron*/
        .jumbotron {
            @include center-flex-column-start;

            /*Titolo del Jumbo*/
            .jumbo-title {
                flex-basis: 20%;
                @include flex-row-start;
                color: $GialloOcra;

                /*H2*/
                h2 {
                    font-size: 50px;
                }
            }

            /*Descrizione del Jumbo*/
            .jumbo-description {
                flex-basis: 25%;
                @include flex-row-start;
                color: $BiancoPuro;

                /*H3*/
                h3 {
                    font-size: 35px;
                    font-weight: bold;
                    line-height: 50px;
                }
            }

            /*Autore del Jumbo*/
            .jumbo-author {
                flex-basis: 10%;
                @include flex-row-start;
                color: $GrigioChiaro;
            }

            /*Bottoni del Jumbo*/
            .jumbo-arrows {
                flex-basis: 10%;
                @include flex-row-start;
            }
        }
    }

    /*Stile del box bianco all'interno dell'header*/
    .header-white-box {
        @include flex-column;
        height: calc(100%/3);
        width: calc(100%/3);
        background-color: $BiancoPuro;
        position: absolute;
        right: 0;
        bottom: 0;

        /*Stile delle colonne all'interno del box bianco*/
        .white-box-col-70 {
            @include flex-row;
            flex-basis: 70%;

            /*Colonna di sinistra*/
            .white-box-col-50-left {
                @include center-flex;
                flex-basis: 50%;

                /*Immagine*/
                img {
                    width: 200px;
                    height: 200px;
                }
            }

            /*Colonna di destra*/
            .white-box-col-50-right {
                @include flex-column-left;
                flex-basis: 50%;

                /*H4*/
                h4 {
                    font-weight: bold;
                }

                /*H5*/
                h5 {
                    font-weight: bold;
                    color: $GialloOcra;
                    font-size: 15px;
                }
            }
        }

        /*Colonna sotto*/
        .white-box-col-30 {
            @include center-flex;
            flex-basis: 30%;


            /*Stile dei bottoni*/
            .btn {
                color: black;
                border-radius: 0;

            }
        }

    }
}
</style>
