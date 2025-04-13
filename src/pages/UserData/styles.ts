import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const UserDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 80px 40px;
  background: linear-gradient(150deg, #f1042c77, #03e9fa6c, #d208e450);   
  min-height: 100vh;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const Title = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #f54c51;
  text-align: center;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    color: #e4004d; 
  }
`;

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  gap: 10px;
  padding: 40px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 700px;
  min-height: 300px;
  max-height: fit-content;
  background-color: white;
  color: black;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
`;

export const UserName = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #7a0361;
`;

export const UserInfo = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #141112;
  `;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 2px solid #ddd; 
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: #fff3f3;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(255, 0, 0, 0.1);
  max-width: 500px;
  margin: 40px auto;
  text-align: center;
`;

export const ErrorImage = styled.img`
  width: 200px;
  margin-bottom: 24px;
`;

export const ErrorTitle = styled.h2`
  font-size: 24px;
  color: #b00020;
  margin-bottom: 12px;
`;

export const LinkButton = styled(Link)`
  display: inline-block;
  margin-top: 12px;
  background-color: #b00020;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d3002f;
  }

  &:not(:last-child) {
    margin-right: 12px;
  }
`;