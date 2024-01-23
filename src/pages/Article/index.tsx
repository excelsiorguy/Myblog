import React from 'react';
import Nav from '../../components/Nav';
import { withRouter } from 'dva/router';

const Article = withRouter((props: any) => {
  console.log('location', props.location);
  return (
    <div>
      <Nav />
      文章详情
      {props.location.pathname}
    </div>
  );
});

export default Article;
