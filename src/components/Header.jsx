import styled from 'styled-components';
import defaultTheme from '../theme';

const Header = styled.div`
    background: ${({ theme }) => theme.headerBgColor};
    color: ${({ theme }) => theme.headerFontColor};
    height: 56px;
    border-radius: 10px 10px 0px 0px;
`;

Header.defaultProps = {
    theme: defaultTheme
};

export default Header;