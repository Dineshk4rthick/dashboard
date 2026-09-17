// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navButtons = document.querySelector('.nav-buttons');    // Handle dropdown clicks for mobile
    function setupDropdownInteractions(container) {
        const dropdowns = container.querySelectorAll('.dropdown'); // Changed to querySelectorAll
        dropdowns.forEach(dropdown => {
            const dropdownLink = dropdown.querySelector('a');
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            
            if (dropdownLink && dropdownContent) {
                // Remove any existing event listeners by cloning the element
                const newDropdownLink = dropdownLink.cloneNode(true);
                dropdownLink.parentNode.replaceChild(newDropdownLink, dropdownLink);
                
                // For mobile, convert hover to click
                newDropdownLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('Dropdown clicked!'); // Debug log
                    
                    // Close other dropdowns first
                    container.querySelectorAll('.dropdown').forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.classList.remove('active');
                            const otherContent = otherDropdown.querySelector('.dropdown-content');
                            if (otherContent) {
                                otherContent.classList.remove('show');
                            }
                        }
                    });
                    
                    // Toggle current dropdown visibility
                    if (dropdownContent.classList.contains('show')) {
                        console.log('Closing dropdown'); // Debug log
                        dropdownContent.classList.remove('show');
                        dropdown.classList.remove('active');
                    } else {
                        console.log('Opening dropdown'); // Debug log
                        dropdownContent.classList.add('show');
                        dropdown.classList.add('active');
                    }
                });
                
                // Close dropdown when clicking outside
                document.addEventListener('click', function(e) {
                    if (!dropdown.contains(e.target)) {
                        dropdownContent.classList.remove('show');
                        dropdown.classList.remove('active');
                    }
                });
            }
        });
    }
    
    // Setup dropdown for desktop nav
    setupDropdownInteractions(navLinks);
    
    menuToggle.addEventListener('click', function() {        // Create mobile menu
        if (!document.querySelector('.mobile-menu')) {
            const mobileMenu = document.createElement('div');
            mobileMenu.classList.add('mobile-menu');
            
            // Create simple mobile navigation structure
            const mobileNav = document.createElement('div');
            mobileNav.innerHTML = `
                <div class="mobile-nav-item">
                    <a href="#" class="mobile-nav-link">Home</a>
                </div>
                <div class="mobile-nav-item mobile-dropdown">
                    <a href="#" class="mobile-nav-link mobile-dropdown-toggle">Demos <i class="fas fa-chevron-down"></i></a>
                    <div class="mobile-dropdown-content">
                        <a href="#" class="mobile-dropdown-item">Restaurant</a>
                        <a href="#" class="mobile-dropdown-item">Grocery</a>
                        <a href="#" class="mobile-dropdown-item">Clothing</a>
                        <a href="#" class="mobile-dropdown-item">Beauty</a>
                        <a href="#" class="mobile-dropdown-item">Jewelry</a>
                        <a href="#" class="mobile-dropdown-item">Pets</a>
                        <a href="#" class="mobile-dropdown-item">Furniture</a>
                        <a href="#" class="mobile-dropdown-item">Electronics</a>
                        <a href="#" class="mobile-dropdown-item">Toys</a>
                        <a href="#" class="mobile-dropdown-item">Bakery</a>
                        <a href="#" class="mobile-dropdown-item">Pharmacy</a>
                    </div>
                </div>
                <div class="mobile-nav-item">
                    <a href="features.html" class="mobile-nav-link">Features</a>
                </div>
                <div class="mobile-nav-item">
                    <a href="#" class="mobile-nav-link">Pricing</a>
                </div>
                <div class="mobile-nav-item">
                    <a href="#" class="mobile-nav-link">Plugins</a>
                </div>
            `;
            
            // Add login and try for free buttons
            const mobileButtons = document.createElement('div');
            mobileButtons.classList.add('mobile-buttons');
            mobileButtons.innerHTML = `
                <a href="#" class="btn btn-secondary">Login</a>
                <a href="#" class="btn btn-primary">Try for free →</a>
            `;
            
            mobileMenu.appendChild(mobileNav);
            mobileMenu.appendChild(mobileButtons);
            
            // Add close button
            const closeButton = document.createElement('div');
            closeButton.classList.add('close-menu');
            closeButton.innerHTML = '<i class="fas fa-times"></i>';
            mobileMenu.appendChild(closeButton);
            
            document.body.appendChild(mobileMenu);            
            // Add styles
            mobileMenu.style.position = 'fixed';
            mobileMenu.style.top = '0';
            mobileMenu.style.left = '0';
            mobileMenu.style.width = '100%';
            mobileMenu.style.height = '100vh';
            mobileMenu.style.backgroundColor = 'white';
            mobileMenu.style.zIndex = '2000';
            mobileMenu.style.padding = '60px 20px';
            mobileMenu.style.display = 'flex';
            mobileMenu.style.flexDirection = 'column';
            mobileMenu.style.gap = '30px';
            mobileMenu.style.overflowY = 'auto';
            
            // Style close button
            closeButton.style.position = 'absolute';
            closeButton.style.top = '20px';
            closeButton.style.right = '20px';
            closeButton.style.fontSize = '24px';
            closeButton.style.cursor = 'pointer';
            closeButton.style.padding = '10px';
            closeButton.style.backgroundColor = '#f8f9fa';
            closeButton.style.borderRadius = '50%';
            closeButton.style.width = '44px';
            closeButton.style.height = '44px';
            closeButton.style.display = 'flex';
            closeButton.style.alignItems = 'center';
            closeButton.style.justifyContent = 'center';
            
            // Setup mobile dropdown functionality
            const dropdownToggle = mobileMenu.querySelector('.mobile-dropdown-toggle');
            const dropdownContent = mobileMenu.querySelector('.mobile-dropdown-content');
            
            dropdownToggle.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Mobile dropdown clicked');
                
                if (dropdownContent.style.display === 'none' || !dropdownContent.style.display) {
                    dropdownContent.style.display = 'block';
                    dropdownToggle.querySelector('i').style.transform = 'rotate(180deg)';
                } else {
                    dropdownContent.style.display = 'none';
                    dropdownToggle.querySelector('i').style.transform = 'rotate(0deg)';
                }
            });
            
            // Style mobile navigation
            mobileNav.style.display = 'flex';
            mobileNav.style.flexDirection = 'column';
            mobileNav.style.gap = '0';
            
            // Style mobile buttons
            mobileButtons.style.display = 'flex';
            mobileButtons.style.flexDirection = 'column';
            mobileButtons.style.gap = '12px';
            mobileButtons.style.marginTop = '20px';
              // Close menu when clicking close button
            closeButton.addEventListener('click', function() {
                document.body.removeChild(mobileMenu);
            });
            
            // Close menu when clicking non-dropdown links
            const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link:not(.mobile-dropdown-toggle)');
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', function() {
                    document.body.removeChild(mobileMenu);
                });
            });
            
            // Close menu when clicking dropdown items
            const mobileDropdownItems = mobileMenu.querySelectorAll('.mobile-dropdown-item');
            mobileDropdownItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault(); // Prevent default for demo
                    console.log('Selected:', item.textContent);
                    document.body.removeChild(mobileMenu);
                });
            });
        } else {
            document.body.removeChild(document.querySelector('.mobile-menu'));
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation for app showcase
    const appSlider = document.querySelector('.app-slider');
    if (appSlider) {
        // Auto scroll the app showcase
        let scrollAmount = 0;
        const scrollSpeed = 0.5;
        let scrollInterval = setInterval(() => {
            appSlider.scrollLeft += scrollSpeed;
            scrollAmount += scrollSpeed;
            
            // Reset scroll position when reaching the end
            if (scrollAmount >= (appSlider.scrollWidth - appSlider.clientWidth)) {
                appSlider.scrollLeft = 0;
                scrollAmount = 0;
            }
        }, 30);
        
        // Removed hover pause functionality
    }
      // Add animation for plugins showcase
    const pluginsSlider = document.querySelector('.plugins-slider');
    if (pluginsSlider) {
        // Auto scroll the plugins showcase at the same speed as app showcase
        let pluginsScrollAmount = 0;
        const pluginsScrollSpeed = 0.5; // Same speed as app showcase
        
        setInterval(() => {
            pluginsSlider.scrollLeft += pluginsScrollSpeed;
            pluginsScrollAmount += pluginsScrollSpeed;
            
            // When we reach the end, jump back to start
            if (pluginsScrollAmount >= (pluginsSlider.scrollWidth - pluginsSlider.clientWidth)) {
                pluginsSlider.scrollLeft = 0;
                pluginsScrollAmount = 0;
            }
        }, 30);
    }
  
    
    // Add animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.hero-content, .app-slide');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation
    document.querySelectorAll('.hero-content, .app-slide').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    animateOnScroll();
});



