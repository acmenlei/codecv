import { themes } from "../theme";

export const importCSS = async (name: string) => {
  return await import(`@/common/styles/${name}.css`);
}

export const getCurrentTypeContent = (type: string): string => {
  for (let theme of themes) {
    if (type === theme.type) {
      return theme.content;
    }
  }
  return '';
}

// 计算优先级 以及 处理优先级高的数据
export const optimalizing = {
  'h1': { max: 30, min: -10, top: 0, tag: '', optimal: 0 },
  'h2': { max: 20, min: -10, top: 0, tag: '', optimal: 0 },
  'h3': { max: 20, min: -10, top: 0, tag: '', optimal: 0 },
  'h4': { max: 20, min: -10, top: 0, tag: '', optimal: 0 },
  'h5': { max: 20, min: -10, top: 0, tag: '', optimal: 0 },
  'h6': { max: 20, min: -10, top: 0, tag: '', optimal: 0 },
  'li': { max: 10, min: -10, top: 0, tag: '', optimal: 0 },
  'p': { max: 10, min: -10, top: 0, tag: '', optimal: 0 }
}
export type OptimalizingItem = typeof optimalizing['h1'];
export type Optimalizing = {
  'h1': OptimalizingItem;
  'h2': OptimalizingItem;
  'h3': OptimalizingItem;
  'h4': OptimalizingItem;
  'h5': OptimalizingItem;
  'h6': OptimalizingItem;
  'li': OptimalizingItem;
  'p': OptimalizingItem;
}
const defaultCmp = (x: OptimalizingItem, y: OptimalizingItem) => x.optimal > y.optimal; // 默认是最大堆
const swap = (arr: OptimalizingItem[], i: number, j: number) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
export class Heap {
  // 默认是最大堆
  container: OptimalizingItem[] = [];
  cmp = defaultCmp;
  constructor(cmp: (x: OptimalizingItem, y: OptimalizingItem) => boolean) {
    this.cmp = cmp;
  }
  push(data: OptimalizingItem) {
    const { container, cmp } = this;
    container.push(data);
    let index = container.length - 1;
    while (index) {
      let parent = Math.floor((index - 1) / 2);
      if (!cmp(container[index], container[parent])) {
        return;
      }
      swap(container, index, parent);
      index = parent;
    }
  }
  pop() {
    const { container, cmp } = this;
    if (!container.length) {
      return null;
    }
    swap(container, 0, container.length - 1);
    const res = container.pop();
    const length = container.length;
    let index = 0, exchange = index * 2 + 1;
    while (exchange < length) {
      // 以最大堆的情况来说：如果有右节点，并且右节点的值大于左节点的值
      let right = index * 2 + 2;
      if (right < length && cmp(container[right], container[exchange])) {
        exchange = right;
      }
      if (!cmp(container[exchange], container[index])) {
        break;
      }
      swap(container, exchange, index);
      index = exchange;
      exchange = index * 2 + 1;
    }
    return res;
  }

  top() {
    if (this.container.length) return this.container[0];
    return null;
  }

  isEmpty() {
    return this.container.length === 0;
  }
}

export function createStyle() {
  return document.createElement('style');
}

export function query(attr: string) {
  return document.head.querySelector(`style[${attr}]`);
}

export function removeHeadStyle(attr: string) {
  query(attr)?.remove();
}
