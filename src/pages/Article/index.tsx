import React from 'react';

import { withRouter } from 'dva/router';

import Nav from '../../components/Nav';

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
