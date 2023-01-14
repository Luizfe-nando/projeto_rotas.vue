<template>
  <!-- <div class="box">
    <h1>Saborei nossas Sobremesas</h1>
    <div class="box box_produto">
      <div></div>
    </div>
  </div> -->
  <ItemSobremesa/>
</template>

<script>
import ItemSobremesa from '@/components/ItemSobremesa'

export default {
  data (){
    return{
      
    }
  },
   
  name:'SobremesaView',
  components:{
    ItemSobremesa
  }
}
</script>
