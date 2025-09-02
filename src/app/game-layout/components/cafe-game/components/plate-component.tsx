import { Assets } from "pixi.js";
import StockComponent from "./stock-component";
import RenderIf from "@/utils/condition-render";

export default function PlateComponent({
  i = 0,
  x = 0,
  y = 0,
  plateWidth = 100,
  plateHeight = 100,
  enabled = false,
  quantity = 0,
  textureItem = Assets.get('blook-toast') as import("pixi.js").Texture,
}) {
  const texturePlate = Assets.get('plate');

  const doClickPlate = (i: number) => {
    console.log(1111, i);

  }

  return (
    <>
      <RenderIf condition={!enabled}>
        <pixiSprite
          key={i}
          texture={texturePlate}
          x={x}
          y={y}
          width={plateWidth}
          height={plateHeight}
        />
      </RenderIf>
      <RenderIf condition={enabled}>
        <pixiContainer x={x} y={y}>
          <StockComponent
            quantity={quantity}
            doClickPlate={doClickPlate}
            plateWidth={plateWidth}
            plateHeight={plateHeight}
            textureItem={textureItem}
          />
        </pixiContainer>
      </RenderIf>

    </>
  )
}