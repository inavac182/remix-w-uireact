import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { useViewport } from '@uireact/foundation';

import { GradientBg, Waves, HeroContent } from './hero-components';

import styles from './hero-components/hero.module.scss';
import icon from '../images/sunglasses_cat.gif';
import remixIcon from '../images/remix.svg';

export const Hero = () => {
    const { isSmall } = useViewport();

    return (
        <>
            <GradientBg />
            <div className={styles.hero}>
                <UiFlexGrid direction={isSmall ? 'column' : 'row'} className={styles.heroGrid}>
                    <UiFlexGridItem>
                        <div className={styles.heroTitle}>
                            <HeroContent />                            
                        </div>
                    </UiFlexGridItem>
                    <UiFlexGridItem grow={isSmall ? 1 : 2} order={isSmall ? 1 : 2}>
                        <UiFlexGrid className={styles.heroWavesContent} direction={isSmall ? 'column' : 'row'}>
                            <Waves />
                            <UiFlexGridItem grow={1} align='center'>
                                <div className={styles.heroIcons}>
                                    <img src={remixIcon} width="200" height="100" alt="@UiReact icon" />
                                    <img src={icon} width="100" height="100" alt="@UiReact icon" />
                                </div>
                            </UiFlexGridItem>
                        </UiFlexGrid>
                    </UiFlexGridItem>
                </UiFlexGrid>
            </div>
        </>
    );
};
