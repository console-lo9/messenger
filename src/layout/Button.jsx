import styled, { css } from 'styled-components';
import { darken } from 'polished';

const Button = ({ children, id, color, size, ...rest }) => {
    return (
        <StyledButton id={id} color={color} size={size} {...rest}>
            {children}
        </StyledButton>
    );
};

const sizes = {
    medium: {
        height: '2.25rem',
        width: '2.25rem',
        fontSize: '1rem',
    },
    small: {
        height: '1.75rem',
        width: '1.75rem',
        fontSize: '1rem',
    },
};
const sizeStyles = css`
    ${(props) => css`
        height: ${sizes[props.size].height};
        width: ${sizes[props.size].width};
        font-size: ${sizes[props.size].fontSize};
    `}
`;
const colorStyles = css`
    ${(props) => {
        const selected = props.color;
        return css`
            background: ${selected};
            &:hover {
                background: ${darken(0.1, selected)};
            }
            &:active {
                background: ${darken(0.1, selected)};
            }
            ${(props) =>
                props.outline &&
                css`
                    color: ${selected};
                    background: none;
                    border: 1px solid ${selected};
                    &:hover {
                        background: ${selected};
                        color: white;
                    }
                    &:active {
                        background: ${darken(0.1, selected)};
                    }
                `}
        `;
    }}
`;
const StyledButton = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    padding-left: 0.25rem;
    padding-right: 0.25rem;

    /* 크기 */
    ${sizeStyles}
    ${colorStyles}

    & + & {
        margin-left: 0.5rem;
    }
`;
Button.defaultProps = {
    color: '#ffffff',
    size: 'small',
};

export default Button;
