import '@pixi/layout/react';
import '@pixi/layout';
import { LayoutContainer } from '@pixi/layout/components';
import HeaderShopContainer from './header-shop-container';
import { useApplication, useExtend } from '@pixi/react';
import BodyShopContainer from './body-shop-container';
import ButtonLayout from '../../button-layout/button-layout';
import CafeGameStore from '@/stores/cafe-game-store/cafe-game-store';

export default function ShopContainer() {
  useExtend({ LayoutContainer });
  const { app } = useApplication();
  const { setToggleAbilitiShop, setToggleVisitShop, toggleAbilitiShop, loadCafeShopItems, loadCafeAbilities } = CafeGameStore();
  const appHeight = app.screen.height;
  const appWidth = app.screen.width;
  const buttonContainerWidth = appWidth * 0.95;
  const buttonContainerHeight = appHeight / 9;
  const buttonWidth = appWidth / 4;

  const doClickToggleAbilitesAndShop = () => {
    console.log('doClickToggleAbilitesAndShop');
    setToggleAbilitiShop(!toggleAbilitiShop);
    loadCafeAbilities();
    loadCafeShopItems();
  }

  const doClickExitShop = () => {
    console.log('doClickExitShop');
    setToggleAbilitiShop(false);
    setToggleVisitShop(false);
  }

  return (
    <>
      <layoutContainer layout={{
        width: app.screen.width,
        height: app.screen.height,
        flexDirection: "column",
        backgroundColor: "white"
      }}>
        <HeaderShopContainer />
        <BodyShopContainer />
        <pixiContainer
          label="Button Table cafe-game"
          width={buttonContainerWidth}
          height={buttonContainerHeight}
          x={(appWidth - buttonContainerWidth) / 2}
          y={appHeight - buttonContainerHeight - 10}
        >
          <ButtonLayout
            btnWidth={buttonWidth}
            btnText={!toggleAbilitiShop ? "Abilities" : "Upgrades"}
            doClickBtn={doClickToggleAbilitesAndShop}
          />
          <ButtonLayout
            btnWidth={buttonWidth}
            btnText="Exit Shop"
            doClickBtn={doClickExitShop}
            btnContainerX={buttonContainerWidth - buttonWidth}
          />
        </pixiContainer>
      </layoutContainer>
    </>
  )
}
