import { themes } from "../theme";

export const importCSS = async (name: string) => {
  return await import(`@/common/styles/${name}.css`);
}


export const getCurrentTypeContent = (type: string): string => {
  for (let theme of themes) {
    if(type === theme.type) {
      return theme.content;
    }
  }
  return '';
}