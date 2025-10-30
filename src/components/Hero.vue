<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    name: 'Hero',
    title: 'Navigation',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          navigation: {
            nextEl: '.zp_next_btn',
            prevEl: '.zp_prev_btn'
          },
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          slidesPerView: 1,
          spaceBetween: 30,
        },
      }
    },
    methods:{
        warning() {
            this.$buefy.snackbar.open({
                message: 'Aplikasi Zeitplan saat ini belum tersedia',
                type: 'is-warning',
                position: 'is-top',
                actionText: 'Tutup',
                indefinite: true,
            })
        },
    },
};
</script>
<template>
    <section class="hero is-fullheight zp_hero" id="home">
        <div class="hero-head zp_hero_head">
            <b-navbar class="container">
                <template #brand>
                    <b-navbar-item>
                        <img
                            src="@/assets/image/zp-logo.png"
                            alt="Zeitplan"
                        >
                    </b-navbar-item>
                </template>
            
                <template #end>
                    <b-navbar-item href="#home" class="is-active">
                        Home
                    </b-navbar-item>

                    <b-navbar-item href="#tentang" v-smooth-scroll>
                        Tentang
                    </b-navbar-item>

                    <b-navbar-item href="#fitur" v-smooth-scroll>
                        Fitur-Fitur
                    </b-navbar-item>

                     <b-navbar-item href="#harga" v-smooth-scroll>
                        Harga
                    </b-navbar-item>

                     <b-navbar-item href="#testimoni" v-smooth-scroll>
                        Testimoni
                    </b-navbar-item>
                    
                    <b-navbar-item tag="div">
                        <div class="buttons">
                            <a class="button zp_navbtn" @click="warning">
                                Download <unicon class="is-flex ml-2" name="arrow-right" fill="#FFF"></unicon>
                            </a>
                        </div>
                    </b-navbar-item>
                </template>
            </b-navbar>
        </div>

        <!-- Hero content: will be in the middle -->
        <div class="hero-body zp_hero_head">
            <div class="container">
                <div class="columns">
                    <div class="column is-5">
                        <div class="zp_herocontent_wrapper">
                            <h1 class="zp_headline" data-aos="fade-right">
                                Sebuah cara mudah mengatur jadwal kuliah kamu
                            </h1>
                            <p class="zp_tagline" data-aos="fade-right">
                                Datang kuliah terlambat karena ketiduran itu tidak masalah;
                                datang kuliah karena lupa jadwal itu sangatlah tidak keren.
                                Aplikasi ini adalah sahabat kamu sekarang, brodie~
                            </p>

                            <section data-aos="zoom-in">
                                <div class="buttons zp_herocta">
                                    <b-button class="zp_btncta" tag="a"
                                        href="https://buefy.org"
                                        target="_blank">
                                        Learn More
                                    </b-button>

                                    <b-button class="zp_btncta" tag="a"
                                        href="https://buefy.org"
                                        target="_blank">
                                        Play Demo
                                    </b-button>
                                </div>
                            </section>

                            <swiper class="swiper" :options="swiperOption" style="width:100%;" data-aos="fade-right">
                                <swiper-slide>
                                    <div class="box zp_herotestibox">
                                        <div class="zp_herotesti_wrapper">
                                            <div class="is-flex">
                                                <img src="@/assets/image/staractive.png" alt="star" class="mr-2">
                                                <img src="@/assets/image/star.png" alt="star" class="mr-2">
                                                <img src="@/assets/image/star.png" alt="star" class="mr-2">
                                                <img src="@/assets/image/star.png" alt="star" class="mr-2">
                                                <img src="@/assets/image/star.png" alt="star" class="mr-2">
                                            </div>

                                            <div>
                                                <p class="zp_testidescription">
                                                    “Aplikasi sialan, ini gw jadi kagak bisa alesan lagi buat
                                                    bolos kelas Pak Sanusi yang galak itu! Tapi aku sekarang
                                                    jadi rajin kuliah, terima kasih garena!”
                                                </p>
                                            </div>

                                            <div class="is-flex is-justify-content-space-between is-align-items-center">
                                                <div class="is-flex is-align-items-center">
                                                    <div class="mr-3">
                                                        <img src="@/assets/image/ava1.png" alt="ava">
                                                    </div>
                                                    <div>
                                                        <p class="zp_testimonial_name">P-star 7</p>
                                                        <p class="zp_testimonial_rank">
                                                            Mahasiswa Boating School Ny. Puff
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="zp_testimonial_pagination">
                                                    <img src="@/assets/image/prevbtn.png" class="zp_prev_btn mr-2" alt="prev">
                                                    <img src="@/assets/image/nextbtn.png" class="zp_next_btn" alt="next">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </swiper-slide>

                                <swiper-slide>
                                    <div class="box zp_herotestibox">
                                        <div class="zp_herotesti_wrapper">
                                                <div class="is-flex">
                                                <img src="@/assets/image/staractive.png" alt="star" class="mr-2">
                                                <img src="@/assets/image/staractive.png" alt="star" class="mr-2">
                                                <img src="@/assets/image/staractive.png" alt="star" class="mr-2">
                                                <img src="@/assets/image/star.png" alt="star" class="mr-2">
                                                <img src="@/assets/image/star.png" alt="star" class="mr-2">
                                            </div>

                                            <div>
                                                <p class="zp_testidescription">
                                                    “Aq kmrn koq instla di hp qu gx bs y? ap krn aq pke hp miTho? admin tLonk dnk bntU instlA d hp qu, aq mw pKe apkx”
                                                </p>
                                            </div>

                                            <div class="is-flex is-justify-content-space-between is-align-items-center">
                                                <div class="is-flex is-align-items-center">
                                                    <div class="mr-3">
                                                        <img src="@/assets/image/ava3.png" alt="ava">
                                                    </div>
                                                    <div>
                                                        <p class="zp_testimonial_name">Indah Cyank Dya Clmax</p>
                                                        <p class="zp_testimonial_rank">
                                                            Works at Looking For True Love, Inc
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="zp_testimonial_pagination">
                                                    <img src="@/assets/image/prevbtn.png" class="zp_prev_btn mr-2" alt="prev">
                                                    <img src="@/assets/image/nextbtn.png" class="zp_next_btn" alt="next">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </swiper-slide>

                                <swiper-slide>
                                    <div class="box zp_herotestibox">
                                        <div class="zp_herotesti_wrapper">
                                                <div class="is-flex">
                                                <img src="@/assets/image/staractive.png" alt="star" class="mr-2">
                                                <img src="@/assets/image/staractive.png" alt="star" class="mr-2">
                                                <img src="@/assets/image/staractive.png" alt="star" class="mr-2">
                                                <img src="@/assets/image/staractive.png" alt="star" class="mr-2">
                                                <img src="@/assets/image/staractive.png" alt="star" class="mr-2">
                                            </div>

                                            <div>
                                                <p class="zp_testidescription">
                                                    “Terima kasih untuk aplikasinya, karena aplikasi ini murid-murid saya jadi rajin kuliah walaupun nggak ada adab tetep aja bakal lulus 👈😎👉”
                                                </p>
                                            </div>

                                            <div class="is-flex is-justify-content-space-between is-align-items-center">
                                                <div class="is-flex is-align-items-center">
                                                    <div class="mr-3">
                                                        <img src="@/assets/image/ava2.png" alt="ava">
                                                    </div>
                                                    <div>
                                                        <p class="zp_testimonial_name">Sanusi Sulivan</p>
                                                        <p class="zp_testimonial_rank">
                                                            Dosen di Boating School Ny. Puff
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="zp_testimonial_pagination">
                                                    <img src="@/assets/image/prevbtn.png" class="zp_prev_btn mr-2" alt="prev">
                                                    <img src="@/assets/image/nextbtn.png" class="zp_next_btn" alt="next">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                    <div class="column is-1"></div>
                    <div class="column is-6" data-aos="zoom-in">
                        <img src="@/assets/image/zp-headline.png" alt="awdwad">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>