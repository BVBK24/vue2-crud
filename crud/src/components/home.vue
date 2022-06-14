<template>
    <div class="home">
        <div class="container-fluid">
            <div class="row bg-dark">
                <div class="col-lg-12">
                    <p class="text-center text-light display-4 pt-2" style="font-size:25px;">Crud application using vue</p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row mt-3">
                <div class="col-lg-6">
                    <h3 class="text-info">Registered Users</h3>
                </div>
                <div class="col-lg-6">
                    <button @click="$router.push('/home/create')" class="btn btn-info" style="float:right;">
                        <i class="fa fa-user"></i>&nbsp;&nbsp;Add User
                    </button>
                </div>
            </div>
            <hr class="bg-dark">
            <div class="alert alert-danger" v-if="errorMsg">
                Deleted
            </div>
            <div class="alert alert-success" v-if="successMsg">
                Success
            </div> 

            <!-- table structure-->

            <div class="row">
                <div class="col-lg-12">
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr class="text-center bg-info text-ligth">
                                <th>ID</th>
                                <th>Name</th>
                                <th>Mail</th>
                                <th>Phone</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="obj in studentDetailsArray" v-bind:key="obj.id" class="text-center text-ligth">
                                <td>{{obj.id}}</td>
                                <td>{{obj.name}}</td>
                                <td>{{obj.mail}}</td>
                                <td>{{obj.phone}}</td>
                                <td><button @click="$router.push('/home/update/'+obj.firebaseId)"><i class="fa fa-edit"></i></button></td>
                                <!-- <td><router-link :to="`/home/update/+{obj.id}`"><i class="fa fa-edit"></i></router-link></td> -->
                                <td><button><i class="fa fa-trash" @click="deleteInput(obj.firebaseId)" style='color: red'></i></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import nameRef from './firebase'
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
        errorMsg:false,
        successMsg:false,
        studentDetails: null,
        studentDetailsArray:[]
    }
  },
//   firebase:{
//       student:nameRef
//   },
  mounted: function(){
      this.fetchDetails()
  },
  methods:{
      deleteInput (item) {
          axios.delete('https://vuecrud2-default-rtdb.firebaseio.com/'+'/requests/'+item+'.json/').then((response) =>{

             console.log(response)
             this.errorMsg=true
            this.fetchDetails()
        //  nameRef.child(item).remove()
          })
      },
      fetchDetails:async function(){
          this.studentDetailsArray=[];
          fetch('https://vuecrud2-default-rtdb.firebaseio.com/'+'/requests'+'.json').then(async (response)=>{
          this.studentDetails = await response.json();
          console.log(this.studentDetails);
        //   for(let i =0 ; i<this.studentDetails.length; i++){
        //       console.log(this.studentDetails[i])
              for(var key in this.studentDetails){
                  this.studentDetails[key]["firebaseId"] = key;
                  this.studentDetailsArray.push(this.studentDetails[key])
              }
              })
          
      }
  }
  
}
</script>
