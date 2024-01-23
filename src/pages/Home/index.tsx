import React, { useEffect } from 'react';
import { Layout, Space } from 'antd';
import Nav from '../../components/Nav';
import { connect } from 'dva';
import ArticleBox from '../../components/ArticleBox';
import styles from './index.less';

const mock = [
  {
    id: '1',
    title: 'Hello',
    desc: 'This is123123'
  },
  {
    id: '2',
    title: 'Hello',
    desc: 'This is123123'
  },
  {
    id: '3',
    title: 'Hello',
    desc: 'This is123123'
  },
  {
    id: '4',
    title: 'Hello',
    desc: 'This is123123'
  },
  {
    id: '5',
    title: 'Hello',
    desc: 'This is123123'
  },
  {
    id: '6',
    title: 'Hello',
    desc: 'This is123123'
  }
];

const mapStateToProps = (state: unknown) => {
  console.log('state', state);
  return {
    state
  };
};

const Home = connect(mapStateToProps)((props: any) => {
  console.log('props', props);
  useEffect(() => {
    props.dispatch({
      type: 'list/add',
      payload: { a: 111, b: 222, c: 333 }
    });
  }, []);

  return (
    <>
      <Nav />
      {/* <div className={styles.bgc}>
        背景图
      </div> */}
      <div className={styles['content']}>
        <div className={styles['left-content']}>
          {mock?.map(item => <ArticleBox id={item.id} title={item.title} desc={item.desc} />)}
        </div>
        <div className={styles['right-content']}>右边功能卡片</div>
      </div>
    </>
  );
});

export default Home;

// @connect(mapStateToProps);
