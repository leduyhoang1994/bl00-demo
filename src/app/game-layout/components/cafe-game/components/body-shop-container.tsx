import '@pixi/layout/react';
import '@pixi/layout';
import { LayoutContainer } from '@pixi/layout/components';
import { useExtend } from '@pixi/react';
import { Sprite, Texture } from 'pixi.js';
import { usePixiTexture } from '@/hooks/usePixiTexture';
import RenderIf from '@/utils/condition-render';
import ItemShopContainer from './item-shop-container';

export default function BodyShopContainer() {
  useExtend({ LayoutContainer, Sprite });
  const textureWallShop = usePixiTexture("/images/cafe-game/wall-shop.svg");
  const items = [
    { name: "Toast", price: 300, image: '/images/cafe-game/blook-toast.svg' },
    { name: "Cereal", price: 5, image: '/images/cafe-game/blook-cereal.svg' },
    { name: "Yogurt", price: 10, image: '/images/cafe-game/blook-yogurt.svg' },
    { name: "Breakfast Combo", price: 50, image: '/images/cafe-game/blook-breakfast.svg' },
    { name: "Orange Juice", price: 200, image: '/images/cafe-game/blook-orange-carton.svg' },
    { name: "Milk", price: 500, image: '/images/cafe-game/blook-milk-carton.svg' },
    { name: "Waffle", price: 2000, image: '/images/cafe-game/blook-waffle.svg' },
    { name: "Pancakes", price: 5000, image: '/images/cafe-game/blook-pancake.svg' },
    { name: "French Toast", price: 7500, image: '/images/cafe-game/blook-french-waffle.svg' },
    { name: "Café Level", price: 2500, image: '/images/cafe-game/blook-cafe-level.svg', disablePlate: true },
  ]

  return (
    <layoutContainer
      layout={{
        flex: 1,
        gap: 200,
        position: 'relative'
      }}>
      <RenderIf condition={textureWallShop !== Texture.EMPTY}>
        <layoutContainer
          layout={{
            width: "50%"
          }}>
          <pixiSprite
            texture={textureWallShop}
            layout={{
              width: "100%",
              height: "100%"
            }}
          />
        </layoutContainer>
        <layoutContainer
          layout={{
            width: "50%"
          }}>
          <pixiSprite
            texture={textureWallShop}
            layout={{
              width: "100%",
              height: "100%"
            }}
            scale={{ x: -1, y: 1 }}
          />
        </layoutContainer>
      </RenderIf>

      <layoutContainer
        layout={{
          position: "absolute",
          width: "100%",
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 30, // khoảng cách giữa các item
          paddingTop: 20
        }}
      >
        {items.map((item, i) => (
          <ItemShopContainer key={i} {...item} />
        ))}
      </layoutContainer>
    </layoutContainer>
  )
}