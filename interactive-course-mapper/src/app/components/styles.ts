import styled from 'styled-components';

const PanelContent = styled.div`
    width: 100%;
    margin: 0rem;

`;
const TitlePadding = styled.div`
    margin: 0 0 1.5rem 0;

`;
const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2.5rem;

`;
const PageBreak = styled.hr`
    margine: 0 0 2.5rem 0;
    border: none;
    border-top: 1px solid #ccc;
`;

const LineBreak = styled.hr`
    margine: 0;
    border: none;
    border-top: 1px solid #ccc;
`;

const Paragraph = styled.p`   
    font-weight: 300;            
    margin-bottom: 1.75rem;
    margin-right: 6px; 
    font-size: 1.125rem;
    line-height: 1.75rem;      
    padding: 8px 6px 1px 6px;       

`;


const LandingPageStyle = styled.div`
    .new-calc-button{
        
    }
`;

export {PanelContent,TitlePadding,FlexContainer,LandingPageStyle,PageBreak,LineBreak,Paragraph}