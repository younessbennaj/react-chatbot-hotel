import styled from 'styled-components';
import defaultTheme from '../theme';

const Header = styled.div`
    background: ${({ theme }) => theme.headerBgColor};
    color: ${({ theme }) => theme.headerFontColor};
    height: 56px;
`;

Header.defaultProps = {
    theme: defaultTheme
};

export default Header;