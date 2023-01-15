<template>
  <!-- <div class="box">
    <h1>Saborei nossas Sobremesas</h1>
    <div class="box box_produto">
      <div></div>
    </div>
  </div> -->
  <ItemProduto :tipo="categoria"/>
</template>

<script>
import ItemProduto from '@/components/ItemProduto.vue'

export default {
  data (){
    return{
      categoria:'sobremesas'
    }
  },
   
  name:'SobremesaView',
  components:{
    ItemProduto
  }
}
</script>
