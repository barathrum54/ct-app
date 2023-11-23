<template>
  <v-row class="h-screen ma-0 pa-0">
    <v-col
      cols="12"
      md="6"
      class="bg-surface d-flex align-center justify-space-around flex-column pt-16 pb-10 ga-16 h-screen"
    >
      <!-- Registration Form Here -->
      <v-img
        class="mt-16"
        height="100%"
        width="100%"
        max-width="10rem"
        max-height="10rem"
        src="@/assets/image/instagram.svg"
      />
      <div class="d-flex flex-column align-center ga-10 w-100">
        <h1 class="font-weight-black">Giriş Yap</h1>
        <v-container class="px-lg-16">
          <v-form class="d-flex flex-column w-100">
            <v-text-field
              rounded="lg"
              variant="solo"
              autocomplete="null"
              label="Email adresinizi girin..."
              type="email"
              v-model="registerForm.email"
            >
              <template v-slot:prepend-inner>
                <i
                  aria-hidden="true"
                  class="v-icon notranslate mdi mdi-email text-primary-accent text-lg-h4 mr-3"
                ></i> </template
            ></v-text-field>
            <v-text-field
              rounded="lg"
              variant="solo"
              autocomplete="null"
              label="Şifrenizi girin..."
              :type="showPassword ? 'text' : 'password'"
              v-model="registerForm.password"
            >
              <template v-slot:prepend-inner>
                <i
                  aria-hidden="true"
                  class="v-icon notranslate mdi mdi-key text-primary-accent text-lg-h4 mr-3"
                ></i>
              </template>
              <template v-slot:append-inner>
                <v-icon
                  :class="showPassword ? 'text-primary' : 'text-primary-accent'"
                  @click="showPassword = !showPassword"
                >
                  {{ showPassword ? "mdi-eye" : "mdi-eye-off" }}
                </v-icon>
              </template></v-text-field
            >
            <v-checkbox
              v-model="consentChecked"
              color="primary"
              label="Checkbox"
              :error="consentCheckedError"
            >
              <template v-slot:label>
                <h5>
                  <a href="" class="text-decoration-none text-primary"
                    >Kullanım Sözleşmesi</a
                  >
                  ve
                  <a href="" class="text-decoration-none text-primary"
                    >Gizlilik Politikasını</a
                  >
                  okudum, kabul ediyorum.
                </h5>
              </template>
            </v-checkbox>
            <v-btn
              :loading="isLoading"
              class="py-8 d-flex text-capitalize text-lg rounded-lg"
              color="primary"
              @click="register"
              >Giriş Yap</v-btn
            >
          </v-form>
        </v-container>
      </div>
      <div class="d-flex flex-column justify-center align-center">
        <h4 class="text-primary-accent">Yardıma mı ihtiyacın var?</h4>
        <h4 class="text-primary-accent">
          Bize
          <a
            class="text-primary text-decoration-none"
            href="mailto:hello@cutegro.com"
            >hello@cutegro.com</a
          >
          adresinden ulaşabilirsin.
        </h4>
      </div>
    </v-col>
    <v-col
      cols="12"
      md="6"
      class="info-banner bg-primary d-flex align-center flex-column h-screen pt-16"
    >
      <v-img
        height="100%"
        width="100%"
        max-width="16rem"
        max-height="16rem"
        src="@/assets/image/lock.svg"
      />
      <h1 class="font-weight-black">Güvenliğiniz Bizim İçin Önemli</h1>
      <h3 class="font-weight-regular">
        Cutegro hesap güvenliğinizi ve kişisel verilerinizi korumak adına
        hesabın size ait olduğunu onaylamak ve sınırlara takılmamanız için
        Instagram girişinizi ister.
      </h3>
      <h3 class="font-weight-regular">
        Cutegro’da profilleri aratabilmek için bu gereklidir ve dilediğiniz
        zaman hesabınızdan çıkış yapabilirsiniz.
      </h3>
      <h3 class="font-weight-regular">
        Hesabınızı bağlarken telefonunuza login talebi gelirse bunu onaylayın.
      </h3>
      <h5 class="font-weight-regular">
        Not: Bazı durumlarda two-factor sorun çıkarabilir. Sorun yaşarsanız
        Two-factor’ü kapatıp giriş yaptıktan sonra yeniden açmanızı tavsiye
        ederiz.
      </h5>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useSnackbarStore } from "@/store/snackbar";
import { useUserStore } from "@/store/user";
import { ref } from "vue";
import { useRouter } from "vue-router";
const showPassword = ref(false);
const userStore = useUserStore();
const snackbarStore = useSnackbarStore();

const isLoading = ref(false);
const router = useRouter();

const consentChecked = ref(false);
const consentCheckedError = ref(false);

interface RegisterForm {
  email: string;
  password: string;
}

const registerForm = ref<RegisterForm>({
  email: "",
  password: "",
});

const register = async () => {
  consentCheckedError.value = false;
  if (!consentChecked.value) {
    snackbarStore.showError(
      "Lütfen kullanım sözleşmesini ve gizlilik politikasını okuyup kabul edin."
    );
    consentCheckedError.value = true;
    return;
  }
  isLoading.value = true;
  try {
    const res = await userStore.loginUser(
      registerForm.value.email,
      registerForm.value.password
    );
    snackbarStore.showMessage(res.message);
    router.push("/");
  } catch (error: any) {
    console.log(error);
    snackbarStore.showError(error);
  }
  isLoading.value = false;
};
</script>

<style scoped lang="scss">
@use "@/styles/settings";
@media screen and (min-width: 1280px) {
  .px-lg-16 {
    padding-inline: 150px !important;
  }
}
.info-banner {
  text-align: center;
  position: relative;
  padding-inline: 5%;
  gap: 30px;
  &::before {
    content: "";
    position: absolute;
    background-color: rgba($color: #fff, $alpha: 0.3);
    z-index: 2;
    width: 30%;
    height: 10%;
    border-radius: 0 0 50px 0;
    border: 1pt solid rgba($color: #fff, $alpha: 0.4);
    top: 0;
    left: 0;
  }
  &::after {
    content: "";
    position: absolute;
    background-color: rgba($color: #fff, $alpha: 0.3);
    z-index: 2;
    width: 30%;
    height: 10%;
    border-radius: 50px 0 0 0;
    border: 1pt solid rgba($color: #fff, $alpha: 0.4);
    bottom: 0;
    right: 0;
  }
}
</style>
