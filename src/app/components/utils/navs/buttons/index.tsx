import type * as T from '@/components/utils/navs/types';
import { OffCanvasNav } from '../../offcanvas';

const styles: T.LiStyle = {
  alignx: 'center',
  aligny: 'center'
};

const itemStyle: T.LinkStyle = {
  fontSize: 'xl',
  align: 'center',
  color: 'primary'
};

const navButtons: T.itens = [
  {
    id: 'nav-button-offCanvas',
    icon: { icon: <OffCanvasNav /> },
    style: styles,
    linkstyle: itemStyle
  }
];

export const navOffCanvas: T.navigation = {
  id: 'navOffCanvas',
  align: 'center',
  gap: '1rem',
  height: 'fit-content',
  itens: navButtons,
  breakpoints: [{ sizes: { minWidth: '769px' }, comands: 'display: none;' }]
};
