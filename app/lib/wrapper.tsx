import { ThemeColor } from '@uireact/foundation';
import { UiView } from '@uireact/view';

type WrapperProps = {
    children?: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => (
    <UiView selectedTheme={ThemeColor.dark}>
        {children}
    </UiView>
);
