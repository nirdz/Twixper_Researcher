<template>
    <div class="container">
        <b-row>
            <b-col>
                <h1 class="title" :style="titleStyle">{{title}}</h1>
            </b-col>
        </b-row>
        <hr>
        <div class="bg"></div>
    </div>    
</template>

<script>
export default {
    props:{
        title:{
            type: String,
            required: true
        },
        textAlign:{ //Center for short titles, left for long titles
            type: String,
            required: false,
            default: "center"
        }
    },
    data(){
        return{
            titleStyle:{
                textAlign: this.textAlign
            }
        }
    },
    created(){
        if(this.textAlign === "center"){
            this.titleStyle.left= "-30px";
        }
    }    
}
</script>

<style lang="scss" scoped>
.container{
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    min-height: 300px;
    max-width: 370px;
    padding: 0;
}
.bg{
    position: absolute;
    top: 80px;
    min-height: 213px;
    min-width: 368px;
    max-width: 368px; 
    padding: 0;
    background: linear-gradient(0deg, rgba(217,252,252,0.4) 0%, rgba(203,255,255,1) 45%, rgba(217,252,252,0.7) 90%);
    clip-path: polygon(0 0, 0 100%, 100% 0); //Triangle
    z-index: -1;
}
.row{
    -ms-transform: rotate(330deg); // IE 9
    transform: rotate(330deg);
}
.col, .row{
    padding: 0;
}
.title{
    /* To make the text grow upwards */
    position: absolute;
    bottom: -130px;
    
    //text-align: left;
    min-width: 320px;
    max-width: 320px;
}
hr{
    margin: 0;
    position: absolute;
    left: -25px;
    top: 185px;
     -ms-transform: rotate(330deg); // IE 9
    transform: rotate(330deg);
    width: 425px;
    //min-width: 40%;
    //max-width: 40%;
    border-width: 0 0 14px 0;
    border-style: solid;
    border-image: linear-gradient(0deg, rgba(58, 67, 145, 0.5) 0%, rgba(34,193,195,0.5) 57%)
    30 round;
}

@media (max-width: 1120px){
  .container{
    display: none;
  }
}
</style>