import React, { useState } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { NavLink, Link, matchPath, RouteComponentProps, withRouter, Router } from 'dva/router';
import type { MenuProps } from 'antd';
import Routes, { IRouter } from '../../routes/index';
import { useEffect } from 'react';
import styles from './index.less';

const { SubMenu } = Menu;

const Nav = (props: any) => {
  const [current, setCurrent] = useState('home');
  const heightMenu = (leftRoutes: IRouter[]) => {
    let path = props.location.pathname;
    for (let r of leftRoutes) {
      let match = matchPath(path, { path: r.path });
      if (match) {
        if (match.isExact) {
          setCurrent(r.key);
        }
      }
      if (r.children) {
        heightMenu(r.children);
      }
    }
  };

  useEffect(() => {
    heightMenu(Routes);
  }, [props.location.pathname]);

  const generateMenu = (routerList?: IRouter[]) => {
    const filterList = routerList?.filter((item) => item.show);
    return (
      <>
        {filterList?.map((r) => {
          if (r.children) {
            return (
              <SubMenu key={r.key} title={r.title}>
                {generateMenu(r.children)}
              </SubMenu>
            );
          }
          return (
            <Menu.Item key={r.key}>
              <NavLink to={r.path}>{r.title}</NavLink>
            </Menu.Item>
          );
        })}
      </>
    );
  };

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className={styles['nav-box']}>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
        {generateMenu(Routes)}
      </Menu>
    </div>
  );
};

export default withRouter(Nav);
