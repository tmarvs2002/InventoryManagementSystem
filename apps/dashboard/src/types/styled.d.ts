import Theme from '@core/theme';
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {};
}