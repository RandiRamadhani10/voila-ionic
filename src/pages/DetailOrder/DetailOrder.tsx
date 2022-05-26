import { IonCard, IonLabel, IonButton, IonIcon, IonCol, IonContent, IonGrid, IonPage, IonImg, IonAlert, IonButtons, IonHeader, IonItem, IonList, IonMenuButton, IonTitle, IonToolbar, IonRow } from "@ionic/react";
import React, { useState } from "react";
import { home, arrowBack, refresh, share, add, remove } from "ionicons/icons";
import "./style.css";
const DetailOrder: React.FC = () => {
  return (
    <IonPage id="account-page">
      <IonHeader>
        <IonToolbar>
          <IonButton routerLink="/home" color="warning">
            <IonIcon icon={arrowBack} size="small" slot="icon-only"></IonIcon>
          </IonButton>
          <IonTitle>Detail Order</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-text-center">
        <IonGrid>
          <IonRow>
            <IonCol>
              <div id="parent-detail">
                <div id="location">
                  <span>
                    <IonIcon icon={share} size="small" slot="icon-only"></IonIcon>
                  </span>
                  <span>Share Your Location</span>
                </div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow id="list">
            <IonCol id="items">
              <IonRow>
                <IonCol size="7">
                  <p>Sate Kambing</p>
                </IonCol>
                <IonCol>
                  <p id="end">Rp.20.000</p>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <button id="button">
                    <IonImg src="https://pic.onlinewebfonts.com/svg/img_89918.png"></IonImg>
                  </button>
                </IonCol>
                <IonCol className="ion-align-self-center">
                  <span>3</span>
                </IonCol>
                <IonCol>
                  <button id="button">
                    <IonImg src="https://pic.onlinewebfonts.com/svg/img_27125.png"></IonImg>
                  </button>
                </IonCol>
                <IonCol size="8"></IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
          <IonRow id="list">
            <IonCol id="items">
              <IonRow>
                <IonCol size="7">
                  <p>Es teh</p>
                </IonCol>
                <IonCol>
                  <p id="end">Rp.30.000</p>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <button id="button">
                    <IonImg src="https://pic.onlinewebfonts.com/svg/img_89918.png"></IonImg>
                  </button>
                </IonCol>
                <IonCol className="ion-align-self-center">
                  <span>3</span>
                </IonCol>
                <IonCol>
                  <button id="button">
                    <IonImg src="https://pic.onlinewebfonts.com/svg/img_27125.png"></IonImg>
                  </button>
                </IonCol>
                <IonCol size="8"></IonCol>
              </IonRow>
            </IonCol>
          </IonRow>

          <IonRow id="last">
            <IonCol id="items">
              <IonRow>
                <IonCol size="7">
                  <p>Total</p>
                </IonCol>
                <IonCol>
                  <p id="end">Rp.50.000</p>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
        <div id={"button-shop"}>
          <IonButton color="warning" routerLink="/payment">
            Payment
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DetailOrder;
