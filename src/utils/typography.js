import Typography from 'typography';

const typography = new Typography({
  googleFonts: [
    {
      name: 'Song Myung',
      styles: ['400'],
    },
    {
      name: 'Nanum Gothic',
      styles: ['400', '700'],
    },
    {
      name: 'Noto Sans KR',
      styles: ['400'],
    },
  ],
  baseFontSize: '16px',
  headerFontFamily: ['Noto Sans KR'],
  bodyFontFamily: ['Noto Sans KR'],
});

export default typography;
