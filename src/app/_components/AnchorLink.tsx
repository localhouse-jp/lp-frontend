import { AnchorHTMLAttributes, FC, MouseEvent } from 'react';

interface AnchorLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  offset?: number | (() => number);
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

const AnchorLink: FC<AnchorLinkProps> = ({ href, offset = 0, onClick, className, ...rest }) => {
  const smoothScroll = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    // Update URL without reloading the page
    if (history.pushState && href) {
      history.pushState({}, '', href);
      window.dispatchEvent(new Event('hashchange'));
    }

    const scrollToAnchor = () => {
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const scrollTargetY =
          targetElement.getBoundingClientRect().top + window.pageYOffset - (typeof offset === 'function' ? offset() : offset);
        animateScroll(window.pageYOffset, scrollTargetY, 500); // 500ms duration
      }
    };

    scrollToAnchor();

    if (onClick) {
      onClick(event);
    }
  };

  // Smooth scrolling animation using requestAnimationFrame
  const animateScroll = (startY: number, targetY: number, duration: number) => {
    const startTime = performance.now();

    const scrollStep = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      window.scrollTo(0, startY + (targetY - startY) * easeInOutQuad(progress));

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  // Ease-in-out function for smooth scrolling effect
  const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  return <a {...rest} href={href} onClick={smoothScroll} className={className} />;
};

export default AnchorLink;