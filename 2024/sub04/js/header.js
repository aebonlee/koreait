// header.js
export const html = `

<header id="hd">
    <h1>그누보드5</h1>
    <div id="hd_top">
        <button type="button" id="btn_gnb" class="btn_gnb_close ">메뉴</button>
        <div id="logo"><span style="font-size:15px; font-weight: bold; color:white;"><a href="http://www.educomputer.co.kr/2023/">에듀컴퓨터교육학원</a></span></div>

        <div id="tnb">
            <ul>
                <li class="tnb_li"><a href="#" class="tnb_shop" target="_blank" title="쇼핑몰 바로가기">쇼핑몰 바로가기</a></li>
                <li class="tnb_li"><a href="#" class="tnb_community" target="_blank" title="커뮤니티 바로가기">커뮤니티 바로가기</a></li>
                <li class="tnb_li"><a href="#" class="tnb_service">부가서비스</a></li>
                <li class="tnb_li"><button type="button" class="tnb_mb_btn">관리자<span class="./img/btn_gnb.png">메뉴열기</span></button>
				
                    <ul class="tnb_mb_area">
                        <li><a href="http://www.educomputer.co.kr/2023/adm/member_form.php?w=u&amp;mb_id=admin">관리자정보</a></li>
                        <li id="tnb_logout"><a href="http://www.educomputer.co.kr/2023/bbs/logout.php">로그아웃</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
	
     <nav id="gnb" class="gnb_large ">
        <h2>관리자 주메뉴</h2>
        <ul class="gnb_ul">
                <li class="gnb_li">
                    <button type="button"  class="btn_op menu-100 menu-order-2" title="기관경영">기관경영</button>
                    <div class="gnb_oparea_wr">
                        <div class="gnb_oparea">
                            <h3>기관경영</h3>
                            <ul>
							<hr style="border: 0; height: 3px; background: #f00; opacity:0.4;">
							<li data-menu="100100"><a href="http://www.educomputer.co.kr/2023/sub01/0101.html" class="gnb_2da">훈련기관 소개</a></li>
							<li data-menu="100160"><a href="http://www.educomputer.co.kr/2023/sub01/0102.html" class="gnb_2da">2023 자체평가보고서</a></li>
							<li data-menu="100170"><a href="http://www.educomputer.co.kr/2023/sub01/0103.html" class="gnb_2da">대표훈련과정 소개</a></li>
							<li data-menu="100180"><a href="http://www.educomputer.co.kr/2023/sub01/0104.html" class="gnb_2da">기관증빙서류</a></li>
							<hr style="height: 1px;">
							<li data-menu="100190"><a href="http://www.educomputer.co.kr/2023/sub01/0105.html" class="gnb_2da">기관운영규정</a></li>
							<li data-menu="100200"><a href="http://www.educomputer.co.kr/2023/sub01/0106.html" class="gnb_2da">장기/중기/단기계획</a></li>
							<li data-menu="100210"><a href="http://www.educomputer.co.kr/2023/sub01/0107.html" class="gnb_2da">특성화전략 (추진계획)</a></li>
							<li data-menu="100220"><a href="http://www.educomputer.co.kr/2023/sub01/0108.html" class="gnb_2da">연간교육훈련 운영계획</a></li>
							<li data-menu="100230"><a href="http://www.educomputer.co.kr/2023/sub01/0109.html" class="gnb_2da">훈련운영절차서</a></li>
							<hr style="height: 1px;">
							<li data-menu="100300"><a href="http://www.educomputer.co.kr/2023/sub01/0110.html" class="gnb_2da">주간 회의록</a></li>
							<li data-menu="100310"><a href="http://www.educomputer.co.kr/2023/sub01/0111.html" class="gnb_2da">월간 회의록</a></li>
							<li data-menu="100320"><a href="http://www.educomputer.co.kr/2023/sub01/0112.html" class="gnb_2da">교직원 워크샵 </a></li>
							<hr style="height: 1px;">
							<li data-menu="100330"><a href="http://www.educomputer.co.kr/2023/sub01/0113.html" class="gnb_2da">정보보안매뉴얼/지침 </a></li>
							<li data-menu="100400"><a href="http://www.educomputer.co.kr/2023/sub01/0114.html" class="gnb_2da">개인정보실태점검</a></li>
							<li data-menu="100410"><a href="http://www.educomputer.co.kr/2023/sub01/0115.html" class="gnb_2da">개인정보보안 관리대장</a></li>
							<hr style="height: 1px;">
							<li data-menu="100420"><a href="http://www.educomputer.co.kr/2023/sub01/0116.html" class="gnb_2da">인근지역 환경분석</a></li>
							<li data-menu="100430"><a href="http://www.educomputer.co.kr/2023/sub01/0117.html" class="gnb_2da">비상연락망 </a></li>
							<hr style="height: 1px;">
							<li data-menu="100500"><a href="http://www.educomputer.co.kr/2023/sub01/0118.html" class="gnb_2da">부정훈련예방자료</a></li>
							<hr style="height: 1px;">
							</ul>
						</div>
                    </div>
                </li>
				<li class="gnb_li">
                  <button type="button" class="btn_op menu-300 menu-order-1" title="훈련과정관리">훈련운영관리</button>
                    <div class="gnb_oparea_wr">
                        <div class="gnb_oparea">
                            <h3>훈련과정관리</h3>
							<hr style="border: 0; height: 3px; background:orange; opacity:0.4;">
                            <ul>
							<li data-menu="200100"><a href="http://www.educomputer.co.kr/2023/sub02/0201.html" class="gnb_2da">훈련과정개발매뉴얼 </a></li>
							<li data-menu="200110"><a href="http://www.educomputer.co.kr/2023/sub02/0202.html" class="gnb_2da">훈련과정개발절차</a></li>
							<li data-menu="200120"><a href="http://www.educomputer.co.kr/2023/sub02/0203.html" class="gnb_2da">훈련수요 및 요구조사</a></li>
							<li data-menu="200130"><a href="http://www.educomputer.co.kr/2023/sub02/0204.html" class="gnb_2da">23년 훈련과정개발내역</a></li>
							<hr style="height: 1px;">
							<li data-menu="200140"><a href="http://www.educomputer.co.kr/2023/sub02/0205.html" class="gnb_2da">훈련운영규정<a></li>
							<li data-menu="200200"><a href="http://www.educomputer.co.kr/2023/sub02/0206.html" class="gnb_2da">훈련운영 매뉴얼</a></li>
							<li data-menu="200300"><a href="http://www.educomputer.co.kr/2023/sub02/0207.html" class="gnb_2da">교육훈련 운영계획서</a></li>
							<li data-menu="200310"><a href="http://www.educomputer.co.kr/2023/sub02/0208.html" class="gnb_2da">교육훈련 운영 회의록</a></li>
							<li data-menu="200320"><a href="http://www.educomputer.co.kr/2023/sub02/0209.html" class="gnb_2da">훈련과정일정 수립</a></li>
							<li data-menu="200330"><a href="http://www.educomputer.co.kr/2023/sub02/0210.html" class="gnb_2da">홍보계획수립(실행)</a></li>
							<hr style="height: 1px;">
							<li data-menu="200340"><a href="http://www.educomputer.co.kr/2023/sub02/0211.html" class="gnb_2da">이수자평가관련서류</a></li>
							<li data-menu="200350"><a href="http://www.educomputer.co.kr/2023/sub02/0212.html" class="gnb_2da">성취도평가규정</a></li>
							<li data-menu="200360"><a href="http://www.educomputer.co.kr/2023/sub02/0213.html" class="gnb_2da">성취도평가결과분석표</a></li>
							<hr style="height: 1px;">
							<li data-menu="200370"><a href="http://www.educomputer.co.kr/2023/sub02/0214.html" class="gnb_2da">훈련과정 개선 및 반영</a></li>
							<hr style="height: 1px;">
							</ul>
						</div>
                    </div>
                </li>
                <li class="gnb_li">
                    <button type="button" class="btn_op menu-200 menu-order-3" title="훈련전담인력">훈련전담인력</button>
                    <div class="gnb_oparea_wr">
                        <div class="gnb_oparea">
                            <h3>훈련전담인력</h3>
							<hr style="border: 0; height: 3px; background:#FCF05C; opacity:0.9;">
                            <ul>
							<li data-menu="300120"><a href="http://www.educomputer.co.kr/2023/sub03/0301.html" class="gnb_2da">인사관리규정 </a></li>
							<li data-menu="300130"><a href="http://www.educomputer.co.kr/2023/sub03/0302.html" class="gnb_2da">인사관리프로세스</a></li>
							<li data-menu="300140"><a href="http://www.educomputer.co.kr/2023/sub03/0303.html" class="gnb_2da">교직원인사관리규정</a></li>
							<li data-menu="300150"><a href="http://www.educomputer.co.kr/2023/sub03/0304.html" class="gnb_2da">취업규칙</a></li>
							<li data-menu="300160"><a href="http://www.educomputer.co.kr/2023/sub03/0305.html" class="gnb_2da">채용공고,선발기준</a></li>
							<li data-menu="300100"><a href="http://www.educomputer.co.kr/2023/sub03/0306.html" class="gnb_2da">채용평가(시범강의)</a></li>
							<li data-menu="300170"><a href="http://www.educomputer.co.kr/2023/sub03/0307.html" class="gnb_2da">교직원선발</a></li>
							<hr style="height: 1px;">
							<li data-menu="300200"><a href="http://www.educomputer.co.kr/2023/sub03/0308.html" class="gnb_2da">교직원업무분장</a></li>
							<li data-menu="300300"><a href="http://www.educomputer.co.kr/2023/sub03/0309.html" class="gnb_2da">교직원직무평가</a></li>
							<li data-menu="300400"><a href="http://www.educomputer.co.kr/2023/sub03/0310.html" class="gnb_2da">교직원역량개발</a></li>
							<hr style="height: 1px;">
							<li data-menu="300500"><a href="http://www.educomputer.co.kr/2023/sub03/0311.html" class="gnb_2da">김귀환 원장</a></li>
							<li data-menu="300600"><a href="http://www.educomputer.co.kr/2023/sub03/0312.html" class="gnb_2da">김경민 부원장</a></li>
							<li data-menu="300800"><a href="http://www.educomputer.co.kr/2023/sub03/0313.html" class="gnb_2da">훈련교사 이애본</a></li>
							<li data-menu="300810"><a href="http://www.educomputer.co.kr/2023/sub03/0314.html" class="gnb_2da">훈련교사</a></li>
							<li data-menu="300820"><a href="http://www.educomputer.co.kr/2023/sub03/0315.html" class="gnb_2da">훈련교사</a></li>
							<li data-menu="300900"><a href="http://www.educomputer.co.kr/2023/sub03/0316.html" class="gnb_2da">IT강사</a></li>
							<li data-menu="300920"><a href="http://www.educomputer.co.kr/2023/sub03/0317.html" class="gnb_2da">IT강사</a></li>
							<hr style="height: 1px;">
							<li data-menu="300930"><a href="http://www.educomputer.co.kr/2023/sub03/0318.html" class="gnb_2da">교직원 만족도조사</a></li>
							<li data-menu="300940"><a href="http://www.educomputer.co.kr/2023/sub03/0319.html" class="gnb_2da">인센티브 지급내역</a></li>
							<li data-menu="300950"><a href="http://www.educomputer.co.kr/2023/sub03/0320.html" class="gnb_2da">고용보험가입내역</a></li>
							<hr style="height: 1px;">
							</ul>
						</div>
                    </div>
                </li>
                <li class="gnb_li on">
                    <button type="button" class="btn_op menu-800 menu-order-5" title="훈련인프라">훈련인프라</button>
                    <div class="gnb_oparea_wr">
                        <div class="gnb_oparea">
                            <h3>훈련인프라</h3>
							<hr style="border: 0; height: 3px; background:green; opacity:0.4;">
                            <ul>
							<li data-menu="400100"><a href="http://www.educomputer.co.kr/2023/sub04/0401.html" class="gnb_2da">안전관리 규정</a></li>
							<li data-menu="400200"><a href="http://www.educomputer.co.kr/2023/sub04/0402.html" class="gnb_2da">안전관리 매뉴얼</a></li>
							<li data-menu="400300"><a href="http://www.educomputer.co.kr/2023/sub04/0403.html" class="gnb_2da">재난 및 안전관리</a></li>
							<li data-menu="400400"><a href="http://www.educomputer.co.kr/2023/sub04/0404.html" class="gnb_2da">화재,사고대비 체계도</a></li>
							<hr style="height: 1px;">
							<li data-menu="400500"><a href="http://www.educomputer.co.kr/2023/sub04/0405.html" class="gnb_2da">안전관리 점검내역</a></li>
							<li data-menu="400600"><a href="http://www.educomputer.co.kr/2023/sub04/0406.html" class="gnb_2da">안전관리 구난장비</a></li>
							<li data-menu="400700"><a href="http://www.educomputer.co.kr/2023/sub04/0407.html" class="gnb_2da">안전교육이력</a></li>
							<li data-menu="400800"><a href="http://www.educomputer.co.kr/2023/sub04/0408.html" class="gnb_2da">재해보험 내역</a></li>
							<hr style="height: 1px;">
							<li data-menu="400900"><a href="http://www.educomputer.co.kr/2023/sub04/0409.html" class="gnb_2da">훈련시설 현황</a></li>
							<li data-menu="400910"><a href="http://www.educomputer.co.kr/2023/sub04/0410.html" class="gnb_2da">훈련시설 관리 내역</a></li>
							<hr style="height: 1px;">
							<li data-menu="400920"><a href="http://www.educomputer.co.kr/2023/sub04/0411.html" class="gnb_2da">훈련장비 현황</a></li>
							<li data-menu="400930"><a href="http://www.educomputer.co.kr/2023/sub04/0412.html" class="gnb_2da">훈련장비 관리 내역</a></li>
							<hr style="height: 1px;">				
							</ul>
						</div>
                    </div>
                </li>
				<li class="gnb_li">
                    <button type="button" class="btn_op menu-700 menu-order-4" title="훈련생관리">훈련생관리</button>
                    <div class="gnb_oparea_wr">
                        <div class="gnb_oparea">
                            <h3>훈련생관리</h3>
							<hr style="border: 0; height: 3px; background:#4A9EE7; opacity:0.4;">
                            <ul>
							<li data-menu="500010"><a href="http://www.educomputer.co.kr/2023/sub05/0501.html" class="gnb_2da">교육훈련 쳬계도</a></li>
							<li data-menu="500100"><a href="http://www.educomputer.co.kr/2023/sub05/0502.html" class="gnb_2da">연간 개강계획</a></li>
							<li data-menu="500400"><a href="http://www.educomputer.co.kr/2023/sub05/0503.html" class="gnb_2da">과정운영실적</a></li>
							<li data-menu="500440"><a href="http://www.educomputer.co.kr/2023/sub05/0504.html" class="gnb_2da">훈련생모집 홍보자료</a></li>
							<hr style="height: 1px;">
							<li data-menu="500460"><a href="http://www.educomputer.co.kr/2023/sub05/0505.html" class="gnb_2da">훈련생 위탁기관</a></li>
							<li data-menu="500200"><a href="http://www.educomputer.co.kr/2023/sub05/0506.html" class="gnb_2da">훈련생 고충처리</a></li>
							<li data-menu="500300"><a href="http://www.educomputer.co.kr/2023/sub05/0507.html" class="gnb_2da">훈련생 상담내역</a></li>
							<hr style="height: 1px;">
							<li data-menu="500660"><a href="http://www.educomputer.co.kr/2023/sub05/0508.html" class="gnb_2da">훈련생 사후관리</a></li>
							<li data-menu="500650"><a href="http://www.educomputer.co.kr/2023/sub05/0509.html" class="gnb_2da">취업처 발굴내역</a></li>
							<li data-menu="500620"><a href="http://www.educomputer.co.kr/2023/sub05/0510.html" class="gnb_2da">MOU 및 협력기관</a></li>
							<hr style="height: 1px;">
							<li data-menu="500610"><a href="http://www.educomputer.co.kr/2023/sub05/0511.html" class="gnb_2da">과정별 만족도조사</a></li>
							<li data-menu="500500"><a href="http://www.educomputer.co.kr/2023/sub05/0512.html" class="gnb_2da">자격증 시험관리</a></li>
							<hr style="height: 1px;">
							<li data-menu="500800"><a href="http://www.educomputer.co.kr/2023/sub05/0513.html" class="gnb_2da">에듀컴 행사내역</a></li>
							<li data-menu="500810"><a href="http://www.educomputer.co.kr/2023/sub05/0514.html" class="gnb_2da">훈련생 만족도조사</a></li>
							<li data-menu="500750"><a href="http://www.educomputer.co.kr/2023/sub05/0515.html" class="gnb_2da">훈련생 지원내역</a></li>
							<li data-menu="500410"><a href="http://www.educomputer.co.kr/2023/sub05/0516.html" class="gnb_2da">훈련생 선발관련</a></li>
							<hr style="height: 1px;">
							<li data-menu="500820"><a href="http://www.educomputer.co.kr/2023/sub05/0517.html" class="gnb_2da">고충처리 매뉴얼</a></li>
							<li data-menu="500830"><a href="http://www.educomputer.co.kr/2023/sub05/0518.html" class="gnb_2da">중도탈락 방지</a></li>
							<hr style="height: 1px;">
							</ul>
						</div>
                    </div>
                </li>
				<li class="gnb_li">
                    <button type="button" class="btn_op menu-600 menu-order-6" title="2023년훈련과정">2023년훈련과정</button>
                    <div class="gnb_oparea_wr">
                        <div class="gnb_oparea">
                            <h3>2023 - 신청과정</h3>
                            <ul>
							<hr style="border: 0; height: 3px; background:#2C67D1; opacity:0.4;">
							<li data-menu="600210"><a href="http://www.educomputer.co.kr/2023/sub06/0601.html" class="gnb_2da gnb_grp_style gnb_grp_div">[ITQ] 엑셀</a></li>
							<li data-menu="600220"><a href="http://www.educomputer.co.kr/2023/sub06/0602.html" class="gnb_2da gnb_grp_style gnb_grp_div">[ITQ] 프리젠테이션</a></li>
							<li data-menu="600230"><a href="http://www.educomputer.co.kr/2023/sub06/0603.html" class="gnb_2da  ">[ITQ] 한글</a></li>
							<li data-menu="600240"><a href="http://www.educomputer.co.kr/2023/sub06/0604.html" class="gnb_2da gnb_grp_style gnb_grp_div">컴퓨터활용능력 2급</a></li>
							<hr style="height: 1px;">
							<li data-menu="600250"><a href="http://www.educomputer.co.kr/2023/sub06/0605.html" class="gnb_2da gnb_grp_style gnb_grp_div">[GTQ] 포토샵</a></li>
							<li data-menu="600260"><a href="http://www.educomputer.co.kr/2023/sub06/0606.html" class="gnb_2da">[GTQ] 일러스트레이터</a></li>	
							<hr style="height: 1px;">
							<li data-menu="600220"><a href="http://www.educomputer.co.kr/2023/sub06/0607.html" class="gnb_2da gnb_grp_style gnb_grp_div">[AutoCAD] 기계설계</a></li>
							<li data-menu="600230"><a href="http://www.educomputer.co.kr/2023/sub06/0608.html" class="gnb_2da  ">[AutoCAD] 건축설계</a></li>
							<hr style="height: 1px;">
							<li data-menu="600240"><a href="http://www.educomputer.co.kr/2023/sub06/0609.html" class="gnb_2da gnb_grp_style gnb_grp_div">[Web,Blog,웹표준]</a></li>
							<hr style="height: 1px;">
							<li data-menu="600250"><a href="http://www.educomputer.co.kr/2023/sub06/0610.html" class="gnb_2da gnb_grp_style gnb_grp_div">파이썬과 R프로그래밍</a></li>
							<hr style="height: 1px;">
							</ul>							
						</div>
                    </div>
                </li>
                <li class="gnb_li">
                    <button type="button" class="btn_op menu-700 menu-order-7" title="참고자료">참고자료</button>
                    <div class="gnb_oparea_wr">
                        <div class="gnb_oparea">
                            <h3>참고자료</h3>
							<hr style="border: 0; height: 3px; background:purple; opacity:0.4;">
                            <ul>
							<li data-menu="700100"><a href="#" class="gnb_2da  ">법령자료</a></li>
							<li data-menu="700200"><a href="#" class="gnb_2da  ">교직원 연수자료</a></li>
							<li data-menu="700300"><a href="#" class="gnb_2da  ">고용노동부 공고</a></li>
							<hr style="height: 1px;">
							<li data-menu="700400"><a href="#" class="gnb_2da gnb_grp_style gnb_grp_div">참고자료</a></li>
							<li data-menu="700410"><a href="#" class="gnb_2da gnb_grp_style gnb_grp_div">수집자료</a></li>
							<hr style="height: 1px;">
							<li data-menu="700510"><a href="#" class="gnb_2da  ">학원 서식</a></li>							
							<hr style="height: 1px;">
							</ul>
						</div>
                    </div>
                </li>
        </ul>
    </nav>
</header>

`;