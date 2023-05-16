import * as layoutTypes from '@/types/layouts';
import { contentStylesProps } from '../types/types';

export interface contentSectionProps extends contentStylesProps {
  direction: layoutTypes.direction;
  children?: layoutTypes.children;
}
