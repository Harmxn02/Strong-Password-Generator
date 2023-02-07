document.addEventListener("DOMContentLoaded", init);

function init() {
	getFormUpdate();
	getFormInfo();
}

function getFormUpdate() {
	const $form = document.querySelector("form");
	$form.addEventListener("change", getFormInfo);

	const $length = document.querySelector("#slider");
	$length.addEventListener("input", getFormInfo);
}

function getFormInfo() {
	const $useUppercase = document.querySelector("#uppercase").checked;
	const $useLowercase = document.querySelector("#lowercase").checked;
	const $useNumbers = document.querySelector("#numbers").checked;
	const $useSymbols = document.querySelector("#symbols").checked;
	const $length = document.querySelector("#slider").value;
	console.clear();

	console.log("use uppercase: ", $useUppercase);
	console.log("use lowercase: ", $useLowercase);
	console.log("use numbers: ", $useNumbers);
	console.log("use symbols: ", $useSymbols);
	console.log("length: ", $length);

	updateSlider($length);
	generatePassword(
		$useUppercase,
		$useLowercase,
		$useNumbers,
		$useSymbols,
		$length
	);
}

function updateSlider(length) {
	const $length_value = document.querySelector("#length_value");
	$length_value.innerHTML = length;
}

function generatePassword(
	useUppercase,
	useLowercase,
	useNumbers,
	useSymbols,
	length
) {
	let password = "";
	let options = "";

	if (useUppercase) {
		options += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	}
	if (useLowercase) {
		options += "abcdefghijklmnopqrstuvwxyz";
	}
	if (useNumbers) {
		options += "0123456789";
	}
	if (useSymbols) {
		options += "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";
	}

	if (!useUppercase & !useLowercase & !useNumbers & !useSymbols) {
		alert("Invalid password, select at least 1 option");
	}

	for (let i = 0; i < length; i++) {
		password += options.charAt(Math.floor(Math.random() * options.length));
	}

	console.log(password);
	setValue(password);
}

function copyToClipboard(elementId) {
	let input = document.getElementById(elementId);
	input.select();
	document.execCommand("copy");

	alertCopy();
}

function alertCopy() {
	alert("the password has been copied to clipboard :)");
}

function setValue(password) {
	$passwordField = document.querySelector("#thePassword");
	$passwordField.value = password;
}
