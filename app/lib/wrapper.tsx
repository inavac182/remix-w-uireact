import { DefaultTheme, ThemeColor } from '@uireact/foundation';
import { UiView } from '@uireact/view';

type WrapperProps = {
    children?: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
    return (
        <UiView theme={DefaultTheme} selectedTheme={ThemeColor.dark}>
            {children}
        </UiView>
    )
}