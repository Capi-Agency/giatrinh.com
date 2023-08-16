<!DOCTYPE html>
<html lang="en">
<?php include 'commons/head.php'; ?>
<!-- Head -->

<body>
  <!-- Nav -->
  <?php include 'commons/nav.php'; ?>

  <!-- Body -->
  <div class="header-margin"></div>
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
          <div class="text-white">&gt;</div>
          <div><a class="text-white p-2" href="#">Dịch vụ thuê xe</a></div>
        </div>
      </div>
    </div>
  </section>
  <!-- Bảng 1 -->
  <section class="layout-pt-md layout-pb-md">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <div class="sectionTitle -md">
            <h2 class="sectionTitle__title text-blue-1" id="service_car_title"></h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-light-2 col-12">
    <div class="container">
      <div class="row col-12" id="service_car_content">
      </div>
    </div>
    </div>
  </section>
  <!-- Đảm bảo -->
  <section class="layout-pt-sm layout-pb-sm">
    <div data-anim-wrap="" class="container animated">
      <div data-anim-child="slide-up delay-1" class="row justify-center text-center is-in-view">
        <div class="sectionTitle -md">
          <h2 class="sectionTitle__title justify-center">Lợi ích thuê xe tại Gia Trinh</h2>
        </div>
        <div class="row y-gap-40 justify-between pt-40 sm:pt-20">

          <div data-anim-child="slide-up delay-2" class="col-lg-4 col-sm-6 is-in-view">

            <div class="featureIcon -type-1 -hover-shadow px-50 py-50 lg:px-24 lg:py-15">
              <div class="d-flex justify-center">
                <img src="img/featureIcons/2/1.svg" alt="image" class="js-lazy loaded" data-ll-status="loaded">
              </div>

              <div class="text-center mt-30">
                <h4 class="text-18 fw-500">Giá tốt nhất</h4>
                <p class="text-15 mt-10">Chọc lọc giá từ nhiều nhà xe, báo giá chính xác đến từng km. Có xuất hóa đơn đỏ</p>
              </div>
            </div>

          </div>

          <div data-anim-child="slide-up delay-3" class="col-lg-4 col-sm-6 is-in-view">

            <div class="featureIcon -type-1 -hover-shadow px-50 py-50 lg:px-24 lg:py-15">
              <div class="d-flex justify-center">
                <img src="img/featureIcons/2/2.svg" alt="image" class="js-lazy loaded" data-ll-status="loaded">
              </div>

              <div class="text-center mt-30">
                <h4 class="text-18 fw-500">Thoải mái như xe nhà</h4>
                <p class="text-15 mt-10">Hoàn toàn chủ động lịch trình: xe đi trong ngày, 2 ngày 1 đêm, đưa đón tham quan,... Xe đời mới</p>
              </div>
            </div>

          </div>

          <div data-anim-child="slide-up delay-4" class="col-lg-4 col-sm-6 is-in-view">

            <div class="featureIcon -type-1 -hover-shadow px-50 py-50 lg:px-24 lg:py-15">
              <div class="d-flex justify-center">
                <img src="img/featureIcons/2/3.svg" alt="image" class="js-lazy loaded" data-ll-status="loaded">
              </div>

              <div class="text-center mt-30">
                <h4 class="text-18 fw-500">Bác tài chuyên nghiệp</h4>
                <p class="text-15 mt-10">Lái xe chuyên tuyến, rành đường. Đưa đón cẩn thận, đúng giờ, chu đáo suốt hành trình</p>
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