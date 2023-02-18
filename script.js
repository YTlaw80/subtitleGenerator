const $wrapper = document.getElementById("wrapper");
const $sec_wrapper = document.getElementById("cnt");
const $nameBtn = document.getElementById("nameBtn"); // 이름 입력 버튼
const $nameInput = document.getElementById("nameInput"); // 이름 입력 창
const $nameTxt = document.getElementById("name"); // 이름 자막
const $cntTxt = document.getElementById("cnt"); // 내용 자막
const $cntBtn = document.getElementById("cntBtn"); // 내용 입력 버튼
const $cntInput = document.getElementById("cntInput"); // 내용 입력 창
const $cor1Btn = document.getElementById("cor1Btn");
const $cor1Input = document.getElementById("cor1Input");
const $cor2Btn = document.getElementById("cor2Btn");
const $cor2Input = document.getElementById("cor2Input");


$nameBtn.addEventListener('click', nameIn);
$cntBtn.addEventListener('click', cntIn);
$cor1Btn.addEventListener('click', cor1In);
$cor2Btn.addEventListener('click', cor2In);

function cor1In() {
	console.log($wrapper);
	$wrapper.style.backgroundColor = $cor1Input.value;
}

function cor2In() {
	$sec_wrapper.style.backgroundColor = $cor2Input.value;
}

function nameIn() {
	// console.log($nameInput.value);
	$nameTxt.innerText = $nameInput.value;
}

function cntIn() {
	// console.log($cntInput.value);
	$cntTxt.innerText = $cntInput.value;
}