// App Slider Infinite Loop
document.addEventListener('DOMContentLoaded', function() {
    const appSlider = document.querySelector('.app-slider');
    const slides = document.querySelectorAll('.app-slider .app-slide:not(.clone)');
    const totalSlides = slides.length;
    
    let currentPosition = 0;
    let slideWidth = 0;
    let animationId;
    
    // Calculate slide width based on viewport
    function calculateSlideWidth() {
        if (window.innerWidth > 1200) {
            slideWidth = 300; // Desktop width
        } else if (window.innerWidth > 768) {
            slideWidth = 250; // Tablet width
        } else {
            slideWidth = 200; // Mobile width
        }
    }
    
    // Initialize slider
    function initSlider() {
        calculateSlideWidth();
        
        // Set initial position to show first slide
        currentPosition = 0;
        updateSliderPosition();
        
        // Start animation
        startAnimation();
    }
    
    // Update slider position
    function updateSliderPosition() {
        appSlider.style.transform = `translateX(${-currentPosition}px)`;
    }
    
    // Animate slider
    function animateSlider() {
        currentPosition += 1; // Move 1px at a time for smooth animation
        
        // If we've moved a full slide width, check if we need to reset
        if (currentPosition % slideWidth === 0) {
            const currentSlideIndex = currentPosition / slideWidth;
            
            // If we've reached the end of original slides, reset to beginning
            if (currentSlideIndex >= totalSlides) {
                currentPosition = 0;
            }
        }
        
        updateSliderPosition();
        animationId = requestAnimationFrame(animateSlider);
    }
    
    // Start animation
    function startAnimation() {
        animationId = requestAnimationFrame(animateSlider);
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        calculateSlideWidth();
    });
    
    // Initialize the slider
    initSlider();
});



