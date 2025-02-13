import styled from "styled-components"

export const StyledTitle1 = styled.h1`
     font-weight: 900;
     color: var(--color-gray-100);
     font-size: 3.2rem;
     font-family: var(--Font-Primary);

     @media (max-width: 768px) {
          font-size: 2.5rem;
  }
`

export const StyledTitle2 = styled.h2`
     font-weight: 600;
     color: var(--color-gray-100);
     font-size: 2.8rem;
     font-family: var(--Font-Primary);
`


export const StyledHeadline = styled.p`
     font-weight: 500;
     color: var(--color-gray-200);
     font-size: 1.5rem;
     font-family: var(--Font-Primary);
`


export const StyledText1 = styled.p`
     font-weight: 400;
     color: var(--color-gray-200);
     font-size: 1.8rem;
     font-family: var(--Font-Primary);
`

export const StyledText2 = styled.p`
     font-weight: 400;
     color: var(--color-gray-200);
     font-size: 1.6rem;
     font-family: var(--Font-Primary);
`

export const StyledText3 = styled.p`
     font-weight: 400;
     color: var(--color-gray-300);
     font-size: 1.4rem;
     font-family: var(--Font-Primary);
`

export const StyledInfoText = styled.p`
     font-weight: 400;
     color: var(--color-tertiary);
     width: 9rem;
     height: 2rem;
     text-align: center;
     background-color: var(--color-gray-400);
     font-size: 1.6rem;
     font-family: var(--Font-Primary);
     display: flex;
     justify-content: center;
     align-items: center;
`

export const StyledPhoneText = styled.p`
     display: flex;
     align-items: center;
     justify-content: center;
     font-weight: 400;
     color: var(--color-secondary-50);
     background-color: var(--color-secondary);
     width: 15rem;
     height: 2.5rem;
     border-radius: 1.5rem;
     font-size: 1.6rem;
     font-family: var(--Font-Primary);
`

export const StyledEmailText = styled.p`
     display: flex;
     align-items: center;
     justify-content: center;
     font-weight: 400;
     color: var(--color-secondary-50);
     background-color: var(--color-instagram);
     width: 24rem;
     height: 2.5rem;
     border-radius: 1.5rem;
     font-size: 1.6rem;
     font-family: var(--Font-Primary);
`