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
    <div className="flex items-start">
      <input
        id="mortgage"
        type="checkbox"
        :checked="isFormChecked"
        v-model="isFormChecked"
        class="h-4 w-4 text-[#005BC9] border-gray-300 rounded cursor-pointer"
      />
      <label
        htmlFor="mortgage"
        class="ml-2 text-xs text-[#999B9B] cursor-pointer"
      >
        I am Interested in Dubai Real Estate Investment opportunities. Please
        contact me to provide more details
      </label>
    </div>
    <button
      @click="onSubmit"
      type="submit"
      :class="`text-white p-4 shadow rounded-lg bg-[#005BC9] w-full disabled:opacity-70 ${ isFormDisable ? 'cursor-not-allowed' : 'cursor-pointer' }`"
      :disabled="isFormDisable || !isFormChecked"
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

const userName = ref<string>("");
const userEmail = ref<string>("");
const isFormChecked = ref<boolean>(false);
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
