import styled from 'styled-components';

type Styles = { $styles?: string };
type LabelPos = { labelPos?: 'top' | 'left' };

export const StyledInputContainer = styled.div<Styles & LabelPos>``;
