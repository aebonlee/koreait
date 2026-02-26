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

        <h1 id="container_title">Ⅰ.기관경영 >> <span style="color:#0404B4; font-weight:bold;"> 훈련기관 소개</span></h1>
        <div class="container_wr">
            <div id="contents">
                <div id="tabMenu">
                    <input type="radio" id="tab1" name="tabs" checked />
                    <label for="tab1">에듀컴퓨터교육학원 소개</label>
                    <input type="radio" id="tab2" name="tabs" />
                    <label for="tab2">경영원칙</label>
                    <input type="radio" id="tab3" name="tabs" />
                    <label for="tab3">조직도(직제규정)</label>
                    <input type="radio" id="tab4" name="tabs" />
                    <label for="tab4">조직체계도</label>
					<input type="radio" id="tab5" name="tabs" />
                    <label for="tab5">시설평면도</label>
                    <input type="radio" id="tab6" name="tabs" />
                    <label for="tab6">현장평가주소 약도</label>
					
					<div id="notice" class="tabContent">
					<br>
						<img src="http://www.educomputer.co.kr/2023/img/educom.JPG" width="800px" height="auto"><br><br>
						<span style="font-weight:bold; font-size:13pt;">
					2023년 에듀컴퓨터교육학원 미래상 <br><br>

					비전제시:<br>
					1. 2023년 실시목표 <br>
					 1) 기관평가 1년 인증, 이후 3년 인증 목표<br>
					   ① 취업률 70%(NCS기준 이상)달성, 중탈률 10%이하 달성<br>
					   ② 전문취업상담직원 채용 및 교과과정의 내실화유지(인재추천)<br>
					   ③ 학생민원발생의 최소화를 통한 지역관할지청 평가점수 상승 <br><br>
					  
					 2) 전년대비 매출 20%이상 초과 달성<br>
					   ① 환불율 10% 감소<br>
					   ② 이월학생율 10% 증가<br>
					   ③ 강사 및 관리부 직원 교육실시를 통한 애사심 배양<br>
					   ④ 강사 및 관리부 직원 책임배상제 실시(실시안 제시)<br><br>

					 3) 새로운 교과과정 개발을 통한 학원 역량 강화<br>
					   ① 국가사업(이공계육성 및 취창업 교육, 과학교육관련 사업) 교육실시(실시간 검색)<br>
					   ② 어플리케이션과 관련된 디자인 분야(일반과정 운영)<br>
					   ③ 이공계 및 과학기술인 교육 관련계열의 전문 교육원으로 자리매김 하기<br><br>

					2. 2023년 실시목표 <br>
					   ① 2023년 비전 점검 및 영역안정성 구축(과정운영회를 통한 점검)<br>
					   ② 과정운영회를 신설하여 새로운 과정개발에 투자(외부전문가 영입)<br>
					   ③ 인근업체와의 MOU체결을 통한 취업인프라 확대(매년 5개 업체와 체결)<br><br>

					안건제시:<br>
					   ① 교직원 포상제의 확대<br>
					   ② 민원학생의 대체법 (부원장 주체)<br>
					   ③ 국가정책의 패러다임 주시<br>
						</span>
					</div>
					
					<div id="gallery" class="tabContent">
                    <h2>에듀컴퓨터교육학원의 경영원칙입니다. <a href="http://www.educomputer.co.kr/2023/sub01/hwp/경영원칙.hwp" style="color:blue; font-weight:bold;">[한글파일 다운로드 : 경영원칙.hwp (2023.04월 기준)]</a></h2><br>


                        <object type="application/pdf" data="./pdf/경영원칙.pdf#toolbar=1&navpane=0" width="100%" height="1280px">
						  <embed src="./pdf/경영원칙.pdf#toolbar=1&navpane=0" type="application/pdf" width="100%" height="1280px" />
						  <param name="initZoom" value="fitToPage" />
						</object>
																														
					<br>
					<table style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">
					<tr style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">
					<td width="200px" align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">회람일</td>
					<td width="200px" align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">2023.04.01</td>
					<td width="200px" align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">2023.04.01</td>
					<td width="200px" align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">2023.04.01</td>
					<td width="200px" align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">&nbsp;</td>
					<td width="200px" align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">&nbsp;</td>
					<td width="200px" align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">&nbsp;</td>
					<td width="200px" align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">&nbsp;</td>
					</tr>
					
					<tr style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">직책</td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">원장</td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">부원장</td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">훈련교사</td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">&nbsp;</td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">&nbsp;</td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">&nbsp;</td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">&nbsp;</td>					
					</tr>
					
					<tr style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">서명</td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;"><img src="http://educomputer.co.kr/2023/img/kim1.png"></td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;"><img src="http://educomputer.co.kr/2023/img/kim2.png"></td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;"><img src="http://educomputer.co.kr/2023/img/lee1.png"></td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">&nbsp;</td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">&nbsp;</td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">&nbsp;</td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">&nbsp;</td>					
					</tr>
					</table>
				<br><br><br><br>
                  </div>

                    <div id="gallery2" class="tabContent">
                        <h2>에듀컴퓨터교육학원의 조직도와 직제규정입니다. <a href="http://www.educomputer.co.kr/2023/sub01/hwp/조직도_직제규정.hwp" style="color:blue; font-weight:bold;"> [한글파일 다운로드 : 조직도_직제규정.hwp (2023.04월 기준)]</a></h2><br>

                        <object type="application/pdf" data="./pdf/조직도_직제규정.pdf#toolbar=1&navpane=0" width="100%" height="1280px">
						  <embed src="./pdf/조직도_직제규정.pdf#toolbar=1&navpane=0" type="application/pdf" width="100%" height="1280px" />
						  <param name="initZoom" value="fitToPage" />
						</object>
                 
					<br>
					<table style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">
					<tr style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">
					<td width="200px" align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">회람일</td>
					<td width="200px" align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">2023.04.01</td>
					<td width="200px" align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">2023.04.01</td>
					<td width="200px" align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">2023.04.01</td>
					<td width="200px" align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">&nbsp;</td>
					<td width="200px" align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">&nbsp;</td>
					<td width="200px" align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">&nbsp;</td>
					<td width="200px" align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">&nbsp;</td>
					</tr>
					
					<tr style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">직책</td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">원장</td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">부원장</td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">훈련교사</td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">&nbsp;</td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">&nbsp;</td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">&nbsp;</td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">&nbsp;</td>					
					</tr>
					
					<tr style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">서명</td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;"><img src="http://educomputer.co.kr/2023/img/kim1.png"></td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;"><img src="http://educomputer.co.kr/2023/img/kim2.png"></td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;"><img src="http://educomputer.co.kr/2023/img/lee1.png"></td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">&nbsp;</td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">&nbsp;</td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">&nbsp;</td>
					<td align=center style="border-style: solid; border-width:1px; border-color:#333366; color:black; font-weight:bold; font-size:12pt;">&nbsp;</td>					
					</tr>
					</table>
				<br><br><br><br>
                    </div>
					<div id="gallery3" class="tabContent">
                    <h2>에듀컴퓨터교육학원의 조직체계도입니다. <a href="http://www.educomputer.co.kr/2023/sub01/hwp/조직체계도.hwp" style="color:blue; font-weight:bold;">[한글파일 다운로드 : 조직체계도.hwp (2023.04월 기준)]</a></h2><br>

                        <object type="application/pdf" data="./pdf/조직체계도.pdf#toolbar=1&navpane=0" width="100%" height="1280px">
						  <embed src="./pdf/조직체계도.pdf#toolbar=1&navpane=0" type="application/pdf" width="100%" height="1280px" />
						  <param name="initZoom" value="fitToPage" />
						</object>

					</div>
					<div id="gallery4" class="tabContent">

                        <object type="application/pdf" data="./pdf/(공통) 시설평면도.pdf#toolbar=1&navpane=0" width="100%" height="1280px">
						  <embed src="./pdf/(공통) 시설평면도.pdf#toolbar=1&navpane=0" type="application/pdf" width="100%" height="1280px" />
						  <param name="initZoom" value="fitToPage" />
						</object>

					</div>
					<div id="gallery5" class="tabContent">

                        <object type="application/pdf" data="./pdf/(공통) 현장평가주소 약도(약도 및 찾아오는 방법).pdf#toolbar=1&navpane=0" width="100%" height="1280px">
						  <embed src="./pdf/(공통) 현장평가주소 약도(약도 및 찾아오는 방법).pdf#toolbar=1&navpane=0" type="application/pdf" width="100%" height="1280px" />
						  <param name="initZoom" value="fitToPage" />
						</object>

					</div>					
                </div>
            </div>
        </div>
    </div>
