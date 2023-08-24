<!DOCTYPE html>
<html lang="en">
<?php include 'commons/head.php'; ?>
<!-- Head -->

<body>
    <!-- Nav -->
    <?php include 'commons/nav.php'; ?>

    <!-- Body -->
    <div class="header-margin"></div>


    <section class="layout-pt-md layout-pb-lg">
        <div class="container">
            <div class="row y-gap-30">

                <div class="col-xl-3 col-lg-4 lg:d-none">
                    <aside class="sidebar y-gap-40">
                        <div class="sidebar__item -no-border">
                            <div class="px-20 py-20 bg-light-2 rounded-4">
                                <h5 class="text-18 fw-500 mb-10">Tìm kiếm</h5>
                                <div class="row y-gap-20 pt-20" id="js-search-form">
                                    <div class="col-12">
                                        <div class="px-20 py-10 bg-white rounded-4">

                                            <div class="searchMenu-loc js-form-dd js-liverSearch">
                                            

                                                <div class="d-flex" data-x-dd-click="searchMenu-loc">
                                                    <i class="icon-location-2 text-20 text-light-1 mt-5"></i>

                                                    <div class="ml-10">
                                                        <h4 class="text-15 fw-500 ls-2 lh-16">Địa điểm</h4>
                                                        <div class="text-15 text-light-1 ls-2 lh-16">
                                                            <input autocomplete="off" type="search" placeholder="Bạn muốn đi đâu?" class="js-search" id="js-search">
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="searchMenu-loc__field shadow-2 js-popup-window" data-x-dd="searchMenu-loc" id="js-popup-window">
                                                    <div class="bg-white px-30 py-30 sm:px-0 sm:py-15 rounded-4">
                                                        <div class="y-gap-5 js-results">

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="px-20 py-10 bg-white rounded-4">

                                            <div class="searchMenu-date  js-form-dd js-calendar">

                                                <div class="d-flex" data-x-dd-click="searchMenu-date">
                                                    <i class="icon-calendar-2 text-20 text-light-1 mt-5"></i>

                                                    <div class="ml-10">
                                                        <h4 class="text-15 fw-500 ls-2 lh-16">Ngày đến - Ngày về</h4>
                                                        <div class="text-15 text-light-1 ls-2 lh-16">
                                                            <input type="text" name="duration" placeholder="Vui lòng chọn ngày..." id="js-date-picker" >
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <button class="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white" id="js-btn-submit">
                                            <i class="icon-search text-20 mr-10"></i>
                                            Tìm kiếm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="sidebar__item">
                            <h5 class="text-18 fw-500 mb-10">Duration</h5>
                            <div class="sidebar-checkbox">

                                <div class="row y-gap-10 items-center justify-between">
                                    <div class="col-auto">
                                        <div class="d-flex items-center">
                                            <div class="form-checkbox ">
                                                <input type="checkbox" name="name">
                                                <div class="form-checkbox__mark">
                                                    <div class="form-checkbox__icon icon-check"></div>
                                                </div>
                                            </div>
                                            <div class="text-15 ml-10">Up to 1 hour</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row y-gap-10 items-center justify-between">
                                    <div class="col-auto">
                                        <div class="d-flex items-center">
                                            <div class="form-checkbox ">
                                                <input type="checkbox" name="name">
                                                <div class="form-checkbox__mark">
                                                    <div class="form-checkbox__icon icon-check"></div>
                                                </div>
                                            </div>
                                            <div class="text-15 ml-10">Up to 1 hour</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row y-gap-10 items-center justify-between">
                                    <div class="col-auto">
                                        <div class="d-flex items-center">
                                            <div class="form-checkbox ">
                                                <input type="checkbox" name="name">
                                                <div class="form-checkbox__mark">
                                                    <div class="form-checkbox__icon icon-check"></div>
                                                </div>
                                            </div>
                                            <div class="text-15 ml-10">Up to 1 hour</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="sidebar__item">
                            <h5 class="text-18 fw-500 mb-10">Duration</h5>
                            <div class="sidebar-checkbox">

                                <div class="row y-gap-10 items-center justify-between">
                                    <div class="col-auto">
                                        <div class="d-flex items-center">
                                            <div class="form-checkbox ">
                                                <input type="checkbox" name="name">
                                                <div class="form-checkbox__mark">
                                                    <div class="form-checkbox__icon icon-check"></div>
                                                </div>
                                            </div>
                                            <div class="text-15 ml-10">Up to 1 hour</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row y-gap-10 items-center justify-between">
                                    <div class="col-auto">
                                        <div class="d-flex items-center">
                                            <div class="form-checkbox ">
                                                <input type="checkbox" name="name">
                                                <div class="form-checkbox__mark">
                                                    <div class="form-checkbox__icon icon-check"></div>
                                                </div>
                                            </div>
                                            <div class="text-15 ml-10">Up to 1 hour</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row y-gap-10 items-center justify-between">
                                    <div class="col-auto">
                                        <div class="d-flex items-center">
                                            <div class="form-checkbox ">
                                                <input type="checkbox" name="name">
                                                <div class="form-checkbox__mark">
                                                    <div class="form-checkbox__icon icon-check"></div>
                                                </div>
                                            </div>
                                            <div class="text-15 ml-10">Up to 1 hour</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="sidebar__item">
                            <h5 class="text-18 fw-500 mb-10">Duration</h5>
                            <div class="sidebar-checkbox">

                                <div class="row y-gap-10 items-center justify-between">
                                    <div class="col-auto">
                                        <div class="d-flex items-center">
                                            <div class="form-checkbox ">
                                                <input type="checkbox" name="name">
                                                <div class="form-checkbox__mark">
                                                    <div class="form-checkbox__icon icon-check"></div>
                                                </div>
                                            </div>
                                            <div class="text-15 ml-10">Up to 1 hour</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row y-gap-10 items-center justify-between">
                                    <div class="col-auto">
                                        <div class="d-flex items-center">
                                            <div class="form-checkbox ">
                                                <input type="checkbox" name="name">
                                                <div class="form-checkbox__mark">
                                                    <div class="form-checkbox__icon icon-check"></div>
                                                </div>
                                            </div>
                                            <div class="text-15 ml-10">Up to 1 hour</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row y-gap-10 items-center justify-between">
                                    <div class="col-auto">
                                        <div class="d-flex items-center">
                                            <div class="form-checkbox ">
                                                <input type="checkbox" name="name">
                                                <div class="form-checkbox__mark">
                                                    <div class="form-checkbox__icon icon-check"></div>
                                                </div>
                                            </div>
                                            <div class="text-15 ml-10">Up to 1 hour</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="sidebar__item">
                            <h5 class="text-18 fw-500 mb-10">Duration</h5>
                            <div class="sidebar-checkbox">

                                <div class="row y-gap-10 items-center justify-between">
                                    <div class="col-auto">
                                        <div class="d-flex items-center">
                                            <div class="form-checkbox ">
                                                <input type="checkbox" name="name">
                                                <div class="form-checkbox__mark">
                                                    <div class="form-checkbox__icon icon-check"></div>
                                                </div>
                                            </div>
                                            <div class="text-15 ml-10">Up to 1 hour</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row y-gap-10 items-center justify-between">
                                    <div class="col-auto">
                                        <div class="d-flex items-center">
                                            <div class="form-checkbox ">
                                                <input type="checkbox" name="name">
                                                <div class="form-checkbox__mark">
                                                    <div class="form-checkbox__icon icon-check"></div>
                                                </div>
                                            </div>
                                            <div class="text-15 ml-10">Up to 1 hour</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row y-gap-10 items-center justify-between">
                                    <div class="col-auto">
                                        <div class="d-flex items-center">
                                            <div class="form-checkbox ">
                                                <input type="checkbox" name="name">
                                                <div class="form-checkbox__mark">
                                                    <div class="form-checkbox__icon icon-check"></div>
                                                </div>
                                            </div>
                                            <div class="text-15 ml-10">Up to 1 hour</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </aside>

                </div>

                <div class="col-xl-9 col-lg-8">
                    <div class="row y-gap-10 items-center justify-between">
                        <div class="col-auto"id="tour_list_meta_content">
                            
                        </div>
                    </div>

                    <div class="mt-30 mb-30"></div>
                    <div class="col-xl-12 col-lg-12" id="tour_list_content">
                    </div>
                    <div class="border-top-light mt-30 pt-30">
                        <div class="row x-gap-10 y-gap-20 justify-center">

                            <div class="col-md-auto md:order-3">
                                <div class="row x-gap-20 y-gap-20 items-center" id="tour_list_page_content">

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