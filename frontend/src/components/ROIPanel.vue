<template>
  <div class="panel">
    <h4>📐 ROI感兴趣区域分析</h4>
    <el-button size="small" @click="addROI" style="margin-bottom:8px">+ 添加ROI</el-button>
    <div v-for="(roi,i) in rois" :key="i" class="roi-config">
      <div class="roi-row">
        <span>ROI #{{ i+1 }}</span>
        <el-input v-model="roi.label" size="small" placeholder="标签" style="width:80px"/>
        <el-input-number v-model="roi.center[0]" size="small" :min="0" :max="63" style="width:65px" controls-position="right"/>
        <el-input-number v-model="roi.center[1]" size="small" :min="0" :max="63" style="width:65px" controls-position="right"/>
        <el-input-number v-model="roi.center[2]" size="small" :min="0" :max="63" style="width:65px" controls-position="right"/>
        <el-input-number v-model="roi.radius" size="small" :min="2" :max="20" style="width:60px" controls-position="right"/>
        <el-button size="small" type="danger" @click="removeROI(i)" circle>×</el-button>
      </div>
    </div>
    <el-button type="success" size="small" @click="analyze" :loading="store.loading" :disabled="!rois.length" style="margin-top:8px">📊 分析ROI</el-button>

    <div v-if="store.roiResults.length" class="results">
      <div v-for="r in store.roiResults" :key="r.id ?? `${r.label}-${r.center.join(',')}-${r.radius}`" class="roi-result">
        <div class="r-label">{{ r.label }}</div>
        <div class="r-stats">
          <div class="stat"><span>均值</span><b>{{ r.mean }}</b> HU</div>
          <div class="stat"><span>标准差</span><b>{{ r.std }}</b></div>
          <div class="stat"><span>范围</span><b>{{ r.min }}~{{ r.max }}</b></div>
          <div class="stat"><span>体素</span><b>{{ r.voxelCount }}</b></div>
        </div>
        <div ref="histCharts" class="mini-hist"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useImagingStore } from '../store/imaging'
const store = useImagingStore()

function createRoiId() {
  return crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

interface ROIDef { id: string; label: string; center: number[]; radius: number }
const rois = ref<ROIDef[]>([
  { id: createRoiId(), label: 'lesion1', center: [30, 28, 32], radius: 6 }
])

function addROI() { rois.value.push({ id: createRoiId(), label: `roi-${rois.value.length+1}`, center: [32, 32, 32], radius: 8 }) }
function removeROI(i: number) { rois.value.splice(i, 1) }
function analyze() { store.analyzeROI(rois.value.map(r => ({...r}))) }
</script>

<style scoped>
.panel { background:#161b22; border-radius:6px; padding:10px; border:1px solid #30363d }
.panel h4 { color:#58a6ff; font-size:12px; margin-bottom:8px }
.roi-row { display:flex; gap:3px; align-items:center; padding:4px 0; font-size:11px; flex-wrap:wrap }
.results { margin-top:10px }
.r-label { font-size:12px; color:#e6edf3; font-weight:600; margin-bottom:4px }
.r-stats { display:grid; grid-template-columns:1fr 1fr; gap:4px }
.stat { font-size:10px; color:#8b949e; padding:3px 4px; background:#0d1117; border-radius:3px }
.stat b { color:#e6edf3; margin-left:4px }
.mini-hist { width:100%; height:40px; margin-top:4px; background:#0d1117; border-radius:3px }
</style>