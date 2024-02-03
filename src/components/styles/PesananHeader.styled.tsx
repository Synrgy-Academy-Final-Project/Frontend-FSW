import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  width: 1440px;
  height: 129px;
  padding: 32px 48px;
  justify-content: space-between;
  align-items: center;
`;

export const Navbar = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  list-style-type: none;
  margin-bottom: unset;
`;

export const NavList = styled.li`
  display: flex;
  height: 40px;
  padding: 20px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const NavBtn = styled.a`
  color: var(--Neutral-09, #1c1c1e);
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SemiBoldBlue = styled.h1`
  color: var(--Primary-Blue, #3e7bfa);
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  width: 49px;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  margin-bottom: unset;
`;
