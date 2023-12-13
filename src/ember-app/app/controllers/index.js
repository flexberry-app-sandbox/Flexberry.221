import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.22.caption'),
          title: i18n.t('forms.application.sitemap.22.title'),
          children: [{
            link: 'i-i-s-22-контрагенты-l',
            caption: i18n.t('forms.application.sitemap.22.i-i-s-22-контрагенты-l.caption'),
            title: i18n.t('forms.application.sitemap.22.i-i-s-22-контрагенты-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-22-заказ-пост-l',
            caption: i18n.t('forms.application.sitemap.22.i-i-s-22-заказ-пост-l.caption'),
            title: i18n.t('forms.application.sitemap.22.i-i-s-22-заказ-пост-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-22-единицы-измер-l',
            caption: i18n.t('forms.application.sitemap.22.i-i-s-22-единицы-измер-l.caption'),
            title: i18n.t('forms.application.sitemap.22.i-i-s-22-единицы-измер-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-22-организации-l',
            caption: i18n.t('forms.application.sitemap.22.i-i-s-22-организации-l.caption'),
            title: i18n.t('forms.application.sitemap.22.i-i-s-22-организации-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-22-план-закупок-l',
            caption: i18n.t('forms.application.sitemap.22.i-i-s-22-план-закупок-l.caption'),
            title: i18n.t('forms.application.sitemap.22.i-i-s-22-план-закупок-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-22-отчет-о-зак-l',
            caption: i18n.t('forms.application.sitemap.22.i-i-s-22-отчет-о-зак-l.caption'),
            title: i18n.t('forms.application.sitemap.22.i-i-s-22-отчет-о-зак-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-22-номенклатура-l',
            caption: i18n.t('forms.application.sitemap.22.i-i-s-22-номенклатура-l.caption'),
            title: i18n.t('forms.application.sitemap.22.i-i-s-22-номенклатура-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-22-склады-l',
            caption: i18n.t('forms.application.sitemap.22.i-i-s-22-склады-l.caption'),
            title: i18n.t('forms.application.sitemap.22.i-i-s-22-склады-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})