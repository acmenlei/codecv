export const importCSS = async (name: string) => {
  return await import(`@/common/styles/${name}.css`);
}