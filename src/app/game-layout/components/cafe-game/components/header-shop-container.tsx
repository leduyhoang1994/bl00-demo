import '@pixi/layout/react';
import '@pixi/layout';
import { LayoutContainer } from '@pixi/layout/components';
import { usePixiTexture } from "@/hooks/usePixiTexture";
import { fitRepeatTexture } from "@/utils/fitRepeatTexture";
import { useApplication, useExtend } from "@pixi/react"
import { Container, Graphics, Sprite, Text, Texture, TilingSprite } from "pixi.js";
import RenderIf from '@/utils/condition-render';

export default function HeaderShopContainer() {
  useExtend({ Sprite, Graphics, Text, TilingSprite, LayoutContainer, Container });
  const { app } = useApplication();
  const textureCurtain = usePixiTexture("/images/cafe-game/curtain.svg");
  const textureRibonUpgrade = usePixiTexture("/images/cafe-game/ribbon-upgrade.svg");
  const textureRibonMoney = usePixiTexture("/images/cafe-game/ribbon-money.svg");
  const curtainSpriteWidth = app.screen.width;
  const curtainSpriteHeight = app.screen.height / 5;
  const ribonUpgradeSpriteWidth = app.screen.width / 3.1;
  const ribonUpgradeSpriteHeight = curtainSpriteHeight / 1.3;
  const tilingProps = fitRepeatTexture(textureCurtain, curtainSpriteWidth, curtainSpriteHeight);

  return (
    <>
      <layoutContainer
        key={textureCurtain !== Texture.EMPTY ? "curtain-bg" : "curtain-bg-white"}
        layout={{
          width: curtainSpriteWidth,
          height: curtainSpriteHeight,
          justifyContent: 'space-between'
        }}
      >
        <RenderIf condition={textureCurtain !== Texture.EMPTY}>
          <pixiContainer layout={{}}>
            <pixiTilingSprite
              texture={textureCurtain}
              {...tilingProps}
            />
          </pixiContainer>
        </RenderIf>

        <layoutContainer
          layout={{
            width: curtainSpriteWidth,
            height: curtainSpriteHeight,
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <RenderIf condition={textureRibonUpgrade !== Texture.EMPTY}>
            <layoutContainer layout={{
              alignItems: 'center',
              width: ribonUpgradeSpriteWidth,
              height: ribonUpgradeSpriteHeight,
            }}>
              <pixiSprite
                texture={textureRibonUpgrade}
                layout={{
                  width: '100%',
                  height: '100%'
                }}
              />
              <pixiText
                layout={{
                  position: "absolute",
                  marginBottom: 30,
                  marginLeft: 20
                }}
                text={'Upgrades'}
                style={{
                  fontSize: 44,
                  fontWeight: '900',
                  fill: "white"
                }}
                resolution={2}
              />
            </layoutContainer>
          </RenderIf>
          <RenderIf condition={textureRibonMoney !== Texture.EMPTY}>
            <layoutContainer layout={{
              alignItems: 'center',
              width: ribonUpgradeSpriteWidth,
              height: ribonUpgradeSpriteHeight,
            }}>
              <pixiSprite
                texture={textureRibonMoney}
                layout={{
                  width: '100%',
                  height: '100%'
                }}
              />
              <pixiText
                layout={{
                  position: "absolute",
                  right: 0,
                  marginRight: 20
                }}
                text={'$0'}
                style={{
                  fontSize: 44,
                  fontWeight: '900',
                  fill: "white"
                }}
                resolution={2}
              />
            </layoutContainer>
          </RenderIf>
        </layoutContainer>
      </layoutContainer >

    </>
  );
}
