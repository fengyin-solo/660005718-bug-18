/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, watch, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { useImagingStore } from '../store/imaging';
const store = useImagingStore();
const container = ref();
let scene, camera, renderer, controls, animId;
let volGroup = new THREE.Group();
function initScene() {
    const c = container.value;
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0d1117);
    camera = new THREE.PerspectiveCamera(45, c.clientWidth / c.clientHeight, 0.1, 50);
    camera.position.set(3, 2, 4);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(c.clientWidth, c.clientHeight);
    c.appendChild(renderer.domElement);
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.target.set(0, 0, 0);
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    scene.add(volGroup);
}
function renderVolume() {
    volGroup.clear();
    const vd = store.volumeData;
    if (!vd)
        return;
    const vol = vd.volume;
    const [d, h, w] = vd.dimensions;
    const step = 2;
    const wl = store.windowVal, ww = store.levelVal;
    const lower = wl - ww / 2, upper = wl + ww / 2;
    // Sample volume as point cloud with transfer function
    const positions = [], colors = [];
    const scaleX = 3 / w, scaleY = 3 / h, scaleZ = 3 / d;
    for (let z = 0; z < d; z += step) {
        for (let y = 0; y < h; y += step) {
            for (let x = 0; x < w; x += step) {
                let val = vol[z][y][x];
                let t = (val - lower) / (upper - lower);
                t = Math.max(0, Math.min(1, t));
                if (t > 0.05) {
                    positions.push((x - w / 2) * scaleX, (y - h / 2) * scaleY, (z - d / 2) * scaleZ);
                    // Bone (white), tissue (gray), air (transparent)
                    const alpha = t * 0.6;
                    colors.push(0.8 + t * 0.2, 0.7 + t * 0.2, 0.6 + t * 0.3);
                }
            }
        }
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geom.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    const mat = new THREE.PointsMaterial({ size: 0.04, vertexColors: true, blending: THREE.AdditiveBlending, depthWrite: true, transparent: true, opacity: 0.8 });
    volGroup.add(new THREE.Points(geom, mat));
    // Axes cross
    const axGeom = new THREE.BufferGeometry();
    axGeom.setAttribute('position', new THREE.Float32BufferAttribute([-2, 0, 0, 2, 0, 0, 0, -2, 0, 0, 2, 0, 0, 0, -2, 0, 0, 2], 3));
    volGroup.add(new THREE.Line(axGeom, new THREE.LineBasicMaterial({ color: 0x30363d })));
}
function animate() { animId = requestAnimationFrame(animate); controls.update(); renderer.render(scene, camera); }
onMounted(() => { initScene(); animate(); });
watch(() => [store.volumeData, store.windowVal, store.levelVal], renderVolume, { deep: true });
onUnmounted(() => { cancelAnimationFrame(animId); renderer?.dispose(); });
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ref: "container",
    ...{ class: "viewer3d" },
});
/** @type {typeof __VLS_ctx.container} */ ;
/** @type {__VLS_StyleScopedClasses['viewer3d']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            container: container,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
