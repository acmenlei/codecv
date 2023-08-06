import { onActivated, ref } from 'vue'

export function useFile(emit: any) {
  const fileName = ref('')
  const exportFile = (type: string) => {
    document.title = fileName.value
    emit(`download-${type}` as any, fileName.value)
  }

  const importFile = (event: any) => {
    emit('import-md', event?.target?.files[0])
  }

  onActivated(() => (fileName.value = document.title))
  return {
    fileName,
    exportFile,
    importFile
  }
}