</div>

<footer id="ft">
    <p>
        Copyright &copy; born.dreamitbiz.com. All rights reserved. Version 5.5.8.3<br>
        <button type="button" class="scroll_top" style="cursor:pointer;" onclick="window.scrollTo(0,0);"><span
                class="top_img"></span><span class="top_txt">TOP</span></button>
    </p>
</footer>

<script>
    $(".scroll_top").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 400);
    })
</script>

<!-- <p>실행시간 : 0.0010840892791748 -->

<script src="http://born.dreamitbiz.com/2023/adm/admin.js?ver=2304171"></script>
<script src="http://born.dreamitbiz.com/2023/js/jquery.anchorScroll.js?ver=2304171"></script>
<script>
    $(function () {

        var admin_head_height = $("#hd_top").height() + $("#container_title").height() + 5;

        $("a[href^='#']").anchorScroll({
            scrollSpeed: 0, // scroll speed
            offsetTop: admin_head_height, // offset for fixed top bars (defaults to 0)
            onScroll: function () {
                // callback on scroll start
            },
            scrollEnd: function () {
                // callback on scroll end
            }
        });

        var hide_menu = false;
        var mouse_event = false;
        var oldX = oldY = 0;

        $(document).mousemove(function (e) {
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
        $gnb.mouseover(function () {
            if (mouse_event) {
                $(".gnb_1dli").removeClass("gnb_1dli_over gnb_1dli_over2 gnb_1dli_on");
                $(this).parent().addClass("gnb_1dli_over gnb_1dli_on");
                menu_rearrange($(this).parent());
                hide_menu = false;
            }
        });

        $gnb.mouseout(function () {
            hide_menu = true;
        });

        $(".gnb_2dli").mouseover(function () {
            hide_menu = false;
        });

        $(".gnb_2dli").mouseout(function () {
            hide_menu = true;
        });

        $gnb.focusin(function () {
            $(".gnb_1dli").removeClass("gnb_1dli_over gnb_1dli_over2 gnb_1dli_on");
            $(this).parent().addClass("gnb_1dli_over gnb_1dli_on");
            menu_rearrange($(this).parent());
            hide_menu = false;
        });

        $gnb.focusout(function () {
            hide_menu = true;
        });

        $(".gnb_2da").focusin(function () {
            $(".gnb_1dli").removeClass("gnb_1dli_over gnb_1dli_over2 gnb_1dli_on");
            var $gnb_li = $(this).closest(".gnb_1dli").addClass("gnb_1dli_over gnb_1dli_on");
            menu_rearrange($(this).closest(".gnb_1dli"));
            hide_menu = false;
        });

        $(".gnb_2da").focusout(function () {
            hide_menu = true;
        });

        $('#gnb_1dul>li').bind('mouseleave', function () {
            submenu_hide();
        });

        $(document).bind('click focusin', function () {
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