// Stats Counter Animation
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter-value');
    const counterSection = document.querySelector('.stats-counter-section');
    
    let counted = false;
    
    function startCounting() {
        if (counted) return;
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000; // 2 seconds for the animation
            const increment = target / (duration / 16); // 60fps
            
            let currentCount = 0;
            
            const updateCounter = () => {
                currentCount += increment;
                
                if (currentCount < target) {
                    // For large numbers, show with commas and no decimals
                    if (target > 1000) {
                        counter.textContent = Math.floor(currentCount).toLocaleString();
                    } else {
                        counter.textContent = Math.floor(currentCount);
                    }
                    requestAnimationFrame(updateCounter);
                } else {
                    // Ensure we end exactly at the target value
                    if (target > 1000) {
                        counter.textContent = target.toLocaleString();
                    } else {
                        counter.textContent = target;
                    }
                }
            };
            
            updateCounter();
        });
        
        counted = true;
    }
    
    // Check if the counter section is in viewport
    function checkIfInView() {
        const rect = counterSection.getBoundingClientRect();
        const isInViewport = (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
        
        if (isInViewport) {
            startCounting();
            window.removeEventListener('scroll', checkIfInView);
        }
    }
    
    // Initial check and add scroll listener
    checkIfInView();
    window.addEventListener('scroll', checkIfInView);
});

