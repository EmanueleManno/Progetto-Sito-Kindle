<!--SCRIPT-->
<script>
import AuthorSection from './AuthorSection.vue'
import BrandsSection from './BrandsSection.vue';
import AudiobookSection from './AudiobookSection.vue';
import TestimonialSection from './TestimonialSection.vue';
import EventsSection from './EventsSection.vue';
import NewsletterSection from './NewsletterSection.vue';
import AuthorbookSection from './AuthorbookSection.vue';
import ArticlesSection from './ArticlesSection.vue';

export default {
    components: { AuthorSection, BrandsSection, AudiobookSection, TestimonialSection, EventsSection, NewsletterSection, AuthorbookSection, ArticlesSection }
};
</script>

<!--TEMPLATE-->
<template>
    <!--MAIN-->
    <main class="w-100">
        <!--Sezione 1-->
        <AuthorSection></AuthorSection>
        <!--Sezione 2-->
        <BrandsSection></BrandsSection>
        <!--Sezione 3-->
        <AudiobookSection></AudiobookSection>
        <!--Sezione 4-->
        <TestimonialSection></TestimonialSection>
        <!--Sezione 5-->
        <EventsSection></EventsSection>
        <!--Sezione 6-->
        <NewsletterSection></NewsletterSection>
        <!--Sezione 7-->
        <AuthorbookSection></AuthorbookSection>
        <!--Sezione 8-->
        <ArticlesSection></ArticlesSection>
    </main>
</template>

<!--STYLE-->
<style lang="scss" scoped>
/*Collegamento col file delle variabili*/
@use '/src/assets/scss/vars' as *;

/*Collegamento col file delle mixins*/
@use '/src/assets/scss/mixins' as *;
</style>