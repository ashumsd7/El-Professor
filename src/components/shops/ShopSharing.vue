<template>
    <div>
               <ShareNetwork
    network="facebook"
    class='social-sharing me-2'
    url="https://www.charawan.in"
    :title="prepareTitle"
    :description="prepareDescription"
    :quote="prepareQuote"
    hashtags="charawan,charawan.in,DigitalCharawan,Mera_Charawan"
  >
     <img class="me-1" src="../../assets/facebookshare.png" alt="" srcset="" />
</ShareNetwork>
    <ShareNetwork
    class='social-sharing'
    network="WhatsApp"
    url="https://www.charawan.in"
    :title="prepareTitle"
    :description="prepareDescription"
    quote="WDDDDDDDDDDDDDDD"
    hashtags="charawan,charawan.in,DigitalCharawan,Mera_Charawan"
  >
    <img class="me-1" src="../../assets/whatsappshare.png" alt="" srcset="" />
</ShareNetwork>

<small class="d-block fw-bold text-muted share-text">शेयर करें  
</small>
    </div>
</template>

<script>
    export default {
        // props:['number1','number2','name','shopName', 'shopAddress', 'villageName']
        props:['data'],
        computed:{
          prepareTitle(){
              return `👉 *${this.data.shopName}* :  ${this.data.owenerName} : की जानकारी   `
          },
      
          prepareDescription(){
            return `🌐 ये जानकारी आपको *डिजिटल गांव चरावां* की वेबसाइट  से भेजी जा रही है | 
*☎️ दुकान /सर्विस का नंबर है* : ${this.prepareNumber1} ${this.prepareNumber2}  
*🏠 पता है* : ${this.data.villageName} , ${this.data.shopAddress} 
${this.prepareService} |
⭐ पाएं 150 से ज्यादा दुकानों और सर्विस के नंबर, अधिक जानकारी के लिए *चरावां की वेबसाइट* पर जाएं आपका दिन अच्छा रहे |
 🤝 धन्यवाद 🤝`
          },

            prepareNumber1(){
            
           let number= this.data.mobileNumber.split('');
            number = number.splice(7,10).join('')
           return number
          },
          prepareNumber2(){
            
            if(this.data.mobileNumber2!='tel:+91'){
               let number= this.data.mobileNumber2.split('');
            number = number.splice(7,10).join('')
           return number
            }
            else{
              return ''
            }
          },
          prepareQuote(){
            return this.prepareTitle + this.prepareDescription + this.prepareService
          },
          prepareService(){
            if(this.data.shopInfo!=''){
              return `👨‍🔧 *सेवाएं:* ${this.data.shopInfo}`
            }
            else{
              return ''
            }
          }
        }
    }
</script>

<style scoped>
.share-text{
  margin-left: -5px;
}
</style>