// Stacking Cards Scroll Effect Enhancement
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.stacking-card');
    
    if (cards.length === 0) return;
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) * 0.2
        );
    }
    
    // Function to handle scroll effects
    function handleScroll() {
        cards.forEach((card, index) => {
            // Calculate how far the card is from its sticky position
            const rect = card.getBoundingClientRect();
            const stickyTop = parseInt(window.getComputedStyle(card).top);
            const distanceFromSticky = rect.top - stickyTop;
            
            // Apply subtle scale effect based on scroll position
            if (distanceFromSticky < 0 && index < cards.length - 1) {
                // Card is being pushed up by the next card
                const progress = Math.min(1, Math.abs(distanceFromSticky) / 200);
                card.style.transform = `scale(${1 - progress * 0.03})`;
                card.style.opacity = 1 - progress * 0.3;
            } else {
                // Card is at or approaching its sticky position
                card.style.transform = 'scale(1)';
                card.style.opacity = 1;
            }
            
            // Add visible class when card comes into view
            if (isInViewport(card)) {
                card.classList.add('visible');
            }
        });
    }
    
    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});

// New Stacking Cards Scroll Effect - True Bottom-to-Top Stacking Animation (Figma Style)
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.new-stacking-card');
    const section = document.querySelector('.new-stacking-cards-section');
    
    if (cards.length === 0 || !section) return;
    
    // Check if we should disable stacking on mobile/tablet
    function shouldDisableStacking() {
        return window.innerWidth <= 992;
    }
      // Reset cards to normal positioning (for mobile)
    function resetCards() {
        cards.forEach((card, index) => {
            card.style.position = 'relative';
            card.style.top = 'auto';
            card.style.left = 'auto';
            card.style.transform = 'none';
            card.style.opacity = '1';
            card.style.zIndex = 'auto';
            card.style.marginBottom = '20px';
        });
    }
      // Calculate key scroll positions
    const viewportHeight = window.innerHeight;
    const stackPosition = 250; // Top position where cards stack (sticky top value)
    
    function updateStackingCards() {
        // Skip stacking animation on mobile/tablet
        if (shouldDisableStacking()) {
            resetCards();
            return;
        }
        
        const scrollY = window.pageYOffset;
        const sectionRect = section.getBoundingClientRect();
        const sectionTop = sectionRect.top + scrollY;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        // Check if we're within the section bounds
        const isInSection = scrollY >= sectionTop - viewportHeight && scrollY <= sectionBottom;
        
        if (!isInSection) {
            // Hide all cards when outside the section
            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.pointerEvents = 'none';
            });
            return;
        }
          // Calculate how far we've scrolled into the section
        const scrollIntoSection = Math.max(0, scrollY - sectionTop + viewportHeight * 0.3);
        
        // Each card needs a scroll distance to fully animate from bottom to stack position
        const cardAnimationDistance = viewportHeight * 0.4; // Reduced for faster animation and quicker section transition
        
        cards.forEach((card, index) => {
            // Calculate when this card should start and finish animating
            const cardStartScroll = index * cardAnimationDistance;
            
            // Calculate progress for this specific card (0 = at bottom, 1 = stacked)
            let cardProgress = 0;
            if (scrollIntoSection > cardStartScroll) {
                cardProgress = Math.min((scrollIntoSection - cardStartScroll) / cardAnimationDistance, 1);
            }
            
            // Set base z-index (later cards on top when stacked)
            let zIndex = 10 + index;
              // Check if we're past the section - hide cards for smoother transition
            if (scrollY > sectionBottom - viewportHeight * 0.8) {
                card.style.opacity = '0';
                card.style.pointerEvents = 'none';
                return;
            }
            
            card.style.pointerEvents = 'auto';
            
            if (cardProgress === 0) {
                // Card hasn't started animating - hide it
                card.style.position = 'fixed';
                card.style.top = '100vh';
                card.style.left = '50%';
                card.style.transform = 'translateX(-50%)';
                card.style.opacity = '0';
                card.style.zIndex = zIndex;
                
            } else if (cardProgress < 1) {
                // Card is animating from bottom to stack position
                const currentTop = viewportHeight - (cardProgress * (viewportHeight - stackPosition));
                
                card.style.position = 'fixed';
                card.style.top = `${currentTop}px`;
                card.style.left = '50%';
                card.style.transform = 'translateX(-50%)';
                card.style.opacity = '1';
                card.style.zIndex = zIndex + 100; // Higher z-index while moving up
                
            } else {
                // Card has reached stack position - keep it there
                card.style.position = 'fixed';
                card.style.top = `${stackPosition}px`;
                card.style.left = '50%';
                card.style.transform = 'translateX(-50%)';
                card.style.opacity = '1';
                card.style.zIndex = zIndex; // Normal z-index when stacked
            }
        });
    }
    
    // Throttled scroll handler for smooth performance
    let ticking = false;
    function handleScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateStackingCards();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // Handle window resize
    function handleResize() {
        if (shouldDisableStacking()) {
            resetCards();
        } else {
            updateStackingCards();
        }
    }
    
    // Event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
      // Initial update
    if (shouldDisableStacking()) {
        resetCards();
    } else {
        updateStackingCards();
    }
});

