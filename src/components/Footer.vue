<script>
import BackToTop from 'vue-backtotop'

export default {
    name: 'footer',
    components: {
        BackToTop
    },
    data(){
        return{
            instagram: 'https://instagram.com/fiqislmn_',
            twitter: 'https://twitter.com/fiqislmn_',
            facebook: 'https://facebook.com/fikisuleey',
            google: 'https://google.com',
        }
    }
}
</script>

<template>
    <footer class="footer zp_section_footer">
        <div class="container">
            <div class="columns is-multiline">
                <div class="column is-6">
                    <div class="zp_footer_columnabout">
                        <div>
                            <img src="@/assets/image/zp-icon.png" alt="zp_footer_icon">
                        </div>
                        <div>
                            <img src="@/assets/image/zeitplan.png" alt="zp_footer_icon">
                        </div>

                        <div>
                            <p class="zp_footer_description">
                                Sebuah aplikasi yang membantu kamu untuk membuat jadwal kuliah, jadwal mabar, jadwal makan, jadwal liga inggris, dan jadwal-jadwal lainnya. Walaupun banyak error, setidaknya kami sudah berusaha semaksimal mungkin.
                            </p>
                        </div>

                        <div>
                            <p class="zp_footer_copyright">
                                Copyright (C) 2021. Design By Nauval
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="column is-2">
                    <h3 class="zp_footer_title">
                        Sitemap
                    </h3>
                    <ul class="zp_footer_sitelink">
                        <li class="zp_footer_links">
                            <a href="#home" class="zp_footer_links" v-smooth-scroll>
                                Beranda
                            </a>
                        </li>
                        <li class="zp_footer_links">
                            <a href="#fitur" class="zp_footer_links" v-smooth-scroll>
                                Fitur-fitur
                            </a>
                        </li>
                        <li class="zp_footer_links">
                            <a href="#harga" class="zp_footer_links" v-smooth-scroll>
                                Harga
                            </a>
                        </li>
                        <li class="zp_footer_links">
                            <a href="#testimoni" class="zp_footer_links" v-smooth-scroll>
                                Testimoni
                            </a>
                        </li>
                        <li class="zp_footer_links">
                            <a href="#download" class="zp_footer_links" v-smooth-scroll>
                                Download
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="column is-2">
                    <h3 class="zp_footer_title">
                        Partner
                    </h3>
                    <ul class="zp_footer_sitelink">
                        <li class="zp_footer_links">
                            <a target="_blank" v-bind:href="google" class="zp_footer_links">
                                Sefan.ru
                            </a>
                        </li>
                        <li class="zp_footer_links">
                            <a target="_blank" v-bind:href="google" class="zp_footer_links">
                                Ganool
                            </a>
                        </li>
                        <li class="zp_footer_links">
                            <a target="_blank" v-bind:href="google" class="zp_footer_links">
                                Waptrick
                            </a>
                        </li>
                        <li class="zp_footer_links">
                            <a target="_blank" v-bind:href="google" class="zp_footer_links">
                                Stafaband
                            </a>
                        </li>
                        <li class="zp_footer_links">
                            <a target="_blank" v-bind:href="google" class="zp_footer_links">
                                MyWapBlock
                            </a>
                        </li>
                        <li class="zp_footer_links">
                            <a target="_blank" v-bind:href="google" class="zp_footer_links">
                                Friv
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="column is-2">
                    <h3 class="zp_footer_title">
                        Tetap Terhubung
                    </h3>
                    <p class="zp_stayconnected">
                        Lihat kami pansos di sosial media berikut:
                    </p>

                    <div class="zp_footer_socialmedia">
                        <div>
                            <a target="_blank" v-bind:href="instagram">
                                <img src="@/assets/image/ig.png" alt="">
                            </a>
                        </div>
                        <div>
                            <a target="_blank" v-bind:href="twitter">
                                <img src="@/assets/image/tw.png" alt="">
                            </a>
                        </div>
                        <div>
                            <a target="_blank" v-bind:href="facebook">
                                <img src="@/assets/image/fb.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <back-to-top bottom="20px" right="20px">
            <button type="button" class="btn btn-info btn-to-top">
                <unicon name="arrow-up" fill="#FFF"></unicon>
            </button>
        </back-to-top>
    </footer>
</template>