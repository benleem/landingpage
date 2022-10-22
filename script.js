const dropdownList = document.querySelectorAll(".dropdown-wrapper");

dropdownList.forEach((dropdownWrapper, i) => {
	const button = dropdownWrapper.querySelector(".button");
	button.addEventListener("click", () => {
		const dropdown = dropdownWrapper.querySelector(`.dropdown`);
		const plus = dropdownWrapper.querySelector(`.toggle-button`);

		dropdown.classList.toggle("active");
		plus.classList.toggle("active");
	});
});
