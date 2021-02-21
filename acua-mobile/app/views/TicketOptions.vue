
<!-- Page Controlls the Main view of ticket selction. Changeing templet will change the text under the options in the
      scroll bar.
            List Picker:
                creates the text wheel, which is populated by the object returned by the script
            Label:
                just a way to make plain text on app.
            StackLayout:
                allows you o populate the bottom portion of -->

<template>
    <Page>
        <ActionBar title="Ticket Reason" class="Action_Bar" />
        <GridLayout columns="*,2*" rows="*, *" class="cover">
            
            <ScrollView orientation="vertical" row="0" col="0" rowSpan="2" >
                <StackLayout orientation="vertical">

                    <!-- Adoption Button -->
                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/animals.icon.png" 
                     v-if="isAdoption" :title="choices[0]" :action="adoption" class="fa homepage-blue ButtonSelected" textWrap="true"/>

                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/animals.icon.png" 
                     v-else :title="choices[0]" :action="adoption" class="fa homepage-blue Button" textWrap="true"/>

                    <!-- Intake Button -->
                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/boneOutline.png" 
                     v-if="isIntake" :title="choices[1]" :action="intake" class="fa homepage-blue ButtonSelected" textWrap="true"/>

                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/boneOutline.png" 
                     v-else :title="choices[1]" :action="intake" class="fa homepage-blue Button" textWrap="true"/>

                    <!-- Pet License Button -->
                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/license.icon.png" 
                     v-if="isPetLicense" :title="choices[2]" :action="petLicense" class="fa homepage-blue ButtonSelected" textWrap="true"/>

                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/license.icon.png" 
                     v-else :title="choices[2]" :action="petLicense" class="fa homepage-blue Button" textWrap="true"/>

                    <!-- Microchip Button -->
                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/doggo.png" 
                     v-if="isMicrochip" :title="choices[3]" :action="microchip" class="fa homepage-blue ButtonSelected" textWrap="true"/>

                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/doggo.png" 
                     v-else :title="choices[3]" :action="microchip" class="fa homepage-blue Button" textWrap="true"/>
                    
                    <!-- Service Request Button -->
                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/services.icon.png" 
                     v-if="isServiceRequest " :title="choices[4]" :action="serviceRequest" class="fa homepage-blue ButtonSelected" textWrap="true"/>

                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/services.icon.png" 
                     v-else :title="choices[4]" :action="serviceRequest" class="fa homepage-blue Button" textWrap="true"/>

                    <!-- Medical Button -->
                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/medical1.png" 
                     v-if="isMedical " :title="choices[5]" :action="medical" class="fa homepage-blue ButtonSelected" textWrap="true"/>

                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/medical1.png" 
                     v-else :title="choices[5]" :action="medical" class="fa homepage-blue Button" textWrap="true"/>

                    <!-- Disposal Button -->
                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/phoneicon.png" 
                     v-if="isDisposal " :title="choices[6]" :action="disposal" class="fa homepage-blue ButtonSelected" textWrap="true"/>

                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/phoneicon.png" 
                     v-else :title="choices[6]" :action="disposal" class="fa homepage-blue Button" textWrap="true"/>

                    <!-- Donate Button -->
                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/moneyOutline.png" 
                     v-if="isDonate " :title="choices[7]" :action="donate" class="fa homepage-blue ButtonSelected" textWrap="true"/>

                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/moneyOutline.png" 
                     v-else :title="choices[7]" :action="donate" class="fa homepage-blue Button" textWrap="true"/>
                     
                    <!-- Other Button -->
                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/achouse.png" 
                     v-if="isOther " :title="choices[8]" :action="other" class="fa homepage-blue ButtonSelected" textWrap="true"/>

                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/achouse.png" 
                     v-else :title="choices[8]" :action="other" class="fa homepage-blue Button" textWrap="true"/>
                     

                </StackLayout>
            </ScrollView>


            <!-- Get Started tab -->
            <GridLayout orientation="vertical" col="1" rowSpan="2" columns="*,2*" rows="auto,auto,auto,auto,auto" v-show="isHome">
                <Label text="Get Started" class="titleText1" col="1" row="0" rowSpan="2"/>
                <TextView text="  Please select the" class="infoText" col="1" row="2"/> 
                <TextView text="reason for your visit" class="infoText" col="1" row="3"/>
                <Image src="~/assets/images/arrowUpLeft.png" col="0" row="1"/>
                <Image src="~/assets/images/arrowDownLeft.png" col="0" row="3"/>
            </GridLayout>

            <!--Adoption Info Tab -->
            <GridLayout orientation="vertical" col="1" rowSpan="2" columns="*,*,*,*,*" rows="*,*,*,*,*,*,7*,*" v-show="isAdoption">
                <Label text="Adoption" row="0" col="1" colSpan="3" rowSpan="2" class="titleText"/>
                <TextView editable="false" :text="'Continue if you wish to:'" class="infoText" col="1" colSpan="3" row="2"/>
                <TextView editable="false" :text="'- sign up to adopt an animal'" class="infoText" col="1" colSpan="4" row="3"/>
                <TextView editable="false" :text="'- intrested in adopting an animal'" class="infoText" col="1" colSpan="4" row="4"/>
                <TextView editable="false" :text="'- return recently adopted animal'" class="infoText" col="1" colSpan="4" row="5"/>
                <Image src="~/assets/images/group-of-pets.png" col="1" row="6" colSpan="3"/>
                <Button text="Next >>" class="button" col="1" row="7" colSpan="3" @tap="createTicket('Adoption')"/>
            </GridLayout>
            <!--Intake Info Tab -->
            <GridLayout orientation="vertical" col="1" rowSpan="2" columns="*,*,*,*,*" rows="*,*,*,*,*,*,*,*,6*" v-show="isIntake">
                <Label text="Intake" row="0" col="1" colSpan="3" rowSpan="2" class="titleText"/>
                <TextView editable="false" :text="'Continue if you are visiting for:'" class="infoText" col="1" colSpan="4" row="2" rowSpan="2"/>
                <TextView editable="false" :text="'- Stray Intake'" class="infoText" col="1" colSpan="4" row="3"/>
                <TextView editable="false" :text="'- Owner Surrender Intake'" class="infoText" col="1" colSpan="4" row="4"/>
                <TextView editable="false" :text="''" class="infoText" col="1" colSpan="4" row="5"/> 
                <Button text="Next >>" class="button" col="1" row="7" colSpan="3" @tap="createTicket('Intake')"/>
            </GridLayout>
            <!--Pet License Info Tab -->
             <GridLayout orientation="vertical" col="1" rowSpan="2" columns="*,*,*,*,*" rows="*,*,*,*,*,*,*,*,6*" v-show="isPetLicense">
                <Label text="Pet License" row="0" col="1" colSpan="3" rowSpan="2" class="titleText"/>
                <TextView editable="false" :text="'Continue if you wish to:'" class="infoText" col="1" colSpan="4" row="2"/>
                <TextView editable="false" :text="'- Purchase Licenses'" class="infoText" col="1" colSpan="4" row="3"/>
                <TextView editable="false" :text="'- Renew License'" class="infoText" col="1" colSpan="4" row="4"/>
                <TextView editable="false" :text="'- Replace License'" class="infoText" col="1" colSpan="4" row="5"/> 
                <Button text="Next >>" class="button" col="1" row="7" colSpan="3" @tap="createTicket('Pet License')"/>
            </GridLayout>
            <!--Microchip Info Tab -->
            <GridLayout orientation="vertical" col="1" rowSpan="2" columns="*,*,*,*,*" rows="*,*,*,*,*,*,*,*,6*" v-show="isMicrochip">
                <Label text="Microchip" row="0" col="1" colSpan="3" rowSpan="2" class="titleText"/>
                <TextView editable="false" :text="'Continue if you wish to:'" class="infoText" col="1" colSpan="4" row="2"/>
                <TextView editable="false" :text="'- microchip your animal.'" class="infoText" col="1" colSpan="4" row="3"/>
                <TextView editable="false" :text="'- obtain more information'" class="infoText" col="1" colSpan="4" row="4"/>
                <Button text="Next >>" class="button" col="1" row="7" colSpan="3" @tap="createTicket('Microchip')"/>
            </GridLayout>
            <!--Service Request Info Tab -->
            <GridLayout orientation="vertical" col="1" rowSpan="2" columns="*,*,*,*,*" rows="*,*,*,*,*,*,*,*,*,*,4*" v-show="isServiceRequest">
                <Label text="Service Request" row="0" col="1" colSpan="3" rowSpan="2" class="titleText"/>
                <TextView editable="false" :text="'Continue if you wish to request'" class="infoText" col="1" colSpan="5" row="2" rowSpan="2"/>
                <TextView editable="false" :text="'service for non-emergency'" class="infoText" col="1" colSpan="4" row="3" rowSpan="2"/>
                <TextView editable="false" :text="'situations such as:'" class="infoText" col="1" colSpan="4" row="4" rowSpan="2"/>
                <TextView editable="false" :text="'- Stray Animal'" class="infoText" col="1" colSpan="4" row="5"/>
                <TextView editable="false" :text="'- Dog Bit (non-emergency)'" class="infoText" col="1" colSpan="4" row="6"/>
                <TextView editable="false" :text="'- Dead Animal Pickup'" class="infoText" col="1" colSpan="4" row="7"/> 
                <Button text="Next >>" class="button" col="1" row="9" colSpan="3" @tap="createTicket('Service Request')"/>
            </GridLayout>
            <!--Medical Info Tab -->
            <GridLayout orientation="vertical" col="1" rowSpan="2" columns="*,*,*,*,*" rows="*,*,*,*,*,*,*,6*,*" v-show="isMedical">
                <Label text="Medical" row="0" col="1" colSpan="3" rowSpan="2" class="titleText"/>
                <TextView editable="false" :text="'Continue if your visit is regarding:'" class="infoText" col="1" colSpan="5" row="2" rowSpan="2"/>
                <TextView editable="false" :text="'- Spay & Neuter'" class="infoText" col="1" colSpan="4" row="3" rowSpan="2"/>
                <TextView editable="false" :text="'- Vaccinations'" class="infoText" col="1" colSpan="4" row="4" rowSpan="2"/>
                <TextView editable="false" :text="'- Show Proof of Rabies'" class="infoText" col="1" colSpan="4" row="5"/>
                <Image src="~/assets/images/petvaccination.png" col="1" row="6" colSpan="3" rowSpan = "2"/>
                <Button text="Next >>" class="button" col="1" row="8" colSpan="3" @tap="createTicket('Medica;')"/>
            </GridLayout>
            <!--Disposal Info Tab -->
            <GridLayout orientation="vertical" col="1" rowSpan="2" columns="*,*,*,*,*" rows="*,*,*,*,*,*,*,6*,*" v-show="isDisposal">
                <Label text="Disposal" row="0" col="1" colSpan="3" rowSpan="2" class="titleText"/>
                <TextView editable="false" :text="'Continue if you wish to:'" class="infoText" col="1" colSpan="5" row="2" rowSpan="2"/>
                <TextView editable="false" :text="'- make a disposal request'" class="infoText" col="1" colSpan="4" row="3" rowSpan="2"/>
                <Button text="Next >>" class="button" col="1" row="6" colSpan="3" @tap="createTicket('Disposal')"/>
            </GridLayout>
            <!--Donate Info Tab -->
            <GridLayout orientation="vertical" col="1" rowSpan="2" columns="*,*,*,*,*" rows="*,*,*,*,*,*,*,*,6*" v-show="isDonate">
                <Label text="Donate" row="0" col="1" colSpan="3" rowSpan="2" class="titleText"/>
                <TextView editable="false" :text="'Continue if you wish to:'" class="infoText" col="1" colSpan="5" row="2" rowSpan="2"/>
                <TextView editable="false" :text="'- make a donation to the Animal'" class="infoText" col="1" colSpan="4" row="3" rowSpan="2"/>
                <TextView editable="false" :text="'   Care and Control Center'" class="infoText" col="1" colSpan="4" row="4"/>
                <Button text="Next >>" class="button" col="1" row="7" colSpan="3" @tap="createTicket('Donate')"/>
            </GridLayout>
            <!--Other Info Tab -->
            <GridLayout orientation="vertical" col="1" rowSpan="2" columns="*,*,*,*,*" rows="*,*,*,*,*,*,*,*,6*" v-show="isOther">
                <Label text="Other" row="0" col="1" colSpan="3" rowSpan="2" class="titleText"/>
                <TextView editable="false" :text="'Continue if you are:'" class="infoText" col="1" colSpan="5" row="2" rowSpan="2"/>
                <TextView editable="false" :text="'- here for any other reason'" class="infoText" col="1" colSpan="4" row="3" rowSpan="2"/>
                <Button text="Next >>" class="button" col="1" row="7" colSpan="3" @tap="createTicket('Donate')"/>
            </GridLayout>

        </GridLayout>
    </Page>
