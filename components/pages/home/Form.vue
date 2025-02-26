<template>
  <div class="p-6 bg-white w-full rounded-3xl">
    <h2 class="text-xl 2xl:text-2xl text-[#181A20] font-normal">
      Register Your Interest
    </h2>
    <div class="mt-1 2xl:mt-3">
      <div>
        <h3 class="text-lg 2xl:text-xl mb-2">Select your Preference</h3>
        <div class="flex flex-wrap gap-2">
          <div
            v-for="(pref, idx) in preferenceOptions"
            @click="appStore.setPreference(pref.value)"
            class="min-w-[177px] text-lg border py-2 2xl:py-3 px-3 flex gap-3 items-center rounded-xl 2xl:rounded-2xl w-[48%] cursor-pointer transition-all ease-in-out duration-200"
            :class="{
              'border-[#1EBEF1] bg-[#1EBEF1] text-white':
                appStore.preference === pref.value,
            }"
          >
            <div
              class="min-w-5 h-5 rounded-full outline outline-2 border-4 border-white outline-[#1EBEF1] bg-[#1EBEF1]"
            />
            <p class="text-nowrap text-sm xl:text-base">{{ pref.label }}</p>
          </div>
        </div>
      </div>
      <div class="mt-4 flex flex-col">
        <div>
          <input
            @input="validateName"
            type="text"
            v-model="userName"
            placeholder="Full Name"
            class="border border-[#D8D8D8] w-full rounded-xl py-2 2xl:py-4 px-4 outline-none"
            :class="{
              '!border-red-500': isSubmitClicked && nameErrorMessage,
            }"
          />
          <p
            class="text-red-500 text-xs min-h-5 mt-1 transition-opacity duration-200"
            :class="[
              isSubmitClicked && nameErrorMessage ? 'opacity-100' : 'opacity-0',
            ]"
          >
            {{ nameErrorMessage }}
          </p>
        </div>
        <div>
          <ClientOnly>
            <vue-tel-input
              :key="inputKey"
              v-model="phoneNumber"
              v-bind="bindProps"
              required
              :class="{
                'vti-parent px-2 h-[42px] 2xl:h-[58px] border !border-[#D8D8D8] text-sm !rounded-xl !bg-transparent !outline-none focus-within:!shadow-none': true,
                '!border-red-500': isSubmitClicked && !isValidPhoneNumber,
              }"
              @validate="onValidatePhoneNumber"
              @country-changed="onCountryChanged"
              @input="keepDialCode"
            />
          </ClientOnly>
          <p
            class="text-red-500 text-xs min-h-5 mt-1 transition-opacity duration-200"
            :class="[
              isSubmitClicked && !isValidPhoneNumber
                ? 'opacity-100'
                : 'opacity-0',
            ]"
          >
            Please enter valid phone number
          </p>
        </div>
        <div>
          <input
            @input="validateEmail"
            type="text"
            v-model="userEmail"
            placeholder="Email"
            class="border border-[#D8D8D8] w-full rounded-xl py-2 2xl:py-4 px-4 outline-none"
            :class="{
              '!border-red-500': isSubmitClicked && emailErrorMessage,
            }"
          />
          <p
            class="text-red-500 text-xs min-h-5 mt-1 transition-opacity duration-200"
            :class="[
              isSubmitClicked && emailErrorMessage
                ? 'opacity-100'
                : 'opacity-0',
            ]"
          >
            {{ emailErrorMessage }}
          </p>
        </div>
        <div class="w-full mt-1">
          <button
            @click="onSubmit"
            :class="`w-full bg-[#1EBEF1] text-white hover:shadow-md py-3 rounded-xl hover:bg-[#1EA9F9]`"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import useAppStore from "~/stores/AppStore";
import type { PhoneObject } from "~/types/app";

const router = useRouter();
const { api } = useApi();
const appStore = useAppStore();

const props = defineProps<{
  formName: string;
}>();

const userName = ref<string>("");
const userEmail = ref<string>("");
const phoneNumber = ref<string>("");
const path = ref<string>("");
const inputKey = ref<number>(0);
const isValidPhoneNumber = ref<boolean>();
const country = ref<string>("");
const nameErrorMessage = ref<string>("");
const emailErrorMessage = ref<string>("");
const dialCode = ref<string>("");
const isSubmitClicked = ref<boolean>(false);
const preferenceOptions = [
  {
    label: "4 BR Townhouse",
    value: "4 BR Townhouse",
  },
  {
    label: "5 BR Townhouse",
    value: "5 BR Townhouse",
  },
  {
    label: "6 BR Villa",
    value: "6 BR Villa",
  },
  {
    label: "7 BR Villa",
    value: "7 BR Villa",
  },
];

const bindProps = {
  validCharactersOnly: true,
  required: true,
  inputOptions: {
    showDialCode: true,
  },
};

const isFormDisable = computed(() => {
  return !(
    userName.value &&
    !nameErrorMessage.value &&
    isValidPhoneNumber.value
  );
});

const onValidatePhoneNumber = (phoneObject: PhoneObject) => {
  isValidPhoneNumber.value = phoneObject.valid;
  country.value = phoneObject.country || phoneObject.countryCode || "";
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

  if (userEmail.value && !emailPattern.test(userEmail.value)) {
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

const onSubmit = async () => {
  isSubmitClicked.value = true;
  if (!isFormDisable.value) {
    try {
      await api.post("/Inquiry", {
        title: "Damac Island LP",
        name: userName.value,
        phone: phoneNumber.value,
        email: userEmail.value || "N/A",
        comment: appStore.preference,
        channel: "14",
        source: "5",
        page_url: path.value,
        form_name: props.formName,
        country: country.value,
      });
      userName.value = "";
      userEmail.value = "";
      phoneNumber.value = "";
      appStore.saveToLocalStorage();
      router.push("/thankyou");
    } catch (error) {
      console.log(error);
    }
  }
};
const onCountryChanged = (country: { dialCode: string }) => {
  dialCode.value = "+" + country.dialCode;
};
onMounted(() => {
  validateName();
  validateEmail();
  path.value = `${window.location.origin}${router.currentRoute.value.fullPath}`;
});
</script>
