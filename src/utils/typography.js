import Typography from 'typography'
import {
  MOBILE_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
} from 'typography-breakpoint-constants'
import gray from 'gray-percentage'

const fontFamily = [
  '-apple-system',
  'Roboto',
  'Helvetica Neue',
  'Droid Sans',
  'Hiragino Sans',
  'ヒラギノ角ゴ Pro W3',
  'Hiragino Kaku Gothic Pro',
  'ヒラギノ角ゴシック',
  'メイリオ',
  'Meiryo',
  'Osaka',
  'ＭＳ Ｐゴシック',
  'MS PGothic',
  'sans-serif',
]

const typography = new Typography({
  title: 'Sutro',
  baseFontSize: '16px',
  baseLineHeight: '32px',
  '-webkit-font-smoothing': 'antialiased',
  headerFontFamily: fontFamily,
  bodyFontFamily: fontFamily,
  bodyColor: '#333',
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    a: {
      color: '#2358ce',
      textDecoration: 'none',
    },
    'a:hover,a:active': {
      textDecoration: 'underline',
    },
    blockquote: {
      ...scale(1 / 5),
      color: gray(41),
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      marginLeft: 0,
      borderLeft: `${rhythm(3 / 16)} solid ${gray(80)}`,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    ul: {
      listStyle: 'disc',
    },
    'li, li > p, li > ul': {
      marginBottom: 0,
      marginTop: 0,
    },
    [MOBILE_MEDIA_QUERY]: {
      'ul,ol': {
        marginLeft: rhythm(1),
      },
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16),
      },
    },
    [TABLET_MEDIA_QUERY]: {
      h1: {
        ...scale(5 / 5),
      },
    },
    'h1,h2,h3,h4,h5,h6': {
      marginBottom: rhythm(1/2),
      marginTop: rhythm(1),
    },
    h1: {
      ...scale(6 / 5),
    },
    h6: {
      fontStyle: 'italic',
    },
    p: {
      marginBottom: rhythm(1),
    },
    'div.gatsby-highlight': {
      marginTop: rhythm(1),
      marginBottom: rhythm(3/4),
    },
    small: {
      fontSize: '.9rem',
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
