<!--SCRIPT-->
<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  components: { AppHeader, AppMain, AppFooter },
  data() {
    return {
      //HEADERLINKS
      headerLinks: [
        { url: '#', text: 'Home' },
        { url: '#', text: 'About Me' },
        { url: '#', text: 'Testimonials' },
        { url: '#', text: 'My Blog' },
        { url: '#', text: 'Meetups' },
        { url: '#', text: 'Shop' },
        { url: '#', text: 'Contact Me' },
      ],

      //FOOTERTITLES
      footerTitles: [
        { text: 'ABOUT ME' },
        { text: 'USEFUL LINKS' },
        { text: 'CONTACT INFO' },
      ],

      //FOOTERDESCRIPTION
      footerDescription: [
        { text: 'Vivamus suscipit tortor eget felis porttitor vulutpat. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor vulutpat.' }
      ],

      //FOOTERLINKS
      footerLinks: [
        { url: '#', text: 'Latest Books' },
        { url: '#', text: 'Upcoming Events' },
        { url: '#', text: 'Recent Articles' },
        { url: '#', text: 'Business Enquiries' },
        { url: '#', text: 'Visit My Foundation' },
      ],

      //FOOTERINFO
      footerInfo: [
        { text: '63 E. Studebaker Street Bolingbrook, IL 60440' },
        { text: 'Phone: (800)000-0000' },
        { text: 'Mobile: (800)000-0000' },
        { text: 'Email: info@your-company.com' },
      ]
    }
  },
};
</script>

<!--TEMPLATE-->
<template>
  <!--Header-->
  <AppHeader :header-links="headerLinks"></AppHeader>
  <!--Main-->
  <AppMain></AppMain>
  <!--Footer-->
  <AppFooter :footer-description="footerDescription" :footer-links="footerLinks" :footer-titles="footerTitles"
    :footer-info="footerInfo"></AppFooter>
</template>

<!--STYLE-->
<style lang="scss">
/*Importazione del file scss con stile generico*/
@use './assets/scss/style.scss'
</style>
