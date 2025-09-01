import '@pixi/layout/react';
import '@pixi/layout';
import { LayoutContainer } from '@pixi/layout/components';
import { useExtend } from '@pixi/react';
import { Graphics, Sprite, Texture } from 'pixi.js';
import { usePixiTexture } from '@/hooks/usePixiTexture';
import RenderIf from '@/utils/condition-render';
import { useCallback } from 'react';

export default function ItemShopContainer({
  name = "Toast",
  price = 0,
  description = '',
  image = '',
  disablePlate = false,
  itemWidth = 250,
  itemHeight = 120,
  rotation = false
}) {
  useExtend({ LayoutContainer, Sprite, Graphics });

  const texturePlateActive = usePixiTexture("/images/cafe-game/plate-active.svg");
  const textureItem = usePixiTexture(image);
  const borderColor = '#4d4d4d';
  const shadowColor = '#5a5a5a';
  const mainColor = '#757575';
  const textColor = '#3a3a3a';
  const borderWidth = 4;

  const itemRadius = 10;
  const shadowHeight = 5;
  const widthPlate = 100;
  const heightPlate = 100;

  const drawItem = useCallback(
    (g: Graphics) => {
      g.clear();
      g.roundRect(0, 0, itemWidth, itemHeight, itemRadius).fill({
        color: borderColor,
      });
      g.roundRect(
        borderWidth,
        borderWidth,
        itemWidth - borderWidth * 2,
        itemHeight - borderWidth * 2,
        itemRadius - borderWidth
      ).fill({ color: shadowColor });
      g.roundRect(
        borderWidth,
        borderWidth,
        itemWidth - borderWidth * 2,
        itemHeight - borderWidth * 2 - shadowHeight,
        itemRadius - borderWidth
      ).fill({ color: mainColor });
    },
    [
      itemWidth,
      itemHeight,
      itemRadius,
      mainColor,
      borderColor,
      shadowColor,
      shadowHeight,
      borderWidth,
    ]
  );

  return (
    <>
      <RenderIf condition={texturePlateActive != Texture.EMPTY && textureItem != Texture.EMPTY}>
        <layoutContainer
          layout={{
            width: itemWidth,
            height: itemHeight,
            flexDirection: "row",
          }}
        >
          <layoutContainer layout={{
            width: '100%',
            height: '100%'
          }}
          >
            <pixiGraphics draw={drawItem} />
          </layoutContainer>
          <layoutContainer
            layout={{
              flexDirection: 'column',
              alignItems: "flex-end",
              justifyContent: "flex-start",
              width: itemWidth / 2,
              paddingRight: 10,
              paddingTop: 15,
            }}
          >
            <pixiText
              text={name}
              layout={{}}
              style={{
                fontSize: 18,
                fontWeight: "700",
                fill: textColor,
              }}
              anchor={0.5}
              resolution={2}
            />
            <pixiText
              text={description}
              layout={{
                marginTop: 0,
                objectFit: 'fill',
                width: itemWidth / 1.6,
              }}
              style={{
                fontSize: 14,
                fontWeight: "700",
                fill: textColor,
                wordWrap: true,
                wordWrapWidth: 200,
                align: "right",
              }}
              anchor={0.5}
              resolution={2}
            />
            <pixiText
              text={`$${price}`}
              layout={{
                marginTop: 10
              }}
              style={{
                fontSize: 30,
                fontWeight: "700",
                fill: textColor,
              }}
              anchor={0.5}
              resolution={2}
            />
          </layoutContainer>
          <layoutContainer layout={{
            position: "absolute",
            width: widthPlate,
            height: heightPlate,
            left: -20,
            top: (itemHeight - heightPlate) / 2,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <RenderIf condition={!disablePlate}>
              <pixiSprite texture={texturePlateActive}
                layout={{
                  width: "100%",
                  height: "100%"
                }} />
            </RenderIf>
            <pixiSprite texture={textureItem}
              rotation={rotation ? -0.25 : 0}
              layout={{
                width: !disablePlate ? "65%" : "90%",
                height: !disablePlate ? "70%" : '90%',
                position: "absolute",
                marginBottom: 5,
                marginLeft: rotation ? 10 : 0
              }} />
          </layoutContainer>
        </layoutContainer>
      </RenderIf>
    </>
  )
}