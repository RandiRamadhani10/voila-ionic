import { IonButtons, IonMenuButton, IonText, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonRouterOutlet, IonTitle, IonToolbar } from "@ionic/react";
import { home, settingsOutline, refresh, compass } from "ionicons/icons";
import React from "react";

const SideMenu = (data) => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton menu="side-menu" color="dark"></IonMenuButton>
            <IonText className="center">{data.prop}</IonText>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonMenu content-id="main" menu-id="side-menu">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem routerLink="/home">
              <IonIcon icon={home} slot="start"></IonIcon>
              <IonLabel>Home</IonLabel>
            </IonItem>
            <IonItem routerLink="/accountsetting">
              <IonIcon icon={settingsOutline} slot="start"></IonIcon>
              <IonLabel>Account Setting</IonLabel>
            </IonItem>
            <IonItem routerLink="/history">
              <IonIcon icon={refresh} slot="start"></IonIcon>
              <IonLabel>History</IonLabel>
            </IonItem>
            <IonItem routerLink="/outlet">
              <IonIcon icon={compass} slot="start"></IonIcon>
              <IonLabel>Outlet</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="main"></IonRouterOutlet>
    </>
  );
};

export default SideMenu;
