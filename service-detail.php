<!DOCTYPE html>
<html lang="en">
<?php include 'commons/head.php'; ?>
<!-- Head -->
<!-- Nav -->
<?php include 'commons/nav.php'; ?>
<!-- Body -->
<div class="header-margin"></div>
<!-- Breadcrumb -->

<body>
    <!-- Intro -->
    <section data-anim-wrap class="layout-pt-md is-in-view">
        <div data-anim-child="slide-up delay-2" class="container">
            <div class="row y-gap-40 justify-center text-center">
                <div class="col-8">
                    <h1 class="text-30 fw-600" id="service_title">@Service's title</h1>
                </div>
                <div class="col-12">
                    <img src="img/blog/single/1.png" id="service_cover" alt="image" class="col-12 rounded-8">
                </div>
            </div>
        </div>
    </section>
    <!-- end: Intro -->

    <!-- main content -->
    <section data-anim-wrap class="layout-pt-md layout-pb-md is-in-view">
        <div class="container" data-anim-child="slide-up delay-2">
            <div class="row y-gap-30 justify-center">
                <div class="col-lg-8">
                    <div id="service_content">
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="d-flex justify-end">
                        <div class="w-360 lg:w-full d-flex flex-column items-center">
                            <div class="col-lg-12">

                                <div class="d-flex justify-end">
                                    <div class="w-360 lg:w-full d-flex flex-column items-center">
                                        <div class="px-30 py-30 rounded-4 border-light bg-white shadow-4">
                                            <div class="text-14 text-light-1">
                                                Chi phí: từ <span class="text-24 fw-700 text-blue-1 ml-5" id="service_price"></span> đ
                                            </div>

                                            <div class="row y-gap-20 pt-30">
                                                <div class="col-12">
                                                    <div class="searchMenu-date px-20 py-10 border-light rounded-4 ">
                                                        <h4 class="text-15 fw-500 ls-2 lh-16 text-light-1"> Trạng thái</h4>
                                                        <h3 class=" text-15 ls-2 lh-16 text-blue-1 tour_duration uppercase" id="service_status"></h3>
                                                    </div>
                                                </div>

                                                <div class="col-12">
                                                    <a href="https://giatrinh.com/contact-us">
                                                    <button class="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white">
                                                        Liên hệ ngay
                                                    </button>
                                                    </a>
                                                </div>
                                            </div>

                                            <div class="d-flex items-center pt-20">
                                                <div class="size-40 flex-center bg-light-2 rounded-full">
                                                    <i class="icon-check text-16 text-green-2"></i>
                                                </div>
                                                <div class="text-14 lh-16 ml-10">94% khách hàng đề xuất trải nghiệm này</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end: main content -->
    <!-- Email -->
    <?php include 'commons/email.php'; ?>
    <!-- Footer -->
    <?php include 'commons/footer.php'; ?>
</body>