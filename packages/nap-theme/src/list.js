import React from "react";
import { connect } from "frontity";

const List = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <div>
      {data.items.map(({ id }) => {
        const post = state.source.post[id];
        return (
          <Link key={id} href={post.link}>
            {post.title.rendered}
          </Link>
        );
      })}
    </div>
  );
};

export default List