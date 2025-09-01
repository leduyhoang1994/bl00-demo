import '@pixi/layout/react';
import '@pixi/layout';
import { LayoutContainer } from '@pixi/layout/components';
import { useExtend } from '@pixi/react';
import { Sprite, Texture } from 'pixi.js';
import { usePixiTexture } from '@/hooks/usePixiTexture';
import RenderIf from '@/utils/condition-render';
import ItemShopContainer from './item-shop-container';
import CafeGameStore from '@/stores/cafe-game-store/cafe-game-store';

const ITEM_WIDTH = 200;

export default function BodyShopContainer() {
  useExtend({ LayoutContainer, Sprite });
  const { toggleAbilitiShop } = CafeGameStore();
  const textureWallShop = usePixiTexture("/images/cafe-game/wall-shop.svg");
  const items = [
    { name: "Toast", price: 300, description: '', image: '/images/cafe-game/blook-toast.svg' },
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

  const itemsAbilities = [
    {
      name: "Paycheck Bonus",
      description: "Give a player +25% of their balance",
      price: 500,
      image: "/images/cafe-game/abilities-paycheck.svg",
      disablePlate: true,
    },
    {
      name: "Supply Crate",
      description: "+7 stock of all your foods",
      price: 1000,
      image: "/images/cafe-game/abilites-supply.svg",
      disablePlate: true,
    },
    {
      name: "Happy Customers",
      description: "Your next 5 customers pay double",
      price: 2500,
      image: "/images/cafe-game/abilities-happy.svg",
      disablePlate: true,
    },
    {
      name: "Trash the Food",
      description: "Lower a player's food stocks by 3 each",
      price: 5000,
      image: "/images/cafe-game/abilites-trash.svg",
      disablePlate: true,
    },
    {
      name: "TAXES!!!",
      description: "Reduce a player's balance by 25%",
      price: 7500,
      image: "/images/cafe-game/abilites-taxes.svg",
      disablePlate: true,
    },
    {
      name: "Health Inspection",
      description: "Force a player to get an 8s health inspection",
      price: 10000,
      image: "/images/cafe-game/abilites-health.svg",
      disablePlate: true,
    },
    {
      name: "Run It Back",
      description: "Be able to buy all your abilities again",
      price: 150000,
      image: "/images/cafe-game/abilities-run.svg",
      disablePlate: true,
    }
  ];


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
      <RenderIf condition={!toggleAbilitiShop}>
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
      </RenderIf>
      <RenderIf condition={toggleAbilitiShop}>
        <layoutContainer
          layout={{
            position: "absolute",
            width: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 30,
            paddingTop: 20,
            // ép mỗi hàng chỉ chứa tối đa 3 item
          }}
        >
          {itemsAbilities.map((item, i) => (
            <ItemShopContainer key={i} {...item} itemWidth={300} itemHeight={130} rotation={true} />
          ))}
        </layoutContainer>
      </RenderIf>
    </layoutContainer >
  )
}