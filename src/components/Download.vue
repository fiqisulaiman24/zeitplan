<script>
export default {
    name: 'Download',
    data(){
        return {
            google: 'https://google.com',
            appstore: 'https://www.apple.com/app-store/'
        }
    }
}
</script>

<template>
    <section class="section is-medium zp_section_download" id="download">
        <div class="container">
            <div class="columns has-text-centered is-centered">
                <div class="column is-8">
                    <div class="zp_download_wrapper">
                        <h2 class="zp_download_title" data-aos="zoom-in" data-aos-delay="100">
                            Download Aplikasi Keren Ini Sekarang!
                        </h2>
                        <p class="zp_download_subtitle" data-aos="zoom-in" data-aos-delay="200">
                            Please download lah aplikasi ini, udah susah-susah buat, mana pas bikin sampe begadang, terus juga ditambah weekend. Jadi, please download lah ya.
                        </p>

                        <div class="zp_download_btn" data-aos="zoom-in" data-aos-delay="300">
                            <a target="_blank" v-bind:href="google">
                                <img src="@/assets/image/playstore.png"/>
                            </a>
                            <a target="_blank" v-bind:href="appstore">
                                <img src="@/assets/image/appstore.png"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>