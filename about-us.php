<!DOCTYPE html>
<html lang="en">
<?php include 'commons/head.php'; ?>
<!-- Head -->

<body>
    <!-- Nav -->
    <?php include 'commons/nav.php'; ?>
    <!-- Body -->
    <div class="header-margin"></div>


    <div class="header-margin"></div>

    <section class="section-bg layout-pt-lg layout-pb-lg">
        <div class="section-bg__item col-12">
            <img src="img/pages/about/1.png" alt="image">
        </div>

        <div class="container">
            <div class="row justify-center text-center">
                <div class="col-xl-6 col-lg-8 col-md-10">
                    <h1 class="text-40 md:text-25 fw-600 text-white" id="company_name"></h1>
                    <div class="text-white mt-15" id="company_slogan"></div>
                    <p class="text-white mt-5 sm:mt-0" id="company_short_description"></p>
                </div>
            </div>
        </div>
    </section>

    <section class="layout-pt-md layout-pb-md">
        <div class="container" data-anim-wrap class="container">
            <div class="row y-gap-30 justify-between items-center" data-anim-child="slide-up delay-2">
                <div class="col-lg-12" id="company_description">
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