import { mode } from '@chakra-ui/theme-tools';
export const globalStyles = {
  colors: {
    brand: {
      100: '#73C9A5',
      200: '#73C9A5',
      300: '#73C9A5',
      400: '#73C9A5',
      500: '#73C9A5',
      600: '#73C9A5',
      700: '#73C9A5',
      800: '#73C9A5',
      900: '#73C9A5',
    },
    brandScheme: {
      100: '#73C9A5',
      200: '#73C9A5',
      300: '#73C9A5',
      400: '#73C9A5',
      500: '#73C9A5',
      600: '#73C9A5',
      700: '#73C9A5',
      800: '#73C9A5',
      900: '#73C9A5',
    },
    brandTabs: {
      100: '#73C9A5',
      200: '#73C9A5',
      300: '#73C9A5',
      400: '#73C9A5',
      500: '#73C9A5',
      600: '#73C9A5',
      700: '#73C9A5',
      800: '#73C9A5',
      900: '#73C9A5',
    },
    secondaryGray: {
      100: '#73C9A5',
      200: '#73C9A5',
      300: '#73C9A5',
      400: '#73C9A5',
      500: '#73C9A5',
      600: '#73C9A5',
      700: '#73C9A5',
      800: '#73C9A5',
      900: '#73C9A5',
    },
    red: {
      100: '#FEEFEE',
      500: '#EE5D50',
      600: '#E31A1A',
    },
    blue: {
      50: '#EFF4FB',
      500: '#3965FF',
    },
    orange: {
      100: '#FFF6DA',
      500: '#FFB547',
    },
    green: {
      100: '#E6FAF5',
      500: '#01B574',
    },
    navy: {
      50: '#d0dcfb',
      100: '#aac0fe',
      200: '#a3b9f8',
      300: '#728fea',
      400: '#3652ba',
      500: '#1b3bbb',
      600: '#24388a',
      700: '#1B254B',
      800: '#111c44',
      900: '#0b1437',
    },
    gray: {
      100: '#FAFCFE',
    },
  },
  styles: {
    global: (props) => ({
      body: {
        overflowX: 'hidden',
        bg: mode('secondaryGray.300', 'navy.900')(props),
        fontFamily: 'DM Sans',
        letterSpacing: '-0.5px',
      },
      input: {
        color: 'gray.700',
      },
      html: {
        fontFamily: 'DM Sans',
      },
    }),
  },
};
