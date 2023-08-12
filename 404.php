<!DOCTYPE html>
<html lang="en">
<?php include 'commons/head.php'; ?>
<!-- Head -->

<body>
    <!-- Nav -->
    <?php include 'commons/nav.php'; ?>

    <!-- Body -->
    <section class="layout-pt-lg layout-pb-lg">
        <div class="container">
            <div class="row y-gap-30 justify-between items-center">
                <div class="col-lg-6">
                    <img src="img/general/404.svg" alt="image">
                </div>

                <div class="col-lg-5">
                    <div class="no-page">
                        <div class="no-page__title">40<span class="text-blue-1">4</span></div>

                        <h2 class="text-30 fw-600">Ôi không! Có vẻ như bạn bị lạc rồi.</h2>

                        <div class="pr-30 mt-5">Trang bạn đang tìm kiếm hiện không khả dụng. Thử tìm kiếm lại hoặc sử dụng menu
                            bạn nhé!
                        </div>

                        <div class="d-inline-block mt-40 md:mt-20">
                            <a href="./index.php" class="button -md -dark-1 bg-blue-1 text-white">Quay về trang chủ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php include 'commons/email.php'; ?>
    <!-- Footer -->
    <?php include 'commons/footer.php'; ?>
</body>

</html>