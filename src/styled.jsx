import styled, {css} from "styled-components";

// flex 믹스인 변환
const flex = (direction = "row", justify = "flex-start", align = "stretch", gap = "0", wrap = "nowrap") => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
    flex-wrap: ${wrap};
`;

// font 믹스인 변환
const font = (size, weight = 400, color) => css`
    font-size: ${size};
    font-weight: ${weight};
    color: ${color};
`;

export {flex, font};
