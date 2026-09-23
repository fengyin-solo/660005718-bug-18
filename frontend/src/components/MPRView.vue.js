/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, watch, computed, onMounted } from 'vue';
import { useImagingStore } from '../store/imaging';
const props = defineProps();
const store = useImagingStore();
const cvs = ref();
const slice = ref(32);
const maxSlice = computed(() => {
    const dims = store.volumeData?.dimensions || [64, 64, 64];
    return props.plane === 'axial' ? dims[0] - 1 : props.plane === 'coronal' ? dims[1] - 1 : dims[2] - 1;
});
function draw() {
    const c = cvs.value;
    const ctx = c.getContext('2d');
    const W = c.width, H = c.height;
    ctx.fillStyle = '#0d1117';
    ctx.fillRect(0, 0, W, H);
    const vd = store.volumeData;
    if (!vd)
        return;
    let sliceData = null;
    if (props.plane === 'axial')
        sliceData = vd.mpr.axial;
    else if (props.plane === 'coronal')
        sliceData = vd.mpr.coronal;
    else
        sliceData = vd.mpr.sagittal;
    if (!sliceData || !sliceData.length)
        return;
    const wl = store.windowVal, ww = store.levelVal;
    const lower = wl - ww / 2, upper = wl + ww / 2;
    const rows = sliceData.length, cols = sliceData[0].length;
    const cellW = W / cols, cellH = H / rows;
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            let val = sliceData[y][x];
            let t = (val - lower) / (upper - lower);
            t = Math.max(0, Math.min(1, t));
            const gray = Math.floor(t * 255);
            ctx.fillStyle = `rgb(${gray},${gray},${gray})`;
            ctx.fillRect(x * cellW, y * cellH, cellW + 0.5, cellH + 0.5);
        }
    }
}
watch(() => store.volumeData, draw, { deep: true });
watch(() => [store.windowVal, store.levelVal], draw);
onMounted(draw);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.canvas, __VLS_intrinsicElements.canvas)({
    ref: "cvs",
    width: "160",
    height: "160",
    ...{ class: "mpr-canvas" },
});
/** @type {typeof __VLS_ctx.cvs} */ ;
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    ...{ onInput: (__VLS_ctx.draw) },
    type: "range",
    ...{ class: "slider" },
    min: (0),
    max: (__VLS_ctx.maxSlice),
});
(__VLS_ctx.slice);
/** @type {__VLS_StyleScopedClasses['mpr-canvas']} */ ;
/** @type {__VLS_StyleScopedClasses['slider']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            cvs: cvs,
            slice: slice,
            maxSlice: maxSlice,
            draw: draw,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
