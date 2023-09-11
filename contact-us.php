<!DOCTYPE html>
<html lang="en">
<?php include 'commons/head.php'; ?>
<!-- Head -->

<body>
  <!-- Nav -->
  <?php include 'commons/nav.php'; ?>

  <!-- Body -->
  <div class="header-margin"></div>
  <div class="ratio ratio-16:9">
    <div class="map-ratio">
      <img id="header_img" class="map js-lazy" style="width: 100%; object-fit:cover;" alt="company banner"/>
    </div>
  </div>
 <?php include 'commons/toastmsg.php' ?>
  <section>
    <form id="form" class="relative container" method="POST">
      <div class="row justify-end">
        <div class="col-xl-5 col-lg-7">
          <div class="map-form px-40 pt-40 pb-50 lg:px-30 lg:py-30 md:px-24 md:py-24 bg-white rounded-4 shadow-4">
            <div class="text-22 fw-500">
              Gửi tin nhắn cho chúng tôi
            </div>

            <div class="row y-gap-20 pt-20">
              <div class="col-12">

                <div class="form-input " id="js-form-name">
                  <input type="text" required  name="name" id="js-form-name-value">
                  <label class="lh-1 text-16 text-light-1">Tên đầy đủ</label>
                </div>
                <div id="name-error" class="error"></div>
              </div>
              <div class="col-12">
                <div class="form-input " id="js-form-email">
                  <input type="email" required  name="email" id="js-form-email-value">
                  <label class="lh-1 text-16 text-light-1">Email</label>
                </div>
                <div id="email-error" class="error"> </div>
              </div>
              <div class="col-12">
                <div class="form-input " id="js-form-title">
                  <input type="text" required  name="title" id="js-form-title-value">
                  <label class="lh-1 text-16 text-light-1">Tiêu đề</label>
                </div>
                <div id="title-error" class="error"> </div>
              </div>
              <div class="col-12">

                <div class="form-input " id="js-form-content">
                  <textarea required rows="4"  name="content" id="js-form-content-value"></textarea>
                  <label class="lh-1 text-16 text-light-1">Nội dung</label>
                </div>
                <div id="content-error" class="error">.</div>
              </div>
              <button class="col-auto" type="submit">

                <div href="" class="button px-24 h-50 -dark-1 bg-blue-1 text-white">
                  Gửi tin nhắn <div class="icon-arrow-top-right ml-15"></div>
                </div>

              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
  <section class="layout-pt-md layout-pb-lg">
    <div class="container">
      <div class="row x-gap-80 y-gap-20 justify-between">
        <div class="col-12">
          <div class="text-30 sm:text-24 fw-600">Liên hệ với chúng tôi </div>
        </div>

        <div class="col-lg-3">
          <div class="text-14 text-light-1">Địa chỉ</div>
          <div class="text-18 fw-500 mt-10" id="company_address"></div>
        </div>

        <div class="col-auto">
          <div class="text-14 text-light-1">Chăm sóc khách hàng miễn phí</div>
          <div class="text-18 fw-500 mt-10" ><a href="" id="company_phone1"></a> </div>
        </div>

        <div class="col-auto">
          <div class="text-14 text-light-1">Cần hỗ trợ trực tiếp ?</div>
          
          <div class="text-18 fw-500 mt-10" > <a href="" id="company_email1"></a></div>
        </div>
      </div>
    </div>
  </section>

  <section class="layout-pt-lg layout-pb-lg bg-blue-2">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <div class="sectionTitle -md">
            <h2 class="sectionTitle__title">Tại sao bạn nên chọn GiaTrinh</h2>
            <!-- <p class=" sectionTitle__text mt-5 sm:mt-0">These popular destinations have a lot to offer</p> -->
          </div>
        </div>
      </div>

      <div class="row y-gap-40 justify-between pt-50">

        <div class="col-lg-3 col-sm-6">

          <div class="featureIcon -type-1 ">
            <div class="d-flex justify-center">
              <img src="#" data-src="img/featureIcons/1/1.svg" alt="image" class="js-lazy">
            </div>

            <div class="text-center mt-30">
              <h4 class="text-18 fw-500">Đảm bảo mức giá tốt nhất</h4>
              <p class="text-15 mt-10">Chúng tôi mang cho bạn mức giá tốt nhất.</p>
            </div>
          </div>

        </div>

        <div class="col-lg-3 col-sm-6">

          <div class="featureIcon -type-1 ">
            <div class="d-flex justify-center">
              <img src="#" data-src="img/featureIcons/1/2.svg" alt="image" class="js-lazy">
            </div>

            <div class="text-center mt-30">
              <h4 class="text-18 fw-500">Booking nhanh chóng & dễ dàng</h4>
              <p class="text-15 mt-10">Booking nhanh chóng dễ dàng.</p>
            </div>
          </div>

        </div>

        <div class="col-lg-3 col-sm-6">

          <div class="featureIcon -type-1 ">
            <div class="d-flex justify-center">
              <img src="#" data-src="img/featureIcons/1/3.svg" alt="image" class="js-lazy">
            </div>

            <div class="text-center mt-30">
              <h4 class="text-18 fw-500">Chăm sóc khách hàng 24/7</h4>
              <p class="text-15 mt-10">Đường dây chăm sóc khách hàng sẵn sàng phục vụ 24/7.</p>
            </div>
          </div>

        </div>

      </div>
    </div>

  </section>
  <!-- js -->
  <script src="js/vendors.js"></script>
  <script src="js/main.js"></script>
  <!-- Email -->
  <?php include 'commons/email.php'; ?>
  <!-- Footer -->
  <?php include 'commons/footer.php'; ?>
</body>

</html>