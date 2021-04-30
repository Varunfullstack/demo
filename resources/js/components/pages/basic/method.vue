<template>
	<div  >
		Counter : {{counter}}
	    <button @click='updateCounter(1)' >Incriment</button>
	    <button @click='updateCounter(-1)'>Decriment</button>
	    <div v-for='(blog,i) in blogs' :key="i" v-if='blogs.length'>
	   	   <h2>{{blog.title}}</h2>
	       <p>{{blog.post}}</p>
	   	
	    </div>
	    <div>
	    	<p v-if="showIn">Yes</p>
	    	<p v-else="!showIn">No</p>
	    	<button @click='showIn= !showIn'>Change</button>
	    </div>
	</div>
</template>


<script>
	export default{
		data(){
			return{
			    counter : 0,
			    blogs : [],
			    showIn : true

			}
		},
		methods:{
			updateCounter(number){
				if(this.counter<=0 && number==-1){
					return 0;

				}else{
                    return this.counter += number;
				}
			}
		},
		created(){
			this.counter = 100;
			let posts = [{title:"First",post:'First Post'},{title:"Second",post:'Second Post'},{title:"Third",post:'Third Post'},{title:"Fourth",post:'Fourth Post'}];
			this.blogs = posts;
		},
	}
</script>