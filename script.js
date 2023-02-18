const $nameBtn = document.getElementById("nameBtn"); // 이름 입력 버튼
const $nameInput = document.getElementById("nameInput"); // 이름 입력 창
const $nameTxt = document.getElementById("name"); // 이름 자막
const $cntTxt = document.getElementById("cnt"); // 내용 자막
const $cntBtn = document.getElementById("cntBtn"); // 내용 입력 버튼
const $cntInput = document.getElementById("cntInput"); // 내용 입력 창

$nameBtn.addEventListener('click', nameIn);
$cntBtn.addEventListener('click', cntIn);

function nameIn(e) {
	// console.log($nameInput.value);
	$nameTxt.innerText = $nameInput.value;
}

function cntIn(e) {
	// console.log($cntInput.value);
	$cntTxt.innerText = $cntInput.value;
}
