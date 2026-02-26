<?php
if (!defined('_GNUBOARD_'))
	exit; // 개별 페이지 접근 불가

?>

<!-- 로그인 시작 { -->
<div class="wrap">
	<h1>에듀컴퓨터교육학원<br>2023년 고용노동부 신규훈련기관인증평가</h1>

	<ul class="auto">
		<li class="btnStart"><i class="fas fa-play"></i></li>
		<li class="btnStop"><i class="fas fa-pause"></i></li>
	</ul>

	<div class="swiper-wrapper blur-md">
		<div class="swiper-slide">
			<div class="inner">
				<div class="con">
					<a href="./login.php">
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
					<a href="./login.php">
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
					<a href="./login.php">
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
					<a href="./login.php">
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
					<a href="./login.php">
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
					<a href="./login.php">
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
					<a href="./login.php">
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
	<div class="fixed top-0 w-full flex min-h-full flex-col justify-center items-center px-6 py-12 lg:px-8 z-10">
		<div class="flex flex-col justify-center bg-slate-800/[.6] rounded-md max-w-2xl w-full">
			<div class="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">로그인</h2>
			</div>

			<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm pb-4">
				<form class="space-y-6" action="<?php echo $login_action_url ?>" onsubmit="return flogin_submit(this);"
					method="post">
					<input type="hidden" name="url" value="<?php echo $login_url ?>">
					<div>
						<label for="login_id" class="block text-sm font-medium leading-6 text-white">아이디</label>
						<div class="mt-2">
							<input name="mb_id" id="login_id" type="id" autocomplete="id" required
								class="frm_input required block w-full rounded-md border-0 bg-white/5 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
						</div>
					</div>

					<div>
						<div class="flex items-center justify-between">
							<label for="login_pw" class="block text-sm font-medium leading-6 text-white">비밀번호</label>
							<div class="text-sm">
								<a href="<?php echo G5_BBS_URL ?>/password_lost.php"
									class="font-semibold text-sky-500 hover:text-sky-400">비밀번호 찾기</a>
							</div>
						</div>
						<div class="mt-2">
							<input name="mb_password" id="login_pw" type="password" required
								class="frm_input required block w-full rounded-md border-0 bg-white/5 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
						</div>
					</div>

					<div>
						<button type="submit"
							class="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Sign
							in</button>
					</div>
				</form>

				<p class="mt-10 text-center text-sm text-slate-200">
					회원이 아니신가요?
					<a href="<? echo G5_URL . '/bbs/register.php' ?>"
						class="font-semibold leading-6 text-sky-500 hover:text-sky-400">회원 가입</a>
				</p>
			</div>
		</div>
	</div>


	<!-- 좌우버튼 -->
	<div class="swiper-button-next"></div>
	<div class="swiper-button-prev"></div>

	<!-- 페이징 버튼 -->
	<div class="swiper-pagination"></div>
</div>

<!-- } 로그인 끝 -->

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