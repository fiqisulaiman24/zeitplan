<script>
export default {
    name: 'About',
}
</script>

<template>
    <section class="section zp_section_about" id="tentang">
        <div class="container">
            <div class="columns is-multiline is-align-items-center">
                <div class="column is-4">
                    <h2 class="zp_about_title" data-aos="fade-right">
                        Kenapa Kamu Sangat Harus Pakai Aplikasi Yang Keren Ini?
                    </h2>
                    <p class="zp_about_subtitle" data-aos="fade-right">
                        Sejujurnya aplikasi kita ini seringkali bermasalah. Kadang-kadang gak bisa submit data,
                        kadang dibukanya lambat, kadang tiba-tiba logout sendiri, untung gak berdua.
                    </p>

                    <div class="columns is-mobile mt-6" data-aos="zoom-in">
                        <div class="column is-6">
                            <p class="zp_countname">Total Download</p>
                            <p class="zp_counttotal">1,501,234</p>
                        </div>

                        <div class="column is-6">
                            <p class="zp_countname">Total Users</p>
                            <p class="zp_counttotal">1,318,829</p>
                        </div>
                    </div>
                </div>
                <div class="column is-1 is-invisible"></div>
                <div class="column is-7">
                    <div class="columns is-multiline">
                        <div class="column is-6" data-aos="zoom-in" data-aos-delay="100">
                            <div class="box zp_boxabout">
                                <div class="zp_boxabout_header">
                                    <img src="@/assets/image/ab1.png" alt="about_icon">
                                    <p class="zp_boxabout_name">Aplikasi Gratis</p>
                                </div>
                                <p class="zp_boxabout_description">
                                    Semua fitur di aplikasi ini adalah gratis, tapi data privasi kamu akan kami jual ke agen khusus US.
                                </p>
                            </div>
                        </div>
                        <div class="column is-6" data-aos="zoom-in" data-aos-delay="200">
                            <div class="box zp_boxabout">
                                <div class="zp_boxabout_header">
                                    <img src="@/assets/image/ab2.png" alt="about_icon">
                                    <p class="zp_boxabout_name">Kode OTP Error</p>
                                </div>
                                <p class="zp_boxabout_description">
                                    Pas login kode OTP lo gak kekirim kadang, terus lo harus nyoba berulang kali sampe bisa.
                                </p>
                            </div>
                        </div>
                        <div class="column is-6" data-aos="zoom-in" data-aos-delay="300">
                            <div class="box zp_boxabout">
                                <div class="zp_boxabout_header">
                                    <img src="@/assets/image/ab3.png" alt="about_icon">
                                    <p class="zp_boxabout_name">Data Tidak Aman</p>
                                </div>
                                <p class="zp_boxabout_description">
                                    Data tidak disimpan dengan baik dan rentan bocor, jangan heran data lo tiba-tiba ada di deepweb.
                                </p>
                            </div>
                        </div>
                        <div class="column is-6" data-aos="zoom-in" data-aos-delay="400">
                            <div class="box zp_boxabout">
                                <div class="zp_boxabout_header">
                                    <img src="@/assets/image/ab4.png" alt="about_icon">
                                    <p class="zp_boxabout_name">Biasanya Error</p>
                                </div>
                                <p class="zp_boxabout_description">
                                    Ketika submit data biasanya error di bagian ajax-nya, eh nggak deng itu aplikasi pemerintah~
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>