let bt = setInterval(
  function () {
    if (document.querySelector(".list-menu-mobile")) {
      $(
        '<div style="margin-top: 6px;text-align: center;margin-bottom: 0px;"><p style="color: white; , 0px 0px 20px #faf2ca; font-size: 21px;"><b style="/* -webkit-text-stroke-width: 0.1px; */-webkit-text-stroke-color: red;/* border: 1px solid red; */color: #d7d7d7;font-size: 15px;">Cari Tores4D Disini</b></p></div><div style="width: 60%; display:table;padding:5px 10px; margin-left:auto; margin-right:auto; "><div class="buttonWrap buttons button-red contactSubmitButton" style="border: 2px solid;animation: borderanimation 5s linear infinite;"><p style="text-align:center;"><b><span><div style="position: absolute; top: 43px; left: 18px; background: #C20006; border-radius: 17px 0 0 17px;padding: 10px 13px; box-shadow: 1px 0 5px #000000;"><img src=" https://i.ibb.co/0FvKK3y/search.png"alt=""></div><a href="https://t0re54d.com/" style=" color: #FFFFFF;display: flex;justify-content: center;"><span style="text-transform:uppercase;font-size:19px; letter-spacing: 3.2px;">t0re54d.com</span><br>'
      ).insertAfter($(".list-menu-mobile"));
      clearInterval(bt);
    }
  },

  100
);

$(document).ready(function () {
  // Temukan elemen dengan href yang diinginkan
  var originalHref = "https://api.whatsapp.com/send?phone=6287802067736";
  var newHTML =
    '<a href="https://secure.livechatinc.com/customer/action/open_chat?license_id=11420813&group=1" target="_blank" bis_skin_checked="1">' +
    '<div class="image" bis_skin_checked="1">' +
    '<div class="contact-icon-big" style="background-position: -365px 0px;" bis_skin_checked="1"></div>' +
    "</div>" +
    '<h3 class="margin-bottom-20">Hubungi Kami</h3>' +
    "</a>";

  $('li.search-result a[href="' + originalHref + '"]').each(function () {
    // Ganti struktur HTML dengan yang baru
    $(this).replaceWith(newHTML);
  });
});

var bb855 = document.getElementsByClassName("sidebar-nav")[0];
var html =
  "<li><a href='https://secure.livechatinc.com/customer/action/open_chat?license_id=11420813&group=1'><i class='fa fa-address-card-o'></i> Keluhan Member</a><a class='btn-menu' index.php' target='_blank'><i class='fa fa-sort-numeric-asc'></i> Prediksi Terupdate</a></li><li><a class='btn-menu' href='index.php' target='_blank'><i class='fa fa-firefox'></i>Live RTP Gacor</a></li></li><li><a class='btn-menu' href='index.php' target='_blank'><i class='fa fa-money'></i>Bukti Pembayaran</a></li><li></li>";
bb855.insertAdjacentHTML("beforeend", html);

var tombolside =
  '<div class="sidebar-button" align="center"><a class="btn-alexis" href="https://t0re54d.com/">Agen Bola Terpercaya</a></div>';
bb855.insertAdjacentHTML("afterend", tombolside);

document.addEventListener(
  "DOMContentLoaded",
  function () {
    $(
      '<center><div class="item box-middle post-card3"><a href="/" target="_blank"><img title="TORES4D" width="100%" src="https://sgp1.digitaloceanspaces.com/alexisimage/front/GIF/GIF%20ALX%201.webp" alt="TORES4D"></a></div><div class="item box-middle post-card3"><a href="/" target="_blank"><img title="TORES4D" width="100%" src="https://sgp1.digitaloceanspaces.com/alexisimage/front/GIF/GIF%20ALX%202.webp" alt="TORES4D"></a></div><div class="item box-middle post-card3"><a href="/" target="_blank"><img title="TORES4D" width="100%" src="https://sgp1.digitaloceanspaces.com/alexisimage/front/GIF/GIF%20ALX%203.webp" alt="TORES4D"></a></div></center>'
    ).insertAfter("#slider");
  },

  false
);

$(document).ready(function () {
  var html =
    '<div class="bungkus-jackpot1"><div class="progresif-jackpot1"><span>IDR</span>2,131,665,972</div></div>';
  $("#latest-results").after(html);
});
