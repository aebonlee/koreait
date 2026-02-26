<?php
include_once('./_common.php');

define('_INDEX_', true);
if (!defined('_GNUBOARD_'))
	exit; // 개별 페이지 접근 불가

include_once('./head.php');
?>

<?php
if (!$member['mb_id']) {
	goto_url('./login.php');
}
?>

<div class="wrap">
	<h1>에듀컴퓨터교육학원<br>2023년 고용노동부 신규훈련기관인증평가</h1>

	<ul class="auto">
		<li class="btnStart"><i class="fas fa-play"></i></li>
		<li class="btnStop"><i class="fas fa-pause"></i></li>
	</ul>

	<div class="swiper-wrapper">
		<div class="swiper-slide">
			<div class="inner">
				<div class="con">
					<a href="./sub01/0101.php">
						<img src="./img/pic1.png">
						<h2>1.기관경영</h2>
					</a>
					<p>배곧에 위치한 에듀컴퓨터교육학원의 <br>
						기관경영 관련 증빙자료 메뉴로 이동합니다.</p>
					</a>
				</div>
			</div>
		</div>
		<div class="swiper-slide">
			<div class="inner">
				<div class="con">
					<a href="./sub02/0201.php">
						<img src="./img/pic2.png">
						<h2>2.훈련과정관리</h2>
						<p>배곧에 위치한 에듀컴퓨터교육학원의 <br>
							훈련과정관리 관련 증빙자료 메뉴로 이동합니다.</p>
					</a>
				</div>
			</div>
		</div>
		<div class="swiper-slide">
			<div class="inner">
				<div class="con">
					<a href="./sub03/0301.php">
						<img src="./img/pic3.png">
						<h2>3.훈련전담인력</h2>
					</a>
					<p>배곧에 위치한 에듀컴퓨터교육학원의 <br>
						훈련전담인력 관련 증빙자료 메뉴로 이동합니다.</p>
					</a>
				</div>
			</div>
		</div>
		<div class="swiper-slide">
			<div class="inner">
				<div class="con">
					<a href="./sub04/0401.php">
						<img src="./img/pic4.png">
						<h2>4.훈련인프라</h2>
					</a>
					<p>배곧에 위치한 에듀컴퓨터교육학원의 <br>
						훈련인프라 관련 증빙자료 메뉴로 이동합니다.</p>
					</a>
				</div>
			</div>
		</div>
		<div class="swiper-slide">
			<div class="inner">
				<div class="con">
					<a href="./sub05/0501.php">
						<img src="./img/pic5.png">
						<h2>5.훈련생관리</h2>
					</a>
					<p>배곧에 위치한 에듀컴퓨터교육학원의 <br>
						훈련생관리 관련 증빙자료 메뉴로 이동합니다.</p>
					</a>
				</div>
			</div>
		</div>
		<div class="swiper-slide">
			<div class="inner">
				<div class="con">
					<a href="./sub06/0601.php">
						<img src="./img/pic6.png">
						<h2>6.2023년 훈련과정</h2>
					</a>
					<p>배곧에 위치한 에듀컴퓨터교육학원의 <br>
						2023년 훈련과정 관련 증빙자료 메뉴로 이동합니다.</p>
					</a>
				</div>
			</div>
		</div>
		<div class="swiper-slide">
			<div class="inner">
				<div class="con">
					<a href="./sub07/0701.php">
						<img src="./img/pic7.png">
						<h2>7.참고자료</h2>
					</a>
					<p>배곧에 위치한 에듀컴퓨터교육학원의 <br>
						참고자료 관련 증빙자료 메뉴로 이동합니다.</p>
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- 좌우버튼 -->
	<div class="swiper-button-next"></div>
	<div class="swiper-button-prev"></div>

	<!-- 페이징 버튼 -->
	<div class="swiper-pagination"></div>
</div>

<script>
	const swiper = new Swiper('.wrap', {
		direction: "horizontal",
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction'
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		spaceBetween: 0,
		slidesPerView: "auto",
		grabCursor: true,
		centeredSlides: true,
		speed: 1000,
		effect: "coverflow",
		coverflowEffect: {
			rotate: 50,
			stretch: -100,
			depth: 400,
			modifier: 1,
			slideShadows: false,
		},
		autoplay: {
			delay: 1000,
			disableOnInteraction: true
		}
	});

	// .btnStart 요소를 찾아서 btnStart에 저장
	const btnStart = document.querySelector(".btnStart");
	// .btnStop 요소를 찾아서 btnStop에 저장
	const btnStop = document.querySelector(".btnStop");

	//btnStart버튼을 클릭시 자동롤링 시작
	btnStart.addEventListener("click", () => {
		swiper.autoplay.start();
	});

	//btnStart버튼을 클릭시 자동롤링 정지
	btnStop.addEventListener("click", () => {
		swiper.autoplay.stop();
	});
</script>
<footer id="ft">
	<p>
		Copyright &copy; born.dreamitbiz.com. All rights reserved. Version 5.5.8.3<br>
	</p>
</footer>

<?php
include_once('./tail.php');
?>