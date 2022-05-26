import { IonCard, IonCol, IonContent, IonGrid, IonImg, IonLabel, IonPage, IonRow, IonIcon, IonButton } from "@ionic/react";
import { title } from "process";
import React from "react";
import SideMenu from "../../components/SideMenu/SideMenu";

import { home, arrowBack, compass } from "ionicons/icons";
const Home: React.FC = () => {
  return (
    <IonPage>
      <SideMenu props={"Home"} />
      <IonContent class="ion-text-center">
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1>Voila</h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <a id="order" href="./order">
                <IonImg id="img" src="https://pic.onlinewebfonts.com/svg/img_122138.png" alt="" />
                <span>Order</span>
              </a>
            </IonCol>
            <IonCol>
              <a id="history" href="./history">
                <IonImg id="img" src="https://pic.onlinewebfonts.com/svg/img_190848.png" alt="" />
                <span>History</span>
              </a>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <a id="outlet" href="./outlet">
                <IonImg id="img" src="https://pic.onlinewebfonts.com/svg/img_466233.png" alt="" />
                <span>Outlet</span>
              </a>
            </IonCol>
            <IonCol>
              <a id="account" href="./settingaccount">
                <IonImg id="img" src="https://pic.onlinewebfonts.com/svg/img_242.png" alt="" />
                <span>Account</span>
              </a>
            </IonCol>
          </IonRow>
        </IonGrid>
        {/* <IonGrid class="ion-text-center">
          <IonCard style={{ width: "90%" }} class="ion-text-center">
            <IonCol class="ion-text-center">
              <IonImg src="https://asset.kompas.com/crops/K3yRtga4WYTNBr2kHKNe8GILyn0=/0x0:4044x2696/375x240/data/photo/2021/03/19/6054801497f35.jpg"></IonImg>
              <IonLabel className="type-text" color="dark" position="floating">
                <h1>Steak</h1>
              </IonLabel>
            </IonCol>
          </IonCard>

          <IonCard style={{ width: "90%" }} class="ion-text-center">
            <IonCol class="ion-text-center">
              <IonImg src="https://asset.kompas.com/crops/89gV9XIgLw8Tzv2im_h4C9aEjd8=/0x0:993x662/750x500/data/photo/2021/03/27/605ed24c33816.jpg"></IonImg>
              <IonLabel className="type-text" color="dark" position="floating">
                <h1>Sate</h1>
              </IonLabel>
            </IonCol>
          </IonCard>

          <IonCard style={{ width: "90%" }} class="ion-text-center">
            <IonCol class="ion-text-center">
              <IonImg src="https://www.masakapahariini.com/wp-content/uploads/2018/04/resep-gulai-kambing-sederhana-780x440.jpg"></IonImg>
              <IonLabel className="type-text" color="dark" position="floating">
                <h1>Gulai</h1>
              </IonLabel>
            </IonCol>
          </IonCard>

          <IonCard style={{ width: "90%" }} class="ion-text-center">
            <IonCol class="ion-text-center">
              <IonImg src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/750x500/photo/2020/10/03/3500578333.jpg"></IonImg>
              <IonLabel className="type-text" color="dark" position="floating">
                <h1>Mie</h1>
              </IonLabel>
            </IonCol>
          </IonCard>

          <IonCard style={{ width: "90%" }} class="ion-text-center">
            <IonCol class="ion-text-center">
              <IonImg src="https://img.okezone.com/content/2019/01/01/298/1998591/camilan-sore-bikin-somay-ayam-yuk-474wMQ3PPv.jpg"></IonImg>
              <IonLabel className="type-text" color="dark" position="floating">
                <h1>Siomay</h1>
              </IonLabel>
            </IonCol>
          </IonCard>

          <IonCard style={{ width: "90%" }} class="ion-text-center">
            <IonCol class="ion-text-center">
              <IonImg src="https://img.okezone.com/content/2020/11/29/298/2318085/apa-sebabnya-harga-lobster-di-restoran-begitu-mahal-kCDTBMfX9Z.jpg"></IonImg>
              <IonLabel className="type-text" color="dark" position="floating">
                <h1>Lobster</h1>
              </IonLabel>
            </IonCol>
          </IonCard>

          <IonCard style={{ width: "90%" }} class="ion-text-center">
            <IonCol class="ion-text-center">
              <IonImg src="https://awsimages.detik.net.id/community/media/visual/2019/07/02/497e52a2-52b1-4e93-8b27-a2fc75027f44_43.jpeg?w=700&q=90"></IonImg>
              <IonLabel className="type-text" color="dark" position="floating">
                <h1>Nasi Tim</h1>
              </IonLabel>
            </IonCol>
          </IonCard>
        </IonGrid> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
