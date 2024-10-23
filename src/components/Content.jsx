import styled from "styled-components";
import {flex, font} from "../styled";

const ContentContainer = styled.div`
    ${flex("column", undefined, "flex-start", "5px", undefined)}
    img {
        width: 300px;
        border-radius: 10px;
        margin-bottom: 3px;
        min-height: 225px;
    }
    span {
        ${font("16px", undefined, "#d7fa00")}
        border: 1px solid $tag-color;
        padding: 4px 5px;
        border-radius: 3px;
    }
    div {
        ${font("18px", "600", "undefined")}
    }
    p {
        ${font("12px", undefined, "undefined", "rgb(160, 160, 160);")}
    }
`;

export default function Content({content}) {
    return (
        <ContentContainer>
            <img
                src={content.img}
                alt={content.title}
            />
            <span>모집중</span>
            <div>{content.title}</div>
            <p>{content.subtitle}</p>
        </ContentContainer>
    );
}
