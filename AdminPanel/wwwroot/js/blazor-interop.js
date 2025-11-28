// Loader functionality with JS Interop
window.showLoader = function () {
    // Create loader overlay
    const loaderOverlay = document.createElement('div');
    loaderOverlay.id = 'loaderOverlay';
    loaderOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    // Create loader spinner
    const loader = document.createElement('div');
    loader.style.cssText = `
        border: 8px solid #f3f3f3;
        border-top: 8px solid #D51944;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        animation: spin 1s linear infinite;
    `;

    // Create loading text
    const loadingText = document.createElement('div');
    loadingText.textContent = 'Loading...';
    loadingText.style.cssText = `
        color: white;
        font-size: 24px;
        margin-top: 20px;
        font-family: 'roboto_condensed_light';
    `;

    // Create container for loader and text
    const container = document.createElement('div');
    container.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
    `;
    container.appendChild(loader);
    container.appendChild(loadingText);

    loaderOverlay.appendChild(container);
    document.body.appendChild(loaderOverlay);

    // Add spinner animation if not already present
    if (!document.getElementById('spinnerStyle')) {
        const style = document.createElement('style');
        style.id = 'spinnerStyle';
        style.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }

    // Hide loader after 10 seconds and call C# method
    setTimeout(async function () {
        const overlay = document.getElementById('loaderOverlay');
        if (overlay) {
            overlay.remove();
        }

        // Call C# method to display completion message
        try {
            await DotNet.invokeMethodAsync('AdminPanel', 'OnLoadingCompleted');
            
            // Also show an alert to the user
            Swal.fire({
                title: 'Loading Complete!',
                text: 'The loading process has been completed successfully.',
                icon: 'success',
                background: '#14111A',
                color: '#EEEEEE',
                confirmButtonColor: '#D51944'
            });
        } catch (error) {
            console.error('Error calling C# method:', error);
        }
    }, 10000);
}

// Initialize Bootstrap Material Design when document is ready
document.addEventListener('DOMContentLoaded', function() {
    if (typeof $ !== 'undefined' && $.fn.bootstrapMaterialDesign) {
        $('body').bootstrapMaterialDesign();
    }
});

// Navigation toggle functionality
document.addEventListener('click', function(e) {
    if (e.target.closest('.show-nav-lateral')) {
        e.preventDefault();
        const navLateral = document.querySelector('.nav-lateral');
        const pageContent = document.querySelector('.page-content');
        
        if (navLateral) {
            navLateral.classList.toggle('active');
        }
        if (pageContent) {
            pageContent.classList.toggle('active');
        }
    }
});

// Submenu toggle functionality
document.addEventListener('click', function(e) {
    if (e.target.closest('.nav-btn-submenu')) {
        e.preventDefault();
        const submenu = e.target.closest('li').querySelector('ul');
        if (submenu) {
            submenu.classList.toggle('show-nav-lateral-submenu');
        }
        
        const chevron = e.target.querySelector('.fa-chevron-down, .fa-chevron-up');
        if (chevron) {
            if (chevron.classList.contains('fa-chevron-down')) {
                chevron.classList.remove('fa-chevron-down');
                chevron.classList.add('fa-chevron-up');
            } else {
                chevron.classList.remove('fa-chevron-up');
                chevron.classList.add('fa-chevron-down');
            }
        }
    }
});
