import "@pixi/layout/react";
import "@pixi/layout";
import { LayoutContainer } from "@pixi/layout/components";
import { useExtend } from "@pixi/react";
import { Assets, Sprite, Texture } from "pixi.js";
import RenderIf from "@/utils/condition-render";
import ItemShopContainer, { ItemType } from "./item-shop-container";
import CafeGameStore from "@/stores/cafe-game-store/cafe-game-store";
import React from "react";

const BodyShopContainer = () => {
  useExtend({ LayoutContainer, Sprite });
  const { toggleAbilitiShop, cafeShopItems, cafeStocks, cafeAbilitiesItems } =
    CafeGameStore();

  const textureWallShop = Assets.get("wall-shop");

  return (
    <layoutContainer
      layout={{
        flex: 1,
        gap: 200,
        position: "relative",
      }}
    >
      <RenderIf condition={textureWallShop !== Texture.EMPTY}>
        <layoutContainer
          layout={{
            width: "50%",
          }}
        >
          <pixiSprite
            texture={textureWallShop}
            layout={{
              width: "100%",
              height: "100%",
            }}
          />
        </layoutContainer>
        <layoutContainer
          layout={{
            width: "50%",
          }}
        >
          <pixiSprite
            texture={textureWallShop}
            layout={{
              width: "100%",
              height: "100%",
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
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 30,
            paddingTop: 20,
          }}
        >
          {cafeStocks.map((dataStock, i) => {
            const enabled = cafeShopItems[i].enabled;
            console.log(dataStock);
            
            const currentReward =
              dataStock.rewardPrices[dataStock.currentIndexLevel] || 0;
            const nextReward =
              dataStock.rewardPrices[dataStock.currentIndexLevel + 1] || null;

            const description = `$${currentReward} ${nextReward ? "→" : ""} ${
              "$" + nextReward
            }`;
            const max =
              dataStock.currentIndexLevel === dataStock.rewardPrices.length - 1;

            return (
              <ItemShopContainer
                key={i}
                {...dataStock}
                priceSell={
                  max
                    ? "MAX"
                    : dataStock.sellPrices[dataStock.currentIndexLevel + 1]
                }
                enabled={enabled}
                type={ItemType.SHOP}
                description={max ? `$${currentReward}` : description}
              />
            );
          })}
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
          }}
        >
          {cafeAbilitiesItems.map((item, i) => {
            const enabled = item.enabled;
            const price = item.price;
            return (
              <ItemShopContainer
                key={i}
                {...item}
                itemWidth={300}
                itemHeight={130}
                rotation={true}
                disablePlate={true}
                enabled={enabled}
                priceSell={price}
                type={ItemType.ABILITIES}
              />
            );
          })}
        </layoutContainer>
      </RenderIf>
    </layoutContainer>
  );
};

export default React.memo(BodyShopContainer);
