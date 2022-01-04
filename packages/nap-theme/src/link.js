import React from "react";
import { connect, css, Global } from "frontity";


const Link = ({href, actions, children}) => {
    return (
        <div>
            <Global
        styles={css`
          html {
            font-family: Montserrat;
          }
        `}
      />
            <a css={css`margin-right: 2rem; text-decoration: none; color: black`}
                href={href}
                onClick={event => {
                    event.preventDefault();
                    actions.router.set(href);
                }}
                >
                    {children}
                </a>
        </div>
        
    );
};

export default connect (Link);