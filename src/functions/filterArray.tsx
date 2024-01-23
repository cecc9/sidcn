interface CategorizedStyles {
  View: any;
  Text: any;
}

export function categorizeStyles(styles: any): CategorizedStyles {
  const viewProperties: string[] = [
    'flex',
    'flexDirection',
    'justifyContent',
    'alignItems',
    'alignSelf',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'borderWidth',
    'borderColor',
    'borderRadius',
    'borderBottom',
    'borderTop',
    'borderLeft',
    'borderRight',
    'borderBottomWidth',
    'borderTopWidth',
    'borderLeftWidth',
    'borderRightWidth',
    'borderBottomColor',
    'borderTopColor',
    'borderLeftColor',
    'borderRightColor',
    'borderBottomLeftRadius', // Added properties
    'borderBottomRightRadius',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'width',
    'height',
    'maxWidth',
    'maxHeight',
    'minWidth',
    'minHeight',
    'position',
    'top',
    'right',
    'bottom',
    'left',
    'shadowColor',
    'shadowOffset',
    'shadowOpacity',
    'shadowRadius',
    'elevation',
    'backgroundColor',
  ];

  const textProperties: string[] = [
    'color',
    'fontSize',
    'lineHeight',
    'textAlign',
    'fontWeight',
    'fontFamily',
    'textDecorationLine',
    'textDecorationColor',
    'textDecorationStyle',
    'placeholderTextColor',
  ];

  const viewStyles: any = {};
  const textStyles: any = {};

  styles.forEach((style: any) => {
    for (const property in style) {
      if (viewProperties.includes(property)) {
        viewStyles[property] = style[property] || '';
      } else if (textProperties.includes(property)) {
        textStyles[property] = style[property] || '';
      }
    }
  });

  const finalViewStyles: any = Object.entries(viewStyles).map(
    ([key, value]) => ({
      [key]: value,
    })
  );
  const finalTextStyles: any = Object.entries(textStyles).map(
    ([key, value]) => ({
      [key]: value,
    })
  );

  return {
    View: finalViewStyles,
    Text: finalTextStyles,
  };
}
