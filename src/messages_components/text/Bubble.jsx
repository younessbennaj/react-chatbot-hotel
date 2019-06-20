import styled from 'styled-components';

const Bubble = styled.div`
    border-radius: ${props => {
        const { user } = props;

        return user === 'User' ? '18px 18px 0px 18px' : '18px 18px 18px 0px';
    }}
    font-size: 14px;
`;

export default Bubble;