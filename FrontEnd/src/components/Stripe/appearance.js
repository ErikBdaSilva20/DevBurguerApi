export const appearance = {
  theme: 'night',

  variables: {
    /* 🎨 Cores principais (padrão Stripe-like) */
    colorPrimary: '#22c55e', // green success / action
    colorPrimaryText: '#ffffff',

    colorBackground: '#0f172a',
    colorComponentBackground: '#1e293b',
    colorComponentBorder: '#334155',
    colorComponentDivider: '#334155',

    colorText: '#e5e7eb',
    colorTextSecondary: '#94a3b8',
    colorTextPlaceholder: '#64748b',

    colorDanger: '#ef4444',
    colorSuccess: '#22c55e',
    colorWarning: '#facc15',

    /* 🔤 Tipografia */
    fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    fontSizeBase: '15px',
    fontWeightNormal: '400',
    fontWeightMedium: '500',

    /* 📐 Layout */
    borderRadius: '10px',
    spacingUnit: '6px',

    /* 🌗 Estados */
    focusRingColor: '#22c55e',
    focusRingWidth: '2px',
  },

  rules: {
    /* Inputs */
    '.Input': {
      backgroundColor: '#1e293b',
      border: '1px solid #334155',
      padding: '12px 14px',
      boxShadow: 'none',
      transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
    },

    '.Input:hover': {
      borderColor: '#334155',
    },

    '.Input:focus': {
      borderColor: '#22c55e',
      boxShadow: '0 0 0 1px #22c55e',
    },

    '.Input--invalid': {
      borderColor: '#ef4444',
      boxShadow: '0 0 0 1px #ef4444',
    },

    /* Labels */
    '.Label': {
      color: '#cbd5f5',
      fontWeight: '500',
      marginBottom: '6px',
    },

    /* Tabs (cartão / pix / etc) */
    '.Tab': {
      backgroundColor: '#1e293b',
      border: '1px solid #334155',
      padding: '10px 12px',
    },

    '.Tab:hover': {
      backgroundColor: '#020617',
      borderColor: '#334155',
    },

    '.Tab--selected': {
      backgroundColor: '#1e293b',
      borderColor: '#22c55e',
      boxShadow: '0 0 0 1px #22c55e',
    },

    /* Botão padrão do PaymentElement */
    '.Button': {
      backgroundColor: '#22c55e',
      color: '#020617',
      borderRadius: '10px',
      fontWeight: '600',
      padding: '12px',
    },

    '.Button:hover': {
      backgroundColor: '#16a34a',
    },

    '.Button:disabled': {
      backgroundColor: '#14532d',
      color: '#86efac',
    },

    /* Mensagens de erro */
    '.Error': {
      color: '#ef4444',
      fontSize: '13px',
      marginTop: '6px',
    },

    /* Dividers */
    '.Divider': {
      backgroundColor: '#1e293b',
    },
  },
};