// Templates Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const templateModal = document.getElementById('templateModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
      // Template data
    const templateData = {
        portfolio: {
            name: 'Portfolio',
            description: 'Showcase your work with this elegant portfolio template. Perfect for creative professionals, designers, and freelancers.',
            image: 'img/8cce64b5f6c68e5c0202c240178ac5ba577f6377-1440x835.jpg'
        },
        event: {
            name: 'Event',
            description: 'Create stunning event websites with this dynamic template. Ideal for conferences, workshops, and special occasions.',
            image: 'img/2db849340bac150d6946cb5fb055a9e9748f7eeb-1440x8351536.jpg'
        },
        business: {
            name: 'Business',
            description: 'Professional business template perfect for corporate websites, consulting firms, and service providers.',
            image: 'img/303076a260143a13a0f12cb792a843d8817fa6bb-1440x835035.jpg'
        },
        store: {
            name: 'Store',
            description: 'Complete e-commerce solution with modern design. Perfect for online stores and retail businesses.',
            image: 'img/1360d9422620b63848dd841a8e346b58e702fec3-1440x835484.jpg'
        }
    };    
    // Modal Functionality
    function openModal(templateKey) {
        const template = templateData[templateKey];
        if (template && templateModal) {
            modalImage.src = template.image;
            modalImage.alt = template.name;
            modalTitle.textContent = template.name;
            modalDescription.textContent = template.description;
            
            templateModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Add smooth entrance animation
            setTimeout(() => {
                templateModal.style.opacity = '1';
            }, 10);
        }
    }
    
    function closeModal() {
        if (templateModal) {
            templateModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            setTimeout(() => {
                modalImage.src = '';
            }, 300);
        }
    }
    
    // Event listeners for template cards and view buttons
    document.querySelectorAll('.template-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger modal if clicking the view button
            if (!e.target.closest('.view-template-btn')) {
                const templateKey = this.dataset.template;
                openModal(templateKey);
            }
        });
    });
    
    document.querySelectorAll('.view-template-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const templateKey = this.dataset.template;
            openModal(templateKey);
        });
    });
    
    // Modal close events
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && templateModal && templateModal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Prevent modal content clicks from closing modal
    document.querySelector('.modal-content')?.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

