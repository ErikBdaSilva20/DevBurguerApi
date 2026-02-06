import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #020617;
  padding: 24px;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 420px;
  background: #0f172a;
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);

  @media (max-width: 480px) {
    padding: 24px;
  }
`;
export const StatusIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ color }) => color};

  .status-icon {
    font-size: 28px;
    color: #020617;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #e5e7eb;
  margin-bottom: 24px;
`;

export const DetailsBox = styled.div`
  background: #020617;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableLabel = styled.td`
  font-size: 13px;
  color: #94a3b8;
  text-align: left;
  padding: 4px 0;
`;

export const TableContent = styled.td`
  font-size: 13px;
  color: #e5e7eb;
  text-align: right;
  padding: 4px 0;
  word-break: break-all;
`;

export const Link = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #22c55e;
  text-decoration: none;
  font-weight: 500;
  margin-top: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonText = styled.a`
  display: block;
  margin-top: 24px;
  background: #5f5f5f;
  color: #ffffff;
  font-weight: 600;
  padding: 12px;
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.2s ease;

  text-decoration: none;
  font-weight: 500;
  margin-top: 8px;

  &:hover {
    background: #16a34a;
  }
`;
