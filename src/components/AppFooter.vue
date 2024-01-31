<!--SCRIPT-->
<script>
export default {
    props: { footerTitles: Array, footerLinks: Array, footerInfo: Array, footerDescription: Array },
};
</script>

<!--TEMPLATE-->
<template>
    <!--Footer-->
    <footer class="w-100">
        <!--Contenitore del Footer-->
        <div class="footer-container w-100 h-100">
            <!--Logo-->
            <div class="footer-logo w-100">
                <img src="../assets/materiale/images/author-logo-round-small.png" alt="logo">
            </div>
            <!--Parte testuale-->
            <div class="footer-text w-100 h-100">
                <!--Parte sopra del Footer-->
                <div class="footer-up w-100">
                    <!--Titoli-->
                    <div class="footer-up-titles w-100">
                        <!--Titoletti delle liste-->
                        <ul class="w-100">
                            <li class="text-white" v-for="title in footerTitles" :key="title.text">{{ title.text }}
                            </li>
                        </ul>
                    </div>
                    <!--Contenuto-->
                    <div class="footer-up-contents text-white w-100">
                        <!--Prima colonna-->
                        <div class="footer-up-contents-col h-100">
                            <!--Descrizione-->
                            <ul class="w-100">
                                <li class="text-white line-height" v-for="description in footerDescription"
                                    :key="description.text">{{
                                        description.text }}
                                </li>
                            </ul>
                        </div>
                        <!--Seconda colonna-->
                        <div class="footer-up-contents-col h-100">
                            <!--Links-->
                            <ul>
                                <li class="list-decoration" v-for="link in footerLinks" :key="link.text"><a
                                        class="text-white" :href="link.url">{{
                                            link.text }}</a>
                                </li>
                            </ul>
                        </div>
                        <!--Terza colonna-->
                        <div class="footer-up-contents-col h-100">
                            <!--Info-->
                            <ul>
                                <li class="text-white py-2" v-for="info in footerInfo" :key="info.text">{{ info.text }}
                                </li>
                                <!--Icone dei brands-->
                                <li class="text-white py-2">
                                    <font-awesome-icon icon="fa-brands fa-facebook-f" class="fa-brands" />
                                    <font-awesome-icon icon="fa-brands fa-twitter" class="fa-brands" />
                                    <font-awesome-icon icon="fa-brands fa-instagram" class="fa-brands" />
                                    <font-awesome-icon icon="fa-brands fa-linkedin-in" class="fa-brands" />
                                    <font-awesome-icon icon="fa-brands fa-youtube" class="fa-brands" />
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <!--Parte sotto del Footer-->
                <div class="footer-down w-100">
                    <!--Testo della parte sotto del Footer-->
                    <div class="footer-down-text"><font-awesome-icon icon="copyright" /> Copyright 2012 - 2020
                        |
                        Avada
                        Theme by <span>ThemeFusion</span> | All Rights Reserved | Powered by <span>WordPress</span></div>
                </div>
            </div>
        </div>
    </footer>
</template>

<!--STYLE-->
<style lang="scss" scoped>
/*Collegamento col file delle variabili*/
@use '/src/assets/scss/vars' as *;

/*Collegamento col file delle mixins*/
@use '/src/assets/scss/mixins' as *;

/*FOOTER*/
footer {
    @include image-norepeat-cover;
    @include center-flex;
    background-image: $BackgroundHeaderAndFooter;
    height: $Normal;

    /*Contenitore del Footer*/
    .footer-container {
        flex-basis: 100%;
        @include flex-row;
        backdrop-filter: brightness(50%);

        /*Logo del Footer*/
        .footer-logo {
            @include center-flex;
            flex-basis: 20%;
        }

        /*Parte testuale del Footer*/
        .footer-text {
            @include flex-column;
            flex-basis: 70%;

            /*Parte alta del Footer*/
            .footer-up {
                @include flex-column;
                flex-basis: 80%;

                /*Titoli*/
                .footer-up-titles {
                    @include center-flex;
                    flex-basis: 20%;
                    font-weight: bold;
                    font-size: 20px;

                    ul {
                        @include flex-row-between;

                        li {
                            padding-left: 10px;
                            flex-basis: calc(100%/3);
                        }
                    }
                }

                /*Contenuti*/
                .footer-up-contents {
                    @include flex-row-start;
                    flex-basis: 70%;

                    /*Colonne dei contenuti*/
                    .footer-up-contents-col {
                        flex-basis: calc(100%/3);
                    }
                }
            }

            /*Parte bassa del Footer*/
            .footer-down {
                @include center-flex;
                flex-basis: 10%;
                color: $GrigioChiaro;

                span {
                    font-weight: bold;
                    color: $BiancoPuro;
                }
            }
        }
    }
}

/*Stile delle icone dei brands*/
.fa-brands {
    padding-right: 15px;
}

/*Stile della lista*/
.list-decoration {
    list-style-type: "\003E";
    padding-bottom: 20px;
    padding-left: 10px;
}

/*Classe line-height*/
.line-height {
    line-height: 35px;
}
</style>