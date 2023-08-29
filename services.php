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

                        <div class="sidebar__item">
                            <h5 class="text-18 fw-500 mb-10">Loại hình dịch vụ</h5>
                            <div class="sidebar-checkbox" id="service_type_filter">
                                <!-- service types' list -->

                            </div>
                        </div>
                        <div class="sidebar__item">
                            <h5 class="text-18 fw-500 mb-10">Sắp xếp theo giá</h5>
                            <div class="col-12 py-10">
                                <div class="form-radio d-flex items-center ">
                                    <div class="radio">
                                        <input type="radio" name="price" onchange=" sortByPrice({sortAsc:true})" checked>
                                        <div class="radio__mark">
                                            <div class="radio__icon"></div>
                                        </div>
                                    </div>
                                    <div class="text-14 lh-1 ml-10">Tăng dần</div>
                                </div>
                            </div>
                            <div class="col-12 py-10">
                                <div class="form-radio d-flex items-center ">
                                    <div class="radio">
                                        <input type="radio" name="price" onchange=" sortByPrice({sortAsc:false})">
                                        <div class="radio__mark">
                                            <div class="radio__icon"></div>
                                        </div>
                                    </div>
                                    <div class="text-14 lh-1 ml-10">Giảm dần</div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
                <div class="col-xl-9 col-lg-8">
                    <div class="row y-gap-10 items-center justify-between">
                        <!-- đếm tổng số dịch vụ trực thuộc -->
                        <div class="col-auto">Tìm thấy: <span class="fw-700 text-blue-1" id="service_detail_count_content"></span></div> 
                        <div class="col-auto">
                            <button class="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1" onclick="clearServiceFilter()">
                                Xoá bộ lọc
                            </button>
                        </div>
                    </div>
                    <!-- main content -->
                    <div class="mt-30 mb-30"></div>
                    <div class="col-xl-12 col-lg-12" id="service_detail_list_content">
                    </div>
                    <!-- pagination -->
                    <div class="border-top-light pt-30">
                        <div class="row x-gap-10 y-gap-20 justify-center">

                            <div class="col-md-auto md:order-3">
                                <div class="row x-gap-20 y-gap-20 items-center" id="services_pagination">

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