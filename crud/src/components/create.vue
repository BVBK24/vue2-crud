<template>
    <div id="create">
            <div class="container-fluid">
                <div class="row bg-dark">
                    <div class="col-lg-12">
                        <p class="text-center text-light display-4 pt-2" style="font-size:25px;">Crud application using vue</p>
                    </div>
                </div>
            </div>
            <div class="container bg-light">
                <div class="row mt-3">
                    <div class="col-lg-12">
                        <h3 class="text-info">Register User</h3>
                    </div>
                </div>
                <hr class="bg-dark">

                <div class="row bg-light">
                    <div class="col-lg-6 m-auto">
                        <div class="card mt-2">
                            <div class="card-header">
                                <h3 class="text-center  display-9 pt-2" style="font-size:25px;">Create User</h3>
                            </div>
                            <div class="card-body"> 
                                <form method="post" v-on:submit.prevent='post'  novalidate="true">
                                    <p v-if="error.length"><b>Please correct the following errors</b>
                                    <ul><li v-for="er in error" v-bind:key="er" style="color:red">{{er}}</li></ul></p> 
                                    <div class="form-group">
                                        <label for="idInput">ID</label>
                                        <input type="text" id="idInput" class="form-control" placeholder="ID" v-model="insert.id"/>
                                    </div><br>
                                    <div class="form-group">
                                        <label for="nameInput">Name</label>
                                        <input type="text" id="nameInput" class="form-control" placeholder="Name" v-model="insert.name">
                                    </div><br>
                                    <div class="form-group">
                                        <label for="mailInput">Mail</label>
                                        <input type="text" id="mailInput" class="form-control" placeholder="Mail" v-model="insert.mail">
                                    </div><br>
                                    <div class="form-group">
                                        <label for="phoneInput">Phone</label>
                                        <input type="text" id="phoneInput" class="form-control" placeholder="Phone" v-model="insert.phone">
                                    </div><br>
                                    <button type="submit" class="btn btn-info"><i class="fa fa-paper-plane"></i>&nbsp;&nbsp;Submit</button> 
                                </form>
                            </div>
                            <div class="card-footer"></div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
export default {
  name: 'create',
  data () {
    return {
        error:[],
        insert:{
            id:'',
            name:'',
            mail:'',
            phone:'',
            
        },
        submitted:false,
    }
  },
    methods:{
    post:function() {
        // axios.post('https://vuecrud-f31d2-default-rtdb.firebaseio.com/',this.insert).then((data) =>{
        // console.log(data);
        // this.submitted = true;  
        // })
        console.log(this.checkForm())
        if(this.checkForm()){
        const response = fetch('https://vuecrud2-default-rtdb.firebaseio.com/'+'/requests'+'.json',{
            method: 'POST',
            body:   JSON.stringify(this.insert)
        }).then(()=>{this.$router.push('/home')})
        }
    
    

    },
    checkForm:function(){
        this.error=[];
        if(!this.validNumber(this.insert.id)){
            this.error.push('id required number only');
        }
        if(!this.validString(this.insert.name)){
            this.error.push('name required');
        }
        if(!this.validEmail(this.insert.mail)){
            this.error.push('Enter valid mail');
        }
        if(!this.validphone(this.insert.phone)){
            this.error.push('Enter valid phone');
        }
        // e.preventDefault();
        console.log(this.error)
        if(this.error.length!=0){
            return false;
        }
        return true;
        console.log(error.length)

        
    },
    validEmail:function(mail){
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(mail);
    },
    validphone:function(phone){
        var re=/^\d{10}$/;
        return re.test(phone);
    },
    validNumber:function(id){
        var re=/^(?!(0\d))\d{1,4}$/;
        return re.test(id);
    },
    validString:function(name){
        var re=/^[a-zA-z]+([\s][a-zA-Z]+)*$/;
        return re.test(name);
    }
  }
}

</script>