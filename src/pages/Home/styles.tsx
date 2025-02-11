import styled from 'styled-components';

export const HomeContainer = styled.footer`
  background-color: #2E7D32;
  color: white;
  padding: 10px 10px;
`;


export const AboutUsSection = styled.div`
  display: block;
  text-align: center;
  padding: 20px;
  gap: 20px;
  border: 2px solid #4CAF50;
  border-radius: 10px; 
  margin-bottom: 20px;
  width: 80%;
  margin-top: 30px;
  margin-left: auto;  
  margin-right: auto; 
`;

export const AboutUsItem = styled.div`
  margin-bottom: 25px; 
`;

export const InformativeSection = styled.div`
  display: flex;
  justify-content: center; 
  gap: 5%;
  width: 100%;
  margin-top: 40px;
`;

export const LeftSideSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  text-align: center;
  width: 45%;
  min-height: 300px; 
  border: 2px solid #4CAF50; 
  padding: 40px; 
  border-radius: 10px; 
`;

export const RightSideSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  width: 45%; 
  min-height: 300px; 
  border: 2px solid #4CAF50; 
  padding: 40px; 
  border-radius: 10px; 
`;

export const LeftSideItem = styled.div`
  width: 100%; 
  display: flex;
  justify-content: center; 
  align-items: center;
  margin-bottom: 20px;
`;

export const RightSideItem = styled.div`
  width: 100%; 
  display: flex;
  justify-content: center; 
  align-items: center;
  margin-bottom: 20px;
`;

export const RightSideList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0; 
`;