// Full-Screen Slider with GSAP Animations
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.fullscreen-slider-section');
    if (!slider) return;

    const slides = document.querySelectorAll('.fullscreen-slide');
    const navDots = document.querySelectorAll('.nav-dot');    const prevBtn = document.querySelector('.slider-arrow-prev');
    const nextBtn = document.querySelector('.slider-arrow-next');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const progressBar = document.querySelector('.slide-progress');
    
    let currentSlide = 0;
    let isAnimating = false;
    let scrollTimeout;
    let lastScrollTime = 0;

    // Initialize GSAP timeline
    const tl = gsap.timeline();

    // Initialize first slide
    function init() {
        gsap.set(slides, { y: '100%', opacity: 0 });
        gsap.set(slides[0], { y: '0%', opacity: 1 });
        
        // Animate first slide content
        animateSlideContent(slides[0], 'in');
        updateNavigation();
    }

    // Animate slide content
    function animateSlideContent(slide, direction) {
        const badge = slide.querySelector('.slide-badge');
        const title = slide.querySelector('.slide-title');
        const description = slide.querySelector('.slide-description');
        const actions = slide.querySelector('.slide-actions');
        const image = slide.querySelector('.slide-image');
        const floatingElements = slide.querySelectorAll('.floating-element');

        if (direction === 'in') {
            const contentTl = gsap.timeline();
            
            contentTl
                .from(badge, { duration: 0.6, y: 30, opacity: 0, ease: "power2.out" })
                .from(title, { duration: 0.8, y: 50, opacity: 0, ease: "power2.out" }, "-=0.4")
                .from(description, { duration: 0.6, y: 30, opacity: 0, ease: "power2.out" }, "-=0.5")
                .from(actions.children, { 
                    duration: 0.5, 
                    y: 20, 
                    opacity: 0, 
                    stagger: 0.1, 
                    ease: "power2.out" 
                }, "-=0.4")
                .from(image, { 
                    duration: 1, 
                    scale: 1.2, 
                    opacity: 0, 
                    ease: "power2.out" 
                }, "-=0.8")
                .from(floatingElements, {
                    duration: 0.8,
                    scale: 0,
                    opacity: 0,
                    stagger: 0.1,
                    ease: "back.out(1.7)"
                }, "-=0.6");
        } else {
            gsap.to([badge, title, description, actions, image], {
                duration: 0.3,
                y: -20,
                opacity: 0,
                ease: "power2.in"
            });
        }
    }

    // Change slide function
    function changeSlide(newIndex, direction = 'next') {
        if (isAnimating || newIndex === currentSlide) return;
        
        isAnimating = true;
        const currentSlideEl = slides[currentSlide];
        const newSlideEl = slides[newIndex];

        // Animate out current slide content
        animateSlideContent(currentSlideEl, 'out');

        // Create slide transition timeline
        const slideTl = gsap.timeline({
            onComplete: () => {
                isAnimating = false;
                updateNavigation();
                // Animate in new slide content after slide transition
                animateSlideContent(newSlideEl, 'in');
            }
        });

        if (direction === 'next') {
            slideTl
                .set(newSlideEl, { y: '100%', opacity: 0 })
                .to(currentSlideEl, { 
                    duration: 0.8, 
                    y: '-100%', 
                    opacity: 0, 
                    ease: "power2.inOut" 
                })
                .to(newSlideEl, { 
                    duration: 0.8, 
                    y: '0%', 
                    opacity: 1, 
                    ease: "power2.inOut" 
                }, "-=0.4");
        } else {
            slideTl
                .set(newSlideEl, { y: '-100%', opacity: 0 })
                .to(currentSlideEl, { 
                    duration: 0.8, 
                    y: '100%', 
                    opacity: 0, 
                    ease: "power2.inOut" 
                })
                .to(newSlideEl, { 
                    duration: 0.8, 
                    y: '0%', 
                    opacity: 1, 
                    ease: "power2.inOut" 
                }, "-=0.4");
        }

        currentSlide = newIndex;
    }    // Update navigation indicators
    function updateNavigation() {
        navDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });

        // Update progress bar
        if (progressBar) {
            const progress = ((currentSlide + 1) / slides.length) * 100;
            progressBar.style.width = progress + '%';
        }

        // Update arrow states
        prevBtn.style.opacity = currentSlide === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentSlide === slides.length - 1 ? '0.5' : '1';
    }

    // Navigation event listeners
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (index !== currentSlide) {
                const direction = index > currentSlide ? 'next' : 'prev';
                changeSlide(index, direction);
            }
        });
    });

    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            changeSlide(currentSlide - 1, 'prev');
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            changeSlide(currentSlide + 1, 'next');
        }
    });

    // Scroll detection for slide navigation
    function handleScroll(event) {
        const currentTime = Date.now();
        
        // Throttle scroll events
        if (currentTime - lastScrollTime < 100) return;
        lastScrollTime = currentTime;

        // Check if we're in the slider section
        const sliderRect = slider.getBoundingClientRect();
        const isInSlider = sliderRect.top <= 0 && sliderRect.bottom >= window.innerHeight;
        
        if (!isInSlider || isAnimating) return;

        event.preventDefault();

        const delta = event.deltaY || event.detail || event.wheelDelta;
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (delta > 0 && currentSlide < slides.length - 1) {
                // Scroll down - next slide
                changeSlide(currentSlide + 1, 'next');
            } else if (delta < 0 && currentSlide > 0) {
                // Scroll up - previous slide
                changeSlide(currentSlide - 1, 'prev');
            }
        }, 50);
    }

    // Touch/swipe support for mobile
    let touchStartY = 0;
    let touchEndY = 0;

    function handleTouchStart(event) {
        touchStartY = event.touches[0].clientY;
    }

    function handleTouchEnd(event) {
        touchEndY = event.changedTouches[0].clientY;
        handleSwipe();
    }

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && currentSlide < slides.length - 1) {
                // Swipe up - next slide
                changeSlide(currentSlide + 1, 'next');
            } else if (diff < 0 && currentSlide > 0) {
                // Swipe down - previous slide
                changeSlide(currentSlide - 1, 'prev');
            }
        }
    }

    // Keyboard navigation
    function handleKeydown(event) {
        const sliderRect = slider.getBoundingClientRect();
        const isInSlider = sliderRect.top <= 0 && sliderRect.bottom >= window.innerHeight;
        
        if (!isInSlider) return;

        switch(event.key) {
            case 'ArrowUp':
                event.preventDefault();
                if (currentSlide > 0) {
                    changeSlide(currentSlide - 1, 'prev');
                }
                break;
            case 'ArrowDown':
                event.preventDefault();
                if (currentSlide < slides.length - 1) {
                    changeSlide(currentSlide + 1, 'next');
                }
                break;
            case 'Home':
                event.preventDefault();
                changeSlide(0, currentSlide > 0 ? 'prev' : 'next');
                break;
            case 'End':
                event.preventDefault();
                changeSlide(slides.length - 1, 'next');
                break;
        }
    }

    // Auto-play functionality (optional)
    let autoplayInterval;
    const autoplayDuration = 8000; // 8 seconds

    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            if (!isAnimating) {
                const nextIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
                changeSlide(nextIndex, 'next');
            }
        }, autoplayDuration);
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    // Intersection Observer for auto-play
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startAutoplay();
            } else {
                stopAutoplay();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(slider);

    // Event listeners
    slider.addEventListener('wheel', handleScroll, { passive: false });
    slider.addEventListener('touchstart', handleTouchStart, { passive: true });
    slider.addEventListener('touchend', handleTouchEnd, { passive: true });
    document.addEventListener('keydown', handleKeydown);

    // Pause autoplay on interaction
    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', () => {
        const sliderRect = slider.getBoundingClientRect();
        const isInView = sliderRect.top <= 0 && sliderRect.bottom >= window.innerHeight;
        if (isInView) startAutoplay();
    });

    // Initialize
    init();

    // Handle resize
    function handleResize() {
        // Reinitialize positions on resize
        gsap.set(slides, { clearProps: "all" });
        gsap.set(slides, { y: '100%', opacity: 0 });
        gsap.set(slides[currentSlide], { y: '0%', opacity: 1 });
    }

    window.addEventListener('resize', debounce(handleResize, 250));

    // Debounce utility
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
});