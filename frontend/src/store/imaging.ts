import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import type { VolumeData, ROIResult, WindowPreset } from '@/types'

export const useImagingStore = defineStore('imaging', () => {
  const loading = ref(false)
  const volumeData = ref<VolumeData | null>(null)
  const preset = ref('brain')
  const windowVal = ref(80)
  const levelVal = ref(40)
  const roiResults = ref<ROIResult[]>([])
  const mprSlice = ref({ axial: 32, coronal: 32, sagittal: 32 })

  async function loadVolume() {
    loading.value = true
    try {
      const { data } = await axios.post('/api/volume', {
        preset: preset.value, width: 64, height: 64, depth: 64
      })
      volumeData.value = data
      mprSlice.value = { axial: 32, coronal: 32, sagittal: 32 }
      // 新影像载入后清空上一影像的测量结果，统计面板不再展示旧均值/体素数
      roiResults.value = []
    } finally { loading.value = false }
  }

  async function analyzeROI(rois: any[]) {
    loading.value = true
    try {
      const { data } = await axios.post('/api/roi', { volume: volumeData.value?.volume, rois })
      // 以本次提交的全部标记为准：同一标记(按标签)重测只保留最新一条，不追加旧结果
      const latestByLabel = new Map<string, ROIResult>()
      for (const r of data.rois as ROIResult[]) latestByLabel.set(r.label, r)
      roiResults.value = [...latestByLabel.values()]
    } finally { loading.value = false }
  }

  function applyWindow(w: number, l: number) { windowVal.value = w; levelVal.value = l }

  return { loading, volumeData, preset, windowVal, levelVal, roiResults, mprSlice,
    loadVolume, analyzeROI, applyWindow }
})