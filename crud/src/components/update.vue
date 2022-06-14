<template>
    <div class="update">
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
                        <h3 class="text-info">Update User</h3>
                    </div>
                </div>
                <hr class="bg-dark">

                <!-- table structure-->

                <div class="row">
                    <div class="col-lg-6 m-auto">
                        <div class="card mt-2">
                            <div class="card-header">
                                <h3 class="text-center  display-9 pt-2" style="font-size:25px;">Update User</h3>
                            </div>
                            <div class="card-body"> 
                                <form method="post" v-on:submit.prevent='post'>
                                    <div class="form-group">
                                        <label for="idInput">ID</label>
                                        <input type="text" id="idInput" class="form-control" v-model="insert.id">
                                    </div><br>
                                    <div class="form-group">
                                        <label for="nameInput">Name</label>
                                        <input type="text" id="nameInput" class="form-control" v-model="insert.name">
                                    </div><br>
                                    <div class="form-group">
                                        <label for="mailInput">Mail</label>
                                        <input type="text" id="mailInput" class="form-control" v-model="insert.mail">
                                    </div><br>
                                    <div class="form-group">
                                        <label for="phoneInput">Phone</label>
                                        <input type="text" id="phoneInput" class="form-control" v-model="insert.phone">
                                    </div><br>
                                    <button type="submit" class="btn btn-info"><i class="fa fa-pencil-square-o"></i>&nbsp;&nbsp;Update</button>
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
import axios from 'axios'
export default {
  name: 'update',
  data(){
      return {
          id:null,
          insert:null

        }

    },
    methods: {
        post:function() {
            let obj = {};

            let id=this.id

            obj[""+id] = this.insert;

            axios.patch('https://vuecrud2-default-rtdb.firebaseio.com/'+'/requests/'+id+'.json/',this.insert).then((response) =>{

             console.log(response)
             this.$router.push('/home')

             //this.submitted = true;  

            })

        }

    },  
    mounted: function(){

        this.id=this.$route.params.id;

        console.log(this.id)

        axios.get('https://vuecrud2-default-rtdb.firebaseio.com/'+'/requests'+'.json/').then((response) =>{

        var resp=response.data;

        for(var key in resp){

        if(key === this.id){

        this.insert = resp[key];

        }

        }

        //this.formatqueryDetails(response.data);

        console.log(response)

        console.log(this.detail) 
        })
    }
}
</script>