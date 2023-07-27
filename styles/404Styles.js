import Link from "next/link";
import styled from "styled-components";
export const NotFound_Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
export const NotFound_h1 = styled.h1`
  font-size: 120px;
  margin: 0;
`;
export const NotFound_p = styled.p`
  font-size: 50px;
`;
export const NotFound_Link = styled(Link)`
  color: #fff;
  border: 4px solid #fff;
  padding: 5px 15px;
  border-radius: 10px;
`;
