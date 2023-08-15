<!DOCTYPE html>
<html lang="en">
<?php include 'commons/head.php'; ?>
<!-- Head -->

<body>
    <!-- Nav -->
    <?php include 'commons/nav.php'; ?>

    <!-- Body -->
    <div class="header-margin"></div>

    <!-- Breadcrumb -->
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
                            <div class="text-dark-1"><a href="#">Cẩm nang du lịch</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Post List -->
    <section data-anim-wrap="" class="layout-pt-sm layout-pb-lg animated">
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

            <!-- Post -->
            <div data-anim-child="slide-up delay-2" class="tabs -pills-3 pt-30 js-tabs is-in-view">
                <!-- Tags -->
                <div class="tabs__controls row x-gap-10 justify-center js-tabs-controls" id="category_list_content">
                </div>

                <div class="tabs__content pt-30 js-tabs-content">
                    <div class="tabs__pane -tab-item-1 is-tab-el-active">
                        <!-- Post List -->
                        <div class="row y-gap-30" id="post_list_content">
                        </div>
                        <!-- end post list -->

                        <!-- pagination -->
                        <div class="border-top-light mt-30 pt-30">
                            <div class="row x-gap-10 y-gap-20 justify-center">
                                <div class="col-auto">
                                    <div class="row x-gap-20 y-gap-20 items-center" id="post_pagination">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--end pagination -->
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