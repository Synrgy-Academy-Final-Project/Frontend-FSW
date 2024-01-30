import styled from 'styled-components';
import { useCurrentPage } from './CurrentPageContext.tsx';


const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px; 
  background-color: #ffffff;
  //box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1); // Optional shadow for depth
`;

const Greeting = styled.h1`
  font-size: 24px; 
  margin: 0; 
  color: #333; 
`;

const ProfileIcon = styled.img`
  width: 50px; 
  height: 50px; 
  border-radius: 50%;
`;


const Navbar = () => {
    const { currentPage } = useCurrentPage();
    return (
        <NavbarContainer>
            <Greeting>{currentPage}</Greeting>
            <ProfileIcon src="https://i.ibb.co/Fhk8RfG/Switch.png" alt="Profile" />
        </NavbarContainer>
    );
};

export default Navbar;
