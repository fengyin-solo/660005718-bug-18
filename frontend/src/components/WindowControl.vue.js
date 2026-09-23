/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { computed, ref } from 'vue';
import { useImagingStore } from '../store/imaging';
const store = useImagingStore();
const active = ref('');
const defaultPresets = {
    lung: { window: 1500, level: -600 },
    mediastinum: { window: 350, level: 50 },
    bone: { window: 2000, level: 300 },
    brain: { window: 80, level: 40 },
    abdomen: { window: 400, level: 40 },
};
const presets = computed(() => store.volumeData?.windowPresets || defaultPresets);
function apply(k) {
    active.value = k;
    const p = presets.value[k];
    if (p) {
        store.windowVal = p.window;
        store.levelVal = p.level;
    }
}
function onChange() { active.value = ''; }
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['slider-row']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "panel" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "preset-row" },
});
for (const [p, k] of __VLS_getVForSourceType((__VLS_ctx.presets))) {
    const __VLS_0 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ 'onClick': {} },
        key: (k),
        size: "small",
        type: (__VLS_ctx.active === k ? 'primary' : ''),
    }));
    const __VLS_2 = __VLS_1({
        ...{ 'onClick': {} },
        key: (k),
        size: "small",
        type: (__VLS_ctx.active === k ? 'primary' : ''),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_4;
    let __VLS_5;
    let __VLS_6;
    const __VLS_7 = {
        onClick: (...[$event]) => {
            __VLS_ctx.apply(k);
        }
    };
    __VLS_3.slots.default;
    (k);
    var __VLS_3;
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "slider-row" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.store.windowVal);
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    ...{ onInput: (__VLS_ctx.onChange) },
    type: "range",
    min: (10),
    max: (3000),
});
(__VLS_ctx.store.windowVal);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "slider-row" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.store.levelVal);
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    ...{ onInput: (__VLS_ctx.onChange) },
    type: "range",
    min: (-1000),
    max: (1000),
});
(__VLS_ctx.store.levelVal);
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['preset-row']} */ ;
/** @type {__VLS_StyleScopedClasses['slider-row']} */ ;
/** @type {__VLS_StyleScopedClasses['slider-row']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            store: store,
            active: active,
            presets: presets,
            apply: apply,
            onChange: onChange,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
