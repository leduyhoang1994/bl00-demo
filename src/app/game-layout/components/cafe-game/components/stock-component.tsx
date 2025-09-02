import { useExtend } from "@pixi/react";
import { Assets, Graphics } from "pixi.js";

export default function StockComponent({
  plateWidth = 100,
  plateHeight = 100,
  itemHeight = 120,
  textureItem = Assets.get('blook-toast') as import("pixi.js").Texture,
  i = 0,
  quantity = 10,
  doClickPlate = (i: number) => { },
}) {
  useExtend({ Graphics });
  const texturePlateActive = Assets.get('plate-active');
  const text = `${quantity}`;
  const fontSize = 14;
  const paddingX = 3;
  const textWidth = text.length * (fontSize * 0.6);
  const boxWidth = textWidth + paddingX * 2;
  const boxHeight = 20;

  const draw = (g: Graphics) => {
    g.clear();
    g.roundRect(0, 0, boxWidth, boxHeight, 5).fill({
      color: '#099faa',
    });
  }

  return (
    <>
      <layoutContainer layout={{
        position: "absolute",
        width: plateWidth,
        height: plateHeight,
        left: -20,
        top: (itemHeight - plateHeight) / 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}
        onClick={() => doClickPlate(i)}
      >
        <pixiSprite texture={texturePlateActive}
          layout={{
            width: "100%",
            height: "100%"
          }}
          interactive={true}
          eventMode="static"
          cursor="pointer"
        />
        <pixiSprite texture={textureItem}
          rotation={0}
          layout={{
            width: "65%",
            height: '70%',
            position: "absolute",
            marginBottom: 5,
            marginLeft: 0
          }} />
        <pixiContainer x={100} y={90}>
          <pixiGraphics draw={draw} />
          <pixiText
            text={text}
            style={{
              fontSize: 14,
              fontWeight: "700",
              fill: 'white',
            }}
            anchor={0.5}
            resolution={2}
            x={boxWidth / 2}
            y={boxHeight / 2}
          />
        </pixiContainer>
      </layoutContainer>
    </>
  )
}