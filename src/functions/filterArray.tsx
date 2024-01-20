export function categorizeStyles(styles) {
    const viewProperties = ["flex", "flexDirection", "justifyContent", "alignItems", "alignSelf", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "borderWidth", "borderColor", "borderRadius", "width", "height", "maxWidth", "maxHeight", "minWidth", "minHeight", "position", "top", "right", "bottom", "left", "shadowColor", "shadowOffset", "shadowOpacity", "shadowRadius", "elevation", "backgroundColor"];

    const textProperties = ["color", "fontSize", "lineHeight", "textAlign", "fontWeight", "fontFamily", "textDecorationLine", "textDecorationColor", "textDecorationStyle", "placeholderTextColor"];

    const viewStyles = {};
    const textStyles = {};

    styles.forEach(style => {
        for (const property in style) {
            if (viewProperties.includes(property)) {
                viewStyles[property] = style[property];
            } else if (textProperties.includes(property)) {
                textStyles[property] = style[property];
            }
        }
    });

    const finalViewStyles = Object.entries(viewStyles).map(([key, value]) => ({ [key]: value }));
    const finalTextStyles = Object.entries(textStyles).map(([key, value]) => ({ [key]: value }));

    return {
        View: finalViewStyles,
        Text: finalTextStyles,
    };
}
