<template>
  <Page>
  
    <ActionBar title="Ticket Processing" class="Action_Bar"/>
    <GridLayout columns="*,2*,*" rows="*" class="cover">
      <ScrollView orientation="vertical" col="1">
        <PreviousNextView>
        <StackLayout orientation="vertical" Spacing=100 class="scroll">

          <Label text="First name:" class="text"/>
          <TextField ref="first_Name" v-model="first_Name" class="input" maxLength="20" 
            returnKeyType="next" @returnPress="nextField('first_Name')"/>

           <Label text="Last name:" class="text"/>
          <TextField ref="last_Name" v-model="last_Name" class="input" maxLength="20" 
            returnKeyType="next" @returnPress="nextField('last_Name')"/>

          <Label text="Phone number:" class="text"/>
          <GridLayout columns="*,2*,*,2*,*,3*">
            <Label text="(" class="phone" col="0"/>
            <TextField ref="phone1" v-model="phone1" keyboardType="phone" maxLength="3" class="input" 
              returnKeyType="next" @focus="nextField(phone1)" @returnPress="nextField('phone1')" col="1"/> 
            <Label text=")" class="phone" col="2"/>
            <TextField ref="phone2" v-model="phone2" keyboardType="phone" maxLength="3" class="input" 
              returnKeyType="next" @returnPress="nextField('phone2')" col="3"/> 
            <Label text="-" class="phone" col="4"/>
            <TextField ref="phone3" v-model="phone3" keyboardType="phone" maxLength="4" class="input" 
              returnKeyType="next" @returnPress="nextField('phone3')" col="5"/> 
          </GridLayout>

          <Label text="Email:"  class="text"/>
          <TextField ref="email" v-model="email" keyboardType="email" class="emailInput" 
            returnKeyType="done" @returnPress="submitTicket"/>

          <!-- <Label text="What are you here for?" class="text"/>
          <TextField v-model="query" class="input"/>
          -->
          <Label text="Reason For Visit:"  class="text"/>
          <Label class="autoInput">{{reasonForVisit}}</Label>
          <Label text=" "  class="text"/>
          <Button @tap="submitTicket" text="Submit Ticket" class="button"/>
        
        </StackLayout>
        </PreviousNextView>
      </ScrollView>
    </GridLayout>
  </Page>
</template>

<script>
import  { mapState, mapActions, mapMutations } from 'vuex'
import Home from './Home.vue'

export default {
  props: ["reasonForVisit"],
  data () {
    return {
      first_Name: "",
      last_Name: "",
      phone1: "",
      phone2: "",
      phone3: "",
      // name: '',
      email:"",
      home: Home,
      test1: 'test',
      //query: String,
      limit: 0,
      // iqKeyboard: IQKeyboardManager,
    }
  },
  methods: {
    ...mapActions(["addTicket"]),
    // this.setTicketInfo(object), where object contains phone, name, query, comment properties,
    submitTicket () {
      this.$navigateTo(this.home)
      this.addTicket({
        //name: this.name,
        //phone: this.phone,
        //query: this.query,
        //location: this.location
        //
        user_id: 1,
        win_id: 0,
        time_created: new Date(),
        time_serviced:"not serviced",
        first_name: this.first_Name,
        last_name: this.last_Name,
        phone: this.phone1 + this.phone2 + this.phone3,
        email: this.email,
        reason_of_visit: this.reasonForVisit,
        loc_id: this.location,
        
      })
      // console.log("hi")
      // this.$navigateTo(this.home)
    },
    nextField(input){
      if(input == "first_Name"){
        this.$refs.last_Name.nativeView.focus();
        console.log(this.reasonForVisit)
      }
      else if(input == "last_Name"){
        this.$refs.phone1.nativeView.focus();
      }
      else if(input == 'phone1'){
        this.$refs.phone2.nativeView.focus();
      }
      else if(input == 'phone2'){
        this.$refs.phone3.nativeView.focus();
      }
      else if(input == 'phone3'){
        this.$refs.email.nativeView.focus();
      }
    },
  },
  computed: {
    ...mapState(['userTicket', 'approvedTicket', 'location'])
  },
  watch: {
    approvedTicket(newVal) {
     // if (this.limit < 1) {

          alert({
            title: "Ticket Submitted",
            message: "Hello " + newVal.first_name + ", you're ticket # is " + newVal.tic_id,
            okButtonText: "OK"
          })

        }
        //this.limit++
      }
  
}
</script>

<style scoped>

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

.input {
  background: white;
  color: black;
  border-radius: 15;
  font-size: 50%;
  font-weight: bold;
}

.autoInput {
  background:rgb(177, 177, 177);
  color: black;
  border-radius: 15;
  font-size: 50%;
  font-weight: bold;
}

.emailInput {
  background: white;
  color: black;
  border-radius: 15;
  font-size: 50%;
  font-weight: bold;
}

.text {
  color: white;
  font-size: 30%;
  font-weight: bold;
  padding-top: 7em;
  letter-spacing: 0;
}

.phone {
  color: white;
  background: none;
  font-size: 50%;
  font-weight: bold;
  text-align: center;
}

.phoneInput {
  background: white;
  color: black;
  border-radius: 25;
  font-size: 50%;
  font-weight: bold;
  text-align: center;
}

.scroll {
  padding-bottom: 500px;
}

</style>