</template>

<script>
    import Home from './Home.vue'
    import TicketForm from './TicketForm.vue'
    import CategoryButton from "@/components/buttons/CategoryButton.vue"

    export default {
        data() {
            return {
                choices: [
                    'Adoption',
                    'Intake',
                    'Pet Licenses',
                    'Microchip',
                    'Service Request',
                    'Medical',
                    'Disposal',
                    'Donate',
                    'Other'
                ],
                otherText: '',
                selectedIndex: 0,
                isHome: true,
                isAdoption: false,
                isIntake: false,
                isPetLicense: false,
                isMicrochip: false,
                isServiceRequest: false,
                isMedical: false,
                isDisposal: false,
                isDonate: false,
                isOther: false,
                ticketForm: TicketForm,
            }
        },
        methods: {
            toHome() {
                this.$navigateTo(this.home)
            },
            createTicket(reasonForVisit) {
                this.$navigateTo(this.ticketForm, {props: {reasonForVisit: reasonForVisit}})
            },
            selectedIndexChanged() {
                if (this.selectedIndex >= 1)
                    this.isTicket = true
                else
                    this.isTicket = false
            },
            home(){
                this.isHome = true;
                this.isAdoption = false;
                this.isIntake = false;
                this.isPetLicense = false;
                this.isMicrochip = false;
                this.isServiceRequest = false;
                this.isMedical = false;
                this.isDisposal = false;
                this.isDonate = false;
                this.isOther = false;
            },
            adoption(){
                this.isHome = false;
                this.isAdoption = true;
                this.isIntake = false;
                this.isPetLicense = false;
                this.isMicrochip = false;
                this.isServiceRequest = false;
                this.isMedical = false;
                this.isDisposal = false;
                this.isDonate = false;
                this.isOther = false;
            },
            intake(){
                this.isHome = false;
                this.isAdoption = false;
                this.isIntake = true;
                this.isPetLicense = false;
                this.isMicrochip = false;
                this.isServiceRequest = false;
                this.isMedical = false;
                this.isDisposal = false;
                this.isDonate = false;
                this.isOther = false;
            },
            petLicense() {
                this.isHome = false;
                this.isAdoption = false;
                this.isIntake = false;
                this.isPetLicense = true;
                this.isMicrochip = false;
                this.isServiceRequest = false;
                this.isMedical = false;
                this.isDisposal = false;
                this.isDonate = false;
                this.isOther = false;
            },
            renewPetLicense(){
                this.isHome = false;
                this.isAdoption = false;
                this.isIntake = false;
                this.isPetLicense = false;
                this.isMicrochip = false;
                this.isServiceRequest = false;
                this.isMedical = false;
                this.isDisposal = false;
                this.isDonate = false;
                this.isOther = false;
            },
            microchip(){
                this.isHome = false;
                this.isAdoption = false;
                this.isIntake = false;
                this.isPetLicense = false;
                this.isMicrochip = true;
                this.isServiceRequest = false;
                this.isMedical = false;
                this.isDisposal = false;
                this.isDonate = false;
                this.isOther = false;
            },
            serviceRequest(){
                this.isHome = false;
                this.isAdoption = false;
                this.isIntake = false;
                this.isPetLicense = false;
                this.isMicrochip = false;
                this.isServiceRequest = true;
                this.isMedical = false;
                this.isDisposal = false;
                this.isDonate = false;
                this.isOther = false;
            },

            medical(){
                this.isHome = false;
                this.isAdoption = false;
                this.isIntake = false;
                this.isPetLicense = false;
                this.isMicrochip = false;
                this.isServiceRequest = false;
                this.isMedical = true;
                this.isDisposal = false;
                this.isDonate = false;
                this.isOther = false;
            },

            disposal(){
                this.isHome = false;
                this.isAdoption = false;
                this.isIntake = false;
                this.isPetLicense = false;
                this.isMicrochip = false;
                this.isServiceRequest = false;
                this.isMedical = false;
                this.isDisposal = true;
                this.isDonate = false;
                this.isOther = false;
            },

            donate(){
                this.isHome = false;
                this.isAdoption = false;
                this.isIntake = false;
                this.isPetLicense = false;
                this.isMicrochip = false;
                this.isServiceRequest = false;
                this.isMedical = false;
                this.isDisposal = false;
                this.isDonate = true;
                this.isOther = false;
            },

            other(){
                this.isHome = false;
                this.isAdoption = false;
                this.isIntake = false;
                this.isPetLicense = false;
                this.isMicrochip = false;
                this.isServiceRequest = false;
                this.isMedical = false;
                this.isDisposal = false;
                this.isDonate = false;
                this.isOther = true;
            }
        },
        props: {
            site: String
        },
        components: {
            CategoryButton
        }
    }
