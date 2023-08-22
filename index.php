<!DOCTYPE html>
<html lang="en">
<?php include 'commons/head.php'; ?>
<!-- Head -->

<body>
    <!-- Nav -->
    <?php include 'commons/nav.php'; ?>

    <!-- Body -->
    <!-- Banner + Search -->
    <section data-anim-wrap="" class="masthead -type-1 z-5 animated">
        <div data-anim-child="fade" class="masthead__bg is-in-view">
            <img src="https://images.unsplash.com/photo-1580775949272-1bdb8a95ac01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="image" class="js-lazy loaded" data-ll-status="loaded">
        </div>

        <div class="container">
            <div class="row justify-center">
                <div class="col-auto">

                    <!-- Title -->
                    <div class="text-center">
                        <h1 data-anim-child="slide-up delay-4" class="text-52 lg:text-40 md:text-30 text-white is-in-view">Khám phá hành trình cùng chúng tôi</h1>
                        <p data-anim-child="slide-up delay-5" class="text-white mt-3 md:mt-10 is-in-view">Khám phá những địa điểm tuyệt vời với ưu đãi độc quyền</p>
                    </div>

                    <!-- Search -->
                    <div data-anim-child="slide-up delay-6" class="tabs -underline mt-60 js-tabs is-in-view">
                        <div class="tabs__content mt-30 md:mt-20 ">

                            <div class="tabs__pane -tab-item-1 is-tab-el-active">

                                <div class="mainSearch bg-white px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-100">
                                    <form id="form_search" method="POST" class="button-grid items-center">
                                        <!-- Places -->
                                        <div class="searchMenu-loc px-30 lg:py-20 lg:px-0">

                                            <div>
                                                <h4 class="text-15 fw-500 ls-2 lh-16">Địa điểm</h4>

                                                <div class="text-15 text-light-1 ls-2 lh-16">
                                                    <input autocomplete="off" type="search" placeholder="Bạn muốn đi đâu?" name="location" id="location" value="">
                                                </div>
                                            </div>

                                            <!-- <div class="searchMenu-loc__field shadow-2 js-popup-window" data-x-dd="searchMenu-loc" data-x-dd-toggle="-is-active">
                                                <div class="bg-white px-30 py-30 sm:px-0 sm:py-15 rounded-4">
                                                    <div class="y-gap-5 js-results">
                                                        <div>
                                                            <button class="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option">
                                                                <div class="d-flex">
                                                                    <div class="icon-location-2 text-light-1 text-20 pt-4"></div>
                                                                    <div class="ml-10">
                                                                        <div class="text-15 lh-12 fw-500 js-search-option-target">Hà Giang</div>
                                                                        <div class="text-14 lh-12 text-light-1 mt-5">Việt Nam</div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>

                                                        <div>
                                                            <button class="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option">
                                                                <div class="d-flex">
                                                                    <div class="icon-location-2 text-light-1 text-20 pt-4"></div>
                                                                    <div class="ml-10">
                                                                        <div class="text-15 lh-12 fw-500 js-search-option-target">Cà Mau</div>
                                                                        <div class="text-14 lh-12 text-light-1 mt-5">Việt Nam</div>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div> -->
                                        </div>

                                        <!-- Date -->
                                        <div class="searchMenu-date px-30 lg:py-20 lg:px-0 ">

                                            <div>
                                                <label for="date_picker">Ngày đi - ngày về</label>
                                                <input type="date" name="date" id="date_picker" value="">
                                            </div>
                                        </div>

                                        <!-- Search -->
                                        <div class="button-item">
                                            <button type="submit" class=" button -dark-1 h-60 w-200 px-35 col-8 rounded-100 bg-blue-1 text-white">
                                                <i class="icon-search text-20 mr-10"></i>
                                                Tìm kiếm
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Guarantee -->
    <section class="layout-pt-md">
        <div data-anim-wrap="" class="container animated">
            <div class="row y-gap-20 justify-between">

                <div data-anim-child="slide-up delay-1" class="col-lg-3 col-sm-6 is-in-view">

                    <div class="featureIcon -type-1 ">
                        <div class="d-flex justify-center">
                            <img src="img/featureIcons/1/1.svg" alt="image" class="js-lazy loaded" data-ll-status="loaded">
                        </div>

                        <div class="text-center mt-30">
                            <h4 class="text-18 fw-500">Đảm bảo giá tốt nhất</h4>
                            <p class="text-15 mt-10">Chúng tôi đảm bảo khách hàng sẽ đặt được dịch vụ với giá tốt nhất, những chương trình khuyến mãi hấp dẫn nhất</p>
                        </div>
                    </div>

                </div>

                <div data-anim-child="slide-up delay-2" class="col-lg-3 col-sm-6 is-in-view">

                    <div class="featureIcon -type-1 ">
                        <div class="d-flex justify-center">
                            <img src="img/featureIcons/1/2.svg" alt="image" class="js-lazy loaded" data-ll-status="loaded">
                        </div>

                        <div class="text-center mt-30">
                            <h4 class="text-18 fw-500">Dịch vụ tin cậy &amp; Giá trị đích thực</h4>
                            <p class="text-15 mt-10">Đặt lợi ích khách hàng lên trên hết, chúng tôi hỗ trợ khách hàng nhanh và chính xác nhất với dịch vụ tin cậy, giá trị đích thực.</p>
                        </div>
                    </div>

                </div>

                <div data-anim-child="slide-up delay-3" class="col-lg-3 col-sm-6 is-in-view">

                    <div class="featureIcon -type-1 ">
                        <div class="d-flex justify-center">
                            <img src="img/featureIcons/1/3.svg" alt="image" class="js-lazy loaded" data-ll-status="loaded">
                        </div>

                        <div class="text-center mt-30">
                            <h4 class="text-18 fw-500">Đảm bảo chất lượng</h4>
                            <p class="text-15 mt-10">Chúng tôi liên kết chặt chẽ với các đối tác, khảo sát định kỳ để đảm bảo chất lượng tốt nhất của dịch vụ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Tour H Giá Chót -->
    <section class="layout-pt-md layout-pb-md">
        <div class="container">
            <div class="row justify-center" id="all_tours"></div>
        </div>
    </section>

    <!-- Banner -->
    <section class="layout-pt-md layout-pb-md">
        <div class="container">
            <div class="row y-gap-20">
                <div data-anim="slide-up" class="col-md-6 is-in-view">

                    <div class="ctaCard -type-1 rounded-4 ">
                        <div class="ctaCard__image ratio ratio-16:9">
                            <img class="img-ratio js-lazy loaded" src="img/backgrounds/1.png" alt="image" data-ll-status="loaded">
                        </div>

                        <div class="ctaCard__content py-70 px-70 lg:py-30 lg:px-30">
                            <h4 class="text-40 lg:text-26 text-white">Những điều nên làm ở Quảng Ninh</h4>

                            <div class="d-inline-block mt-30">
                                <a href="tourExp.php" class="button px-48 py-15 -blue-1 -min-180 bg-white text-dark-1">Khám phá ngay</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div data-anim="slide-up delay-1" class="col-md-6 is-in-view">

                    <div class="ctaCard -type-1 rounded-4 ">
                        <div class="ctaCard__image ratio ratio-16:9">
                            <img class="img-ratio js-lazy loaded" src="img/backgrounds/2.png" alt="image" data-ll-status="loaded">
                        </div>

                        <div class="ctaCard__content py-70 px-70 lg:py-30 lg:px-30">

                            <div class="text-15 fw-500 text-white mb-10">Tận hưởng hè sale lớn</div>


                            <h4 class="text-40 lg:text-26 text-white">Lên đến 70%</h4>

                            <div class="d-inline-block mt-30">
                                <a href="#" class="button px-48 py-15 -blue-1 -min-180 bg-white text-dark-1">Tìm hiểu thêm</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!-- Tour trong Nước -->
    <section class="layout-pt-md layout-pb-md">
        <div class="container">
            <div class="row y-gap-30 pt-40 sm:pt-20" id="domestic_tours"></div>
            <!-- Title -->

        </div>
    </section>

    <!-- Tour quốc tế -->
    <section class="layout-pt-md layout-pb-md">
        <div class="container">
            <div class="row y-gap-30 pt-40 sm:pt-20" id="inter_tours"></div>
            <!-- Title -->

        </div>
    </section>

    <!-- Popular Places -->
    <section class="layout-pt-md layout-pb-md">
        <div data-anim-wrap="" class="container animated">
            <div data-anim-child="slide-up delay-1" class="row justify-center text-center is-in-view">
                <div class="col-auto">
                    <div class="sectionTitle -md">
                        <h2 class="sectionTitle__title">Điểm đến ưa thích</h2>
                        <p class=" sectionTitle__text mt-5 sm:mt-0">Các điểm đến du lịch trong nước và nước ngoài</p>
                    </div>
                </div>
            </div>
            <div class="row y-gap-40 justify-between pt-40 sm:pt-20">

                <div data-anim-child="slide-up delay-3" class="col-xl-3 col-md-4 col-sm-6 is-in-view">

                    <a href="#" class="citiesCard -type-3 d-block rounded-4 ">
                        <div class="citiesCard__image ratio ratio-1:1">
                            <img class="img-ratio js-lazy loaded" src="img/destinations/2/1.png" alt="image" data-ll-status="loaded">
                        </div>

                        <div class="citiesCard__content px-30 py-30">
                            <h4 class="text-26 fw-600 text-white">Sa Pa</h4>
                            <div class="text-15 text-white">1,714 Điểm đến</div>
                        </div>
                    </a>

                </div>

                <div data-anim-child="slide-up delay-4" class="col-xl-6 col-md-4 col-sm-6 is-in-view">

                    <a href="#" class="citiesCard -type-3 d-block rounded-4 h-full">
                        <div class="citiesCard__image ">
                            <img class="img-ratio js-lazy loaded" src="img/destinations/2/2.png" alt="image" data-ll-status="loaded">
                        </div>

                        <div class="citiesCard__content px-30 py-30">
                            <h4 class="text-26 fw-600 text-white">Vinh Hạ Long</h4>
                            <div class="text-15 text-white">1,714 Điểm đến</div>
                        </div>
                    </a>

                </div>

                <div data-anim-child="slide-up delay-5" class="col-xl-3 col-md-4 col-sm-6 is-in-view">

                    <a href="#" class="citiesCard -type-3 d-block rounded-4 ">
                        <div class="citiesCard__image ratio ratio-1:1">
                            <img class="img-ratio js-lazy loaded" src="img/destinations/2/3.png" alt="image" data-ll-status="loaded">
                        </div>

                        <div class="citiesCard__content px-30 py-30">
                            <h4 class="text-26 fw-600 text-white">Đà Nẵng</h4>
                            <div class="text-15 text-white">1,714 Điểm đến</div>
                        </div>
                    </a>

                </div>

                <div data-anim-child="slide-up delay-6" class="col-xl-6 col-md-4 col-sm-6 is-in-view">

                    <a href="#" class="citiesCard -type-3 d-block rounded-4 h-full">
                        <div class="citiesCard__image ">
                            <img class="img-ratio js-lazy loaded" src="img/destinations/2/4.png" alt="image" data-ll-status="loaded">
                        </div>

                        <div class="citiesCard__content px-30 py-30">
                            <h4 class="text-26 fw-600 text-white">Nha Trang</h4>
                            <div class="text-15 text-white">1,714 Điểm đến</div>
                        </div>
                    </a>

                </div>

                <div data-anim-child="slide-up delay-7" class="col-xl-3 col-md-4 col-sm-6 is-in-view">

                    <a href="#" class="citiesCard -type-3 d-block rounded-4 ">
                        <div class="citiesCard__image ratio ratio-1:1">
                            <img class="img-ratio js-lazy loaded" src="img/destinations/2/5.png" alt="image" data-ll-status="loaded">
                        </div>

                        <div class="citiesCard__content px-30 py-30">
                            <h4 class="text-26 fw-600 text-white">Châu Âu</h4>
                            <div class="text-15 text-white">1,714 Điểm đến</div>
                        </div>
                    </a>

                </div>

                <div data-anim-child="slide-up delay-8" class="col-xl-3 col-md-4 col-sm-6 is-in-view">

                    <a href="#" class="citiesCard -type-3 d-block rounded-4 ">
                        <div class="citiesCard__image ratio ratio-1:1">
                            <img class="img-ratio js-lazy loaded" src="img/destinations/2/6.png" alt="image" data-ll-status="loaded">
                        </div>

                        <div class="citiesCard__content px-30 py-30">
                            <h4 class="text-26 fw-600 text-white">Châu Á</h4>
                            <div class="text-15 text-white">1,714 Điểm đến</div>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    </section>

    <!-- Cảm hứng du lịch -->
    <section class="layout-pt-sm layout-pb-md">
        <div data-anim-wrap="" class="container animated">
            <!-- Title -->
            <div data-anim-child="slide-up delay-1" class="row y-gap-20 justify-between items-end is-in-view">
                <div class="col-auto">
                    <div class="sectionTitle -md">
                        <h2 class="sectionTitle__title">Cảm hứng du lịch</h2>
                        <p class=" sectionTitle__text mt-5 sm:mt-0">Thông tin về du lịch, văn hóa, ẩm thực, các sự kiện và lễ hội tại các điểm đến Việt nam, Đông Nam Á và Thế Giới</p>
                    </div>
                </div>

                <div class="col-auto">
                    <a href="" class="button -blue-1 -md bg-blue-1-05 text-blue-1">
                        Xem tất cả
                        <i class="icon-arrow-top-right ml-10"></i>
                    </a>
                </div>
            </div>

            <!-- Blog -->
            <div class="row y-gap-30 pt-40" id="post_cards">
            </div>
        </div>
    </section>

    <!-- Email -->
    <?php include 'commons/email.php'; ?>

    <!-- Footer -->
    <?php include 'commons/footer.php'; ?>
</body>

</html>