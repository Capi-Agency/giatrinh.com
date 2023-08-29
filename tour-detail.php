<!DOCTYPE html>
<html lang="en">
<?php include 'commons/head.php'; ?>
<!-- Head -->

<body>
  <!-- Nav -->
  <?php include 'commons/nav.php'; ?>

  <!-- Body -->
  <div class="header-margin"></div>
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
              <div class="text-dark-1"><a href="#">Bài viết</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Tour chi tiết -->
  <section class="pt-20">
    <div class="container">
      <div class="row y-gap-15 justify-between items-end">
        <div class="col-auto">
          <h1 class="text-30 fw-600" id="tour_title"></h1>
          <div class="row x-gap-20 y-gap-20 items-center pt-10">
            <div class="col-auto">
              <div class="row x-gap-10 items-center">
                <div class="col-auto">
                  <div class="d-flex x-gap-5 items-center">
                    <i class="icon-placeholder text-16 text-light-1"></i>
                    <div class="text-15 text-light-1" id="tour_type"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="pt-40 js-pin-container">
    <div class="container">
      <div class="row y-gap-30">
        <div class="row col-lg-8">
          <div class="col-12">
            <img id="tour_cover" alt="image" class="col-12 rounded-8">
          </div>
          <h3 class="text-22 fw-500 mt-30">
            Tổng quan
          </h3>

          <div class="row y-gap-30 justify-between pt-20">

            <div class="col-md-auto col-6">
              <div class="d-flex">
                <i class="icon-clock text-22 text-blue-1 mr-10"></i>
                <div class="text-15 lh-15">
                  Thời gian:<br> <span class="tour_duration"></span>
                </div>
              </div>
            </div>

            <div class="col-md-auto col-6">
              <div class="d-flex">
                <i class="icon-customer text-22 text-blue-1 mr-10"></i>
                <div class="text-15 lh-15">
                  Số lượng người:<br> <span id="tour_group_size">Đi theo đoàn</span>
                </div>
              </div>
            </div>

            <div class="col-md-auto col-6">
              <div class="d-flex">
                <i class="icon-route text-22 text-blue-1 mr-10"></i>
                <div class="text-15 lh-15">
                  Di chuyển:<br> <span id="tour_trans"></span>
                </div>
              </div>
            </div>

            <div class="col-md-auto col-6">
              <div class="d-flex">
                <i class="icon-access-denied text-22 text-blue-1 mr-10"></i>
                <div class="text-15 lh-15">
                  Ăn uống:<br> <span id="tour_foods"></span>
                </div>
              </div>
            </div>

          </div>
          <div class="border-top-light mt-40 mb-40"></div>

          <div class="row x-gap-40 y-gap-40">
            <div class="col-12" id="tour_description">

            </div>
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
                        Giá từ <span class="text-24 fw-700 text-blue-1 ml-5" id="tour_price"></span> đ
                      </div>

                      <div class="row y-gap-20 pt-30">
                        <div class="col-12">
                          <div class="searchMenu-date px-20 py-10 border-light rounded-4 ">
                            <h4 class="text-15 fw-500 ls-2 lh-16 text-light-1"> Thời Gian</h4>
                            <h3 class=" text-15 ls-2 lh-16 text-blue-1 tour_duration"></h3>
                          </div>
                        </div>

                        <div class="col-12">
                          <div class="searchMenu-date px-20 py-10 border-light rounded-4 ">
                            <h4 class="text-15 fw-500 ls-2 lh-16 text-light-1"> Lịch khởi hành</h4>
                            <h3 class="text-15 ls-2 lh-16 text-blue-1"> Quanh năm</h3>
                          </div>
                        </div>

                        <div class="col-12">
                          <button class="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white">
                            Liên hệ đặt chỗ 
                          </button>
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
  <!-- tour tương tự -->
  <section class="layout-pt-md layout-pb-md">
    <div class="container">
      <!-- card tour -->
      <div class="row y-gap-30 pt-40 sm:pt-20" id="related_tours">


        <!-- end card tour -->
      </div>
    </div>
  </section>
  <!-- end tour tương tự -->

  <!-- tour giờ chót -->
  <section class="layout-pt-md layout-pb-md">
    <div class="container">
      <div class="row y-gap-30 sm:pt-20" id="all_tours">

        <!-- end card tour -->
      </div>
    </div>
  </section>
  <!-- end tour giờ chót -->

  <!-- Email -->
  <?php include 'commons/Email.php'; ?>
  <!-- Footer -->
  <?php include 'commons/footer.php'; ?>
</body>

</html>