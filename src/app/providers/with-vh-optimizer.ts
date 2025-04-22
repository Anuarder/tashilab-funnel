import { vhOptimizer } from '~shared/vh-optimizer';
import '~shared/vh-optimizer/vh.css';

export function withVhOptimizer() {
  vhOptimizer.init();
}
