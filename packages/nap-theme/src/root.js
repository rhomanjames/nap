import React from "react";
import { connect, css, Global } from "frontity";
import Link from "./link";
import { styled } from "frontity";

const Root = ({state}) => {
    const data = state.source.get(state.router.link);

    return (
      <>
      <Global
        styles={css`
          html {
            font-family: Montserrat;
          }
        `}
      />
        <div css={css`display:flex;  justify-content: space-between; width: 100%; padding: 1rem`}>
            <p>North American Plastics</p>
            <nav css={css`display: flex; marginRight: 1rem`}>
            <Link href="/"> Home</Link>
            <Link href="/page2">About</Link>
            <Link href="/brands"> Brands</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/sales">Sales</Link>
                </nav>
    </div>
        <StyledNav>
            
        </StyledNav>
        
        <StyledDiv css={css`display: block; background:white; flex-direction: column`}>
    <div css={css`text-align: left; background-size: cover; background-url: 'https://as1.ftcdn.net/v2/jpg/03/13/83/88/1000_F_313838810_lp8gF9Y16N3URw9BbcUV6OdBiOVQ9A7k.jpg'`}>
        <h1 css={css` font-size: 5rem; margin-bottom: 10px`}>Great People.</h1>
        <h1 css={css`font-size: 5rem`}>Great Culture.</h1>
        <p css={css`font-size: 2rem`}>We're the number 1 plastics distributor in the country for a reason.</p>
    </div>
        <Button css={css`background-color: green; color: white; font-size: 1.5rem`}>About us</Button>
        </StyledDiv>


        <div  css={css`display: flex`}> 
        <div css={css`width: 50%`}>
            <h1>Embedded map
            </h1>
        </div>
            <StyledDiv2>
            <h1 css={css`font-size: 3rem;`}>About</h1>
            <p css={css`width: 100%; font-size: 2rem`}>Looking for wholesale plastic? With 16 brands in over 115 locations,  we've got what you need. Whether it’s graphics and signage, transportation or industrial, we're the one-stop-shop for your plastic needs.</p>
            <Button css={css`font-size: 1rem`} background="green">Learn more</Button>
        </StyledDiv2>
        </div>


       
        <div  css={css`display: flex`}> 
        <StyledDiv>
            <h1 css={css`font-size: 3rem;`}>Our Brands.</h1>
            <p css={css`width: 100%; font-size: 2rem`}>Our team stretches from coast to coast to ensure that all of our customers are treated with personalized care. Our expert team provides the most diverse product offering on the market, so we’re confident that we have what you need when you need it.  </p>
            <div css={css`display: flex`}><Button css={css`font-size: 1rem; background: black; color: white`} background="green">Our Brands</Button>
            <Button css={css`font-size: 1rem; margin-left: 1rem; background: black; color: white`} background="green">Testimonials</Button>
                </div>
        </StyledDiv>
        <div css={css`width: 50%`}>
        <img className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/images/brands.png`} 
     alt="Brand images"/>
        </div>
            
        </div>

         <div  css={css`display: flex`}> 
        <div css={css`width: 50%`}>
            <h1>Amy Career Image</h1>
        </div>
            <StyledDiv2>
            <h1 css={css`font-size: 3rem;`}>Careers</h1>
            <p css={css`width: 100%; font-size: 2rem`}>See what it’s Like to be a part of a winning team. Our commitment to your professional development ensures that you have a clear opportunity for growth within our company.  </p>
            <Button css={css`font-size: 1rem; background: white`} background="green">Learn more</Button>
        </StyledDiv2>
        </div>
        <main>
        {data.isArchive && <div>Es una lista</div>}
        {data.isPost && <div>Es un post</div>}
        {data.isPage && <div>Es una página</div>}
      </main>

        
      </>
    );
  };

  const Button = styled.button`
  background: ${props => props.color};
  border: none;
  border-radius: 3rem;
  height: fit-content;
  padding: 1rem
`;

  const StyledNav=styled.nav`
  text-align: center;
  background:pink;
  display:flex;
  justify: flex-end;
  display: 'inline-block';
  color:black;
  text-decoration:none

  `;
  const StyledDiv=styled.div`
  height: 70vh;
  width: 50%;
  text-align: center;
  background:white;
  justify: flex-end;
  display: 'inline-block';
  color:black;
  text-decoration:none;
  padding: 4rem;
  text-align: left;
  align-content: left;

  `;

  const StyledDiv2=styled.div`
  height: 70vh;
  width: 50%;
  text-align: left;
  background: green;
  align-items: center;
  padding-top: 10%;
  padding-left: 2rem;
  display: 'inline-block';
  color: white;
  text-decoration:none;

  `;

  const StyledHeader=styled.header`
  background:white;
  display:flex;
  justify-content:space-between;
  background: green
  `;

  export default connect(Root)