import styled from 'styled-components';
import { TProperties } from './types/TBuilder';

const StyledProperties = styled.div`
    padding: 10px;
    width: 250px;
    height: 100%;
    background-color: var(--white);

    h2 {
        margin-left: 0.6em;
        font-size: 0.8rem;
        font-weight: normal;
        color: var(--grey-600);
    }
`;

const Properties: React.FC<TProperties> = (props: TProperties) => {
    return (
        <StyledProperties>
            <h2> Element Properties</h2>
        </StyledProperties>
    );
};

export default Properties;
