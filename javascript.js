$(document).ready(function () {
    var san_pham = {
      path_image: "",
      path_side1: "",
      path_side2: "",
      path_side3: "",
      path_side4: "",
      path_side5: "",
      _content: "",
      _content1: "",
      _price_old: "",
      _price_new: "",
    };

    var sp1 = {};
    sp1.path_image = "./images/1.jpg";
    sp1.path_side1 = "./images/1.1.jpg";
    sp1.path_side2 = "./images/1.2.jpg";
    sp1.path_side3 = "./images/1.3.jpg";
    sp1.path_side4 = "./images/1.4.jpg";
    sp1._content = "Laptop ASUS TUF Gaming A15 FA507NV-LP046W (Ryzen™ 7-7735HS | 8GB | 512GB | RTX™ 4060 8GB | 15.6-inch FHD 144Hz | Win 11| Jaeger Gray)";
    sp1._content1="Mã sản phẩm: NBAS1276"
    sp1._price_old = "34.990.000 đ";
    sp1._price_new = "28.790.000 đ";

    var sp2 = {};
    sp2.path_image = "./images/2.jpg";
    sp2.path_side1 = "./images/2.1.jpg";
    sp2.path_side2 = "./images/2.2.jpg";
    sp2.path_side3 = "./images/2.3.jpg";
    sp2.path_side4 = "./images/2.4.jpg";
    sp2._content = "Laptop Lenovo Legion 5 15IAH7H 82RC0090VN (Intel Core i5-12500H |";
    sp2._content1= "Mã SP: NBLN0718"
    sp2._price_old = "34.600.000 đ";
    sp2._price_new = "25.990.000 đ";

    var sp3 = {};
    sp3.path_image = "./images/3.jpg";
    sp3.path_side1 = "./images/3.1.jpg";
    sp3.path_side2 = "./images/3.2.jpg";
    sp3.path_side3 = "./images/3.3.jpg";
    sp3.path_side4 = "./images/3.4.jpg";
    sp3._content = "Laptop ASUS TUF Gaming A15 FA507NV-LP046W (Ryzen™ 7-7735HS | 8GB | 512GB | RTX™ 4060 8GB | 15.6-inch FHD 144Hz | Win 11| Jaeger Gray)";
    sp3._content1="Mã sản phẩm: NBAS1276"
    sp3._price_old = "34.990.000 đ";
    sp3._price_new = "28.790.000 đ";

    var sp4 = {};
    sp4.path_image = "./images/4.jpg";
    sp4.path_side1 = "./images/4.1.jpg";
    sp4.path_side2 = "./images/4.2.jpg";
    sp4.path_side3 = "./images/4.3.jpg";
    sp4._content = "Laptop ASUS TUF Gaming A15 FA507NV-LP046W (Ryzen™ 7-7735HS | 8GB | 512GB | RTX™ 4060 8GB | 15.6-inch FHD 144Hz | Win 11| Jaeger Gray)";
    sp4._content1= "Mã sản phẩm: NBAS1276"
    sp4._price_old = "34.990.000 đ";
    sp4._price_new = "28.790.000 đ";

    var sp5 = {};
    sp5.path_image = "./images/5.jpg";
    sp5.path_side1 = "./images/5.1.jpg";
    sp5.path_side2 = "./images/5.2.jpg";
    sp5._content = "Laptop ASUS TUF Gaming A15 FA507NV-LP046W (Ryzen™ 7-7735HS | 8GB | 512GB | RTX™ 4060 8GB | 15.6-inch FHD 144Hz | Win 11| Jaeger Gray)";
    sp5._content1= "Mã sản phẩm: NBAS1276"
    sp5._price_old = "34.990.000 đ";
    sp5._price_new = "28.790.000 đ";

    var sp6 = {};
    sp6.path_image = "./images/6.png";
    sp6.path_side1 = "./images/6.1.jpg";
    sp6.path_side2 = "./images/6.2.jpg";
    sp6.path_side3 = "./images/6.3.jpg";
    sp6.path_side4 = "./images/6.4.jpg";
    sp6._content = "Laptop ASUS TUF Gaming A15 FA507NV-LP046W (Ryzen™ 7-7735HS | 8GB | 512GB | RTX™ 4060 8GB | 15.6-inch FHD 144Hz | Win 11| Jaeger Gray)";
    sp6._content1= "Mã sản phẩm: NBAS1276"
    sp6._price_old = "34.990.000 đ";
    sp6._price_new = "28.790.000 đ";

    var sp7 = {};
    sp7.path_image = "./images/7.jpg";
    sp7.path_side1 = "./images/7.1.jpg";
    sp7.path_side2 = "./images/7.2.jpg";
    sp7.path_side3 = "./images/7.3.jpg";
    sp7._content = "Laptop ASUS TUF Gaming A15 FA507NV-LP046W (Ryzen™ 7-7735HS | 8GB | 512GB | RTX™ 4060 8GB | 15.6-inch FHD 144Hz | Win 11| Jaeger Gray)";
    sp7._content1= "Mã sản phẩm: NBAS1276"
    sp7._price_old = "34.990.000 đ";
    sp7._price_new = "28.790.000 đ";

    var sp8 = {};
    sp8.path_image = "./images/8.jpg";
    sp8.path_side1 = "./images/8.1.jpg";
    sp8.path_side2 = "./images/8.2.jpg";
    sp8.path_side3 = "./images/8.3.jpg";
    sp8._content = "Laptop ASUS TUF Gaming A15 FA507NV-LP046W (Ryzen™ 7-7735HS | 8GB | 512GB | RTX™ 4060 8GB | 15.6-inch FHD 144Hz | Win 11| Jaeger Gray)";
    sp8._content1= "Mã sản phẩm: NBAS1276"
    sp8._price_old = "34.990.000 đ";
    sp8._price_new = "28.790.000 đ";

    var sp9 = {};
    sp9.path_image = "./images/99.jpg";
    sp9.path_side1 = "./images/9.1.jpg";
    sp9.path_side2 = "./images/9.2.jpg";
    sp9.path_side3 = "./images/9.3.jpg";
    sp9.path_side4 = "./images/9.4.jpg";
    sp9._content = "Laptop ASUS TUF Gaming A15 FA507NV-LP046W (Ryzen™ 7-7735HS | 8GB | 512GB | RTX™ 4060 8GB | 15.6-inch FHD 144Hz | Win 11| Jaeger Gray)";
    sp9._content1= "Mã sản phẩm: NBAS1276"
    sp9._price_old = "34.990.000 đ";
    sp9._price_new = "28.790.000 đ";

    var sp10 = {};
    sp10.path_image = "./images/10.jpg";
    sp10.path_side1 = "./images/10.1.jpg";
    sp10.path_side2 = "./images/10.2.jpg";
    sp10.path_side3 = "./images/10.3.jpg";
    sp10.path_side4 = "./images/10.4.jpg";
    sp10._content = "Laptop ASUS TUF Gaming A15 FA507NV-LP046W (Ryzen™ 7-7735HS | 8GB | 512GB | RTX™ 4060 8GB | 15.6-inch FHD 144Hz | Win 11| Jaeger Gray)";
    sp10._content1= "Mã sản phẩm: NBAS1276"
    sp10._price_old = "34.990.000 đ";
    sp10._price_new = "28.790.000 đ";

    var sp11 = {};
    sp11.path_image = "./images/11.jpg";
    sp11.path_side1 = "./images/11.1.jpg";
    sp11.path_side2 = "./images/11.2.jpg";
    sp11.path_side3 = "./images/11.3.jpg";
    sp11.path_side4 = "./images/11.4.jpg";
    sp11._content = "Laptop ASUS TUF Gaming A15 FA507NV-LP046W (Ryzen™ 7-7735HS | 8GB | 512GB | RTX™ 4060 8GB | 15.6-inch FHD 144Hz | Win 11| Jaeger Gray)";
    sp11._content1= "Mã sản phẩm: NBAS1276"
    sp11._price_old = "34.990.000 đ";
    sp11._price_new = "28.790.000 đ";

    var sp12 = {};
    sp12.path_image = "./images/12.jpg";
    sp12.path_side1 = "./images/12.1.jpg";
    sp12.path_side2 = "./images/12.2.jpg";
    sp12.path_side3 = "./images/12.3.jpg";
    sp12.path_side4 = "./images/12.4.jpg";
    sp12._content = "Laptop ASUS TUF Gaming A15 FA507NV-LP046W (Ryzen™ 7-7735HS | 8GB | 512GB | RTX™ 4060 8GB | 15.6-inch FHD 144Hz | Win 11| Jaeger Gray)";
    sp12._content1= "Mã sản phẩm: NBAS1276"
    sp12._price_old = "34.990.000 đ";
    sp12._price_new = "28.790.000 đ";


    list_sp = [sp1, sp2, sp3, sp4, sp5, sp6, sp7, sp8, sp9, sp10, sp11, sp12];

    $(".load").click(function (e) {
      e.preventDefault();
      let productId = $(this).data("product-id");
      console.log("ID sản phẩm:", productId);
      let _val = this.value;
      path = "";
      path_1 = "";
      path_2 = "";
      path_3 = "";
      path_4 = "";
      content = "";
      content1 ="";
      price_old = "";
      price_new = "";

      if (productId==0) {
        path = list_sp[0].path_image;
        path_1 = list_sp[0].path_side1;
        path_2 = list_sp[0].path_side2;
        path_3 = list_sp[0].path_side3;
        path_4 = list_sp[0].path_side4;
        content = list_sp[0]._content;
        content1 = list_sp[0]._content1;
        price_old = list_sp[0]._price_old;
        price_new = list_sp[0]._price_new;
      } else if (productId==1) {
        path = list_sp[1].path_image;
        path_1 = list_sp[1].path_side1;
        path_2 = list_sp[1].path_side2;
        path_3 = list_sp[1].path_side3;
        path_4 = list_sp[1].path_side4;
        content = list_sp[1]._content;
        content1 = list_sp[1]._content1;
        price_old = list_sp[1]._price_old;
        price_new = list_sp[1]._price_new;
      }else if (productId==2) {
        path = list_sp[2].path_image;
        path_1 = list_sp[2].path_side1;
        path_2 = list_sp[2].path_side2;
        path_3 = list_sp[2].path_side3;
        path_4 = list_sp[2].path_side4;
        content = list_sp[2]._content;
        content1 = list_sp[2]._content1;
        price_old = list_sp[2]._price_old;
        price_new = list_sp[2]._price_new;
      }else if (productId==3) {
        path = list_sp[3].path_image;
        path_1 = list_sp[3].path_side1;
        path_2 = list_sp[3].path_side2;
        path_3 = list_sp[3].path_side3;
        path_4 = list_sp[3].path_side4;
        content = list_sp[3]._content;
        content1 = list_sp[3]._content1;
        price_old = list_sp[3]._price_old;
        price_new = list_sp[3]._price_new;
      }else if (productId==4) {
        path = list_sp[4].path_image;
        path_1 = list_sp[4].path_side1;
        path_2 = list_sp[4].path_side2;
        path_3 = list_sp[4].path_side3;
        path_4 = list_sp[4].path_side4;
        content = list_sp[4]._content;
        content1 = list_sp[4]._content1;
        price_old = list_sp[4]._price_old;
        price_new = list_sp[4]._price_new;
      }else if (productId==5) {
        path = list_sp[5].path_image;
        path_1 = list_sp[5].path_side1;
        path_2 = list_sp[5].path_side2;
        path_3 = list_sp[5].path_side3;
        path_4 = list_sp[5].path_side4;
        content = list_sp[5]._content;
        content1 = list_sp[5]._content1;
        price_old = list_sp[5]._price_old;
        price_new = list_sp[5]._price_new;
      }else if (productId==6) {
        path = list_sp[6].path_image;
        path_1 = list_sp[6].path_side1;
        path_2 = list_sp[6].path_side2;
        path_3 = list_sp[6].path_side3;
        path_4 = list_sp[6].path_side4;
        content = list_sp[6]._content;
        content1 = list_sp[6]._content1;
        price_old = list_sp[6]._price_old;
        price_new = list_sp[6]._price_new;
      }else if (productId==7) {
        path = list_sp[7].path_image;
        path_1 = list_sp[7].path_side1;
        path_2 = list_sp[7].path_side2;
        path_3 = list_sp[7].path_side3;
        path_4 = list_sp[7].path_side4;
        content = list_sp[7]._content;
        content1 = list_sp[7]._content1;
        price_old = list_sp[7]._price_old;
        price_new = list_sp[7]._price_new;
      }
      else if (productId==8) {
        path = list_sp[8].path_image;
        path_1 = list_sp[8].path_side1;
        path_2 = list_sp[8].path_side2;
        path_3 = list_sp[8].path_side3;
        path_4 = list_sp[8].path_side4;
        content = list_sp[8]._content;
        content1 = list_sp[8]._content1;
        price_old = list_sp[8]._price_old;
        price_new = list_sp[8]._price_new;
      }else if (productId==9) {
        path = list_sp[9].path_image;
        path_1 = list_sp[9].path_side1;
        path_2 = list_sp[9].path_side2;
        path_3 = list_sp[9].path_side3;
        path_4 = list_sp[9].path_side4;
        content = list_sp[9]._content;
        content1 = list_sp[9]._content1;
        price_old = list_sp[9]._price_old;
        price_new = list_sp[9]._price_new;
      }
      else if (productId==10) {
        path = list_sp[10].path_image;
        path_1 = list_sp[10].path_side1;
        path_2 = list_sp[10].path_side2;
        path_3 = list_sp[10].path_side3;
        path_4 = list_sp[10].path_side4;
        content = list_sp[10]._content;
        content1 = list_sp[10]._content1;
        price_old = list_sp[10]._price_old;
        price_new = list_sp[10]._price_new;
      }else if (_val = 11) {
        path = list_sp[11].path_image;
        path_1 = list_sp[11].path_side1;
        path_2 = list_sp[11].path_side2;
        path_3 = list_sp[11].path_side3;
        path_4 = list_sp[11].path_side4;
        content = list_sp[11]._content;
        content1 = list_sp[11]._content1;
        price_old = list_sp[11]._price_old;
        price_new = list_sp[11]._price_new;
      }

      function showMainContent() {
        $(".main-content").css("display", "block");
        $(".side-content").empty();
      }
      function hideMainContent() {
          $(".main-content").css("display", "none");
      }

      var html = "";
      html +='<div>'
      +'<button id="btn-back" style="margin: 50px;"> Back </button>'
      +'</div>'
      +'<div class="product-1 row" style="padding: 0 155px; display: flex;flex-direction: row;">'
      +'<div class="right col-lg-4">'
      +'<div class="right-img" style="position: relative; margin-top: 40px;">'
      +'<img src="'+ path+'" alt="" id="mainImg" height="500px" width="500px" style="padding-right:100px">'
      +'<i class="fa-solid fa-angle-left button" onclick="click_left()" id="left"></i>'
      +'<i class="fa-solid fa-angle-right button" onclick="click_right()" id="right"></i>'
      +'</div>'
      +'<div class="bottom-img">'
      +'<img src="'+ path_1+'" alt="">'
      +'<img src="'+ path_2+'" alt="">'
      +'<img src="'+ path_3+'" alt="">'
      +'<img src="'+ path_4+'" alt="">'
      +'</div>'
      +'</div>'
      +'<div class="left-content col-lg-5" style="margin-top: 40px;">'
      +'<div class="infor">'
      +'<p style="font-weight: 700; font-size: 20px;">'+ content+'</p>'
      +'</div>'
      +'<span style="display: flex; flex-direction: row; border-bottom: 1px solid #f1f1f1;"><p style="font-weight: 600;">'+ content1+'</span>'
      +'<span>Giá niêm yết: <del>'+ price_old+'</del></span>'
      +'<span>Giá khuyến mại: <span style="color: red; font-weight: 800;">'+ price_new+'</span></span>'
      +'</div>'
      +'</div>'
      +'<div class="col-lg-3"></div>'
      +'</div>'

      hideMainContent();
      $(".side-content").append(html);

      $("img").click(function(){
        let img_name = $(this).attr("src"); 
        $("#mainImg").attr("src", img_name);
      });


      let currentIndex = 0;
      const sideImages = [path_1, path_2, path_3, path_4];
      
      $("#mainImg").attr("src", sideImages[currentIndex]);

      $("#left").click(function () {
          currentIndex = (currentIndex - 1 + sideImages.length) % sideImages.length; 
          $("#mainImg").attr("src", sideImages[currentIndex]);
      });

      $("#right").click(function () {
          currentIndex = (currentIndex + 1) % sideImages.length; 
          $("#mainImg").attr("src", sideImages[currentIndex]); 
      });
      $(document).on("click", "#btn-back", function() {
        console.log("Nút back được nhấn");
        showMainContent();
      });
      
    });
  });
  