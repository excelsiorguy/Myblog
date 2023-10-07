import React from 'react';
import { Card } from 'antd';
import { withRouter } from 'dva/router';

const { Meta } = Card;
export interface IArticleBox {
  id: string;
  title: string;
  desc: string;
  time?: string;
  bgcImg?: string;
  history?: any;
}

const ArticleBox: React.FC<IArticleBox> = ({ title, desc, history, id }) => {
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
