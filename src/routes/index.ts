import React, { ReactNode } from 'react';
import { Home, Archive, Article } from '../pages';
export interface IRouter {
  title: string;
  path: string;
  key: string;
  show: boolean;
  exact?: boolean;
  icon?: ReactNode;
  component?: any;
  children?: IRouter[];
}
const Routes: IRouter[] = [
  {
    title: '主页',
    path: '/',
    key: 'home',
    component: Home,
    show: true
  },
  {
    title: '归档',
    path: '/archive',
    key: 'archive',
    component: Archive,
    show: true
  },
  {
    title: '文章详情',
    path: '/article/:id',
    key: 'article/:id',
    component: Article,
    show: false
  }
];

export default Routes;
