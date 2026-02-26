<?php
$current_dir = basename(dirname($_SERVER['PHP_SELF']));
?>

<header id="hd">
	<section>
		<nav class="relative">
			<div class="p-3 flex items-center bg-gray-800 fixed top-0 w-full z-[1000]">
				<div
					class="flex flex-row justify-center items-center mr-12 text-lg text-white font-semibold cursor-pointer w-fit">
					<div class="p-1 bg-sky-600 mr-3 rounded" id="btn_gnb">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
							stroke="currentColor" class="text-white w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round"
								d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
						</svg>
					</div>
					<a href="http://www.educomputer.co.kr/2023/">에듀컴퓨터교육학원</a>
				</div>
				<ul class="hidden xl:flex">
					<li>
						<a class="flex mr-10 items-center text-gray-50 hover:text-gray-100 text-sm"
							href="http://www.educomputer.co.kr/2023/sub01/0101.php">
							<svg class="text-gray-500 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
								viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round"
									d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
							</svg>
							<span>기관경영</span>
						</a>
					</li>
					<li>
						<a class="flex mr-10 items-center text-gray-50 hover:text-gray-100 text-sm"
							href="http://www.educomputer.co.kr/2023/sub02/0201.php">
							<svg class="text-gray-500 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
								viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round"
									d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
							</svg>
							<span>훈련과정관리</span>
						</a>
					</li>
					<li>
						<a class="flex mr-10 items-center text-gray-50 hover:text-gray-100 text-sm"
							href="http://www.educomputer.co.kr/2023/sub03/0301.php">
							<svg class="text-gray-500 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
								viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
								<path stroke-linecap="round" stroke-linejoin="round"
									d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
							</svg>
							<span>훈련전담인력</span>
						</a>
					</li>
					<li>
						<a class="flex mr-10 items-center text-gray-50 hover:text-gray-100 text-sm"
							href="http://www.educomputer.co.kr/2023/sub04/0401.php">
							<svg class="text-gray-500 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
								viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
								<path stroke-linecap="round" stroke-linejoin="round"
									d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
							</svg>

							<span>훈련인프라</span>
						</a>
					</li>
					<li>
						<a class="flex mr-10 items-center text-gray-50 hover:text-gray-100 text-sm"
							href="http://www.educomputer.co.kr/2023/sub05/0501.php">
							<svg class="text-gray-500 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
								viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
								<path stroke-linecap="round" stroke-linejoin="round"
									d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
							</svg>
							<span>훈련생관리</span>
						</a>
					</li>				
				</ul>
				<ul class="hidden xl:flex lg:justify-end lg:items-center lg:space-x-6 mr-6 ml-auto">
					<li>
						<a class="text-gray-600 hover:text-gray-500" href="#">
							<svg class="h-5 w-5" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M15 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V14C0 14.7956 0.316071 15.5587 0.87868 16.1213C1.44129 16.6839 2.20435 17 3 17H5.59L8.29 19.71C8.38344 19.8027 8.49426 19.876 8.61609 19.9258C8.73793 19.9755 8.86839 20.0008 9 20C9.23834 20 9.46886 19.9149 9.65 19.76L12.87 17H15C15.7956 17 16.5587 16.6839 17.1213 16.1213C17.6839 15.5587 18 14.7956 18 14V3C18 2.20435 17.6839 1.44129 17.1213 0.87868C16.5587 0.316071 15.7956 0 15 0ZM16 14C16 14.2652 15.8946 14.5196 15.7071 14.7071C15.5196 14.8946 15.2652 15 15 15H12.5C12.2617 15 12.0311 15.0851 11.85 15.24L9.05 17.64L6.71 15.29C6.61656 15.1973 6.50574 15.124 6.38391 15.0742C6.26207 15.0245 6.13161 14.9992 6 15H3C2.73478 15 2.48043 14.8946 2.29289 14.7071C2.10536 14.5196 2 14.2652 2 14V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H15C15.2652 2 15.5196 2.10536 15.7071 2.29289C15.8946 2.48043 16 2.73478 16 3V14Z"
									fill="currentColor"></path>
							</svg>
						</a>
					</li>
					<li>
						<a class="text-gray-600 hover:text-gray-500" href="#">
							<svg class="h-5 w-5" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M14 11.18V8C13.9986 6.58312 13.4958 5.21247 12.5806 4.13077C11.6655 3.04908 10.3971 2.32615 9 2.09V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V2.09C5.60294 2.32615 4.33452 3.04908 3.41939 4.13077C2.50425 5.21247 2.00144 6.58312 2 8V11.18C1.41645 11.3863 0.910998 11.7681 0.552938 12.2729C0.194879 12.7778 0.00173951 13.3811 0 14V16C0 16.2652 0.105357 16.5196 0.292893 16.7071C0.48043 16.8946 0.734784 17 1 17H4.14C4.37028 17.8474 4.873 18.5954 5.5706 19.1287C6.26819 19.6621 7.1219 19.951 8 19.951C8.8781 19.951 9.73181 19.6621 10.4294 19.1287C11.127 18.5954 11.6297 17.8474 11.86 17H15C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V14C15.9983 13.3811 15.8051 12.7778 15.4471 12.2729C15.089 11.7681 14.5835 11.3863 14 11.18ZM4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8V11H4V8ZM8 18C7.65097 17.9979 7.30857 17.9045 7.00683 17.7291C6.70509 17.5536 6.45451 17.3023 6.28 17H9.72C9.54549 17.3023 9.29491 17.5536 8.99317 17.7291C8.69143 17.9045 8.34903 17.9979 8 18ZM14 15H2V14C2 13.7348 2.10536 13.4804 2.29289 13.2929C2.48043 13.1054 2.73478 13 3 13H13C13.2652 13 13.5196 13.1054 13.7071 13.2929C13.8946 13.4804 14 13.7348 14 14V15Z"
									fill="currentColor"></path>
							</svg>
						</a>
					</li>
				</ul>
				<div class="hidden xl:block">
					<button class="flex items-center">
						<div class="mr-3">
							<p class="text-sm text-white">
								<?php echo $member['mb_nick'] ?>
							</p>
							<p class="text-sm text-gray-400">
								<?php
								if ($member['mb_level'] == 10) {
									echo "관리자";
								} else {
									echo "회원";
								}
								?>
							</p>
						</div>
						<div class="mr-2">
							<img class="w-10 h-10 rounded-full object-cover object-right" src="<?php echo $G5_PATH.'/2023/img/no_profile.gif' ?>"
								alt="">
						</div>
						<span>
							<svg class="text-gray-400" width="10" height="6" viewBox="0 0 10 6" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M9.08335 0.666657C8.75002 0.333323 8.25002 0.333323 7.91669 0.666657L5.00002 3.58332L2.08335 0.666657C1.75002 0.333323 1.25002 0.333323 0.916687 0.666657C0.583354 0.99999 0.583354 1.49999 0.916687 1.83332L4.41669 5.33332C4.58335 5.49999 4.75002 5.58332 5.00002 5.58332C5.25002 5.58332 5.41669 5.49999 5.58335 5.33332L9.08335 1.83332C9.41669 1.49999 9.41669 0.99999 9.08335 0.666657Z"
									fill="currentColor"></path>
							</svg>
						</span>
					</button>
				</div>
			</div>
		</nav>
	</section>
	<nav id="gnb" class="gnb_large ">
		<h2>관리자 주메뉴</h2>
		<ul class="gnb_ul">
			<li class="<?php if ($current_dir == 'sub01')
				echo 'gnb_li on';
			else
				echo 'gnb_li'; ?>">
				<button type="button" class="btn_op menu-100 menu-order-2" title="기관경영">기관경영</button>
				<div class="gnb_oparea_wr">
					<div class="gnb_oparea">
						<h3>Ⅰ. 기관경영</h3>
						<ul>
							<hr style="border: 0; height: 3px; background: #f00; opacity:0.4;">
							<li data-menu="100100"><a href="http://www.educomputer.co.kr/2023/sub01/0101.php"
									class="gnb_2da">훈련기관 소개</a></li>
							<li data-menu="100160"><a href="http://www.educomputer.co.kr/2023/sub01/0102.php"
									class="gnb_2da">2023 자체평가보고서</a></li>
							<li data-menu="100170"><a href="http://www.educomputer.co.kr/2023/sub01/0103.php"
									class="gnb_2da">대표훈련과정 소개</a></li>
							<li data-menu="100180"><a href="http://www.educomputer.co.kr/2023/sub01/0104.php"
									class="gnb_2da">기관증빙서류</a></li>
							<hr style="height: 1px;">
							<li data-menu="100190"><a href="http://www.educomputer.co.kr/2023/sub01/0105.php"
									class="gnb_2da">운영규정(경영원칙)</a></li>
							<!-- <li data-menu="100200"><a href="http://www.educomputer.co.kr/2023/sub01/0106.php"
									class="gnb_2da">장기/중기/단기계획</a></li> -->
							<li data-menu="100210"><a href="http://www.educomputer.co.kr/2023/sub01/0107.php"
									class="gnb_2da">특성화전략 (추진계획)</a></li>
							<!-- <li data-menu="100220"><a href="http://www.educomputer.co.kr/2023/sub01/0108.php"
									class="gnb_2da">연간교육훈련 운영계획</a></li> -->
							<li data-menu="100230"><a href="http://www.educomputer.co.kr/2023/sub01/0109.php"
									class="gnb_2da">훈련운영절차서</a></li>
							<hr style="height: 1px;">
							<li data-menu="100500"><a href="http://www.educomputer.co.kr/2023/sub01/0118.php"
									class="gnb_2da">에듀컴 문서관리</a></li>
							<li data-menu="100300"><a href="http://www.educomputer.co.kr/2023/sub01/0110.php"
									class="gnb_2da">회의록 (주간/월간)</a></li>
							<!-- <li data-menu="100310"><a href="http://www.educomputer.co.kr/2023/sub01/0111.php"
									class="gnb_2da">교직원 워크샵</a></li> -->
							<hr style="height: 1px;">
							<li data-menu="100315"><a href="http://www.educomputer.co.kr/2023/sub01/0119.php"
									class="gnb_2da">정보보안 규정/매뉴얼</a></li>
							<li data-menu="100320"><a href="http://www.educomputer.co.kr/2023/sub01/0112.php"
									class="gnb_2da">정보보안 매뉴얼/지침</a></li>
							<!-- <li data-menu="100330"><a href="http://www.educomputer.co.kr/2023/sub01/0113.php"
									class="gnb_2da">개인정보실태점검</a></li>
							<li data-menu="100400"><a href="http://www.educomputer.co.kr/2023/sub01/0114.php"
									class="gnb_2da">개인정보보안 관리대장</a></li> -->
							<hr style="height: 1px;">									
							<!-- <li data-menu="100410"><a href="http://www.educomputer.co.kr/2023/sub01/0115.php"
									class="gnb_2da">인근지역 환경분석</a></li> -->

							<li data-menu="100420"><a href="http://www.educomputer.co.kr/2023/sub01/0117.php"
									class="gnb_2da">비상연락망</a></li>

							<li data-menu="100430"><a href="http://www.educomputer.co.kr/2023/sub01/0116.php"
									class="gnb_2da">부정훈련예방자료</a></li>
							<hr style="height: 1px;">
							<br>
							<li data-menu="200340" style="font-size:12px; letter-spacing: -1px; color:#610B5E;">
							<b>* 실적기관평가 대비</b><br>
							<b>[2024년 추가예정]</b><br>
							1. 장기/중기/단기계획<br>
							2. 연간교육훈련 운영계획<br>
							3. 교직원 워크샵<br>
							4. 개인정보실태점검<br>
							5. 개인정보보안 관리대장<br>
							6. 인근지역 환경분석<br>
							</li>		
							<hr style="height: 1px;">	
						</ul>
					</div>
				</div>
			</li>
			<li class="<?php if ($current_dir == 'sub02')
				echo 'gnb_li on';
			else
				echo 'gnb_li'; ?>">
				<button type="button" class="btn_op menu-200 menu-order-1" title="훈련과정관리">훈련운영관리</button>
				<div class="gnb_oparea_wr">
					<div class="gnb_oparea">
						<h3>Ⅱ. 훈련과정관리</h3>
						<hr style="border: 0; height: 3px; background:orange; opacity:0.4;">
						<ul>
							<!-- <li data-menu="200100"><a href="http://www.educomputer.co.kr/2023/sub02/0201.php"
									class="gnb_2da">훈련과정개발매뉴얼 </a></li> -->
							<li data-menu="200110"><a href="http://www.educomputer.co.kr/2023/sub02/0202.php"
									class="gnb_2da">훈련과정개발절차</a></li>
							<li data-menu="200120"><a href="http://www.educomputer.co.kr/2023/sub02/0203.php"
									class="gnb_2da">훈련수요 및 요구조사</a></li>
							<li data-menu="200130"><a href="http://www.educomputer.co.kr/2023/sub02/0204.php"
									class="gnb_2da">23년 훈련과정개발내역</a></li>
							<hr style="height: 1px;">
							<li data-menu="200140"><a href="http://www.educomputer.co.kr/2023/sub02/0205.php"
									class="gnb_2da">훈련운영규정<a></li>
							<li data-menu="200200"><a href="http://www.educomputer.co.kr/2023/sub02/0206.php"
									class="gnb_2da">교사&학생 규정,지침표</a></li>
							<!-- <li data-menu="200300"><a href="http://www.educomputer.co.kr/2023/sub02/0207.php"
									class="gnb_2da">교육훈련 운영계획서</a></li>
							<li data-menu="200310"><a href="http://www.educomputer.co.kr/2023/sub02/0208.php"
									class="gnb_2da">교육훈련 운영 회의록</a></li>
							<li data-menu="200320"><a href="http://www.educomputer.co.kr/2023/sub02/0209.php"
									class="gnb_2da">훈련과정일정 수립</a></li>
							<li data-menu="200330"><a href="http://www.educomputer.co.kr/2023/sub02/0210.php"
									class="gnb_2da">홍보계획수립(실행)</a></li> -->
							<hr style="height: 1px;">
							<!-- <li data-menu="200340"><a href="http://www.educomputer.co.kr/2023/sub02/0211.php"
									class="gnb_2da">이수자평가관련서류</a></li>
							<li data-menu="200350"><a href="http://www.educomputer.co.kr/2023/sub02/0212.php"
									class="gnb_2da">성취도평가규정</a></li>
							<li data-menu="200360"><a href="http://www.educomputer.co.kr/2023/sub02/0213.php"
									class="gnb_2da">성취도평가결과분석표</a></li>
							<hr style="height: 1px;">
							<li data-menu="200370"><a href="http://www.educomputer.co.kr/2023/sub02/0214.php"
									class="gnb_2da">훈련과정 개선 및 반영</a></li> -->
							<li data-menu="200340"><a href="http://www.educomputer.co.kr/2023/sub02/0220.php"
									class="gnb_2da">이수자평가 체계도</a></li>									
							<hr style="height: 1px;">
							<br>
							<li data-menu="200340" style="font-size:12px; letter-spacing: -1px; color:#610B5E;">
							<b>* 실적기관평가 대비</b><br>
							<b>[2024년 추가예정]</b><br>
							1. 훈련과정개발매뉴얼<br>
							2. 교육훈련 운영계획서<br>
							3. 교육훈련 운영 회의록<br>
							4. 훈련과정일정 수립<br>
							5. 홍보계획수립(실행)<br>
							6. 이수자평가관련서류<br>
							7. 성취도평가규정<br>
							8. 성취도평가결과분석표<br>
							9. 훈련과정 개선 및 반영<br>
							</li>		
							<hr style="height: 1px;">							
						</ul>
					</div>
				</div>
			</li>
			<li class="<?php if ($current_dir == 'sub03')
				echo 'gnb_li on';
			else
				echo 'gnb_li'; ?>">
				<button type="button" class="btn_op menu-300 menu-order-3" title="훈련전담인력">훈련전담인력</button>
				<div class="gnb_oparea_wr">
					<div class="gnb_oparea">
						<h3>Ⅲ. 훈련전담인력</h3>
						<hr style="border: 0; height: 3px; background:#FCF05C; opacity:0.9;">
						<ul>
							<!-- <li data-menu="300120"><a href="http://www.educomputer.co.kr/2023/sub03/0301.php"
									class="gnb_2da">인사관리규정 </a></li>
							<li data-menu="300130"><a href="http://www.educomputer.co.kr/2023/sub03/0302.php"
									class="gnb_2da">인사관리프로세스</a></li>
							<li data-menu="300140"><a href="http://www.educomputer.co.kr/2023/sub03/0303.php"
									class="gnb_2da">교직원인사관리규정</a></li>
							<li data-menu="300150"><a href="http://www.educomputer.co.kr/2023/sub03/0304.php"
									class="gnb_2da">취업규칙</a></li>
							<li data-menu="300160"><a href="http://www.educomputer.co.kr/2023/sub03/0305.php"
									class="gnb_2da">채용공고,선발기준</a></li> -->
							<li data-menu="300120"><a href="http://www.educomputer.co.kr/2023/sub03/0301.php"
									class="gnb_2da">업무분장규정(분장표)</a></li>		
							<li data-menu="300100"><a href="http://www.educomputer.co.kr/2023/sub03/0306.php"
									class="gnb_2da">직무평가(지침,계획)</a></li>
							<li data-menu="300170"><a href="http://www.educomputer.co.kr/2023/sub03/0307.php"
									class="gnb_2da">교직원선발 기준표</a></li>

							<!-- <li data-menu="300200"><a href="http://www.educomputer.co.kr/2023/sub03/0308.php"
									class="gnb_2da">교직원업무분장</a></li>
							<li data-menu="300300"><a href="http://www.educomputer.co.kr/2023/sub03/0309.php"
									class="gnb_2da">교직원직무평가</a></li> -->
							<li data-menu="300400"><a href="http://www.educomputer.co.kr/2023/sub03/0310.php"
									class="gnb_2da">교직원역량개발</a></li>
							<hr style="height: 1px;">
							<li data-menu="300500"><a href="http://www.educomputer.co.kr/2023/sub03/0311.php"
									class="gnb_2da">김귀환 원장</a></li>
							<li data-menu="300600"><a href="http://www.educomputer.co.kr/2023/sub03/0312.php"
									class="gnb_2da">김경민 부원장</a></li>
							<li data-menu="300800"><a href="http://www.educomputer.co.kr/2023/sub03/0313.php"
									class="gnb_2da">훈련교사 이애본</a></li>
							<!-- <li data-menu="300810"><a href="http://www.educomputer.co.kr/2023/sub03/0314.php"
									class="gnb_2da">훈련교사</a></li>
							<li data-menu="300820"><a href="http://www.educomputer.co.kr/2023/sub03/0315.php"
									class="gnb_2da">훈련교사</a></li>
							<li data-menu="300900"><a href="http://www.educomputer.co.kr/2023/sub03/0316.php"
									class="gnb_2da">IT강사</a></li>
							<li data-menu="300920"><a href="http://www.educomputer.co.kr/2023/sub03/0317.php"
									class="gnb_2da">IT강사</a></li>
							<hr style="height: 1px;">
							<li data-menu="300930"><a href="http://www.educomputer.co.kr/2023/sub03/0318.php"
									class="gnb_2da">교직원 만족도조사</a></li>
							<!-- <li data-menu="300940"><a href="http://www.educomputer.co.kr/2023/sub03/0319.php"
									class="gnb_2da">인센티브 지급내역</a></li> -->
							<li data-menu="300950"><a href="http://www.educomputer.co.kr/2023/sub03/0320.php"
									class="gnb_2da">고용보험가입내역</a></li>
							<hr style="height: 1px;">
							<br>
							<li data-menu="200340" style="font-size:12px; letter-spacing: -1px; color:#610B5E;">
							<b>* 실적기관평가 대비</b><br>
							<b>[2024년 추가예정]</b><br>
							1. 교직원업무분장<br>
							2. 교직원직무평가<br>
							3. 인센티브 지급내역<br>
							4. 채용공고,선발기준<br>
							5. EduCom 취업규칙<br>
							6. 예비인력풀 구축<br>
							7. 교직원 만족도조사<br>
							</li>		
							<hr style="height: 1px;">								
						</ul>
					</div>
				</div>
			</li>
			<li class="<?php if ($current_dir == 'sub04')
				echo 'gnb_li on';
			else
				echo 'gnb_li'; ?>">
				<button type="button" class="btn_op menu-400 menu-order-5" title="훈련인프라">훈련인프라</button>
				<div class="gnb_oparea_wr">
					<div class="gnb_oparea">
						<h3>Ⅳ. 훈련인프라</h3>
						<hr style="border: 0; height: 3px; background:green; opacity:0.4;">
						<ul>
							<li data-menu="400100"><a href="http://www.educomputer.co.kr/2023/sub04/0401.php"
									class="gnb_2da">안전관리 규정</a></li>
							<li data-menu="400120"><a href="http://www.educomputer.co.kr/2023/sub04/0402.php"
									class="gnb_2da">안전관리 매뉴얼</a></li>
							<!-- <li data-menu="400130"><a href="http://www.educomputer.co.kr/2023/sub04/0403.php"
									class="gnb_2da">재난 및 안전관리</a></li>
							<li data-menu="400200"><a href="http://www.educomputer.co.kr/2023/sub04/0404.php"
									class="gnb_2da">화재,사고대비 체계도</a></li>-->
							<li data-menu="400290"><a href="http://www.educomputer.co.kr/2023/sub04/0414.php"
									class="gnb_2da">EduCom 자위소방대</a></li>									
							<hr style="height: 1px;">
							<!-- <li data-menu="400210"><a href="http://www.educomputer.co.kr/2023/sub04/0405.php"
									class="gnb_2da">안전관리 점검 내역</a></li> 
							<li data-menu="400220"><a href="http://www.educomputer.co.kr/2023/sub04/0406.php"
									class="gnb_2da">안전관리 구난장비</a></li>-->
							<li data-menu="400230"><a href="http://www.educomputer.co.kr/2023/sub04/0407.php"
									class="gnb_2da">안전교육,참고자료</a></li>
							<li data-menu="400300"><a href="http://www.educomputer.co.kr/2023/sub04/0408.php"
									class="gnb_2da">재해보험 내역</a></li>
							<hr style="height: 1px;">
							<li data-menu="400330"><a href="http://www.educomputer.co.kr/2023/sub04/0413.php"
									class="gnb_2da">훈련시설&장비 규정</a></li>
							<li data-menu="400320"><a href="http://www.educomputer.co.kr/2023/sub04/0410.php"
									class="gnb_2da">소프트웨어 관리대장</a></li>		
							<li data-menu="400310"><a href="http://www.educomputer.co.kr/2023/sub04/0409.php"
									class="gnb_2da">훈련시설 현황</a></li>
							<!-- <li data-menu="400320"><a href="http://www.educomputer.co.kr/2023/sub04/0410.php"
									class="gnb_2da">훈련시설 관리 내역</a></li> -->

							<li data-menu="400400"><a href="http://www.educomputer.co.kr/2023/sub04/0411.php"
									class="gnb_2da">훈련장비 현황</a></li>
							<!-- <li data-menu="400500"><a href="http://www.educomputer.co.kr/2023/sub04/0412.php"
									class="gnb_2da">훈련장비 관리 내역</a></li> -->
							<hr style="height: 1px;">
							<br>
							<li data-menu="200340" style="font-size:12px; letter-spacing: -1px; color:#610B5E;">
							<b>* 실적기관평가 대비</b><br>
							<b>[2024년 추가예정]</b><br>
							1. 안전관리 구난장비<br>
							2. 안전관리 점검 내역<br>
							3. 훈련시설 관리 내역 <br>
							4. 훈련장비 관리 내역 <br>							
							</li>		
							<hr style="height: 1px;">	
						</ul>
					</div>
				</div>
			</li>
			<li class="<?php if ($current_dir == 'sub05')
				echo 'gnb_li on';
			else
				echo 'gnb_li'; ?>">
				<button type="button" class="btn_op menu-500 menu-order-4" title="훈련생관리">훈련생관리</button>
				<div class="gnb_oparea_wr">
					<div class="gnb_oparea">
						<h3>Ⅴ. 훈련생관리</h3>
						<hr style="border: 0; height: 3px; background:#4A9EE7; opacity:0.4;">
						<ul>
							<li data-menu="500010"><a href="http://www.educomputer.co.kr/2023/sub05/0501.php"
									class="gnb_2da">교육훈련 체계도</a></li>
							<li data-menu="500100"><a href="http://www.educomputer.co.kr/2023/sub05/0502.php"
									class="gnb_2da">모집&홍보 매뉴얼</a></li>									
							<!-- <li data-menu="500100"><a href="http://www.educomputer.co.kr/2023/sub05/0502.php"
									class="gnb_2da">연간 개강계획</a></li>
							<li data-menu="500400"><a href="http://www.educomputer.co.kr/2023/sub05/0503.php"
									class="gnb_2da">과정운영실적</a></li> 
							<li data-menu="500440"><a href="http://www.educomputer.co.kr/2023/sub05/0504.php"
									class="gnb_2da">훈련생모집 홍보자료</a></li>
							<hr style="height: 1px;">
							<!--<li data-menu="500460"><a href="http://www.educomputer.co.kr/2023/sub05/0505.php"
									class="gnb_2da">훈련생 위탁기관</a></li>
							<li data-menu="500200"><a href="http://www.educomputer.co.kr/2023/sub05/0506.php"
									class="gnb_2da">훈련생 고충처리</a></li>
							<li data-menu="500300"><a href="http://www.educomputer.co.kr/2023/sub05/0507.php"
									class="gnb_2da">훈련생 상담내역</a></li>
							<hr style="height: 1px;"> 
							<li data-menu="500660"><a href="http://www.educomputer.co.kr/2023/sub05/0508.php"
									class="gnb_2da">훈련생 사후관리</a></li> -->
							<li data-menu="500650"><a href="http://www.educomputer.co.kr/2023/sub05/0509.php"
									class="gnb_2da">취업처 발굴내역</a></li>
							<li data-menu="500620"><a href="http://www.educomputer.co.kr/2023/sub05/0510.php"
									class="gnb_2da">MOU 및 협력기관</a></li>
							<!-- <li data-menu="500610"><a href="http://www.educomputer.co.kr/2023/sub05/0511.php"
									class="gnb_2da">과정별 만족도조사</a></li>
							<li data-menu="500500"><a href="http://www.educomputer.co.kr/2023/sub05/0512.php"
									class="gnb_2da">자격증 시험관리</a></li>
							<hr style="height: 1px;"> -->
							<li data-menu="500810"><a href="http://www.educomputer.co.kr/2023/sub05/0514.php"
									class="gnb_2da">훈련생 취업지원 교육</a></li>
							<!-- <li data-menu="500750"><a href="http://www.educomputer.co.kr/2023/sub05/0515.php"
									class="gnb_2da">훈련생 지원내역</a></li> 
							<li data-menu="500410"><a href="http://www.educomputer.co.kr/2023/sub05/0516.php"
									class="gnb_2da">훈련생 선발관련</a></li> -->
							<hr style="height: 1px;">
							<li data-menu="500820"><a href="http://www.educomputer.co.kr/2023/sub05/0517.php"
									class="gnb_2da">면담 및 고충처리계획서</a></li>
							<li data-menu="500830"><a href="http://www.educomputer.co.kr/2023/sub05/0518.php"
									class="gnb_2da">중도탈락방지 계획서</a></li>
							<li data-menu="500840"><a href="http://www.educomputer.co.kr/2023/sub05/0519.php"
									class="gnb_2da">중도탈락방지방안</a></li>									
							<hr style="height: 1px;">
							<li data-menu="500800"><a href="http://www.educomputer.co.kr/2023/sub05/0513.php"
									class="gnb_2da">EduCom 갤러리</a></li>							
							<hr style="height: 1px;">
							<br>
							<li data-menu="200340" style="font-size:12px; letter-spacing: -1px; color:#610B5E;">
							<b>* 실적기관평가 대비</b><br>
							<b>[2024년 추가예정]</b><br>
							1. 연간 개강계획<br>
							2. 훈련생모집 홍보자료<br>
							3. 과정운영실적 요약<br>
							4. 훈련생 위탁기관<br>
							5. 훈련생 고충처리<br>
							6. 훈련생 상담내역<br>
							7. 훈련생 사후관리<br>
							8. 과정별 만족도조사<br>
							9. 자격증 시험관리<br>
							10. 훈련생 지원내역<br>
							11. 훈련생 선발관련<br>
							</li>		
							<hr style="height: 1px;">								
						</ul>
					</div>
				</div>
			</li>
			<li class="<?php if ($current_dir == 'sub06')
				echo 'gnb_li on';
			else
				echo 'gnb_li'; ?>">
				<button type="button" class="btn_op menu-600 menu-order-6" title="2023년훈련과정">2023년훈련과정</button>
				<div class="gnb_oparea_wr">
					<div class="gnb_oparea">
						<h3>Ⅵ. 2023 신청과정</h3>
						<ul>
							<hr style="border: 0; height: 3px; background:#2C67D1; opacity:0.4;">
							<li data-menu="600210"><a href="http://www.educomputer.co.kr/2023/sub06/0601.php"
									class="gnb_2da gnb_grp_style gnb_grp_div">[ITQ] 엑셀</a></li>
							<li data-menu="600220"><a href="http://www.educomputer.co.kr/2023/sub06/0602.php"
									class="gnb_2da gnb_grp_style gnb_grp_div">[ITQ] 프리젠테이션</a></li>
							<li data-menu="600230"><a href="http://www.educomputer.co.kr/2023/sub06/0603.php"
									class="gnb_2da  ">[ITQ] 한글</a></li>
							<li data-menu="600240"><a href="http://www.educomputer.co.kr/2023/sub06/0604.php"
									class="gnb_2da gnb_grp_style gnb_grp_div">컴퓨터활용능력 2급</a></li>
							<hr style="height: 1px;">
							<li data-menu="600250"><a href="http://www.educomputer.co.kr/2023/sub06/0605.php"
									class="gnb_2da gnb_grp_style gnb_grp_div">[GTQ] 포토샵</a></li>
							<li data-menu="600260"><a href="http://www.educomputer.co.kr/2023/sub06/0606.php"
									class="gnb_2da">[GTQ] 일러스트레이터</a></li>
							<hr style="height: 1px;">
							<li data-menu="600220"><a href="http://www.educomputer.co.kr/2023/sub06/0607.php"
									class="gnb_2da gnb_grp_style gnb_grp_div">[AutoCAD] 기계설계</a></li>
							<li data-menu="600230"><a href="http://www.educomputer.co.kr/2023/sub06/0608.php"
									class="gnb_2da  ">[AutoCAD] 건축설계</a></li>
							<hr style="height: 1px;">
							<li data-menu="600240"><a href="http://www.educomputer.co.kr/2023/sub06/0609.php"
									class="gnb_2da gnb_grp_style gnb_grp_div">[Web,Blog,웹표준]</a></li>
							<hr style="height: 1px;">
							<li data-menu="600250"><a href="http://www.educomputer.co.kr/2023/sub06/0610.php"
									class="gnb_2da gnb_grp_style gnb_grp_div">파이썬과 R프로그래밍</a></li>
							<hr style="height: 1px;">
						</ul>
					</div>
				</div>
			</li>
			<li class="<?php if ($current_dir == 'sub07')
				echo 'gnb_li on';
			else
				echo 'gnb_li'; ?>">
				<button type="button" class="btn_op menu-700 menu-order-7" title="참고자료">참고자료</button>
				<div class="gnb_oparea_wr">
					<div class="gnb_oparea">
						<h3>Ⅶ. 참고자료</h3>
						<hr style="border: 0; height: 3px; background:purple; opacity:0.4;">
						<ul>
							<li data-menu="700100"><a href="http://www.educomputer.co.kr/2023/sub07/0701.php" class="gnb_2da">법령자료</a></li>
							<li data-menu="700200"><a href="http://www.educomputer.co.kr/2023/sub07/0702.php" class="gnb_2da">교직원 연수자료</a></li>
							<li data-menu="700300"><a href="http://www.educomputer.co.kr/2023/sub07/0703.php" class="gnb_2da">KSQA 정보수집</a></li>
							<hr style="height: 1px;">
							<li data-menu="700400"><a href="http://www.educomputer.co.kr/2023/sub07/0704.php" class="gnb_2da">강의자료 및 교안</a></li>
							<li data-menu="700410"><a href="http://www.educomputer.co.kr/2023/sub07/0705.php" class="gnb_2da">수집자료</a></li>
							<hr style="height: 1px;">
							<li data-menu="700510"><a href="http://www.educomputer.co.kr/2023/sub07/0706.php" class="gnb_2da">학원 서식</a></li>
							<hr style="height: 1px;">
						</ul>
					</div>
				</div>
			</li>
			<li class="<?php if ($current_dir == 'sub08')
				echo 'gnb_li on';
			else
				echo 'gnb_li'; ?>">
				<button type="button" class="btn_op menu-300 menu-order-3" title="훈련전담인력">훈련전담인력</button>
				<div class="gnb_oparea_wr">
					<div class="gnb_oparea">
						<h3>2024년 실적평가</h3>
						<hr style="border: 0; height: 3px; background:#FCF05C; opacity:0.9;">
						<ul>
							<!-- <li data-menu="300120"><a href="http://www.educomputer.co.kr/2023/sub03/0301.php"
									class="gnb_2da">인사관리규정 </a></li>
							<li data-menu="300130"><a href="http://www.educomputer.co.kr/2023/sub03/0302.php"
									class="gnb_2da">인사관리프로세스</a></li>
							<li data-menu="300140"><a href="http://www.educomputer.co.kr/2023/sub03/0303.php"
									class="gnb_2da">교직원인사관리규정</a></li>
							<li data-menu="300150"><a href="http://www.educomputer.co.kr/2023/sub03/0304.php"
									class="gnb_2da">취업규칙</a></li>
							<li data-menu="300160"><a href="http://www.educomputer.co.kr/2023/sub03/0305.php"
									class="gnb_2da">채용공고,선발기준</a></li> -->
							<li data-menu="300120"><a href="http://www.educomputer.co.kr/2023/sub03/0301.php"
									class="gnb_2da">교직업 업무 분장</a></li>		
							<li data-menu="300100"><a href="http://www.educomputer.co.kr/2023/sub03/0306.php"
									class="gnb_2da">직무평가(지침,계획)</a></li>
							<li data-menu="300170"><a href="http://www.educomputer.co.kr/2023/sub03/0307.php"
									class="gnb_2da">교직원선발 기준표</a></li>

							<!-- <li data-menu="300200"><a href="http://www.educomputer.co.kr/2023/sub03/0308.php"
									class="gnb_2da">교직원업무분장</a></li>
							<li data-menu="300300"><a href="http://www.educomputer.co.kr/2023/sub03/0309.php"
									class="gnb_2da">교직원직무평가</a></li> -->
							<li data-menu="300400"><a href="http://www.educomputer.co.kr/2023/sub03/0310.php"
									class="gnb_2da">교직원역량개발</a></li>
							<hr style="height: 1px;">
							<li data-menu="300500"><a href="http://www.educomputer.co.kr/2023/sub03/0311.php"
									class="gnb_2da">김귀환 원장</a></li>
							<li data-menu="300600"><a href="http://www.educomputer.co.kr/2023/sub03/0312.php"
									class="gnb_2da">김경민 부원장</a></li>
							<li data-menu="300800"><a href="http://www.educomputer.co.kr/2023/sub03/0313.php"
									class="gnb_2da">훈련교사 이애본</a></li>
							<!-- <li data-menu="300810"><a href="http://www.educomputer.co.kr/2023/sub03/0314.php"
									class="gnb_2da">훈련교사</a></li>
							<li data-menu="300820"><a href="http://www.educomputer.co.kr/2023/sub03/0315.php"
									class="gnb_2da">훈련교사</a></li>
							<li data-menu="300900"><a href="http://www.educomputer.co.kr/2023/sub03/0316.php"
									class="gnb_2da">IT강사</a></li>
							<li data-menu="300920"><a href="http://www.educomputer.co.kr/2023/sub03/0317.php"
									class="gnb_2da">IT강사</a></li>
							<hr style="height: 1px;">
							<li data-menu="300930"><a href="http://www.educomputer.co.kr/2023/sub03/0318.php"
									class="gnb_2da">교직원 만족도조사</a></li>
							<!-- <li data-menu="300940"><a href="http://www.educomputer.co.kr/2023/sub03/0319.php"
									class="gnb_2da">인센티브 지급내역</a></li> -->
							<li data-menu="300950"><a href="http://www.educomputer.co.kr/2023/sub03/0320.php"
									class="gnb_2da">고용보험가입내역</a></li>
							<hr style="height: 1px;">
							<br>
							<li data-menu="200340" style="font-size:12px; letter-spacing: -1px; color:#610B5E;">
							<b>* 실적기관평가 대비</b><br>
							<b>[2024년 추가예정]</b><br>
							1. 교직원업무분장<br>
							2. 교직원직무평가<br>
							3. 인센티브 지급내역<br>
							4. 채용공고,선발기준<br>
							5. EduCom 취업규칙<br>
							6. 예비인력풀 구축<br>
							7. 교직원 만족도조사<br>
							</li>		
							<hr style="height: 1px;">								
						</ul>
					</div>
				</div>
			</li>
		</ul>
	</nav>
</header>