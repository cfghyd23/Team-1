import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";

const ServiceSection = () => {
  const { name, image } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">Services provided</p>

          <p>
          Rainbow Foundation India is an Indian organization in which the most marginalized and disadvantaged child is
           reached and cared for by organizations of disadvantaged people, with strong contributions of the state as well
            as local civil society in every city creating a movement for caring of the dispossessed for the dispossessed. It intends
             to create ‘social value’ by improving the living conditions and future opportunities of street children in India, one of the most destitute
              classes in the world. A rights based approach is followed to achieve this: every child has rights to a safe home, food
              , development, education, care and affection essentially what is clubbed as ‘comprehensive care'
          </p>
    
          <p className="hero-para">
          
          </p>
          
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src="./images/png.jpg" alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 1200;
    font-size: 5.6rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 60%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default ServiceSection;
