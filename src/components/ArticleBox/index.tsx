import React from 'react';

import { RouteComponentProps } from 'react-router';
import { withRouter } from 'dva/router';
import { Card } from 'antd';

const { Meta } = Card;
export interface IArticleBoxProps extends RouteComponentProps {
  id?: string;
  title: string;
  desc: string;
  time?: string;
  bgcImg?: string;
}

const ArticleBox = (props: IArticleBoxProps) => {
  const { title, desc, history, id } = props;
  return (
    <Card
      hoverable
      style={{ height: 100, margin: '16px 0' }}
      onClick={() => {
        history.push(`/article/${id}`);
      }}
      //   cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta title={title} description={desc} />
    </Card>
  );
};

export default withRouter(ArticleBox);
