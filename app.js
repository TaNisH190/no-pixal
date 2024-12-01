document.addEventListener('DOMContentLoaded', function () {
    const themeSwitch = document.getElementById('theme-switch');

    function toggleTheme() {
        if (document.body.classList.contains('light-mode')) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }
    }

    themeSwitch.addEventListener('click', toggleTheme);
});