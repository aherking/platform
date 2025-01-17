import CMS from '../../../constant/sw-cms.constant';

import './component';
import './preview';

/**
 * @private since v6.5.0
 */
Shopware.Service('cmsService').registerCmsBlock({
    name: 'category-navigation',
    label: 'sw-cms.blocks.sidebar.categoryNavigation.label',
    category: 'sidebar',
    component: 'sw-cms-block-category-navigation',
    previewComponent: 'sw-cms-block-preview-category-navigation',
    allowedPageTypes: [CMS.PAGE_TYPES.LISTING],
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        content: 'category-navigation',
    },
});
