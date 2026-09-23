/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref } from 'vue';
import { useImagingStore } from '../store/imaging';
const store = useImagingStore();
const rois = ref([
    { label: 'lesion1', center: [30, 28, 32], radius: 6 }
]);
function addROI() { rois.value.push({ label: `roi-${rois.value.length + 1}`, center: [32, 32, 32], radius: 8 }); }
function removeROI(i) { rois.value.splice(i, 1); }
function analyze() { store.analyzeROI(rois.value.map(r => ({ ...r }))); }
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['stat']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "panel" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
const __VLS_0 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ 'onClick': {} },
    size: "small",
    ...{ style: {} },
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    size: "small",
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
let __VLS_6;
const __VLS_7 = {
    onClick: (__VLS_ctx.addROI)
};
__VLS_3.slots.default;
var __VLS_3;
for (const [roi, i] of __VLS_getVForSourceType((__VLS_ctx.rois))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: (i),
        ...{ class: "roi-config" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "roi-row" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (i + 1);
    const __VLS_8 = {}.ElInput;
    /** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
        modelValue: (roi.label),
        size: "small",
        placeholder: "标签",
        ...{ style: {} },
    }));
    const __VLS_10 = __VLS_9({
        modelValue: (roi.label),
        size: "small",
        placeholder: "标签",
        ...{ style: {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    const __VLS_12 = {}.ElInputNumber;
    /** @type {[typeof __VLS_components.ElInputNumber, typeof __VLS_components.elInputNumber, ]} */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        modelValue: (roi.center[0]),
        size: "small",
        min: (0),
        max: (63),
        ...{ style: {} },
        controlsPosition: "right",
    }));
    const __VLS_14 = __VLS_13({
        modelValue: (roi.center[0]),
        size: "small",
        min: (0),
        max: (63),
        ...{ style: {} },
        controlsPosition: "right",
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    const __VLS_16 = {}.ElInputNumber;
    /** @type {[typeof __VLS_components.ElInputNumber, typeof __VLS_components.elInputNumber, ]} */ ;
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
        modelValue: (roi.center[1]),
        size: "small",
        min: (0),
        max: (63),
        ...{ style: {} },
        controlsPosition: "right",
    }));
    const __VLS_18 = __VLS_17({
        modelValue: (roi.center[1]),
        size: "small",
        min: (0),
        max: (63),
        ...{ style: {} },
        controlsPosition: "right",
    }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    const __VLS_20 = {}.ElInputNumber;
    /** @type {[typeof __VLS_components.ElInputNumber, typeof __VLS_components.elInputNumber, ]} */ ;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
        modelValue: (roi.center[2]),
        size: "small",
        min: (0),
        max: (63),
        ...{ style: {} },
        controlsPosition: "right",
    }));
    const __VLS_22 = __VLS_21({
        modelValue: (roi.center[2]),
        size: "small",
        min: (0),
        max: (63),
        ...{ style: {} },
        controlsPosition: "right",
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    const __VLS_24 = {}.ElInputNumber;
    /** @type {[typeof __VLS_components.ElInputNumber, typeof __VLS_components.elInputNumber, ]} */ ;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
        modelValue: (roi.radius),
        size: "small",
        min: (2),
        max: (20),
        ...{ style: {} },
        controlsPosition: "right",
    }));
    const __VLS_26 = __VLS_25({
        modelValue: (roi.radius),
        size: "small",
        min: (2),
        max: (20),
        ...{ style: {} },
        controlsPosition: "right",
    }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    const __VLS_28 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
        ...{ 'onClick': {} },
        size: "small",
        type: "danger",
        circle: true,
    }));
    const __VLS_30 = __VLS_29({
        ...{ 'onClick': {} },
        size: "small",
        type: "danger",
        circle: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_29));
    let __VLS_32;
    let __VLS_33;
    let __VLS_34;
    const __VLS_35 = {
        onClick: (...[$event]) => {
            __VLS_ctx.removeROI(i);
        }
    };
    __VLS_31.slots.default;
    var __VLS_31;
}
const __VLS_36 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    ...{ 'onClick': {} },
    type: "success",
    size: "small",
    loading: (__VLS_ctx.store.loading),
    disabled: (!__VLS_ctx.rois.length),
    ...{ style: {} },
}));
const __VLS_38 = __VLS_37({
    ...{ 'onClick': {} },
    type: "success",
    size: "small",
    loading: (__VLS_ctx.store.loading),
    disabled: (!__VLS_ctx.rois.length),
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
let __VLS_40;
let __VLS_41;
let __VLS_42;
const __VLS_43 = {
    onClick: (__VLS_ctx.analyze)
};
__VLS_39.slots.default;
var __VLS_39;
if (__VLS_ctx.store.roiResults.length) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "results" },
    });
    for (const [r] of __VLS_getVForSourceType((__VLS_ctx.store.roiResults))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: (r.label),
            ...{ class: "roi-result" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "r-label" },
        });
        (r.label);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "r-stats" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "stat" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
        (r.mean);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "stat" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
        (r.std);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "stat" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
        (r.min);
        (r.max);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "stat" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
        (r.voxelCount);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ref: "histCharts",
            ...{ class: "mini-hist" },
        });
        /** @type {typeof __VLS_ctx.histCharts} */ ;
    }
}
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['roi-config']} */ ;
/** @type {__VLS_StyleScopedClasses['roi-row']} */ ;
/** @type {__VLS_StyleScopedClasses['results']} */ ;
/** @type {__VLS_StyleScopedClasses['roi-result']} */ ;
/** @type {__VLS_StyleScopedClasses['r-label']} */ ;
/** @type {__VLS_StyleScopedClasses['r-stats']} */ ;
/** @type {__VLS_StyleScopedClasses['stat']} */ ;
/** @type {__VLS_StyleScopedClasses['stat']} */ ;
/** @type {__VLS_StyleScopedClasses['stat']} */ ;
/** @type {__VLS_StyleScopedClasses['stat']} */ ;
/** @type {__VLS_StyleScopedClasses['mini-hist']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            store: store,
            rois: rois,
            addROI: addROI,
            removeROI: removeROI,
            analyze: analyze,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
