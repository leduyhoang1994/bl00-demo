import { useCallback } from 'react';
import { Graphics, TextStyle, Text } from 'pixi.js';
import { useExtend } from '@pixi/react';

export default function ButtonLayout({
  btnWidth = 300,
  btnHeight = 80,
  btnRadius = 10,
  btnText = "Visit Shop",
  btnContainerX = 0,
  btnContainerY = 0,
  doClickBtn = () => { }

}) {
  useExtend({ Graphics, Text });

  const buttonWidth = btnWidth;
  const buttonHeight = btnHeight;
  const radius = btnRadius;

  // --- Màu sắc ---
  const mainColor = '#099FAA';
  const borderColor = '#0e6b71';
  const textColor = '#FFFFFF';
  const shadowColor = '#118891';
  const shadowHeight = 5;
  const borderWidth = 4;

  const draw = useCallback((g: Graphics) => {
    g.clear();
    g.roundRect(0, 0, buttonWidth, buttonHeight, radius)
      .fill({ color: borderColor });
    g.roundRect(
      borderWidth,
      borderWidth,
      buttonWidth - borderWidth * 2,
      buttonHeight - borderWidth * 2,
      radius - borderWidth
    ).fill({ color: shadowColor });
    g.roundRect(
      borderWidth,
      borderWidth,
      buttonWidth - borderWidth * 2,
      buttonHeight - borderWidth * 2 - shadowHeight,
      radius - borderWidth
    ).fill({ color: mainColor });
  }, [
    buttonWidth,
    buttonHeight,
    radius,
    mainColor,
    borderColor,
    shadowColor,
    shadowHeight,
    borderWidth,
  ]);

  const textStyle = new TextStyle({
    fontFamily: 'Arial, sans-serif',
    fontSize: '30%',
    fontWeight: '700',
    fill: textColor,
    align: 'center',
  });

  return (
    <pixiContainer x={btnContainerX} y={btnContainerY}>
      <pixiGraphics
        draw={draw}
        eventMode="static"
        cursor="pointer"
        onClick={doClickBtn}
      />
      <pixiText
        text={btnText}
        style={textStyle}
        anchor={0.5}
        x={buttonWidth / 2}
        y={buttonHeight / 2}
        resolution={2}
      />
    </pixiContainer>
  );
}