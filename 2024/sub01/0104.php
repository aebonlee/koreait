<?php
include_once('../../common.php');

define('_INDEX_', true);
if (!defined('_GNUBOARD_'))
    exit; // 개별 페이지 접근 불가

include_once('./head_detail.php');
?>

<?php
if (!$member['mb_id']) {
    goto_url('../login.php');
}
?>

<script>
// 자바스크립트에서 사용하는 전역변수 선언
    /*
    var g5_url       = "http://born.dreamitbiz.com/2023";
    var g5_bbs_url   = "http://born.dreamitbiz.com/2023/bbs";
    var g5_is_member = "1";
    var g5_is_admin  = "super";
    var g5_is_mobile = "";
    var g5_bo_table  = "";
    var g5_sca       = "";
    var g5_editor    = "";
    var g5_cookie_domain = "";
    var g5_shop_url = "http://born.dreamitbiz.com/2023/shop";
    var g5_admin_url = "http://born.dreamitbiz.com/2023/adm";
    */
</script>
<script>
    var g5_admin_csrf_token_key = "438d9141daa45cdfc2b25b222d7ca24f";
    var tempX = 0;
    var tempY = 0;

    function imageview(id, w, h) {

        menu(id);

        var el_id = document.getElementById(id);

        //submenu = eval(name+".style");
        submenu = el_id.style;
        submenu.left = tempX - (w + 11);
        submenu.top = tempY - (h / 2);

        selectBoxVisible();

        if (el_id.style.display != 'none')
            selectBoxHidden(id);
    }
</script>

<div id="to_content"><a href="#container">본문 바로가기</a></div>

<script>
    jQuery(function ($) {

        var menu_cookie_key = 'g5_admin_btn_gnb';

        $(".tnb_mb_btn").click(function () {
            $(".tnb_mb_area").toggle();
        });

        $("#btn_gnb").click(function () {

            var $this = $(this);

            try {
                if (!$this.hasClass("btn_gnb_open")) {
                    set_cookie(menu_cookie_key, 1, 60 * 60 * 24 * 365);
                } else {
                    delete_cookie(menu_cookie_key);
                }
            } catch (err) { }

            $("#container").toggleClass("container-small");
            $("#gnb").toggleClass("gnb_small");
            $this.toggleClass("btn_gnb_open");

        });

        $(".gnb_ul li .btn_op").click(function () {
            $(this).parent().addClass("on").siblings().removeClass("on");
        });

    });
</script>


