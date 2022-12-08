document.addEventListener("DOMContentLoaded", () => {
    //   You can get different selectors (class, id, tags...)
        const button = document.querySelector('.block-header__burger');
        const banner = document.querySelector('.block-header__links');
        const background = document.querySelector('.background');
    
        // Global open/close functions
        const open = () => {
            button.classList.add('burger--open');
            banner.classList.add('block-header__links--open');
            background.style.backgroundColor = 'var(--colors-primary-dark)';
        }
    
        const close = () => {
            button.classList.remove('burger--open');
            banner.classList.remove('block-header__links--open');
            background.style.backgroundColor = 'transparent';
        }
    
        // Check click on button
        button.addEventListener('mousedown',  () => {
     
            if (!button.classList.contains('burger--open')) {
                open()
            }
            else {
                close()
            }
    
        });
    
    
        // Close when user click outside
        document.body.addEventListener('mousedown', (e) => {
    
            let isClickInsideButton = button.contains(e.target);
            let isClickInsideBanner = banner.contains(e.target);
    
            if (!isClickInsideButton && !isClickInsideBanner) {
                close ();
            }
        });
    
    });