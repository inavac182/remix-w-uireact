import { ThemeColor } from '@uireact/foundation';
import { UiView } from '@uireact/view';

import { CustomTheme } from './custom-theme';

type WrapperProps = {
    children?: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
    return (
        <UiView theme={CustomTheme} selectedTheme={ThemeColor.dark}>
            {children}
        </UiView>
    )
}