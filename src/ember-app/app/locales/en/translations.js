import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IIS22ЕдиницыИзмерLForm from './forms/i-i-s-22-единицы-измер-l';
import IIS22ЗаказПостLForm from './forms/i-i-s-22-заказ-пост-l';
import IIS22КонтрагентыLForm from './forms/i-i-s-22-контрагенты-l';
import IIS22НоменклатураLForm from './forms/i-i-s-22-номенклатура-l';
import IIS22ОрганизацииLForm from './forms/i-i-s-22-организации-l';
import IIS22ОтчетОЗакLForm from './forms/i-i-s-22-отчет-о-зак-l';
import IIS22ПланЗакупокLForm from './forms/i-i-s-22-план-закупок-l';
import IIS22СкладыLForm from './forms/i-i-s-22-склады-l';
import IIS22ЕдиницыИзмерEForm from './forms/i-i-s-22-единицы-измер-e';
import IIS22ЗаказПостEForm from './forms/i-i-s-22-заказ-пост-e';
import IIS22КонтрагентыEForm from './forms/i-i-s-22-контрагенты-e';
import IIS22НоменклатураEForm from './forms/i-i-s-22-номенклатура-e';
import IIS22ОрганизацииEForm from './forms/i-i-s-22-организации-e';
import IIS22ОтчетОЗакEForm from './forms/i-i-s-22-отчет-о-зак-e';
import IIS22ПланЗакупокEForm from './forms/i-i-s-22-план-закупок-e';
import IIS22СкладыEForm from './forms/i-i-s-22-склады-e';
import IIS22ЕдиницыИзмерModel from './models/i-i-s-22-единицы-измер';
import IIS22ЗаказПостModel from './models/i-i-s-22-заказ-пост';
import IIS22КонтрагентыModel from './models/i-i-s-22-контрагенты';
import IIS22НоменклатураModel from './models/i-i-s-22-номенклатура';
import IIS22ОрганизацииModel from './models/i-i-s-22-организации';
import IIS22ОтчетОЗакModel from './models/i-i-s-22-отчет-о-зак';
import IIS22ПланЗакупокModel from './models/i-i-s-22-план-закупок';
import IIS22ПланModel from './models/i-i-s-22-план';
import IIS22СкладыModel from './models/i-i-s-22-склады';
import IIS22ТЧЗаказModel from './models/i-i-s-22-т-ч-заказ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-22-единицы-измер': IIS22ЕдиницыИзмерModel,
    'i-i-s-22-заказ-пост': IIS22ЗаказПостModel,
    'i-i-s-22-контрагенты': IIS22КонтрагентыModel,
    'i-i-s-22-номенклатура': IIS22НоменклатураModel,
    'i-i-s-22-организации': IIS22ОрганизацииModel,
    'i-i-s-22-отчет-о-зак': IIS22ОтчетОЗакModel,
    'i-i-s-22-план-закупок': IIS22ПланЗакупокModel,
    'i-i-s-22-план': IIS22ПланModel,
    'i-i-s-22-склады': IIS22СкладыModel,
    'i-i-s-22-т-ч-заказ': IIS22ТЧЗаказModel
  },

  'application-name': '22',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': '22',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '22',
          title: '22'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        22: {
          caption: '22',
          title: '22',
          'i-i-s-22-контрагенты-l': {
            caption: 'Контрагенты',
            title: ''
          },
          'i-i-s-22-заказ-пост-l': {
            caption: 'Заказ пост',
            title: ''
          },
          'i-i-s-22-единицы-измер-l': {
            caption: 'Единицы измер',
            title: ''
          },
          'i-i-s-22-организации-l': {
            caption: 'Организации',
            title: ''
          },
          'i-i-s-22-план-закупок-l': {
            caption: 'План закупок',
            title: ''
          },
          'i-i-s-22-отчет-о-зак-l': {
            caption: 'Отчет о зак',
            title: ''
          },
          'i-i-s-22-номенклатура-l': {
            caption: 'Номенклатура',
            title: ''
          },
          'i-i-s-22-склады-l': {
            caption: 'Склады',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-22-единицы-измер-l': IIS22ЕдиницыИзмерLForm,
    'i-i-s-22-заказ-пост-l': IIS22ЗаказПостLForm,
    'i-i-s-22-контрагенты-l': IIS22КонтрагентыLForm,
    'i-i-s-22-номенклатура-l': IIS22НоменклатураLForm,
    'i-i-s-22-организации-l': IIS22ОрганизацииLForm,
    'i-i-s-22-отчет-о-зак-l': IIS22ОтчетОЗакLForm,
    'i-i-s-22-план-закупок-l': IIS22ПланЗакупокLForm,
    'i-i-s-22-склады-l': IIS22СкладыLForm,
    'i-i-s-22-единицы-измер-e': IIS22ЕдиницыИзмерEForm,
    'i-i-s-22-заказ-пост-e': IIS22ЗаказПостEForm,
    'i-i-s-22-контрагенты-e': IIS22КонтрагентыEForm,
    'i-i-s-22-номенклатура-e': IIS22НоменклатураEForm,
    'i-i-s-22-организации-e': IIS22ОрганизацииEForm,
    'i-i-s-22-отчет-о-зак-e': IIS22ОтчетОЗакEForm,
    'i-i-s-22-план-закупок-e': IIS22ПланЗакупокEForm,
    'i-i-s-22-склады-e': IIS22СкладыEForm
  },

});

export default translations;