<div id="wrapper">

    <div id="container" class="<?php echo $adm_menu_cookie['container']; ?>">

        <h1 id="container_title">Ⅰ.기관경영 >> <span style="color:#0404B4; font-weight:bold;">기관증빙서류</span></h1>
        <div class="container_wr">
            <div id="contents">
                <div id="tabMenu">
                  <input type="radio" id="tab1" name="tabs" checked />
                  <label for="tab1">학원운영등록증</label>
                  <input type="radio" id="tab2" name="tabs" />
                  <label for="tab2">사업자등록증</label>
                  <input type="radio" id="tab3" name="tabs" />
                  <label for="tab3">국세 완납증명서</label>
                  <input type="radio" id="tab4" name="tabs" />
                  <label for="tab4">지방세 완납증명서</label>
                  <input type="radio" id="tab5" name="tabs" />
                  <label for="tab5">개인신용정보조회서</label>
                  <input type="radio" id="tab6" name="tabs" />
                  <label for="tab6">기업신용정보조회서</label>
                  <input type="radio" id="tab7" name="tabs" />
                  <label for="tab7">학원배상책임보험</label>
				  <input type="radio" id="tab8" name="tabs" />
                  <label for="tab8">고용보험가입증명서</label>
				  <input type="radio" id="tab9" name="tabs" />
                  <label for="tab9">교육청(NEIS)등록 강사목록</label>
				  <input type="radio" id="tab10" name="tabs" />
                  <label for="tab10">교육청(NEIS)교습비내역</label>
				  <input type="radio" id="tab11" name="tabs" />
                  <label for="tab11">교육청 환불반환기준</label>					  

                  <div id="notice" class="tabContent">
					<br>
                        <center>
                        <img src="./img/학원운영등록증_에듀컴퓨터교육학원.jpg" width="800px" height="auto">
                        </center>
                  </div>
                  <div id="gallery" class="tabContent">
					<br>					
                        <center>
                        <img src="./img/사업자등록증명서_에듀컴퓨터교육학원.jpg" width="800px" height="auto">
                        </center>
                   
                  </div>
                  <div id="gallery2" class="tabContent">
					<br>                  
                        <center>
                        <img src="./img/국세납부증명서_에듀컴퓨터교육학원.jpg" width="800px" height="auto">
                        </center>                  
                  </div>
                  <div id="gallery3" class="tabContent">
					<br>                   
                        <center>
                        <img src="./img/지방세납세증명서_에듀컴퓨터교육학원.jpg" width="800px" height="auto">
                        </center>                   
                  </div>
                  <div id="gallery4" class="tabContent">
					<br>                    
                        <center>
                        <img src="./img/에듀컴퓨터교육학원_김귀환원장_개인신용정보조회서-1.jpg" width="800px" height="auto">
                        <img src="./img/에듀컴퓨터교육학원_김귀환원장_개인신용정보조회서-2.jpg" width="800px" height="auto">
                        <img src="./img/에듀컴퓨터교육학원_김귀환원장_개인신용정보조회서-3.jpg" width="800px" height="auto">
                        <img src="./img/에듀컴퓨터교육학원_김귀환원장_개인신용정보조회서-4.jpg" width="800px" height="auto">
						<br/><br/><br/><br/><br/><br/>
                        </center>                   
                  </div>
                  <div id="gallery5" class="tabContent">
					<br>                    
                        <center>
                        <img src="./img/기업신용정보조회서-1_에듀컴퓨터교육학원.jpg" width="800px" height="auto">
                        <img src="./img/기업신용정보조회서-2_에듀컴퓨터교육학원.jpg" width="800px" height="auto">
						<br/><br/>
                        </center>                   
                  </div>
                  <div id="gallery6" class="tabContent">
					<br>                    
                        <center>
                        <img src="./img/학원배상책임보험_에듀컴퓨터교육학원.jpg" width="800px" height="auto">
						<br/><br/>
                        </center>                    
                  </div>
				  <div id="gallery7" class="tabContent">
                        <object type="application/pdf" data="./pdf/4대보험.pdf#toolbar=1&navpane=0" width="100%" height="1280px">
						  <embed src="./pdf/4대보험.pdf#toolbar=1&navpane=0" type="application/pdf" width="100%" height="1280px" />
						  <param name="initZoom" value="fitToPage" />
						</object>					
                  </div>
				  <div id="gallery8" class="tabContent">
                        <object type="application/pdf" data="./pdf/강사목록.pdf#toolbar=1&navpane=0" width="100%" height="1280px">
						  <embed src="./pdf/강사목록.pdf#toolbar=1&navpane=0" type="application/pdf" width="100%" height="1280px" />
						  <param name="initZoom" value="fitToPage" />
						</object>					
                  </div>
				  <div id="gallery9" class="tabContent">
						<center>
                        <img src="./img/교습비내역.jpg" width="800px" height="auto">
						<br/><br/>
                        </center>  				
                  </div>
				  <div id="gallery10" class="tabContent">
						<center>
                        <img src="./img/환불반환기준.jpg" width="800px" height="auto">
						<br/><br/>
                        </center>  				
                  </div>				  
				  <br><br>
                </div>
            </div>
		</div>
	</div>
</div>

<footer id="ft">
    <p>
        Copyright &copy; born.dreamitbiz.com. All rights reserved. Version 5.5.8.3<br>
        <button type="button" class="scroll_top" style="cursor:pointer;" onclick="window.scrollTo(0,0);"><span class="top_img"></span><span class="top_txt">TOP</span></button>
    </p>
</footer>

