import { UiCard } from '@uireact/card';
import { UiFlexGrid, UiFlexGridItem } from '@uireact/flex';
import { UiSpacing } from '@uireact/foundation';
import { UiReactViewRotating, UiReactTapScaleDown, UiReactHoverElevate } from '@uireact/framer-animations';
import { UiIcon } from '@uireact/icons';
import { UiText, UiHeading, UiButtonLink } from '@uireact/text';

import styles from './hero.module.scss';

export const HeroContent = () => {
    return (
        <>
            <UiFlexGrid gap='four' alignItems='center'>
                <UiFlexGridItem grow={1}>
                    <h1 className={styles.heroContentTitle}>Ready to launch!</h1>
                </UiFlexGridItem>
                <UiIcon icon="SettingsBig" size='xlarge' motion={UiReactViewRotating} category='tertiary' />
            </UiFlexGrid>
            <UiSpacing padding={{ block: 'five' }}>
                <UiText size='small'>
                    This is a working project powered by <UiText fontStyle='bold' inline>Remix</UiText>, 
                    <UiText fontStyle='bold' inline> Styled-components</UiText> completed configured and 
                    <UiText fontStyle='bold' inline> @UiReact</UiText> wrapping completely done.
                </UiText>
            </UiSpacing>
            <UiFlexGrid gap='seven' direction='column'>
                <UiFlexGrid gap='five' direction='column'>
                    <UiText fontStyle='bold'>Docs:</UiText>
                    <a href="https://remix.run" target='_blank' rel="noreferrer">
                        <UiCard motion={{ ...UiReactTapScaleDown, ...UiReactHoverElevate }}>
                            <UiFlexGrid justifyContent='space-between' alignItems='center'>
                                <UiHeading>Remix</UiHeading>
                                <UiIcon icon="AngleCircleRight" />
                            </UiFlexGrid>
                        </UiCard>
                    </a>
                    <a href="https://uireact.io" target='_blank' rel="noreferrer">
                        <UiCard motion={{ ...UiReactTapScaleDown, ...UiReactHoverElevate }}>
                            <UiFlexGrid justifyContent='space-between' alignItems='center'>
                                <UiHeading>@UiReact</UiHeading>
                                <UiIcon icon="AngleCircleRight" />
                            </UiFlexGrid>
                        </UiCard>
                    </a>
                    <a href="https://vercel.com/guides/deploying-remix-with-vercel" target='_blank' rel="noreferrer">
                        <UiCard motion={{ ...UiReactTapScaleDown, ...UiReactHoverElevate }}>
                            <UiFlexGrid justifyContent='space-between' alignItems='center'>
                                <UiHeading>Deploy to Vercel </UiHeading>
                                <UiIcon icon="AngleCircleRight" />
                            </UiFlexGrid>
                        </UiCard>
                    </a>
                </UiFlexGrid>
                <UiFlexGrid gap='five' direction='column'>
                    <UiText fontStyle='bold'>@UiReact useful links:</UiText>
                    <UiButtonLink padding={{block: 'four'}}>
                        <a href="https://uireact.io/create-theme" target='_blank' rel="noreferrer">
                            <UiFlexGrid gap='four'>
                                <UiIcon icon='Layers' />
                                Create your theme
                            </UiFlexGrid>
                        </a>
                    </UiButtonLink>
                    <UiButtonLink padding={{block: 'four'}}>
                        <a href="https://github.com/inavac182/uireact/discussions" target='_blank' rel="noreferrer">
                            <UiFlexGrid gap='four'>
                                <UiIcon icon='Question' />
                                Questions
                            </UiFlexGrid>
                        </a>
                    </UiButtonLink>
                </UiFlexGrid>
            </UiFlexGrid>
        </>
    )
};
