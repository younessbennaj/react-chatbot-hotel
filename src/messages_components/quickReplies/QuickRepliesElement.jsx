import styled from 'styled-components';
import defaultTheme from '../../theme';

const QuickRepliesElement = styled.div`
    background: ${({ theme }) => theme.botBubbleColor};
    border: 0;
    border-radius: 22px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    color: ${({ theme }) => theme.botFontColor};
    display: inline-block;
    font-size: 14px;
    padding: 12px;
`;

QuickRepliesElement.defaultProps = {
    theme: defaultTheme
};

export default QuickRepliesElement;