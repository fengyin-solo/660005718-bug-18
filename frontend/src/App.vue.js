/// <reference types="../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import VolumeRenderer from './components/VolumeRenderer.vue';
import MPRView from './components/MPRView.vue';
import WindowControl from './components/WindowControl.vue';
import ROIPanel from './components/ROIPanel.vue';
import { useImagingStore } from './store/imaging';
const store = useImagingStore();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "app-root" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({
    ...{ class: "top-bar" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "tools" },
});
const __VLS_0 = {}.ElSelect;
/** @type {[typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, typeof __VLS_components.ElSelect, typeof __VLS_components.elSelect, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.store.preset),
    size: "small",
    ...{ style: {} },
}));
const __VLS_2 = __VLS_1({
    modelValue: (__VLS_ctx.store.preset),
    size: "small",
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
const __VLS_4 = {}.ElOption;
/** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    value: "brain",
    label: "头部CT",
}));
const __VLS_6 = __VLS_5({
    value: "brain",
    label: "头部CT",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_8 = {}.ElOption;
/** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    value: "chest",
    label: "胸部CT",
}));
const __VLS_10 = __VLS_9({
    value: "chest",
    label: "胸部CT",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
const __VLS_12 = {}.ElOption;
/** @type {[typeof __VLS_components.ElOption, typeof __VLS_components.elOption, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    value: "abdomen",
    label: "腹部CT",
}));
const __VLS_14 = __VLS_13({
    value: "abdomen",
    label: "腹部CT",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
var __VLS_3;
const __VLS_16 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    ...{ 'onClick': {} },
    size: "small",
    loading: (__VLS_ctx.store.loading),
}));
const __VLS_18 = __VLS_17({
    ...{ 'onClick': {} },
    size: "small",
    loading: (__VLS_ctx.store.loading),
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
let __VLS_20;
let __VLS_21;
let __VLS_22;
const __VLS_23 = {
    onClick: (...[$event]) => {
        __VLS_ctx.store.loadVolume();
    }
};
__VLS_19.slots.default;
var __VLS_19;
if (__VLS_ctx.store.volumeData) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "dim-info" },
    });
    (__VLS_ctx.store.volumeData.dimensions.join('×'));
}
if (__VLS_ctx.store.volumeData) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "main-grid" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "render-area" },
    });
    /** @type {[typeof VolumeRenderer, ]} */ ;
    // @ts-ignore
    const __VLS_24 = __VLS_asFunctionalComponent(VolumeRenderer, new VolumeRenderer({}));
    const __VLS_25 = __VLS_24({}, ...__VLS_functionalComponentArgsRest(__VLS_24));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "mpr-area" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "mpr-row" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "mpr-panel" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "mpr-title" },
    });
    /** @type {[typeof MPRView, ]} */ ;
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(MPRView, new MPRView({
        plane: "axial",
    }));
    const __VLS_28 = __VLS_27({
        plane: "axial",
    }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "mpr-panel" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "mpr-title" },
    });
    /** @type {[typeof MPRView, ]} */ ;
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent(MPRView, new MPRView({
        plane: "coronal",
    }));
    const __VLS_31 = __VLS_30({
        plane: "coronal",
    }, ...__VLS_functionalComponentArgsRest(__VLS_30));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "mpr-panel" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "mpr-title" },
    });
    /** @type {[typeof MPRView, ]} */ ;
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(MPRView, new MPRView({
        plane: "sagittal",
    }));
    const __VLS_34 = __VLS_33({
        plane: "sagittal",
    }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    /** @type {[typeof WindowControl, ]} */ ;
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent(WindowControl, new WindowControl({}));
    const __VLS_37 = __VLS_36({}, ...__VLS_functionalComponentArgsRest(__VLS_36));
    /** @type {[typeof ROIPanel, ]} */ ;
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(ROIPanel, new ROIPanel({}));
    const __VLS_40 = __VLS_39({}, ...__VLS_functionalComponentArgsRest(__VLS_39));
}
else if (!__VLS_ctx.store.loading) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "loading-state" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "placeholder" },
    });
}
/** @type {__VLS_StyleScopedClasses['app-root']} */ ;
/** @type {__VLS_StyleScopedClasses['top-bar']} */ ;
/** @type {__VLS_StyleScopedClasses['tools']} */ ;
/** @type {__VLS_StyleScopedClasses['dim-info']} */ ;
/** @type {__VLS_StyleScopedClasses['main-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['render-area']} */ ;
/** @type {__VLS_StyleScopedClasses['mpr-area']} */ ;
/** @type {__VLS_StyleScopedClasses['mpr-row']} */ ;
/** @type {__VLS_StyleScopedClasses['mpr-panel']} */ ;
/** @type {__VLS_StyleScopedClasses['mpr-title']} */ ;
/** @type {__VLS_StyleScopedClasses['mpr-panel']} */ ;
/** @type {__VLS_StyleScopedClasses['mpr-title']} */ ;
/** @type {__VLS_StyleScopedClasses['mpr-panel']} */ ;
/** @type {__VLS_StyleScopedClasses['mpr-title']} */ ;
/** @type {__VLS_StyleScopedClasses['loading-state']} */ ;
/** @type {__VLS_StyleScopedClasses['placeholder']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            VolumeRenderer: VolumeRenderer,
            MPRView: MPRView,
            WindowControl: WindowControl,
            ROIPanel: ROIPanel,
            store: store,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
