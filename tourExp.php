<!DOCTYPE html>
<html lang="en">
<?php include 'commons/head.php'; ?>
<!-- Head -->

<body>
    <!-- Nav -->
    <?php include 'commons/nav.php'; ?>

    <!-- Body -->
    <div class="header-margin"></div>
    <section data-anim="fade" class="d-flex items-center py-15 border-top-light is-in-view">
        <div class="container">
            <div class="row y-gap-10 items-center justify-between">
                <div class="col-auto">
                    <div class="row x-gap-10 y-gap-5 items-center text-14 text-light-1">
                        <div class="col-auto">
                            <div class=""><a href="index.php">Trang chủ</a></div>
                        </div>
                        <div class="col-auto">
                            <div class="">&gt;</div>
                        </div>
                        <div class="col-auto">
                            <div class="text-dark-1"><a href="#">Danh sách bài viết</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Post List -->
    <section data-anim-wrap="" class="layout-pt-md layout-pb-lg animated">
        <div class="container">
            <!-- Title -->
            <div data-anim-child="slide-up delay-1" class="row justify-center text-center is-in-view">
                <div class="col-auto">
                    <div class="sectionTitle -md">
                        <h2 class="sectionTitle__title">Cẩm nang du lịch</h2>
                        <p class=" sectionTitle__text mt-5 sm:mt-0">Thông tin về du lịch, văn hóa, ẩm thực, các sự kiện và lễ hội tại các điểm đến Việt nam, Đông Nam Á và Thế Giới</p>
                    </div>
                </div>
            </div>

            <!-- Post List -->
            <div data-anim-child="slide-up delay-2" class="tabs -pills-3 pt-30 js-tabs is-in-view">
                <div class="tabs__controls row x-gap-10 justify-center js-tabs-controls">

                    <div class="col-auto">
                        <button class="tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button is-tab-el-active" data-tab-target=".-tab-item-1">Art and culture</button>
                    </div>

                    <div class="col-auto">
                        <button class="tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button " data-tab-target=".-tab-item-2">Beaches</button>
                    </div>

                    <div class="col-auto">
                        <button class="tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button " data-tab-target=".-tab-item-3">Adventure travel</button>
                    </div>

                    <div class="col-auto">
                        <button class="tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button " data-tab-target=".-tab-item-4">Explore</button>
                    </div>

                    <div class="col-auto">
                        <button class="tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button " data-tab-target=".-tab-item-5">Family holidays</button>
                    </div>

                    <div class="col-auto">
                        <button class="tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button " data-tab-target=".-tab-item-6">Air travel</button>
                    </div>

                    <div class="col-auto">
                        <button class="tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button " data-tab-target=".-tab-item-7">Food and drink</button>
                    </div>

                </div>

                <div class="tabs__content pt-30 js-tabs-content">

                    <div class="tabs__pane -tab-item-1 is-tab-el-active">
                        <div class="row y-gap-30">

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="https://cdn3.ivivu.com/2023/08/tour-Nhật-Bản-ivivu-370x215.jpg" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Tour Nhật Bản 5N4Đ: Hành trình Tokyo – Yamanashi, ngắm trọn vẻ đẹp phong cảnh tuyệt sắc</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">Tour Nhật Bản 5N4Đ mang đến bạn hành trình khám phá cảnh sắc trọn vẹn của xứ sở Phù Tang từ Tokyo đến Yamanashi, trải nghiệm tắm onsen tại chân núi Phú Sĩ và check-in thiên đường mua sắm xa…</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/2.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Say đắm trước cảnh sắc thiên nhiên tươi đẹp của “xứ sở kim chi” trong tour Hàn Quốc 4N4Đ
                                        </h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">Trải nghiệm tour Hàn Quốc 4N4Đ với giá ưu đãi chỉ 11.990.000 đồng/khách, bạn sẽ có cơ hội check-in nhiều điểm đến nổi tiếng với cảnh đẹp làm say đắm lòng người hay khám phá nền ẩm thực hấp dẫn…
                                        </div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/3.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Tour Trung Quốc 6N5Đ: Ngắm nhìn thiên nhiên hùng vĩ và thưởng thức ẩm thực đặc sắc</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">Chiêm ngưỡng khung cảnh thiên nhiên tuyệt sắc và không gian văn hóa sống động của Trung Hoa xinh đẹp cùng tour Trung Quốc 6N5Đ lần này, mang đến cho du khách chuyến hành trình mới mẻ và đầy ấn…</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/4.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Tour Hong Kong 5N4Đ: Hành trình độc đáo trên cung đường Hong Kong – Trung Hoa đầy mê hoặc</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">Tour Hong Kong 5N4Đ mở ra hành trình khám phá Trung Hoa xinh đẹp trên cung đường riêng độc đáo, với những điểm đến đẹp mê hoặc, nét văn hóa – lịch sử đặc sắc và nền ẩm thực dễ…</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/5.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Đẹp hút mắt với nét hiện đại và xanh mát của “đảo quốc sư tử” trong tour Singapore 3N2Đ</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">Singapore nổi tiếng là một trong những quốc gia xanh – sạch – đẹp nhất thế giới. Cùng iVIVU khám phá vẻ đẹp của “đảo quốc sư tử” nhiều hơn trong tour Singapore 3N2Đ với nhiều trải nghiệm mới lạ…</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/6.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Tour Trung Quốc 5N4Đ: Thưởng ngoạn đất nước Trung Hoa tươi đẹp và đầy sống động</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">Với tour Trung Quốc 5N4Đ, du khách có dịp du ngoạn qua những điểm đến có cảnh sắc thiên nhiên lãng mạn, những công trình kiến trúc đặc sắc giao thoa giữa nét cổ kính và hiện đại của vùng…</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/7.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Khám phá Malaysia đa sắc màu theo cách riêng trong tour City Break 3N2Đ Kuala Lumpur</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">Tận hưởng kỳ nghỉ ngắn ngày theo cách riêng cùng tour City Break 3N2Đ Kuala Lumpur mang đến bạn hành trình đa sắc màu với những điểm đến, ẩm thực và nét văn hóa đầy thú vị của thành phố,…</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/8.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Chiêm ngưỡng thiên nhiên tươi đẹp bốn mùa trong tour Hàn Quốc 5N4Đ đầy lãng mạn</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">Vẻ đẹp của “xứ sở kim chi” luôn làm du khách phải thổn thức với những khung cảnh thiên nhiên tươi đẹp bốn mùa và những điểm đến đầy hấp dẫn, cùng iVIVU trải nghiệm những khoảnh khắc tuyệt vời…</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/9.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Tour Tây Bắc 3N2Đ: Đến Mù Cang Chải chiêm ngưỡng ruộng bậc thang mùa lúa chín đẹp rực rỡ</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">Vùng đất Tây Bắc luôn làm du khách phải xiêu lòng bởi phong cảnh thiên nhiên tươi đẹp, con người thân thiện cùng văn hóa giàu bản sắc. Hãy đến tour Tây Bắc 3N2Đ để khám phá nhiều hơn vùng…</div>
                                    </div>
                                </a>

                            </div>

                        </div>

                        <div class="border-top-light mt-30 pt-30">
                            <div class="row x-gap-10 y-gap-20 justify-between md:justify-center">
                                <div class="col-auto md:order-1">
                                    <button class="button -blue-1 size-40 rounded-full border-light">
                                        <i class="icon-chevron-left text-12"></i>
                                    </button>
                                </div>

                                <div class="col-md-auto md:order-3">
                                    <div class="row x-gap-20 y-gap-20 items-center md:d-none">

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">1</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full bg-dark-1 text-white">2</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">3</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full bg-light-2">4</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">5</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">...</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">20</div>

                                        </div>

                                    </div>

                                    <div class="row x-gap-10 y-gap-20 justify-center items-center d-none md:d-flex">

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">1</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full bg-dark-1 text-white">2</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">3</div>

                                        </div>

                                    </div>

                                    <div class="text-center mt-30 md:mt-10">
                                        <div class="text-14 text-light-1">1 – 20 of 300+ properties found</div>
                                    </div>
                                </div>

                                <div class="col-auto md:order-2">
                                    <button class="button -blue-1 size-40 rounded-full border-light">
                                        <i class="icon-chevron-right text-12"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tabs__pane -tab-item-2 ">
                        <div class="row y-gap-30">

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/1.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">10 European ski destinations you should visit this winter</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/2.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Booking travel during Corona: good advice in an uncertain time</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/3.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Where can I go? 5 amazing countries that are open right now</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/4.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">10 European ski destinations you should visit this winter</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/5.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Booking travel during Corona: good advice in an uncertain time</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/6.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Where can I go? 5 amazing countries that are open right now</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/7.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">10 European ski destinations you should visit this winter</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/8.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Booking travel during Corona: good advice in an uncertain time</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/9.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Where can I go? 5 amazing countries that are open right now</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                        </div>

                        <div class="border-top-light mt-30 pt-30">
                            <div class="row x-gap-10 y-gap-20 justify-between md:justify-center">
                                <div class="col-auto md:order-1">
                                    <button class="button -blue-1 size-40 rounded-full border-light">
                                        <i class="icon-chevron-left text-12"></i>
                                    </button>
                                </div>

                                <div class="col-md-auto md:order-3">
                                    <div class="row x-gap-20 y-gap-20 items-center md:d-none">

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">1</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full bg-dark-1 text-white">2</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">3</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full bg-light-2">4</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">5</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">...</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">20</div>

                                        </div>

                                    </div>

                                    <div class="row x-gap-10 y-gap-20 justify-center items-center d-none md:d-flex">

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">1</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full bg-dark-1 text-white">2</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">3</div>

                                        </div>

                                    </div>

                                    <div class="text-center mt-30 md:mt-10">
                                        <div class="text-14 text-light-1">1 – 20 of 300+ properties found</div>
                                    </div>
                                </div>

                                <div class="col-auto md:order-2">
                                    <button class="button -blue-1 size-40 rounded-full border-light">
                                        <i class="icon-chevron-right text-12"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tabs__pane -tab-item-3 ">
                        <div class="row y-gap-30">

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/1.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">10 European ski destinations you should visit this winter</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/2.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Booking travel during Corona: good advice in an uncertain time</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/3.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Where can I go? 5 amazing countries that are open right now</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/4.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">10 European ski destinations you should visit this winter</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/5.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Booking travel during Corona: good advice in an uncertain time</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/6.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Where can I go? 5 amazing countries that are open right now</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/7.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">10 European ski destinations you should visit this winter</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/8.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Booking travel during Corona: good advice in an uncertain time</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/9.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Where can I go? 5 amazing countries that are open right now</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                        </div>

                        <div class="border-top-light mt-30 pt-30">
                            <div class="row x-gap-10 y-gap-20 justify-between md:justify-center">
                                <div class="col-auto md:order-1">
                                    <button class="button -blue-1 size-40 rounded-full border-light">
                                        <i class="icon-chevron-left text-12"></i>
                                    </button>
                                </div>

                                <div class="col-md-auto md:order-3">
                                    <div class="row x-gap-20 y-gap-20 items-center md:d-none">

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">1</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full bg-dark-1 text-white">2</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">3</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full bg-light-2">4</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">5</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">...</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">20</div>

                                        </div>

                                    </div>

                                    <div class="row x-gap-10 y-gap-20 justify-center items-center d-none md:d-flex">

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">1</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full bg-dark-1 text-white">2</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">3</div>

                                        </div>

                                    </div>

                                    <div class="text-center mt-30 md:mt-10">
                                        <div class="text-14 text-light-1">1 – 20 of 300+ properties found</div>
                                    </div>
                                </div>

                                <div class="col-auto md:order-2">
                                    <button class="button -blue-1 size-40 rounded-full border-light">
                                        <i class="icon-chevron-right text-12"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tabs__pane -tab-item-4 ">
                        <div class="row y-gap-30">

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/1.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">10 European ski destinations you should visit this winter</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/2.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Booking travel during Corona: good advice in an uncertain time</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/3.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Where can I go? 5 amazing countries that are open right now</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/4.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">10 European ski destinations you should visit this winter</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/5.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Booking travel during Corona: good advice in an uncertain time</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/6.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Where can I go? 5 amazing countries that are open right now</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/7.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">10 European ski destinations you should visit this winter</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/8.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Booking travel during Corona: good advice in an uncertain time</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/9.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Where can I go? 5 amazing countries that are open right now</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                        </div>

                        <div class="border-top-light mt-30 pt-30">
                            <div class="row x-gap-10 y-gap-20 justify-between md:justify-center">
                                <div class="col-auto md:order-1">
                                    <button class="button -blue-1 size-40 rounded-full border-light">
                                        <i class="icon-chevron-left text-12"></i>
                                    </button>
                                </div>

                                <div class="col-md-auto md:order-3">
                                    <div class="row x-gap-20 y-gap-20 items-center md:d-none">

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">1</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full bg-dark-1 text-white">2</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">3</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full bg-light-2">4</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">5</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">...</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">20</div>

                                        </div>

                                    </div>

                                    <div class="row x-gap-10 y-gap-20 justify-center items-center d-none md:d-flex">

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">1</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full bg-dark-1 text-white">2</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">3</div>

                                        </div>

                                    </div>

                                    <div class="text-center mt-30 md:mt-10">
                                        <div class="text-14 text-light-1">1 – 20 of 300+ properties found</div>
                                    </div>
                                </div>

                                <div class="col-auto md:order-2">
                                    <button class="button -blue-1 size-40 rounded-full border-light">
                                        <i class="icon-chevron-right text-12"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tabs__pane -tab-item-5 ">
                        <div class="row y-gap-30">

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/1.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">10 European ski destinations you should visit this winter</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/2.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Booking travel during Corona: good advice in an uncertain time</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/3.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Where can I go? 5 amazing countries that are open right now</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/4.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">10 European ski destinations you should visit this winter</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/5.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Booking travel during Corona: good advice in an uncertain time</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/6.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Where can I go? 5 amazing countries that are open right now</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/7.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">10 European ski destinations you should visit this winter</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/8.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Booking travel during Corona: good advice in an uncertain time</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/9.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Where can I go? 5 amazing countries that are open right now</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                        </div>

                        <div class="border-top-light mt-30 pt-30">
                            <div class="row x-gap-10 y-gap-20 justify-between md:justify-center">
                                <div class="col-auto md:order-1">
                                    <button class="button -blue-1 size-40 rounded-full border-light">
                                        <i class="icon-chevron-left text-12"></i>
                                    </button>
                                </div>

                                <div class="col-md-auto md:order-3">
                                    <div class="row x-gap-20 y-gap-20 items-center md:d-none">

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">1</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full bg-dark-1 text-white">2</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">3</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full bg-light-2">4</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">5</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">...</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">20</div>

                                        </div>

                                    </div>

                                    <div class="row x-gap-10 y-gap-20 justify-center items-center d-none md:d-flex">

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">1</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full bg-dark-1 text-white">2</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">3</div>

                                        </div>

                                    </div>

                                    <div class="text-center mt-30 md:mt-10">
                                        <div class="text-14 text-light-1">1 – 20 of 300+ properties found</div>
                                    </div>
                                </div>

                                <div class="col-auto md:order-2">
                                    <button class="button -blue-1 size-40 rounded-full border-light">
                                        <i class="icon-chevron-right text-12"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tabs__pane -tab-item-6 ">
                        <div class="row y-gap-30">

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/1.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">10 European ski destinations you should visit this winter</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/2.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Booking travel during Corona: good advice in an uncertain time</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/3.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Where can I go? 5 amazing countries that are open right now</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/4.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">10 European ski destinations you should visit this winter</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/5.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Booking travel during Corona: good advice in an uncertain time</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/6.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Where can I go? 5 amazing countries that are open right now</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/7.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">10 European ski destinations you should visit this winter</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/8.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Booking travel during Corona: good advice in an uncertain time</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/9.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Where can I go? 5 amazing countries that are open right now</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                        </div>

                        <div class="border-top-light mt-30 pt-30">
                            <div class="row x-gap-10 y-gap-20 justify-between md:justify-center">
                                <div class="col-auto md:order-1">
                                    <button class="button -blue-1 size-40 rounded-full border-light">
                                        <i class="icon-chevron-left text-12"></i>
                                    </button>
                                </div>

                                <div class="col-md-auto md:order-3">
                                    <div class="row x-gap-20 y-gap-20 items-center md:d-none">

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">1</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full bg-dark-1 text-white">2</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">3</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full bg-light-2">4</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">5</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">...</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">20</div>

                                        </div>

                                    </div>

                                    <div class="row x-gap-10 y-gap-20 justify-center items-center d-none md:d-flex">

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">1</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full bg-dark-1 text-white">2</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">3</div>

                                        </div>

                                    </div>

                                    <div class="text-center mt-30 md:mt-10">
                                        <div class="text-14 text-light-1">1 – 20 of 300+ properties found</div>
                                    </div>
                                </div>

                                <div class="col-auto md:order-2">
                                    <button class="button -blue-1 size-40 rounded-full border-light">
                                        <i class="icon-chevron-right text-12"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tabs__pane -tab-item-7 ">
                        <div class="row y-gap-30">

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/1.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">10 European ski destinations you should visit this winter</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/2.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Booking travel during Corona: good advice in an uncertain time</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/3.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Where can I go? 5 amazing countries that are open right now</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/4.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">10 European ski destinations you should visit this winter</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/5.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Booking travel during Corona: good advice in an uncertain time</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/6.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Where can I go? 5 amazing countries that are open right now</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/7.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">10 European ski destinations you should visit this winter</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/8.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Booking travel during Corona: good advice in an uncertain time</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                            <div class="col-lg-4 col-sm-6">

                                <a href="" class="blogCard -type-1 d-block ">
                                    <div class="blogCard__image">
                                        <div class="ratio ratio-4:3 rounded-8">
                                            <img class="img-ratio js-lazy loaded" src="img/blog/grids/9.png" alt="image" data-ll-status="loaded">
                                        </div>
                                    </div>

                                    <div class="pt-20">
                                        <h4 class="text-dark-1 text-18 fw-500">Where can I go? 5 amazing countries that are open right now</h4>
                                        <div class="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                                    </div>
                                </a>

                            </div>

                        </div>

                        <div class="border-top-light mt-30 pt-30">
                            <div class="row x-gap-10 y-gap-20 justify-between md:justify-center">
                                <div class="col-auto md:order-1">
                                    <button class="button -blue-1 size-40 rounded-full border-light">
                                        <i class="icon-chevron-left text-12"></i>
                                    </button>
                                </div>

                                <div class="col-md-auto md:order-3">
                                    <div class="row x-gap-20 y-gap-20 items-center md:d-none">

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">1</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full bg-dark-1 text-white">2</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">3</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full bg-light-2">4</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">5</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">...</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">20</div>

                                        </div>

                                    </div>

                                    <div class="row x-gap-10 y-gap-20 justify-center items-center d-none md:d-flex">

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">1</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full bg-dark-1 text-white">2</div>

                                        </div>

                                        <div class="col-auto">

                                            <div class="size-40 flex-center rounded-full">3</div>

                                        </div>

                                    </div>

                                    <div class="text-center mt-30 md:mt-10">
                                        <div class="text-14 text-light-1">1 – 20 of 300+ properties found</div>
                                    </div>
                                </div>

                                <div class="col-auto md:order-2">
                                    <button class="button -blue-1 size-40 rounded-full border-light">
                                        <i class="icon-chevron-right text-12"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <!-- Email -->
    <?php include 'commons/email.php'; ?>
    <!-- Footer -->
    <?php include 'commons/footer.php'; ?>
</body>

</html>