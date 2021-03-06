import { IonCard, IonLabel, IonButton, IonIcon, IonCol, IonContent, IonGrid, IonPage, IonImg, IonAlert, IonButtons, IonHeader, IonItem, IonList, IonMenuButton, IonTitle, IonToolbar, IonRow } from "@ionic/react";
import React, { useState } from "react";
import SideMenu from "../../components/SideMenu/SideMenu";
import { home, settingsOutline, add, remove, cart } from "ionicons/icons";
import "./style.css";
const Order: React.FC = () => {
  return (
    <IonPage id="account-page">
      <SideMenu prop={"Order Menu"} />
      <IonContent class="ion-text-center" style={{ position: "relative" }}>
        <IonGrid>
          <IonGrid>
            <IonRow>
              <IonCol class={"items"}>all</IonCol>
              <IonCol class={"items"}>fish</IonCol>
              <IonCol class={"items"}>beef</IonCol>
              <IonCol class={"items"}>chicken</IonCol>
            </IonRow>
            <IonRow>
              <IonCol class={"items"}>pork</IonCol>
              <IonCol class={"items"}>vegetable</IonCol>
              <IonCol class={"items"}>desert</IonCol>
              <IonCol class={"items"}>drink</IonCol>
            </IonRow>
            <IonRow>
              <IonCard style={{ width: "90%" }} class="">
                <IonImg src="https://asset.kompas.com/crops/89gV9XIgLw8Tzv2im_h4C9aEjd8=/0x0:993x662/750x500/data/photo/2021/03/27/605ed24c33816.jpg"></IonImg>
                <IonCol class="">
                  <IonLabel className="type-text" color="dark" position="floating">
                    <IonRow>
                      <IonGrid>
                        <IonRow>
                          <IonCol size="4" style={{ width: "30%" }} className="ion-align-self-center">
                            <h3>Sate Kambing</h3>
                          </IonCol>
                          <IonCol>
                            <IonRow className="ion-align-self-center">
                              <IonCol>
                                <button id="button">
                                  <IonImg src="https://pic.onlinewebfonts.com/svg/img_89918.png"></IonImg>
                                </button>
                              </IonCol>
                              <IonCol className="ion-align-self-center">
                                <span>Rp.30.000</span>
                              </IonCol>
                              <IonCol>
                                <button id="button">
                                  <IonImg src="https://pic.onlinewebfonts.com/svg/img_27125.png"></IonImg>
                                </button>
                              </IonCol>
                            </IonRow>
                          </IonCol>
                        </IonRow>
                      </IonGrid>
                    </IonRow>
                  </IonLabel>
                </IonCol>
              </IonCard>

              <IonCard style={{ width: "90%" }} class="">
                <IonImg src="https://www.masakapahariini.com/wp-content/uploads/2018/04/resep-gulai-kambing-sederhana-780x440.jpg"></IonImg>
                <IonCol class="">
                  <IonLabel className="type-text" color="dark" position="floating">
                    <IonRow>
                      <IonGrid>
                        <IonRow>
                          <IonCol size="4" style={{ width: "30%" }} className="ion-align-self-center">
                            <h3>Gulai Kambing</h3>
                          </IonCol>
                          <IonCol>
                            <IonRow className="ion-align-self-center">
                              <IonCol>
                                <button id="button">
                                  <IonImg src="https://pic.onlinewebfonts.com/svg/img_89918.png"></IonImg>
                                </button>
                              </IonCol>
                              <IonCol className="ion-align-self-center">
                                <span>Rp.30.000</span>
                              </IonCol>
                              <IonCol>
                                <button id="button">
                                  <IonImg src="https://pic.onlinewebfonts.com/svg/img_27125.png"></IonImg>
                                </button>
                              </IonCol>
                            </IonRow>
                          </IonCol>
                        </IonRow>
                      </IonGrid>
                    </IonRow>
                  </IonLabel>
                </IonCol>
              </IonCard>
            </IonRow>
          </IonGrid>
        </IonGrid>
        <div id={"button-shop"}>
          <IonButton color="warning" routerLink="/detail">
            <IonIcon icon={cart} size="large" slot="icon-only"></IonIcon>
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Order;
