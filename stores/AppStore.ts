const useAppStore = defineStore("appStore",()=>{
    const formName = ref<string>("");
    const isExploreForm = ref<Boolean>(false);
    const isContactForm = ref<Boolean>(false);
    const isEmailForm = ref<Boolean>(false);
    const isAutoPopupModal = ref<Boolean>(false);
    const formPosition = ref('left')
    const preference = ref('1 BR Apartment')
    const isFormSubmitted = ref<Boolean>(false);
    const showAutoPopup = ref<Boolean>(true);

    const openExploreForm = (name:string, isOpen: boolean, position: string = 'left') => {
        formName.value = name;
        isExploreForm.value = isOpen;
        formPosition.value = position;
    }

    const openContactForm = (name:string, isOpen: boolean, preferance?: string) => {
        formName.value = name;
        isContactForm.value = isOpen;
        if(preferance){
            preference.value = preferance
        }
    }

    const openEmailForm = (name:string, isOpen: boolean) => {
        formName.value = name;
        isEmailForm.value = isOpen;
    }

    const openAutoPopupModal = (isOpen: boolean) => {
      isAutoPopupModal.value = isOpen;
    }

    const setPreference = (value: string) => {
        preference.value = value
    }

    const saveToLocalStorage = () => {
      localStorage.setItem("isFormSubmitted", "true");
    }

    const loadFromLocalStorage = () => {
      isFormSubmitted.value = localStorage.getItem("isFormSubmitted") === "true";
    }

    const setShowAutoPopup = (value: boolean) => {
      showAutoPopup.value = value
    }

    watchEffect(() => {
        if (typeof window !== "undefined" && document?.body) {
          if (isExploreForm.value || isContactForm.value || isEmailForm.value) {
            document.body.classList.add("overflow-hidden");
          } else {
            document.body.classList.remove("overflow-hidden");
          }
        }
      });

    return{
        formName,
        formPosition,
        isExploreForm,
        openExploreForm,
        isContactForm,
        openContactForm,
        isEmailForm,
        openEmailForm,
        preference,
        setPreference,
        isFormSubmitted,
        saveToLocalStorage,
        loadFromLocalStorage,
        isAutoPopupModal,
        showAutoPopup,
        setShowAutoPopup,
        openAutoPopupModal
    }
})

export default useAppStore;