</script>

<style scoped>``

    .Action_Bar {
        background-color: #3f4041;
        color: #ffffff;
    }
    .cover {
        background: linear-gradient(45deg, #3f4041, #3e88d1)
    } 

    .button {
        background-color: #3f4041;
        border-radius: 25;
        color: white;
        font-size: 40%;
        font-weight: bold;
        padding-top: 7em;
        letter-spacing: 0;
    }

    .Button {
        background: linear-gradient(135deg, #d3d3d3 5%, #ffffff);
        border-radius: 25;
        font-size: 40%;
        font-weight: bold;
        padding-top: 7em;
        letter-spacing: 0;
    }

    .ButtonSelected {
        color: white;
        border-radius: 25;
        font-size: 40%;
        font-weight: bold;
        padding-top: 7em;
        letter-spacing: 0;
    }

    .infoTextH {
        background-color: transparent;
        font-size: 45%;
        text-align: left;
        color: black;
    }

    .infoText {
        background-color: transparent;
        font-size: 40%;
        text-align: left;
        color: white;
        font-display: block;
    }

    .titleText {
        background: transparent;
        font-size: 60%;
        color: white;
        text-align: center;
        padding-top: 10%;
    }

    .titleText1 {
        background: transparent;
        font-size: 60%;
        color: white;
        text-align: left;
        padding-top: 10%;
    }

</style>
