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
          <h1 class="text-40 md:text-25 fw-600 text-white" id="company_name">@Tên công ty</h1>
          <div class="text-white mt-15" id="company_slogan">@Slogan</div>
        </div>
      </div>
    </div>
  </section>

  <section class="layout-pt-lg layout-pb-md">
    <div data-anim-wrap class="container">
      <div data-anim-child="slide-up delay-1" class="row justify-center text-center">
        <div class="col-6">
          <div class="sectionTitle -md">
            <h2 class="sectionTitle__title uppercase">Về Gia Trình</h2>
            <p class=" sectionTitle__text mt-5 sm:mt-0" id="company_short_description">@Short desc</p>
          </div>
        </div>
      </div>

      <div class="row y-gap-40 justify-between pt-50" data-anim-child="slide-up delay-2">

        <div class="col-lg-3 col-sm-6">

          <div class="featureIcon -type-1 ">
            <div class="d-flex justify-center">
              <img src="#" data-src="img/featureIcons/1/1.svg" alt="image" class="js-lazy">
            </div>

            <div class="text-center mt-30">
              <h4 class="text-18 fw-500">Chi phí tốt nhất</h4>
              <p class="text-15 mt-10">Đảm bảo chi phí rẻ hơn thị trường.</p>
            </div>
          </div>

        </div>

        <div data-anim-child="slide-up delay-3" class="col-lg-3 col-sm-6">

          <div class="featureIcon -type-1 ">
            <div class="d-flex justify-center">
              <img src="#" data-src="img/featureIcons/1/2.svg" alt="image" class="js-lazy">
            </div>

            <div class="text-center mt-30">
              <h4 class="text-18 fw-500">Đặt vé dễ dàng</h4>
              <p class="text-15 mt-10">Bạn không cần mất nhiều thời gian để tìm và đặt một chuyến du lịch phù hợp</p>
            </div>
          </div>

        </div>

        <div data-anim-child="slide-up delay-4" class="col-lg-3 col-sm-6">

          <div class="featureIcon -type-1 ">
            <div class="d-flex justify-center">
              <img src="#" data-src="img/featureIcons/1/3.svg" alt="image" class="js-lazy">
            </div>

            <div class="text-center mt-30">
              <h4 class="text-18 fw-500">Chăm sóc khác hàng 24/7</h4>
              <p class="text-15 mt-10">Đội ngũ phục vụ tận tâm.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>

  <section class="layout-pt-md">
    <div class="container" data-anim-wrap class="container">
      <div class="row y-gap-30 justify-between items-center" data-anim-child="slide-up delay-2">
        <div class="col-lg-12" id="company_description">
          @Description
        </div>
      </div>
    </div>
  </section>

  <section class="layout-pt-lg layout-pb-lg">
    <div class="container">
      <div class="row y-gap-20 justify-between items-end">
        <div class="col-auto">
          <div class="sectionTitle -md">
            <h2 class="sectionTitle__title">Địa điểm nổi tiếng</h2>
            <p class=" sectionTitle__text mt-5 sm:mt-0">Còn chần chừ gì mà không đi ngay hôm nay</p>
          </div>
        </div>

        <div class="col-auto">

          <div class="d-flex x-gap-15 items-center justify-center">
            <div class="col-auto">
              <button class="d-flex items-center text-24 arrow-left-hover js-team-prev">
                <i class="icon icon-arrow-left"></i>
              </button>
            </div>

            <div class="col-auto">
              <div class="pagination -dots text-border js-team-pag"></div>
            </div>

            <div class="col-auto">
              <button class="d-flex items-center text-24 arrow-right-hover js-team-next">
                <i class="icon icon-arrow-right"></i>
              </button>
            </div>
          </div>

        </div>
      </div>

      <div class="overflow-hidden pt-40 js-section-slider" data-gap="30" data-slider-cols="xl-5 lg-4 md-2 sm-2 base-1" data-nav-prev="js-team-prev" data-pagination="js-team-pag" data-nav-next="js-team-next">
        <div class="swiper-wrapper" id="locations_slider">
          <!-- Locations' card -->
          <div class="swiper-slide">
            <div class="">
              <img src="img/team/1.png" alt="image" class="rounded-4 col-12">

              <div class="mt-10">
                <div class="text-18 lh-15 fw-500">Cody Fisher</div>
                <div class="text-14 lh-15">Medical Assistant</div>
              </div>
            </div>
          </div>
          <!-- end Locations' card -->
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