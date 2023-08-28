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
                <div class="col-auto">
                    <div id="service_content">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end: main content -->
    <!-- labor services -->
    <section data-anim-wrap class="layout-pt-sm layout-pb-md">
        <div data-anim-child="slide-up delay-2" class="container animated" id="services_list">

        </div>
    </section>
    <!-- end labor -->
    <!-- other services -->
    <!-- end other services -->
    <!-- Email -->
    <?php include 'commons/email.php'; ?>
    <!-- Footer -->
    <?php include 'commons/footer.php'; ?>
</body>