<template>
  <div class="px-5 py-5 flex flex-col gap-4">
    <div>
      <label for="name" class="text-xs mb-1"> Full Name* </label>
      <input
        @input="validateName"
        type="text"
        id="name"
        v-model="userName"
        class="w-full px-3 py-2 border border-[#EFEFEF] rounded-md outline-none shadow-sm"
        required
      />
      <p
        class="text-red-500 text-xs mt-1 min-h-4 transition-opacity duration-200"
        :class="[
          isSubmitClicked && nameErrorMessage ? 'opacity-100' : 'opacity-0',
        ]"
      >
        {{ nameErrorMessage }}
      </p>
    </div>
    <div>
      <label for="phone" class="text-xs mb-1"> Phone* </label>
      <ClientOnly>
        <vue-tel-input
          :key="inputKey"
          v-model="phoneNumber"
          v-bind="bindProps"
          required
          :class="[
            'vti-parent py-0.5 border !border-[#EFEFEF] shadow-sm !rounded-md !bg-transparent !outline-none focus-within:!shadow-none',
            errors.includes('phone') && phoneFocus
              ? 'focus-within:!border-red-500'
              : '',
          ]"
          @focus="setPhoneFocus(true)"
          @blur="setPhoneFocus(false)"
          @validate="onValidatePhoneNumber"
          @country-changed="onCountryChanged"
          @input="keepDialCode"
        />
      </ClientOnly>
      <p
        class="text-red-500 text-xs mt-1 transition-opacity duration-200"
        :class="[
          isSubmitClicked && !isValidPhoneNumber ? 'opacity-100' : 'opacity-0',
        ]"
      >
        Please enter valid phone number
      </p>
    </div>
    <div>
      <label for="email" class="text-xs mb-1"> Email* </label>
      <input
        @input="validateEmail"
        type="email"
        id="email"
        v-model="userEmail"
        class="w-full px-3 py-2 border border-[#EFEFEF] rounded-md outline-none shadow-sm"
        required
      />
      <p
        class="text-red-500 text-xs mt-1 min-h-4 transition-opacity duration-200"
        :class="[
          isSubmitClicked && emailErrorMessage ? 'opacity-100' : 'opacity-0',
        ]"
      >
        {{ emailErrorMessage }}
      </p>
    </div>
    <div>
      <label for="message" class="text-xs mb-1"> Message (Optional) </label>
      <textarea
        id="message"
        rows="4"
        v-model="message"
        class="resize-none w-full px-3 py-2 border border-[#EFEFEF] rounded-md outline-none shadow-sm"
      />
    </div>
    <button
      id="email-form-submit-button"
      @click="onSubmit"
      type="submit"
      :class="`text-white p-4 shadow rounded-lg bg-[#EA4335] w-full cursor-pointer`"
    >
      {{ isSubmittingForm ? "Please Wait..." : "Send Email" }}
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
const message = ref<string>("");
const isValidPhoneNumber = ref<boolean>();
const nameErrorMessage = ref<string>("");
const emailErrorMessage = ref<string>("");
const dialCode = ref<string>("");
const isSubmitClicked = ref<boolean>(false);
const inputKey = ref<number>(0);
const errors = ref<string[]>([]);
const phoneFocus = ref<boolean>(false);
const parsedPhoneNumber = ref<PhoneObject>();
const path = ref<string>("");
const isSubmittingForm = ref<boolean>(false);
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
    userName.value &&
    !nameErrorMessage.value &&
    userEmail.value &&
    !emailErrorMessage.value &&
    isValidPhoneNumber.value
  );
});
const onValidatePhoneNumber = (phoneObject: PhoneObject) => {
  isValidPhoneNumber.value = phoneObject.valid;
};
const validateName = () => {
  isSubmitClicked.value = false;
  const nameWithoutSpaces = userName.value.replace(/\s/g, "");
  if (!userName.value.trim()) {
    nameErrorMessage.value = "Please enter your name.";
  } else if (!/^[A-Za-z\s]+$/.test(userName.value)) {
    nameErrorMessage.value = "Only alphabets are allowed.";
  } else if (nameWithoutSpaces.length < 2) {
    nameErrorMessage.value = "minimum two letters";
  } else {
    nameErrorMessage.value = "";
  }
};
const validateEmail = () => {
  isSubmitClicked.value = false;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!userEmail.value.trim()) {
    emailErrorMessage.value = "Please enter your email.";
  } else if (userEmail.value && !emailPattern.test(userEmail.value)) {
    emailErrorMessage.value = "Please enter a valid email address.";
  } else {
    emailErrorMessage.value = "";
  }
};
const keepDialCode = () => {
  isSubmitClicked.value = false;
  if (!phoneNumber.value.startsWith(dialCode.value)) {
    phoneNumber.value = dialCode.value;
  }
};
const onCountryChanged = (country: { dialCode: string }) => {
  dialCode.value = "+" + country.dialCode;
};
const onSubmit = async () => {
  isSubmitClicked.value = true;
  if (!isFormDisable.value) {
    try {
      isSubmittingForm.value = true;
      await api.post("/Inquiry", {
        title: "Dubai Island LP",
        name: userName.value,
        phone: phoneNumber.value,
        email: userEmail.value || "N/A",
        message: message.value || "N/A",
        channel: "16",
        source: "19",
        page_url: path.value,
        form_name: `${appStore.formName}`,
        language: "English",
      });
      gtm?.trackEvent({
        event: "conversion_event_submit_lead_form",
        category: "Lead Submission",
        action: "click",
      });
      appStore.isEmailForm = false;
      appStore.saveToLocalStorage();

      router.push("/thankyou");
      userName.value = "";
      userEmail.value = "";
      phoneNumber.value = "";
    } catch (error) {
      console.log(error);
    } finally {
      isSubmittingForm.value = false;
    }
  }
};
onMounted(() => {
  validateName();
  validateEmail();
  path.value = `${window.location.origin}${router.currentRoute.value.fullPath}`;
});
</script>
