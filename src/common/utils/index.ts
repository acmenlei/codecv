import { ElLoading } from "element-plus";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { themes } from "@/templates/config";
import 'element-plus/es/components/loading/style/css';
import { errorMessage, successMessage } from "../message";

export async function importCSS(name: string) {
  const res = await import(`../../templates/${name}/style.scss`);
  return res.default;
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
  'h1': { max: 30, min: -15, top: 0, tag: '', optimal: 0 },
  'h2': { max: 30, min: -15, top: 0, tag: '', optimal: 0 },
  'h3': { max: 20, min: -15, top: 0, tag: '', optimal: 0 },
  'h4': { max: 20, min: -15, top: 0, tag: '', optimal: 0 },
  'h5': { max: 20, min: -15, top: 0, tag: '', optimal: 0 },
  'h6': { max: 20, min: -15, top: 0, tag: '', optimal: 0 },
  'li': { max: 10, min: -15, top: 0, tag: '', optimal: 0 },
  'p': { max: 10, min: -15, top: 0, tag: '', optimal: 0 },
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

export function createDIV() {
  return document.createElement('div');
}

export function query(attr: string) {
  return document.head.querySelector(`style[${attr}]`);
}

export function removeHeadStyle(attr: string) {
  query(attr)?.remove();
}

export function getPdf(title: string, html: HTMLElement) {
  const { showLoading, closeLoading } = useLoading();
  showLoading('正在导出PDF 请耐心等待...');
  html2canvas(html, {
    allowTaint: false,
    logging: false,
    useCORS: true,
    scale: 4
  }).then((canvas) => {
    const pdf = new jsPDF('p', 'mm', 'a4') // A4纸，纵向
    const ctx = canvas.getContext('2d')
    const a4w = 210
    const a4h = 297 // A4大小，210mm x 297mm，四边各保留10mm的边距，显示区域190x277
    const imgHeight = Math.floor((a4h * canvas.width) / a4w) // 按A4显示比例换算一页图像的像素高度（必须向下取整，否则高度溢出）
    let renderedHeight = 0
    while (renderedHeight < canvas.height) {
      const page = document.createElement('canvas')
      page.width = canvas.width
      page.height = Math.min(imgHeight, canvas.height - renderedHeight)
      // 用getImageData剪裁指定区域，并画到前面创建的canvas对象中
      page.getContext('2d')?.putImageData(ctx?.getImageData(0, renderedHeight, canvas.width, Math.min(imgHeight, canvas.height - renderedHeight)) as ImageData, 0, 0)
      pdf.addImage(page.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 0, a4w, Math.min(a4h, (a4w * page.height) / page.width)) // 添加图像到页面，保留0mm边距

      renderedHeight += imgHeight
      if (canvas.height - renderedHeight > 1) {
        pdf.addPage() // 如果后面还有内容，添加一个空页
      }
    }
    // 保存文件
    pdf.save(`${title}.pdf`)
    successMessage('PDF导出成功');
  })
    .catch(error => {
      errorMessage('导出失败, ' + error)
    })
    .finally(closeLoading)
}

export function useLoading() {
  let loading: any = null;
  function showLoading(text: string) {
    loading = ElLoading.service({
      lock: true,
      text,
      background: 'rgba(0, 0, 0, 0.7)',
    })
  }
  function closeLoading() {
    loading && loading.close()
  }
  return {
    showLoading,
    closeLoading
  }
}