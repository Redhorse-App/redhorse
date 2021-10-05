import { RouteProps } from 'react-router-dom';
import Diff from 'renderer/components/diff';
import JsonFormatter from 'renderer/components/jsonFormatter';

const routes: readonly (Pick<RouteProps, 'path' | 'exact' | 'component'> & {
  label: string;
})[] = [
  {
    path: '/json',
    label: 'JSON',
    component: JsonFormatter,
  },
  {
    path: '/diff',
    label: 'Diff',
    component: Diff,
  },
];

export default routes;
