export interface WindowPreset { window: number; level: number; desc: string }
export interface VolumeData {
  volume: number[][][]
  dimensions: [number, number, number]
  mpr: { axial: number[][]; coronal: number[][]; sagittal: number[][] }
  preset: string
  windowPresets: Record<string, WindowPreset>
}

export interface ROIResult {
  id?: string
  label: string; center: number[]; radius: number
  mean: number; std: number; min: number; max: number; voxelCount: number
  histogram: number[]
}