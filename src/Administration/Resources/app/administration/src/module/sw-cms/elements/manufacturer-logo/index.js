import CMS from '../../constant/sw-cms.constant';

import './component';
import './config';

/**
 * @private since v6.5.0
 */
Shopware.Service('cmsService').registerCmsElement({
    name: 'manufacturer-logo',
    label: 'sw-cms.elements.productHeading.logo.label',
    component: 'sw-cms-el-manufacturer-logo',
    configComponent: 'sw-cms-el-config-manufacturer-logo',
    allowedPageTypes: [CMS.PAGE_TYPES.PRODUCT_DETAIL],
    defaultConfig: {
        media: {
            source: 'static',
            value: null,
            required: true,
            entity: {
                name: 'media',
            },
        },
        displayMode: {
            source: 'static',
            value: 'standard',
        },
        url: {
            source: 'static',
            value: null,
        },
        newTab: {
            source: 'static',
            value: true,
        },
        minHeight: {
            source: 'static',
            value: null,
        },
        verticalAlign: {
            source: 'static',
            value: null,
        },
    },
});
