import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import type { VolumeData, ROIResult, WindowPreset } from '@/types'

interface ROIAnalysisInput {
  id: string
  label: string
  center: number[]
  radius: number
}

function resultKey(result: ROIResult) {
  return result.id ?? `${result.label}-${result.center.join(',')}-${result.radius}`
}

export const useImagingStore = defineStore('imaging', () => {
  const loading = ref(false)
  const volumeData = ref<VolumeData | null>(null)
  const preset = ref('brain')
  const windowVal = ref(80)
  const levelVal = ref(40)
  const roiResults = ref<ROIResult[]>([])
  const mprSlice = ref({ axial: 32, coronal: 32, sagittal: 32 })
  let latestVolumeRequestId = 0
  let latestRoiRequestId = 0

  async function loadVolume() {
    const requestId = ++latestVolumeRequestId
    loading.value = true
    try {
      const { data } = await axios.post('/api/volume', {
        preset: preset.value, width: 64, height: 64, depth: 64
      })
      if (requestId !== latestVolumeRequestId) return
      volumeData.value = data
      roiResults.value = []
      mprSlice.value = { axial: 32, coronal: 32, sagittal: 32 }
    } finally {
      if (requestId === latestVolumeRequestId) loading.value = false
    }
  }

  async function analyzeROI(rois: ROIAnalysisInput[]) {
    const volumeRequestId = latestVolumeRequestId
    const roiRequestId = ++latestRoiRequestId
    loading.value = true
    try {
      const { data } = await axios.post('/api/roi', { volume: volumeData.value?.volume, rois })
      if (roiRequestId !== latestRoiRequestId || volumeRequestId !== latestVolumeRequestId) return

      const latestResults = new Map(roiResults.value.map(result => [resultKey(result), result]))
      for (const result of data.rois as ROIResult[]) {
        latestResults.set(resultKey(result), result)
      }
      roiResults.value = Array.from(latestResults.values())
    } finally {
      if (roiRequestId === latestRoiRequestId && volumeRequestId === latestVolumeRequestId) {
        loading.value = false
      }
    }
  }

  function applyWindow(w: number, l: number) { windowVal.value = w; levelVal.value = l }

  return { loading, volumeData, preset, windowVal, levelVal, roiResults, mprSlice,
    loadVolume, analyzeROI, applyWindow }
})