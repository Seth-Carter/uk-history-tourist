import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const currentYear = new Date().getFullYear()

const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;

  div.flex-row {
    display: flex;
    flex-direction: row;
    width: 100%
    flex-wrap: wrap;
    justify-content: center;
  }

  div.flex-column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    margin-right: 2rem;
  }
  
  a {
    text-decoration: none;
    color: inherit;
    padding: 0 1rem .5rem 0;
    justify-content: center;
  }

  p.copyright {
    text-align: center;
  }

  h5 {
    text-align: center;
  }
`

const Footer = () => (
  <StyledFooter>
    <div className="flex-row">
      <div className="flex-column">
        <h5>About Us</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore dolore magna aliqua.
        </p>
      </div>
      <div className="flex-column">
        <h5>Social Media</h5>
        <div className="flex-row">
          <Link className="nav-link" activeClassName="active" to="#">
            <i className="fab fa-instagram fa-2x"></i>
          </Link>
          <Link className="nav-link" activeClassName="active" to="#">
            <i className="fab fa-facebook-square fa-2x"></i>
          </Link>
        </div>
      </div>
    </div>
    <p className="copyright">COPYRIGHT © {currentYear} CHRISTINA CARTER</p>
  </StyledFooter>
)
export default Footer
