import React, { useState, useEffect, ReactNode } from "react";
import style, { css, keyframes } from "styled-components";
// import { render } from "react-dom";

// import "./styles.css";
type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const inAnimation = keyframes`
  0% {
    transform: scale(0.1);
    opacity: 0;
  }

  60% {
    transform: scale(1.2);
    opacity: 1;
  }

  100% {
    transform: scale(1);
  }

`;

const outAnimation = keyframes` 
  20% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

const mountAnimation = css`
  animation: ${inAnimation} 500ms forwards 1 ease-in;
`;
const unMountAnimation = css`
  animation: ${outAnimation} 500ms forwards 1 ease-in;
`;

const AnimationContainer = style.div`
  .fade-in {
    ${mountAnimation}
  }

  .fade-out {
    ${unMountAnimation}
  }
`;

function useDelayUnmount(isMounted: boolean, delayTime: number) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId: number;
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);
  return shouldRender;
}

export const Parent: React.FC = (isMounted: boolean, { children }: Props) => {
  // const [isMounted, setIsMounted] = useState(true);
  // const [isMounted, setIsMounted] = useState(false);
  const shouldRenderChild = useDelayUnmount(isMounted, 500);

  // const handleToggleClicked = () => {
  //   setIsMounted(!isMounted);
  // };
  console.log(isMounted);
  return (
    <main>
      <AnimationContainer>
        {shouldRenderChild && (
          <div className={isMounted ? "fade-in" : "fade-out"}>{children}</div>
        )}
      </AnimationContainer>
    </main>
  );
};
