export const MAX_LAYOUT_PERMITTED = 5;

export const AppLayoutDefault = [
  {
    label: 'Logotipo de la aplicación',
    name: 'APP_LOGO',
    status: 'ACTIVE',
    type: 'IMAGE',
    value: null,
  },
  {
    label: 'Imagen de fondo',
    name: 'APP_BACKGROUND_IMAGE',
    status: 'ACTIVE',
    type: 'IMAGE',
    value: null,
  },
  {
    label: 'Tipo de fondo de la aplicación',
    name: 'APP_BACKGROUND_TYPE',
    status: 'ACTIVE',
    type: 'SELECT',
    value: {
      options: [
        {
          label: 'Imagen',
          value: 'IMAGE',
        },
        {
          label: 'Color',
          value: 'COLOR',
        },
      ],
      selected: 'COLOR',
    },
  },
  {
    label: 'Color de fondo',
    name: 'APP_BACKGROUND_COLOR',
    status: 'ACTIVE',
    type: 'COLOR',
    value: '#080e16c7',
  },
  {
    label: 'Color de tarjeta inicial',
    name: 'APP_CARD_COLOR',
    status: 'ACTIVE',
    type: 'COLOR',
    value: '#1d242e73',
  },
  {
    label: 'Radio de la tarjeta inicial',
    name: 'APP_CARD_RADIUS',
    status: 'ACTIVE',
    type: 'INTEGER',
    value: 20,
  },
  {
    label: 'Color de la tarjeta de estado',
    name: 'APP_CARD_STATUS_COLOR',
    status: 'ACTIVE',
    type: 'COLOR',
    value: '#1d242e73',
  },
  {
    label: 'Radio de la tarjeta de estado',
    name: 'APP_CARD_STATUS_RADIUS',
    status: 'ACTIVE',
    type: 'INTEGER',
    value: 25,
  },
  {
    label: 'Color de la tarjeta de configuración',
    name: 'APP_CARD_CONFIG_COLOR',
    status: 'ACTIVE',
    type: 'COLOR',
    value: '#0E171EC9',
  },
  {
    label: 'Color de fondo de los diálogos',
    name: 'APP_DIALOG_BACKGROUND_COLOR',
    status: 'ACTIVE',
    type: 'COLOR',
    value: '#050C5AE4',
  },
  {
    label: 'Color de fondo del cuadro de diálogo de registro',
    name: 'APP_DIALOG_LOGGER_COLOR',
    status: 'ACTIVE',
    type: 'COLOR',
    value: '#080e16c7',
  },
  {
    label: 'Color del borde',
    name: 'APP_BORDER_COLOR',
    status: 'ACTIVE',
    type: 'COLOR',
    value: '#1d242e73',
  },
  {
    label: 'Color de entrada',
    name: 'APP_INPUT_COLOR',
    status: 'ACTIVE',
    type: 'COLOR',
    value: '#1d242e73',
  },
  {
    label: 'Radio de entrada',
    name: 'APP_INPUT_RADIUS',
    status: 'ACTIVE',
    type: 'INTEGER',
    value: 25,
  },
  {
    label: 'Color de texto',
    name: 'APP_TEXT_COLOR',
    status: 'ACTIVE',
    type: 'COLOR',
    value: '#FFFFFFFF',
  },
  {
    label: 'Color del boton',
    name: 'APP_BUTTON_COLOR',
    status: 'ACTIVE',
    type: 'COLOR',
    value: '#1d242e73',
  },
  {
    label: 'Radio del botón',
    name: 'APP_BUTTON_RADIUS',
    status: 'ACTIVE',
    type: 'INTEGER',
    value: 25,
  },
  {
    label: 'Color del icono',
    name: 'APP_ICON_COLOR',
    status: 'ACTIVE',
    type: 'COLOR',
    value: '#FFFFFFFF',
  },
  {
    label: 'Ver modo de conexión',
    name: 'APP_SHOW_CONNECTION_MODE',
    status: 'ACTIVE',
    type: 'BOOLEAN',
    value: true,
  },
  {
    label: 'Actualizar automáticamente la configuración al publicar una actualización',
    name: 'APP_CONFIG_AUTO_UPDATE',
    status: 'ACTIVE',
    type: 'BOOLEAN',
    value: false,
  },
  {
    label: 'Inicie automáticamente la aplicación cuando reinicie su dispositivo',
    name: 'APP_AUTO_START',
    status: 'ACTIVE',
    type: 'BOOLEAN',
    value: false,
  },
  {
    label: 'Usar limitador de conexión',
    name: 'APP_CONNECTION_LIMITER',
    status: 'ACTIVE',
    type: 'BOOLEAN',
    value: false,
  },
  {
    label: 'Usar el botón de actualización',
    name: 'APP_BTN_UPDATE_ENABLED',
    status: 'ACTIVE',
    type: 'BOOLEAN',
    value: true,
  },
  {
    label: 'Usar botón de registros',
    name: 'APP_BTN_LOGGER_ENABLED',
    status: 'ACTIVE',
    type: 'BOOLEAN',
    value: true,
  },
  {
    label: 'Usar el botón de página de vista web',
    name: 'APP_BTN_PAGE_ENABLED',
    status: 'ACTIVE',
    type: 'BOOLEAN',
    value: true,
  },
  {
    label: 'Activar diálogo de error',
    name: 'APP_DIALOG_ERROR_ENABLED',
    status: 'ACTIVE',
    type: 'BOOLEAN',
    value: true,
  },
  {
    label: 'Activar diálogo de usuario de verificación',
    name: 'APP_CHECKUSER_DIALOG_ENABLED',
    status: 'ACTIVE',
    type: 'BOOLEAN',
    value: true,
  },
  {
    label: 'Habilitar brindis de éxito',
    name: 'APP_SUCCESS_TOAST_ENABLED',
    status: 'ACTIVE',
    type: 'BOOLEAN',
    value: true,
  },
  {
    label: 'Habilitar brindis de error',
    name: 'APP_ERROR_TOAST_ENABLED',
    status: 'ACTIVE',
    type: 'BOOLEAN',
    value: true,
  },
  {
    label: 'Usar layout webview',
    name: 'APP_LAYOUT_WEBVIEW_ENABLED',
    status: 'ACTIVE',
    type: 'BOOLEAN',
    value: false,
  },
  {
    label: 'Mensaje',
    name: 'APP_MESSAGE',
    status: 'ACTIVE',
    type: 'TEXT',
    value: null,
  },
  {
    label: 'Tipo de mensaje',
    name: 'APP_MESSAGE_TYPE',
    status: 'ACTIVE',
    type: 'SELECT',
    value: {
      options: [
        {
          label: 'Alerta',
          value: 'ALERT',
        },
        {
          label: 'Información',
          value: 'INFO',
        },
        {
          label: 'Bienvenida',
          value: 'WELCOME',
        },
        {
          label: 'Sin mensaje',
          value: 'NONE',
        },
      ],
      selected: 'NONE',
    },
  },
  {
    label: 'URL de actualización de la aplicación',
    name: 'APP_UPDATE_URL',
    status: 'ACTIVE',
    type: 'URL',
    value: null,
  },
  {
    label: 'LAYOUT WEBVIEW (BAJO TU PROPIO RIESGO)',
    name: 'APP_LAYOUT_WEBVIEW',
    status: 'ACTIVE',
    type: 'HTML',
    value: null,
  },
  {
    label: 'ANDROID WEBVIEW (BAJO TU PROPIO RIESGO)',
    name: 'APP_SUPPORT_BUTTON',
    status: 'ACTIVE',
    type: 'HTML',
    value: null,
  },
  {
    label: 'PAGINA WEBVIEW (BAJO TU PROPIO RIESGO)',
    name: 'APP_WEB_VIEW',
    status: 'ACTIVE',
    type: 'HTML',
    value: null,
  },
];
