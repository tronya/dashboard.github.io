import { FC, useEffect, useState } from 'react';
import { StyledArrowCircleUpIcon } from './scrollToTop.styled';

const ScrollToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <StyledArrowCircleUpIcon
      onClick={scrollToTop}
      style={{
        display: isVisible ? 'flex' : 'none',
      }}
    />
  );
};

export default ScrollToTop;