</div>

</div>

<script>
    $(".scroll_top").click(function() {
        $("body,html").animate({
            scrollTop: 0
        }, 400);
    })
</script>

<!-- <p>실행시간 : 0.0010840892791748 -->

<script src="http://born.dreamitbiz.com/2023/adm/admin.js?ver=2304171"></script>
<script src="http://born.dreamitbiz.com/2023/js/jquery.anchorScroll.js?ver=2304171"></script>
<script>
    $(function() {

        var admin_head_height = $("#hd_top").height() + $("#container_title").height() + 5;

        $("a[href^='#']").anchorScroll({
            scrollSpeed: 0, // scroll speed
            offsetTop: admin_head_height, // offset for fixed top bars (defaults to 0)
            onScroll: function() {
                // callback on scroll start
            },
            scrollEnd: function() {
                // callback on scroll end
            }
        });

        var hide_menu = false;
        var mouse_event = false;
        var oldX = oldY = 0;

        $(document).mousemove(function(e) {
            if (oldX == 0) {
                oldX = e.pageX;
                oldY = e.pageY;
            }

            if (oldX != e.pageX || oldY != e.pageY) {
                mouse_event = true;
            }
        });

        // 주메뉴
        var $gnb = $(".gnb_1dli > a");
        $gnb.mouseover(function() {
            if (mouse_event) {
                $(".gnb_1dli").removeClass("gnb_1dli_over gnb_1dli_over2 gnb_1dli_on");
                $(this).parent().addClass("gnb_1dli_over gnb_1dli_on");
                menu_rearrange($(this).parent());
                hide_menu = false;
            }
        });

        $gnb.mouseout(function() {
            hide_menu = true;
        });

        $(".gnb_2dli").mouseover(function() {
            hide_menu = false;
        });

        $(".gnb_2dli").mouseout(function() {
            hide_menu = true;
        });

        $gnb.focusin(function() {
            $(".gnb_1dli").removeClass("gnb_1dli_over gnb_1dli_over2 gnb_1dli_on");
            $(this).parent().addClass("gnb_1dli_over gnb_1dli_on");
            menu_rearrange($(this).parent());
            hide_menu = false;
        });

        $gnb.focusout(function() {
            hide_menu = true;
        });

        $(".gnb_2da").focusin(function() {
            $(".gnb_1dli").removeClass("gnb_1dli_over gnb_1dli_over2 gnb_1dli_on");
            var $gnb_li = $(this).closest(".gnb_1dli").addClass("gnb_1dli_over gnb_1dli_on");
            menu_rearrange($(this).closest(".gnb_1dli"));
            hide_menu = false;
        });

        $(".gnb_2da").focusout(function() {
            hide_menu = true;
        });

        $('#gnb_1dul>li').bind('mouseleave', function() {
            submenu_hide();
        });

        $(document).bind('click focusin', function() {
            if (hide_menu) {
                submenu_hide();
            }
        });

        // 폰트 리사이즈 쿠키있으면 실행
        var font_resize_act = get_cookie("ck_font_resize_act");
        if (font_resize_act != "") {
            font_resize("container", font_resize_act);
        }
    });

    function submenu_hide() {
        $(".gnb_1dli").removeClass("gnb_1dli_over gnb_1dli_over2 gnb_1dli_on");
    }

    function menu_rearrange(el) {
        var width = $("#gnb_1dul").width();
        var left = w1 = w2 = 0;
        var idx = $(".gnb_1dli").index(el);

        for (i = 0; i <= idx; i++) {
            w1 = $(".gnb_1dli:eq(" + i + ")").outerWidth();
            w2 = $(".gnb_2dli > a:eq(" + i + ")").outerWidth(true);

            if ((left + w2) > width) {
                el.removeClass("gnb_1dli_over").addClass("gnb_1dli_over2");
            }

            left += w1;
        }
    }
</script>


<!-- <div style='float:left; text-align:center;'>RUN TIME : 0.0011570453643799<br></div> -->

<?php
include_once('../tail.php');
?>