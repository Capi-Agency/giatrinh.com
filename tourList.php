<!DOCTYPE html>
<html lang="en">
<?php include 'commons/head.php'; ?>
<!-- Head -->
<body>
    <!-- Nav -->
    <?php include 'commons/nav.php'; ?>

    <!-- Body -->
    <div class="container">
        <div class="row y-gap-30">
          <div class="col-xl-1 col-lg-2 lg:d-none">
          </div>

          <div class="col-xl-9 col-lg-8">
            <div class="row y-gap-10 items-center justify-between">
              <div class="col-auto">
                <div class="text-18"><span class="fw-500">3,269 properties</span> in Europe</div>
              </div>

              <div class="col-auto">
                <div class="row x-gap-20 y-gap-20">
                  <div class="col-auto">
                    <button class="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1">
                      <i class="icon-up-down text-14 mr-10"></i>
                      Sort
                    </button>
                  </div>

                  <div class="col-auto d-none lg:d-block">
                    <button data-x-click="filterPopup" class="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1">
                      <i class="icon-up-down text-14 mr-10"></i>
                      Filter
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="filterPopup bg-white" data-x="filterPopup" data-x-toggle="-is-active">
              <aside class="sidebar -mobile-filter">
                <div data-x-click="filterPopup" class="-icon-close">
                  <i class="icon-close"></i>
                </div>

                <div class="sidebar__item -no-border">
                  <h5 class="text-18 fw-500 mb-10">Category Types</h5>
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

                          <div class="text-15 ml-10">Tours</div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">92</div>
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

                          <div class="text-15 ml-10">Attractions </div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">45</div>
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

                          <div class="text-15 ml-10">Day Trips</div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">21</div>
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

                          <div class="text-15 ml-10">Outdoor Activities </div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">78</div>
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

                          <div class="text-15 ml-10">Concerts &amp; Shows </div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">679</div>
                      </div>
                    </div>

                  </div>
                </div>

                <div class="sidebar__item">
                  <h5 class="text-18 fw-500 mb-10">Other</h5>
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

                          <div class="text-15 ml-10">Free cancellation</div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">92</div>
                      </div>
                    </div>

                  </div>
                </div>

                <div class="sidebar__item pb-30">
                  <h5 class="text-18 fw-500 mb-10">Price</h5>
                  <div class="row x-gap-10 y-gap-30">
                    <div class="col-12">
                      <div class="js-price-rangeSlider">
                        <div class="text-14 fw-500"></div>

                        <div class="d-flex justify-between mb-20">
                          <div class="text-15 text-dark-1">
                            <span class="js-lower"></span>
                            -
                            <span class="js-upper"></span>
                          </div>
                        </div>

                        <div class="px-5">
                          <div class="js-slider"></div>
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

                      <div class="col-auto">
                        <div class="text-15 text-light-1">92</div>
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

                          <div class="text-15 ml-10">1 to 4 hours </div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">45</div>
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

                          <div class="text-15 ml-10">4 hours to 1 day </div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">21</div>
                      </div>
                    </div>

                  </div>
                </div>

                <div class="sidebar__item">
                  <h5 class="text-18 fw-500 mb-10">Languages</h5>
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

                          <div class="text-15 ml-10">English</div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">92</div>
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

                          <div class="text-15 ml-10">Spanish</div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">45</div>
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

                          <div class="text-15 ml-10">French</div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">45</div>
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

                          <div class="text-15 ml-10">Turkish</div>

                        </div>

                      </div>

                      <div class="col-auto">
                        <div class="text-15 text-light-1">21</div>
                      </div>
                    </div>

                  </div>
                </div>

              </aside>
            </div>

            <div class="border-top-light mt-30 mb-30"></div>

            <div class="row y-gap-30">

              <div class="col-lg-4 col-sm-6">

                <a href="tour-single.html" class="tourCard -type-1 rounded-4 ">
                  <div class="tourCard__image">

                    <div class="cardImage ratio ratio-1:1">
                      <div class="cardImage__content">

                        <img class="rounded-4 col-12" src="img/lists/tour/2/1.png" alt="image">


                      </div>

                      <div class="cardImage__wishlist">
                        <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                          <i class="icon-heart text-12"></i>
                        </button>
                      </div>


                    </div>

                  </div>

                  <div class="tourCard__content mt-10">
                    <div class="d-flex items-center lh-14 mb-5">
                      <div class="text-14 text-light-1">4 ngày 3 đêm</div>
                    </div>

                    <h4 class="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                      <span>Tour Hà Nội - Cam Ranh - Ninh Thuận - Nha Trang - Hà Nội</span>
                    </h4>


                    <div class="row justify-between items-center pt-15">
                      <div class="col-auto">
                        <div class="d-flex items-center">
                          <div class="d-flex items-center x-gap-5">

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                          </div>

                          <div class="text-14 text-light-1 ml-10">3,014 đánh giá</div>
                        </div>
                      </div>

                      <div class="col-auto">
                        <div class="text-14 text-light-1">
                          <span class="text-16 fw-500 text-dark-1">5.590.000đ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

              </div>

              <div class="col-lg-4 col-sm-6">

                <a href="tour-single.html" class="tourCard -type-1 rounded-4 ">
                  <div class="tourCard__image">

                    <div class="cardImage ratio ratio-1:1">
                      <div class="cardImage__content">


                        <div class="cardImage-slider rounded-4 overflow-hidden js-cardImage-slider">
                          <div class="swiper-wrapper">

                            <div class="swiper-slide">
                              <img class="col-12" src="img/lists/tour/2/2.png" alt="image">
                            </div>

                            <div class="swiper-slide">
                              <img class="col-12" src="img/lists/tour/2/4.png" alt="image">
                            </div>

                            <div class="swiper-slide">
                              <img class="col-12" src="img/lists/tour/2/1.png" alt="image">
                            </div>

                          </div>

                          <div class="cardImage-slider__pagination js-pagination"></div>

                          <div class="cardImage-slider__nav -prev">
                            <button class="button -blue-1 bg-white size-30 rounded-full shadow-2 js-prev">
                              <i class="icon-chevron-left text-10"></i>
                            </button>
                          </div>

                          <div class="cardImage-slider__nav -next">
                            <button class="button -blue-1 bg-white size-30 rounded-full shadow-2 js-next">
                              <i class="icon-chevron-right text-10"></i>
                            </button>
                          </div>
                        </div>

                      </div>

                      <div class="cardImage__wishlist">
                        <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                          <i class="icon-heart text-12"></i>
                        </button>
                      </div>


                    </div>

                  </div>

                  <div class="tourCard__content mt-10">
                    <div class="d-flex items-center lh-14 mb-5">
                      <div class="text-14 text-light-1">4 ngày 3 đêm</div>
                    </div>

                    <h4 class="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                      <span>Hà Nội - Nha Trang - Đà Lạt - Hà Nội bay VNA, (tour ghép) tháng 5 </span>
                    </h4>


                    <div class="row justify-between items-center pt-15">
                      <div class="col-auto">
                        <div class="d-flex items-center">
                          <div class="d-flex items-center x-gap-5">

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                          </div>

                          <div class="text-14 text-light-1 ml-10">3,014 đánh giá</div>
                        </div>
                      </div>

                      <div class="col-auto">
                        <div class="text-14 text-light-1">
                          <span class="text-16 fw-500 text-dark-1">6.390.000đ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

              </div>

              <div class="col-lg-4 col-sm-6">

                <a href="tour-single.html" class="tourCard -type-1 rounded-4 ">
                  <div class="tourCard__image">

                    <div class="cardImage ratio ratio-1:1">
                      <div class="cardImage__content">

                        <img class="rounded-4 col-12" src="img/lists/tour/2/3.png" alt="image">


                      </div>

                      <div class="cardImage__wishlist">
                        <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                          <i class="icon-heart text-12"></i>
                        </button>
                      </div>


                    </div>

                  </div>

                  <div class="tourCard__content mt-10">
                    <div class="d-flex items-center lh-14 mb-5">
                      <div class="text-14 text-light-1">4 ngày 3 đêm</div>
                    </div>

                    <h4 class="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                      <span>Tour Kích cầu 6 tỉnh Miền Tây, Bay Việt Nam airlines: Cần Thơ</span>
                    </h4>


                    <div class="row justify-between items-center pt-15">
                      <div class="col-auto">
                        <div class="d-flex items-center">
                          <div class="d-flex items-center x-gap-5">

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                          </div>

                          <div class="text-14 text-light-1 ml-10">3,014 đánh giá</div>
                        </div>
                      </div>

                      <div class="col-auto">
                        <div class="text-14 text-light-1">
                          <span class="text-16 fw-500 text-dark-1">4.990.000đ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

              </div>

              <div class="col-lg-4 col-sm-6">

                <a href="tour-single.html" class="tourCard -type-1 rounded-4 ">
                  <div class="tourCard__image">

                    <div class="cardImage ratio ratio-1:1">
                      <div class="cardImage__content">

                        <img class="rounded-4 col-12" src="img/lists/tour/2/4.png" alt="image">


                      </div>

                      <div class="cardImage__wishlist">
                        <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                          <i class="icon-heart text-12"></i>
                        </button>
                      </div>


                    </div>

                  </div>

                  <div class="tourCard__content mt-10">
                    <div class="d-flex items-center lh-14 mb-5">
                      <div class="text-14 text-light-1">5 ngày 4 đêm</div>
                    </div>

                    <h4 class="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                      <span>Tour ghép kích cầu 2020 HÀ NỘI - NHA TRANG – ĐÀ LẠT – HÀ NỘI ( Bay VN)</span>
                    </h4>


                    <div class="row justify-between items-center pt-15">
                      <div class="col-auto">
                        <div class="d-flex items-center">
                          <div class="d-flex items-center x-gap-5">

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                          </div>

                          <div class="text-14 text-light-1 ml-10">3,014 đánh giá</div>
                        </div>
                      </div>

                      <div class="col-auto">
                        <div class="text-14 text-light-1">
                          <span class="text-16 fw-500 text-dark-1">7.290.000đ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

              </div>

              <div class="col-lg-4 col-sm-6">

                <a href="tour-single.html" class="tourCard -type-1 rounded-4 ">
                  <div class="tourCard__image">

                    <div class="cardImage ratio ratio-1:1">
                      <div class="cardImage__content">

                        <img class="rounded-4 col-12" src="img/lists/tour/2/5.png" alt="image">


                      </div>

                      <div class="cardImage__wishlist">
                        <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                          <i class="icon-heart text-12"></i>
                        </button>
                      </div>


                    </div>

                  </div>

                  <div class="tourCard__content mt-10">
                    <div class="d-flex items-center lh-14 mb-5">
                      <div class="text-14 text-light-1">4 ngày 3 đêm</div>
                    </div>

                    <h4 class="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                      <span>Khám Phá Sông Nước Miền Tây - Cần Thơ - Sóc Trăng _ Bạc Liêu - Cà Mau - Đất Mũi - Châu Đốc - Cần Thơ</span>
                    </h4>


                    <div class="row justify-between items-center pt-15">
                      <div class="col-auto">
                        <div class="d-flex items-center">
                          <div class="d-flex items-center x-gap-5">

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                          </div>

                          <div class="text-14 text-light-1 ml-10">3,014 đánh giá</div>
                        </div>
                      </div>

                      <div class="col-auto">
                        <div class="text-14 text-light-1">
                          <span class="text-16 fw-500 text-dark-1">4.990.000đ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

              </div>

              <div class="col-lg-4 col-sm-6">

                <a href="tour-single.html" class="tourCard -type-1 rounded-4 ">
                  <div class="tourCard__image">

                    <div class="cardImage ratio ratio-1:1">
                      <div class="cardImage__content">

                        <img class="rounded-4 col-12" src="img/lists/tour/2/6.png" alt="image">


                      </div>

                      <div class="cardImage__wishlist">
                        <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                          <i class="icon-heart text-12"></i>
                        </button>
                      </div>


                    </div>

                  </div>

                  <div class="tourCard__content mt-10">
                    <div class="d-flex items-center lh-14 mb-5">
                      <div class="text-14 text-light-1">5 ngày 4 đêm</div>
                    </div>

                    <h4 class="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                      <span>Tour kích cầu bay Việt Nam Airlines : Hà Nội - Đà Nẵng - Bà Nà - Hội An</span>
                    </h4>


                    <div class="row justify-between items-center pt-15">
                      <div class="col-auto">
                        <div class="d-flex items-center">
                          <div class="d-flex items-center x-gap-5">

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                          </div>

                          <div class="text-14 text-light-1 ml-10">3,014 đánh giá</div>
                        </div>
                      </div>

                      <div class="col-auto">
                        <div class="text-14 text-light-1">
                          <span class="text-16 fw-500 text-dark-1">4.690.000đ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

              </div>

              <div class="col-lg-4 col-sm-6">

                <a href="tour-single.html" class="tourCard -type-1 rounded-4 ">
                  <div class="tourCard__image">

                    <div class="cardImage ratio ratio-1:1">
                      <div class="cardImage__content">

                        <img class="rounded-4 col-12" src="img/lists/tour/2/7.png" alt="image">


                      </div>

                      <div class="cardImage__wishlist">
                        <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                          <i class="icon-heart text-12"></i>
                        </button>
                      </div>


                    </div>

                  </div>

                  <div class="tourCard__content mt-10">
                    <div class="d-flex items-center lh-14 mb-5">
                      <div class="text-14 text-light-1">4 ngày 3 đêm</div>
                    </div>

                    <h4 class="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                      <span>Tour ghép Hà Nội - Phú Quốc</span>
                    </h4>


                    <div class="row justify-between items-center pt-15">
                      <div class="col-auto">
                        <div class="d-flex items-center">
                          <div class="d-flex items-center x-gap-5">

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                          </div>

                          <div class="text-14 text-light-1 ml-10">3,014 đánh giá</div>
                        </div>
                      </div>

                      <div class="col-auto">
                        <div class="text-14 text-light-1">
                          <span class="text-16 fw-500 text-dark-1">6.290.000đ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

              </div>

              <div class="col-lg-4 col-sm-6">

                <a href="tour-single.html" class="tourCard -type-1 rounded-4 ">
                  <div class="tourCard__image">

                    <div class="cardImage ratio ratio-1:1">
                      <div class="cardImage__content">

                        <img class="rounded-4 col-12" src="img/lists/tour/2/8.png" alt="image">


                      </div>

                      <div class="cardImage__wishlist">
                        <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                          <i class="icon-heart text-12"></i>
                        </button>
                      </div>


                    </div>

                  </div>

                  <div class="tourCard__content mt-10">
                    <div class="d-flex items-center lh-14 mb-5">
                      <div class="text-14 text-light-1">5 ngày 4 đêm</div>
                    </div>

                    <h4 class="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                      <span>Hà Nội - Cần Thơ - Côn Đảo Linh Thiêng</span>
                    </h4>


                    <div class="row justify-between items-center pt-15">
                      <div class="col-auto">
                        <div class="d-flex items-center">
                          <div class="d-flex items-center x-gap-5">

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                          </div>

                          <div class="text-14 text-light-1 ml-10">3,014 đánh giá</div>
                        </div>
                      </div>

                      <div class="col-auto">
                        <div class="text-14 text-light-1">
                          <span class="text-16 fw-500 text-dark-1">8.790.000đ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

              </div>

              <div class="col-lg-4 col-sm-6">

                <a href="tour-single.html" class="tourCard -type-1 rounded-4 ">
                  <div class="tourCard__image">

                    <div class="cardImage ratio ratio-1:1">
                      <div class="cardImage__content">

                        <img class="rounded-4 col-12" src="img/lists/tour/2/9.png" alt="image">


                      </div>

                      <div class="cardImage__wishlist">
                        <button class="button -blue-1 bg-white size-30 rounded-full shadow-2">
                          <i class="icon-heart text-12"></i>
                        </button>
                      </div>


                    </div>

                  </div>

                  <div class="tourCard__content mt-10">
                    <div class="d-flex items-center lh-14 mb-5">
                      <div class="text-14 text-light-1">3 ngày 2 đêm</div>
                    </div>

                    <h4 class="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                      <span>Hà Nội - Cần Thơ - Côn Đảo Linh Thiêng</span>
                    </h4>


                    <div class="row justify-between items-center pt-15">
                      <div class="col-auto">
                        <div class="d-flex items-center">
                          <div class="d-flex items-center x-gap-5">

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                            <div class="icon-star text-yellow-1 text-10"></div>

                          </div>

                          <div class="text-14 text-light-1 ml-10">3,014 đánh giá</div>
                        </div>
                      </div>

                      <div class="col-auto">
                        <div class="text-14 text-light-1">
                          <span class="text-16 fw-500 text-dark-1">8.190.000đ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

              </div>

            </div>

            <div class="border-top-light mt-30 pt-30">
              <div class="row x-gap-10 y-gap-20 justify-between md:justify-center">
                <div class="col-auto md:order-1">
                  <button class="button -blue-1 size-40 rounded-full border-light">
                    <i class="icon-chevron-left text-12"></i>
                  </button>
                </div>

                <div class="col-md-auto md:order-3">
                  <div class="row x-gap-20 y-gap-20 items-center md:d-none">

                    <div class="col-auto">

                      <div class="size-40 flex-center rounded-full">1</div>

                    </div>

                    <div class="col-auto">

                      <div class="size-40 flex-center rounded-full bg-dark-1 text-white">2</div>

                    </div>

                    <div class="col-auto">

                      <div class="size-40 flex-center rounded-full">3</div>

                    </div>

                    <div class="col-auto">

                      <div class="size-40 flex-center rounded-full bg-light-2">4</div>

                    </div>

                    <div class="col-auto">

                      <div class="size-40 flex-center rounded-full">5</div>

                    </div>

                    <div class="col-auto">

                      <div class="size-40 flex-center rounded-full">...</div>

                    </div>

                    <div class="col-auto">

                      <div class="size-40 flex-center rounded-full">20</div>

                    </div>

                  </div>

                  <div class="row x-gap-10 y-gap-20 justify-center items-center d-none md:d-flex">

                    <div class="col-auto">

                      <div class="size-40 flex-center rounded-full">1</div>

                    </div>

                    <div class="col-auto">

                      <div class="size-40 flex-center rounded-full bg-dark-1 text-white">2</div>

                    </div>

                    <div class="col-auto">

                      <div class="size-40 flex-center rounded-full">3</div>

                    </div>

                  </div>

                  <div class="text-center mt-30 md:mt-10">
                    <div class="text-14 text-light-1">1 – 20 of 300+ properties found</div>
                  </div>
                </div>

                <div class="col-auto md:order-2">
                  <button class="button -blue-1 size-40 rounded-full border-light">
                    <i class="icon-chevron-right text-12"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <!-- Email -->
    <?php include 'commons/email.php'; ?>
    <!-- Footer -->
    <?php include 'commons/footer.php'; ?>
</body>
</html>