document.addEventListener('DOMContentLoaded', () => {
  const menuOpen = document.querySelector('.menu-open');
  const menuClose = document.querySelector('.menu-close');

  let isOpen = false;
  const defaultEase = 'power4.inOut';

  gsap.set('.menu-logo img', { y: 50 });
  gsap.set('.menu-link p', { y: 40 });
  gsap.set('.menu-sub-item p', { y: 12 });
  gsap.set(['#img-2, #img-3, #img-4'], { top: '150%' });

  menuOpen.addEventListener('click', () => {
    if (isOpen) return;
    openMenu();
  });

  menuClose.addEventListener('click', () => {
    if (!isOpen) return;
    closeMenu();
  });

  const openMenu = () => {
    gsap.to('.menu', {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      pointerEvents: 'all',
      duration: 1.25,
      ease: defaultEase,
    });

    gsap.to('.hero', {
      top: '-50%',
      opacity: 0,
      duration: 1.25,
      ease: defaultEase,
    });

    gsap.to('.menu-logo img', {
      y: 0,
      duration: 1,
      delay: 0.75,
      ease: 'power3.out',
    });

    gsap.to('.menu-link p', {
      y: 0,
      duration: 1,
      stagger: 0.075,
      delay: 1,
      ease: 'power3.out',
    });

    gsap.to('.menu-sub-item p', {
      y: 0,
      duration: 0.075,
      stagger: 0.05,
      delay: 1,
      ease: 'power3.out',
    });

    gsap.to(['#img-2, #img-3, #img-4'], {
      top: '50%',
      duration: 1.25,
      ease: defaultEase,
      stagger: 0.1,
      delay: 0.25,
      onComplete: () => {
        gsap.set('.hero', { top: '50%' });
        isOpen = !isOpen;
      },
    });
  };

  const closeMenu = () => {
    gsap.to('.menu', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      pointerEvents: 'none',
      duration: 1.25,
      ease: defaultEase,
    });

    gsap.to('.menu-items', {
      top: '-300px',
      opacity: 0,
      duration: 1.25,
      ease: defaultEase,
    });

    gsap.to('.hero', {
      top: '0%',
      opacity: 1,
      duration: 1.25,
      ease: defaultEase,
      onComplete: () => {
        gsap.to('.menu', {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        });

        gsap.set('.menu-logo img', { y: 50 });
        gsap.set('.menu-link p', { y: 40 });
        gsap.set('.menu-sub-item p', { y: 12 });
        gsap.set('.menu-items', { top: '0px', opacity: 1 });
        gsap.set(['#img-2, #img-3, #img-4'], { top: '150%' });

        isOpen = !isOpen;
      },
    });
  };
});
