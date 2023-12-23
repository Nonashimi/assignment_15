<template>
  <div class="">
<ChartsCircleVue data = "75"></ChartsCircleVue>
    <ChartsBar :arr ="arr"></ChartsBar>
    <ChartsLine></ChartsLine>
    <formGridSystem></formGridSystem>
    <formDatePicker></formDatePicker>
    <formProfileImage src = "https://thicc-af.mywaifulist.moe/waifus/yuta-okkotsu-sorcery-fight/3DQkg87cFXIigaUzRunm7v3bLXIWTc9BLePplwFu.jpg?class=thumbnail" width = "100px"></formProfileImage>
    <formText label = "Text" color = "Green" size = "30px" fontWeight = "600"></formText>
    <formImageVue width = "500px" src = "https://ichef.bbci.co.uk/images/ic/640x360/p06vcwwr.jpg"></formImageVue>
    <formLoader></formLoader>
    <formDivider></formDivider>
    <formDrawers></formDrawers>
    <formTabs></formTabs>
    <formNavBar></formNavBar>
    <formLinkGroups></formLinkGroups>
    <formNavigation></formNavigation>
    <formListGroup></formListGroup>
    <formTags></formTags>
    <formPagination current="4"></formPagination>
    <formBreadVrumbVue :items = "breadcrumbItems" bacColor="purple"></formBreadVrumbVue>
    <formSearchBar placeholder="Введите текст" ></formSearchBar>
    <formSildeBarVue></formSildeBarVue>
<formPageFooter></formPageFooter>
<formPageHeader></formPageHeader>

    <formList title="item" text="sdfbgnhmfbdvscaxcdsvfdbgf"></formList>
  <formFormTables></formFormTables>

 <formImageCarousel></formImageCarousel>
<formIconsVue size = "120px" iconType = "hippo" color="purple"></formIconsVue>
    <formAlert></formAlert>
    <FormModalWindow></FormModalWindow>
<MessageBoxForm></MessageBoxForm>
    <ToolTipsForm><button>Olzhas</button></ToolTipsForm>
    <proggressBar value="34%"></proggressBar>
<LabelAndBadges></LabelAndBadges>

   <slidersForm max="100"></slidersForm>
   <formCollapse title = "Collapse"></formCollapse>

    <FormAccardion title="Accardion"></FormAccardion>

   <TextInput label="Введите текст: " placeholder="Enter Text" ></TextInput>
   <EmailInput label = "Email" placeholder="xxxx@gmail.com"></EmailInput>
   <PasswordInput label = "Введите пороль: " placeholder="Enter Password" ></PasswordInput>
   <NumberInput></NumberInput>
   <FileInput></FileInput>
   <dateTimePicker label="Date:" ></dateTimePicker>
   <fromTextArea label="textArea: "></fromTextArea>
   <formSelect label ="Choose: "></formSelect>
   <formCheckbox label ="Choose checkBoxes:" text="Olzhas"></formCheckbox>
   <formRadioVue text="GGG"></formRadioVue>
   <formToggles></formToggles>
   <button_button></button_button>
   <groupButton></groupButton>
   <FormCards title = "Card title" subtitle = "subtitle"></FormCards>

   
  </div>
</template>

<script >
 import EmailInput from "@/components/EmailInput.vue";
import TextInput from "@/components/TextInput.vue"
import PasswordInput from "./components/passwordInput.vue";
import NumberInput from "./components/NumberInput.vue";
import FileInput from "./components/FileInput.vue";
import dateTimePicker from "./components/dateTimePicker.vue";
import formSelect from "./components/formSelect.vue";
import fromTextArea from "./components/fromTextArea.vue";
import formCheckbox from "./components/formCheckbox.vue";
import formRadioVue from "./components/formRadio.vue";
import formToggles from "./components/formToggles.vue";
import button_button from "./components/button_button.vue";
import groupButton from "./components/groupButton.vue";
import FormCards from "./components/FormCards.vue";
import FormAccardion from "./components/FormAccardion.vue";
import formCollapse from "./components/formCollapse.vue";
import slidersForm from "./components/slidersForm.vue";
import LabelAndBadges from "./components/LabelAndBadges.vue";
import proggressBar from "./components/proggressBar.vue";
import ToolTipsForm from "./components/TooolTipsForm.vue";
import MessageBoxForm from "./components/MessageBoxForm.vue";
import FormModalWindow from "./components/FormModalWindow.vue";
import formAlert from "./components/formAlert.vue";
import formIconsVue from "./components/formIcons.vue";
import formImageCarousel from "./components/formImageCarousel.vue";
import formFormTables from "./components/FormTables.vue";
import formList from "./components/formList.vue";
import formPageHeader from "./components/formPageHeader.vue";
import formPageFooter from "./components/formPageFooter.vue";
import formSildeBarVue from "./components/formSildeBar.vue";
import formSearchBar from "./components/formSearchBar.vue";
import formBreadVrumbVue from "./components/formBreadVrumb.vue";
import formPagination from "./components/formPagination.vue";
import formTags from "./components/formTags.vue";
import formListGroup from "./components/formListGroup.vue";
import formNavigation from "./components/formNavigation.vue";
import formLinkGroups from "./components/formLinkGroups.vue";
import formNavBar from "./components/formNavbar.vue";
import formTabs from "./components/formTabs.vue";
import formDrawers from "./components/formDrawers.vue";
import formLoader from "./components/formLoader.vue";
import formDivider from "./components/formDivider.vue";
import formImageVue from "./components/formImage.vue";
import formText from "./components/formText.vue";
import formProfileImage from "./components/formProfileImage.vue";
import formDatePicker from "./components/formDatePicker.vue"; 
import formGridSystem from "./components/formGridSystem.vue";
import ChartsLine from "./components/ChartsLine.vue";
import ChartsBar from "./components/ChartsBar.vue";
import ChartsCircleVue from "./components/ChartsCircle.vue";
export default{
  components:{
    TextInput,
    EmailInput,
    PasswordInput,
    NumberInput,
    FileInput,
    dateTimePicker,
    formSelect,
    fromTextArea,
    formCheckbox,
    formRadioVue,
    formToggles,
    button_button,
    groupButton,
    FormCards,
    FormAccardion,
    formCollapse,
    slidersForm,
    LabelAndBadges,
    proggressBar,
    ToolTipsForm,
    MessageBoxForm,
    FormModalWindow,
    formAlert,
    formIconsVue,
    formImageCarousel,
    formFormTables,
    formList,
    formPageHeader,
    formPageFooter,
    formSildeBarVue,
    formSearchBar,
    formBreadVrumbVue,
    formPagination,
    formTags,
    formListGroup,
    formNavigation,
    formLinkGroups,
    formNavBar,
     formTabs,
     formDrawers,
     formLoader,
     formDivider,
     formImageVue,
     formText,
     formProfileImage,
     formDatePicker,
     formGridSystem,
     ChartsLine,
     ChartsBar,
     ChartsCircleVue
   
    
},
data(){
  return{
    breadcrumbItems: [
        { label: 'Главная', route: '/' },
        { label: 'Категория', route: '/category' },
        { label: 'Подкатегория', route: '/category/subcategory' },
      ],
      arr: [50, 30, 70, 10, 100,1,12,40,20,50]
  }
}
};
</script>


<style>
body{
  margin: 0;
}
</style>