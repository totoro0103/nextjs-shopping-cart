import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Link from 'next/link';
// import { fetchUser } from '../../modules/User/actions';

const StyledNavbar = styled.div`
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;

  a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  a:hover {
    background: #ddd;
    color: black;
  }
`;

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.authentication);
  // const dispatch = useDispatch();

  useEffect(() => {
    const hasUserData = Object.prototype.hasOwnProperty.call(user, 'name');
    if (!hasUserData) {
      // dispatch(fetchUser(token));
    }
  }, []);

  return (
    <StyledNavbar className="navbar">
      <Link href="/"><a>Home</a></Link>
      <Link href="/films"><a>Ghibli Films</a></Link>
      {!!token && <a>{user.name}</a>}
    </StyledNavbar>
  );
};

export default Navbar;
