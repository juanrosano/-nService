// sidebar
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('status-toggle');
    const circle = document.querySelector('.sidebar-online-circle');
    const statusText = document.querySelector('.sidebar-online-text');

    toggle.addEventListener('change', function() {
        if (toggle.checked) {
            
            circle.classList.remove('away');
            statusText.textContent = 'Online';
        } else {
            circle.classList.add('away');
            statusText.textContent = 'Away';
        }
    });
});
