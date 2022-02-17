import { FC, useEffect, useState } from 'react';
import { Collapse } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';
import {
  MirroredFadeInBlock,
  SplashScreenText,
  SplashScreenWrapper,
} from './SplashScreen.styled';
import { setSplashScreenToLocalStorage } from './SplashScreen.model';
import { useRouter } from 'next/router';

const splashScreenTexts: string[] = ['Where', 'I', 'Am', '???'];

export const SplashScreen: FC = () => {
  const [activeTexts, setActiveTexts] = useState<string[]>(['...']);
  const router = useRouter();

  useEffect(() => {
    itemActive(0);
  }, []);

  const itemActive = (index: number) => {
    if (index === splashScreenTexts.length) {
      setSplashScreenToLocalStorage(true);
      setTimeout(() => {
        router.reload();
      }, 2000);
    }
    setTimeout(() => {
      setActiveTexts([...activeTexts, splashScreenTexts[index]]);
    }, 800);
  };

  return (
    <SplashScreenWrapper>
      <TransitionGroup>
        {activeTexts.map((item: string, index: number) => (
          <Collapse
            key={item}
            orientation="horizontal"
            in={true}
            onEnter={(e) => itemActive(index)}
          >
            <SplashScreenText>{item}</SplashScreenText>
            <MirroredFadeInBlock>{item}</MirroredFadeInBlock>
          </Collapse>
        ))}
      </TransitionGroup>
    </SplashScreenWrapper>
  );
};
