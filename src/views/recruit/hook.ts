export function useRecruitTab() {
  const tabs = ['校园招聘', '社会招聘', '事业单位', '国企']
  function tabClick(idx: number) {
    console.log(idx)
  }
  return {
    tabs,
    tabClick
  }
}
