import styled from 'styled-components'
const Wrapper =styled.div`
padding:5 px;
border:${(props)=>props.variant === 'Outline' ? 'solid 1px red':'solid 1 px'};

color:red;
h1 {
  color:blue;
}
h3{
color :aquamarine
}
`
export {Wrapper};
export const FancyButton =styled(Wrapper)`
background-image:linear-gradient( to right ,red 100%);
border:solid 1px blue
`;