<!DOCTYPE html>
<html lang="en">
<?php include 'commons/head.php'; ?>
<!-- Head -->

<body>
  <!-- Nav -->
  <?php include 'commons/nav.php'; ?>

  <!-- Body -->
  <div class="header-margin">

    <!-- Banner Header -->
    <section class="section-bg layout-pt-lg layout-pb-lg">
      <div class="section-bg__item col-12">
        <img src="https://images.unsplash.com/photo-1507431489734-ef0dbfbf88e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" alt="image">
      </div>
      <div class="container">
        <div class="row justify-center text-center">
          <div class="col-xl-6 col-lg-8 col-md-10">
            <h1 class="text-60 md:text-25 fw-700 text-white">GiaTrinh</h1>
            <div class="text-white">Người bạn du lịch đồng hành cùng bạn.</div>
          </div>
          <div class="d-flex mt-3 justify-center text-center text-white-1">
            <div><a class="text-white p-2" href="index.php">Trang chủ</a></div>
            <div class="text-white">></div>
            <div><a class="text-white p-2" href="#">Giới thiệu</a></div>
          </div>
        </div>
      </div>
    </section>
    <!-- Main -->
    <section class=" layout-pb-md bg-light-2 col-12 row justify-content-center">
      <div class="container col-6 justify-content-center">
        <div class="row y-gap-30 ">
          <div class="row pt-50 col-12 ">
            <div class="text-30 justify flex-center text-center lh-1 pb-3 text-blue-1 mb-10 ">
              <b id="service_plane_title"></b>
            </div>

          </div>

        </div>
      </div>
      <div class="col-8 row y-gap-30 justify-content-center" id="service_plane_content">

      </div>
    </section>

    <!-- Lợi ích -->
    <section class="layout-pt-sm layout-pb-sm">
      <div data-anim-wrap="" class="container animated">
        <div data-anim-child="slide-up delay-1" class="row justify-center text-center is-in-view">
          <div class="col-auto">
            <div class="sectionTitle -md">
              <h2 class="sectionTitle__title">Lợi ích khi mua vé máy bay tại Giatrinh</h2>
            </div>
            <div class="row y-gap-40 justify-between pt-40 sm:pt-20">

              <div data-anim-child="slide-up delay-2" class="col-lg-4 col-sm-6 is-in-view">

                <div class="featureIcon -type-1 -hover-shadow px-50 py-50 lg:px-24 lg:py-15">
                  <div class="d-flex justify-center">
                    <img src="img/featureIcons/2/1.svg" alt="image" class="js-lazy loaded" data-ll-status="loaded">
                  </div>

                  <div class="text-center mt-30">
                    <h4 class="text-18 fw-500">Giá tốt nhất</h4>
                    <p class="text-15 mt-10">Chọc lọc giá từ nhiều đối tác, báo giá chính xác đến từng địa điểm, có xuất hóa
                      đơn đỏ</p>
                  </div>
                </div>

              </div>

              <div data-anim-child="slide-up delay-3" class="col-lg-4 col-sm-6 is-in-view">

                <div class="featureIcon -type-1 -hover-shadow px-50 py-50 lg:px-24 lg:py-15">
                  <div class="d-flex justify-center">
                    <img src="img/featureIcons/2/2.svg" alt="image" class="js-lazy loaded" data-ll-status="loaded">
                  </div>

                  <div class="text-center mt-30">
                    <h4 class="text-18 fw-500">Đơn giản & nhanh chóng</h4>
                    <p class="text-15 mt-10">Mua vé dễ dàng, thủ tục nhanh chóng</p>
                  </div>
                </div>

              </div>

              <div data-anim-child="slide-up delay-4" class="col-lg-4 col-sm-6 is-in-view">

                <div class="featureIcon -type-1 -hover-shadow px-50 py-50 lg:px-24 lg:py-15">
                  <div class="d-flex justify-center">
                    <img src="img/featureIcons/2/3.svg" alt="image" class="js-lazy loaded" data-ll-status="loaded">
                  </div>

                  <div class="text-center mt-30">
                    <h4 class="text-18 fw-500">Dịch vụ chăm sóc khách hàng 24/7</h4>
                    <p class="text-15 mt-10">Tổng đài chăm sóc khách hàng luôn sẵn sàng phục vụ</p>
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