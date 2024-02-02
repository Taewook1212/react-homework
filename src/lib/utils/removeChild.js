import { getNode } from '/src/lib';

export function removeChild(node) {
  const target = getNode(node);
  while (target.firstChild) {
    target.removeChild(target.firstChild);
  }
}
