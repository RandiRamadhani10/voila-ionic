import { IonCard, IonLabel, IonButton, IonIcon, IonCol, IonContent, IonGrid, IonPage, IonImg, IonAlert, IonButtons, IonHeader, IonItem, IonList, IonMenuButton, IonTitle, IonToolbar, IonRow } from "@ionic/react";
import React, { useState } from "react";
import SideMenu from "../../components/SideMenu/SideMenu";
import { home, settingsOutline, refresh } from "ionicons/icons";
const History: React.FC = () => {
  return (
    <IonPage id="account-page">
      <SideMenu prop={"history"} />
      <IonContent class="ion-text-center">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton style={{ width: "100%" }} color="warning" routerLink="/detail">
                Order#2218
              </IonButton>
              <IonButton style={{ width: "100%" }} color="warning" routerLink="/detail">
                Order#2219
              </IonButton>
              <IonButton style={{ width: "100%" }} color="warning" routerLink="/detail">
                Order#2220
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default History;
