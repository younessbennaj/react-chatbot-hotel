import styled from 'styled-components';
import defaultTheme from '../theme';

const HeaderTitle = styled.h2`
    font-size: ${({ theme }) => theme.headerFontSize};
`;

HeaderTitle.defaultProps = {
    theme: defaultTheme
};

export default HeaderTitle;