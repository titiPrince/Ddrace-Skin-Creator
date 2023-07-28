window.addEventListener('DOMContentLoaded', () => {
    let tiCheckboxs = document.querySelectorAll("div.ticheckbox");

    for (const tiCheckbox of tiCheckboxs) {
        let tiCheckboxInput = tiCheckbox.querySelector("input.checkbox-menu");
        
        tiCheckboxInput.addEventListener('change', (event) => {
            let tiCheckboxContainer = tiCheckbox.querySelector("div.checkbox-menu-container");
            tiCheckboxContainer.style.display = tiCheckboxInput.checked ? "initial" : "none";
        });

        tiCheckboxInput.dispatchEvent(new Event("change"));
    }
});