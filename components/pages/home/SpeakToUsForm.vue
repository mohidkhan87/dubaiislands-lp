<template>
  <div class="px-5 py-5 flex flex-col gap-5">
    <div>
      <input
        type="text"
        id="name"
        v-model="userName"
        class="w-full px-3 py-4 bg-[#F7F7F7] border border-[#EFEFEF] rounded-md outline-none"
        placeholder="Full Name *"
        required
      />
    </div>
    <div class="bg-[#F7F7F7] rounded-md">
      <ClientOnly>
        <vue-tel-input
          :key="inputKey"
          v-model="phoneNumber"
          v-bind="bindProps"
          required
          :class="[
            'vti-parent py-3 border !border-[#EFEFEF] !rounded-md !bg-transparent !outline-none focus-within:!shadow-none',
            errors.includes('phone') && phoneFocus
              ? 'focus-within:!border-red-500'
              : '',
          ]"
          @focus="setPhoneFocus(true)"
          @blur="setPhoneFocus(false)"
          @validate="(phoneObject: PhoneObject) => (parsedPhoneNumber = phoneObject)"
        />
      </ClientOnly>
    </div>
    <div>
      <input
        type="email"
        id="email"
        v-model="userEmail"
        class="w-full px-3 py-4 bg-[#F7F7F7] border border-[#EFEFEF] rounded-md outline-none"
        placeholder="E-mail"
      />
    </div>
    <button
      id="speak-to-us-form-submit-button"
      @click="onSubmit"
      type="submit"
      :class="`text-white p-4 shadow rounded-lg bg-[#005BC9] w-full disabled:opacity-70 ${ isFormDisable ? 'cursor-not-allowed' : 'cursor-pointer' }`"
      :disabled="isFormDisable"
    >
      {{ isSubmittingForm ? 'Please Wait...' : 'Speak to us now' }}
    </button>
  </div>
</template>
<script setup lang="ts">
import useAppStore from "~/stores/AppStore";
import type { PhoneObject } from "~/types/app";

const { api } = useApi();
const router = useRouter();
const appStore = useAppStore();
const gtm = useGtm();

const userName = ref<string>("");
const userEmail = ref<string>("");
const phoneNumber = ref<string>("");

const inputKey = ref<number>(0);
const errors = ref<string[]>([]);
const phoneFocus = ref<boolean>(false);
const parsedPhoneNumber = ref<PhoneObject>();
const path = ref<string>("");
const isSubmittingForm = ref<boolean>(false)

const bindProps = {
  validCharactersOnly: true,
  required: true,
  inputOptions: {
    showDialCode: true,
  },
};
const setPhoneFocus = (status: boolean) => (phoneFocus.value = status);

const isFormDisable = computed(() => {
  return !(
    userName.value != "" &&
    phoneNumber.value != "" &&
    phoneNumber.value.length > 5
  );
});

const onSubmit = async () => {
  try {
    isSubmittingForm.value = true
    await api.post("/Inquiry", {
      title: "Dubai Island LP",
      name: userName.value,
      phone: phoneNumber.value,
      email: userEmail.value || "N/A",
      channel: "16",
      source: "19",
      page_url: path.value,
      form_name: `${appStore.formName}`,
    });
    gtm?.trackEvent({
      event: 'conversion_event_submit_lead_form',
      category: 'Lead Submission',
      action: 'click',
    })
    appStore.isExploreForm = false;
    appStore.saveToLocalStorage();

    router.push("/thankyou");
    userName.value = "";
    userEmail.value = "";
    phoneNumber.value = "";
  } catch (error) {
    console.log(error);
  } finally {
    isSubmittingForm.value = false
  }
};

onMounted(() => {
  path.value = `${window.location.origin}${router.currentRoute.value.fullPath}`;
});
</script>
