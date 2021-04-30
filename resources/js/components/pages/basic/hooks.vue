<template>
	<div>
		<h1>This is hooks view from {{name}}</h1>
		<h2 ref="myname"> {{name}}</h2>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				name : 'Pooja'
			}
		},
		beforeCreate(){
			console.log("Before Create");
		},
		created(){
			console.log('This is available for only me',this.name)
		},
		mounted(){
			console.log(this.$refs.myname);
		}

	} 

</script>